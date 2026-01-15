import Layout from "@/components/layout/Layout";
import ArticleCard, { Article } from "@/components/articles/ArticleCard";
import TradingViewChart from "@/components/widgets/TradingViewChart";
import TradingViewForexCrossRates from "@/components/widgets/TradingViewForexCrossRates";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

const forexRates = [
  { pair: "USD/KES", bid: "129.35", ask: "129.55", change: "-0.32%", trend: "down" },
  { pair: "EUR/KES", bid: "141.10", ask: "141.30", change: "+0.15%", trend: "up" },
  { pair: "GBP/KES", bid: "164.75", ask: "164.95", change: "+0.45%", trend: "up" },
  { pair: "CNY/KES", bid: "17.78", ask: "17.86", change: "-0.18%", trend: "down" },
  { pair: "JPY/KES", bid: "0.87", ask: "0.88", change: "+0.11%", trend: "up" },
  { pair: "ZAR/KES", bid: "6.92", ask: "7.01", change: "-0.28%", trend: "down" },
  { pair: "AED/KES", bid: "35.22", ask: "35.30", change: "+0.05%", trend: "up" },
  { pair: "INR/KES", bid: "1.54", ask: "1.55", change: "-0.12%", trend: "down" },
];

const forexNews: Article[] = [
  {
    id: "fx1",
    title: "Kenya Shilling Stabilizes Against Dollar",
    excerpt: "CBK interventions and improved dollar inflows boost local currency.",
    category: "Forex",
    author: { name: "Sarah Kimani" },
    publishedAt: "1 hour ago",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=600&q=80",
    isPremium: true,
  },
  {
    id: "fx2",
    title: "Euro Gains Against Major Currencies",
    excerpt: "European economic data supports currency strength.",
    category: "Forex",
    author: { name: "David Kamau" },
    publishedAt: "3 hours ago",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=80",
  },
];

const Currencies = () => {
  return (
    <Layout>
      <div className="container py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Currencies / Forex
            </h1>
          </div>
          <p className="text-muted-foreground ml-4">
            Foreign exchange rates, currency analysis, and forex news
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
              <CardTitle className="text-sm font-medium text-muted-foreground">EUR/KES</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">141.20</div>
              <div className="flex items-center gap-1 text-market-up text-sm">
                <TrendingUp className="w-4 h-4" />
                +0.15%
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">GBP/KES</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">164.85</div>
              <div className="flex items-center gap-1 text-market-up text-sm">
                <TrendingUp className="w-4 h-4" />
                +0.45%
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">CBK Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">10.50%</div>
              <div className="text-sm text-muted-foreground">Benchmark</div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                EUR/USD Chart
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewChart symbol="FX_IDC:EURUSD" height={350} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="w-2 h-2 bg-novel-gold rounded-full" />
                Currency Cross Rates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewForexCrossRates height={350} />
            </CardContent>
          </Card>
        </div>

        {/* Forex Rates Table */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="w-2 h-2 bg-novel-gold rounded-full" />
              Kenya Forex Rates
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

        {/* Forex News */}
        <h2 className="font-serif text-2xl font-bold mb-6">Forex News</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {forexNews.map((article) => (
            <ArticleCard key={article.id} article={article} variant="horizontal" />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Currencies;
