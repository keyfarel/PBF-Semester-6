# Laporan Praktikum 2 - Pemrograman Berbasis Framework

**Nama:** Key Firdausi Alfarel  
**NIM:** 2341729186  

---

## Daftar Isi
- [Langkah-Langkah Praktikum](#langkah-langkah-praktikum)
  - [1. Menjalankan Project](#1-menjalankan-project)
  - [2. Membuat Catch-All Route](#2-membuat-catch-all-route)
  - [3. Pengujian Catch-All Route](#3-pengujian-catch-all-route)
  - [4. Optional Catch-All Route](#4-optional-catch-all-route)
  - [5. Validasi Parameter](#5-validasi-parameter)
  - [6. Membuat Halaman Login & Register](#6-membuat-halaman-login-register)
  - [7. Navigasi Imperatif (router.push)](#7-navigasi-imperatif-routerpush)
  - [8. Simulasi Redirect (Belum Login)](#8-simulasi-redirect-belum-login)
- [Tugas Mandiri](#tugas-mandiri)
  - [Tugas 1](#tugas-1)
  - [Tugas 2](#tugas-2)
  - [Tugas 3](#tugas-3)
- [F. Pertanyaan Evaluasi](#f-pertanyaan-evaluasi)

---

## Langkah-Langkah Praktikum

### 1. Menjalankan Project
![Langkah 1](docs/praktikum-004/langkah-1a.png)

### 2. Membuat Catch-All Route
![Langkah 2](docs/praktikum-004/langkah-2a.png)
![Langkah 2](docs/praktikum-004/langkah-2b.png)
![Langkah 2](docs/praktikum-004/langkah-2c.png)
![Langkah 2](docs/praktikum-004/langkah-2d.png)

### 3. Pengujian Catch-All Route
![Langkah 3](docs/praktikum-004/langkah-3a.png)
![Langkah 3](docs/praktikum-004/langkah-3b.png)
![Langkah 3](docs/praktikum-004/langkah-3c.png)
![Langkah 3](docs/praktikum-004/langkah-3d.png)

### 4. Optional Catch-All Route
![Langkah 4](docs/praktikum-004/langkah-4a.png)
![Langkah 4](docs/praktikum-004/langkah-4b.png)

### 5. Validasi Parameter
![Langkah 5](docs/praktikum-004/langkah-5a.png)

### 6. Membuat Halaman Login & Register
![Langkah 6](docs/praktikum-004/langkah-6a.png)
![Langkah 6](docs/praktikum-004/langkah-6b.png)
![Langkah 6](docs/praktikum-004/langkah-6c.png)
![Langkah 6](docs/praktikum-004/langkah-6d.png)
![Langkah 6](docs/praktikum-004/langkah-6e.png)

### 7. Navigasi Imperatif (router.push)
![Langkah 7](docs/praktikum-004/langkah-7a.png)
![Langkah 7](docs/praktikum-004/langkah-7b.png)

### 8. Simulasi Redirect (Belum Login)
![Langkah 8](docs/praktikum-004/langkah-8a.png)
![Langkah 8](docs/praktikum-004/langkah-8b.png)

---

## Tugas Mandiri

### Tugas 1
![Tugas 1](docs/praktikum-004/tugas-1a.png)
![Tugas 1](docs/praktikum-004/tugas-1b.png)

### Tugas 2
![Tugas 2](docs/praktikum-004/tugas-2a.png)
![Tugas 2](docs/praktikum-004/tugas-2b.png)

### Tugas 3
![Tugas 3](docs/praktikum-004/tugas-3a.png)
![Tugas 3](docs/praktikum-004/tugas-3b.png)
![Tugas 3](docs/praktikum-004/tugas-3c.png)
![Tugas 3](docs/praktikum-004/tugas-3d.png)

---

## F. Pertanyaan Evaluasi

1. **Apa perbedaan [id].js dan [...slug].js?**
   - `[id].js` adalah rute dinamis tunggal yang hanya menangkap satu segmen path (misalnya `/produk/1`).
   - `[...slug].js` adalah "catch-all route" yang dapat menangkap banyak segmen path sekaligus (misalnya `/category/elektronik/laptop/gaming`).

2. **Mengapa slug berbentuk array?**
   - Karena catch-all route dimaksudkan untuk menangkap beberapa segmen path. Next.js mengubah segmen-segmen tersebut menjadi elemen-elemen di dalam array agar mudah diakses dan diolah secara terprogram.

3. **Kapan sebaiknya menggunakan Link dan router.push()?**
   - Gunakan `Link` untuk navigasi standar antar halaman (deklaratif) karena lebih optimal untuk SEO dan performa.
   - Gunakan `router.push()` untuk navigasi yang dipicu oleh logika kode (imperatif), seperti setelah proses login berhasil atau setelah pengiriman formulir.

4. **Mengapa navigasi Next.js tidak me-refresh halaman?**
   - Next.js menggunakan *Client-side Routing*. Saat berpindah halaman, Next.js hanya mengunduh data dan komponen yang diperlukan tanpa melakukan refresh halaman total, sehingga memberikan pengalaman yang lebih cepat mirip dengan *Single Page Application* (SPA).
