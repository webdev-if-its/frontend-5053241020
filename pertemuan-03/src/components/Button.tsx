// TODO(Level 7): beri tipe props yang benar — { variant: 'primary' |
// 'secondary' | 'danger'; children: ReactNode; onClick?: () => void }.
// Render sebuah <button> yang:
// - memuat children di dalamnya,
// - memanggil onClick saat diklik (kalau diberikan),
// - className-nya BERBEDA untuk tiap nilai variant (pakai Tailwind, mis.
//   warna latar berbeda per variant) — ini komponen REUSABLE: satu
//   komponen, tiga tampilan, diatur lewat props.
// Lihat SOAL.md untuk kontrak lengkap.
type Button = {
  variant: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
  onClick?: () => void;
};

export function Button({ variant, children, onClick }: Button) {
  let className = "";

  switch (variant) {
    case 'primary':
      className = "bg-green-500 text-black";
      break;
    case 'secondary':
      className = "bg-pink-500 text-black";
      break;
    case 'danger':
      className = "bg-red-500 text-white";
      break;
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
