# komdigi-fsd-intermediate-modul-1-frontend-health-ecommerce-react-catalog

> **React Product Catalog dengan TailwindCSS & Backend Integration**

[![React](https://img.shields.io/badge/React-18+-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.0-purple)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-cyan)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

Product catalog frontend untuk Health E-Commerce - built dengan React 18, Vite, TailwindCSS, dan terintegrasi dengan backend API.

---

## Apa yang Ada di Repository Ini?

Repository ini berisi **2 versi project**:

```
komdigi-fsd-intermediate-modul-1-frontend-health-ecommerce-react-catalog/
├── README.md (Ini file yang kamu baca)
├── starter-project/     #  Untuk practice (dengan TODO)
│   ├── README.md
│   ├── package.json
│   ├── src/
│   │   ├── components/ (with TODOs)
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── index.html
└── finished-project/    #  Complete implementation
    ├── README.md
    ├── package.json
    ├── src/
    │   ├── components/ (7 complete components!)
    │   ├── services/
    │   ├── App.jsx
    │   └── main.jsx
    └── index.html
```

**Pilih mana?**

- **Starter** - Untuk **belajar React step-by-step** (RECOMMENDED!)
- **Finished** - Untuk **reference** implementation

---

## Quick Start (Untuk Newbie)

### Prerequisites

Sebelum mulai, pastikan backend API tersedia di `http://localhost:5000`.

PENTING - Backend (Modul 5):

Jangan lupa running project final backend dari Modul 5 di backend modul program intermediate ini. Backend yang harus digunakan adalah `komdigi-fsd-intermediate-modul-5-backend-health-ecommerce-external-integration` dari folder `backend/health-ecommerce-external-integration/finished-project`.

Langkah-langkah setup backend:

1. Masuk ke folder backend Modul 5:

```bash
cd backend/health-ecommerce-external-integration/finished-project
```

2. Install dependencies:

```bash
npm install
```

3. Setup file `.env`:

   - Buat file `.env` di folder `finished-project` (copy dari `.env.example` jika ada)
   - Set minimal environment variables berikut:
     ```env
     NODE_ENV=development
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/health-ecommerce
     JWT_SECRET=your-super-secret-jwt-key-change-in-production-min-32-characters
     JWT_EXPIRES_IN=24h
     ```
   - Untuk fitur tambahan (optional), bisa set:
     - `GOOGLE_AI_API_KEY` (untuk AI chatbot)
     - `CLOUDINARY_*` (untuk image upload)
     - `MIDTRANS_*` (untuk payment)
     - `SMTP_*` (untuk email service)
     - `KEMENKES_API_KEY` (untuk Kemenkes integration)

4. Pastikan MongoDB running:

   - Tidak perlu menjalankan `mongod` jika tidak jalan di localmu
   - Pastikan saja MongoDB jalan dengan caramu, misalnya:
     - Membuka MongoDB Compass dan akses database yang kamu tuju (misalnya local db mu)
     - Jika MongoDB Compass sudah bisa connect ke `mongodb://localhost:27017`, berarti MongoDB sudah jalan
     - Atau jika pakai MongoDB Atlas, pastikan cluster sudah active
     - Intinya: Pastikan MongoDB bisa diakses sesuai MONGODB_URI yang kamu set di .env

5. Seed data (optional, jika ada):

```bash
npm run seed
```

6. Start backend (keep running di terminal terpisah):

```bash
npm run dev
```

7. Verifikasi backend running:

   - Backend akan tersedia di `http://localhost:5000`
   - Test dengan: `curl http://localhost:5000/health` atau buka di browser
   - Pastikan response success

8. Set environment variable di frontend:
   - Di file `.env` di frontend project (jika ada), atau langsung di code, pastikan URL backend sama dengan yang dirun
   - Default: `http://localhost:5000/api`
   - Jika backend running di port lain, update URL di `src/services/api.js` atau `src/App.jsx`

Jika instruksi di repo backend berbeda, ikuti README di repo tersebut.

### Option 1: Practice dengan Starter Project

```bash
# 1. Clone repository ini
git clone https://github.com/your-username/komdigi-fsd-intermediate-modul-1-frontend-health-ecommerce-react-catalog.git

# 2. Masuk ke folder repository
cd komdigi-fsd-intermediate-modul-1-frontend-health-ecommerce-react-catalog

# 3. Masuk ke starter-project
cd starter-project

# 4. Install dependencies
npm install
# Tunggu ~1-2 menit

# 5. Start development server
npm run dev

# Server akan running di http://localhost:5173
```

**Expected Output:**

```
VITE v4.5.0  ready in 523 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

**6. Buka browser:** `http://localhost:5173`

Kamu akan lihat starter template dengan TODOs!

### Option 2: Lihat Complete Implementation

```bash
# 1. Clone repository (jika belum)
git clone https://github.com/your-username/komdigi-fsd-intermediate-modul-1-frontend-health-ecommerce-react-catalog.git

# 2. Masuk ke folder repository
cd komdigi-fsd-intermediate-modul-1-frontend-health-ecommerce-react-catalog

# 3. Masuk ke finished-project
cd finished-project

# 4. Install dependencies
npm install

# 5. Start development server
npm run dev

# 6. Buka http://localhost:5173
```

**Sebelum test, pastikan backend running:**

Pastikan backend Modul 5 (`komdigi-fsd-intermediate-modul-5-backend-health-ecommerce-external-integration`) sudah running. Lihat instruksi detail di bagian "PENTING - Backend (Modul 5)" di atas.

Backend harus running di `http://localhost:5000` (atau sesuai dengan yang kamu set di `.env` backend). Pastikan URL backend di frontend sama dengan URL backend yang dirun.

**Expected:** Complete product catalog with search, filter, responsive layout!

---

## Apa yang Akan Kamu Bangun?

**Health Product Catalog** - Frontend untuk Health E-Commerce!

### Features:

- **Product Listing** - Fetch real data dari backend localhost:5000
- **Search** - Search products by name/description
- **Category Filter** - Vitamin, Supplement, Medicine, Equipment
- **Responsive** - Works di mobile, tablet, desktop
- **Loading States** - Spinner saat fetch data
- **Error Handling** - User-friendly error messages
- **Beautiful UI** - Modern design dengan Tailwind

### Tech Stack:

- **React 18** - UI library
- **Vite** - Build tool (super fast!)
- **TailwindCSS** - Utility-first CSS
- **Axios** - HTTP client untuk API calls

---

## Struktur Starter Project

```
starter-project/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── ProductCard.jsx        #  TODO: Product card component
│   │   ├── CategoryFilter.jsx     #  TODO: Category filter buttons
│   │   ├── SearchBar.jsx          #  TODO: Search input
│   │   └── LoadingSpinner.jsx     #  Loading component (ready!)
│   ├── services/
│   │   └── api.js                 #  TODO: Axios API calls
│   ├── App.jsx                    #  TODO: Main app logic
│   ├── main.jsx                   #  Entry point (ready!)
│   └── index.css                  #  Tailwind imports (ready!)
├── index.html                      #  HTML template
├── package.json                    # Dependencies
├── tailwind.config.js              #  Tailwind config
└── vite.config.js                  #  Vite config
```

**TODOs:**

- [ ] `services/api.js` - Setup Axios dengan baseURL localhost:5000
- [ ] `components/ProductCard.jsx` - Create product card dengan props
- [ ] `components/CategoryFilter.jsx` - Category buttons dengan state
- [ ] `components/SearchBar.jsx` - Search form dengan API call
- [ ] `App.jsx` - Integrate all components, fetch products

---

## Struktur Finished Project

```
finished-project/
├── public/
├── src/
│   ├── components/
│   │   ├── ProductCard.jsx        #  Complete dengan hover effects
│   │   ├── CategoryFilter.jsx     #  Active state & icons
│   │   ├── SearchBar.jsx          #  Search dengan loading state
│   │   ├── LoadingSpinner.jsx     #  Animated spinner
│   │   ├── ErrorMessage.jsx       #  Error display
│   │   └── Header.jsx             #  App header
│   ├── services/
│   │   └── api.js                 #  Complete API service
│   ├── App.jsx                    #  Full integration
│   ├── main.jsx                   #  Entry point
│   └── index.css                  #  Tailwind + custom styles
├── package.json
└── ... config files
```

**All features implemented:**

- Real-time product fetching
- Search functionality
- Category filtering
- Responsive grid layout
- Loading & error states
- Beautiful Tailwind styling

---

## Testing

### 1. Test Backend Connection

```bash
# Make sure backend running:
# Pastikan backend Modul 5 sudah running di http://localhost:5000
curl http://localhost:5000/api/products

# Should return JSON with products
# Jika error, pastikan:
# 1. Backend sudah running (npm run dev di folder backend/health-ecommerce-external-integration/finished-project)
# 2. MongoDB sudah running dan bisa diakses
# 3. File .env di backend sudah diset dengan benar
# 4. Port 5000 tidak digunakan aplikasi lain
```

### 2. Test Frontend

```bash
# Start frontend (di starter atau finished):
npm run dev

# Open: http://localhost:5173
```

### 3. Test Features

- [ ] Products load dari backend
- [ ] Search bar filters products
- [ ] Category buttons filter by category
- [ ] Layout responsive (resize window)
- [ ] Loading spinner shows saat fetch
- [ ] Error message if backend offline

---

## Perbedaan Starter vs Finished

| Aspect               | Starter                 | Finished                         |
| -------------------- | ----------------------- | -------------------------------- |
| **Components**       | Basic structure + TODOs | Complete dengan all features     |
| **API Integration**  | Template code           | Working Axios calls              |
| **Styling**          | Minimal Tailwind        | Production-ready design          |
| **State Management** | Basic useState          | Multiple states coordinated      |
| **Error Handling**   | Not implemented         | Comprehensive handling           |
| **Responsive**       | Basic grid              | Fully responsive (4 breakpoints) |
| **Loading States**   | Missing                 | Spinner & skeleton screens       |

**Use starter when:**

- Learning React fundamentals
- Want hands-on practice
- Building portfolio projects

**Use finished when:**

- Stuck dan butuh reference
- Want best practice examples
- Learning production patterns

---

## Troubleshooting

### "Failed to fetch products"

**Solusi:**

```bash
# 1. Check backend running
curl http://localhost:5000/health

# 2. If not running, start backend:
cd path/to/backend/finished-project
npm run dev

# 3. Check port correct (5000, not 3000!)
```

### "Module not found: axios"

**Solusi:**

```bash
npm install axios
```

### Tailwind classes tidak working

**Solusi:**

1. Check `tailwind.config.js` content paths
2. Restart dev server: `Ctrl+C` → `npm run dev`
3. Clear browser cache

### "Port 5173 already in use"

**Solusi:**

```bash
# Kill process on port 5173
# Windows: netstat -ano | findstr :5173
# Mac/Linux: lsof -ti:5173 | xargs kill

# Or use different port:
npm run dev -- --port 3001
```

---

## Tips Development

1. **Keep backend running** - Frontend butuh API
2. **Use React DevTools** - Debug components easily
3. **Check Network tab** - See API calls & responses
4. **Console log frequently** - Understand data flow
5. **Hot reload** - Save file auto-updates browser
6. **Component first** - Build & test each component separately

---

## Resources

**Documentation:**

- [React Official Docs](https://react.dev/)
- [Vite Guide](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)

**Tools:**

- [React DevTools Extension](https://react.dev/learn/react-developer-tools)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

---

## Next Steps

After completing this module:

1.  **Test all features** - Search, filter, responsive
2.  **Deploy to Netlify/Vercel** - Share your work!
3.  **Frontend Modul 2** - React Router, React Query, Next.js intro
4.  **Frontend Modul 3** - UI/UX best practices, Playwright
5.  **Customize design** - Make it yours!

---

**Happy Reacting!**

_Frontend Modul 1 - React Fundamentals_  
_Connecting to Health E-Commerce Backend API_

---

** Repository Info:**

- **Name:** `komdigi-fsd-intermediate-modul-1-frontend-health-ecommerce-react-catalog`
- **Type:** React Frontend (Product Catalog)
- **Backend:** Connects to `localhost:5000` (Backend Modul 5: `komdigi-fsd-intermediate-modul-5-backend-health-ecommerce-external-integration`)
- **Structure:** 1 Repo, 2 Folders (starter + finished)
