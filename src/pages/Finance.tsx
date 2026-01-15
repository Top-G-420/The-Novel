import Layout from "@/components/layout/Layout";
import ArticleCard, { Article } from "@/components/articles/ArticleCard";
import { Button } from "@/components/ui/button";
import TradingViewChart from "@/components/widgets/TradingViewChart";
import TradingViewTechnicalAnalysis from "@/components/widgets/TradingViewTechnicalAnalysis";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const featuredArticle: Article = {
  id: "f-featured",
  title: "Personal Finance Guide: Building Wealth in Kenya's Economic Landscape",
  excerpt: "Expert strategies for Kenyan investors looking to grow their portfolios despite market volatility and inflation concerns. A comprehensive look at investment options.",
  category: "Finance",
  author: { name: "Dr. Janet Muthoni", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80" },
  publishedAt: "Today",
  readTime: "15 min read",
  image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=1200&q=80",
  isPremium: true,
};

const articles: Article[] = [
  {
    id: "f1",
    title: "SACCOs Report Strong Membership Growth Amid Banking Changes",
    excerpt: "Cooperative savings societies see surge in new members.",
    category: "Finance",
    author: { name: "David Kamau" },
    publishedAt: "Today",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
  },
  {
    id: "f2",
    title: "Insurance Penetration Climbs to New Highs in Kenya",
    excerpt: "Kenyans increasingly embrace insurance products.",
    category: "Finance",
    author: { name: "Sarah Kimani" },
    publishedAt: "Yesterday",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
  },
  {
    id: "f3",
    title: "Pension Fund Returns Beat Expectations",
    excerpt: "Major retirement schemes report solid performance.",
    category: "Finance",
    author: { name: "James Ochieng" },
    publishedAt: "2 days ago",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80",
    isPremium: true,
  },
  {
    id: "f4",
    title: "Mobile Lending Apps Face New Regulations",
    excerpt: "CBK introduces stricter oversight for digital lenders.",
    category: "Finance",
    author: { name: "Grace Wanjiku" },
    publishedAt: "3 days ago",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
  },
  {
    id: "f5",
    title: "Tax Planning Strategies for 2025",
    excerpt: "Expert advice on optimizing your tax obligations.",
    category: "Finance",
    author: { name: "Michael Mwangi" },
    publishedAt: "3 days ago",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&q=80",
  },
  {
    id: "f6",
    title: "Real Estate Investment Trusts Gain Popularity",
    excerpt: "REITs offer new investment avenue for retail investors.",
    category: "Finance",
    author: { name: "Amina Hassan" },
    publishedAt: "4 days ago",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
  },
];

const Finance = () => {
  return (
    <Layout>
      <div className="container py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Finance
            </h1>
          </div>
          <p className="text-muted-foreground ml-4">
            Personal finance, banking, insurance, and investment insights
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <ArticleCard article={featuredArticle} variant="featured" />
        </div>

        {/* Market Widget */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                Banking Index
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TradingViewChart symbol="NASDAQ:BAC" height={300} />
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
              <TradingViewTechnicalAnalysis symbol="NASDAQ:JPM" height={300} />
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

export default Finance;
