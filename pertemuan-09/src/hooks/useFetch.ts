// TODO(Level 4-6): custom hook generic useFetch<T>(url: string) yang
// mengembalikan object { data, loading, error }:
// - data: T | null (null sampai fetch selesai),
// - loading: boolean (true sejak awal, false setelah selesai — sukses
//   maupun gagal),
// - error: string | null (pesan error; null kalau tidak ada).
// Pakai useState + useEffect dengan [url] sebagai dependency: kalau url
// berubah, ambil ulang (state di-reset dulu). Kalau res.ok false, isi error
// dengan pesan yang memuat kata "gagal"; kalau fetch ditolak, isi error
// dengan err.message. Lihat SOAL.md untuk tanda tangan lengkapnya.
import { useState, useEffect } from 'react'

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json: T) => {
        setData(json)
        setLoading(false)
      })
  }, [])

  return { data, loading, error}
}
