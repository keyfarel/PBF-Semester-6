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

## Teknologi yang Digunakan

- **Next.js**: Framework React untuk pengembangan web.
- **TypeScript**: Bahasa pemrograman yang digunakan (file berekstensi `.tsx` dan `.ts`).
- **CSS Modules / Global CSS**: Untuk styling komponen.