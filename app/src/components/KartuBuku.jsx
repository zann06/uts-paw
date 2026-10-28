import { Link } from 'react-router-dom'

export default function KartuBuku({ buku }) {
  const { id, judul, kategori, penulis } = buku
  return (
    <article className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p>
        {kategori} oleh {penulis}
      </p>
    </article>
  )
}