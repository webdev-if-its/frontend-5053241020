// TODO(Level 3): komponen TANPA props. Tampilkan teks "Detik: {n}" yang
// bertambah 1 setiap 1 detik (mulai dari 0), memakai setInterval di dalam
// useEffect. Wajib: (a) pakai functional update setN((d) => d + 1), (b) ada
// cleanup (clearInterval) supaya timer tidak menumpuk — termasuk saat
// komponen dilepas (unmount).
// Lihat SOAL.md untuk kontrak lengkap.
import { useState, useEffect } from "react"

export function Detik() {
  const [n, setN] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setN((d) => d + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return <p>Detik: {n}</p>
}
