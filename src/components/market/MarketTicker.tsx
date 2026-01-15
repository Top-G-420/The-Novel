import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const marketData = [
  { symbol: "NSE 20", value: "1,842.35", change: "+1.24%", trend: "up" },
  { symbol: "USD/KES", value: "129.45", change: "-0.32%", trend: "down" },
  { symbol: "EUR/KES", value: "141.20", change: "+0.15%", trend: "up" },
  { symbol: "GBP/KES", value: "164.85", change: "+0.45%", trend: "up" },
  { symbol: "Safaricom", value: "14.50", change: "-0.68%", trend: "down" },
  { symbol: "Equity", value: "38.25", change: "+2.10%", trend: "up" },
  { symbol: "KCB", value: "24.80", change: "+0.00%", trend: "neutral" },
  { symbol: "EABL", value: "142.00", change: "-1.05%", trend: "down" },
];

const MarketTicker = () => {
  return (
    <div className="bg-secondary border-y border-border overflow-hidden">
      <div className="flex animate-slide-left">
        {[...marketData, ...marketData].map((item, index) => (
          <div
            key={`${item.symbol}-${index}`}
            className="flex items-center gap-3 px-6 py-2.5 border-r border-border shrink-0"
          >
            <span className="font-medium text-sm text-foreground">{item.symbol}</span>
            <span className="text-sm text-foreground/80">{item.value}</span>
            <span
              className={`flex items-center gap-1 text-sm font-medium ${
                item.trend === "up"
                  ? "text-market-up"
                  : item.trend === "down"
                  ? "text-market-down"
                  : "text-market-neutral"
              }`}
            >
              {item.trend === "up" ? (
                <TrendingUp className="w-3 h-3" />
              ) : item.trend === "down" ? (
                <TrendingDown className="w-3 h-3" />
              ) : (
                <Minus className="w-3 h-3" />
              )}
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketTicker;
