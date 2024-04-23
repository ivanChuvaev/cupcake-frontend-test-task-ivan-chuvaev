import Router from "./Router"
import MarketProvider from "./providers/MarketProvider"

function App() {
  return (
    <MarketProvider minDelay={1000}>
      <Router />
    </MarketProvider>
  )
}

export default App
