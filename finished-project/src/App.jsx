import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './components/ProductCard';
import CategoryFilter from './components/CategoryFilter';
import SearchBar from './components/SearchBar';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

const API_BASE_URL = 'http://localhost:5000/api';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Fetch all products saat component mount
  useEffect(() => {
    fetchProducts();
  }, []);
  
  // Filter products when category changes
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(p => p.category === selectedCategory)
      );
    }
  }, [selectedCategory, products]);
  
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.get(`${API_BASE_URL}/products`);
      
      console.log('✅ Products loaded:', response.data.count);
      setProducts(response.data.data);
      setFilteredProducts(response.data.data);
      
    } catch (err) {
      console.error('❌ Fetch Error:', err);
      
      if (err.code === 'ERR_NETWORK') {
        setError('Tidak bisa connect ke backend. Pastikan server running di http://localhost:5000');
      } else {
        setError('Gagal memuat produk. Silakan coba lagi.');
      }
    } finally {
      setLoading(false);
    }
  };
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  
  const handleSearch = async (keyword) => {
    if (!keyword.trim()) {
      setFilteredProducts(products);
      return;
    }
    
    try {
      setLoading(true);
      const response = await axios.get(
        `${API_BASE_URL}/products?search=${keyword}`
      );
      setFilteredProducts(response.data.data);
    } catch (err) {
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };
  
  if (loading) {
    return <LoadingSpinner />;
  }
  
  if (error) {
    return <ErrorMessage message={error} onRetry={fetchProducts} />;
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            🏥 Health E-Commerce
          </h1>
          <p className="text-gray-600 mt-1">
            Produk kesehatan terlengkap dan terpercaya
          </p>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} />
        
        {/* Category Filter */}
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        
        {/* Product Count */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-gray-600">
            Menampilkan <span className="font-semibold">{filteredProducts.length}</span> produk
          </p>
          
          {selectedCategory !== 'All' && (
            <button
              onClick={() => setSelectedCategory('All')}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Reset Filter
            </button>
          )}
        </div>
        
        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <div className="text-6xl mb-4">😢</div>
            <p className="text-gray-500 text-lg">
              Tidak ada produk ditemukan
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                fetchProducts();
              }}
              className="mt-4 text-blue-600 hover:text-blue-800"
            >
              Tampilkan semua produk
            </button>
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="bg-white mt-12 border-t">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-600">
          <p>Built with React + Vite + TailwindCSS</p>
          <p className="text-sm mt-1">© 2024 Health E-Commerce - Pusbang Talenta Digital</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

