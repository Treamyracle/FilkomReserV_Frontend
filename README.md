Sistem Reservasi Ruangan Terintegrasi - FILKOM UB

Solusi modern untuk mempermudah proses peminjaman dan manajemen ruangan di lingkungan Fakultas Ilmu Komputer, Universitas Brawijaya.

Demo Langsung: https://feaps.vercel.app/

🎯 Latar Belakang: Mengatasi Keterfragmentasian

Ide untuk aplikasi ini lahir dari pengamatan langsung terhadap proses peminjaman ruangan di fakultas kami. Sistem yang ada saat ini sangat terfragmentasi, memakan waktu, dan rentan terhadap human error.

Proses manual yang ada mengharuskan mahasiswa dan staf untuk:

Mengisi Google Form untuk pengajuan awal.

Membuka Spreadsheet terpisah untuk mengecek ketersediaan jadwal secara manual.

Melakukan konfirmasi dan tindak lanjut (follow-up) secara manual melalui WhatsApp kepada admin.

Alur yang terputus-putus ini seringkali menciptakan kebingungan, memperlambat proses persetujuan, dan menyulitkan admin untuk melacak serta mengelola jadwal ruangan secara efisien.

✨ Solusi Kami: Satu Platform Terpusat

Aplikasi ini hadir sebagai solusi all-in-one yang mengintegrasikan seluruh alur reservasi ke dalam satu dasbor yang intuitif dan mudah digunakan.

Kami mengubah proses yang rumit dan manual menjadi sebuah pengalaman digital yang mulus:

Bagi Mahasiswa/Peminjam: Memberikan kemudahan dalam melihat ketersediaan ruangan secara real-time, melakukan pemesanan, dan melacak status persetujuan tanpa perlu berpindah-pindah platform.

Bagi Admin/Pengelola: Menyediakan satu dasbor terpusat untuk mengelola semua permintaan masuk, menyetujui atau menolak reservasi dengan satu klik, dan memiliki catatan digital yang rapi.

🚀 Alur Kerja Sistem

Aplikasi ini dirancang dengan dua alur pengguna utama untuk memastikan proses yang efisien dari awal hingga akhir.

1. Alur Mahasiswa (Peminjam)

Login: Pengguna masuk ke akun mereka yang sudah terdaftar.

Jelajahi Ruangan: Pengguna dapat menelusuri katalog ruangan, lengkap dengan foto, fasilitas, dan kapasitas.

Cek Ketersediaan: Pengguna memilih ruangan dan melihat kalender ketersediaan jadwal (tanggal dan jam) secara real-time.

Ajukan Peminjaman: Pengguna mengisi formulir pengajuan yang terintegrasi (melampirkan file proposal, deskripsi acara, dll.) dan mengirimkannya.

Pantau Status: Pengguna dapat melacak status pengajuan mereka (Diproses, Diterima, Ditolak) langsung di dasbor notifikasi akun mereka.

2. Alur Admin (Pengelola)

Login: Admin masuk ke akun khusus pengelola.

Review Permintaan: Admin melihat semua permintaan peminjaman yang masuk dalam satu dasbor manajemen.

Validasi Detail: Admin dapat mengklik setiap permintaan untuk meninjau detailnya, termasuk file yang diunggah dan deskripsi acara.

Ambil Tindakan: Admin menyetujui ("Diterima") atau menolak ("Ditolak") permintaan tersebut dengan satu klik.

Selesai: Status di akun mahasiswa otomatis diperbarui, menginformasikan mereka tentang keputusan tersebut.

🌟 Fitur Utama

Katalog Ruangan Dinamis: Galeri ruangan dengan detail lengkap (fasilitas, kapasitas, foto).

Pengecekan Ketersediaan Real-time: Kalender interaktif yang menunjukkan slot waktu yang tersedia dan yang sudah terisi.

Sistem Notifikasi Terintegrasi: Pelacakan status pemesanan (Diproses, Diterima, Ditolak) untuk pengguna.

Dasbor Admin: Panel manajemen terpusat untuk mengelola, menyetujui, dan menolak permintaan reservasi.

Otentikasi Berbasis Peran: Perbedaan hak akses yang jelas antara pengguna (mahasiswa) dan admin.

💻 Tumpukan Teknologi (Tech Stack)

(Pastikan untuk mengisi bagian ini dengan teknologi yang Anda gunakan)

Framework: [Contoh: React.js / Vue.js / Next.js]

Styling: [Contoh: Tailwind CSS / Chakra UI / Material UI]

Manajemen State: [Contoh: Zustand / Redux Toolkit / Context API]

API Client: [Contoh: Axios / React Query / SWR]

Routing: [Contoh: React Router v6]

Deployment: Vercel

🚀 Instalasi & Cara Menjalankan Lokal

(Bagian ini wajib ada agar orang lain bisa menjalankan kode Anda)

Clone repositori ini

git clone [https://github.com/](https://github.com/)[USERNAME-ANDA]/[NAMA-REPO-ANDA].git


Masuk ke direktori proyek

cd [NAMA-REPO-ANDA]


Install semua dependencies

# Jika menggunakan npm
npm install

# Jika menggunakan yarn
yarn install


Buat file .env.local
Buat file bernama .env.local di root proyek dan tambahkan URL API backend Anda.

# Ganti dengan URL API backend Anda
REACT_APP_API_URL=[https://api-backend-anda.com](https://api-backend-anda.com) 


Jalankan aplikasi

# Jika menggunakan npm
npm run start

# Jika menggunakan yarn
yarn start


Buka http://localhost:3000 di browser Anda.

👥 Kontributor

(Tulis nama Anda dan tim Anda di sini)

[Nama Anda] - [Peran Anda, misal: Frontend Developer] - [Link GitHub/LinkedIn Anda]

[Nama Rekan 1] - [Peran, misal: Backend Developer] - [Link GitHub/LinkedIn]

[Nama Rekan 2] - [Peran, misal: UI/UX Designer] - [Link GitHub/LinkedIn]
