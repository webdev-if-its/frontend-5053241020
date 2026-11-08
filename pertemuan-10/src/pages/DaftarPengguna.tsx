// TODO(Level 7-8): komponen TANPA props. Render <h2>Daftar Pengguna</h2> dan
// <ul> berisi satu <li> per pengguna di `daftarPengguna` (dari '../data');
// tiap <li> memuat <Link> bertuliskan nama pengguna yang menuju
// "/dashboard/pengguna/{id}" (Level 8).
import { daftarPengguna } from '../data'
import { Link } from 'react-router-dom'

export function DaftarPengguna() {
  return (
    <div>
      <h2>Daftar Pengguna</h2>
      <ul>
        {daftarPengguna.map((p) => (
          <li key={p.id}>
            <Link to={`/dashboard/pengguna/${p.id}`}>{p.nama}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DaftarPengguna
