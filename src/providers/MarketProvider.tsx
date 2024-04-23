import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { TMarketState } from '../types';
import { marketContext } from '../contexts/marketContext';
import marketService from '../services/marketService';

type TMarketProviderProps = {
  children?: ReactNode;
  minDelay?: number;
};

export default function MarketProvider({
  children,
  minDelay = 1000,
}: TMarketProviderProps) {
  const [first, setFirst] = useState<TMarketState | null>(null);
  const [second, setSecond] = useState<TMarketState | null>(null);
  const [third, setThird] = useState<TMarketState | null>(null);

  const [isPolling, setIsPolling] = useState(false);

  const controllerRef = useRef(new AbortController());
  const minDelayRef = useRef(minDelay); // latest ref pattern

  const poll = useCallback(
    (
      api: (signal?: AbortSignal) => Promise<TMarketState>,
      setState: Dispatch<SetStateAction<TMarketState | null>>
    ) => {
      const startDate = new Date();
      const signalCopy = controllerRef.current.signal;
      api(signalCopy)
        .then(setState)
        .catch(console.log)
        .finally(() => {
          setTimeout(() => {
            if (!signalCopy.aborted) {
              poll(api, setState);
            }
          }, Math.max(0, minDelayRef.current - (new Date().getTime() - startDate.getTime())));
        });
    },
    []
  );

  const init = useCallback(() => {
    marketService.getFirstMarketState().then(setFirst);
    marketService.getSecondMarketState().then(setSecond);
    marketService.getThirdMarketState().then(setThird);
  }, []);

  const start = useCallback(() => {
    setIsPolling(true);
    poll(marketService.pollFirstMarketState, setFirst);
    poll(marketService.pollSecondMarketState, setSecond);
    poll(marketService.pollThirdMarketState, setThird);
  }, []);

  const stop = useCallback(() => {
    setIsPolling(false);
    controllerRef.current.abort();
    controllerRef.current = new AbortController();
  }, []);

  useEffect(() => {
    init();
    start();
    return () => {
      stop();
    };
  }, []);

  useLayoutEffect(() => {
    minDelayRef.current = minDelay;
  }, [minDelay]);

  return (
    <marketContext.Provider value={{ isPolling, first, second, third, start, stop }}>
      {children}
    </marketContext.Provider>
  );
}
