import { useMarketContext } from "../contexts/marketContext"
import './CurrencyTable.scss';

export default function CurrencyTable() {
  const { first, second, third } = useMarketContext();
  return (
    <table className="CurrencyTable">
      <thead>
        <tr>
          <th>Pair name/market</th>
          <th>First</th>
          <th>Second</th>
          <th>Third</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>RUB/CUPCAKE</td>
          <td>{first?.rates.RUB.toFixed(2) ?? '-'}</td>
          <td>{second?.rates.RUB.toFixed(2) ?? '-'}</td>
          <td>{third?.rates.RUB.toFixed(2) ?? '-'}</td>
        </tr>
        <tr>
          <td>USD/CUPCAKE</td>
          <td>{first?.rates.USD.toFixed(2) ?? '-'}</td>
          <td>{second?.rates.USD.toFixed(2) ?? '-'}</td>
          <td>{third?.rates.USD.toFixed(2) ?? '-'}</td>
        </tr>
        <tr>
          <td>EUR/CUPCAKE</td>
          <td>{first?.rates.EUR.toFixed(2) ?? '-'}</td>
          <td>{second?.rates.EUR.toFixed(2) ?? '-'}</td>
          <td>{third?.rates.EUR.toFixed(2) ?? '-'}</td>
        </tr>
        <tr>
          <td>RUB/USD</td>
          <td>{first ? (first.rates.RUB / first.rates.USD).toFixed(2) : '-'}</td>
          <td>{second ? (second.rates.RUB / second.rates.USD).toFixed(2) : '-'}</td>
          <td>{third ? (third.rates.RUB / third.rates.USD).toFixed(2) : '-'}</td>
        </tr>
        <tr>
          <td>RUB/EUR</td>
          <td>{first ? (first.rates.RUB / first.rates.EUR).toFixed(2) : '-'}</td>
          <td>{second ? (second.rates.RUB / second.rates.EUR).toFixed(2) : '-'}</td>
          <td>{third ? (third.rates.RUB / third.rates.EUR).toFixed(2) : '-'}</td>
        </tr>
        <tr>
          <td>EUR/USD</td>
          <td>{first ? (first.rates.EUR / first.rates.USD).toFixed(2) : '-'}</td>
          <td>{second ? (second.rates.EUR / second.rates.USD).toFixed(2) : '-'}</td>
          <td>{third ? (third.rates.EUR / third.rates.USD).toFixed(2) : '-'}</td>
        </tr>
      </tbody>
    </table>
  )
}
