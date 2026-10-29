import '../pages/Statistik.css'

export default function TabelStatistik({ baris, total }) {
  return (
    <div className="tabel-gulir">
      <table className="tabel-data">
        <thead>
          <tr>
            <th>Kategori</th>
            <th>Jumlah</th>
          </tr>
        </thead>
        <tbody>
          {baris.map(([kategori, jumlah]) => (
            <tr key={kategori}>
              <td>{kategori}</td>
              <td>{jumlah}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <td>{total}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}