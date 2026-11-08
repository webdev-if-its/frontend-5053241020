// TODO(Level 3): komponen TANPA props. Render <form> berisi input berlabel
// "Nama", tombol submit "Masuk", dan tombol (type="button") "Kembali".
// - submit: cegah reload, lalu pindah ke "/dashboard" lewat useNavigate,
// - "Kembali": kembali satu langkah di history (navigate(-1)).
// Lihat SOAL.md untuk kontrak lengkap.
import { useNavigate } from 'react-router-dom'

export function FormMasuk() {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nama">Nama:</label>
      <input type="text" id="nama" name="nama" required />
      <button type="submit">Masuk</button>
      <button type="button" onClick={() => navigate(-1)}>
        Kembali
      </button>
    </form>
  )
}
