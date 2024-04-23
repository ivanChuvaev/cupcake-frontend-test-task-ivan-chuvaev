import { TMarketState } from "../types";

class MarkerService {
  constructor() {}

  async getFirstMarketState() {
    return fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/api/v1/first`)
    .then((res) => res.json() as unknown as TMarketState)
  }

  async getSecondMarketState() {
    return fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/api/v1/second`)
    .then((res) => res.json() as unknown as TMarketState)
  }

  async getThirdMarketState() {
    return fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/api/v1/third`)
    .then((res) => res.json() as unknown as TMarketState)
  }

  async pollFirstMarketState(signal?: AbortSignal) {
    return fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/api/v1/first/poll`, { signal })
    .then((res) => res.json() as unknown as TMarketState)
  }

  async pollSecondMarketState(signal?: AbortSignal) {
    return fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/api/v1/second/poll`, { signal })
    .then((res) => res.json() as unknown as TMarketState)
  }

  async pollThirdMarketState(signal?: AbortSignal) {
    return fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/api/v1/third/poll`, { signal })
    .then((res) => res.json() as unknown as TMarketState)
  }
}

const marketService = new MarkerService();
 
export default marketService;
