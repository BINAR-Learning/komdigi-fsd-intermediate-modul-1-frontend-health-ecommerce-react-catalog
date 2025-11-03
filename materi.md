# ⚛️ Modul 1 – React Fundamentals dengan TailwindCSS

**Unit Kompetensi:** J.620100.005.01 – Mengimplementasikan User Interface

---

## 📚 Daftar Isi

1. [Tentang GitHub Copilot di Modul Ini](#tentang-github-copilot-di-modul-ini)
2. [Pengantar React](#pengantar-react)
3. [Setup Project dengan Vite](#setup-project-dengan-vite)
4. [Konsep Dasar React](#konsep-dasar-react)
5. [Styling dengan TailwindCSS](#styling-dengan-tailwindcss)
6. [Fetching Data dari Backend API](#fetching-data-dari-backend-api)
7. [State Management Dasar](#state-management-dasar)
8. [React Developer Tools](#react-developer-tools)
9. [Mini Project: Health Product Catalog](#mini-project-health-product-catalog)
10. [Ringkasan & Referensi](#ringkasan--referensi)

---

## 🎯 Tujuan Pembelajaran

Halo! Selamat datang di **Frontend Track** dengan React! 🎉

Di Backend Track (Modul 1-5), kamu udah bangun API yang keren. Sekarang saatnya bikin **tampilan yang indah** supaya user bisa interact dengan API kita!

Bayangin deh, semua endpoint API yang udah dibuat (products, auth, AI chatbot, payment) sekarang akan punya **UI yang cantik dan user-friendly**!

Setelah menyelesaikan modul ini, kamu akan mampu:

- ✅ Memahami konsep React (Component, Props, State)
- ✅ Membuat project React modern dengan Vite
- ✅ Styling aplikasi dengan TailwindCSS (utility-first CSS!)
- ✅ Fetching data dari backend API (localhost:5000)
- ✅ Handle user interactions (onClick, onChange, forms)
- ✅ Debug dengan React Developer Tools
- ✅ Build product catalog yang responsive

**🎓 Level:** Intermediate (tapi tenang, kita mulai dari dasar kok!)

---

## 💡 Tentang GitHub Copilot di Modul Ini

Di modul ini, kamu akan tetap coding **bareng GitHub Copilot**! 🤖

**Kapan Pakai Copilot di React?**

- ✅ **Pakai Copilot:** Component structure, boilerplate JSX, event handlers
- ✏️ **Manual Coding:** Business logic, custom styling, state management

**Contoh:**

Aiman ketik:

```jsx
// Create ProductCard component dengan props: name, price, image
```

Copilot suggest:

```jsx
function ProductCard({ name, price, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Rp {price.toLocaleString()}</p>
    </div>
  );
}
```

Keren kan? Tapi kamu tetap harus **pahami** JSX, props, dan styling!

---

## 📖 Pengantar React

### Apa Itu React?

**React** adalah **JavaScript library** untuk membangun user interface (UI). Dibuat oleh Facebook (sekarang Meta) dan dipakai oleh Instagram, Netflix, Airbnb, dan ribuan perusahaan lain!

**Kenapa React Populer?**

- ⚡ **Cepat** - Virtual DOM makes updates super fast
- 🧩 **Component-based** - UI dipecah jadi components reusable
- 🔄 **Reactive** - UI auto-update saat data berubah
- 🌐 **Ekosistem besar** - Banyak library & tools
- 💼 **Job market** - High demand di Indonesia!

**Analogi Sederhana:**

> React itu kayak **LEGO blocks**. Kamu bikin pieces kecil (components), terus rakit jadi rumah besar (aplikasi). Mau ganti satu piece? Gampang! Nggak perlu rebuild semua.

![React Component Tree]()
_Gambar ini menunjukkan aplikasi React terdiri dari components yang nested seperti pohon. Root component di atas, child components di bawah._

🎨 **[Visual Suggestion untuk Ilustrator]**

- Diagram pohon: App → Header, ProductList, Footer
- ProductList → ProductCard, ProductCard, ProductCard
- Setiap box adalah component
- Panah menunjukkan parent-child relationship

### React vs Vanilla JavaScript

Mari kita lihat perbedaannya dengan contoh Aiman & Aila!

**Vanilla JavaScript (Modul Beginner):**

```javascript
// Aiman: "Capek banget update DOM manual..."
const container = document.getElementById("products");
container.innerHTML = ""; // Clear dulu

products.forEach((product) => {
  const div = document.createElement("div");
  div.className = "product-card";
  div.innerHTML = `
    <h3>${product.name}</h3>
    <p>Rp ${product.price}</p>
  `;
  container.appendChild(div);
});

// Aiman: "Setiap kali data update, harus manual clear terus append lagi!"
```

**Dengan React:**

```jsx
// Aila: "Dengan React, jauh lebih simple!"
function ProductList({ products }) {
  return (
    <div id="products">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}

// Aila: "Data update? React auto-render ulang! Nggak perlu manual!"
```

Lihat bedanya? React lebih **declarative** (kamu bilang "apa yang mau ditampilkan"), bukan **imperative** (kamu bilang "gimana cara tampilkannya").

### Single Page Application (SPA)

React bikin **SPA** - aplikasi yang nggak reload full page saat navigasi.

**Traditional Website:**

```
Click link → Server send full HTML → Browser reload → Show page
(Lambat! Reload setiap page)
```

**React SPA:**

```
Click link → JavaScript update DOM → Show page (instant!)
(Cepat! No reload, smooth transitions)
```

**Analogi:**

> Traditional website = Baca buku (flip page satu-satu)  
> React SPA = Scroll e-book (smooth, no interruption)

---

## ⚙️ Setup Project dengan Vite

### Kenapa Vite?

**Vite** adalah build tool modern untuk React. Kenapa pakai Vite, bukan Create React App (CRA)?

| Create React App (Old)     | Vite (Modern)              |
| -------------------------- | -------------------------- |
| Lambat start (30-60 detik) | Super cepat (1-2 detik) ⚡ |
| Heavy webpack config       | Simple, zero config        |
| Slow hot reload            | Instant hot reload 🔥      |
| Large bundle size          | Optimized bundles          |

**Fun Fact:** Vite dibuat oleh Evan You (creator Vue.js), sekarang jadi standard untuk React projects!

### Install Node.js

Pastikan Node.js v18+ installed:

```bash
# Check Node version
node --version
# Output: v18.17.0 atau lebih tinggi

# Check npm version
npm --version
# Output: v9.6.7 atau lebih tinggi
```

Kalau belum install, download di: https://nodejs.org/

### Create React Project dengan Vite

```bash
# 1. Create project baru
npm create vite@latest health-ecommerce-catalog -- --template react

# 2. Masuk ke folder project
cd health-ecommerce-catalog

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

**Expected output:**

```
VITE v4.5.0  ready in 523 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

**Buka browser:** `http://localhost:5173`

Kamu akan lihat React app pertama kamu! 🎉

![Vite React Template]()
_Screenshot browser menampilkan Vite + React default template dengan counter button dan "Edit src/App.jsx and save to test HMR"._

🎞️ **[GIF Placeholder - 15 detik]**
_Proses: npm create vite → Select React template → cd project → npm install → npm run dev → Browser auto-open dengan React logo spinning → Click counter button works!_

### Struktur Folder Vite

```
health-ecommerce-catalog/
├── node_modules/       # Dependencies (auto-generated)
├── public/             # Static assets
│   └── vite.svg
├── src/                # Source code (ini yang kita edit!)
│   ├── App.jsx        # Main component
│   ├── App.css        # Component styles
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies & scripts
├── vite.config.js      # Vite configuration
└── .gitignore          # Git ignore rules
```

**File Penting:**

- `src/App.jsx` - Main component aplikasi kamu
- `src/main.jsx` - Entry point (mount React ke DOM)
- `index.html` - HTML template (minimal, single div#root)
- `vite.config.js` - Build configuration

🎥 **Vibe Coding: Setup React Project (Bareng GitHub Copilot)**

**🎯 Tujuan:**  
Create React project dengan Vite dan customize untuk Health E-Commerce.

**💬 Prompt untuk GitHub Copilot:**

```
// Create Vite React project untuk Health E-Commerce
// dengan struktur folder: components, pages, services, utils
```

**👨‍💻 Langkah-langkah Manual:**

1. **Create project:**

   ```bash
   npm create vite@latest health-ecommerce-catalog -- --template react
   cd health-ecommerce-catalog
   npm install
   ```

2. **Copilot tidak bisa run terminal commands**, jadi ini manual!

3. **Buat folder structure:**

   ```bash
   cd src
   mkdir components pages services utils
   ```

4. **Clean default files** (hapus boilerplate):

   - Delete `src/App.css` (kita pakai Tailwind nanti)
   - Bersihkan `src/App.jsx` jadi minimal:

   ```jsx
   Zfunction App() {
     return (
       <div>
         <h1>Health E-Commerce</h1>
       </div>
     );
   }

   export default App;
   ```

5. **Start server:**
   ```bash
   npm run dev
   ```

**🧩 Hasil Akhir:**  
Clean React project structure, ready untuk build Health E-Commerce catalog!

**💡 Tips:**

- Vite hot reload super fast, save file langsung update!
- Port default: 5173 (beda dengan backend 5000)

---

## 🎨 Styling dengan TailwindCSS

### Apa Itu TailwindCSS?

**TailwindCSS** adalah **utility-first CSS framework**. Instead of writing CSS classes, kamu pakai utility classes yang sudah jadi!

**Traditional CSS:**

```css
/* styles.css */
.product-card {
  padding: 16px;
  margin: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

```html
<div class="product-card">...</div>
```

**Dengan Tailwind:**

```html
<div class="p-4 m-2 rounded-lg shadow-md">...</div>
```

**Lebih cepat kan?** Nggak perlu switch file CSS, semua di JSX!

### Install TailwindCSS

```bash
# 1. Install Tailwind dependencies
npm install -D tailwindcss postcss autoprefixer

# 2. Initialize Tailwind config
npx tailwindcss init -p

# 3. Configure template paths
```

Edit `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

**4. Add Tailwind directives** ke `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**5. Test Tailwind:**

Edit `src/App.jsx`:

```jsx
function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-600">Health E-Commerce 🏥</h1>
      <p className="text-gray-600 mt-2">Powered by React + TailwindCSS</p>
    </div>
  );
}

export default App;
```

Save dan lihat hasilnya di browser! Text biru, background abu-abu, padding 8!

![Tailwind First Test]()
_Screenshot aplikasi dengan judul "Health E-Commerce" dalam text biru besar, subtitle abu-abu, dengan background abu-abu terang._

🎥 **Vibe Coding: Setup TailwindCSS (Bareng GitHub Copilot)**

**🎯 Tujuan:**  
Install dan configure TailwindCSS untuk styling React components.

**💬 Prompt untuk GitHub Copilot:**

```
// Configure tailwind.config.js untuk Vite React project
// Include all JSX files di src folder
```

**👨‍💻 Langkah-langkah:**

1. **Install Tailwind** (manual, Copilot can't run npm):

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

2. **Ketik prompt di `tailwind.config.js`**, Copilot akan suggest:

   ```javascript
   export default {
     content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

3. **Di `src/index.css`**, ketik:

   ```
   // Import Tailwind base, components, utilities
   ```

   Copilot suggest:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

4. **Test di App.jsx:**
   ```jsx
   <h1 className="text-3xl font-bold text-blue-600">Hello Tailwind!</h1>
   ```

**🧩 Hasil Akhir:**  
TailwindCSS ready! Sekarang bisa styling dengan utility classes yang simple dan cepat!

**💡 Tips:**

- Install Tailwind CSS IntelliSense extension di VS Code
- Autocomplete akan kasih suggestions untuk class names
- Hover class name untuk lihat generated CSS

🎞️ **[GIF Placeholder - 10 detik]**
_VS Code dengan Tailwind IntelliSense: Ketik `className="bg-` → Autocomplete muncul dengan semua bg colors → Select bg-blue-500 → Save → Browser auto-update dengan background biru!_

### Tailwind Utility Classes Dasar

Mari Aila jelasin utility classes yang sering dipakai:

**Spacing (Padding & Margin):**

```jsx
<div className="p-4">Padding all sides 4 (16px)</div>
<div className="px-4 py-2">Padding horizontal 4, vertical 2</div>
<div className="m-4">Margin 4</div>
<div className="mt-8">Margin top 8 (32px)</div>
```

**Colors:**

```jsx
<div className="bg-blue-500">Background blue</div>
<div className="text-red-600">Text merah</div>
<div className="border-gray-300">Border abu-abu</div>
```

**Typography:**

```jsx
<h1 className="text-4xl font-bold">Big bold heading</h1>
<p className="text-sm text-gray-600">Small gray text</p>
```

**Layout:**

```jsx
<div className="flex items-center justify-between">
  <span>Left</span>
  <span>Right</span>
</div>

<div className="grid grid-cols-3 gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```

**Responsive:**

```jsx
<div className="w-full md:w-1/2 lg:w-1/3">
  {/* Mobile: full width, Tablet: 50%, Desktop: 33% */}
</div>
```

💡 **Challenge #1: Tailwind Practice**

Buat card untuk produk dengan Tailwind:

- Background putih
- Padding 6
- Border radius lg
- Shadow
- Hover effect (shadow lebih besar)

Hint:

```jsx
<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
  {/* Content */}
</div>
```

---

## ⚛️ Konsep Dasar React

### Components (Komponen)

**Component** adalah building block di React. Setiap piece of UI adalah component!

**Analogi:**

> Component itu kayak **function** yang return HTML (JSX)

**Contoh Component Sederhana:**

```jsx
// components/ProductCard.jsx
function ProductCard() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <img
        src="/vitamin-c.jpg"
        alt="Vitamin C"
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-lg font-semibold mt-2">Vitamin C 1000mg</h3>
      <p className="text-gray-600">Rp 85.000</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Beli Sekarang
      </button>
    </div>
  );
}

export default ProductCard;
```

**Cara pakai:**

```jsx
// App.jsx
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Produk Kami</h1>
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
```

Tapi ini masih static (semua card sama). Kita butuh **Props**!

### Props (Properties)

**Props** adalah cara passing data ke component. Kayak **function parameters**!

```jsx
// ProductCard dengan props
function ProductCard({ name, price, image }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-lg font-semibold mt-2">{name}</h3>
      <p className="text-gray-600">Rp {price.toLocaleString("id-ID")}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Beli Sekarang
      </button>
    </div>
  );
}

export default ProductCard;
```

**Cara pakai dengan props:**

```jsx
<ProductCard
  name="Vitamin C 1000mg"
  price={85000}
  image="/vitamin-c.jpg"
/>

<ProductCard
  name="Vitamin D3 2000 IU"
  price={120000}
  image="/vitamin-d.jpg"
/>
```

Sekarang tiap card beda! Props bikin component **reusable**!

**Dialog Aiman & Aila:**

```
Aiman: "Props itu kayak parameter function ya?"
Aila: "Exactly! Component = function, props = parameters."
Aiman: "Jadi satu component bisa dipakai berkali-kali dengan data beda?"
Aila: "Yup! Itu kekuatan React. Reusable components!"
```

🎥 **Vibe Coding: Membuat Reusable Component (Bareng GitHub Copilot)**

**🎯 Tujuan:**  
Membuat ProductCard component yang reusable dengan props.

**💬 Prompt untuk GitHub Copilot:**

```
// Create ProductCard component with props:
// name (string), price (number), category (string), image (string)
// Use Tailwind for styling: white background, rounded corners, shadow
// Include image, title, category badge, price, and "Add to Cart" button
```

**👨‍💻 Langkah-langkah:**

1. **Buat file** `src/components/ProductCard.jsx`

2. **Ketik prompt di atas**, Copilot akan suggest structure:

   ```jsx
   function ProductCard({ name, price, category, image }) {
     return (
       <div className="bg-white p-4 rounded-lg shadow-md">
         {/* Copilot suggest structure */}
       </div>
     );
   }
   ```

3. **Aiman review dan enhance:**

   ```jsx
   function ProductCard({ name, price, category, image }) {
     return (
       <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition">
         <img
           src={image}
           alt={name}
           className="w-full h-48 object-cover rounded-md"
         />

         {/* Aiman: Tambah category badge (Copilot mungkin lupa) */}
         <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mt-2">
           {category}
         </span>

         <h3 className="text-lg font-semibold mt-2">{name}</h3>

         <p className="text-2xl font-bold text-blue-600 mt-2">
           Rp {price.toLocaleString("id-ID")}
         </p>

         <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
           Tambah ke Keranjang
         </button>
       </div>
     );
   }

   export default ProductCard;
   ```

4. **Use di App.jsx:**

   ```jsx
   import ProductCard from "./components/ProductCard";

   function App() {
     return (
       <div className="min-h-screen bg-gray-100 p-8">
         <h1 className="text-3xl font-bold mb-6">Produk Kesehatan</h1>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <ProductCard
             name="Vitamin C 1000mg"
             price={85000}
             category="Vitamin"
             image="https://via.placeholder.com/300x200"
           />
           <ProductCard
             name="Vitamin D3 2000 IU"
             price={120000}
             category="Vitamin"
             image="https://via.placeholder.com/300x200"
           />
           <ProductCard
             name="Omega-3 Fish Oil"
             price={200000}
             category="Supplement"
             image="https://via.placeholder.com/300x200"
           />
         </div>
       </div>
     );
   }
   ```

**🧩 Hasil Akhir:**  
Beautiful product grid dengan responsive layout! Mobile: 1 column, Desktop: 3 columns!

**💡 Tips:**

- Copilot bagus untuk component structure, tapi styling details harus manual
- Always add hover effects untuk better UX
- Use responsive classes (md:, lg:) from start

🎞️ **[GIF Placeholder - 12 detik]**
_Browser showing product catalog: 3 cards in row on desktop → Resize window → Cards stack vertically on mobile → Hover over card → Shadow expands → Click "Add to Cart" button → Visual feedback!_

### State (Keadaan)

**State** adalah data yang bisa **berubah** dalam component. Kalau state berubah, React auto-render ulang component!

**Analogi:**

> State itu kayak **variabel yang reactive**. Kalau nilai berubah, UI langsung update!

**Contoh tanpa state (static):**

```jsx
function Counter() {
  let count = 0; // Ini bukan state!

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => count++}>Increment</button>
    </div>
  );
}
```

**Problem:** Button di-click, tapi UI nggak update! Karena `count` bukan state.

**Dengan useState (reactive):**

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // State hook!

  return (
    <div className="p-4">
      <p className="text-2xl font-bold">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Increment
      </button>
    </div>
  );
}
```

**Sekarang works!** Click button → count update → UI re-render!

**Penjelasan `useState`:**

```jsx
const [count, setCount] = useState(0);
//     ^       ^           ^
//     |       |           |
//  current  setter    initial value
//  value    function
```

- `count` - Current state value (read this)
- `setCount` - Function to update state (call this)
- `0` - Initial value

**Rules:**

- ❌ **Jangan** direct mutation: `count = 5` (Won't work!)
- ✅ **Always** use setter: `setCount(5)` (Works!)

🎥 **Vibe Coding: State Management Dasar (Bareng GitHub Copilot)**

**🎯 Tujuan:**  
Implement shopping cart counter dengan useState.

**💬 Prompt untuk GitHub Copilot:**

```
// Create CartCounter component with useState
// Show cart item count
// Buttons: Add item (+1) and Remove item (-1)
// Disable remove when count is 0
```

**👨‍💻 Langkah-langkah:**

1. **Create** `src/components/CartCounter.jsx`

2. **Ketik prompt**, Copilot suggest:

   ```jsx
   import { useState } from "react";

   function CartCounter() {
     const [count, setCount] = useState(0);

     return (
       <div>
         <p>Cart: {count}</p>
         <button onClick={() => setCount(count + 1)}>Add</button>
         <button onClick={() => setCount(count - 1)}>Remove</button>
       </div>
     );
   }
   ```

3. **Aiman enhance dengan Tailwind & validation:**

   ```jsx
   import { useState } from "react";

   function CartCounter() {
     const [count, setCount] = useState(0);

     const addItem = () => setCount(count + 1);

     const removeItem = () => {
       if (count > 0) {
         // Aiman: Prevent negative!
         setCount(count - 1);
       }
     };

     return (
       <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
         <button
           onClick={removeItem}
           disabled={count === 0}
           className="bg-red-500 text-white px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
         >
           -
         </button>

         <span className="text-2xl font-bold min-w-[50px] text-center">
           {count}
         </span>

         <button
           onClick={addItem}
           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
         >
           +
         </button>
       </div>
     );
   }

   export default CartCounter;
   ```

**🧩 Hasil Akhir:**  
Interactive cart counter! Click + to add, - to remove, button disabled when count = 0!

**💡 Tips:**

- Always validate state updates (no negative counts!)
- Use disabled state untuk better UX
- Copilot might forget edge cases, always review!

💡 **Challenge #2: Product Filter dengan State**

Implement filter produk berdasarkan category menggunakan useState!

Hint:

```jsx
const [selectedCategory, setSelectedCategory] = useState("All");

const filteredProducts = products.filter(
  (p) => selectedCategory === "All" || p.category === selectedCategory
);
```

---

## 🔌 Fetching Data dari Backend API

Sekarang kita hubungkan frontend ke **backend API** yang udah dibuat di Modul 1-5! 🚀

### Backend API yang Tersedia

**Backend running di:** `http://localhost:5000`

**Endpoints yang bisa kita pakai:**

```
GET  http://localhost:5000/api/products         # Get all products
GET  http://localhost:5000/api/products/:id     # Get one product
POST http://localhost:5000/api/auth/register    # Register user
POST http://localhost:5000/api/auth/login       # Login user
```

### Install Axios

```bash
npm install axios
```

**Axios** adalah HTTP client untuk fetching data. Lebih simple dari `fetch` API!

### Create API Service

Bikin file untuk centralize API calls:

```javascript
// src/services/api.js
import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

// Create axios instance dengan default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds
});

// Products API
export const productAPI = {
  getAll: async () => {
    try {
      const response = await api.get("/products");
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const response = await api.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching product:", error);
      throw error;
    }
  },

  searchByCategory: async (category) => {
    try {
      const response = await api.get(`/products?category=${category}`);
      return response.data;
    } catch (error) {
      console.error("Error searching products:", error);
      throw error;
    }
  },
};

// Auth API
export const authAPI = {
  login: async (email, password) => {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  },

  register: async (userData) => {
    const response = await api.post("/auth/register", userData);
    return response.data;
  },
};

export default api;
```

**Kenapa bikin service layer?**

```
Aiman: "Kenapa nggak langsung axios.get di component?"
Aila: "Kalau begitu, setiap component harus tahu URL lengkap!"
Aiman: "Oh iya, kalau URL backend berubah, harus update dimana-mana?"
Aila: "Exactly! Dengan service layer, update 1 file aja!"
Aiman: "Plus bisa tambah error handling & auth headers di satu tempat?"
Aila: "Yup! Separation of concerns. Component cuma fokus UI."
```

### Fetching dengan useEffect

```jsx
// src/App.jsx
import { useState, useEffect } from "react";
import { productAPI } from "./services/api";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect runs setelah component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await productAPI.getAll();

        setProducts(response.data); // response.data adalah array products
        setError(null);
      } catch (err) {
        setError("Failed to load products. Is backend running?");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty array = run once saat mount

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading products...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-red-600">{error}</div>
      </div>
    );
  }

  // Success state
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Produk Kesehatan</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            name={product.name}
            price={product.price}
            category={product.category}
            image={product.imageUrl || "https://via.placeholder.com/300x200"}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
```

**Penjelasan `useEffect`:**

```jsx
useEffect(() => {
  // Code yang akan dijalankan
}, [dependencies]);
```

- **First parameter:** Function yang akan run
- **Second parameter:** Dependency array
  - `[]` - Run once saat mount
  - `[count]` - Run saat `count` berubah
  - No array - Run setiap render (avoid!)

🎥 **Vibe Coding: Fetch Products dari Backend (Bareng GitHub Copilot)**

**🎯 Tujuan:**  
Fetch real products dari backend API (localhost:5000) dan tampilkan di UI.

**💬 Prompt untuk GitHub Copilot:**

```
// Create ProductList component
// Fetch products from http://localhost:5000/api/products using axios
// Show loading state while fetching
// Show error state if fetch fails
// Map products to ProductCard components
```

**👨‍💻 Langkah-langkah:**

1. **Pastikan backend running:**

   ```bash
   # Di terminal terpisah, start backend
   cd ../Backend/Modul_3-Backend_Development_Express/finished-project
   npm run dev
   # Backend harus running di http://localhost:5000
   ```

2. **Create** `src/components/ProductList.jsx`

3. **Ketik prompt**, Copilot suggest basic structure

4. **Aiman lengkapi dengan proper error handling:**

   ```jsx
   import { useState, useEffect } from "react";
   import axios from "axios";
   import ProductCard from "./ProductCard";

   function ProductList() {
     const [products, setProducts] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     useEffect(() => {
       const fetchProducts = async () => {
         try {
           setLoading(true);

           // Aiman: Add proper error handling
           const response = await axios.get(
             "http://localhost:5000/api/products"
           );

           console.log("✅ Products loaded:", response.data.count);
           setProducts(response.data.data); // Backend returns { success, data, count }
         } catch (err) {
           // Aiman: Friendly error message
           if (err.code === "ERR_NETWORK") {
             setError(
               "Cannot connect to backend. Make sure it's running on port 5000!"
             );
           } else {
             setError("Failed to load products");
           }
           console.error("❌ Fetch Error:", err);
         } finally {
           setLoading(false);
         }
       };

       fetchProducts();
     }, []);

     if (loading) {
       return (
         <div className="flex justify-center items-center h-64">
           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
         </div>
       );
     }

     if (error) {
       return (
         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
           ❌ {error}
         </div>
       );
     }

     return (
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {products.map((product) => (
           <ProductCard
             key={product._id}
             name={product.name}
             price={product.price}
             category={product.category}
             image={product.imageUrl}
             description={product.description}
           />
         ))}
       </div>
     );
   }

   export default ProductList;
   ```

5. **Test:** Save file → Backend harus running → Frontend auto-fetch!

**🧩 Hasil Akhir:**  
Real data dari backend API tampil di UI! Loading spinner → Products loaded!

**💡 Tips:**

- Always handle loading & error states
- Check network tab di browser DevTools
- Copilot might forget error handling, always add!
- Use meaningful error messages

🎞️ **[GIF Placeholder - 18 detik]**
_Complete flow: Start backend di terminal → Start frontend → Browser shows loading spinner → Products load from localhost:5000 → Grid of cards appears → Network tab shows successful API call → Console shows "Products loaded: 10"_

---

## 🎯 Event Handling di React

Events di React mirip HTML, tapi dengan **camelCase** naming!

**HTML:**

```html
<button onclick="handleClick()">Click</button>
```

**React:**

```jsx
<button onClick={handleClick}>Click</button>
```

**Perbedaan:**

- HTML: `onclick` (lowercase)
- React: `onClick` (camelCase)
- HTML: String `"handleClick()"`
- React: Function reference `{handleClick}`

### Common Events

```jsx
function EventExamples() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  const handleChange = (e) => {
    console.log("Input value:", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form reload!
    console.log("Form submitted");
  };

  return (
    <div>
      {/* Click event */}
      <button onClick={handleClick}>Click Me</button>

      {/* Change event */}
      <input type="text" onChange={handleChange} placeholder="Type something" />

      {/* Submit event */}
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
```

### Passing Arguments to Event Handlers

```jsx
function ProductList({ products }) {
  const handleAddToCart = (productId, productName) => {
    console.log(`Adding ${productName} to cart`);
    // Call API to add to cart
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>

          {/* Pass arguments dengan arrow function */}
          <button onClick={() => handleAddToCart(product._id, product.name)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
```

**Why arrow function?**

```jsx
// ❌ Wrong - Calls immediately!
<button onClick={handleAddToCart(product.id, product.name)}>

// ✅ Correct - Calls when clicked
<button onClick={() => handleAddToCart(product.id, product.name)}>
```

💡 **Challenge #3: Add to Cart Functionality**

Implement add to cart yang update cart count!

Hint:

```jsx
const [cartItems, setCartItems] = useState([]);

const addToCart = (product) => {
  setCartItems([...cartItems, product]);
};
```

---

## 📝 Forms & Input Handling

Forms di React harus **controlled** - nilai input di-control oleh state!

### Uncontrolled vs Controlled

**Uncontrolled (DOM controls):**

```jsx
// ❌ Not recommended
<input type="text" />
// React tidak tahu value-nya apa
```

**Controlled (React controls):**

```jsx
// ✅ Recommended
const [name, setName] = useState("");

<input
  type="text"
  value={name} // React controls value
  onChange={(e) => setName(e.target.value)} // Update state
/>;
```

### Login Form Example

```jsx
import { useState } from "react";
import { authAPI } from "../services/api";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload!

    // Validation
    if (!email || !password) {
      setError("Email dan password wajib diisi!");
      return;
    }

    try {
      setLoading(true);
      setError("");

      // Call backend API
      const response = await authAPI.login(email, password);

      // Save token
      localStorage.setItem("token", response.token);

      alert("Login berhasil!");
    } catch (err) {
      setError("Email atau password salah!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Login</h2>

      <form onSubmit={handleSubmit}>
        {/* Email input */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="aiman@example.com"
          />
        </div>

        {/* Password input */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
            {error}
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:bg-gray-300"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
```

**Key Points:**

- Each input has `value` (from state) & `onChange` (update state)
- Form has `onSubmit` handler
- Always `e.preventDefault()` to prevent reload
- Show loading & error states

🎥 **Vibe Coding: Search Form dengan Real API (Bareng GitHub Copilot)**

**🎯 Tujuan:**  
Membuat search bar yang fetch products dari backend berdasarkan keyword.

**💬 Prompt untuk GitHub Copilot:**

```
// Create SearchBar component
// Input untuk search keyword
// Button untuk submit search
// Fetch dari API dengan query parameter
// Show loading state
```

**👨‍💻 Langkah-langkah:**

1. **Create** `src/components/SearchBar.jsx`

2. **Copilot suggest basic structure**, Aila enhance:

   ```jsx
   import { useState } from "react";
   import axios from "axios";

   function SearchBar({ onResults }) {
     const [keyword, setKeyword] = useState("");
     const [loading, setLoading] = useState(false);

     const handleSearch = async (e) => {
       e.preventDefault();

       if (!keyword.trim()) return;

       try {
         setLoading(true);

         // Aila: Fetch dengan search query
         const response = await axios.get(
           `http://localhost:5000/api/products?search=${keyword}`
         );

         // Pass results ke parent component
         onResults(response.data.data);
       } catch (error) {
         console.error("Search error:", error);
       } finally {
         setLoading(false);
       }
     };

     return (
       <form onSubmit={handleSearch} className="mb-8">
         <div className="flex gap-2">
           <input
             type="text"
             value={keyword}
             onChange={(e) => setKeyword(e.target.value)}
             placeholder="Cari produk..."
             className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
           <button
             type="submit"
             disabled={loading}
             className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-300"
           >
             {loading ? "..." : "Cari"}
           </button>
         </div>
       </form>
     );
   }

   export default SearchBar;
   ```

3. **Use di App.jsx:**

   ```jsx
   const [searchResults, setSearchResults] = useState([]);

   <SearchBar onResults={setSearchResults} />;
   ```

**🧩 Hasil Akhir:**  
Working search bar! Type "vitamin" → Click search → Products filtered real-time dari backend!

**💡 Tips:**

- Use debounce untuk avoid too many API calls
- Show "No results" message when empty
- Copilot might forget loading states, always add!

---

## 🔧 React Developer Tools

**React DevTools** adalah extension browser untuk debugging React apps!

### Installation

**Chrome:**

1. Buka Chrome Web Store
2. Search "React Developer Tools"
3. Click "Add to Chrome"

**Firefox:**

1. Buka Firefox Add-ons
2. Search "React Developer Tools"
3. Click "Add to Firefox"

### Cara Pakai

1. **Buka aplikasi React** di browser
2. **Open DevTools** (F12 atau Ctrl+Shift+I)
3. **Klik tab "Components"** atau "Profiler"

**Features:**

**1. Components Tab:**

- See component tree
- Inspect props & state
- Edit state values live!
- Find component by clicking element

**2. Profiler Tab:**

- Measure render performance
- Find slow components
- Optimize re-renders

![React DevTools]()
_Screenshot React DevTools menampilkan component tree di sidebar kiri, props & state values di sidebar kanan, dan highlighted component di page._

🎨 **[Visual Suggestion untuk Ilustrator]**

- Annotated screenshot React DevTools
- Highlight: Component tree, Props panel, State panel, Search box
- Show before/after editing state value

🎞️ **[GIF Placeholder - 20 detik]**
_Open DevTools → Click Components tab → Expand App component → See ProductList state (products array) → Edit count state value dari 0 jadi 5 → UI updates immediately → Click highlighted component in tree → Corresponding element highlights on page!_

### Debug Tips

**Find why component re-renders:**

```
Aiman: "Wah, component saya re-render terus! Gimana cek-nya?"
Aila: "Pakai Profiler tab di React DevTools!"
Aiman: "Click record, interact dengan app, terus stop?"
Aila: "Yup! Lihat flame chart, component yang sering render akan keliatan."
Aiman: "Oh iya! ProductCard re-render 10x padahal data nggak berubah!"
Aila: "Coba pakai React.memo untuk prevent unnecessary re-renders."
```

---

## 🏪 Mini Project: Health Product Catalog

Saatnya build project lengkap! Kita akan bikin **Health Product Catalog** yang connect ke backend API!

### Project Overview

**Apa yang akan kita bangun:**

- ✅ Product listing dengan data real dari backend
- ✅ Category filter (Vitamin, Supplement, Medicine)
- ✅ Search functionality
- ✅ Product detail view
- ✅ Responsive design (mobile & desktop)
- ✅ Loading & error states
- ✅ Beautiful UI dengan Tailwind

**Backend yang dipakai:** `http://localhost:5000` (dari Backend Modul 1-5)

### Struktur Project

```
health-product-catalog/
├── public/
├── src/
│   ├── components/
│   │   ├── ProductCard.jsx      # Single product card
│   │   ├── ProductGrid.jsx      # Grid of products
│   │   ├── SearchBar.jsx        # Search input
│   │   ├── CategoryFilter.jsx   # Category buttons
│   │   └── LoadingSpinner.jsx   # Loading indicator
│   ├── pages/
│   │   ├── HomePage.jsx         # Main page
│   │   └── ProductDetailPage.jsx  # Detail page
│   ├── services/
│   │   └── api.js              # API calls
│   ├── App.jsx                 # Main app
│   ├── main.jsx                # Entry point
│   └── index.css               # Tailwind imports
├── package.json
└── vite.config.js
```

### Component: ProductCard (Enhanced)

```jsx
// src/components/ProductCard.jsx
import { useState } from "react";

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative h-48 bg-gray-200">
        <img
          src={product.imageUrl || "https://via.placeholder.com/400x300"}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        {/* Category badge */}
        <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
          {product.category}
        </span>

        {/* Stock badge */}
        {product.stock < 10 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
            Stock: {product.stock}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 h-14">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500 mt-1 line-clamp-2 h-10">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-blue-600">
              Rp {product.price.toLocaleString("id-ID")}
            </p>
            <p className="text-xs text-gray-500">{product.manufacturer}</p>
          </div>

          <button
            className={`
              px-4 py-2 rounded-lg font-medium transition
              ${
                isHovered
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }
            `}
          >
            {isHovered ? "Beli" : "Lihat"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
```

### Component: CategoryFilter

```jsx
// src/components/CategoryFilter.jsx
function CategoryFilter({ selectedCategory, onCategoryChange }) {
  const categories = [
    { value: "All", label: "Semua Produk", icon: "🏪" },
    { value: "Vitamin", label: "Vitamin", icon: "💊" },
    { value: "Supplement", label: "Suplemen", icon: "🌿" },
    { value: "Medicine", label: "Obat", icon: "💉" },
    { value: "Medical Equipment", label: "Alat Medis", icon: "🩺" },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onCategoryChange(cat.value)}
          className={`
            px-4 py-2 rounded-lg font-medium transition
            ${
              selectedCategory === cat.value
                ? "bg-blue-500 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }
          `}
        >
          <span className="mr-2">{cat.icon}</span>
          {cat.label}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
```

### Main App Integration

```jsx
// src/App.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./components/ProductCard";
import CategoryFilter from "./components/CategoryFilter";
import SearchBar from "./components/SearchBar";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all products saat mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter products saat category berubah
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((p) => p.category === selectedCategory)
      );
    }
  }, [selectedCategory, products]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/products");

      setProducts(response.data.data);
      setFilteredProducts(response.data.data);
      setError(null);
    } catch (err) {
      setError("Gagal memuat produk. Pastikan backend running di port 5000!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = async (keyword) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:5000/api/products?search=${keyword}`
      );
      setFilteredProducts(response.data.data);
    } catch (err) {
      setError("Pencarian gagal");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
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
        <SearchBar onSearch={handleSearch} />

        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Product count */}
        <p className="text-gray-600 mb-4">
          Menampilkan {filteredProducts.length} produk
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Tidak ada produk ditemukan 😢
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
```

🎞️ **[GIF Placeholder - 25 detik]**
_Complete app demo: Page loads → Products fetch from backend → Grid appears → Click "Vitamin" filter → Products filtered → Type "C" in search → Filtered to Vitamin C products → Click product → Detail modal/page opens → Responsive test: resize window → Layout adapts!_

**🧩 Hasil Akhir:**  
**COMPLETE HEALTH PRODUCT CATALOG!** dengan real backend integration, filtering, search, responsive layout!

---

## 🎓 Ringkasan & Referensi

### 🧩 Ringkasan Poin Utama

Pada modul ini, peserta telah mempelajari **React fundamentals** dengan TailwindCSS, mencakup components, props, state, event handling, API integration, dan React DevTools.

Peserta diharapkan kini mampu:

- Build React applications dengan Vite
- Create reusable components dengan props
- Manage application state dengan useState
- Handle user interactions dengan events
- Fetch data dari REST APIs
- Style dengan TailwindCSS utility classes
- Debug dengan React Developer Tools
- Build responsive product catalog

Dengan pemahaman ini, peserta siap untuk **React Advanced** (routing, state management, optimization) di modul berikutnya!

### 🎯 Kaitan dengan Tujuan Pembelajaran

| Tujuan Pembelajaran         | Pencapaian Melalui Materi                                            |
| --------------------------- | -------------------------------------------------------------------- |
| Implementasi User Interface | ProductCard, SearchBar, CategoryFilter components dengan TailwindCSS |
| Component Architecture      | Reusable components dengan props system                              |
| Data Fetching               | Axios integration dengan backend localhost:5000                      |
| State Management            | useState untuk cart, filters, search                                 |
| Event Handling              | onClick, onChange, onSubmit handlers                                 |
| Debugging                   | React DevTools untuk inspect components                              |

### 💭 Refleksi Akhir

Setelah menyelesaikan modul ini, coba renungkan:

**"Bagaimana component-based architecture membantu build scalable UI? Apa bedanya dengan jQuery approach?"**

**"Kenapa React menggunakan Virtual DOM? Apa impact-nya ke performance?"**

**"Kapan sebaiknya lift state up ke parent component vs keep di child component?"**

### Apa yang Sudah Kamu Pelajari?

Selamat! 🎉 Kamu sudah menyelesaikan **Frontend Modul 1** tentang React Fundamentals!

**✅ React Basics:**

- Understand components, props, state
- JSX syntax dan expressions
- Event handling di React

**✅ Modern Tooling:**

- Vite untuk fast development
- TailwindCSS untuk utility-first styling
- React DevTools untuk debugging

**✅ Backend Integration:**

- Fetch data dengan Axios
- Handle loading & error states
- Connect ke localhost:5000 API

**✅ Build Real Project:**

- Health Product Catalog yang working
- Responsive design
- Search & filter functionality

**Kamu sekarang siap untuk:** React Advanced dengan routing, state management, dan optimization! 🚀

### Glosarium

| Istilah         | Definisi Singkat                                               |
| --------------- | -------------------------------------------------------------- |
| **React**       | JavaScript library untuk build user interfaces                 |
| **Component**   | Reusable piece of UI (seperti function yang return JSX)        |
| **JSX**         | JavaScript XML - syntax extension untuk write HTML in JS       |
| **Props**       | Data yang passed dari parent ke child component                |
| **State**       | Data yang bisa change dan trigger re-render                    |
| **Hook**        | Function yang let you use React features (useState, useEffect) |
| **Vite**        | Modern build tool untuk React (fast & optimized)               |
| **TailwindCSS** | Utility-first CSS framework                                    |
| **Virtual DOM** | JavaScript representation of real DOM untuk optimize updates   |
| **SPA**         | Single Page Application - no full page reloads                 |

### Referensi Tambahan

**📖 Dokumentasi Resmi:**

- [React Docs](https://react.dev/)
- [Vite Guide](https://vitejs.dev/)
- [TailwindCSS Docs](https://tailwindcss.com/)
- [Axios Documentation](https://axios-http.com/)

**📝 Tutorial & Artikel:**

- [React Tutorial (Official)](https://react.dev/learn)
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

**🔧 Tools:**

- [React Developer Tools](https://react.dev/learn/react-developer-tools)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

---

## 🚀 Next Steps

### Langkah Selanjutnya

Oke, sekarang kamu udah jago bikin UI dengan React! Apa selanjutnya?

**1. Practice More! 💪**

Build variations untuk improve skills:

- E-commerce cart system
- User profile page
- Product review section
- Wishlist feature

**2. Improve Current Project 🔧**

Tambahkan fitur ke Health Product Catalog:

- Add to cart functionality
- Product detail modal
- Price range filter
- Sort by price/name/date
- Pagination

**3. Lanjut ke Modul Selanjutnya! 📚**

**Modul 2: React Advanced**

- React Router untuk multi-page
- React Query untuk advanced data fetching
- Next.js introduction (SSR/SSG showcase)
- Ant Design component library
- Global state management

Siap lanjut? Let's go! 🚀

---

**🎓 Sertifikat Penyelesaian**

Kamu berhak atas sertifikat penyelesaian **Frontend Modul 1 - React Fundamentals!**

Untuk mendapatkan sertifikat, pastikan kamu sudah:

- ✅ Menyelesaikan minimal 3 dari 4 Challenges
- ✅ Build Health Product Catalog yang connect ke backend
- ✅ Implement search & filter functionality
- ✅ Deploy ke Netlify/Vercel (optional)

**Terima kasih sudah belajar bersama kami! Sampai jumpa di modul selanjutnya! 👋**

---

**FRONTEND MODUL 1 COMPLETE!** ✅

**You are now a REACT DEVELOPER!** ⚛️

---

## ⚙️ Daftar Perubahan Subtopik dan Alasan

### Perubahan yang Dilakukan:

**[Baru] Vite sebagai Build Tool**

- Mengganti Create React App dengan Vite
- **Alasan:** Vite significantly faster (1-2s vs 30-60s startup), modern standard, better developer experience, optimized production builds

**[Baru] TailwindCSS Utility-First Styling**

- Fokus TailwindCSS instead of plain CSS/CSS Modules
- **Alasan:** Industry standard, faster development, consistent design system, utility-first approach teaches component thinking

**[Baru] Axios untuk HTTP Requests**

- Menggunakan Axios instead of native fetch API
- **Alasan:** Simpler syntax, better error handling, request/response interceptors, automatic JSON transformation, consistent with backend modules

**[Baru] Backend Integration Real**

- Connect ke ULTIMATE Backend (localhost:5000) dari Modul 1
- **Alasan:** Real-world practice dari awal, students see immediate value connecting FE-BE, practical understanding of API consumption

**[Baru] Vibe Coding Sections (5 sessions)**

1. Setup React Project dengan Vite
2. Setup TailwindCSS
3. Membuat Reusable Component
4. State Management Dasar
5. Fetch Products dari Backend
6. Search Form dengan Real API
7. Build Complete Catalog

**[Baru] Challenge Sections (3 challenges)**

1. Tailwind Practice
2. Product Filter dengan State
3. Add to Cart Functionality

**[Baru] Dialog Aiman & Aila (6 scenarios)**

- React vs Vanilla JavaScript discussion
- Props as function parameters
- API service layer explanation
- State management concepts
- DevTools debugging tips

**[Baru] Visual & GIF Placeholders (8 total)**

- React component tree diagram
- Vite setup process
- Tailwind IntelliSense
- Complete data fetching flow
- React DevTools usage
- Product catalog demo
- Search & filter interactions

**[Baru] React Developer Tools Section**

- Complete tutorial untuk debugging
- Components tab usage
- Profiler for performance
- **Alasan:** Essential tool untuk React development, teaches proper debugging workflow

**[Baru] Real Mini Project Integration**

- Health Product Catalog connects to ULTIMATE Backend
- Not isolated demo
- **Alasan:** Students build real integrated system, see progression from Backend to Frontend

### Subtopik yang Dipertahankan (dari Silabus):

1. Apa itu React & konsep komponen
2. JSX syntax & expressions
3. Component, Props, dan State
4. Event handling
5. Fetching data dari backend API
6. Debugging dengan React DevTools

**Alasan:** Core concepts sesuai Unit Kompetensi J.620100.005.01 dan essential untuk React fundamentals.

### Subtopik yang Ditambahkan (by Cursor):

**[Added] Vite Modern Build Tool**

- Not in original silabus (CRA was implied)
- **Alasan:** Vite is current industry standard, significantly better DX, teaches modern tooling

**[Added] TailwindCSS Deep Dive**

- Silabus mention "styling" generically
- **Alasan:** Utility-first CSS is industry trend, faster than writing custom CSS, component-focused mindset

**[Added] Service Layer Pattern (api.js)**

- Not explicitly in silabus
- **Alasan:** Separation of concerns, reusable code, easier maintenance, professional architecture pattern

**[Added] Loading & Error States**

- Beyond basic data fetching
- **Alasan:** Production UIs need proper loading/error handling, teaches complete user experience thinking

**[Added] Responsive Design from Start**

- Silabus mentions in Modul 3, but introduced here
- **Alasan:** Mobile-first is essential from day 1, Tailwind makes it easy to teach early

### Subtopik yang Tidak Dimasukkan:

**[Skipped] Class Components**

- Old React pattern
- **Alasan:** Hooks (functional components) are modern standard since React 16.8, no need to teach deprecated patterns

**[Skipped] Redux**

- Saved for Modul 2
- **Alasan:** Too complex for fundamentals, Context API sufficient for this level

**[Skipped] React Router**

- Saved for Modul 2
- **Alasan:** SPA with single page sufficient for fundamentals, routing adds complexity

### Konsistensi dengan Starter/Finished Project:

✅ **All code examples** match with finished-project implementation  
✅ **Component structure** consistent dengan folder architecture  
✅ **API calls** use same baseURL (localhost:5000)  
✅ **Styling patterns** follow Tailwind utilities shown in materi  
✅ **State management** examples directly usable in projects

---

⚙️ **Perbandingan Subtopik (Silabus vs Cursor Implementation)**

| Silabus Original       | Cursor Implementation                          | Status                  |
| ---------------------- | ---------------------------------------------- | ----------------------- |
| Komponen, props, state | ✅ Component, Props, State dengan examples     | Detailed                |
| JSX & rendering        | ✅ JSX syntax, conditional rendering, lists    | Complete                |
| Event handling         | ✅ onClick, onChange, onSubmit dengan examples | Comprehensive           |
| Connect ke backend     | ✅ Axios + real backend localhost:5000         | Production-ready        |
| React DevTools         | ✅ Complete tutorial Components & Profiler     | Detailed                |
| -                      | **[Added]** Vite Build Tool                    | New (Modern Standard)   |
| -                      | **[Added]** TailwindCSS Deep Dive              | New (Industry Standard) |
| -                      | **[Added]** Loading & Error States             | New (Production UX)     |
| -                      | **[Added]** Service Layer Pattern              | New (Architecture)      |

**Penjelasan Penambahan:**

- Vite = Modern build tool replacing CRA (obsolete)
- TailwindCSS = Industry standard utility-first CSS
- Loading/Error States = Essential for production UIs
- Service Layer = Professional code organization

**Semua additions align dengan:** Production-ready, modern React development best practices.

---

_Modul ini adalah bagian dari Program Intermediate Fullstack Developer - Frontend Track_  
_Digital Skills Academy - Pusbang Talenta Digital - Komdigi_  
_© 2024 All Rights Reserved_
