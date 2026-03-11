# Laporan Praktikum 13 - Pemrograman Berbasis Framework
# Laporan Praktikum 13 - Pemrograman Berbasis Framework

**Nama:** Key Firdausi Alfarel  
**NIM:** 2341729186  

---

## Daftar Isi

- [Langkah-Langkah Praktikum](#langkah-langkah-praktikum)
- [Pengujian](#pengujian)
- [G. Pertanyaan Analisis](#g-pertanyaan-analisis)

---

## Langkah-Langkah Praktikum

### 1. Membuat Middleware

![install next-auth](public/docs/langkah-1a.png)

*install next-auth*

### 2. Konfigurasi API Auth

![Membuat file /api/auth/[...nextauth].ts](public/docs/langkah-2a.png)

*Membuat file /api/auth/[...nextauth].ts*

![Modifikasi kode /api/auth/[...nextauth].ts](public/docs/langkah-2b.png)

*Modifikasi kode /api/auth/[...nextauth].ts*

### 3. Tambahkan Secret

![Generate secret base64](public/docs/langkah-3a.png)

*Generate secret base64*


![Menambahkan secret di .env.local](public/docs/langkah-3b.png)

*Menambahkan secret di .env.local*

### 4. Tambahkan SessionProvider

![Menambahkan session provider di _app.tsx](public/docs/langkah-4a.png)

*Menambahkan session provider di _app.tsx*

### 5. Tambahkan Tombol Login & Logout

![Buka file /components/layouts/navbar/index.tsx](public/docs/langkah-5a.png)

*Buka file /components/layouts/navbar/index.tsx*


![Modifikasi file /components/layouts/navbar/index.tsx](public/docs/langkah-5b.png)

*Modifikasi file /components/layouts/navbar/index.tsx*


![Modifikasi file styles/navbar.module.css](public/docs/langkah-5c.png)

*Modifikasi file styles/navbar.module.css*


![Buka halaman /](public/docs/langkah-5d.png)

*Buka halaman /**

![Tampilan Halaman Login](public/docs/langkah-5e.png)

*Tampilan Halaman Login*


![Menambahkan session di file /components/layouts/navbar/index.tsx](public/docs/langkah-5f.png)

*Menambahkan session di file /components/layouts/navbar/index.tsx*


![Coba login](public/docs/langkah-5g.png)

*Coba login*


![Tampilan home page](public/docs/langkah-5h.png)

*Tampilan home page*

![Logout](public/docs/langkah-5i.png)

*Logout*

### 6. Menambahkan Data Tambahan (Full Name)

![Modifikasi file /pages/api/auth/[...nextauth].ts](public/docs/langkah-6a.png)

*Modifikasi file /pages/api/auth/[...nextauth].ts*


![Modifikasi file styles/navbar.module.css](public/docs/langkah-6b.png)

*Modifikasi file styles/navbar.module.css*


![Modifikasi file /components/layouts/navbar/index.tsx](public/docs/langkah-6c.png)

*Modifikasi file /components/layouts/navbar/index.tsx*


![Buka halaman /](public/docs/langkah-6d.png)

*Buka halaman /**

![Login](public/docs/langkah-6e.png)

*Login*


![Home Page](public/docs/langkah-6f.png)

*Home Page*

### 7. Proteksi Halaman Profile

![Buat file middleware/withAuth.ts](public/docs/langkah-7a.png)

*Buat file middleware/withAuth.ts*

![Modifikasi file middleware/withAuth.ts](public/docs/langkah-7c.png)

*Modifikasi file middleware/withAuth.ts*

![Modifikasi file middleware.ts](public/docs/langkah-7d.png)

*Modifikasi file middleware.ts*

![Modifikasi file pages/profile/index.tsx](public/docs/langkah-7b.png)

*Modifikasi file pages/profile/index.tsx*

![Login dan akses /profile page](public/docs/langkah-7e.png)

*Login dan akses /profile page*


## Pengujian

### Uji 1

![Sebelum Login](public/docs/uji-1.png)

*Sebelum Login*

### Uji 2

![Setelah Login](public/docs/uji-2.png)

*Setelah Login*

### Uji 3

![Setelah Logout](public/docs/uji-3.png)

*Setelah Logout*

