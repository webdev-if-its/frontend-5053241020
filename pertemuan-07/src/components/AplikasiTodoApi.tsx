// TODO(Level 8-10): komponen TANPA props — aplikasi todo yang tersambung ke
// API lewat fungsi di '../api/todos' (JANGAN memanggil fetch() langsung di
// sini):
// - saat pertama tampil: ambil daftar (getTodos) dan tampilkan sebagai <li>,
//   tiap <li> berisi checkbox berlabel title + tombol "Hapus",
// - form dengan input berlabel "Todo baru" + tombol "Tambah": panggil
//   addTodo(title), lalu tambahkan todo HASIL RESPONS ke akhir daftar dan
//   kosongkan input,
// - klik checkbox: panggil updateTodo(id, !completed), lalu ganti todo itu di
//   state dengan HASIL RESPONS,
// - klik "Hapus": panggil hapusTodo(id), lalu buang todo itu dari state.
// Lihat SOAL.md untuk kontrak lengkap.
import { useEffect, useState } from "react"
import type { FormEvent } from "react"
import { getTodos, addTodo, updateTodo, hapusTodo } from "../api/todos"
import type { Todo } from "../types"

export function AplikasiTodoApi() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [judul, setJudul] = useState("")

  useEffect(() => {
    getTodos()
      .then(setTodos)
  }, [])

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!judul.trim()) return
    const newTodo = await addTodo(judul)
    setTodos((prev) => [...prev, newTodo])
    setJudul("")
  }

  const handleToggleTodo = async (id: number) => {
    const todo = todos.find((t) => t.id === id)
    if (!todo) return
    const updatedTodo = await updateTodo(id, !todo.completed)
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? updatedTodo : t))
    )
  }

  const handleDeleteTodo = async (id: number) => {
    await hapusTodo(id)
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label>
          Todo baru:
          <input
            type="text"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
          />
        </label>
        <button type="submit">Tambah</button>
      </form>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <label>
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => handleToggleTodo(t.id)}
              />
              {t.title}
            </label>
            <button onClick={() => handleDeleteTodo(t.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AplikasiTodoApi