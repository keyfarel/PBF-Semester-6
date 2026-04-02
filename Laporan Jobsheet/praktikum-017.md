# Laporan Praktikum 17 - Pemrograman Berbasis Framework

**Nama:** Key Firdausi Alfarel  
**NIM:** 2341729186  

---

## Daftar Isi

- [Langkah-Langkah Praktikum](#langkah-langkah-praktikum)
  - [1. Masuk ke Google Cloud Console Buka](#1-masuk-ke-google-cloud-console-buka)
  - [2. Buat Project Baru](#2-buat-project-baru)
  - [3. Konfigurasi OAuth Consent Screen](#3-konfigurasi-oauth-consent-screen)
  - [4. Buat OAuth Credentials](#4-buat-oauth-credentials)
  - [5. Tambahkan Environment Variables](#5-tambahkan-environment-variables)
  - [6. Konfigurasi Google Provider di NextAuth dan Handle Callback JWT & Session](#6-konfigurasi-google-provider-di-nextauth-dan-handle-callback-jwt--session)
  - [7. Tambahkan Button Login Google](#7-tambahkan-button-login-google)
  - [8. Simpan Data Google ke Database](#8-simpan-data-google-ke-database)
- [Tugas Mandiri](#tugas-mandiri)
  - [1. Tambahkan role editor](#1-tambahkan-role-editor)
  - [2. Buat halaman khusus editor](#2-buat-halaman-khusus-editor)
  - [3. Tambahkan provider GitHub](#3-tambahkan-provider-github)
  - [4. Refactor service agar reusable](#4-refactor-service-agar-reusable)
  - [5. Gunakan next/image untuk optimasi avatar](#5-gunakan-nextimage-untuk-optimasi-avatar)
- [Pertanyaan Analisis](#pertanyaan-analisis)
  - [1. Apa perbedaan login credential dan login Google?](#1-apa-perbedaan-login-credential-dan-login-google)
  - [2. Mengapa data Google tetap perlu disimpan ke database?](#2-mengapa-data-google-tetap-perlu-disimpan-ke-database)
  - [3. Apa fungsi JWT callback?](#3-apa-fungsi-jwt-callback)
  - [4. Mengapa perlu multi-role?](#4-mengapa-perlu-multi-role)
  - [5. Apa risiko jika tidak menyimpan user ke database?](#5-apa-risiko-jika-tidak-menyimpan-user-ke-database)

---

## Langkah-Langkah Praktikum

### 1. Masuk ke Google Cloud Console Buka:

![Buka https://console.cloud.google.com/apis/credentials](docs/praktikum-017/langkah-1a.png)

*Buka https://console.cloud.google.com/apis/credentials*

### 2. Buat Project Baru

![Menambah project MyAppNext](docs/praktikum-017/langkah-2a.png)

*Menambah project MyAppNext*

![Projek berhasil dibuat](docs/praktikum-017/langkah-2b.png)

*Projek berhasil dibuat*

![Buka project MyAppNext](docs/praktikum-017/langkah-2c.png)

*Buka project MyAppNext*

### 3. Konfigurasi OAuth Consent Screen

![Buka OAuth consent screen](docs/praktikum-017/langkah-3a.png)

*Buka OAuth consent screen*

![Isi App Information](docs/praktikum-017/langkah-3b.png)

*Isi App Information*

![Isi Audience](docs/praktikum-017/langkah-3c.png)

*Isi Audience*

![Isi Contact Information](docs/praktikum-017/langkah-3d.png)

*Isi Contact Information*

![Finish](docs/praktikum-017/langkah-3e.png)

*Finish*

![Tampilan OAuth Consent Screen](docs/praktikum-017/langkah-3f.png)

*Tampilan OAuth Consent Screen*

### 4. Buat OAuth Credentials

![Bukan Credentials](docs/praktikum-017/langkah-4a.png)

*Bukan Credentials*

![Isi OAuth Client ID](docs/praktikum-017/langkah-4b.png)

*Isi OAuth Client ID*

![Detail OAuth Client ID](docs/praktikum-017/langkah-4c.png)

*Detail OAuth Client ID*

![Tampilan Client ID dan Client Secret](docs/praktikum-017/langkah-4d.png)

*Tampilan Client ID dan Client Secret*

### 5. Tambahkan Environment Variables

![Detail OAuth Client ID](docs/praktikum-017/langkah-5a.png)

*Detail OAuth Client ID*

![Menambah Environment Variables](docs/praktikum-017/langkah-5b.png)

*Menambah Environment Variables*

### 6. Konfigurasi Google Provider di NextAuth dan Handle Callback JWT & Session

![Modifikasi file src/pages/api/auth/[...nextauth].ts](docs/praktikum-017/langkah-6a.png)

*Modifikasi file src/pages/api/auth/[...nextauth].ts*

### 7. Tambahkan Button Login Google

![Modifikasi file src/pages/api/auth/[...nextauth].ts](docs/praktikum-017/langkah-7a.png)

*Modifikasi file src/pages/api/auth/[...nextauth].ts*

![Modifikasi file src/views/login/index.tsx](docs/praktikum-017/langkah-7b.png)
![Modifikasi file src/views/login/index.tsx](docs/praktikum-017/langkah-7c.png)

*Modifikasi file src/views/login/index.tsx*

![Modifikasi file src/views/login/login.module.css](docs/praktikum-017/langkah-7d.png)
![Modifikasi file src/views/login/login.module.css](docs/praktikum-017/langkah-7e.png)

*Modifikasi file src/views/login/login.module.css*

![Modifikasi file src/components/layout/navbar/index.tsx](docs/praktikum-017/langkah-7f.png)

*Modifikasi file src/components/layout/navbar/index.tsx*

![Modifikasi file src/styles/navbar.module.scss](docs/praktikum-017/langkah-7g.png)
![Modifikasi file src/styles/navbar.module.scss](docs/praktikum-017/langkah-7h.png)

*Modifikasi file src/styles/navbar.module.css*

![Halaman Login](docs/praktikum-017/langkah-7i.png)

*Halaman Login*

![Login berhasil dengan akun google](docs/praktikum-017/langkah-7j.png)

*Login berhasil dengan akun google*

### 8. Simpan Data Google ke Database

![Modifikasi file src/pages/api/auth/[...nextauth].ts](docs/praktikum-017/langkah-8a.png)

*Modifikasi file src/pages/api/auth/[...nextauth].ts*

![Modifikasi file src/utils/db/servicefirebase.ts](docs/praktikum-017/langkah-8b.png)

*Modifikasi file src/utils/db/servicefirebase.ts*

![User berhasil tersimpan di firebase](docs/praktikum-017/langkah-8c.png)

*User berhasil tersimpan di firebase*

## Tugas Mandiri

### 1. Tambahkan role editor

![Modifikasi file src/components/layouts/navbar/index.tsx](docs/praktikum-017/langkah-8a.png)

*Modifikasi file src/components/layouts/navbar/index.tsx*

![Modifikasi file src/styles/navbar.module.css](docs/praktikum-017/langkah-8b.png)

*Modifikasi file src/styles/navbar.module.css*


### 2. Buat halaman khusus editor

![Modifikasi file src/pages/editor/index.tsx](docs/praktikum-017/mandiri-2a.png)

*Modifikasi file src/pages/editor/index.tsx*

![Modifikasi file src/middleware.ts](docs/praktikum-017/mandiri-2b.png)

*Modifikasi file src/middleware.ts*

![Modifikasi file src/middlewares/withAuth.ts](docs/praktikum-017/mandiri-2c.png)

*Modifikasi file src/middlewares/withAuth.ts*

![Ubah role dari user ke editor di firestore](docs/praktikum-017/mandiri-2d.png)

*Ubah role dari user ke editor di firestore*

![Halaman Editor](docs/praktikum-017/mandiri-2e.png)

*Halaman Editor*

### 3. Tambahkan provider GitHub

![Buka https://github.com/settings/developers](docs/praktikum-017/mandiri-3a.png)

*Buka https://github.com/settings/developers*

![Buka OauthApp dan Create New dan isi form](docs/praktikum-017/mandiri-3b.png)

*Buka OauthApp dan Create New dan isi form*

![Client ID dan Client Secret](docs/praktikum-017/mandiri-3c.png)

*Client ID dan Client Secret*

![Modifikasi env](docs/praktikum-017/mandiri-3d.png)

*Modifikasi env*

![Modifikasi file src/pages/api/auth/[...nextauth].ts](docs/praktikum-017/mandiri-3e.png)

*Modifikasi file src/pages/api/auth/[...nextauth].ts*

![Modifikasi file src/views/login/index.tsx](docs/praktikum-017/mandiri-3f.png)

*Modifikasi file src/views/login/index.tsx*

![Modifikasi file src/views/login/login.module.css](docs/praktikum-017/mandiri-3g.png)

*Modifikasi file src/views/login/login.module.css*

![Tampilan login dengan github](docs/praktikum-017/mandiri-3h.png)

*Tampilan login dengan github*

![Proses login dengan akun github](docs/praktikum-017/mandiri-3i.png)

*Proses login dengan akun github*

![Login berhasil dengan akun github](docs/praktikum-017/mandiri-3j.png)

*Login berhasil dengan akun github*

### 4. Refactor service agar reusable

![Modifikasi file src/utils/db/servicefirebase.ts](docs/praktikum-017/mandiri-4a.png)

*Modifikasi file src/utils/db/servicefirebase.ts*

![Modifikasi file src/pages/api/auth/[...nextauth].ts](docs/praktikum-017/mandiri-4b.png)

*Buka OauthApp dan Create New dan isi form*

![Data di firestore](docs/praktikum-017/mandiri-4c.png)

*Data di firestore*

### 5. Gunakan next/image untuk optimasi avatar

![Modifikasi file next.config.js](docs/praktikum-017/mandiri-5a.png)

*Modifikasi file next.config.js*

![Modifikasi file src/components/layouts/navbar/index.tsx](docs/praktikum-017/mandiri-5b.png)

*Modifikasi file src/components/layouts/navbar/index.tsx*

---

## Pertanyaan Analisis

### 1. Apa perbedaan login credential dan login Google?
Login credential (manual) mengharuskan pengguna mendaftar dengan membuat email dan password sendiri yang kemudian disimpan dan dikelola oleh sistem kita. Sedangkan login Google (OAuth) menggunakan akun Google yang sudah ada; aplikasi kita tidak menyimpan password pengguna, melainkan hanya menerima token verifikasi dari Google bahwa pengguna tersebut valid.

### 2. Mengapa data Google tetap perlu disimpan ke database?
Meskipun autentikasi dilakukan oleh Google, kita tetap perlu menyimpan data profil dasar pengguna (seperti email, nama, dan role) di database kita. Hal ini bertujuan untuk mengelola hak akses (authorization) di dalam aplikasi, seperti menentukan role apakah pengguna tersebut adalah admin, editor, atau user biasa, serta untuk merelasikan data pengguna dengan entitas lain di aplikasi.

### 3. Apa fungsi JWT callback?
JWT (JSON Web Token) callback pada NextAuth berfungsi untuk menyisipkan data tambahan ke dalam token setelah pengguna berhasil login. Misalnya, mengecek ketersediaan pengguna di database atau menambahkan atribut seperti `role` atau `fullname` ke dalam token. Dengan begitu, data ini bisa digunakan di berbagai sisi aplikasi tanpa harus melakukan query ke database secara terus-menerus pada setiap request.

### 4. Mengapa perlu multi-role?
Multi-role diperlukan agar aplikasi dapat membatasi hak akses setiap pengguna sesuai dengan tugas dan tanggung jawabnya. Misalnya, role `admin` memiliki akses penuh untuk mengatur sistem, role `editor` dapat mengelola konten, sedangkan role `user` hanya bisa melihat data. Hal ini meningkatkan keamanan dan memastikan pengguna hanya mengakses fitur yang relevan dengan izin mereka.

### 5. Apa risiko jika tidak menyimpan user ke database?
Jika data user dari Google tidak disimpan di database lokal aplikasi, kita akan kesulitan dalam menerapkan fitur yang bergantung pada entitas pengguna tersebut. Kita tidak bisa memberikan role khusus, mencatat pelacakan aktivitas pengguna, atau menghubungkan pengguna dengan data relasional lain di aplikasi (seperti artikel yang ditulis atau produk yang dibeli).