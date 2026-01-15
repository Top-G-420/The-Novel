import { TrendingUp, TrendingDown, ArrowUpRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ArticleCard, { Article } from "@/components/articles/ArticleCard";

const nseStocks = [
  { name: "Safaricom PLC", symbol: "SCOM", price: "14.50", change: "-0.68%", trend: "down", volume: "12.5M" },
  { name: "Equity Group", symbol: "EQTY", price: "38.25", change: "+2.10%", trend: "up", volume: "8.2M" },
  { name: "KCB Group", symbol: "KCB", price: "24.80", change: "+0.40%", trend: "up", volume: "5.1M" },
  { name: "Co-operative Bank", symbol: "COOP", price: "11.95", change: "-0.25%", trend: "down", volume: "3.8M" },
  { name: "EABL", symbol: "EABL", price: "142.00", change: "+1.05%", trend: "up", volume: "2.4M" },
  { name: "BAT Kenya", symbol: "BAT", price: "385.00", change: "-1.20%", trend: "down", volume: "1.8M" },
  { name: "ABSA Kenya", symbol: "ABSA", price: "12.45", change: "+0.81%", trend: "up", volume: "4.2M" },
  { name: "Stanbic Holdings", symbol: "SBIC", price: "95.50", change: "+0.53%", trend: "up", volume: "1.2M" },
];

const forexRates = [
  { pair: "USD/KES", bid: "129.35", ask: "129.55", change: "-0.32%", trend: "down" },
  { pair: "EUR/KES", bid: "141.10", ask: "141.30", change: "+0.15%", trend: "up" },
  { pair: "GBP/KES", bid: "164.75", ask: "164.95", change: "+0.45%", trend: "up" },
  { pair: "CNY/KES", bid: "17.78", ask: "17.86", change: "-0.18%", trend: "down" },
  { pair: "JPY/KES", bid: "0.87", ask: "0.88", change: "+0.11%", trend: "up" },
  { pair: "ZAR/KES", bid: "6.92", ask: "7.01", change: "-0.28%", trend: "down" },
];

const marketNews: Article[] = [
  {
    id: "m1",
    title: "NSE 20 Index Rallies on Strong Banking Sector Performance",
    excerpt: "The benchmark index gained 2.3% this week as financial stocks led the charge.",
    category: "Markets",
    author: { name: "David Kamau" },
    publishedAt: "1 hour ago",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
  },
  {
    id: "m2",
    title: "Kenya Shilling Stabilizes Against Major Currencies",
    excerpt: "CBK interventions and improved dollar inflows boost local currency.",
    category: "Markets",
    author: { name: "Sarah Kimani" },
    publishedAt: "3 hours ago",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=80",
    isPremium: true,
  },
];

const Markets = () => {
  return (
    <Layout>
      <div className="container py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Markets
            </h1>
          </div>
          <p className="text-muted-foreground ml-4">
            Real-time data, analysis, and insights from NSE, forex, and global markets
          </p>
        </div>

        {/* Market Summary Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">NSE 20</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,842.35</div>
              <div className="flex items-center gap-1 text-market-up text-sm">
                <TrendingUp className="w-4 h-4" />
                +1.24%
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">NSE All Share</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">112.45</div>
              <div className="flex items-center gap-1 text-market-up text-sm">
                <TrendingUp className="w-4 h-4" />
                +0.86%
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">USD/KES</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">129.45</div>
              <div className="flex items-center gap-1 text-market-down text-sm">
                <TrendingDown className="w-4 h-4" />
                -0.32%
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Market Cap</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.72T</div>
              <div className="text-sm text-muted-foreground">KES</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for Stocks and Forex */}
        <Tabs defaultValue="stocks" className="mb-12">
          <TabsList className="mb-6">
            <TabsTrigger value="stocks">Stocks (NSE)</TabsTrigger>
            <TabsTrigger value="forex">Forex</TabsTrigger>
            <TabsTrigger value="crypto">Crypto</TabsTrigger>
          </TabsList>

          <TabsContent value="stocks">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  NSE Listed Stocks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Company</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Symbol</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Price (KES)</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Change</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground hidden sm:table-cell">Volume</th>
                      </tr>
                    </thead>
                    <tbody>
                      {nseStocks.map((stock) => (
                        <tr key={stock.symbol} className="border-b border-border hover:bg-secondary/50 transition-colors">
                          <td className="py-3 px-4 font-medium">{stock.name}</td>
                          <td className="py-3 px-4 text-muted-foreground">{stock.symbol}</td>
                          <td className="py-3 px-4 text-right font-medium">{stock.price}</td>
                          <td className={`py-3 px-4 text-right font-medium ${stock.trend === "up" ? "text-market-up" : "text-market-down"}`}>
                            <span className="flex items-center justify-end gap-1">
                              {stock.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                              {stock.change}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right text-muted-foreground hidden sm:table-cell">{stock.volume}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="forex">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-novel-gold rounded-full" />
                  Forex Rates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Currency Pair</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Bid</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Ask</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      {forexRates.map((rate) => (
                        <tr key={rate.pair} className="border-b border-border hover:bg-secondary/50 transition-colors">
                          <td className="py-3 px-4 font-medium">{rate.pair}</td>
                          <td className="py-3 px-4 text-right">{rate.bid}</td>
                          <td className="py-3 px-4 text-right">{rate.ask}</td>
                          <td className={`py-3 px-4 text-right font-medium ${rate.trend === "up" ? "text-market-up" : "text-market-down"}`}>
                            <span className="flex items-center justify-end gap-1">
                              {rate.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                              {rate.change}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="crypto">
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">Cryptocurrency market data coming soon.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Market News */}
        <div className="mb-8">
          <h2 className="font-serif text-2xl font-bold mb-6">Market News</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {marketNews.map((article) => (
              <ArticleCard key={article.id} article={article} variant="horizontal" />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Markets;
