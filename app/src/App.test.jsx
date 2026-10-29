import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test } from 'vitest'
import App from './App.jsx'

function buka(rute) {
  return render(
    <MemoryRouter initialEntries={[rute]}>
      <App />
    </MemoryRouter>,
  )
}

test('rute tidak dikenal menampilkan 404', async () => {
  buka('/tidak-ada')
  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
})

test('Beranda menampilkan judul tema', async () => {
  buka('/')
  expect(screen.getByRole('heading', { name: 'Rak Buku Pribadi' })).toBeInTheDocument()
})

test('Tambah menampilkan judul', async () => {
  buka('/tambah')
  expect(screen.getByRole('heading', { name: 'Tambah Buku' })).toBeInTheDocument()
})

test('Statistik menampilkan judul', async () => {
  buka('/statistik')
  expect(screen.getByRole('heading', { name: 'Statistik' })).toBeInTheDocument()
})

test('Tentang menampilkan nama', async () => {
  buka('/tentang')
  expect(screen.getByText('Farid Rizky Fauzan')).toBeInTheDocument()
})

test('Tentang menampilkan NIM', async () => {
  buka('/tentang')
  expect(screen.getByText('124140210')).toBeInTheDocument()
})