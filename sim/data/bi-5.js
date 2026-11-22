/* Simulasi TKA Bahasa Indonesia – Paket 5 (orisinal, tingkat menantang / HOTS) */
const PAKET={
id:'bi-5',mapel:'Bahasa Indonesia',judul:'Simulasi Bahasa Indonesia Paket 5',ket:'Orisinal Tim Latihan TKA · tingkat menantang: dua teks, infografis, brosur, penalaran',
waktu:75,acak:true,warna:['#862e9c','#cc5de8','#f8f0fc'],
bagian:['Teks Informasi','Teks Sastra'],
teks:{
duateks:`<p class="ni"><b>Teks A: Bekal dari Rumah, Lebih Sehat dan Hemat</b></p>
<p>Membawa bekal dari rumah memiliki banyak keuntungan. Orang tua dapat memilih bahan makanan yang bersih dan bergizi. Anak juga terhindar dari jajanan yang memakai pewarna atau penyedap berlebihan. Selain itu, membawa bekal dapat menghemat uang saku.</p>
<p class="ni" style="margin-top:10px"><b>Teks B: Wawancara dengan Bu Tari, Pengelola Kantin Sehat</b></p>
<p class="ni">Pewawancara: Bagaimana Ibu menjaga kebersihan makanan kantin?<br>Bu Tari: Semua makanan kami masak sendiri setiap pagi tanpa pewarna buatan. Petugas puskesmas juga memeriksa kantin setiap bulan.<br>Pewawancara: Apa harapan Ibu?<br>Bu Tari: Saya berharap siswa tidak lagi membeli jajanan di luar pagar sekolah yang kebersihannya belum tentu terjaga.</p>`,
info:`<p class="ni" style="text-align:center"><b>INFOGRAFIS: Kebiasaan Membaca Siswa SD Bina Ilmu</b><br><span style="font-size:13px">(survei terhadap 200 siswa kelas 4–6)</span></p>
<table><tr><th>Pertanyaan</th><th>Hasil</th></tr>
<tr><td>Membaca buku selain buku pelajaran setiap hari</td><td>30%</td></tr>
<tr><td>Membaca hanya saat ada tugas</td><td>45%</td></tr>
<tr><td>Hampir tidak pernah membaca buku</td><td>25%</td></tr>
<tr><td>Jenis bacaan yang paling disukai</td><td>Komik (40%), cerita petualangan (35%), buku sains (25%)</td></tr>
<tr><td>Alasan jarang membaca</td><td>Lebih suka bermain gawai (60%), bukunya membosankan (25%), tidak ada waktu (15%)</td></tr></table>`,
brosur:`<p class="ni" style="text-align:center"><b>🦋 TAMAN KUPU-KUPU LEMBAH HIJAU 🦋</b><br>Lihat ratusan kupu-kupu dari dekat!</p>
<table><tr><td>Jam buka</td><td>Selasa–Minggu, 08.00–16.00 (Senin tutup)</td></tr>
<tr><td>Harga tiket</td><td>Dewasa Rp25.000 · Anak (3–12 tahun) Rp15.000 · Balita di bawah 3 tahun gratis</td></tr>
<tr><td>Fasilitas</td><td>Ruang penangkaran, kebun bunga, pojok edukasi, musala, kantin</td></tr>
<tr><td>Aturan</td><td>Dilarang menangkap kupu-kupu, dilarang memetik bunga, dilarang membawa makanan ke ruang penangkaran</td></tr></table>`,
kompos:`<p>Perhatikan langkah-langkah membuat pupuk kompos sederhana yang urutannya diacak berikut!</p>
<p class="ni">(1) Tutup ember dan aduk isinya seminggu sekali.<br>(2) Kumpulkan sisa sayuran, kulit buah, dan daun kering.<br>(3) Setelah 4–6 minggu, kompos yang berwarna cokelat kehitaman siap dipakai.<br>(4) Potong-potong sampah tersebut menjadi bagian kecil.<br>(5) Masukkan potongan sampah ke dalam ember berlubang, lalu campur dengan sedikit tanah.</p>`,
iklan:`<p class="ni" style="text-align:center;font-size:18px"><b>"Matikan yang Tak Terpakai, Selamatkan Bumi Kita Nanti"</b></p><p class="ni" style="text-align:center">💡 Gambar: seorang anak mematikan lampu kamar yang kosong di siang hari.</p>`,
petir:`<h4>Mengapa Petir Terlihat Lebih Dulu daripada Guntur Terdengar?</h4>
<p>Petir dan guntur sebenarnya terjadi pada saat yang sama. Petir adalah kilatan cahaya listrik di awan, sedangkan guntur adalah bunyi ledakan udara yang terkena panas petir.</p>
<p>Kita melihat petir lebih dulu karena cahaya bergerak jauh lebih cepat daripada bunyi. Cahaya hampir langsung sampai ke mata kita, sedangkan bunyi bergerak sekitar 340 meter setiap detik. Karena itu, makin jauh letak petir, makin lama jeda antara kilatan dan suara gunturnya.</p>
<p>Kita bisa memperkirakan jarak petir dengan menghitung detik antara kilatan dan guntur. Jika jedanya 3 detik, petir berada sekitar 1 kilometer dari kita.</p>`,
sepatu:`<h4>Sepatu untuk Bima</h4>
<p>Aku memperhatikan sepatu Bima sejak pagi. Ujungnya robek dan solnya hampir lepas. Setiap berjalan, terdengar bunyi "plak-plak" yang membuat beberapa teman tertawa. Bima hanya tersenyum, tetapi aku tahu ia malu.</p>
<p>Sore itu aku bercerita kepada Ibu. "Sepatu lamamu masih bagus, bukan?" tanya Ibu. Aku ragu. Itu sepatu kesayanganku, hadiah ulang tahun dari Ayah. Namun, aku terus teringat wajah Bima yang menunduk.</p>
<p>Keesokan harinya, aku membungkus sepatu itu dengan rapi dan menyelipkannya ke dalam laci meja Bima tanpa nama. Saat jam istirahat, Bima membuka lacinya. Matanya berbinar. Ia menoleh ke kanan dan ke kiri, mencari siapa pengirimnya. Aku pura-pura sibuk membaca, padahal hatiku terasa hangat sekali.</p>`,
lebah:`<h4>Lebah dan Kupu-Kupu</h4>
<p>Kupu-kupu suka memamerkan sayapnya yang indah. "Lihat, Lebah! Sayapku berwarna-warni, sedangkan kau hanya hitam-kuning," katanya.</p>
<p>Lebah tidak membalas. Ia terus mengumpulkan sari bunga dan membawanya ke sarang. Ketika musim hujan panjang tiba, bunga-bunga tidak lagi mekar. Kupu-kupu kelaparan dan kedinginan di bawah daun.</p>
<p>Lebah melihatnya dan mengajaknya berteduh di dekat sarang. Ia membagi sedikit madu simpanannya. Kupu-kupu tertunduk. "Maafkan aku, Lebah. Ternyata keindahan tidak berarti apa-apa tanpa kerja keras dan kebaikan hati."</p>`,
duapuisi:`<p class="ni"><b>Puisi 1: Hujan Pagi</b> <span style="font-size:12px">(karya: Tim Latihan TKA)</span></p>
<p class="puisi">Hujan pagi menyapa sawah
petani tersenyum menatap langit
padi bersorak menyambut basah
harapan panen kembali bangkit</p>
<p class="ni" style="margin-top:8px"><b>Puisi 2: Hujan di Kota</b> <span style="font-size:12px">(karya: Tim Latihan TKA)</span></p>
<p class="puisi">Hujan deras mengguyur kota
selokan penuh sampah plastik
air meluap ke rumah warga
kami mengungsi dengan panik</p>`,
danau:`<h4>Asal Usul Danau Kembar</h4>
<p>Dahulu, di sebuah lembah, hidup dua saudara kembar bernama Tuan Hijau dan Tuan Biru. Keduanya kaya, tetapi sifatnya berbeda. Tuan Hijau suka berbagi hasil panennya dengan warga miskin, sedangkan Tuan Biru pelit dan selalu ingin menang sendiri.</p>
<p>Suatu ketika, kemarau panjang melanda. Warga kelaparan. Tuan Hijau membuka lumbungnya untuk semua orang. Tuan Biru justru menimbun padi dan menjualnya dengan harga sangat mahal.</p>
<p>Pada malam purnama, hujan lebat turun tanpa henti. Tanah di sekitar rumah kedua saudara itu amblas dan berubah menjadi dua danau. Air danau di bekas rumah Tuan Hijau jernih kehijauan dan penuh ikan, sedangkan danau di bekas rumah Tuan Biru keruh dan tak berpenghuni. Warga percaya itulah balasan atas perbuatan mereka masing-masing.</p>`,
drama:`<p class="ni"><i>(Di rumah, Arya baru pulang sekolah dengan wajah murung.)</i></p>
<p class="ni"><b>Ibu</b> : Kenapa wajahmu cemberut, Nak?<br>
<b>Arya</b> : Nilai ulangan matematikaku hanya 60, Bu. Padahal Raka yang tidak belajar dapat 80.<br>
<b>Ibu</b> : (duduk di samping Arya) Apakah kamu sudah memahami soal-soal yang salah?<br>
<b>Arya</b> : Belum, Bu. Aku malas melihat kertasnya lagi.<br>
<b>Ibu</b> : Nilai bukan untuk dibandingkan dengan orang lain. Yang penting kamu tahu bagian mana yang perlu dipelajari. Ayo kita lihat bersama.<br>
<b>Arya</b> : (mengeluarkan kertas ulangan, tersenyum kecil) Baik, Bu. Ternyata aku salah menghitung pecahan.</p>`
},
soal:[
/* ===== BAGIAN 1 ===== */
{b:0,teks:'duateks',t:'pgk',sub:'Membandingkan Dua Teks',q:`<p>Persamaan isi Teks A dan Teks B adalah …</p>`,
o:['Keduanya membahas pentingnya makanan yang bersih bagi siswa.','Keduanya menyinggung makanan tanpa pewarna atau penyedap berlebihan.','Keduanya menyarankan siswa jajan di luar pagar sekolah.'],ans:[0,1],
bh:`Teks A: bahan bersih dan tanpa pewarna atau penyedap berlebihan. Teks B: dimasak sendiri tanpa pewarna buatan dan diperiksa puskesmas ✅✅<br>Teks B justru berharap siswa <b>tidak</b> jajan di luar pagar ❌`},
{b:0,teks:'duateks',t:'pg',sub:'Perbedaan Sudut Pandang',q:`<p>Perbedaan utama kedua teks adalah …</p>`,
o:['Teks A menyarankan membawa bekal dari rumah, sedangkan Teks B menunjukkan kantin sekolah juga dapat menyediakan makanan sehat.','Teks A melarang jajan, sedangkan Teks B mewajibkan jajan.','Teks A berisi wawancara, sedangkan Teks B berisi artikel.','Teks A membahas kantin, sedangkan Teks B membahas uang saku.'],ans:0,
bh:`Teks A berbentuk artikel tentang keuntungan membawa bekal. Teks B berbentuk wawancara yang menunjukkan kantin sehat sebagai pilihan lain. Bentuk teks pada pilihan C tertukar.`},
{b:0,teks:'duateks',t:'bs',label:['Sesuai','Tidak Sesuai'],sub:'Simpulan dari Dua Teks',q:`<p>Tentukan apakah simpulan berikut sesuai atau tidak sesuai jika kedua teks dibaca bersama!</p>`,
o:['Siswa dapat memperoleh makanan sehat dari bekal rumah ataupun kantin sehat.','Jajanan di luar pagar sekolah pasti bersih dan sehat.','Kebersihan makanan menjadi perhatian penting bagi orang tua dan pengelola kantin.'],ans:[true,false,true],
bh:`Pernyataan 1 dan 3 didukung kedua teks ✅✅<br>Bu Tari menyebut kebersihan jajanan luar "belum tentu terjaga", jadi kata "pasti" tidak sesuai ❌`},
{b:0,teks:'info',t:'pg',sub:'Membaca Infografis',q:`<p>Berdasarkan infografis, banyak siswa yang membaca buku selain buku pelajaran setiap hari adalah …</p>`,
o:['30 siswa','60 siswa','90 siswa','45 siswa'],ans:1,
bh:`30% dari 200 siswa = ${'30 × 2'} = <b>60 siswa</b>. (Infografis sering menyajikan persen, sehingga kita perlu menghitungnya menjadi jumlah orang.)`},
{b:0,teks:'info',t:'bs',sub:'Simpulan Data',q:`<p>Tentukan benar atau salah simpulan berikut berdasarkan infografis!</p>`,
o:['Sebagian besar siswa membaca hanya saat ada tugas atau hampir tidak pernah membaca.','Alasan utama siswa jarang membaca adalah tidak punya waktu.','Komik merupakan jenis bacaan yang paling disukai.'],ans:[true,false,true],
bh:`45% + 25% = 70% → sebagian besar ✅<br>Alasan utama adalah bermain gawai (60%). "Tidak ada waktu" hanya 15% ❌<br>Komik 40% (tertinggi) ✅`},
{b:0,teks:'info',t:'pg',sub:'Saran Berdasarkan Data',q:`<p>Program sekolah yang paling tepat untuk meningkatkan minat baca berdasarkan data tersebut adalah …</p>`,
o:['Menambah koleksi komik edukatif dan cerita petualangan serta membatasi pemakaian gawai','Menghapus jam istirahat','Menambah buku pelajaran wajib','Melarang siswa membaca komik'],ans:0,
bh:`Data menunjukkan siswa paling suka komik dan cerita petualangan, dan alasan utama jarang membaca adalah gawai. Program yang sesuai harus menjawab kedua temuan itu. Melarang komik justru bertentangan dengan data.`},
{b:0,teks:'brosur',t:'pg',sub:'Informasi Tersurat Brosur',q:`<p>Keluarga Pak Hadi ingin berkunjung pada hari libur. Hari yang <b>tidak</b> dapat mereka pilih adalah …</p>`,
o:['Selasa','Senin','Sabtu','Minggu'],ans:1,
bh:`Brosur: "Selasa–Minggu, 08.00–16.00 (Senin tutup)".`},
{b:0,teks:'brosur',t:'pg',sub:'Mengolah Informasi',q:`<p>Keluarga Pak Hadi terdiri atas ayah, ibu, Rina (10 tahun), Dodi (7 tahun), dan si kecil Lala (2 tahun). Biaya tiket yang harus dibayar adalah …</p>`,
o:['Rp80.000','Rp95.000','Rp65.000','Rp110.000'],ans:0,
bh:`Dewasa 2 × 25.000 = 50.000 · Anak (Rina dan Dodi) 2 × 15.000 = 30.000 · Lala di bawah 3 tahun → gratis.<br>Total = <b>Rp80.000</b>.`},
{b:0,teks:'brosur',t:'pgk',sub:'Menerapkan Aturan',q:`<p>Tindakan pengunjung yang <b>melanggar</b> aturan taman adalah …</p>`,
o:['Dodi memasukkan kupu-kupu ke dalam toples untuk dibawa pulang.','Rina memotret kupu-kupu di ruang penangkaran.','Ibu membawa roti ke dalam ruang penangkaran.'],ans:[0,2],
bh:`Menangkap kupu-kupu dan membawa makanan ke ruang penangkaran dilarang ✅✅<br>Memotret tidak dilarang ❌`},
{b:0,teks:'kompos',t:'pg',sub:'Mengurutkan Langkah',q:`<p>Urutan langkah membuat pupuk kompos yang benar adalah …</p>`,
o:['(2) – (4) – (5) – (1) – (3)','(4) – (2) – (5) – (3) – (1)','(2) – (5) – (4) – (1) – (3)','(5) – (2) – (4) – (1) – (3)'],ans:0,
bh:`Kumpulkan sampah (2) → potong kecil-kecil (4) → masukkan ke ember dan campur tanah (5) → tutup dan aduk seminggu sekali (1) → setelah 4–6 minggu siap pakai (3).`},
{b:0,teks:'iklan',t:'pg',sub:'Pesan Iklan',q:`<p>Pesan yang ingin disampaikan iklan layanan masyarakat tersebut adalah …</p>`,
o:['Ajakan menghemat listrik dengan mematikan peralatan yang tidak dipakai','Ajakan membeli lampu hemat energi','Larangan menyalakan lampu pada malam hari','Ajakan tidur lebih awal'],ans:0,
bh:`Slogan "Matikan yang tak terpakai" dan gambar anak mematikan lampu kamar kosong pada siang hari → ajakan menghemat listrik.`},
{b:0,teks:'petir',t:'pg',sub:'Hubungan Sebab-Akibat',q:`<p>Mengapa kita melihat kilatan petir lebih dulu sebelum mendengar guntur?</p>`,
o:['Petir terjadi lebih dulu daripada guntur.','Cahaya bergerak jauh lebih cepat daripada bunyi.','Telinga manusia lebih lambat daripada mata.','Guntur terjadi di tempat yang lebih jauh.'],ans:1,
bh:`Paragraf 2: "Kita melihat petir lebih dulu karena cahaya bergerak jauh lebih cepat daripada bunyi." Paragraf 1 juga menegaskan bahwa keduanya terjadi pada saat yang sama, jadi pilihan A salah.`},
{b:0,teks:'petir',t:'pg',sub:'Menerapkan Informasi',q:`<p>Rina melihat kilatan petir, lalu mendengar guntur 9 detik kemudian. Berdasarkan teks, perkiraan jarak petir dari Rina adalah …</p>`,
o:['1 kilometer','3 kilometer','9 kilometer','340 meter'],ans:1,
bh:`Teks: jeda 3 detik ≈ 1 km. Jeda 9 detik = 3 × 3 detik → sekitar <b>3 km</b>. (Bisa juga dihitung 9 × 340 m = 3.060 m ≈ 3 km.)`},
{b:0,teks:'petir',t:'pg',sub:'Makna Kata dalam Konteks',q:`<p>Kata <b>jeda</b> pada paragraf kedua bermakna …</p>`,
o:['selang waktu di antara dua peristiwa','bunyi yang sangat keras','cahaya yang sangat terang','jarak antara dua awan'],ans:0,
bh:`"Jeda antara kilatan dan suara gunturnya" berarti waktu yang berlalu di antara dua kejadian (selang waktu).`},
{b:0,t:'pg',sub:'Kepaduan Paragraf',q:`<p style="background:#fffdf5;border-radius:10px;padding:8px 12px">(1) Sayuran hijau sangat baik untuk kesehatan tubuh. (2) Bayam mengandung zat besi yang membantu pembentukan darah. (3) Brokoli kaya vitamin C untuk daya tahan tubuh. (4) Harga mainan di toko itu sedang diskon. (5) Kangkung mengandung serat yang baik untuk pencernaan.</p><p>Kalimat yang <b>tidak padu</b> dengan paragraf tersebut adalah …</p>`,
o:['kalimat (4)','kalimat (2)','kalimat (3)','kalimat (5)'],ans:0,
bh:`Ide pokok paragraf adalah manfaat sayuran hijau. Kalimat (4) membahas diskon mainan, tidak berhubungan dengan ide pokok.`},
/* ===== BAGIAN 2 ===== */
{b:1,teks:'sepatu',t:'pg',sub:'Sudut Pandang',q:`<p>Sudut pandang yang digunakan dalam cerita "Sepatu untuk Bima" adalah …</p>`,
o:['orang pertama, karena pencerita memakai kata "aku" dan ikut menjadi tokoh','orang ketiga, karena pencerita menyebut nama "Bima"','orang kedua, karena pencerita menyapa pembaca','orang ketiga serba tahu, karena pencerita mengetahui perasaan semua tokoh'],ans:0,
bh:`Pencerita memakai kata "aku" dan terlibat langsung dalam peristiwa (memberikan sepatu) → sudut pandang orang pertama. Menyebut nama tokoh lain tidak mengubah sudut pandang.`},
{b:1,teks:'sepatu',t:'pg',sub:'Konflik Batin',q:`<p>Konflik yang dialami tokoh "aku" dalam cerita adalah …</p>`,
o:['bertengkar dengan Bima karena sepatu','bimbang antara mempertahankan sepatu kesayangan atau memberikannya kepada Bima','dimarahi Ibu karena sepatunya rusak','ditertawakan teman karena sepatunya robek'],ans:1,
bh:`"Aku ragu. Itu sepatu kesayanganku, hadiah dari Ayah. Namun, aku terus teringat wajah Bima." Ini konflik batin, yaitu pertentangan di dalam hati tokoh.`},
{b:1,teks:'sepatu',t:'pgk',sub:'Watak Tokoh',q:`<p>Watak tokoh "aku" yang tergambar dalam cerita adalah …</p>`,
o:['peduli terhadap perasaan teman','rendah hati karena memberi tanpa menyebut nama','suka pamer kebaikan'],ans:[0,1],
bh:`Memperhatikan rasa malu Bima → peduli ✅ · Memberi tanpa nama dan pura-pura sibuk membaca → rendah hati, tidak pamer ✅✅. Karena itu, pernyataan 3 salah ❌`},
{b:1,teks:'sepatu',t:'pg',sub:'Makna Kalimat',q:`<p>Kalimat "hatiku terasa hangat sekali" pada akhir cerita menggambarkan perasaan …</p>`,
o:['bahagia dan puas karena berhasil membantu','demam karena sakit','takut ketahuan','menyesal memberikan sepatu'],ans:0,
bh:`"Hangat" di sini adalah kiasan untuk rasa bahagia. Tokoh senang melihat mata Bima berbinar setelah menerima sepatu.`},
{b:1,teks:'lebah',t:'pg',sub:'Amanat',q:`<p>Amanat yang tersurat dalam fabel tersebut diucapkan oleh …</p>`,
o:['Kupu-kupu: keindahan tidak berarti tanpa kerja keras dan kebaikan hati','Lebah: jangan pamer sayap','Kupu-kupu: musim hujan berbahaya','Lebah: madu harus dijual'],ans:0,
bh:`Di akhir cerita, Kupu-kupu berkata, "Ternyata keindahan tidak berarti apa-apa tanpa kerja keras dan kebaikan hati." Itulah amanat yang tersurat.`},
{b:1,teks:'lebah',t:'bs',sub:'Perbandingan Tokoh',q:`<p>Tentukan benar atau salah pernyataan tentang tokoh dalam fabel!</p>`,
o:['Lebah tidak membalas ejekan dan tetap bekerja.','Kupu-kupu bersiap menghadapi musim hujan dengan menyimpan makanan.','Lebah tetap menolong Kupu-kupu walaupun pernah diejek.'],ans:[true,false,true],
bh:`Lebah diam dan terus bekerja ✅, lalu menolong Kupu-kupu ✅.<br>Kupu-kupu tidak bersiap, sehingga kelaparan saat musim hujan ❌`},
{b:1,teks:'lebah',t:'pg',sub:'Relevansi',q:`<p>Sikap dalam kehidupan sehari-hari yang sesuai dengan tokoh Lebah adalah …</p>`,
o:['Tetap membantu teman yang dulu pernah mengejek kita.','Membalas ejekan teman dengan ejekan.','Memamerkan barang baru di kelas.','Menolak meminjamkan buku kepada teman.'],ans:0,
bh:`Lebah tidak dendam dan tetap menolong Kupu-kupu yang pernah mengejeknya.`},
{b:1,teks:'duapuisi',t:'pg',sub:'Membandingkan Dua Puisi',q:`<p>Perbedaan suasana kedua puisi adalah …</p>`,
o:['Puisi 1 bersuasana gembira dan penuh harapan, sedangkan Puisi 2 bersuasana panik dan menyedihkan.','Keduanya bersuasana sedih.','Puisi 1 bersuasana menakutkan, sedangkan Puisi 2 gembira.','Keduanya bersuasana gembira.'],ans:0,
bh:`Puisi 1: petani tersenyum, padi bersorak, harapan panen → gembira. Puisi 2: air meluap, mengungsi dengan panik → panik dan sedih.`},
{b:1,teks:'duapuisi',t:'pgk',sub:'Makna dan Pesan Puisi',q:`<p>Pernyataan yang tepat tentang kedua puisi adalah …</p>`,
o:['Kedua puisi sama-sama bertema hujan.','Larik "padi bersorak menyambut basah" adalah majas personifikasi.','Puisi 2 menyiratkan bahwa sampah plastik menjadi salah satu penyebab banjir.'],ans:[0,1,2],
bh:`Keduanya tentang hujan ✅ · Padi dibuat seolah bisa bersorak seperti manusia → personifikasi ✅ · "Selokan penuh sampah plastik" lalu "air meluap" → sampah menyebabkan banjir ✅`},
{b:1,teks:'duapuisi',t:'pg',sub:'Pesan Tersirat',q:`<p>Pesan tersirat dari Puisi 2 adalah …</p>`,
o:['Jangan membuang sampah sembarangan agar tidak terjadi banjir.','Hujan selalu membawa bencana.','Kota lebih indah daripada desa.','Warga kota sebaiknya pindah ke desa.'],ans:0,
bh:`Puisi 2 menggambarkan sampah plastik di selokan yang menyebabkan banjir. Pesan yang tersirat: jaga kebersihan dan jangan membuang sampah sembarangan. "Hujan selalu membawa bencana" bertentangan dengan Puisi 1.`},
{b:1,teks:'danau',t:'pg',sub:'Pesan Cerita Rakyat',q:`<p>Pesan moral cerita "Asal Usul Danau Kembar" adalah …</p>`,
o:['Setiap perbuatan, baik atau buruk, akan mendapat balasannya.','Saudara kembar harus selalu tinggal bersama.','Kemarau panjang dapat diatasi dengan menimbun padi.','Danau terbentuk karena hujan lebat.'],ans:0,
bh:`Danau Tuan Hijau yang dermawan menjadi jernih dan penuh ikan, sedangkan danau Tuan Biru yang pelit menjadi keruh. Warga percaya itu balasan atas perbuatan mereka.`},
{b:1,teks:'danau',t:'bs',label:['Sesuai','Tidak Sesuai'],sub:'Watak dan Sebab-Akibat',q:`<p>Tentukan apakah pernyataan berikut sesuai atau tidak sesuai dengan cerita!</p>`,
o:['Tuan Biru menimbun padi dan menjualnya mahal saat warga kelaparan.','Tuan Hijau dan Tuan Biru memiliki sifat yang sama.','Keadaan air kedua danau menggambarkan perbuatan pemilik rumahnya.'],ans:[true,false,true],
bh:`Pernyataan 1 tertulis di paragraf 2 ✅ · Sifat keduanya berbeda (dermawan dan pelit) ❌ · Danau jernih untuk yang baik, danau keruh untuk yang pelit ✅`},
{b:1,t:'pg',sub:'Pantun Teka-Teki',q:`<p>Bacalah pantun berikut!</p><p class="puisi" style="background:#fffdf5;border-radius:10px;padding:8px 12px;white-space:pre-line;font-style:italic;text-align:center">Pergi ke kebun memetik pepaya
pepaya masak dibawa pulang
kalau siang bersembunyi saja
kalau malam terbang melayang</p><p style="text-align:center;font-size:12px">(karya: Tim Latihan TKA)</p><p>Jawaban dari pantun teka-teki tersebut adalah …</p>`,
o:['kelelawar','kupu-kupu','ayam','lebah'],ans:0,
bh:`Isi pantun (baris 3–4) memberi petunjuk: bersembunyi pada siang hari dan terbang pada malam hari → hewan nokturnal yang bisa terbang, yaitu <b>kelelawar</b>. Kupu-kupu, ayam, dan lebah aktif pada siang hari.`},
{b:1,teks:'drama',t:'pgk',sub:'Memahami Dialog Drama',q:`<p>Pernyataan yang sesuai dengan dialog drama tersebut adalah …</p>`,
o:['Awalnya Arya kecewa dan membandingkan nilainya dengan nilai temannya.','Ibu menasihati Arya agar fokus memahami kesalahannya sendiri.','Ibu memarahi Arya karena nilainya rendah.'],ans:[0,1],
bh:`Arya murung dan membandingkan dengan Raka ✅ · Ibu berkata "Nilai bukan untuk dibandingkan … ayo kita lihat bersama" ✅<br>Ibu tidak marah. Ia duduk di samping Arya dan mengajak belajar bersama ❌`},
{b:1,teks:'drama',t:'pg',sub:'Perubahan Sikap Tokoh',q:`<p>Perubahan sikap Arya dalam dialog tersebut adalah …</p>`,
o:['dari murung dan enggan melihat kertas ulangan menjadi mau belajar dari kesalahan','dari gembira menjadi sedih','dari rajin menjadi malas','dari jujur menjadi berbohong'],ans:0,
bh:`Awal: cemberut, "malas melihat kertasnya lagi". Akhir: mengeluarkan kertas ulangan, tersenyum kecil, dan menemukan kesalahannya (salah menghitung pecahan).`}
]};
