import { useState } from 'react';

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-48 bg-gray-200">
        <img 
          src={product.imageUrl || 'https://via.placeholder.com/400x300?text=Health+Product'} 
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300?text=No+Image';
          }}
        />
        
        {/* Category Badge */}
        <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          {product.category}
        </span>
        
        {/* Stock Warning Badge */}
        {product.stock < 10 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            {product.stock === 0 ? 'Habis' : `Sisa ${product.stock}`}
          </span>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-800 h-14 line-clamp-2">
          {product.name}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-gray-500 mt-2 h-10 line-clamp-2">
          {product.description}
        </p>
        
        {/* Price & Action */}
        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-2xl font-bold text-blue-600">
              Rp {product.price.toLocaleString('id-ID')}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {product.manufacturer}
            </p>
          </div>
          
          <button 
            className={`
              px-4 py-2 rounded-lg font-medium transition-all duration-200
              ${isHovered 
                ? 'bg-blue-500 text-white shadow-md scale-105' 
                : 'bg-gray-100 text-gray-700'}
              ${product.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            disabled={product.stock === 0}
          >
            {product.stock === 0 ? 'Habis' : isHovered ? '🛒 Beli' : 'Lihat'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

