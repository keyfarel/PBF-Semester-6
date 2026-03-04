# Laporan Praktikum 8 - Pemrograman Berbasis Framework

**Nama:** Key Firdausi Alfarel  
**NIM:** 2341729186  

---

## Daftar Isi

- [Langkah-Langkah Praktikum](#langkah-langkah-praktikum)
- [Tugas Praktikum](#tugas-praktikum)
---

## Langkah-Langkah Praktikum

### 1. Setup Data Produk

![pages/products/server.tsx](public/docs/langkah-1a.png)

*pages/products/server.tsx*

![Modifikasi file server.tsx](public/docs/langkah-1b.png)

*http://localhost:3000/produk/server*

![http://localhost:3000/produk/server](public/docs/langkah-1c.png)

*http://localhost:3000/produk*


### 2. Implementasi getServerSideProps pada server.tsx

![Modifikasi file server.tsx](public/docs/langkah-2a.png)

*http://localhost:3000/produk/server*

![http://localhost:3000/produk/server](public/docs/langkah-2b.png)

*http://localhost:3000/produk*

### 3. Refactor Type ( produk type )

![membuat file types/Product.type.ts](public/docs/langkah-3a.png)
![membuat file types/Product.type.ts](public/docs/langkah-3b.png)

*membuat file types/Product.type.ts*

![modifikasi file server.tsx](public/docs/langkah-3c.png)

*http://localhost:3000/produk/server*

![http://localhost:3000/produk/server](public/docs/langkah-3d.png)

*http://localhost:3000/produk*

### 4. Uji Perbedaan SSR vs CSR

**Uji 1**
![Skeleton CSR Muncul](public/docs/langkah-4a.png)

*Skeleton CSR Muncul*

![Skeleton SSR Tidak Muncul](public/docs/langkah-4b.png)

*Skeleton SSR Tidak Muncul*

**Uji 2**
![Data Fetch di Network CSR muncul](public/docs/langkah-4c.png)

*Data Fetch di Network CSR muncul*

![Data Fetch di Network SSR tidak muncul](public/docs/langkah-4d.png)

*Data Fetch di Network SSR tidak muncul*


**Uji 3**
![Muncul Skeleton dulu](public/docs/langkah-4f.png)

*Muncul Skeleton dulu*

![Langsung muncul data](public/docs/langkah-4e.png)

*Langsung muncul data*

---

## Tugas Praktikum

### **1. Jelaskan perbedaan:**

