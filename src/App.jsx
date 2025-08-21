// src/App.jsx
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import NewsList from "./NewsList";

const newsapiKey = import.meta.env.VITE_NEWSAPI_KEY;
const gnewsKey = import.meta.env.VITE_GNEWS_KEY;
const newsdataKey = import.meta.env.VITE_NEWSDATA_KEY;

function App() {
  const [allNews, setAllNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

async function fetchNews() {
  try {
    const responses = await Promise.allSettled([
      fetch(`https://newsapi.org/v2/everything?q=artificial+intelligence&apiKey=${newsapiKey}`).then(r => r.json()),
      fetch(`https://gnews.io/api/v4/search?q=artificial+intelligence&apikey=${gnewsKey}`).then(r => r.json()),
      fetch(`https://newsdata.io/api/1/news?apikey=${newsdataKey}&q=artificial+intelligence&language=en`).then(r => r.json()),
    ]);

    const [newsapi, gnews, newsdata] = responses.map(r => r.status === "fulfilled" ? r.value : null);

    const formattedNews = [
      ...(newsapi?.articles || []).map(a => ({
        title: a.title,
        url: a.url,
        image: a.urlToImage,
        date: a.publishedAt,
        source: "NewsAPI"
      })),
      ...(gnews?.articles || []).map(g => ({
        title: g.title,
        url: g.url,
        image: g.image,
        date: g.publishedAt,
        source: g.source?.name || "GNews"
      })),
      ...(newsdata?.results || []).map(n => ({
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
