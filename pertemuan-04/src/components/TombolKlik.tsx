// TODO(Level 1): beri tipe props yang benar — { onKlik: (e:
// React.MouseEvent<HTMLButtonElement>) => void }. Render sebuah <button>
// bertuliskan "Klik Saya" yang, SAAT DIKLIK (bukan saat render), memanggil
// onKlik dengan event klik-nya.
// Lihat SOAL.md untuk kontrak lengkap.
type Props = {
  onKlik: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export function TombolKlik(props: Props) {
  return <button onClick={props.onKlik}>Klik Saya</button>
}
