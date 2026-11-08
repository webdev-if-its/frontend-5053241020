// TODO(Level 10): komponen TANPA props. Form dengan input berlabel "Nama"
// dan tombol submit "Masuk". Saat submit: cegah reload; kalau nama (setelah
// trim) tidak kosong, panggil login(nama) dari useAuth() lalu pindah ke
// "/dashboard" lewat useNavigate; kalau kosong, jangan lakukan apa-apa.
// Lihat SOAL.md untuk kontrak lengkap.
import { useState } from "react"
import type { FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../auth"

export function HalamanLogin() {
  const [nama, setNama] = useState("")
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!nama.trim()) return
    login(nama.trim())
    navigate("/dashboard")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nama
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
      </label>
      <button type="submit">Masuk</button>
    </form>
  )
}

export default HalamanLogin