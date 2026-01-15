import Layout from "@/components/layout/Layout";
import ArticleCard, { Article } from "@/components/articles/ArticleCard";
import TradingViewChart from "@/components/widgets/TradingViewChart";
import TradingViewCryptoMarket from "@/components/widgets/TradingViewCryptoMarket";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

const cryptoAssets = [
  { name: "Bitcoin", symbol: "BTC", price: "$67,234", change: "+2.45%", trend: "up", marketCap: "$1.32T" },
  { name: "Ethereum", symbol: "ETH", price: "$3,456", change: "+1.82%", trend: "up", marketCap: "$415B" },
  { name: "BNB", symbol: "BNB", price: "$589", change: "-0.54%", trend: "down", marketCap: "$87B" },
  { name: "Solana", symbol: "SOL", price: "$178", change: "+4.21%", trend: "up", marketCap: "$82B" },
  { name: "XRP", symbol: "XRP", price: "$0.52", change: "-1.23%", trend: "down", marketCap: "$28B" },
  { name: "Cardano", symbol: "ADA", price: "$0.45", change: "+0.87%", trend: "up", marketCap: "$16B" },
];

const cryptoNews: Article[] = [
  {
    id: "cr1",
    title: "Bitcoin Approaches All-Time High Amid Institutional Inflows",
    excerpt: "Major financial institutions continue to accumulate Bitcoin.",
    category: "Crypto",
    author: { name: "David Kamau" },
    publishedAt: "1 hour ago",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&q=80",
    isPremium: true,
  },
  {
    id: "cr2",
    title: "Kenya Explores Crypto Regulation Framework",
    excerpt: "Government considers guidelines for digital asset trading.",
    category: "Crypto",
    author: { name: "Sarah Kimani" },
    publishedAt: "3 hours ago",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&q=80",
  },
];

const Crypto = () => {
  return (
    <Layout>
      <div className="container py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Cryptocurrency
            </h1>
          </div>
          <p className="text-muted-foreground ml-4">
            Digital asset prices, blockchain news, and crypto analysis
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Bitcoin (BTC)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$67,234</div>
              <div className="flex items-center gap-1 text-market-up text-sm">
                <TrendingUp className="w-4 h-4" />
                +2.45%
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Ethereum (ETH)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$3,456</div>
              <div className="flex items-center gap-1 text-market-up text-sm">
                <TrendingUp className="w-4 h-4" />
                +1.82%
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Market Cap</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2.54T</div>
              <div className="flex items-center gap-1 text-market-up text-sm">
                <TrendingUp className="w-4 h-4" />
                +1.87%
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">24h Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$98.2B</div>
              <div className="text-sm text-muted-foreground">Global</div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                Bitcoin Chart
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewChart symbol="BITSTAMP:BTCUSD" height={350} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="w-2 h-2 bg-novel-gold rounded-full" />
                Crypto Market
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewCryptoMarket height={350} />
            </CardContent>
          </Card>
        </div>

        {/* Crypto Assets Table */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Top Cryptocurrencies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Name</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Symbol</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Price</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">24h Change</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground hidden sm:table-cell">Market Cap</th>
                  </tr>
                </thead>
                <tbody>
                  {cryptoAssets.map((asset) => (
                    <tr key={asset.symbol} className="border-b border-border hover:bg-secondary/50 transition-colors">
                      <td className="py-3 px-4 font-medium">{asset.name}</td>
                      <td className="py-3 px-4 text-muted-foreground">{asset.symbol}</td>
                      <td className="py-3 px-4 text-right font-medium">{asset.price}</td>
                      <td className={`py-3 px-4 text-right font-medium ${asset.trend === "up" ? "text-market-up" : "text-market-down"}`}>
                        <span className="flex items-center justify-end gap-1">
                          {asset.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                          {asset.change}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right text-muted-foreground hidden sm:table-cell">{asset.marketCap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Crypto News */}
        <h2 className="font-serif text-2xl font-bold mb-6">Crypto News</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {cryptoNews.map((article) => (
            <ArticleCard key={article.id} article={article} variant="horizontal" />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Crypto;
