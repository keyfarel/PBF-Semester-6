# Laporan Praktikum 8 - Pemrograman Berbasis Framework

**Nama:** Key Firdausi Alfarel  
**NIM:** 2341729186  

---

## Daftar Isi

- [Langkah-Langkah Praktikum](#langkah-langkah-praktikum)
- [Tugas Mandiri](#tugas-mandiri)
- [Pertanyaan Evaluasi](#pertanyaan-evaluasi)

---

## Langkah-Langkah Praktikum

### 1. Setup Data Produk

![membuat file api/products.ts](public/docs/langkah-1a.png)  
*membuat file api/products.ts*

![cek browser api](public/docs/langkah-1b.png)  
*cek browser api*

### 2. Implementasi CSR dengan useEffect


![membuat file views/products.tsx](public/docs/langkah-2a.png)  
*membuat file views/products.tsx*

![kode views/products.tsx](public/docs/langkah-2b.png)  
*kode views/products.tsx*

![membuat file produk/index.tsx](public/docs/langkah-2c.png)  
*membuat file produk/index.tsx*

![tampilan produk](public/docs/langkah-2d.png)  
*tampilan produk*

### 3. Implementasi Skeleton Loading

![kode views/products.tsx](public/docs/langkah-3a.png)  
*kode views/products.tsx*

![kode product.module.scss](public/docs/langkah-3b.png)  
*kode product.module.scss*

![tampilan Skeleton Loading](public/docs/langkah-3c.png)  
*tampilan Skeleton Loading*

![tampilan produk](public/docs/langkah-3d.png)  
*tampilan produk*

### 4. Implementasi SWR

![membuat file utils/swr/fetcher.ts](public/docs/langkah-4a.png)  
*membuat file utils/swr/fetcher.ts*

![kode utils/swr/fetcher.ts](public/docs/langkah-4b.png)  
*kode utils/swr/fetcher.ts*

![modifikasi produk/index.tsx](public/docs/langkah-4c.png)  
*modifikasi produk/index.tsx*

**Perbedaan `useEffect` Manual vs SWR:**
- **`useEffect` Manual:** Membutuhkan pengelolaan *state* tambahan yang rumit (seperti `useState` untuk data, status *loading*, dan asinkron *error*). Setiap kali komponen di-*mount*, ia selalu melakukan *fetch* ulang secara naif dari awal yang bisa membebani *server* dan memperlambat *render* jika tidak ditangani dengan baik.
- **SWR (Stale-While-Revalidate):** Pendekatan modern dari Vercel terintegrasi untuk *data fetching*. SWR akan mengembalikan data dari *cache* terlebih dahulu (sehingga *UI* langsung tampil/sangat cepat responsnya), lalu ia mengirimkan *request fetch* secara *background* diam-diam untuk memvalidasi/mendapatkan data terbaru, dan barulah merender ulang *React tree* jika ada pembaruan di server. Kelebihan tambahannya meliputi: validasi ulang saat halaman kembali difokuskan (*revalidate on focus*), penanganan status `isLoading` dan `error` otomatis dalam 1 baris kode (sehingga sangat mengurangi kode *boilerplate*).
---

## Tugas Mandiri

### Tugas 1


---

## Pertanyaan Evaluasi

