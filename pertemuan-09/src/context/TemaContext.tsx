// TODO(Level 7-8): buat Context untuk tema aplikasi (tipe Tema ada di
// '../types'):
// - TemaProvider({ children }): menyimpan tema di useState<Tema> (awal:
//   'terang') dan menyediakan { tema, gantiTema } lewat Context Provider.
//   gantiTema() membalik 'terang' <-> 'gelap'.
// - useTema(): custom hook pembungkus useContext yang mengembalikan
//   { tema, gantiTema }, dan MELEMPAR Error yang pesannya menyebut
//   "TemaProvider" kalau dipakai di luar TemaProvider.
// Beri tipe yang tepat — lihat SOAL.md untuk tanda tangan lengkapnya.
import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { Tema } from '../types'

type TemaContextType = { tema: Tema; gantiTema: () => void }

const TemaContext = createContext<TemaContextType | null>(null)

export function TemaProvider({ children }: { children: ReactNode }) {
  const [tema, setTema] = useState<Tema>('terang')

  const gantiTema = () => {
    setTema((prev) => (prev === 'terang' ? 'gelap' : 'terang'))
  }

  return (
    <TemaContext.Provider value={{ tema, gantiTema }}>
      {children}
    </TemaContext.Provider>
  )
}

export function useTema() {
  const ctx = useContext(TemaContext)
  if (!ctx) {
    throw new Error('useTema harus dipakai di dalam <TemaProvider>')
  }
  return ctx
}
