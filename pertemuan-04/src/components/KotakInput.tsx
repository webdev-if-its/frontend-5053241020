// TODO(Level 2): beri tipe props yang benar — { onUbah: (nilai: string) =>
// void }. Render sebuah <input> yang memanggil onUbah dengan nilai terbarunya
// TIAP KALI isinya berubah (tiap ketikan) — gunakan onChange dengan tipe event
// yang tepat.
// Lihat SOAL.md untuk kontrak lengkap.
type Props = {
  onUbah: (nilai: string) => void
}

export function KotakInput(props: Props) {
  return <input onChange={(e) => props.onUbah(e.target.value)} />
}
