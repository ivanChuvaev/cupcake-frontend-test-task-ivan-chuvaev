import { createContext, useContext } from "react"
import { TMarketState } from "../types"

type TContext = {
  first: TMarketState | null
  second: TMarketState | null
  third: TMarketState | null
  start: () => void
  stop: () => void
}

export const marketContext = createContext<null | TContext>(null);

export const useMarketContext = () => {
  const context = useContext(marketContext);

  if (context === null) {
    throw new Error("useMarketContext must be within <marketContext.Provider>")
  }

  return context;
}
