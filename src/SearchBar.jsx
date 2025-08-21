function SearchBar({ onSearch }) {
  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="🔍 Search AI news..."
        className="w-full md:w-2/3 lg:w-1/2 p-3 rounded-full border shadow focus:ring-2 focus:ring-blue-400 outline-none"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
