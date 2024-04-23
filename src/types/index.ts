export type TMarketRates = {
  RUB: number
  USD: number
  EUR: number
}

export type TMarketState = {
  rates: TMarketRates
  base: string
  timestamp: number
  date: string
}
