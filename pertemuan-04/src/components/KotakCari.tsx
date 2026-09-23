// TODO(Level 3): beri tipe props yang benar — { onCari: (kata: string) =>
// void }. Render sebuah <input> yang memanggil onCari(isi input saat ini)
// HANYA ketika tombol Enter ditekan (onKeyDown + e.key) — tombol lain tidak
// boleh memicu onCari.
// Lihat SOAL.md untuk kontrak lengkap.
type Props = {
  onCari: (kata: string) => void
}

export function KotakCari(props: Props) {
  return <input onKeyDown={(e) => {
    if (e.key === 'Enter') {
      props.onCari(e.currentTarget.value)
    }
  }} />
}
