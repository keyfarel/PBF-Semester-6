# Laporan Praktikum 2 - Pemrograman Berbasis Framework

**Nama:** Key Firdausi Alfarel  
**NIM:** 2341729186  

---

## Daftar Isi
- [Langkah-Langkah Praktikum](#langkah-langkah-praktikum)
  - [1. Global CSS](#1-global-css)
  - [2. CSS Module (Local Scope)](#2-css-module-local-scope)
  - [3. Styling untuk Pages (CSS Module)](#3-styling-untuk-pages-css-module)
  - [4. Styling untuk Components (CSS Module)](#4-styling-untuk-components-css-module)
  - [5. Refactoring Struktur Project (Best Practice)](#5-refactoring-struktur-project-best-practice)
  - [6. Inline Styling (CSS-in-JS)](#6-inline-styling-css-in-js)
  - [7. Kombinasi Global CSS + CSS Module](#7-kombinasi-global-css--css-module)
  - [8. SCSS (SASS)](#8-scss-sass)
  - [9. Tailwind CSS](#9-tailwind-css)
- [Tugas Mandiri](#tugas-mandiri)
  - [Tugas 1](#tugas-1)
  - [Tugas 2](#tugas-2)
  - [Tugas 3](#tugas-3)
- [F. Pertanyaan Refleksi](#f-pertanyaan-refleksi)

---

## Langkah-Langkah Praktikum

### 1. Global CSS

![global.css Code](public/docs/langkah-1a.png)
*global.css Code*

![_app.tsx Code](public/docs/langkah-1b.png)
*_app.tsx Code*

### 2. CSS Module (Local Scope)

![Navbar Folder](public/docs/langkah-2a.png)
*Navbar Folder*

![global.css Code Update](public/docs/langkah-2b.png)
*global.css Code Update*

![navbar.module.css Code](public/docs/langkah-2c.png)
*navbar.module.css Code*

![navbar.tsx Code](public/docs/langkah-2d.png)
*navbar.tsx Code*

![Navbar UI](public/docs/langkah-2e.png)
*Navbar UI*

### 3. Styling untuk Pages (CSS Module)

![Login Folder](public/docs/langkah-3a.png)
*Login Folder*

![login.module.css Code](public/docs/langkah-3b.png)
*login.module.css Code*

![login.tsx Code](public/docs/langkah-3c.png)
*login.tsx Code*

![Login Code Update](public/docs/langkah-3d.png)
*Login Code Update*

### 4. Styling untuk Components (CSS Module)

![App Shell Code](public/docs/langkah-4a.png)
*App Shell Code*

![Login UI](public/docs/langkah-4b.png)
*Login UI*

![App Shell Update](public/docs/langkah-4c.png)
*App Shell Update*

![Login Console](public/docs/langkah-4d.png)
*Login Console*

### 5. Refactoring Struktur Project (Best Practice)

![Login Folder](public/docs/langkah-5a.png)
*Login Folder*

![Navbar Folder Update Views](public/docs/langkah-5b.png)
*Navbar Folder Update Views*

![Login Css Module Update](public/docs/langkah-5c.png)
*Login Css Module Update*

![Login Code Update](public/docs/langkah-5d.png)
*Login Code Update*

![Login Code Views Update](public/docs/langkah-5e.png)
*Login Code Views Update*

![Login UI](public/docs/langkah-5f.png)
*Login UI*

### 6. Inline Styling (CSS-in-JS)

![Login Inline Styling](public/docs/langkah-6a.png)
*Login Inline Styling*

![Login UI Update](public/docs/langkah-6b.png)
*Login UI Update*

### 7. Kombinasi Global CSS + CSS Module

![Global CSS Update](public/docs/langkah-7a.png)
*Global CSS Update*

![Update Navbar](public/docs/langkah-7b.png)
*Update Navbar*

### 8. SCSS (SASS)

![package.json Update add sass](public/docs/langkah-8a.png)
*package.json Update add sass*

![add color.scss](public/docs/langkah-8b.png)
*add color.scss*

![add schema code](public/docs/langkah-8c.png)
*add schema code*

![add login module scss](public/docs/langkah-8d.png)
*add login module scss*

![login code update](public/docs/langkah-8e.png)
*login code update*

![import color.scss](public/docs/langkah-8f.png)
*import color.scss*

![login ui update](public/docs/langkah-8g.png)
*login ui update*

### 9. Tailwind CSS

![install tailwind](public/docs/langkah-9a.png)
*install tailwind*

![config tailwind](public/docs/langkah-9b.png)
*config tailwind*

![import tailwind](public/docs/langkah-9c.png)
*import tailwind*

![login code update](public/docs/langkah-9d.png)
*login code update*

![login ui update](public/docs/langkah-9e.png)
*login ui update*

---

## Tugas Mandiri

### Tugas 1

![register view code](public/docs/tugas-1a.png)
*register view code*

![register pages code update](public/docs/tugas-1b.png)
*register pages code update*

![register scss module update](public/docs/tugas-1c.png)
*register scss module update*

![register ui update](public/docs/tugas-1d.png)
*register ui update*

### Tugas 2

![product pages folder](public/docs/tugas-2a.png)
*product pages folder*

![product pages code update](public/docs/tugas-2b.png)
*product pages code update*

![product pages hero section update](public/docs/tugas-2c.png)
*product pages hero section update*

![product pages ui update](public/docs/tugas-2d.png)
*product pages ui update*

### Tugas 3

![product pages hero section update](public/docs/tugas-3a.png)
*product pages hero section update*

![product pages index update](public/docs/tugas-3b.png)
*product pages index update*

![product pages hero section update](public/docs/tugas-3c.png)
*product pages hero section update*

![product pages ui update](public/docs/tugas-3d.png)
*product pages ui update*

---

## F. Pertanyaan Refleksi

**1. Kapan sebaiknya menggunakan CSS Module dibanding Global CSS?**
Sebaiknya menggunakan **CSS Module** ketika kita ingin memuat gaya (*styling*) yang ruang lingkupnya terbatas (*local scope*) hanya pada komponen tertentu, sehingga tidak akan memengaruhi komponen lain dan menghindari konflik penamaan *class* (*class name collision*). Sebaliknya, **Global CSS** sebaiknya digunakan untuk *styling* dasaryang berlaku secara menyeluruh di seluruh aplikasi, seperti *reset CSS*, *font family* utama, atau *utility classes*.

**2. Apa kelemahan inline styling?**
- **Tidak Mendukung Fitur CSS Lanjutan:** Tidak bisa menggunakan *pseudo-classes* (`:hover`, `:focus`), *pseudo-elements*, dan *media queries*.
- **Kode Sulit Dibaca:** Menyisipkan *style* panjang langsung ke dalam elemen JSX akan membuat baris kode komponen menjadi kotor (*cluttered*).
- **Reusabilitas Rendah:** Sulit digunakan kembali (*reusable*) di tempat lain tanpa meng-copy-paste kode yang sama.
- **Performa *Caching* Kurang Baik:** Browser lebih efisien men-cache file *external stylesheet* dibandingkan *inline style* yang dirender via JS.

**3. Mengapa SCSS cocok untuk project skala besar?**
SCSS cocok untuk proyek besar karena membawa fitur ala pemrograman ke CSS sehingga struktur kode lebih rapi dan modular:
- **Variables:** Menyimpan nilai (*color*, *font-size*) agar konsisten dan mudah diubah secara global.
- **Nesting:** Penulisan selektor CSS secara hierarkis mengikuti DOM HTML.
- **Mixins:** Blok kode *styling* yang bisa digunakan ulang layaknya sebuah fungsi.
- **Partials & Modules:** Pemecahan file CSS raksasa menjadi file kecil-kecil yang bisa di-import, sehingga lebih rapi saat dikelola oleh banyak *developer*.

**4. Apa keunggulan Tailwind dibanding CSS tradisional?**
- **Pengembangan Jauh Lebih Cepat:** Konsep *utility-first* membiarkan kita mengatur *style* langsung dari HTML/JSX tanpa bolak-balik ke CSS.
- **Desain Bawaan yang Konsisten:** Memiliki sistem *spacing scale*, *color palette*, dan *typography* yang baku.
- **Bebas Penamaan Class:** Menghilangkan beban mencari atau berdebat mencari nama class (*seperti BEM conventions*).
- **Ukuran File CSS Super Kecil:** Kompilator Tailwind hanya menyertakan *class utility* yang terpakai ke dalam file *build* akhir (PurgeCSS).
- **Responsif (*Responsive*) Lebih Ringkas:** Menggunakan sintaks *prefix* (seperti `md:`, `lg:`) tanpa perlu membuat aturan `@media query` terpisah.
