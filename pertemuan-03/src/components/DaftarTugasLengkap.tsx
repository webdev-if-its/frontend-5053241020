// TODO(Level 8): beri tipe props yang benar — { tugas: Tugas[]; onHapus:
// (id: string) => void } (impor tipe Tugas dari '../types'). Gabungkan
// beberapa konsep pertemuan ini:
// - kalau tugas.length === 0, render teks yang memuat "Tidak ada tugas",
// - kalau tidak, render daftar tugas (boleh pakai <ul>/<li> atau <div>),
//   dan di tiap item sertakan sebuah <Button variant="danger"> berteks
//   "Hapus" yang saat diklik memanggil onHapus(id) dengan id tugas
//   tersebut — MANFAATKAN KEMBALI komponen Button dari Level 7, jangan
//   tulis <button> baru dari nol.
// Lihat SOAL.md untuk kontrak lengkap.
import type { Tugas } from '../types';
import { KartuTugas } from './KartuTugas';
import { Button } from './Button';

type DaftarTugasLengkap = {
  tugas: Tugas[];
  onHapus: (id: string) => void;
}

export function DaftarTugasLengkap({ tugas, onHapus }: DaftarTugasLengkap) {
  if (tugas.length === 0) {
    return <p>Tidak ada tugas</p>;
  }

  return (
    <ul>
      {tugas.map((task) => (
        <li key={task.id}>
          <KartuTugas teks={task.teks} selesai={task.selesai} />
          <Button variant="danger" onClick={() => onHapus(task.id)}>
            Hapus
          </Button>
        </li>
      ))}
    </ul>
  );
}
