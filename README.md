# Kuzen Project 

Kuzen adalah platform streaming komprehensif yang dikhususkan untuk para penggemar Anime, Donghua, dan Komik (Manga/Manhwa/Manhua). Proyek ini terdiri dari dua bagian utama:
1. **Kuzen Web & Backend (`kuzen_v4`)** - Dibangun dengan Laravel.
2. **Kuzen Mobile App (`kuzen_app`)** - Dibangun dengan React Native (Expo).

---

## Live Demo & Download

- **Website Resmi:** [Kuzen Web](https://kuzen.web.id) *(Ubah dengan link web Anda)*
- **Download Aplikasi Android:** [Unduh APK Kuzen Terbaru (v1.1.3)]([https://github.com/username/repo/releases/latest](https://github.com/HafizZada16/kuzenhub/releases/latest)) *(Ubah dengan link rilis GitHub/APK Anda)*

---

## Arsitektur Proyek

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

## Fitur Unggulan

- **Katalog Terpadu:** Platform serba ada untuk menonton Anime & Donghua, serta membaca Komik (Manga/Manhwa/Manhua).
- **Streaming Cepat & Multi-Server:** Nikmati tontonan dengan opsi resolusi mulai dari 360p hingga 1080p secara stabil.
- **Reader Komik Interaktif:** Pengalaman membaca yang mulus dan dirancang khusus untuk kenyamanan di perangkat *mobile*.
- **Bookmark & Riwayat Otomatis:** Lanjutkan episode atau chapter yang tertunda dan simpan semua daftar tontonan favorit Anda.
- **Manajemen Profil Penuh:** Kontrol akun Anda sepenuhnya—mulai dari username, email, kata sandi, hingga sinkronisasi otomatis foto profil.
- **Antarmuka Modern:** Desain UI dinamis, elegan, dan dioptimalkan (aman dari *notch* & *punch-hole*) untuk Android & iOS.

---

## Fitur Terbaru (Changelog v1.1.3)
- Pembaruan mekanisme API dari `PUT` ke `POST` agar lebih stabil di *shared hosting*.
- Perbaikan *stale closure bug* pada pembaruan akun ganda secara bersamaan.
- UI *Floating Header* yang 100% aman untuk semua layar *Android* & *iOS*.
- Sinkronisasi otomatis *Avatar/Profile Picture* dengan Storage Supabase.

---
*Dibuat dengan ❤️ untuk komunitas Wibu.*
