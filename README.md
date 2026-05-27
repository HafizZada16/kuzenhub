# Kuzen Project

Kuzen adalah platform streaming komprehensif yang dikhususkan untuk para penggemar Anime, Donghua, dan Komik (Manga/Manhwa/Manhua). Proyek ini terdiri dari dua bagian utama:

1. **Kuzen Web & Backend (`kuzen_v4`)** - Dibangun dengan Laravel.
2. **Kuzen Mobile App (`kuzen_app`)** - Dibangun dengan React Native (Expo).

---

## Live Demo & Download

- **Website Resmi:** [Kuzen Web](https://kuzen.web.id) _(Ubah dengan link web Anda)_
- **Download Aplikasi Android:** [Unduh APK Kuzen Terbaru (v1.1.3)](https://github.com/HafizZada16/kuzenhub/releases/latest)

---

## Arsitektur Proyek

### 1. Backend & Web (`kuzen_v4`)

Sistem backend yang melayani Website sekaligus menyediakan API yang aman untuk aplikasi mobile.

- **Framework:** Laravel 11
- **Database:** Supabase (PostgreSQL)
- **Fitur Utama:**
    - Manajemen Pengguna & Autentikasi terpusat
    - RESTful API (terproteksi & bebas CSRF untuk _mobile app_)
    - Integrasi langsung ke Supabase REST API & Storage

### 2. Mobile App (`kuzen_app`)

Aplikasi mobile lintas platform dengan antarmuka dinamis dan _smooth_.

- **Framework:** React Native dengan Expo & Expo Router
- **Desain UI:** Lucide Icons, Custom SafeArea, Linear Gradients
- **Fitur Utama:**
    - Streaming Anime & Donghua Multi-server (Resolusi 360p - 1080p)
    - Baca Komik (_Reader_ interaktif)
    - Fitur Bookmark & Riwayat Tontonan (_History_)
    - Manajemen Profil (Ubah Username, Email, Sandi, & Foto Profil)
    - Tampilan responsif yang aman dari _Notch_ / _Punch-hole Camera_

---

## Fitur Unggulan

- **Katalog Terpadu:** Platform serba ada untuk menonton Anime & Donghua, serta membaca Komik (Manga/Manhwa/Manhua).
- **Streaming Cepat & Multi-Server:** Nikmati tontonan dengan opsi resolusi mulai dari 360p hingga 1080p secara stabil.
- **Reader Komik Interaktif:** Pengalaman membaca yang mulus dan dirancang khusus untuk kenyamanan di perangkat _mobile_.
- **Bookmark & Riwayat Otomatis:** Lanjutkan episode atau chapter yang tertunda dan simpan semua daftar tontonan favorit Anda.
- **Manajemen Profil Penuh:** Kontrol akun Anda sepenuhnya—mulai dari username, email, kata sandi, hingga sinkronisasi otomatis foto profil.
- **Antarmuka Modern:** Desain UI dinamis, elegan, dan dioptimalkan (aman dari _notch_ & _punch-hole_) untuk Android & iOS.

---

