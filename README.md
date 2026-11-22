# Latihan TKA SD

Kumpulan aplikasi latihan Tes Kemampuan Akademik (TKA) Kelas 6 SD, lengkap dengan kunci jawaban dan pembahasan. Bisa dibuka di HP, laptop, atau tablet lewat GitHub Pages.

## Daftar latihan
| Mapel | Paket | Folder |
|---|---|---|
| Matematika | Latihan Per Bagian (10 topik, 120 soal, per sub-bagian & level, simpan soal) | `matematika/latihan-per-bagian/` |
| Matematika | Simulasi Paket 2 (30 soal) | `matematika/paket-2/` |

## Struktur
```
index.html              ← halaman depan (daftar semua latihan)
matematika/paket-2/     ← satu folder per paket
```
Tambah paket baru: buat folder `<mapel>/paket-N/index.html`, lalu tambahkan link-nya di `index.html` depan.

## Menambah soal latihan per bagian
Soal ada di `matematika/latihan-per-bagian/soal.js` (soal awal) dan `tambah.js` (sub-bagian, versi mudah, dan soal tambahan).
Soal baru cukup ditambahkan di **paling bawah** daftar `BARU.<topik>` di `tambah.js`, supaya soal yang sudah disimpan anak tidak bergeser.
