# PBF - Semester 6

Repository ini berisi kumpulan tugas dan praktikum untuk mata kuliah **Pemrograman Berbasis Framework (PBF)** Semester 6.

## Struktur Direktori

Setiap materi atau tugas praktikum disimpan dalam foldernya masing-masing:

- **Praktikum 002**: Implementasi dasar antarmuka pengguna (UI) menggunakan Next.js dan styling kustom. Berisi halaman Home dan About.
- **Praktikum 003**: Implementasi routing (Nested & Dynamic Routing), pembuatan komponen Navbar, Global Layout (App Shell), dan Footer.
- **Praktikum 004**: Advanced routing, catch-all routes, navigasi imperatif, dan simulasi redirect login.
- **Praktikum 005**: Pembahasan style di Next.js meliputi Global CSS, CSS Module, Inline Styling, kombinasi SASS (SCSS), dan Tailwind CSS.
- **Praktikum 006**: Pembuatan Custom Document, pengaturan tag title, halaman Error Custom (404), dan rendering static assets.
- **Praktikum 007**: Pembuatan REST API internal Next.js menggunakan Firebase dan penggabungan operasi CRUD dasar.
- **Praktikum 008**: Refactor state *data fetching* dari `useEffect` ke `useSWR`, pembuatan UI interaktif dengan *Skeleton Loading* CSS teranimasi, dan pengenalan fundamental perenderan CSR, SSR, SSG.
- **Praktikum 009**: Implementasi Server-Side Rendering (SSR) menggunakan `getServerSideProps`, setup data produk, dan perbandingan fungsionalitas antara SSR dan CSR.
- **Praktikum 010**: Implementasi Static Site Generation (SSG) untuk perenderan halaman static dan setup halaman server.
- **Praktikum 011**: Implementasi *dynamic routing* untuk SSG, mekanisme eksekusi fungsi *fetch* berbasis CSR dan *loading state* interaktif, serta evaluasi perbandingan metode perenderan (CSR, SSR, dan SSG).
- **Praktikum 012**: Implementasi fungsionalitas *Incremental Static Regeneration* (ISR) berserta mekanisme pembaruan sinkronisasi berjangka waktu, fitur *on-demand revalidate* via REST API, penambahan kontrol *token security* pada titik api (*endpoint*), dan evaluasi teoretis terhadap metode ISR dan SSG.
- **Praktikum 013**: Implementasi *Middleware* pada Next.js untuk mencegat request, pengaturan proteksi rute (*route restriction*), pengalihan halaman (*redirect*), dan simulasi sistem otentikasi (login).
- **Praktikum 014**: Implementasi Autentikasi dan Otorisasi menggunakan NextAuth.js, pengelolaan *Session* berbasis JWT (*JSON Web Token*), integrasi tombol *Login/Logout* responsif dengan data pengguna dinamis, serta proteksi keamanan rute (misalnya halaman profil) dengan menggunakan *Middleware*.
- **Praktikum 015**: Implementasi fitur Registrasi pengguna, pembuatan antarmuka (*view*) halaman register, integrasi REST API endpoint untuk operasi penambahan data pengguna pada Firebase Firestore, serta pengamanan data melalui mekanisme *hashing* password menggunakan library `bcrypt`.
- **Praktikum 016**: Implementasi Custom Login Page terintegrasi dengan NextAuth dan Firebase (Credentials Provider), manajemen hak akses pengguna (*role-based token*), pemanfaatan *Callback URL*, serta penambahan sistem keamanan *Middleware* tingkat lanjut untuk proteksi halaman admin dan pengguna berdasarkan *role*.
- **Praktikum 017**: Implementasi Autentikasi OAuth (Google dan GitHub) menggunakan NextAuth, sinkronisasi data kredensial pengguna ke Firebase Firestore, pengelolaan *multi-role* berjenjang (User, Editor), refactoring *database service* agar *reusable*, serta optimasi pemuatan *avatar* menggunakan komponen `next/image`.
- **Praktikum 018**: Optimasi performa Next.js meliputi *Image Optimization* (`next/image`), *Font Optimization* (`next/font`), *Script Optimization* (`next/script` untuk integrasi *analytics*), dan penggunaan komponen *Dynamic Import*.
- **Praktikum 019**: Implementasi Unit Testing menggunakan Jest dan React Testing Library, mencakup konfigurasi *testing environment*, pembuatan *coverage report*, *snapshot testing*, serta *mocking* dependensi eksternal seperti router Next.js (`useRouter`).
- **Praktikum-020**: Langkah deployment aplikasi Next.js ke production (Vercel) secara CI/CD melalui integrasi GitHub, melingkupi konfigurasi *environment variables* prod, setup URL redirect *Google OAuth* (*Google Cloud Console*), serta pengujian web life. Aplikasi ini dapat diakses langsung di: [https://pbf-praktikum-020.vercel.app/](https://pbf-praktikum-020.vercel.app/)

## Laporan Praktikum

Akses laporan praktikum melalui link berikut:
- [Laporan Praktikum 2](Laporan%20Jobsheet/praktikum-002.md)
- [Laporan Praktikum 3](Laporan%20Jobsheet/praktikum-003.md)
- [Laporan Praktikum 4](Laporan%20Jobsheet/praktikum-004.md)
- [Laporan Praktikum 5](Laporan%20Jobsheet/praktikum-005.md)   
- [Laporan Praktikum 6](Laporan%20Jobsheet/praktikum-006.md)
- [Laporan Praktikum 7](Laporan%20Jobsheet/praktikum-007.md)
- [Laporan Praktikum 8](Laporan%20Jobsheet/praktikum-008.md)
- [Laporan Praktikum 9](Laporan%20Jobsheet/praktikum-009.md)
- [Laporan Praktikum 10](Laporan%20Jobsheet/praktikum-010.md)
- [Laporan Praktikum 11](Laporan%20Jobsheet/praktikum-011.md)
- [Laporan Praktikum 12](Laporan%20Jobsheet/praktikum-012.md)
- [Laporan Praktikum 13](Laporan%20Jobsheet/praktikum-013.md)
- [Laporan Praktikum 14](Laporan%20Jobsheet/praktikum-014.md)
- [Laporan Praktikum 15](Laporan%20Jobsheet/praktikum-015.md)
- [Laporan Praktikum 16](Laporan%20Jobsheet/praktikum-016.md)
- [Laporan Praktikum 17](Laporan%20Jobsheet/praktikum-017.md)
- [Laporan Praktikum 18](Laporan%20Jobsheet/praktikum-018.md)
- [Laporan Praktikum 19](Laporan%20Jobsheet/praktikum-019.md)
- [Laporan Praktikum 20](Laporan%20Jobsheet/praktikum-020.md)

## Cara Menjalankan

Setiap folder praktikum memiliki dependensinya sendiri. Untuk menjalankan salah satu proyek (misalnya Praktikum 002):

1. **Masuk ke direktori praktikum:**
   ```bash
   cd "Praktikum 002"
   ```

2. **Install dependencies:**
   Pastikan Node.js sudah terinstall, lalu jalankan:
   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   # atau
   yarn dev
   ```

4. **Buka aplikasi:**
   Buka browser dan kunjungi [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya.
   Akses aplikasi live di: [https://pbf-praktikum-020.vercel.app/](https://pbf-praktikum-020.vercel.app/)

## Teknologi yang Digunakan

- **Next.js**: Framework React untuk pengembangan web.
- **TypeScript**: Bahasa pemrograman yang digunakan (file berekstensi `.tsx` dan `.ts`).
- **CSS Modules / Global CSS**: Untuk styling komponen.