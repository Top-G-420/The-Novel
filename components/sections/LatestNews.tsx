import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ArticleCard, { Article } from "@/components/articles/ArticleCard";
import { Button } from "@/components/ui/button";

const latestArticles: Article[] = [
  {
    id: "4",
    title: "Kenya Airways Returns to Profitability After Five Years",
    excerpt: "The national carrier reports its first profitable quarter since 2019, driven by cargo growth and tourism recovery.",
    category: "Business",
    author: { name: "Michael Mwangi" },
    publishedAt: "Yesterday",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
  },
  {
    id: "5",
    title: "NSE 20 Index Rallies as Foreign Investors Return",
    excerpt: "Nairobi bourse sees strongest weekly gains in six months amid renewed investor confidence.",
    category: "Markets",
    author: { name: "David Kamau" },
    publishedAt: "Yesterday",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
    isPremium: true,
  },
  {
    id: "6",
    title: "East Africa's Largest Solar Farm Opens in Turkana",
    excerpt: "The 100MW facility is set to power over 250,000 homes and boost Kenya's renewable energy capacity.",
    category: "Economy",
    author: { name: "Amina Hassan" },
    publishedAt: "2 days ago",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
  },
  {
    id: "7",
    title: "Equity Bank Launches AI-Powered Investment Advisory",
    excerpt: "The move positions the lender as a fintech leader in personal wealth management across Africa.",
    category: "Finance",
    author: { name: "Peter Njoroge" },
    publishedAt: "2 days ago",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
];

const LatestNews = () => {
  return (
    <section className="container py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
            Latest News
          </h2>
          <p className="text-muted-foreground mt-1">
            Breaking stories from Kenya and beyond
          </p>
        </div>
        <Button variant="ghost" className="hidden sm:flex items-center gap-2 text-accent hover:text-accent/80">
          View All
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {latestArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      <div className="mt-8 text-center sm:hidden">
        <Button variant="outline" className="w-full">
          View All Articles
        </Button>
      </div>
    </section>
  );
};

export default LatestNews;
