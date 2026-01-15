import { TrendingUp, TrendingDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stocksData = [
  { name: "Safaricom", symbol: "SCOM", price: "14.50", change: "-0.68%", trend: "down" },
  { name: "Equity Group", symbol: "EQTY", price: "38.25", change: "+2.10%", trend: "up" },
  { name: "KCB Group", symbol: "KCB", price: "24.80", change: "+0.40%", trend: "up" },
  { name: "Co-op Bank", symbol: "COOP", price: "11.95", change: "-0.25%", trend: "down" },
  { name: "EABL", symbol: "EABL", price: "142.00", change: "+1.05%", trend: "up" },
];

const currencyData = [
  { pair: "USD/KES", rate: "129.45", change: "-0.32%", trend: "down" },
  { pair: "EUR/KES", rate: "141.20", change: "+0.15%", trend: "up" },
  { pair: "GBP/KES", rate: "164.85", change: "+0.45%", trend: "up" },
  { pair: "CNY/KES", rate: "17.82", change: "-0.18%", trend: "down" },
];

const MarketSnapshot = () => {
  return (
    <section className="bg-secondary py-12">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              Market Snapshot
            </h2>
            <p className="text-muted-foreground mt-1">
              Real-time data from NSE and forex markets
            </p>
          </div>
          <Button variant="ghost" asChild className="hidden sm:flex items-center gap-2 text-accent hover:text-accent/80">
            <Link to="/markets">
              Full Markets
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Stocks */}
          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                NSE Top Movers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {stocksData.map((stock) => (
                  <div
                    key={stock.symbol}
                    className="flex items-center justify-between py-2 border-b border-border last:border-0"
                  >
                    <div>
                      <p className="font-medium text-foreground">{stock.name}</p>
                      <p className="text-xs text-muted-foreground">{stock.symbol}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-foreground">KES {stock.price}</p>
                      <p
                        className={`text-sm flex items-center justify-end gap-1 ${
                          stock.trend === "up" ? "text-market-up" : "text-market-down"
                        }`}
                      >
                        {stock.trend === "up" ? (
                          <TrendingUp className="w-3 h-3" />
                        ) : (
                          <TrendingDown className="w-3 h-3" />
                        )}
                        {stock.change}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Currencies */}
          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-novel-gold rounded-full" />
                Forex Rates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {currencyData.map((currency) => (
                  <div
                    key={currency.pair}
                    className="flex items-center justify-between py-2 border-b border-border last:border-0"
                  >
                    <div>
                      <p className="font-medium text-foreground">{currency.pair}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-foreground">{currency.rate}</p>
                      <p
                        className={`text-sm flex items-center justify-end gap-1 ${
                          currency.trend === "up" ? "text-market-up" : "text-market-down"
                        }`}
                      >
                        {currency.trend === "up" ? (
                          <TrendingUp className="w-3 h-3" />
                        ) : (
                          <TrendingDown className="w-3 h-3" />
                        )}
                        {currency.change}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Button variant="outline" className="w-full" asChild>
            <Link to="/markets">View All Markets</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketSnapshot;
