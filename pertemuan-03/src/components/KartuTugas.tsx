// TODO(Level 6): beri tipe props yang benar — { teks: string; selesai:
// boolean }. Render SATU elemen root yang:
// - punya class Tailwind untuk padding (mis. p-4), sudut membulat (mis.
//   rounded-xl atau rounded-lg), dan bayangan (mis. shadow atau shadow-md)
//   — nama kelas persisnya bebas, yang penting kategorinya ada,
// - punya class literal "line-through" TAMBAHAN di className saat selesai
//   bernilai true, dan TIDAK ada class itu sama sekali saat false,
// - menampilkan teks tugas di dalamnya.
// Lihat SOAL.md untuk kontrak lengkap.
type KartuTugas = {
  teks: string;
  selesai: boolean;
};

export function KartuTugas({ teks, selesai }: KartuTugas) {
  return (
    <div className={`p-3 rounded-xxl shadow ${selesai ? "line-through" : ""}`}>
      {teks}
    </div>
  );
}
