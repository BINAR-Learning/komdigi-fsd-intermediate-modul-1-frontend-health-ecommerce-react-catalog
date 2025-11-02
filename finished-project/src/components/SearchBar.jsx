import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [keyword, setKeyword] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsSearching(true);
    await onSearch(keyword);
    setIsSearching(false);
  };
  
  const handleClear = () => {
    setKeyword('');
    onSearch('');
  };
  
  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="relative">
        <input 
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Cari produk kesehatan... (contoh: vitamin C, paracetamol)"
          className="w-full px-4 py-3 pl-12 pr-24 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
        
        {/* Search Icon */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          🔍
        </div>
        
        {/* Clear Button */}
        {keyword && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-20 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        )}
        
        {/* Search Button */}
        <button 
          type="submit"
          disabled={isSearching || !keyword.trim()}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-1.5 rounded-md hover:bg-blue-600 disabled:bg-gray-300 transition"
        >
          {isSearching ? '...' : 'Cari'}
        </button>
      </div>
    </form>
  );
}

export default SearchBar;

