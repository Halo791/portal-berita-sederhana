// src/components/NewsCard.jsx
function NewsCard({ item }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="font-semibold text-lg mb-2">
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          {item.title}
        </a>
      </h2>
      <p className="text-sm text-gray-500">
        {new Date(item.date).toLocaleString()} - {item.source}
      </p>
    </div>
  );
}

export default NewsCard;
