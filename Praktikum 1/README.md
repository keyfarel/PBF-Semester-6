## Dokumentasi

### Tugas 1
![Tugas 1](public/docs/tugas_1.png)

### Tugas 2
![Tugas 2](public/docs/tugas_2.png)

## Pertanyaan Refleksi

1. **Mengapa Pages Router disebut sebagai routing berbasis file?**
   Pages Router disebut sebagai routing berbasis file karena struktur URL aplikasi ditentukan langsung oleh struktur file dan folder di dalam direktori `pages`.

   Setiap file JavaScript/TypeScript (.js, .jsx, .ts, .tsx) yang diekspor sebagai komponen React di dalam folder `pages` secara otomatis menjadi rute yang dapat diakses.
   
   Contohnya, file `pages/about.tsx` akan menjadi rute `/about`.


2. **Apa perbedaan Next.js dengan React standar (CRA)?**
   - **Rendering:** Next.js mendukung Server-Side Rendering (SSR) dan Static Site Generation (SSG) secara bawaan untuk performa dan SEO yang lebih baik. React standar (CRA) biasanya hanya menggunakan Client-Side Rendering (CSR).


   - **Routing:** Next.js memiliki sistem routing berbasis file otomatis. React standar memerlukan pustaka tambahan seperti `react-router-dom` untuk menangani routing.

   
   - **Fitur Bawaan:** Next.js dilengkapi dengan fitur-fitur seperti optimasi gambar, API routes, dan middleware. React standar lebih minimalis dan memerlukan konfigurasi manual atau pustaka tambahan untuk fitur-fitur tersebut.


3. **Apa fungsi perintah npm run dev?**

   Perintah `npm run dev` berfungsi untuk menjalankan server pengembangan (development server).
   
   Server ini mendukung fitur-fitur seperti *Fast Refresh* (Hot Module Replacement), yang memungkinkan pengembang melihat perubahan kode secara instan di browser tanpa perlu memuat ulang halaman secara manual, serta menampilkan pesan error yang detail untuk debugging.


4. **Apa perbedaan npm run dev dan run build?**
   - **npm run dev:** Digunakan selama proses pengembangan. Kode tidak diminifikasi, mendukung *hot reloading*, dan menyertakan *source maps* untuk memudahkan debugging. Performa mungkin lebih lambat dibandingkan build production.


   - **npm run build:** Digunakan untuk memepersiapkan aplikasi ke lingkungan produksi (*production*). Perintah ini melakukan kompilasi, minifikasi kode, optimasi aset, dan membangun halaman statis (SSG) jika memungkinkan. Hasil build ini siap untuk dijalankan dengan `npm start` dan jauh lebih cepat serta efisien dibandingkan mode dev.