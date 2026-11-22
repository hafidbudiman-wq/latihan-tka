/* Simulasi TKA Bahasa Indonesia – Paket 3
   Adaptasi dari pola soal "TO TKA Bahasa Indonesia 2026 Paket 1 (DKI)".
   Urutan, topik, dan tipe soal mengikuti PDF; semua teks bacaan ditulis ulang (puisi diganti puisi baru bertema sama). */
const PAKET={
id:'bi-3',mapel:'Bahasa Indonesia',judul:'Simulasi Bahasa Indonesia Paket 3',ket:'Adaptasi TO TKA DKI 2026 Paket 1 · urutan & tipe soal sama, teks ditulis ulang',
waktu:75,acak:true,warna:['#e8590c','#f59f00','#fff4e6'],
bagian:['Teks Informasi','Teks Sastra'],
teks:{
dbd:`<h4>Waspada Demam Berdarah</h4>
<p>Demam berdarah dengue (DBD) adalah penyakit yang disebabkan oleh virus dengue. Virus ini menular melalui gigitan nyamuk <i>Aedes aegypti</i> betina. Nyamuk tersebut mudah dikenali dari belang hitam-putih pada tubuh dan kakinya. Ia paling sering menggigit pada pagi dan sore hari.</p>
<p>Pada awalnya, gejala DBD mirip flu: demam tinggi yang datang tiba-tiba, sakit kepala, nyeri otot, dan mual. Jika tidak segera ditangani, penderita dapat mengalami bintik merah di kulit, mimisan, atau gusi berdarah. Keadaan ini berbahaya dan harus segera dibawa ke dokter.</p>
<p>DBD dapat dicegah dengan gerakan 3M Plus. 3M berarti menguras tempat penampungan air, menutup rapat wadah air, dan memanfaatkan kembali (mendaur ulang) barang bekas yang dapat menampung air hujan. "Plus" berarti usaha tambahan, misalnya memakai obat antinyamuk, memasang kelambu, dan memelihara ikan pemakan jentik.</p>`,
komputer:`<h4>Cara Menyalakan Komputer</h4>
<p>Sebelum menyalakan komputer, periksalah semua kabel. Pastikan kabel listrik sudah tersambung ke stopkontak, serta kabel monitor, papan ketik, dan tetikus terpasang dengan benar.</p>
<p>Setelah itu, tekan tombol daya pada CPU. Tombol ini biasanya ada di bagian depan dan bergambar lingkaran dengan garis tegak di atasnya. Begitu ditekan, lampu indikator menyala dan kipas di dalam CPU mulai berputar.</p>
<p>Tunggulah beberapa saat sampai monitor menampilkan layar awal. Jangan menekan tombol apa pun selama proses ini. Jika layar utama sudah muncul, komputer siap digunakan untuk belajar, mengetik, atau mencari informasi.</p>`,
global:`<h4>Bumi yang Makin Panas</h4>
<p>Pemanasan global adalah naiknya suhu rata-rata bumi dari waktu ke waktu. Hal ini terjadi karena panas matahari yang masuk ke bumi tidak bisa keluar lagi dengan mudah. Panas itu terperangkap di lapisan udara (atmosfer) sehingga bumi menjadi makin panas.</p>
<p>Penyebab utamanya adalah bertambahnya gas karbon dioksida dan metana. Gas-gas itu berasal dari asap kendaraan, asap pabrik, serta pembakaran bensin dan batu bara. Penebangan hutan memperparah keadaan karena pohon yang menyerap karbon dioksida makin sedikit.</p>
<p>Akibat pemanasan global sangat terasa. Cuaca menjadi tidak menentu, es di kutub mencair, dan permukaan air laut naik sehingga daerah pantai terancam banjir. Banyak hewan dan tumbuhan juga kehilangan tempat hidupnya.</p>
<p>Kita dapat ikut mengurangi pemanasan global dengan menanam pohon, menghemat listrik, dan lebih sering berjalan kaki atau bersepeda.</p>`,
plastik:`<h4>Plastik yang Sulit Terurai</h4>
<p>Plastik mudah kita temukan di mana-mana, mulai dari kemasan makanan, botol minum, hingga kantong belanja. Setelah tidak dipakai, plastik menjadi sampah yang menumpuk di darat dan di laut.</p>
<p>Masalahnya, plastik sangat sulit terurai. Plastik membutuhkan bantuan sinar matahari untuk hancur, dan prosesnya bisa memakan waktu 20 sampai 500 tahun. Jika tidak terurai dengan benar, plastik pecah menjadi butiran sangat kecil yang disebut mikroplastik. Butiran ini dapat membawa zat kimia berbahaya dan termakan oleh ikan. Oleh karena itu, kita perlu mengurangi pemakaian plastik sekali pakai.</p>`,
gigi:`<h4>Laporan Pengamatan Kebersihan Gigi Siswa Kelas 6</h4>
<table><tr><td>Waktu</td><td>Senin, 12 Januari</td></tr><tr><td>Tempat</td><td>UKS SD Nusa Indah</td></tr><tr><td>Tujuan</td><td>Mengetahui hubungan kebiasaan menyikat gigi dengan kesehatan gigi</td></tr></table>
<p>Kami mengamati gigi 24 siswa kelas 6. Sebanyak 18 siswa yang menyikat gigi minimal dua kali sehari memiliki gigi yang tampak putih dan bersih, napasnya segar, serta tidak ada sisa makanan di sela-sela giginya.</p>
<p>Sebanyak 6 siswa lainnya jarang menyikat gigi sebelum tidur. Pada gigi geraham mereka terlihat bintik hitam kecil, yaitu tanda awal gigi berlubang.</p>
<p>Kesimpulan: Menyikat gigi secara teratur membuat gigi bersih dan napas segar. Pemeriksaan ke dokter gigi setiap enam bulan juga penting untuk mencegah kerusakan gigi sejak dini.</p>`,
gotong:`<h4>Pidato: Menghidupkan Kembali Gotong Royong</h4>
<p class="ni">Selamat pagi, Bapak dan Ibu Guru serta teman-teman yang saya banggakan.</p>
<p>Bangsa Indonesia dikenal dengan budaya gotong royong. Gotong royong menumbuhkan rasa kebersamaan, kepedulian, dan saling menghargai. Budaya ini juga menjadi perekat persatuan di tengah keberagaman suku, agama, dan budaya.</p>
<p>Sayangnya, semangat itu mulai memudar. Banyak orang sibuk dengan urusan dan gawainya sendiri sehingga jarang peduli pada lingkungan. Mereka seperti katak dalam tempurung, hanya mengenal dunianya sendiri.</p>
<p>Marilah kita mulai dari hal kecil: ikut kerja bakti, menolong tetangga, dan bekerja sama dalam kelompok belajar. Dengan begitu, nilai luhur bangsa tetap terjaga.</p>
<p class="ni">Terima kasih. Selamat pagi.</p>`,
surat:`<p class="ni" style="text-align:right">Solo, 5 Desember</p>
<p class="ni">Halo, Fikri!</p>
<p>Apa kabarmu di Bandung? Aku ingin bercerita tentang kegiatanku akhir-akhir ini.</p>
<p>Bulan lalu aku ikut lomba <b>tenis meja</b> antarsekolah di nomor tunggal. Awalnya aku gugup karena lawanku jago-jago. Namun, karena rajin berlatih dan didukung teman-teman, aku bisa bermain tenang. Aku meraih juara ketiga! Pengalaman itu membuatku makin pantang menyerah.</p>
<p>Selain itu, aku juga mulai menjalani <b>pola hidup sehat</b>. Aku <b>berolahraga</b> setiap pagi, makan lebih banyak sayur dan buah, serta mengurangi minuman manis. Badanku terasa lebih segar.</p>
<p>Kalau liburan nanti aku ke Bandung, ayo kita bertanding tenis meja!</p>
<p class="ni">Sahabatmu,<br>Bagas</p>`,
musang:`<h4>Musang yang Sombong</h4>
<p>Di sebuah hutan, tinggallah seekor musang yang sombong. Ia senang mengejek hewan lain, terutama landak dan kelinci.</p>
<p>Suatu hari, layang-layang milik landak dan kelinci tersangkut di dahan pohon yang tinggi. Mereka bingung cara mengambilnya. Musang datang sambil tertawa, "Kasihan sekali, kalian tidak bisa memanjat!" Ia lalu memanjat dan mengambil layang-layang itu. Namun, ketika kelinci meminta layang-layangnya, musang malah membusungkan dada dan menolak mengembalikannya.</p>
<p>Landak dan kelinci akhirnya pulang. "Ambil saja layang-layang itu!" seru kelinci. Musang terkejut dan kehilangan keseimbangan. Ia tergelincir dari dahan dan jatuh ke kubangan lumpur. Layang-layang terlepas dan diambil kembali oleh kelinci. Landak dan kelinci tak bisa menahan tawa melihat tubuh musang penuh lumpur.</p>`,
ibu:`<h4>Ibu, Lentera Rumahku</h4><p class="src" style="text-align:center">(karya: Tim Latihan TKA)</p>
<p class="puisi">Ibu, saat aku jatuh dan menangis
tanganmu pertama mengusap pipiku
saat aku tertawa riang gembira
senyummu paling tulus menyambutku

Engkau lentera di rumah kami
tak pernah padam walau lelah
kasihmu panjang sepanjang hari
hatimu luas seluas samudra</p>`,
negeri:`<h4>Untuk Negeriku</h4><p class="src" style="text-align:center">(karya: Tim Latihan TKA)</p>
<p class="puisi">Aku ingin menjadi cahaya
menerangi desa yang gelap
aku ingin menjadi tangan
menanam padi untuk rakyat

Aku ingin menjadi ilmu
yang dibagi tanpa diminta
inilah janjiku, Indonesia
anak bangsa yang setia</p>`,
kelam:`<h4>Hujan di Hari Perpisahan</h4><p class="src" style="text-align:center">(karya: Tim Latihan TKA)</p>
<p class="puisi">Hari ini sahabatku pindah kota
koper-koper diangkat ke dalam mobil
langit turun gerimis perlahan
<b>hatiku kelabu</b> tanpa suara

Kulambaikan tangan sampai jauh
hingga mobil hilang di tikungan
tinggal kenangan di bangku taman
tempat kami tertawa dahulu</p>`,
raja:`<h4>Sayembara Si Pemimpi</h4>
<p>Di sebuah kerajaan, Putri Melati hanya mau menikah dengan orang yang paling nyenyak tidurnya. Raja pun mengadakan sayembara. Salah satu pesertanya adalah Sarip, pemuda yatim piatu yang hidup dari membuat anyaman bambu.</p>
<p>Saat sayembara dimulai, para peserta langsung memejamkan mata. Sarip justru melanjutkan anyamannya yang belum selesai. Ia bekerja dengan tekun hingga menjelang subuh. Setelah anyamannya selesai dan alat-alatnya dirapikan, barulah ia tertidur sangat lelap karena kelelahan.</p>
<p>Ketika Putri Melati berkeliling, ia melihat anyaman yang sangat indah di samping Sarip. Putri tahu pembuatnya pasti bekerja keras sehingga tidurnya paling nyenyak. Putri memilih Sarip sebagai pemenang, dan mereka pun hidup bahagia.</p>`,
beruang:`<h4>Dua Sahabat dan Beruang</h4>
<p>Dimas dan Yoga berjalan-jalan di hutan pada hari libur. Mereka asyik menikmati udara segar dan kicau burung sampai tak sadar sudah masuk terlalu jauh.</p>
<p>Tiba-tiba seekor beruang besar muncul dari balik semak. Dimas panik dan langsung memanjat pohon, meninggalkan Yoga sendirian. Yoga yang tidak bisa memanjat segera berbaring di tanah dan menahan napas, berpura-pura mati.</p>
<p>Beruang mengendus tubuh Yoga, lalu pergi. Setelah aman, Dimas turun dan bertanya, "Apa yang dibisikkan beruang padamu?" Yoga menjawab, "Katanya, jangan percaya pada teman yang meninggalkanmu saat bahaya." Dimas tertunduk malu dan meminta maaf.</p>`,
topi:`<h4>Topi Cadangan</h4>
<p>Senin pagi, Kirana berlari masuk kelas dengan napas terengah-engah. "Gawat, topiku ketinggalan! Padahal sebentar lagi upacara," keluhnya.</p>
<p>Sahabatnya, Ayu, membuka laci mejanya. "Tenang, aku selalu menyimpan satu topi cadangan. Pakai saja punyaku."</p>
<p>"Terima kasih, Ayu! Kamu memang sahabat terbaik!" seru Kirana sambil tersenyum lega. Mereka pun berlari bersama ke lapangan sebelum upacara dimulai.</p>`
},
soal:[
/* ===== TEKS INFORMASI ===== */
{b:0,teks:'dbd',t:'pg',sub:'Informasi Tersurat',q:`<p>DBD ditularkan melalui gigitan nyamuk …</p>`,
o:['<i>Anopheles</i>','<i>Culex</i>','<i>Aedes aegypti</i> betina','<i>Mansonia</i>'],ans:2,
bh:`Paragraf 1: "Virus ini menular melalui gigitan nyamuk <i>Aedes aegypti</i> betina."`},
{b:0,teks:'dbd',t:'pgk',sub:'Informasi Tersurat',q:`<p>Tindakan yang termasuk gerakan <b>3M</b> untuk mencegah DBD adalah …</p>`,
o:['Menguras tempat penampungan air','Menutup rapat wadah air','Membakar sampah setiap hari'],ans:[0,1],
bh:`3M = menguras, menutup, dan memanfaatkan kembali barang bekas ✅✅<br>Membakar sampah tidak disebut dalam teks ❌`},
{b:0,teks:'dbd',t:'pg',sub:'Kesesuaian Informasi',q:`<p>Perhatikan pernyataan berikut!<br>(1) Nyamuk penular DBD paling sering menggigit pada pagi dan sore hari.<br>(2) Gejala awal DBD selalu berupa bintik merah di kulit.<br>(3) Memelihara ikan pemakan jentik termasuk usaha "Plus".</p><p>Pasangan pernyataan yang sesuai dengan teks adalah …</p>`,
o:['(1) dan (2)','(1) dan (3)','(2) dan (3)','(1), (2), dan (3)'],ans:1,
bh:`(1) sesuai paragraf 1 ✅ · (3) sesuai paragraf 3 ✅<br>(2) tidak sesuai karena gejala <b>awal</b> DBD mirip flu. Bintik merah muncul jika tidak segera ditangani ❌`},
{b:0,teks:'komputer',t:'bs',label:['Benar','Salah'],sub:'Relevansi Langkah Prosedur',q:`<p>Tentukan benar atau salah pernyataan tentang alasan langkah-langkah dalam teks!</p>`,
o:['Memeriksa kabel listrik penting karena komputer tidak dapat menyala tanpa aliran listrik.','Menekan tombol daya tidak perlu karena komputer dapat menyala sendiri.','Menunggu layar utama muncul penting karena komputer baru siap dipakai setelah itu.'],ans:[true,false,true],
bh:`Pernyataan 1 dan 3 sesuai dengan alasan langkah di teks ✅<br>Komputer menyala karena tombol daya ditekan, jadi langkah itu perlu ❌`},
{b:0,teks:'komputer',t:'pg',sub:'Perubahan dalam Proses',q:`<p>Perubahan yang terjadi tepat setelah tombol daya pada CPU ditekan adalah …</p>`,
o:['Kabel listrik terlepas dari stopkontak.','Lampu indikator menyala dan kipas CPU mulai berputar.','Monitor langsung mati.','Papan ketik tidak bisa digunakan lagi.'],ans:1,
bh:`Paragraf 2: "Begitu ditekan, lampu indikator menyala dan kipas di dalam CPU mulai berputar."`},
{b:0,teks:'komputer',t:'pgk',sub:'Informasi Tersurat',q:`<p>Informasi yang tersurat dalam teks prosedur tersebut adalah …</p>`,
o:['Kabel listrik harus tersambung ke stopkontak.','Tombol daya biasanya ada di bagian depan CPU.','Komputer langsung dapat dipakai tanpa menunggu layar utama muncul.'],ans:[0,1],
bh:`Pernyataan 1 dan 2 tertulis di teks ✅<br>Teks justru meminta kita <b>menunggu</b> sampai layar utama muncul ❌`},
{b:0,teks:'global',t:'pg',sub:'Urutan Proses',q:`<p>Urutan proses terjadinya pemanasan global yang sesuai dengan teks adalah …</p>`,
o:['panas matahari masuk ke bumi → panas terperangkap di atmosfer → suhu bumi naik','suhu bumi naik → panas matahari masuk ke bumi → panas terperangkap di atmosfer','panas terperangkap di atmosfer → panas matahari masuk ke bumi → suhu bumi naik','panas matahari masuk ke bumi → suhu bumi naik → panas terperangkap di atmosfer'],ans:0,
bh:`Paragraf 1: panas matahari <b>masuk</b> → tidak bisa keluar dan <b>terperangkap</b> di atmosfer → bumi makin <b>panas</b>.`},
{b:0,teks:'global',t:'bs',label:['Benar','Salah'],sub:'Ide Pokok',q:`<p>Tentukan benar atau salah pernyataan berikut tentang ide pokok paragraf!</p>`,
o:['Ide pokok paragraf 1: pemanasan global adalah naiknya suhu rata-rata bumi.','Ide pokok paragraf 2: penyebab utama pemanasan global adalah bertambahnya karbon dioksida dan metana.','Ide pokok paragraf 3: pohon menyerap karbon dioksida.'],ans:[true,true,false],
bh:`Ide pokok P1 dan P2 sesuai dengan kalimat utamanya ✅✅<br>Paragraf 3 membahas <b>akibat</b> pemanasan global. Pohon menyerap karbon dioksida disebut di paragraf 2 ❌`},
{b:0,teks:'global',t:'pg',sub:'Gagasan Utama Teks',q:`<p>Gagasan utama yang paling tepat untuk seluruh teks adalah …</p>`,
o:['Asap kendaraan dan pabrik mencemari udara.','Pemanasan global terjadi karena panas terperangkap, berdampak buruk, dan dapat dikurangi.','Es di kutub mencair dan menyebabkan banjir.','Menanam pohon dapat menghemat listrik.'],ans:1,
bh:`Gagasan utama seluruh teks merangkum semua paragraf: pengertian/proses (P1), penyebab (P2), dampak (P3), dan cara mengurangi (P4). Pilihan lain hanya membahas satu bagian.`},
{b:0,teks:'plastik',t:'pgk',sub:'Hubungan Sebab-Akibat',q:`<p>Akibat yang ditimbulkan jika plastik tidak terurai dengan benar adalah …</p>`,
o:['Plastik pecah menjadi butiran mikroplastik.','Mikroplastik dapat membawa zat kimia berbahaya dan termakan ikan.','Plastik membutuhkan bantuan sinar matahari untuk hancur.'],ans:[0,1],
bh:`"Jika tidak terurai dengan benar, plastik pecah menjadi … mikroplastik. Butiran ini dapat membawa zat kimia berbahaya dan termakan oleh ikan." ✅✅<br>Butuh sinar matahari adalah <b>sifat</b> proses penguraian, bukan akibat ❌`},
{b:0,teks:'plastik',t:'pg',sub:'Gagasan Pendukung (Data)',q:`<p>Paragraf kedua membahas bahwa plastik sangat sulit terurai. Kalimat pendukung yang berupa <b>data</b> adalah …</p>`,
o:['Plastik mudah kita temukan di mana-mana.','Prosesnya bisa memakan waktu 20 sampai 500 tahun.','Kita perlu mengurangi pemakaian plastik sekali pakai.','Plastik menjadi sampah yang menumpuk.'],ans:1,
bh:`Data berupa angka atau ukuran yang memperkuat pernyataan. "20 sampai 500 tahun" menunjukkan lamanya plastik terurai.`},
{b:0,teks:'plastik',t:'bs',label:['Sesuai','Tidak Sesuai'],sub:'Hubungan Antarinformasi',q:`<p>Tentukan apakah pernyataan berikut sesuai atau tidak sesuai dengan teks!</p>`,
o:['Plastik dapat terurai dengan cepat tanpa bantuan sinar matahari.','Penguraian plastik yang tidak benar menghasilkan mikroplastik.','Penguraian plastik dapat memakan waktu ratusan tahun.'],ans:[false,true,true],
bh:`Plastik justru sulit terurai dan butuh sinar matahari ❌<br>Pernyataan 2 dan 3 sesuai paragraf 2 ✅✅`},
{b:0,teks:'gigi',t:'pg',sub:'Informasi Tersurat Laporan',q:`<p>Ciri gigi siswa yang menyikat gigi minimal dua kali sehari adalah …</p>`,
o:['Terdapat bintik hitam pada gigi geraham.','Gigi tampak putih dan bersih serta napas segar.','Gigi berwarna kuning tetapi napas segar.','Gigi menjadi goyang.'],ans:1,
bh:`Paragraf 1 laporan: "memiliki gigi yang tampak putih dan bersih, napasnya segar."`},
{b:0,teks:'gigi',t:'pgk',sub:'Menyimpulkan Hasil',q:`<p>Kondisi nyata yang ditemukan pada siswa yang rajin menyikat gigi adalah …</p>`,
o:['Tidak ada sisa makanan di sela-sela gigi.','Gigi menjadi kebal terhadap semua kuman selamanya.','Napas terasa segar.'],ans:[0,2],
bh:`Pernyataan 1 dan 3 tertulis dalam hasil pengamatan ✅✅<br>"Kebal terhadap semua kuman selamanya" tidak ada di laporan dan berlebihan ❌`},
{b:0,teks:'gigi',t:'pg',sub:'Kesesuaian Data',q:`<p>Pernyataan yang paling sesuai dengan data dalam laporan adalah …</p>`,
o:['Seluruh 24 siswa memiliki gigi yang sehat.','Sebagian besar siswa memiliki gigi bersih, sedangkan sebagian kecil memiliki tanda awal gigi berlubang.','Siswa yang jarang menyikat gigi memiliki napas paling segar.','Pemeriksaan dokter gigi tidak diperlukan.'],ans:1,
bh:`18 dari 24 siswa (sebagian besar) giginya bersih. 6 siswa (sebagian kecil) memiliki bintik hitam.`},
{b:0,teks:'gotong',t:'bs',label:['Sesuai','Tidak Sesuai'],sub:'Informasi dalam Pidato',q:`<p>Tentukan apakah pernyataan berikut sesuai atau tidak sesuai sebagai manfaat gotong royong menurut pidato!</p>`,
o:['Menjadi perekat persatuan di tengah keberagaman.','Membuat orang lebih sibuk dengan gawainya sendiri.','Menumbuhkan rasa kebersamaan dan kepedulian.'],ans:[true,false,true],
bh:`Manfaat gotong royong ada di paragraf 2: kebersamaan, kepedulian, perekat persatuan ✅✅<br>Sibuk dengan gawai adalah <b>penyebab</b> gotong royong memudar ❌`},
{b:0,teks:'gotong',t:'pg',sub:'Makna Ungkapan',q:`<p>Makna ungkapan "seperti katak dalam tempurung" dalam pidato tersebut adalah …</p>`,
o:['Memiliki wawasan yang sangat luas','Sangat waspada terhadap bahaya','Hanya mengenal dunianya sendiri dan kurang peduli pada sekitar','Merasa aman di rumah yang kuat'],ans:2,
bh:`Kalimat sesudahnya menjelaskan maknanya: "hanya mengenal dunianya sendiri." Katak di bawah tempurung tidak tahu dunia luar.`},
{b:0,teks:'gotong',t:'pgk',sub:'Menyimpulkan Isi Pidato',q:`<p>Simpulan yang sesuai dengan isi pidato adalah …</p>`,
o:['Gotong royong adalah nilai luhur yang menjaga persatuan bangsa.','Kemajuan teknologi otomatis membuat orang makin peduli.','Kesibukan pribadi membuat semangat gotong royong memudar.'],ans:[0,2],
bh:`Pernyataan 1 dan 3 sesuai paragraf 2 dan 3 ✅✅<br>Pidato justru menyebut gawai membuat orang kurang peduli ❌`},
{b:0,teks:'surat',t:'pg',sub:'Informasi Tersurat Surat',q:`<p>Usaha yang dilakukan Bagas untuk menjalani pola hidup sehat adalah …</p>`,
o:['Tidur siang setiap hari','Berolahraga setiap pagi dan makan lebih banyak sayur serta buah','Hanya minum air putih','Mengikuti klub kebugaran'],ans:1,
bh:`Paragraf 3: "Aku berolahraga setiap pagi, makan lebih banyak sayur dan buah, serta mengurangi minuman manis."`},
{b:0,teks:'surat',t:'bs',label:['Khusus','Umum'],sub:'Kosakata Umum dan Khusus',q:`<p>Tentukan apakah kata yang dicetak tebal pada surat termasuk kosakata khusus atau umum!</p>`,
o:['tenis meja','pola hidup sehat','berolahraga'],ans:[true,false,false],
bh:`<b>Tenis meja</b> = salah satu jenis olahraga tertentu → khusus.<br><b>Pola hidup sehat</b> = mencakup banyak kegiatan (olahraga, makan sehat, dan lain-lain) → umum.<br><b>Berolahraga</b> = bisa olahraga apa saja → umum.`},
{b:0,teks:'surat',t:'pg',sub:'Makna Kata',q:`<p>Makna <b>pantang menyerah</b> dalam surat tersebut adalah …</p>`,
o:['berhenti jika merasa lelah','terus berusaha walaupun menghadapi kesulitan','menghindari lawan yang kuat','senang mencoba hal baru'],ans:1,
bh:`Bagas tetap berlatih dan bermain meski lawannya jago. Pantang menyerah berarti tidak berhenti berusaha walau sulit.`},
/* ===== TEKS SASTRA ===== */
{b:1,teks:'musang',t:'pgk',sub:'Inti Cerita',q:`<p>Pernyataan yang merupakan inti cerita adalah …</p>`,
o:['Kesombongan musang akhirnya membawa akibat buruk bagi dirinya sendiri.','Landak dan kelinci tidak mampu bekerja sama.','Mengejek dan merendahkan orang lain dapat berujung pada keburukan.'],ans:[0,2],
bh:`Musang yang sombong dan suka mengejek akhirnya jatuh ke lumpur ✅✅<br>Cerita tidak membahas landak dan kelinci yang tidak bisa bekerja sama ❌`},
{b:1,teks:'musang',t:'pg',sub:'Makna Ungkapan',q:`<p>Makna ungkapan <b>membusungkan dada</b> dalam cerita tersebut adalah …</p>`,
o:['bersikap sombong','bernapas dalam-dalam','merasa takut','bersikap ramah'],ans:0,
bh:`Musang membusungkan dada sambil menolak mengembalikan layang-layang. Artinya ia bersikap sombong atau angkuh.`},
{b:1,teks:'musang',t:'bs',label:['Sesuai','Tidak Sesuai'],sub:'Respons Emosional Tokoh',q:`<p>Tentukan apakah pernyataan tentang perasaan tokoh berikut sesuai atau tidak sesuai dengan cerita!</p>`,
o:['Musang merasa senang saat mengejek landak dan kelinci.','Landak dan kelinci merasa kecewa sehingga memilih pulang.','Musang merasa menyesal sebelum ia terjatuh ke kubangan.'],ans:[true,true,false],
bh:`Musang tertawa saat mengejek ✅ · Landak dan kelinci pulang karena kecewa ✅<br>Sebelum jatuh, musang tidak menyesal, tetapi <b>terkejut</b> ❌`},
{b:1,teks:'ibu',t:'pg',sub:'Objek Puisi',q:`<p>Berdasarkan kata-kata yang digunakan, objek utama yang digambarkan dalam puisi adalah …</p>`,
o:['Rumah yang terang benderang','Ibu yang penuh kasih sayang dan tidak kenal lelah','Samudra yang luas','Anak yang sering menangis'],ans:1,
bh:`Judul dan isi puisi menyapa "Ibu" dan menggambarkan kasih sayangnya: mengusap pipi, tersenyum tulus, tak pernah padam walau lelah.`},
{b:1,teks:'negeri',t:'pgk',sub:'Nilai dalam Puisi',q:`<p>Nilai-nilai yang dapat disimpulkan dari puisi "Untuk Negeriku" adalah …</p>`,
o:['Semangat berbakti dan berkontribusi bagi bangsa','Keinginan memberi manfaat bagi orang lain','Keinginan berperang melawan negara lain'],ans:[0,1],
bh:`"Menerangi desa", "menanam padi untuk rakyat", dan "ilmu yang dibagi" menunjukkan keinginan berbakti dan bermanfaat ✅✅<br>Tidak ada kata tentang berperang ❌`},
{b:1,teks:'kelam',t:'pg',sub:'Makna Ungkapan Puisi',q:`<p>Makna ungkapan <b>hatiku kelabu</b> dalam puisi tersebut adalah …</p>`,
o:['hati yang sedih','hati yang marah','hati yang gembira','hati yang takut'],ans:0,
bh:`Kelabu = warna mendung. Dalam puisi, "hatiku kelabu" muncul saat sahabat pindah kota → menggambarkan rasa <b>sedih</b>.`},
{b:1,teks:'raja',t:'pg',sub:'Urutan Alur',q:`<p>Urutan alur yang tepat dari cerita tersebut adalah …</p>`,
o:['sayembara → Sarip menganyam hingga subuh → Sarip tertidur lelap → Sarip dipilih menjadi pemenang','Sarip dipilih → sayembara → Sarip tertidur → Sarip menganyam','Sarip menganyam → Sarip tertidur → sayembara → Sarip dipilih','Sarip tertidur → Sarip dipilih → Sarip menganyam → sayembara'],ans:0,
bh:`Sayembara diumumkan (P1) → Sarip menganyam sampai subuh lalu tertidur (P2) → Putri memilih Sarip (P3).`},
{b:1,teks:'beruang',t:'pg',sub:'Perubahan Suasana',q:`<p>Pernyataan yang paling tepat menggambarkan perubahan suasana dalam cerita adalah …</p>`,
o:['Dari tenang dan menyenangkan menjadi menegangkan saat beruang muncul','Dari sedih menjadi gembira','Dari marah menjadi tenang','Dari menegangkan menjadi membosankan'],ans:0,
bh:`Awal: menikmati udara segar dan kicau burung (tenang, menyenangkan). Saat beruang muncul: panik dan berpura-pura mati (menegangkan).`},
{b:1,teks:'topi',t:'pgk',sub:'Relevansi dengan Kehidupan',q:`<p>Peristiwa sehari-hari yang sesuai dengan kejadian dalam cerita adalah …</p>`,
o:['Seorang siswa meminjamkan pensil cadangan kepada temannya yang lupa membawa pensil saat ujian.','Seorang siswa menertawakan temannya yang lupa membawa buku.','Seorang anak membagi bekal kepada temannya yang lupa membawa makanan.'],ans:[0,2],
bh:`Inti cerita: membantu teman yang lupa membawa perlengkapan ✅✅<br>Menertawakan teman adalah kebalikan sikap Ayu ❌`}
]};
