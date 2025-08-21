import NewsCard from "./NewsCard";

function NewsList({ news }) {
  if (news.length === 0) {
    return <p className="text-center text-gray-500">No news found.</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {news.map((item, idx) => (
        <NewsCard key={idx} item={item} />
      ))}
    </div>
  );
}

export default NewsList;
