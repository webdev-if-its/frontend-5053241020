// TODO(Level 7): komponen TANPA props (tipe props-nya harus kosong). Buat
// controlled input berlabel "Nama" yang nilainya disimpan di
// useState<string>, dan tampilkan teks "Halo, {nama}!" — kalau nama masih
// kosong, tampilkan "Halo, Tamu!".
// Lihat SOAL.md untuk kontrak lengkap.
import { useState } from "react";

export function SapaNama() {
  const [nama, setNama] = useState("");

  return (
    <div>
      <label htmlFor="nama">Nama:</label>
      <input id="nama" type="text" value={nama} onChange={(e) => setNama(e.target.value)}/>
      <p>{nama ? `Halo, ${nama}!` : "Halo, Tamu!"}</p>
    </div>
  );
}
