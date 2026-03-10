# Laporan Praktikum 12 - Pemrograman Berbasis Framework

**Nama:** Key Firdausi Alfarel  
**NIM:** 2341729186  

---

## Daftar Isi

- [Langkah-Langkah Praktikum](#langkah-langkah-praktikum)

---

## Langkah-Langkah Praktikum

### 1. Membuat Middleware

![Modifikasi pages/index.tsx](public/docs/langkah-1a.png)

*Modifikasi pages/index.tsx*

![Menambah file src/middleware.ts](public/docs/langkah-1b.png)

*Menambah file src/middleware.ts*

### 2. Struktur Dasar Middleware

![Memodifikasi file middleware.ts](public/docs/langkah-2a.png)

*Memodifikasi file middleware.ts*

### 3. Redirect Sederhana

![Redirect ke dashboard](public/docs/langkah-3a.png)

*Redirect ke dashboard*

![Error to many request](public/docs/langkah-3b.png)

*Error to many request*

### 4. Batasi Route Tertentu

![Membatasi produk dan about page](public/docs/langkah-4a.png)

*Membatasi produk dan about page*

### 5. Simulasi Sistem Login

![Menambah kode simulasi login](public/docs/langkah-5a.png)

*Menambah kode simulasi login*

## Pengujian

### Uji 1

![Akses Produk](public/docs/uji-1a.png)

*Akses Produk*

![Redirect ke login](public/docs/uji-1b.png)

*Redirect ke login*

### Uji 2

![Modifikasi isLogin menjadi true](public/docs/uji-2a.png)

*Modifikasi isLogin menjadi true*

![Tampilan Halaman Produk](public/docs/uji-2b.png)

*Tampilan Halaman Produk*

### Uji 3

![Modifikasi isLogin false](public/docs/uji-3a.png)

*Modifikasi isLogin false*

![Akses /about](public/docs/uji-3b.png)

*Akses /about*

![Redirect ke login](public/docs/uji-3c.png)

*Redirect ke login*