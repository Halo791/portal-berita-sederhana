# 📰 AI News Portal Sederhana

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
<img width="1755" height="857" alt="gambar" src="https://github.com/user-attachments/assets/c1fae26e-d7f2-437e-9286-8fdc0f1fcb18" />


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

### 5. Run Vercel App

Buka https://portal-berita-sederhana.vercel.app/

---

## 👨‍💻 Author
Dibuat oleh **[Your Name](https://github.com/username)**  
