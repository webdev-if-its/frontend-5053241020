// TODO(Level 4): komponen TANPA props. Ambil parameter :id dari URL lewat
// useParams (nilainya string — ubah ke number), cari produknya di
// `daftarProduk` (dari '../data'), lalu render:
// - kalau ketemu: teks "Produk #{id}" dan <h1>{nama produk}</h1>,
// - kalau tidak ketemu (id tidak ada / bukan angka): "Produk tidak ditemukan".
// Lihat SOAL.md untuk kontrak lengkap.
import { useParams } from 'react-router-dom'
import { daftarProduk } from '../data'

export function DetailProduk() {
  const { id } = useParams()
  const produk = daftarProduk.find((p) => p.id === Number(id))

  if (!produk) {
    return <p>Produk tidak ditemukan</p>
  }

  if (!produk) return <p>Produk tidak ditemukan</p>

  return (
    <div>
      <p>Produk #{id}</p>
      <h1>{produk.nama}</h1>
    </div>
  )
}
