# frontend-nrp

Repo tugas mata kuliah **Frontend**, dibuat dari template [`webdev-if-its/frontend-template`](https://github.com/webdev-if-its/frontend-template). Ganti judul di atas jadi nama repo kalian sendiri (`frontend-nrp`, contoh: `frontend-5025201012`).

## Aturan Umum

- Tugas tiap pertemuan disimpan di folder `pertemuan-XX/` pada repo ini — masing-masing adalah project Vite + React + TypeScript sendiri (`npm install` terpisah per folder).
- Commit message wajib menyebut level yang dicapai: `pertemuan-XX: level N selesai`.
- Deadline push: sebelum pertemuan berikutnya dimulai.
- Semua level dicek otomatis lewat `npm run levels` (Vitest) — baca `pertemuan-XX/SOAL.md` tiap minggu untuk detail levelnya.

## Mengambil Pertemuan Baru Tiap Minggu

Repo ini **tidak otomatis sinkron** dengan template dosen. Begitu ada pertemuan baru, jalankan (ganti `pertemuan-02` sesuai minggu berjalan):

```bash
git fetch https://github.com/webdev-if-its/frontend-template.git main
git checkout FETCH_HEAD -- pertemuan-02
```

Perintah ini **aman dijalankan kapan pun** — tidak akan menimpa folder pertemuan lain yang sudah kalian kerjakan, karena hanya mengambil folder yang disebutkan. Setelah itu, `cd pertemuan-02 && npm install`, lalu commit folder barunya seperti biasa.

Kalau dosen memperbaiki sesuatu di pertemuan yang sudah dirilis (mis. ada bug di test), biasanya cukup ambil ulang file yang diperbaiki saja, bukan seluruh folder — akan diumumkan file mana yang berubah.

---

Bagian di bawah ini **isi bertahap** sesuai level yang sedang kalian kerjakan (lihat `pertemuan-XX/SOAL.md`) — heading-nya dicek otomatis, jangan diganti namanya.

## Struktur Project
`main.tsx` adalah entry point aplikasi, artinya ketika suatu project react dijalankan file pertama yang akan diakses adalah `main.tsx`. Sedangkan `App.tsx` adalah root component UI. 

## Identitas
- Nama: Azka Fauziyah Hanifah
- NRP: 5053241020
- Kelas: M (RPL)

## Commit vs Push
git commit adalah command untuk menyimpan perubahan yang kita lakukan ke local repository, sedangkan git push adalah command untuk upload file dari local repository ke remote repository, sehingga jika seseorang melakukan perubahan lalu commit tetapi lupa push, maka rekan 1 timnya tidak dapat melihat perubahan tersebut karena perubahan hanya tersimpan di lokal (komputer) orang tersebut.

## JSX vs TSX
JSX menggunakan JavaScript murni yang bertipe dinamis, sedangkan TSX adalah JSX dengan integrasi TypeScript yang menyediakan static type-checking. Project ini menggunakan TSX karena tipe data props terdeteksi secara otomatis.

## Kenapa Union Type untuk Status
Untuk membatasi agar status hanya pada pilihan yang valid, sehingga kesalahan typo atau status yang tidak valid bisa dideteksi sejak awal oleh typescript.

## Refleksi
HTML hanya berfokus pada tampilan UI sedangkan JSX menggabungkan UI dengan logika JavaScript seperti conditional rendering, props, dan data dinamis. 

## Refleksi Pertemuan 3
Conditional rendering berbeda dengan HTML biasa. Di dalam HTML kita menggunakan script javascript, sedangkan dalam  React ada yang bisa diletakkan di dalam JSX ada yang tidak bisa, serperti if-else condition.

## Refleksi Pertemuan 4
Perbedaan variabel dengan state adalah ketika valuenya berubah, state akan secara otomatis reload komponennya saja, sedangkan variabel harus reload satu halaman. e.target.value perlu diubah ke number sebelum dihitung karena dari input selalu bertipe string.