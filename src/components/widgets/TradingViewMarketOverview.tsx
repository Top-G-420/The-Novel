import { useEffect, useRef } from "react";

interface TradingViewMarketOverviewProps {
  height?: number;
}

const TradingViewMarketOverview = ({ height = 450 }: TradingViewMarketOverviewProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current || !containerRef.current) return;
    scriptLoaded.current = true;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "light",
      dateRange: "12M",
      showChart: true,
      locale: "en",
      largeChartUrl: "",
      isTransparent: false,
      showSymbolLogo: true,
      showFloatingTooltip: false,
      width: "100%",
      height: height,
      plotLineColorGrowing: "rgba(41, 98, 255, 1)",
      plotLineColorFalling: "rgba(41, 98, 255, 1)",
      gridLineColor: "rgba(240, 243, 250, 0)",
      scaleFontColor: "rgba(106, 109, 120, 1)",
      belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
      belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
      symbolActiveColor: "rgba(41, 98, 255, 0.12)",
      tabs: [
        {
          title: "Indices",
          symbols: [
            { s: "FOREXCOM:SPXUSD", d: "S&P 500" },
            { s: "FOREXCOM:NSXUSD", d: "US 100" },
            { s: "FOREXCOM:DJI", d: "Dow 30" },
            { s: "INDEX:NKY", d: "Nikkei 225" },
            { s: "INDEX:DEU40", d: "DAX" },
            { s: "FOREXCOM:UKXGBP", d: "FTSE 100" },
          ],
          originalTitle: "Indices",
        },
        {
          title: "Forex",
          symbols: [
            { s: "FX_IDC:EURUSD", d: "EUR/USD" },
            { s: "FX_IDC:USDJPY", d: "USD/JPY" },
            { s: "FX_IDC:GBPUSD", d: "GBP/USD" },
            { s: "FX_IDC:USDCHF", d: "USD/CHF" },
            { s: "FX_IDC:AUDUSD", d: "AUD/USD" },
            { s: "FX_IDC:USDCAD", d: "USD/CAD" },
          ],
          originalTitle: "Forex",
        },
        {
          title: "Crypto",
          symbols: [
            { s: "BITSTAMP:BTCUSD", d: "Bitcoin" },
            { s: "BITSTAMP:ETHUSD", d: "Ethereum" },
            { s: "BINANCE:BNBUSDT", d: "BNB" },
            { s: "BINANCE:XRPUSDT", d: "XRP" },
            { s: "BINANCE:SOLUSDT", d: "Solana" },
            { s: "BINANCE:ADAUSDT", d: "Cardano" },
          ],
          originalTitle: "Crypto",
        },
        {
          title: "Commodities",
          symbols: [
            { s: "COMEX:GC1!", d: "Gold" },
            { s: "COMEX:SI1!", d: "Silver" },
            { s: "NYMEX:CL1!", d: "Crude Oil" },
            { s: "NYMEX:NG1!", d: "Natural Gas" },
            { s: "CBOT:ZC1!", d: "Corn" },
            { s: "TVC:USOIL", d: "WTI Crude" },
          ],
          originalTitle: "Commodities",
        },
      ],
    });

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
      scriptLoaded.current = false;
    };
  }, [height]);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TradingViewMarketOverview;
