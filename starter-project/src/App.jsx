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
            Health E-Commerce - Product Catalog
          </h1>
          <p className="text-gray-600 mt-1">
            Starter Project - Lengkapi component ini untuk fetch & display products
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-800 mb-3">
            Welcome to Starter Project!
          </h2>
          <p className="text-blue-700 mb-4">
            Ini adalah starter template untuk belajar. Silakan implementasikan App component sesuai dengan TODO comments di file ini.
          </p>
          <div className="bg-white p-4 rounded border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-2">Langkah selanjutnya:</h3>
            <ol className="list-decimal list-inside space-y-2 text-blue-700 text-sm">
              <li>Buka file <code className="bg-blue-100 px-2 py-1 rounded">src/App.jsx</code></li>
              <li>Ikuti TODO comments untuk implementasi</li>
              <li>Lihat <code className="bg-blue-100 px-2 py-1 rounded">../finished-project/src/App.jsx</code> sebagai reference</li>
              <li>Setup state untuk products & filters</li>
              <li>Fetch data dari localhost:5000/api/products</li>
              <li>Create ProductCard component</li>
              <li>Implement search & category filter</li>
            </ol>
          </div>
          <p className="text-sm text-blue-600 mt-4">
            Baca README.md untuk instruksi lengkap
          </p>
        </div>

        {/* TODO: Render components here */}
      </main>
    </div>
  );
}

export default App;
