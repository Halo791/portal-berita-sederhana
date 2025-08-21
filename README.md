# 📰 AI News Portal

Portal berita sederhana untuk mengumpulkan artikel tentang **Artificial Intelligence** dari beberapa sumber API:
- [NewsAPI](https://newsapi.org/)
- [GNews](https://gnews.io/)
- [NewsData.io](https://newsdata.io/)

Dibangun dengan **React + Vite + TailwindCSS**, serta di-deploy menggunakan **Vercel**.

---

## ✨ Fitur
- 🔍 **Search Bar** → filter berita berdasarkan judul.  
- 🖼️ **Thumbnail** → menampilkan gambar berita bila tersedia.  
- 📑 **Pagination** → navigasi antar halaman berita.  
- ⚡ **Multi-source API** → gabungan dari 3 sumber (NewsAPI, GNews, NewsData).  
- 🌐 **Deployment-ready** untuk Vercel.  

---

## 📸 Tampilan
Beranda portal dengan daftar berita AI.  
*(tambahkan screenshot di sini setelah deploy ke Vercel)*  

---

## 🚀 Instalasi

### 1. Clone Repository
```bash
git clone https://github.com/username/ai-news-portal.git
cd ai-news-portal
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Buat file `.env.local` pada root project:

```env
VITE_NEWSAPI_KEY=your_newsapi_key
VITE_GNEWS_KEY=your_gnews_key
VITE_NEWSDATA_KEY=your_newsdata_key
```

> **Catatan:** Saat deploy ke Vercel, masukkan variable ini di **Project → Settings → Environment Variables**.

### 4. Run Local Development
```bash
npm run dev
```
Buka [http://localhost:5173](http://localhost:5173).

---

## 📦 Deployment ke Vercel
1. Push project ke GitHub.  
2. Login ke [Vercel](https://vercel.com/).  
3. Import repository.  
4. Tambahkan **Environment Variables**:  
   - `NEWSAPI_KEY`
   - `GNEWS_KEY`
   - `NEWSDATA_KEY`  
5. Deploy 🚀

---

## 🛠️ Teknologi
- [React](https://react.dev/) (Frontend)
- [Vite](https://vitejs.dev/) (Build tool)
- [TailwindCSS](https://tailwindcss.com/) (UI styling)
- [Vercel](https://vercel.com/) (Deployment)

---

## 📜 Lisensi
MIT License © 2025 [Your Name]

---

## 👨‍💻 Author
Dibuat oleh **[Your Name](https://github.com/username)**  
