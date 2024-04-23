import { useMarketContext } from "../contexts/marketContext"
import CurrencyTable from "../entities/CurrencyTable";

export default function Home() {
  const { start, stop } = useMarketContext();

  return (
    <div>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <CurrencyTable />
    </div>
  )
}
