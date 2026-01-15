import Layout from "@/components/layout/Layout";
import ArticleCard, { Article } from "@/components/articles/ArticleCard";
import TradingViewChart from "@/components/widgets/TradingViewChart";
import TradingViewTechnicalAnalysis from "@/components/widgets/TradingViewTechnicalAnalysis";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

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

const stockNews: Article[] = [
  {
    id: "st1",
    title: "Safaricom Announces Record Dividend Payout",
    excerpt: "The telecom giant rewards shareholders with highest dividend in company history.",
    category: "Stocks",
    author: { name: "David Kamau" },
    publishedAt: "2 hours ago",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
  },
  {
    id: "st2",
    title: "Banking Stocks Lead NSE Rally",
    excerpt: "Financial sector stocks post strong gains on positive earnings outlook.",
    category: "Stocks",
    author: { name: "Sarah Kimani" },
    publishedAt: "4 hours ago",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&q=80",
    isPremium: true,
  },
];

const Stocks = () => {
  return (
    <Layout>
      <div className="container py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Stocks
            </h1>
          </div>
          <p className="text-muted-foreground ml-4">
            NSE listed stocks, analysis, and market data
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
              <CardTitle className="text-sm font-medium text-muted-foreground">Market Cap</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.72T</div>
              <div className="text-sm text-muted-foreground">KES</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Daily Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45.2M</div>
              <div className="text-sm text-muted-foreground">Shares</div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                Market Chart
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewChart symbol="NASDAQ:AAPL" height={350} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="w-2 h-2 bg-novel-gold rounded-full" />
                Technical Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewTechnicalAnalysis symbol="NASDAQ:AAPL" height={350} />
            </CardContent>
          </Card>
        </div>

        {/* Stock Table */}
        <Card className="mb-8">
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

        {/* Stock News */}
        <h2 className="font-serif text-2xl font-bold mb-6">Stock News</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {stockNews.map((article) => (
            <ArticleCard key={article.id} article={article} variant="horizontal" />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Stocks;
