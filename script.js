// Config
const API_KEYS = {
    newsapi: 'YOUR_NEWSAPI_KEY',
    gnews: 'YOUR_GNEWS_KEY',
    bing: 'YOUR_BING_KEY'
};

// DOM Elements
const newsContainer = document.getElementById('newsContainer');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

// Fetch news from APIs
async function fetchNews(keyword = 'ai') {
    try {
        // Clear previous news
        newsContainer.innerHTML = '<div class="col-12 text-center">Loading news...</div>';
        
        // Fetch from multiple APIs
        const [newsapiData, gnewsData, bingData] = await Promise.all([
            fetchNewsAPI(keyword),
            fetchGNews(keyword),
            fetchBingNews(keyword)
        ]);
        
        // Combine and sort by date
        const allNews = [...newsapiData, ...gnewsData, ...bingData]
            .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        
        displayNews(allNews);
    } catch (error) {
        console.error('Error fetching news:', error);
        newsContainer.innerHTML = `<div class="col-12 text-center text-danger">Error loading news. Please try again later.</div>`;
    }
}

// API-specific fetch functions
async function fetchNewsAPI(keyword) {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${API_KEYS.newsapi}`);
    return response.data.articles.map(article => ({
        title: article.title,
        url: article.url,
        publishedAt: article.publishedAt,
        source: 'NewsAPI'
    }));
}

async function fetchGNews(keyword) {
    const response = await axios.get(`https://gnews.io/api/v4/search?q=${keyword}&token=${API_KEYS.gnews}`);
    return response.data.articles.map(article => ({
        title: article.title,
        url: article.url,
        publishedAt: article.publishedAt,
        source: 'GNews'
    }));
}

async function fetchBingNews(keyword) {
    const response = await axios.get(`https://api.bing.microsoft.com/v7.0/news/search?q=${keyword}`, {
        headers: { 'Ocp-Apim-Subscription-Key': API_KEYS.bing }
    });
    return response.data.value.map(article => ({
        title: article.name,
        url: article.url,
        publishedAt: article.datePublished,
        source: 'Bing News'
    }));
}

// Display news in the UI
function displayNews(articles) {
    if (articles.length === 0) {
        newsContainer.innerHTML = '<div class="col-12 text-center">No news found.</div>';
        return;
    }

    newsContainer.innerHTML = '';
    
    articles.forEach(article => {
        const date = new Date(article.publishedAt).toLocaleString();
        
        const newsCard = document.createElement('div');
        newsCard.className = 'col-md-4 col-sm-6 news-card';
        newsCard.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text text-muted">
                        <small>${date} • ${article.source}</small>
                    </p>
                    <a href="${article.url}" target="_blank" class="btn btn-sm btn-outline-primary">Read More</a>
                </div>
            </div>
        `;
        
        newsContainer.appendChild(newsCard);
    });
}

// Event Listeners
searchBtn.addEventListener('click', () => {
    const keyword = searchInput.value.trim() || 'ai';
    fetchNews(keyword);
});

// Initial load
fetchNews();