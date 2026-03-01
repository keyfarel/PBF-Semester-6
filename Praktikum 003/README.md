# Laporan Praktikum 3 - Pemrograman Berbasis Framework

**Nama:** Key Firdausi Alfarel  
**NIM:** 2341729186  

---

## Daftar Isi
- [Langkah-Langkah Praktikum](#langkah-langkah-praktikum)
  - [1. Routing Dasar](#1-routing-dasar)
  - [2. Routing Menggunakan Folder](#2-routing-menggunakan-folder)
  - [3. Nested Routing](#3-nested-routing)
  - [4. Dynamic Routing](#4-dynamic-routing)
  - [5. Membuat Komponen Navbar](#5-membuat-komponen-navbar)
  - [6. Membuat Layout Global (App Shell)](#6-membuat-layout-global-app-shell)
  - [7. Implementasi Layout di _app.tsx](#7-implementasi-layout-di-_apptsx)
- [Tugas Mandiri](#tugas-mandiri)
  - [Tugas 1 - Layouting](#tugas-1---layouting)
  - [Tugas 2 - Dynamic Routing](#tugas-2---dynamic-routing)
  - [Tugas 3 - Global Footer](#tugas-3---global-footer)
- [F. Pertanyaan Refleksi](#f-pertanyaan-refleksi)

---

## Langkah-Langkah Praktikum

### 1. Routing Dasar
![Langkah 1](public/docs/langkah-1a.png)
![Langkah 1](public/docs/langkah-1b.png)

### 2. Routing Menggunakan Folder
![Langkah 2](public/docs/langkah-2a.png)
![Langkah 2](public/docs/langkah-2b.png)

### 3. Nested Routing
![Langkah 3](public/docs/langkah-3a.png)
![Langkah 3](public/docs/langkah-3b.png)
![Langkah 3](public/docs/langkah-3c.png)
![Langkah 3](public/docs/langkah-3d.png)
![Langkah 3](public/docs/langkah-3e.png)
![Langkah 3](public/docs/langkah-3f.png)
![Langkah 3](public/docs/langkah-3g.png)

### 4. Dynamic Routing
![Langkah 4](public/docs/langkah-4a.png)
![Langkah 4](public/docs/langkah-4b.png)
![Langkah 4](public/docs/langkah-4d.png)
![Langkah 4](public/docs/langkah-4e.png)
![Langkah 4](public/docs/langkah-4f.png)

### 5. Membuat Komponen Navbar
![Langkah 5](public/docs/langkah-5a.png)
![Langkah 5](public/docs/langkah-5b.png)
![Langkah 5](public/docs/langkah-5c.png)
![Langkah 5](public/docs/langkah-5d.png)
![Langkah 5](public/docs/langkah-5e.png)

### 6. Membuat Layout Global (App Shell)
![Langkah 6](public/docs/langkah-6a.png)
![Langkah 6](public/docs/langkah-6b.png)

### 7. Implementasi Layout di _app.tsx
![Implementasi AppShell](public/docs/tugas-1a.png)

---

## Tugas Mandiri

### Tugas 1 - Layouting
![Tugas 1a](public/docs/tugas-1a.png)
![Tugas 1b](public/docs/tugas-1b.png)

### Tugas 2 - Dynamic Routing
![Tugas 2](public/docs/tugas-2a.png)

### Tugas 3 - Global Footer
![Tugas 3a](public/docs/tugas-3a.png)
![Tugas 3b](public/docs/tugas-3b.png)
![Tugas 3c](public/docs/tugas-3c.png)

---

## F. Pertanyaan Refleksi

### 1. Apa perbedaan routing berbasis file dan routing manual?
- **File-based Routing** (seperti di Next.js): Rute otomatis ditentukan dari struktur file dan folder di dalam direktori `pages` atau `app`. Developer tidak perlu menulis kode konfigurasi router secara manual.
- **Manual Routing** (seperti React Router): Developer harus mendaftarkan rute secara eksplisit dalam kode (misalnya menggunakan elemen `<Route />`) dan menentukan komponen mana yang harus dirender untuk path tertentu.

### 2. Mengapa dynamic routing penting dalam aplikasi web?
Dynamic routing sangat penting karena memungkinkan satu template halaman (seperti `[slug].tsx`) untuk menangani ribuan rute unik secara dinamis. Hal ini krusial untuk aplikasi seperti blog, e-commerce, atau dashboard user di mana kontennya bersifat arbitrer dan banyak, sehingga tidak efisien jika harus membuat file rute manual untuk setiap item.

### 3. Apa keuntungan menggunakan layout global dibanding memanggil komponen satu per satu?
- **Konsistensi UI**: Memastikan elemen yang selalu ada (seperti Navbar dan Footer) tetap terlihat seragam di seluruh halaman.
- **Efisiensi Kode (DRY)**: Mengurangi pengulangan kode karena logika layout hanya ditulis sekali di satu tempat.
- **Kemudahan Pemeliharaan**: Jika ada perubahan pada struktur global (misalnya menambah link di Navbar), kita cukup mengubah satu file layout dan perubahannya akan langsung berlaku di seluruh aplikasi.