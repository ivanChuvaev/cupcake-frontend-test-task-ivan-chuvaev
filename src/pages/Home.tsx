import { useMarketContext } from "../contexts/marketContext"
import CurrencyTable from "../entities/CurrencyTable";
import UI from "../ui";
import './Home.scss';

export default function Home() {
  const { start, stop, isPolling } = useMarketContext();

  return (
    <div className="Home">
      <CurrencyTable />
      <UI.Button className="Home__polling-state-button" onClick={isPolling ? stop : start}>
        {isPolling ? 'Stop' : 'Start'}
      </UI.Button>
    </div>
  )
}
