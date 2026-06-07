## ✨ Tentang MoneyMind

**MoneyMind** adalah platform manajemen keuangan modern yang dirancang untuk menyederhanakan pencatatan transaksi sehari-hari. Dengan menggabungkan teknologi **OCR**, **AI Classification**, dan **analisis pengeluaran cerdas**, MoneyMind membantu pengguna memahami pola keuangan mereka secara mendalam — langsung dari genggaman tangan.

---

## 🚀 Fitur Utama

### 🧾 Tesscard (OCR Struk)
Cukup foto struk belanja, dan MoneyMind akan otomatis membaca serta mengekstrak data transaksi menggunakan teknologi **OCR (Optical Character Recognition)**. Tidak perlu input manual lagi.

### 🤖 AI Classification
Setiap transaksi secara otomatis dikategorikan oleh AI — makanan, transportasi, belanja, hiburan, dan lainnya. Hemat waktu, tanpa salah kategori.

### 📱 PWA (Progressive Web App)
Dapat diinstall di perangkat Android maupun iOS layaknya aplikasi native. Akses cepat, ringan, dan bisa digunakan meski tanpa koneksi internet.

### 🔔 Scheduled Notifications
Pengingat keuangan terjadwal untuk membantu pengguna tetap on-track dengan anggaran dan target tabungan mereka.

### 📊 AI Spending Analysis
Analisis mendalam berbasis AI untuk mendeteksi pola pengeluaran, tren bulanan, dan rekomendasi efisiensi keuangan yang personal.

### 📈 Dashboard Modern
Visualisasi data keuangan lengkap dengan grafik interaktif, laporan bulanan, dan ringkasan transaksi yang mudah dipahami.

---

## 🏗️ Teknologi

| Layer | Teknologi |
|---|---|
| **Frontend** | React.js, TailwindCSS, PWA |
| **Backend** | PHP |
| **Database** | MySQL |
| **OCR** | Tesseract.js / Tesscard Engine |
| **AI** | Classification & Spending Analysis Model |

---

## 🌐 Demo

👉 **Live App:** [https://moneymind.cloud](https://moneymind.cloud)

---

## ⚙️ Instalasi Lokal

```bash
# Clone repository
git clone https://github.com/username/moneymind.git
cd moneymind

# Install dependencies frontend
npm install

# Jalankan development server
npm run dev
```

> Untuk konfigurasi backend (PHP + MySQL), salin file `.env.example` menjadi `.env` dan sesuaikan koneksi database.

---

## 📁 Struktur Proyek

```
moneymind/
├── src/
│   ├── components/       # Komponen UI reusable
│   ├── pages/            # Halaman utama aplikasi
│   ├── hooks/            # Custom React hooks
│   └── utils/            # Helper & utilities
├── backend/
│   ├── api/              # REST API endpoints
│   ├── models/           # Database models
│   └── config/           # Konfigurasi database
├── public/               # Static assets & PWA manifest
└── README.md
```

---

## 🤝 Kontribusi

Kontribusi sangat terbuka dan diterima dengan senang hati! 🙌

1. **Fork** repository ini
2. Buat branch fitur baru: `git checkout -b feat/nama-fitur`
3. Commit perubahan: `git commit -m 'feat: tambah fitur X'`
4. Push ke branch: `git push origin feat/nama-fitur`
5. Buka **Pull Request**

Untuk bug atau saran fitur, silakan buka [Issue](https://github.com/username/moneymind/issues) baru.

---

## 📄 Lisensi

Didistribusikan di bawah lisensi **MIT**. Lihat [`LICENSE`](LICENSE) untuk informasi lebih lanjut.

---

<div align="center">

Made with ❤️ by the MoneyMind Team

⭐ **Jangan lupa kasih star kalau project ini bermanfaat!** ⭐

</div>
