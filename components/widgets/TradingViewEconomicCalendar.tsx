import { useEffect, useRef } from "react";

interface TradingViewEconomicCalendarProps {
  height?: number;
}

const TradingViewEconomicCalendar = ({ height = 400 }: TradingViewEconomicCalendarProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current || !containerRef.current) return;
    scriptLoaded.current = true;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "light",
      isTransparent: false,
      width: "100%",
      height: height,
      locale: "en",
      importanceFilter: "-1,0,1",
      countryFilter: "ke,us,gb,eu,cn,jp,za,ng",
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

export default TradingViewEconomicCalendar;
