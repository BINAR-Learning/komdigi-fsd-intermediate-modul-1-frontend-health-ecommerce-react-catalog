/**
 * Health E-Commerce - Main App Component
 *
 * TODO untuk Peserta:
 * 1. Import useState dan useEffect dari React
 * 2. Import axios untuk API calls
 * 3. Import components (ProductCard, SearchBar, CategoryFilter)
 * 4. Setup state untuk products, loading, error
 * 5. Fetch products dari backend (localhost:5000) saat component mount
 * 6. Implement category filter logic
 * 7. Implement search functionality
 * 8. Render products dalam responsive grid
 */

import { useState, useEffect } from "react";
// TODO: Import axios
// import axios from 'axios';

// TODO: Import components
// import ProductCard from './components/ProductCard';
// import CategoryFilter from './components/CategoryFilter';
// import SearchBar from './components/SearchBar';
// import LoadingSpinner from './components/LoadingSpinner';

function App() {
  // TODO: Setup state
  // const [products, setProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState('All');
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // TODO: Fetch products saat component mount
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get('http://localhost:5000/api/products');
  //       setProducts(response.data.data);
  //       setFilteredProducts(response.data.data);
  //     } catch (err) {
  //       setError('Gagal memuat produk. Pastikan backend running!');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //
  //   fetchProducts();
  // }, []);

  // TODO: Filter products by category
  // useEffect(() => {
  //   if (selectedCategory === 'All') {
  //     setFilteredProducts(products);
  //   } else {
  //     setFilteredProducts(
  //       products.filter(p => p.category === selectedCategory)
  //     );
  //   }
  // }, [selectedCategory, products]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Health E-Commerce
          </h1>
          <p className="text-gray-600 mt-1">
            TODO: Lengkapi component ini untuk fetch & display products
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-yellow-700">
            <strong>Starter Project</strong> - Lengkapi TODOs untuk build
            complete product catalog!
          </p>
          <ul className="mt-2 text-sm text-yellow-600 list-disc list-inside">
            <li>Setup state untuk products & filters</li>
            <li>Fetch data dari localhost:5000/api/products</li>
            <li>Create ProductCard component</li>
            <li>Implement search & category filter</li>
          </ul>
        </div>

        {/* TODO: Render components here */}
      </main>
    </div>
  );
}

export default App;
