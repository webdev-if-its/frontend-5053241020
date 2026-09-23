// TODO(Level 4): beri tipe props yang benar — { onLogin: (email: string) =>
// void }. Render <form> berisi input berlabel "Email" dan tombol submit
// "Masuk". Saat form dikirim: cegah reload halaman (e.preventDefault()),
// lalu panggil onLogin dengan isi email.
// Lihat SOAL.md untuk kontrak lengkap.
type Props = {
  onLogin: (email: string) => void
}

export function FormLogin(props: Props) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const email = new FormData(e.currentTarget).get('email') as string;
      props.onLogin(email);
    }}>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <button type="submit">Masuk</button>
    </form>
  );
}
