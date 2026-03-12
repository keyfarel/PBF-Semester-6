# Laporan Praktikum 14 - Pemrograman Berbasis Framework

**Nama:** Key Firdausi Alfarel  
**NIM:** 2341729186  

---

## Daftar Isi

- [Langkah-Langkah Praktikum](#langkah-langkah-praktikum)
- [Pengujian](#pengujian)
- [Pertanyaan Analisis](#pertanyaan-analisis)

---

## Langkah-Langkah Praktikum

### 1. Membuat Register View

![Buka views/auth/register](public/docs/langkah-1a.png)

*Buka views/auth/register*

![Modifikasi views/auth/register/index.tsx](public/docs/langkah-1b.png)

*Modifikasi views/auth/register/index.tsx*

![Modifikasi views/auth/register/register.module.scss](public/docs/langkah-1c.png)

*Modifikasi views/auth/register/register.module.scss*

![Tampilan Halaman Register](public/docs/langkah-1d.png)

*Tampilan Halaman Register*

### 2. Membuat API Register

![menambah dan memodifikasi pages/api/register.ts](public/docs/langkah-2a.png)

*menambah dan memodifikasi pages/api/register.ts*

![Modifikasi utils/db/servicefirebase.ts](public/docs/langkah-2b.png)

*Modifikasi utils/db/servicefirebase.ts*

![Modifikasi views/auth/register/index.tsx](public/docs/langkah-2c.png)

*Modifikasi views/auth/register/index.tsx*

![Mengisi form register](public/docs/langkah-2d.png)

*Mengisi form register*

![Register berhasil dan mengarah ke halaman login](public/docs/langkah-2e.png)

*Register berhasil dan mengarah ke halaman login*

### 3. Install bcrypt

![install bcrypt](public/docs/langkah-3a.png)

*install bcrypt*

![Modifikasi utils/db/servicefirebase.ts](public/docs/langkah-3b.png)

*Modifikasi utils/db/servicefirebase.ts*

![Modifikasi views/auth/register/register.module.scss](public/docs/langkah-3c1.png)
![Modifikasi views/auth/register/register.module.scss](public/docs/langkah-3c2.png)

*Modifikasi views/auth/register/register.module.scss*

![Test register dengan akun belum terdaftar](public/docs/langkah-3d.png)

*Test register dengan akun belum terdaftar*

![Proses registrasi ditandai dengan loading](public/docs/langkah-3e.png)

*Proses registrasi ditandai dengan loading*

![Register berhasil dan mengarah ke login page](public/docs/langkah-3f.png)

*Register berhasil dan mengarah ke login page*

![Register gagal karena akun sudah terdaftar](public/docs/langkah-3g.png)

*Register gagal karena akun sudah terdaftar*

![Data yang tersimpan di firestore](public/docs/langkah-3h.png)

*Data yang tersimpan di firestore*

## Pengujian

### Uji 1 - Register Baru

![Test register dengan akun belum terdaftar](public/docs/langkah-3d.png)

*Test register dengan akun belum terdaftar*

![Proses registrasi ditandai dengan loading](public/docs/langkah-3e.png)

*Proses registrasi ditandai dengan loading*

![Register berhasil dan mengarah ke login page](public/docs/langkah-3f.png)

*Register berhasil dan mengarah ke login page*

![Data yang tersimpan di firestore](public/docs/langkah-3h.png)

*Data yang tersimpan di firestore*

### Uji 2 - Email Sudah Ada

![Register gagal karena akun sudah terdaftar](public/docs/langkah-3g.png)

*Register gagal karena akun sudah terdaftar*

### Uji 3 - Method GET

![Method GET not allowed](public/docs/uji-3.png)

*Method GET not allowed*