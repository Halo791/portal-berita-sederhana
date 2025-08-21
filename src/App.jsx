// src/App.jsx
import { useEffect, useState } from "react";
import SearchBar from "./searchbar";
import NewsList from "./NewsList";

function App() {
  const [allNews, setAllNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

async function fetchNews() {
  try {
    const [newsapi, gnews, newsdata] = await Promise.all([
      fetch(`https://newsapi.org/v2/everything?q=artificial+intelligence&apiKey=382acb61115945c2924df9882d0600c7`).then(r => r.json()),
      fetch(`https://gnews.io/api/v4/search?q=artificial+intelligence&apikey=7f3694621533ada3260b77f62f95ccc0`).then(r => r.json()),
      fetch(`https://newsdata.io/api/1/latest?apikey=pub_deff1af12aa548ae9e061ba11804b121&q=artificial+intelligence`).then(r => r.json()),
    ]);

    const formattedNews = [
      ...newsapi.articles.map(a => ({
        title: a.title,
        url: a.url,
        image: a.urlToImage,
        date: a.publishedAt,
        source: "NewsAPI"
      })),
      ...gnews.articles.map(g => ({
        title: g.title,
        url: g.url,
        image: g.image,
        date: g.publishedAt,
        source: g.source.name || "GNews"
      })),
      ...newsdata.results.map(n => ({
        title: n.title,
        url: n.link,
        image: n.image_url,
        date: n.pubDate,
        source: n.source_id || "NewsData.io"
      }))
    ];

    const sorted = formattedNews.sort((a, b) => new Date(b.date) - new Date(a.date));
    setAllNews(sorted);
    setFilteredNews(sorted);
  } catch (err) {
    console.error("Error fetching news:", err);
  }
}


  function handleSearch(keyword) {
    const filtered = allNews.filter(n => n.title.toLowerCase().includes(keyword.toLowerCase()));
    setFilteredNews(filtered);
  }

  return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
          📰 AI News Update
        </h1>
        <SearchBar onSearch={handleSearch} />
        <NewsList news={filteredNews} />
      </div>
  );
}

export default App;
