function NewsCard({ item }) {
  return (
    <a 
      href={item.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group block rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow bg-white"
    >
      <div className="relative">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
            📷 No Image
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-2 left-2 text-xs text-white bg-black/50 px-2 py-1 rounded">
          {new Date(item.date).toLocaleDateString()} • {item.source}
        </div>
      </div>
      <div className="p-4">
        <h2 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 line-clamp-2">
          {item.title}
        </h2>
      </div>
    </a>
  );
}

export default NewsCard;
