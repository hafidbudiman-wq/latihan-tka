/* Untuk Bahasa Indonesia, sub-bagian dan versi mudah langsung ditulis di soal.js.
   File ini hanya menyesuaikan format agar bisa dipakai aplikasi latihan yang sama. */
const SUB={},LAMA={},BARU={};
TOPIK.forEach(t=>{SUB[t.id]=t.subs;LAMA[t.id]=t.soal.map(s=>[s.sub,s.simpel]);BARU[t.id]=[]});
