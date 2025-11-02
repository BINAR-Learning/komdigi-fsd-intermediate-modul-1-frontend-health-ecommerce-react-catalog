import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Create axios instance dengan default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000  // 10 seconds
});

// Products API
export const productAPI = {
  getAll: async () => {
    try {
      const response = await api.get('/products');
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },
  
  getById: async (id) => {
    try {
      const response = await api.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  },
  
  search: async (keyword) => {
    try {
      const response = await api.get(`/products?search=${keyword}`);
      return response.data;
    } catch (error) {
      console.error('Error searching products:', error);
      throw error;
    }
  },
  
  filterByCategory: async (category) => {
    try {
      const response = await api.get(`/products?category=${category}`);
      return response.data;
    } catch (error) {
      console.error('Error filtering products:', error);
      throw error;
    }
  }
};

export default api;

