import Layout from "@/components/layout/Layout";
import MarketTicker from "@/components/market/MarketTicker";
import HeroSection from "@/components/sections/HeroSection";
import LatestNews from "@/components/sections/LatestNews";
import MarketSnapshot from "@/components/sections/MarketSnapshot";
import TrendingSection from "@/components/sections/TrendingSection";
import CategorySection from "@/components/sections/CategorySection";
import OpinionSection from "@/components/sections/OpinionSection";
import PremiumCTA from "@/components/sections/PremiumCTA";
import { Article } from "@/components/articles/ArticleCard";

const businessArticles: Article[] = [
  {
    id: "b1",
    title: "Kenyan Banks Lead Digital Transformation in East Africa",
    excerpt: "Local financial institutions are pioneering mobile banking innovations that are reshaping how Africans manage their money.",
    category: "Business",
    author: { name: "Grace Wanjiku" },
    publishedAt: "3 hours ago",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80",
  },
  {
    id: "b2",
    title: "Tea Export Revenue Hits Record High",
    excerpt: "Kenya's tea industry reports unprecedented growth amid strong global demand.",
    category: "Business",
    author: { name: "Michael Mwangi" },
    publishedAt: "5 hours ago",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&q=80",
  },
  {
    id: "b3",
    title: "Manufacturing Sector Eyes Post-Pandemic Recovery",
    excerpt: "Industrial output shows signs of sustained growth as supply chains stabilize.",
    category: "Business",
    author: { name: "Peter Njoroge" },
    publishedAt: "8 hours ago",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    isPremium: true,
  },
  {
    id: "b4",
    title: "Retail Giants Expand Footprint Across Kenya",
    excerpt: "Major retailers announce plans for new store openings in secondary cities.",
    category: "Business",
    author: { name: "Amina Hassan" },
    publishedAt: "Yesterday",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
  },
];

const financeArticles: Article[] = [
  {
    id: "f1",
    title: "Personal Finance: Building Wealth in Uncertain Times",
    excerpt: "Expert strategies for Kenyan investors looking to grow their portfolios despite market volatility and inflation concerns.",
    category: "Finance",
    author: { name: "Dr. Janet Muthoni" },
    publishedAt: "Today",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&q=80",
    isPremium: true,
  },
  {
    id: "f2",
    title: "SACCOs Report Strong Membership Growth",
    excerpt: "Cooperative savings societies see surge in new members amid banking sector changes.",
    category: "Finance",
    author: { name: "David Kamau" },
    publishedAt: "Today",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
  },
  {
    id: "f3",
    title: "Insurance Penetration Climbs to New Highs",
    excerpt: "Kenyans increasingly embrace insurance products as awareness campaigns bear fruit.",
    category: "Finance",
    author: { name: "Sarah Kimani" },
    publishedAt: "Yesterday",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
  },
  {
    id: "f4",
    title: "Pension Fund Returns Beat Expectations",
    excerpt: "Major retirement schemes report solid performance in the first half of the year.",
    category: "Finance",
    author: { name: "James Ochieng" },
    publishedAt: "2 days ago",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Market Ticker */}
      <MarketTicker />

      {/* Hero Section */}
      <HeroSection />

      {/* Latest News */}
      <LatestNews />

      {/* Market Snapshot */}
      <MarketSnapshot />

      {/* Trending Section */}
      <TrendingSection />

      {/* Business Section */}
      <CategorySection
        title="Business"
        category="Business"
        articles={businessArticles}
        href="/business"
      />

      {/* Premium CTA */}
      <PremiumCTA />

      {/* Finance Section */}
      <CategorySection
        title="Finance"
        category="Finance"
        articles={financeArticles}
        href="/finance"
      />

      {/* Opinion Section */}
      <OpinionSection />
    </Layout>
  );
};

export default Index;
