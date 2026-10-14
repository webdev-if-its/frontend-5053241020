// TODO(Level 7): beri tipe props yang benar — { onEsc: () => void }. Pasang
// listener "keydown" di document di dalam useEffect: saat tombol Escape
// ditekan, panggil onEsc. Render <p>Tekan Esc untuk menutup</p>. Cleanup
// wajib melepas listener, dan efek harus memakai onEsc TERBARU (kalau prop
// onEsc berganti, yang dipanggil adalah fungsi yang baru, bukan yang lama).
// Lihat SOAL.md untuk kontrak lengkap.
import { useEffect } from "react"

export function TekanEsc(props: { onEsc: () => void }) {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        props.onEsc()
      }
    }

    document.addEventListener("keydown", handleKeydown)
    return () => document.removeEventListener("keydown", handleKeydown)
  }, [props.onEsc])

  return <p>Tekan Esc untuk menutup</p>
}
