// TODO(Level 9): beri tipe props yang benar — { isi: string }. Gunakan state
// boolean: awalnya detail tersembunyi dan tombol bertuliskan "Tampilkan
// detail". Saat diklik, teks props.isi muncul dan tombol berubah jadi
// "Sembunyikan detail"; klik lagi menyembunyikannya (elemennya harus
// benar-benar hilang dari DOM).
// Lihat SOAL.md untuk kontrak lengkap.
import { useState } from "react";

type Props = {
  isi: string
}

export function DetailToggle(props: Props) {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Sembunyikan detail' : 'Tampilkan detail'}
      </button>
      {visible && <p>{props.isi}</p>}
    </div>
  );
}
