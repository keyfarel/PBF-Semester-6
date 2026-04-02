# Laporan Praktikum 17 - Pemrograman Berbasis Framework

**Nama:** Key Firdausi Alfarel  
**NIM:** 2341729186  

---

## Daftar Isi

- [Langkah-Langkah Praktikum](#langkah-langkah-praktikum)
- [Pengujian](#pengujian)
- [Pertanyaan Analisis](#pertanyaan-analisis)

---

## Langkah-Langkah Praktikum

### 1. Masuk ke Google Cloud Console Buka:

![Buka https://console.cloud.google.com/apis/credentials](public/docs/langkah-1a.png)

*Buka https://console.cloud.google.com/apis/credentials*

### 2. Buat Project Baru

![Menambah project MyAppNext](public/docs/langkah-2a.png)

*Menambah project MyAppNext*

![Projek berhasil dibuat](public/docs/langkah-2b.png)

*Projek berhasil dibuat*

![Buka project MyAppNext](public/docs/langkah-2c.png)

*Buka project MyAppNext*

### 3. Konfigurasi OAuth Consent Screen

![Buka OAuth consent screen](public/docs/langkah-3a.png)

*Buka OAuth consent screen*

![Isi App Information](public/docs/langkah-3b.png)

*Isi App Information*

![Isi Audience](public/docs/langkah-3c.png)

*Isi Audience*

![Isi Contact Information](public/docs/langkah-3d.png)

*Isi Contact Information*

![Finish](public/docs/langkah-3e.png)

*Finish*

![Tampilan OAuth Consent Screen](public/docs/langkah-3f.png)

*Tampilan OAuth Consent Screen*

### 4. Buat OAuth Credentials

![Bukan Credentials](public/docs/langkah-4a.png)

*Bukan Credentials*

![Isi OAuth Client ID](public/docs/langkah-4b.png)

*Isi OAuth Client ID*

![Detail OAuth Client ID](public/docs/langkah-4c.png)

*Detail OAuth Client ID*

![Tampilan Client ID dan Client Secret](public/docs/langkah-4d.png)

*Tampilan Client ID dan Client Secret*

### 5. Tambahkan Environment Variables

![Detail OAuth Client ID](public/docs/langkah-5a.png)

*Detail OAuth Client ID*

![Menambah Environment Variables](public/docs/langkah-5b.png)

*Menambah Environment Variables*

### 6. Konfigurasi Google Provider di NextAuth dan Handle Callback JWT & Session

![Modifikasi file src/pages/api/auth/[...nextauth].ts](public/docs/langkah-6a.png)

*Modifikasi file src/pages/api/auth/[...nextauth].ts*

### 7. Tambahkan Button Login Google

![Modifikasi file src/pages/api/auth/[...nextauth].ts](public/docs/langkah-7a.png)

*Modifikasi file src/pages/api/auth/[...nextauth].ts*

![Modifikasi file src/views/login/index.tsx](public/docs/langkah-7b.png)
![Modifikasi file src/views/login/index.tsx](public/docs/langkah-7c.png)

*Modifikasi file src/views/login/index.tsx*

![Modifikasi file src/views/login/login.module.css](public/docs/langkah-7d.png)
![Modifikasi file src/views/login/login.module.css](public/docs/langkah-7e.png)

*Modifikasi file src/views/login/login.module.css*

![Modifikasi file src/components/layout/navbar/index.tsx](public/docs/langkah-7f.png)

*Modifikasi file src/components/layout/navbar/index.tsx*

![Modifikasi file src/styles/navbar.module.scss](public/docs/langkah-7g.png)
![Modifikasi file src/styles/navbar.module.scss](public/docs/langkah-7h.png)

*Modifikasi file src/styles/navbar.module.css*

![Halaman Login](public/docs/langkah-7i.png)

*Halaman Login*

![Login berhasil dengan akun google](public/docs/langkah-7j.png)

*Login berhasil dengan akun google*

### 8. Simpan Data Google ke Database

![Modifikasi file src/pages/api/auth/[...nextauth].ts](public/docs/langkah-8a.png)

*Modifikasi file src/pages/api/auth/[...nextauth].ts*

![Modifikasi file src/utils/db/servicefirebase.ts](public/docs/langkah-8b.png)

*Modifikasi file src/utils/db/servicefirebase.ts*

![User berhasil tersimpan di firebase](public/docs/langkah-8c.png)

*User berhasil tersimpan di firebase*

## Tugas Mandiri

### 1. Tambahkan role editor

![Modifikasi file src/components/layouts/navbar/index.tsx](public/docs/langkah-8a.png)

*Modifikasi file src/components/layouts/navbar/index.tsx*

![Modifikasi file src/styles/navbar.module.css](public/docs/langkah-8b.png)

*Modifikasi file src/styles/navbar.module.css*


### 2. Buat halaman khusus editor

![Modifikasi file src/pages/editor/index.tsx](public/docs/mandiri-2a.png)

*Modifikasi file src/pages/editor/index.tsx*

![Modifikasi file src/middleware.ts](public/docs/mandiri-2b.png)

*Modifikasi file src/middleware.ts*

![Modifikasi file src/middlewares/withAuth.ts](public/docs/mandiri-2c.png)

*Modifikasi file src/middlewares/withAuth.ts*

![Ubah role dari user ke editor di firestore](public/docs/mandiri-2d.png)

*Ubah role dari user ke editor di firestore*

![Halaman Editor](public/docs/mandiri-2e.png)

*Halaman Editor*

### 3. Tambahkan provider GitHub

![Buka https://github.com/settings/developers](public/docs/mandiri-3a.png)

*Buka https://github.com/settings/developers*

![Buka OauthApp dan Create New dan isi form](public/docs/mandiri-3b.png)

*Buka OauthApp dan Create New dan isi form*

![Client ID dan Client Secret](public/docs/mandiri-3c.png)

*Client ID dan Client Secret*

![Modifikasi env](public/docs/mandiri-3d.png)

*Modifikasi env*

![Modifikasi file src/pages/api/auth/[...nextauth].ts](public/docs/mandiri-3e.png)

*Modifikasi file src/pages/api/auth/[...nextauth].ts*

![Modifikasi file src/views/login/index.tsx](public/docs/mandiri-3f.png)

*Modifikasi file src/views/login/index.tsx*

![Modifikasi file src/views/login/login.module.css](public/docs/mandiri-3g.png)

*Modifikasi file src/views/login/login.module.css*

![Tampilan login dengan github](public/docs/mandiri-3h.png)

*Tampilan login dengan github*

![Proses login dengan akun github](public/docs/mandiri-3i.png)

*Proses login dengan akun github*

![Login berhasil dengan akun github](public/docs/mandiri-3j.png)

*Login berhasil dengan akun github*

### 4. Refactor service agar reusable


### 5. Gunakan next/image untuk optimasi avatar
