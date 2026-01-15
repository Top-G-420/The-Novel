import { useEffect, useRef } from "react";

interface TradingViewChartProps {
  symbol?: string;
  height?: number;
}

const TradingViewChart = ({ symbol = "NASDAQ:AAPL", height = 400 }: TradingViewChartProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current || !containerRef.current) return;
    scriptLoaded.current = true;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: symbol,
      interval: "D",
      timezone: "Africa/Nairobi",
      theme: "light",
      style: "1",
      locale: "en",
      enable_publishing: false,
      allow_symbol_change: true,
      calendar: false,
      support_host: "https://www.tradingview.com",
    });

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
      scriptLoaded.current = false;
    };
  }, [symbol]);

  return (
    <div className="tradingview-widget-container" ref={containerRef} style={{ height }}>
      <div className="tradingview-widget-container__widget" style={{ height: "100%", width: "100%" }}></div>
    </div>
  );
};

export default TradingViewChart;
