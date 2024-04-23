import { useMarketContext } from '../contexts/marketContext';
import { TCurrencyTableRow } from '../types';
import './CurrencyTable.scss';

export default function CurrencyTable() {
  const { first, second, third } = useMarketContext();

  const rows: TCurrencyTableRow[] = [
    {
      title: 'RUB/CUPCAKE',
      first: first?.rates.RUB,
      second: second?.rates.RUB,
      third: third?.rates.RUB,
    },
    {
      title: 'USD/CUPCAKE',
      first: first?.rates.USD,
      second: second?.rates.USD,
      third: third?.rates.USD,
    },
    {
      title: 'EUR/CUPCAKE',
      first: first?.rates.EUR,
      second: second?.rates.EUR,
      third: third?.rates.EUR,
    },
    {
      title: 'RUB/USD',
      first: first ? first.rates.RUB / first.rates.USD : undefined,
      second: second ? second.rates.RUB / second.rates.USD : undefined,
      third: third ? third.rates.RUB / third.rates.USD : undefined,
    },
    {
      title: 'RUB/EUR',
      first: first ? first.rates.RUB / first.rates.EUR : undefined,
      second: second ? second.rates.RUB / second.rates.EUR : undefined,
      third: third ? third.rates.RUB / third.rates.EUR : undefined,
    },
    {
      title: 'EUR/USD',
      first: first ? first.rates.EUR / first.rates.USD : undefined,
      second: second ? second.rates.EUR / second.rates.USD : undefined,
      third: third ? third.rates.EUR / third.rates.USD : undefined,
    },
  ].map((row) => {
    const min = [row.first, row.second, row.third].reduce((min, value) =>
      value && min && value < min ? value : min
    );
    return {
      ...row,
      first: {
        selected: min !== undefined && min === row.first,
        value: row.first?.toFixed(2) ?? '-',
      },
      second: {
        selected: min !== undefined && min === row.second,
        value: row.second?.toFixed(2) ?? '-',
      },
      third: {
        selected: min !== undefined && min === row.third,
        value: row.third?.toFixed(2) ?? '-',
      },
    };
  });

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
        {rows.map((row) => (
          <tr key={row.title}>
            <td>{row.title}</td>
            <td data-selected={row.first.selected}>{row.first.value}</td>
            <td data-selected={row.second.selected}>{row.second.value}</td>
            <td data-selected={row.third.selected}>{row.third.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
