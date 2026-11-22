/* Simulasi TKA Bahasa Indonesia SD – Paket 2 (teks dan soal orisinal) */
const PAKET={
id:'bi-2',mapel:'Bahasa Indonesia',judul:'Simulasi Bahasa Indonesia Paket 2',ket:'Teks bacaan dan soal orisinal · berita, biografi, jadwal, drama, pantun',
waktu:75,acak:true,warna:['#c2255c','#e8590c','#fff0f3'],
bagian:['Teks Informasi','Teks Sastra'],
teks:{
berita:`<h4>Siswa SD Ciptakan Alat Penyiram Tanaman Otomatis</h4>
<p>MAGELANG – Tiga siswa kelas 6 SD Negeri Sukamaju, yaitu Fajar, Nisa, dan Galih, berhasil membuat alat penyiram tanaman otomatis. Alat tersebut dipamerkan dalam Festival Sains Pelajar di aula kabupaten pada Sabtu (12/10).</p>
<p>Alat itu dibuat dari botol bekas, selang kecil, dan sensor kelembapan tanah. Jika tanah kering, sensor akan menyalakan pompa kecil sehingga air mengalir ke tanaman. Jika tanah sudah lembap, pompa berhenti dengan sendirinya.</p>
<p>"Kami membuatnya karena tanaman di kebun sekolah sering layu saat libur panjang," kata Fajar. Ketiganya mengerjakan alat itu selama dua bulan dengan bimbingan guru IPA mereka, Bu Wulan.</p>
<p>Menurut panitia, alat tersebut sangat bermanfaat dan mudah ditiru. Karya mereka meraih juara kedua dalam festival itu.</p>`,
donor:`<h4 style="color:#c2255c">📚 AYO DONASI BUKU! 📚</h4>
<p class="ni" style="text-align:center"><b>Bantu Taman Baca "Pelangi" di Desa Sukarame</b></p>
<table><tr><td>Waktu</td><td>Senin–Jumat, 4–15 November, pukul 07.00–14.00</td></tr><tr><td>Tempat</td><td>Ruang OSIS SD Tunas Bangsa</td></tr><tr><td>Buku yang diterima</td><td>Buku cerita anak, ensiklopedia, dan majalah anak yang masih layak baca (tidak robek, tidak dicoret-coret)</td></tr><tr><td>Hadiah</td><td>Setiap penyumbang 3 buku atau lebih mendapat pembatas buku cantik</td></tr></table>
<p class="ni" style="text-align:center">Satu buku darimu, seribu senyum untuk mereka!</p>
<p class="ni" style="text-align:center;font-size:13px">Narahubung: Kak Sinta (Ketua OSIS)</p>`,
pelangi:`<h4>Bagaimana Pelangi Terbentuk?</h4>
<p>Pelangi adalah lengkungan warna-warni yang muncul di langit setelah hujan. Pelangi terbentuk karena cahaya matahari mengenai butiran air hujan yang masih melayang di udara.</p>
<p>Cahaya matahari sebenarnya terdiri atas banyak warna. Ketika cahaya masuk ke butiran air, cahaya itu dibelokkan dan diuraikan menjadi warna-warna: merah, jingga, kuning, hijau, biru, nila, dan ungu. Cahaya kemudian dipantulkan di dalam butiran air dan keluar lagi menuju mata kita.</p>
<p>Pelangi hanya dapat dilihat jika matahari berada di belakang kita dan hujan berada di depan kita. Itulah sebabnya pelangi sering terlihat pada sore hari, ketika matahari sudah rendah di sebelah barat dan sisa hujan masih ada di sebelah timur.</p>`,
ki:`<h4>Ki Hajar Dewantara, Bapak Pendidikan Nasional</h4>
<p>Ki Hajar Dewantara lahir di Yogyakarta pada 2 Mei 1889 dengan nama Raden Mas Soewardi Soerjaningrat. Pada masa penjajahan, hanya sedikit anak Indonesia yang boleh bersekolah. Hal itu membuatnya sedih dan bertekad memperjuangkan pendidikan bagi semua rakyat.</p>
<p>Pada tahun 1922, ia mendirikan Perguruan Taman Siswa. Sekolah ini terbuka bagi anak-anak pribumi dari berbagai kalangan. Ia juga dikenal dengan semboyannya, yaitu <i>Ing ngarsa sung tuladha, ing madya mangun karsa, tut wuri handayani</i>. Artinya, di depan memberi teladan, di tengah membangun semangat, dan di belakang memberi dorongan.</p>
<p>Atas jasa-jasanya, tanggal kelahirannya, 2 Mei, diperingati sebagai Hari Pendidikan Nasional. Semboyan <i>tut wuri handayani</i> hingga kini dipakai dalam logo Kementerian Pendidikan.</p>`,
jadwal:`<h4>Jadwal Perkemahan Pramuka SD Cendekia – Hari Pertama (Sabtu)</h4>
<table><tr><th>Waktu</th><th>Kegiatan</th><th>Tempat</th></tr>
<tr><td>07.00–08.00</td><td>Apel pembukaan</td><td>Lapangan utama</td></tr>
<tr><td>08.00–10.00</td><td>Mendirikan tenda</td><td>Area perkemahan</td></tr>
<tr><td>10.00–12.00</td><td>Lomba tali-temali dan sandi</td><td>Lapangan utama</td></tr>
<tr><td>12.00–13.00</td><td>Istirahat, salat, makan</td><td>Area perkemahan</td></tr>
<tr><td>13.00–15.30</td><td>Penjelajahan alam</td><td>Hutan pinus</td></tr>
<tr><td>19.30–21.30</td><td>Api unggun dan pentas seni</td><td>Lapangan utama</td></tr></table>
<p class="ni" style="font-size:13px">Catatan: Peserta wajib membawa senter untuk kegiatan malam hari.</p>`,
drama:`<h4>Pensil yang Hilang</h4>
<p class="ni"><i>(Di kelas, saat jam istirahat. Doni mencari-cari sesuatu di dalam tasnya.)</i></p>
<p class="ni"><b>Doni</b> : (panik) Pensil gambarku tidak ada! Padahal itu hadiah dari Ayah.<br>
<b>Riko</b> : Tadi aku lihat Beni memegang pensil biru di dekat mejamu.<br>
<b>Doni</b> : (marah) Beni! Kamu mengambil pensilku, ya?<br>
<b>Beni</b> : (terkejut) Bukan, Don. Pensil itu jatuh ke lantai. Aku memungutnya dan menaruhnya di laci mejamu supaya tidak terinjak.<br>
<b>Doni</b> : (membuka laci, lalu menunduk) Oh … benar, ada di sini. Maafkan aku, Ben. Aku sudah menuduhmu tanpa bertanya dulu.<br>
<b>Beni</b> : (tersenyum) Tidak apa-apa. Lain kali kita tanyakan baik-baik, ya.<br>
<b>Riko</b> : Maaf juga, aku tadi tidak melihat dengan jelas.</p>`,
kura:`<h4>Kura-Kura Penjaga Kolam</h4>
<p>Di sebuah kolam teratai, hiduplah Kura-kura Tua yang bijaksana. Setiap pagi ia berenang mengelilingi kolam untuk memastikan semua penghuni dalam keadaan baik.</p>
<p>Suatu hari, Ikan Mas yang suka pamer berenang ke tepi kolam. "Lihat sisikku yang berkilau! Aku pasti ikan tercantik di sini," katanya. Kura-kura mengingatkan, "Jangan terlalu dekat ke tepi, Bangau sering berburu di sana." Ikan Mas hanya tertawa.</p>
<p>Benar saja, sore itu Bangau datang. Paruhnya yang panjang hampir menangkap Ikan Mas. Dengan cepat Kura-kura Tua menyelam ke bawah Ikan Mas dan mendorongnya ke balik daun teratai. Bangau pun terbang pergi dengan kecewa.</p>
<p>Sejak hari itu, Ikan Mas tidak lagi suka pamer. Ia justru sering membantu Kura-kura Tua mengingatkan ikan-ikan kecil agar tidak berenang ke tepi kolam.</p>`,
pantun:`<h4>Pantun Nasihat</h4><p class="src" style="text-align:center">(karya: Tim Latihan TKA)</p>
<p class="puisi">Pergi ke pasar membeli rambutan
jangan lupa membeli kelapa
rajin belajar sejak sekarang
agar kelak tercapai cita-cita

Burung pipit terbang ke dahan
hinggap sebentar di pohon jambu
hormati guru sepanjang zaman
karena darinya kita berilmu</p>`,
hujan:`<h4>Hujan Sore</h4><p class="src" style="text-align:center">(karya: Tim Latihan TKA)</p>
<p class="puisi">Langit kelabu menutup senja
hujan turun mengetuk jendela
aku termenung di sudut rumah
menunggu Ayah pulang bekerja

Tiba-tiba pintu diketuk pelan
Ayah datang dengan senyum basah
hilang sudah segala cemas
hangat pelukan pengusir resah</p>`,
lomba:`<h4>Kelas Kami Paling Bersih</h4>
<p>Sekolah mengadakan lomba kebersihan kelas. Juri akan menilai pada hari Jumat. Sayangnya, kelas 6C terkenal paling berantakan. Sampah kertas sering berserakan di bawah meja.</p>
<p>Laila, ketua kelas, tidak mau menyerah. Ia membuat jadwal piket baru dan mengajak teman-temannya membawa tanaman kecil dari rumah. Awalnya beberapa teman mengeluh. "Percuma, kelas kita pasti kalah," kata Andre.</p>
<p>Laila tidak marah. Ia memulai dengan memungut sampah di sekitar mejanya sendiri setiap pagi. Melihat itu, satu per satu temannya ikut membantu, termasuk Andre. Mereka mengecat ulang tempat sampah dan menempel poster "Buanglah Sampah pada Tempatnya".</p>
<p>Pada hari Jumat, juri terkejut melihat kelas 6C yang bersih dan hijau. Kelas 6C meraih juara pertama. Andre tersenyum malu. "Ternyata kalau kita kompak, tidak ada yang percuma," katanya.</p>`
},
soal:[
/* ===== BAGIAN 1: TEKS INFORMASI ===== */
{b:0,teks:'berita',t:'pg',sub:'Unsur Berita',q:`<p>Di mana alat penyiram tanaman otomatis itu dipamerkan?</p>`,
o:['Di kebun SD Negeri Sukamaju','Di aula kabupaten dalam Festival Sains Pelajar','Di rumah Bu Wulan','Di laboratorium IPA sekolah'],ans:1,
bh:`Unsur "di mana" tertulis di paragraf pertama: "dipamerkan dalam Festival Sains Pelajar di aula kabupaten."`},
{b:0,teks:'berita',t:'bs',sub:'Informasi Tersurat (5W+1H)',q:`<p>Tentukan benar atau salah pernyataan berikut sesuai isi berita!</p>`,
o:['Alat dibuat dari botol bekas, selang kecil, dan sensor kelembapan tanah.','Pompa tetap menyala walaupun tanah sudah lembap.','Alat dibuat karena tanaman kebun sekolah sering layu saat libur panjang.'],ans:[true,false,true],
bh:`Bahan alat tertulis di paragraf 2 ✅<br>Teks menyebut pompa <b>berhenti</b> jika tanah sudah lembap ❌<br>Alasan pembuatan disampaikan Fajar di paragraf 3 ✅`},
{b:0,teks:'berita',t:'pgk',sub:'Fakta dan Opini',q:`<p>Kalimat yang berisi <b>fakta</b> dalam berita tersebut adalah …</p>`,
o:['Ketiganya mengerjakan alat itu selama dua bulan.','Karya mereka meraih juara kedua dalam festival itu.','Alat tersebut sangat bermanfaat dan mudah ditiru.'],ans:[0,1],
bh:`Fakta = peristiwa yang benar-benar terjadi dan bisa dibuktikan (lama pengerjaan, juara kedua) ✅✅<br>"Sangat bermanfaat dan mudah ditiru" adalah <b>pendapat</b> panitia (opini) ❌`},
{b:0,teks:'donor',t:'pg',sub:'Tujuan Poster',q:`<p>Tujuan utama poster tersebut adalah …</p>`,
o:['Menjual buku bekas kepada siswa','Mengajak orang menyumbangkan buku untuk taman baca','Mengumumkan pemenang lomba membaca','Memperkenalkan pengurus OSIS yang baru'],ans:1,
bh:`Judul "AYO DONASI BUKU!" dan kalimat "Bantu Taman Baca Pelangi" menunjukkan poster ini <b>mengajak</b> orang menyumbangkan buku.`},
{b:0,teks:'donor',t:'bs',label:['Sesuai','Tidak Sesuai'],sub:'Membaca Informasi Poster',q:`<p>Tentukan apakah pernyataan berikut sesuai atau tidak sesuai dengan isi poster!</p>`,
o:['Buku dapat diserahkan pada hari Sabtu di ruang OSIS.','Buku yang sudah robek dan dicoret-coret tidak diterima.','Siswa yang menyumbang 4 buku akan mendapat pembatas buku.'],ans:[false,true,true],
bh:`Waktu penyerahan Senin–Jumat, bukan Sabtu ❌<br>Syarat buku: tidak robek, tidak dicoret-coret ✅<br>Hadiah untuk penyumbang <b>3 buku atau lebih</b>, jadi 4 buku juga mendapat hadiah ✅`},
{b:0,teks:'pelangi',t:'pg',sub:'Urutan Proses',q:`<p>Urutan proses terbentuknya pelangi yang tepat berdasarkan teks adalah …</p>`,
o:['cahaya diuraikan menjadi warna → cahaya masuk ke butiran air → cahaya dipantulkan → cahaya menuju mata','cahaya masuk ke butiran air → cahaya dibelokkan dan diuraikan → cahaya dipantulkan → cahaya keluar menuju mata','cahaya dipantulkan → cahaya masuk ke butiran air → cahaya menuju mata → cahaya diuraikan','cahaya menuju mata → cahaya dipantulkan → cahaya diuraikan → cahaya masuk ke butiran air'],ans:1,
bh:`Paragraf 2 menjelaskan urutannya: cahaya <b>masuk</b> ke butiran air → <b>dibelokkan dan diuraikan</b> → <b>dipantulkan</b> di dalam butiran → <b>keluar</b> menuju mata.`},
{b:0,teks:'pelangi',t:'pgk',sub:'Informasi Tersurat',q:`<p>Pernyataan yang sesuai dengan isi teks adalah …</p>`,
o:['Cahaya matahari sebenarnya terdiri atas banyak warna.','Pelangi terlihat jika matahari ada di depan kita dan hujan di belakang kita.','Pelangi sering terlihat pada sore hari.'],ans:[0,2],
bh:`Pernyataan 1 dan 3 tertulis di teks ✅<br>Teks menyebut sebaliknya: matahari di <b>belakang</b> kita, hujan di <b>depan</b> ❌`},
{b:0,teks:'pelangi',t:'pg',sub:'Gagasan Utama',q:`<p>Gagasan utama paragraf ketiga adalah …</p>`,
o:['Pelangi terdiri atas tujuh warna.','Syarat posisi matahari dan hujan agar pelangi dapat terlihat.','Cahaya dipantulkan di dalam butiran air.','Hujan sering turun pada sore hari.'],ans:1,
bh:`Kalimat utama paragraf 3: "Pelangi hanya dapat dilihat jika matahari berada di belakang kita dan hujan berada di depan kita." Kalimat berikutnya menjelaskan kalimat itu.`},
{b:0,teks:'ki',t:'pg',sub:'Informasi Tersurat Biografi',q:`<p>Nama asli Ki Hajar Dewantara adalah …</p>`,
o:['Taman Siswa','Raden Mas Soewardi Soerjaningrat','Tut Wuri Handayani','Raden Ajeng Kartini'],ans:1,
bh:`Paragraf pertama: "lahir … dengan nama Raden Mas Soewardi Soerjaningrat."`},
{b:0,teks:'ki',t:'bs',sub:'Kesesuaian Informasi',q:`<p>Tentukan benar atau salah pernyataan berikut berdasarkan teks biografi!</p>`,
o:['Perguruan Taman Siswa didirikan pada tahun 1922.','Hari Pendidikan Nasional diperingati setiap tanggal 2 Mei.','Taman Siswa hanya menerima anak-anak bangsawan.'],ans:[true,true,false],
bh:`Tahun 1922 ✅ · 2 Mei = tanggal lahir yang diperingati sebagai Hari Pendidikan Nasional ✅<br>Taman Siswa terbuka bagi anak pribumi dari <b>berbagai kalangan</b> ❌`},
{b:0,teks:'ki',t:'pg',sub:'Makna Ungkapan',q:`<p>Sikap guru yang sesuai dengan semboyan <i>tut wuri handayani</i> adalah …</p>`,
o:['Guru mengerjakan semua tugas muridnya.','Guru memberi semangat dan dorongan agar murid berani mencoba sendiri.','Guru selalu berjalan di depan barisan murid.','Guru hanya memberi nilai tanpa memberi masukan.'],ans:1,
bh:`<i>Tut wuri handayani</i> artinya "di belakang memberi dorongan". Guru tidak mengerjakan tugas murid, tetapi <b>mendorong</b> murid supaya berani dan mandiri.`},
{b:0,teks:'jadwal',t:'pg',sub:'Membaca Tabel Jadwal',q:`<p>Kegiatan yang berlangsung paling lama pada hari pertama perkemahan adalah …</p>`,
o:['Mendirikan tenda','Penjelajahan alam','Api unggun dan pentas seni','Lomba tali-temali dan sandi'],ans:1,
bh:`Hitung lamanya: tenda 2 jam · lomba 2 jam · penjelajahan 13.00–15.30 = <b>2,5 jam</b> · api unggun 2 jam. Jadi yang paling lama penjelajahan alam.`},
{b:0,teks:'jadwal',t:'pgk',sub:'Menyimpulkan Informasi',q:`<p>Kesimpulan yang tepat berdasarkan jadwal tersebut adalah …</p>`,
o:['Lapangan utama dipakai untuk tiga kegiatan.','Senter dibutuhkan saat kegiatan api unggun.','Penjelajahan alam dilakukan pada pagi hari.'],ans:[0,1],
bh:`Lapangan utama: apel, lomba, dan api unggun = 3 kegiatan ✅<br>Senter wajib untuk kegiatan malam, yaitu api unggun ✅<br>Penjelajahan pukul 13.00 = siang hari ❌`},
{b:0,t:'pg',sub:'Kata Hubung',q:`<p>Perhatikan kalimat berikut!</p><p style="background:#fffdf5;border-radius:10px;padding:8px 12px">Kakak suka membaca buku sejarah, <b>…</b> adik lebih suka membaca komik.</p><p>Kata hubung yang tepat untuk melengkapi kalimat tersebut adalah …</p>`,
o:['karena','sehingga','sedangkan','lalu'],ans:2,
bh:`Kalimat membandingkan dua hal yang berbeda (kesukaan kakak dan adik). Kata hubung pertentangan yang tepat adalah <b>sedangkan</b>. "Karena" dan "sehingga" menunjukkan sebab-akibat, "lalu" menunjukkan urutan waktu.`},
{b:0,t:'pg',sub:'Ide Pokok',q:`<p>Bacalah paragraf berikut!</p><p style="background:#fffdf5;border-radius:10px;padding:8px 12px">Sarapan pagi sangat penting bagi anak sekolah. Sarapan memberi tenaga agar kita tidak lemas saat belajar. Selain itu, perut yang terisi membuat kita lebih mudah berkonsentrasi. Anak yang sarapan juga tidak mudah jajan sembarangan.</p><p>Ide pokok paragraf tersebut adalah …</p>`,
o:['Anak sekolah suka jajan sembarangan.','Pentingnya sarapan pagi bagi anak sekolah.','Sarapan membuat perut kenyang.','Cara membuat sarapan yang sehat.'],ans:1,
bh:`Kalimat pertama adalah kalimat utama: "Sarapan pagi sangat penting bagi anak sekolah." Kalimat lainnya menjelaskan alasan pentingnya (kalimat penjelas).`},
/* ===== BAGIAN 2: TEKS SASTRA ===== */
{b:1,teks:'drama',t:'pg',sub:'Watak Tokoh',q:`<p>Watak Beni dalam dialog tersebut adalah …</p>`,
o:['pemarah dan suka menuduh','peduli dan pemaaf','sombong dan egois','penakut dan pendiam'],ans:1,
bh:`Beni memungut pensil yang jatuh agar tidak terinjak (<b>peduli</b>) dan tersenyum serta berkata "Tidak apa-apa" setelah dituduh (<b>pemaaf</b>).`},
{b:1,teks:'drama',t:'bs',label:['Sesuai','Tidak Sesuai'],sub:'Memahami Dialog',q:`<p>Tentukan apakah pernyataan berikut sesuai atau tidak sesuai dengan isi dialog!</p>`,
o:['Doni menuduh Beni tanpa bertanya terlebih dahulu.','Riko yakin melihat Beni memasukkan pensil ke tasnya sendiri.','Doni menyesal dan meminta maaf kepada Beni.'],ans:[true,false,true],
bh:`Doni langsung menuduh ✅ lalu menunduk dan meminta maaf ✅<br>Riko hanya melihat Beni "memegang pensil biru di dekat mejamu", bukan memasukkan ke tasnya. Riko juga mengaku tidak melihat dengan jelas ❌`},
{b:1,teks:'drama',t:'pg',sub:'Konflik dan Amanat',q:`<p>Amanat yang paling tepat dari dialog tersebut adalah …</p>`,
o:['Kita harus menjaga barang hadiah dari orang tua.','Jangan menuduh orang lain sebelum mengetahui kebenarannya.','Pensil sebaiknya disimpan di dalam tas.','Kita harus selalu berhati-hati saat istirahat.'],ans:1,
bh:`Masalah utamanya adalah Doni menuduh Beni tanpa bertanya. Nasihatnya disampaikan Beni sendiri: "Lain kali kita tanyakan baik-baik, ya."`},
{b:1,teks:'kura',t:'pgk',sub:'Inti Cerita',q:`<p>Pernyataan yang sesuai dengan isi cerita "Kura-Kura Penjaga Kolam" adalah …</p>`,
o:['Ikan Mas hampir ditangkap Bangau karena tidak mendengar nasihat.','Kura-kura Tua menolong Ikan Mas dengan mendorongnya ke balik daun teratai.','Bangau berhasil menangkap ikan-ikan kecil di tepi kolam.'],ans:[0,1],
bh:`Pernyataan 1 dan 2 sesuai dengan paragraf 2 dan 3 ✅<br>Bangau terbang pergi "dengan kecewa", tidak berhasil menangkap ikan ❌`},
{b:1,teks:'kura',t:'pg',sub:'Latar Waktu',q:`<p>Kapan Bangau datang dan hampir menangkap Ikan Mas?</p>`,
o:['Pagi hari','Siang hari','Sore hari','Malam hari'],ans:2,
bh:`Paragraf ketiga: "Benar saja, <b>sore itu</b> Bangau datang."`},
{b:1,teks:'kura',t:'bs',sub:'Perubahan Watak',q:`<p>Tentukan benar atau salah pernyataan tentang tokoh Ikan Mas!</p>`,
o:['Pada awal cerita Ikan Mas suka pamer.','Setelah diselamatkan, Ikan Mas tetap tidak mau mendengar nasihat.','Di akhir cerita Ikan Mas ikut mengingatkan ikan-ikan kecil.'],ans:[true,false,true],
bh:`Ikan Mas memamerkan sisiknya ✅. Setelah itu ia berubah: tidak lagi pamer dan justru membantu mengingatkan ikan kecil ✅. Jadi pernyataan 2 ❌`},
{b:1,teks:'pantun',t:'pg',sub:'Isi Pantun',q:`<p>Isi pantun pertama adalah …</p>`,
o:['Ajakan pergi ke pasar membeli buah','Nasihat agar rajin belajar supaya cita-cita tercapai','Larangan membeli kelapa','Cerita tentang burung pipit'],ans:1,
bh:`Pada pantun, baris 1–2 adalah <b>sampiran</b> dan baris 3–4 adalah <b>isi</b>. Isi pantun pertama: "rajin belajar sejak sekarang, agar kelak tercapai cita-cita."`},
{b:1,teks:'pantun',t:'bs',sub:'Ciri Pantun',q:`<p>Tentukan benar atau salah pernyataan tentang pantun kedua!</p>`,
o:['Baris "Burung pipit terbang ke dahan" termasuk sampiran.','Isi pantun kedua adalah nasihat untuk menghormati guru.','Pantun kedua terdiri atas enam baris.'],ans:[true,true,false],
bh:`Baris 1–2 sampiran ✅ · baris 3–4 isinya tentang menghormati guru ✅<br>Setiap bait pantun terdiri atas <b>empat</b> baris ❌`},
{b:1,teks:'hujan',t:'pg',sub:'Perubahan Suasana',q:`<p>Perubahan suasana hati "aku" dalam puisi "Hujan Sore" adalah …</p>`,
o:['dari gembira menjadi sedih','dari cemas menjadi lega dan bahagia','dari marah menjadi tenang','dari bosan menjadi takut'],ans:1,
bh:`Bait 1: "aku termenung … menunggu Ayah" (cemas). Bait 2: "hilang sudah segala cemas, hangat pelukan pengusir resah" (lega dan bahagia).`},
{b:1,teks:'hujan',t:'pgk',sub:'Makna Larik',q:`<p>Pernyataan yang sesuai dengan makna puisi tersebut adalah …</p>`,
o:['Larik "hujan turun mengetuk jendela" menggambarkan butiran hujan yang mengenai kaca jendela.','"Senyum basah" menggambarkan Ayah pulang dalam keadaan kehujanan, tetapi tetap tersenyum.','Puisi tersebut menceritakan Ayah yang tidak pulang karena hujan.'],ans:[0,1],
bh:`"Mengetuk jendela" adalah kiasan untuk bunyi hujan di kaca ✅ · "Senyum basah" = Ayah basah kehujanan tetapi tersenyum ✅<br>Ayah pulang (bait 2), jadi pernyataan 3 ❌`},
{b:1,teks:'lomba',t:'pg',sub:'Sebab dalam Cerita',q:`<p>Apa yang membuat teman-teman Laila akhirnya ikut membersihkan kelas?</p>`,
o:['Laila memarahi teman-teman yang malas.','Teman-teman melihat Laila memberi contoh dengan memungut sampah setiap pagi.','Juri memerintahkan mereka membersihkan kelas.','Mereka dijanjikan hadiah oleh guru.'],ans:1,
bh:`Paragraf 3: "Ia memulai dengan memungut sampah di sekitar mejanya sendiri setiap pagi. <b>Melihat itu</b>, satu per satu temannya ikut membantu."`},
{b:1,teks:'lomba',t:'pg',sub:'Tokoh Utama',q:`<p>Tokoh utama dalam cerita tersebut adalah …</p>`,
o:['Andre','Juri','Laila','Guru kelas'],ans:2,
bh:`Tokoh utama adalah tokoh yang paling banyak diceritakan dan menggerakkan cerita. Laila yang membuat jadwal piket, memberi contoh, dan mengajak teman-temannya.`},
{b:1,teks:'lomba',t:'bs',label:['Sesuai','Tidak Sesuai'],sub:'Relevansi dengan Kehidupan',q:`<p>Tentukan apakah peristiwa berikut sesuai atau tidak sesuai dengan sikap yang diteladankan dalam cerita!</p>`,
o:['Ketua kelompok mengerjakan bagiannya lebih dulu agar teman-temannya ikut bersemangat.','Seorang siswa menyerah sebelum mencoba karena merasa pasti kalah.','Warga satu RT bekerja sama membersihkan selokan sebelum musim hujan.'],ans:[true,false,true],
bh:`Sikap yang diteladankan: memberi contoh dan bekerja sama ✅✅<br>Menyerah sebelum mencoba adalah sikap Andre di awal cerita, yang justru terbukti keliru ❌`},
{b:1,teks:'lomba',t:'pgk',sub:'Nilai dalam Cerita',q:`<p>Nilai-nilai yang terdapat dalam cerita tersebut adalah …</p>`,
o:['Kerja sama (kekompakan)','Kepemimpinan dengan memberi teladan','Kecurangan untuk menang lomba'],ans:[0,1],
bh:`Kelas 6C menang karena kompak (kerja sama) dan Laila memimpin dengan memberi contoh ✅✅<br>Tidak ada kecurangan dalam cerita ❌`},
{b:1,teks:'lomba',t:'pg',sub:'Judul Cerita',q:`<p>Judul lain yang paling sesuai untuk cerita tersebut adalah …</p>`,
o:['Andre yang Pemalas','Kompak Membawa Kemenangan','Juri yang Terkejut','Tanaman Kecil di Kelas'],ans:1,
bh:`Judul yang baik mencerminkan inti cerita. Inti cerita: kelas 6C menang karena kompak. Andre berkata, "Ternyata kalau kita kompak, tidak ada yang percuma."`}
]};
