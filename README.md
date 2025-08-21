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
Tampilan homepage portal berita sederhana yang dibuka menggunakan Vercel
<img width="1755" height="857" alt="gambar" src="https://github.com/user-attachments/assets/c1fae26e-d7f2-437e-9286-8fdc0f1fcb18" />

Tampilan homepage portal berita sederhana yang dibuka menggunakan Localhost
<img width="1757" height="981" alt="gambar" src="https://github.com/user-attachments/assets/6b173615-b26f-4da0-9c4f-2bd8ef77c373" />


**Terdapat Perbedaan tampilan homepage display berita saat proses fetching data antara Vercel dan Localhost, dikarenakan dari ketiga API yang digunakan hanya satu saja yang berhasil yaitu NewsData.io. Penyebabnya adalah NewsAPI dan GNewsAPI terdampak CORS restriction di Vercel, karena kedua API itu tidak mengizinkan direct call dari browser. Sehingga pada saat membuka lewat Vercel display berita hanya sedikit, berbeda saat membuka lewat Localhost**
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
