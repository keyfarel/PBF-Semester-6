# Laporan Praktikum 11 - Pemrograman Berbasis Framework

**Nama:** Key Firdausi Alfarel  
**NIM:** 2341729186  

---

## Daftar Isi

- [Langkah-Langkah Praktikum](#langkah-langkah-praktikum)

---

## Langkah-Langkah Praktikum

### 1. Membuat Dynamic Route

![Modifikasi view Product](public/docs/langkah-1a.png)

**Modifikasi view Product**

![Halaman /produk](public/docs/langkah-1b.png)

**Halaman /produk**

![Halaman dinamic route](public/docs/langkah-1c.png)

### 2. Implementasi CSR (Client Rendering)

![Modifikasi pages/produk/[produk].tsx](public/docs/langkah-2a.png)

**Modifikasi pada file [produk].tsx pada folder src/pages/produk/**

![Modifikasi pages/api/[...produk].tsx](public/docs/langkah-2b.png)

**Pada file produk.ts pada folder pages/api di rename menjadi [[...product]].ts**

![Modifikasi pages/api/[...produk].tsx](public/docs/langkah-2c.png)

**Modifikasi file [[...produk]].ts pada folder pages/api**

![Modifikasi pages/produk/index.tsx](public/docs/langkah-2d.png)

**Modifikasi file produk/index.tsx**

![Hasil http://localhost:3000/produk](public/docs/langkah-2e.png)

**Jalankan browser http://localhost:3000/produk/4TX9oCSf0pWVHEyjjG1P"**

![Hasil http://localhost:3000/produk/4TX9oCSf0pWVHEyjjG1P](public/docs/langkah-2f.png)

**Ketika alamat tidak ditemukan maka akan menampilkan status kode 404**

![Modifikasi detailProduct.module.scss](public/docs/langkah-2-g1.png)
![Modifikasi detailProduct.module.scss](public/docs/langkah-2-g2.png)

**Modifikasi file detailProduct.module.scss pada folder src/views/detailProduct**

![Modifikasi views/pages/produk/[product].tsx](public/docs/langkah-2h.png)

**Modifikasi views/pages/produk/[product].tsx**

![Modifikasi pages/produk/index.tsx](public/docs/langkah-2i.png)

**Modifikasi pages/produk/index.tsx**

![Hasil Akhir](public/docs/langkah-2j.png)

**Hasil Akhir**

### 3. Implementasi SSR

![Modifikasi pada file server.tsx pada folder src/pages/produk/](public/docs/langkah-3a.png)

**Modifikasi pada file server.tsx pada folder src/pages/produk/**

![Hasil Halaman Produk](public/docs/langkah-3b.png)

**Hasil Halaman Produk**

![Hasil Halaman Produk detail](public/docs/langkah-3c.png)

**Hasil Halaman Produk detail**


