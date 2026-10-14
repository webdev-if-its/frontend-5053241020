// TODO(Level 10): beri tipe props yang benar — { detikAwal: number }.
// Gabungkan semua materi pertemuan ini jadi timer belajar:
// - teks "Sisa: {n} detik" (mulai dari detikAwal), tombol "Mulai"/"Jeda"
//   (bergantian) dan tombol "Reset",
// - saat berjalan, sisa berkurang tiap detik; "Jeda" menghentikan timer
//   (tidak ada timer tersisa); "Reset" mengembalikan sisa ke detikAwal
//   dan berhenti,
// - saat sisa = 0: tampil teks "Selesai!", timer berhenti otomatis, dan
//   tombol "Mulai" dinonaktifkan (disabled),
// - judul tab (document.title) selalu "Sisa: {n} detik" selama komponen
//   terpasang, dan KEMBALI ke judul semula saat komponen dilepas
//   (cleanup).
// Lihat SOAL.md untuk kontrak lengkap.
import { useState, useEffect } from "react"

type Props = {
  detikAwal: number
}

export function TimerBelajar({ detikAwal }: Props) {
  const [sisa, setSisa] = useState(detikAwal)
  const [berjalan, setBerjalan] = useState(false)

  // Simpan judul tab sebelumnya dan pulihkan saat komponen dilepas.
  useEffect(() => {
    const judulSebelumnya = document.title

    return () => {
      document.title = judulSebelumnya
    }
  }, [])

  // Perbarui judul tab setiap kali sisa waktu berubah.
  useEffect(() => {
    document.title = `Sisa: ${sisa} detik`
  }, [sisa])

  // Pasang interval hanya saat timer berjalan.
  useEffect(() => {
    if (!berjalan || sisa <= 0) {
      return
    }

    const intervalId = setInterval(() => {
      setSisa((sebelumnya) => Math.max(0, sebelumnya - 1))
    }, 1000)

    // Hentikan interval saat jeda, selesai, atau komponen dilepas.
    return () => {
      clearInterval(intervalId)
    }
  }, [berjalan, sisa])

  // Hentikan timer otomatis ketika waktu habis.
  useEffect(() => {
    if (sisa === 0) {
      setBerjalan(false)
    }
  }, [sisa])

  function handleReset() {
    setBerjalan(false)
    setSisa(detikAwal)
  }

  return (
    <div>
      <p>Sisa: {sisa} detik</p>

      {sisa === 0 && <p>Selesai!</p>}

      <button
        onClick={() => setBerjalan((sebelumnya) => !sebelumnya)}
        disabled={sisa === 0}
      >
        {berjalan ? "Jeda" : "Mulai"}
      </button>

      <button onClick={handleReset}>
        Reset
      </button>
    </div>
  )
}
