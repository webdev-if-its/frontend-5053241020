// TODO(Level 4): beri tipe props yang benar — { pesan: string; durasi:
// number }. Tampilkan pesan, lalu SEMBUNYIKAN (hilang dari DOM) setelah
// `durasi` milidetik memakai setTimeout di dalam useEffect. Kalau prop pesan
// berganti, pesan baru tampil lagi dan hitung mundurnya mulai dari awal
// (timer lama harus dibersihkan). Saat komponen dilepas, timer harus ikut
// dibersihkan.
// Lihat SOAL.md untuk kontrak lengkap.
import { useState, useEffect } from "react"

type Props = {
  pesan: string
  durasi: number
}

export function PesanSementara({ pesan, durasi }: Props) {
  const [tampilkan, setTampilkan] = useState(true)

  useEffect(() => {
    setTampilkan(true)
    const timer = setTimeout(() => {
      setTampilkan(false)
    }, durasi)

    return () => clearTimeout(timer)
  }, [pesan, durasi])

  return tampilkan ? <p>{pesan}</p> : null
}
