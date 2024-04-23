import { useMarketContext } from "../contexts/marketContext"
import CurrencyTable from "../entities/CurrencyTable";
import UI from "../ui";
import './Home.scss';

export default function Home() {
  const { start, stop } = useMarketContext();

  return (
    <div className="Home">
      <CurrencyTable />
      <div className="Home__buttons">
        <UI.Button onClick={start}>start</UI.Button>
        <UI.Button onClick={stop}>stop</UI.Button>
      </div>
    </div>
  )
}
