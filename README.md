# Latihan TKA SD

Kumpulan aplikasi latihan Tes Kemampuan Akademik (TKA) Kelas 6 SD, lengkap dengan kunci jawaban dan pembahasan. Bisa dibuka di HP, laptop, atau tablet lewat GitHub Pages.

## Daftar latihan
| Mapel | Latihan | Lokasi |
|---|---|---|
| Matematika | Latihan Per Bagian (10 topik, 120 soal) | `matematika/latihan-per-bagian/` |
| Matematika | Simulasi Paket 2 (dari PDF prediksi) | `matematika/paket-2/` |
| Matematika | Simulasi Paket 3 & 4 (soal orisinal) | `sim/data/mtk-3.js`, `mtk-4.js` |
| Bahasa Indonesia | Latihan Per Bagian (7 topik, 63 soal) | `bahasa-indonesia/latihan-per-bagian/` |
| Bahasa Indonesia | Simulasi Paket 1, 2 & 5 (teks & soal orisinal) | `sim/data/bi-1.js`, `bi-2.js`, `bi-5.js` |
| Bahasa Indonesia | Simulasi Paket 3 & 4 (adaptasi pola soal PDF TO DKI & Prediksi; teks ditulis ulang) | `sim/data/bi-3.js`, `bi-4.js` |

## Menambah paket simulasi
Buat file baru di `sim/data/<id>.js` (contoh format: `mtk-3.js` atau `bi-1.js`), lalu tambahkan link `sim/index.html?p=<id>` di halaman depan `index.html`.

## Struktur
```
index.html              ← halaman depan (daftar semua latihan)
matematika/paket-2/     ← satu folder per paket
```
Tambah paket baru: buat folder `<mapel>/paket-N/index.html`, lalu tambahkan link-nya di `index.html` depan.

## Menambah soal latihan per bagian
Soal ada di `matematika/latihan-per-bagian/soal.js` (soal awal) dan `tambah.js` (sub-bagian, versi mudah, dan soal tambahan).
Soal baru cukup ditambahkan di **paling bawah** daftar `BARU.<topik>` di `tambah.js`, supaya soal yang sudah disimpan anak tidak bergeser.
