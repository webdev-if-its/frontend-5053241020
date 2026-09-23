// TODO(Level 8): komponen TANPA props. Render dua input angka berlabel
// "Angka A" dan "Angka B" (type="number") dan teks "Hasil: {A + B}".
// Ingat: e.target.value SELALU string — ubah ke number sebelum dijumlahkan,
// dan input kosong dianggap 0.
// Lihat SOAL.md untuk kontrak lengkap.
import { useState } from "react";

export function KalkulatorMini() {
  const [angkaA, setAngkaA] = useState(0);
  const [angkaB, setAngkaB] = useState(0);

  return (
    <div>
      <label htmlFor="angkaA">Angka A:</label>
      <input id="angkaA" type="number" value={angkaA} onChange={(e) => setAngkaA(Number(e.target.value))}/>
      <label htmlFor="angkaB">Angka B:</label>
      <input id="angkaB" type="number" value={angkaB} onChange={(e) => setAngkaB(Number(e.target.value))}/>
      <p>Hasil: {angkaA + angkaB}</p>
    </div>
  );
}
