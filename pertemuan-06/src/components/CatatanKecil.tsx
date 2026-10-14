// TODO(Level 8): komponen TANPA props. Render <textarea> berlabel
// "Catatan" (controlled). Nilai awalnya dibaca dari
// localStorage.getItem("catatan") (kalau belum ada: ""), lewat LAZY
// INITIALIZER useState(() => ...) supaya getItem hanya dipanggil SEKALI.
// Setiap teks berubah, simpan ke localStorage.setItem("catatan", teks) di
// dalam useEffect.
// Lihat SOAL.md untuk kontrak lengkap.
import { useState, useEffect } from "react"

export function CatatanKecil() {
  const [catatan, setCatatan] = useState(
    () => localStorage.getItem("catatan") || ""
  )

  useEffect(() => {
    localStorage.setItem("catatan", catatan)
  }, [catatan])

  return (
    <div>
      <label htmlFor="catatan">Catatan</label>
      <textarea
        id="catatan"
        value={catatan}
        onChange={(e) => setCatatan(e.target.value)}
      />
    </div>
  )
}
