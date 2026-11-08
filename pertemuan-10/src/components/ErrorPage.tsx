// TODO(Level 9): komponen TANPA props untuk errorElement. Ambil error lewat
// useRouteError (dari 'react-router-dom'):
// - kalau isRouteErrorResponse(error) dan status 404: render
//   <h1>404 — Halaman tidak ditemukan</h1>,
// - selain itu: render <h1>Terjadi kesalahan</h1>.
// Sertakan juga <Link to="/">Kembali ke beranda</Link>.
// Lihat SOAL.md untuk kontrak lengkap.
import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom'

export function ErrorPage() {
  const error = useRouteError()

  return (
    <div>
      {isRouteErrorResponse(error) && error.status === 404 ? (
        <h1>404 — Halaman tidak ditemukan</h1>
      ) : (
        <h1>Terjadi kesalahan</h1>
      )}
      <Link to="/">Kembali ke beranda</Link>
    </div>
  )
}

export default ErrorPage
