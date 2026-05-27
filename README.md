# Kuzen Project 🎬🎌

Kuzen adalah platform streaming komprehensif yang dikhususkan untuk para penggemar Anime, Donghua, dan Komik (Manga/Manhwa/Manhua). Proyek ini terdiri dari dua bagian utama:
1. **Kuzen Web & Backend (`kuzen_v4`)** - Dibangun dengan Laravel.
2. **Kuzen Mobile App (`kuzen_app`)** - Dibangun dengan React Native (Expo).

---

## 🚀 Live Demo & Download

- 🌐 **Website Resmi:** [Kunjungi Kuzen Web](https://domain-anda.com) *(Ubah dengan link web Anda)*
- 📱 **Download Aplikasi Android:** [Unduh APK Kuzen Terbaru (v1.1.3)](https://github.com/username/repo/releases/latest) *(Ubah dengan link rilis GitHub/APK Anda)*

---

## 📦 Arsitektur Proyek

### 1. Backend & Web (`kuzen_v4`)
Sistem backend yang melayani Website sekaligus menyediakan API yang aman untuk aplikasi mobile.
- **Framework:** Laravel 11
- **Database:** Supabase (PostgreSQL)
- **Fitur Utama:** 
  - Manajemen Pengguna & Autentikasi terpusat
  - RESTful API (terproteksi & bebas CSRF untuk *mobile app*)
  - Integrasi langsung ke Supabase REST API & Storage

### 2. Mobile App (`kuzen_app`)
Aplikasi mobile lintas platform dengan antarmuka dinamis dan *smooth*.
- **Framework:** React Native dengan Expo & Expo Router
- **Desain UI:** Lucide Icons, Custom SafeArea, Linear Gradients
- **Fitur Utama:**
  - Streaming Anime & Donghua Multi-server (Resolusi 360p - 1080p)
  - Baca Komik (*Reader* interaktif)
  - Fitur Bookmark & Riwayat Tontonan (*History*)
  - Manajemen Profil (Ubah Username, Email, Sandi, & Foto Profil)
  - Tampilan responsif yang aman dari *Notch* / *Punch-hole Camera*

---

## 🛠️ Instalasi & Pengembangan Lokal

### Menjalankan Backend (`kuzen_v4`)
1. Masuk ke direktori: `cd kuzen_v4`
2. Instal dependensi PHP: `composer install`
3. Salin file environment: `cp .env.example .env`
4. Konfigurasikan kunci rahasia Supabase Anda di `.env`:
   ```env
   SUPABASE_URL=https://xyz.supabase.co
   SUPABASE_SERVICE_KEY=your-service-key
   ```
5. Jalankan server lokal: `php artisan serve`

### Menjalankan Mobile App (`kuzen_app`)
1. Masuk ke direktori: `cd kuzen_app`
2. Instal dependensi Node.js: `npm install`
3. Pastikan konfigurasi URL API Laravel Anda sudah disesuaikan di dalam folder `src/services`.
4. Jalankan Expo: `npm run start`
   - Tekan `a` untuk menjalankan emulator Android, atau *scan* QR code menggunakan aplikasi Expo Go di HP Anda.

### Membangun APK (Release)
Untuk mem-build APK versi rilis secara lokal:
```bash
cd kuzen_app/android
.\gradlew assembleRelease
```
*(File APK akan berada di `android/app/build/outputs/apk/release/`)*

---

## ✨ Fitur Terbaru (Changelog v1.1.3)
- Pembaruan mekanisme API dari `PUT` ke `POST` agar lebih stabil di *shared hosting*.
- Perbaikan *stale closure bug* pada pembaruan akun ganda secara bersamaan.
- UI *Floating Header* yang 100% aman untuk semua layar *Android* & *iOS*.
- Sinkronisasi otomatis *Avatar/Profile Picture* dengan Storage Supabase.

---
*Dibuat dengan ❤️ untuk komunitas Wibu.*
