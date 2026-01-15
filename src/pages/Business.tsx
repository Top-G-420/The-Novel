import Layout from "@/components/layout/Layout";
import ArticleCard, { Article } from "@/components/articles/ArticleCard";
import { Button } from "@/components/ui/button";

const featuredArticle: Article = {
  id: "b-featured",
  title: "Kenya's Export Sector Poised for Unprecedented Growth in 2025",
  excerpt: "With new trade agreements and infrastructure improvements, Kenyan businesses are eyeing international markets like never before. Industry experts weigh in on the opportunities and challenges ahead.",
  category: "Business",
  author: { name: "Grace Wanjiku" },
  publishedAt: "2 hours ago",
  readTime: "12 min read",
  image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80",
  isBreaking: true,
};

const articles: Article[] = [
  {
    id: "b1",
    title: "Kenyan Banks Lead Digital Transformation in East Africa",
    excerpt: "Local financial institutions are pioneering mobile banking innovations.",
    category: "Business",
    author: { name: "Grace Wanjiku" },
    publishedAt: "3 hours ago",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&q=80",
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
    excerpt: "Industrial output shows signs of sustained growth.",
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
    excerpt: "Major retailers announce plans for new store openings.",
    category: "Business",
    author: { name: "Amina Hassan" },
    publishedAt: "Yesterday",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
  },
  {
    id: "b5",
    title: "Logistics Companies Invest in EV Fleets",
    excerpt: "Sustainability drives major infrastructure investments in transport.",
    category: "Business",
    author: { name: "David Kamau" },
    publishedAt: "Yesterday",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: "b6",
    title: "Real Estate Market Sees Mixed Signals",
    excerpt: "Commercial property demand rises while residential slows.",
    category: "Business",
    author: { name: "Sarah Kimani" },
    publishedAt: "2 days ago",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  },
];

const Business = () => {
  return (
    <Layout>
      <div className="container py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Business
            </h1>
          </div>
          <p className="text-muted-foreground ml-4">
            Kenyan and international business news, corporate developments, and industry analysis
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <ArticleCard article={featuredArticle} variant="featured" />
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

export default Business;
