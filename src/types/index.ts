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

export type TCurrencyTableRow = {
  title: string;
  first: { selected: boolean, value: string };
  second: { selected: boolean, value: string };
  third: { selected: boolean, value: string };
};
