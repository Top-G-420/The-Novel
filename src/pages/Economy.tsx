import Layout from "@/components/layout/Layout";
import ArticleCard, { Article } from "@/components/articles/ArticleCard";
import { Button } from "@/components/ui/button";
import TradingViewEconomicCalendar from "@/components/widgets/TradingViewEconomicCalendar";
import TradingViewChart from "@/components/widgets/TradingViewChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const featuredArticle: Article = {
  id: "e-featured",
  title: "Kenya's GDP Growth Outpaces East African Neighbors",
  excerpt: "Latest economic data shows Kenya maintaining its position as the region's economic powerhouse, with strong growth in agriculture, manufacturing, and services sectors.",
  category: "Economy",
  author: { name: "James Ochieng", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80" },
  publishedAt: "3 hours ago",
  readTime: "10 min read",
  image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80",
  isBreaking: true,
};

const articles: Article[] = [
  {
    id: "e1",
    title: "CBK Maintains Interest Rates Amid Inflation Pressures",
    excerpt: "Central bank opts for stability as inflation shows signs of easing.",
    category: "Economy",
    author: { name: "Sarah Kimani" },
    publishedAt: "Today",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
  },
  {
    id: "e2",
    title: "Kenya Shilling Strengthens Against Major Currencies",
    excerpt: "Improved dollar inflows boost local currency performance.",
    category: "Economy",
    author: { name: "David Kamau" },
    publishedAt: "Yesterday",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=600&q=80",
    isPremium: true,
  },
  {
    id: "e3",
    title: "Government Revenue Collection Exceeds Targets",
    excerpt: "KRA reports improved tax compliance across sectors.",
    category: "Economy",
    author: { name: "Peter Njoroge" },
    publishedAt: "2 days ago",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
  },
  {
    id: "e4",
    title: "Trade Deficit Narrows as Exports Grow",
    excerpt: "Agricultural and manufactured exports show strong gains.",
    category: "Economy",
    author: { name: "Amina Hassan" },
    publishedAt: "3 days ago",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80",
  },
  {
    id: "e5",
    title: "Unemployment Rate Shows Modest Improvement",
    excerpt: "Youth employment remains a key challenge for policymakers.",
    category: "Economy",
    author: { name: "Grace Wanjiku" },
    publishedAt: "4 days ago",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
    isPremium: true,
  },
  {
    id: "e6",
    title: "Infrastructure Spending Drives Construction Boom",
    excerpt: "Major projects fuel economic activity across counties.",
    category: "Economy",
    author: { name: "Michael Mwangi" },
    publishedAt: "5 days ago",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  },
];

const Economy = () => {
  return (
    <Layout>
      <div className="container py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Economy
            </h1>
          </div>
          <p className="text-muted-foreground ml-4">
            Macroeconomic analysis, policy updates, and economic indicators
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <ArticleCard article={featuredArticle} variant="featured" />
        </div>

        {/* Economic Data Widgets */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                Economic Calendar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewEconomicCalendar height={350} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="w-2 h-2 bg-novel-gold rounded-full" />
                Global Indices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewChart symbol="FOREXCOM:SPXUSD" height={350} />
            </CardContent>
          </Card>
        </div>

        {/* Articles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Economy;
