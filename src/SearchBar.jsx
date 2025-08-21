// src/components/SearchBar.jsx
function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search news..."
      className="w-full p-2 mb-4 border rounded-lg"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
