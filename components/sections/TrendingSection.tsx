import { Flame } from "lucide-react";
import ArticleCard, { Article } from "@/components/articles/ArticleCard";

const trendingArticles: Article[] = [
  {
    id: "1",
    title: "Why Kenyan Startups Are Attracting Silicon Valley Money",
    excerpt: "",
    category: "Startups",
    author: { name: "Sarah Kimani" },
    publishedAt: "Today",
    readTime: "8 min",
    image: "",
  },
  {
    id: "2",
    title: "The Rise of Digital Banking in East Africa",
    excerpt: "",
    category: "Finance",
    author: { name: "James Ochieng" },
    publishedAt: "Today",
    readTime: "6 min",
    image: "",
  },
  {
    id: "3",
    title: "Kenya's Export Markets: A 2024 Analysis",
    excerpt: "",
    category: "Economy",
    author: { name: "Grace Wanjiku" },
    publishedAt: "Yesterday",
    readTime: "10 min",
    image: "",
  },
  {
    id: "4",
    title: "How M-Pesa Changed African Commerce Forever",
    excerpt: "",
    category: "Business",
    author: { name: "Michael Mwangi" },
    publishedAt: "Yesterday",
    readTime: "12 min",
    image: "",
  },
  {
    id: "5",
    title: "NSE Performance: Q3 2024 Deep Dive",
    excerpt: "",
    category: "Markets",
    author: { name: "David Kamau" },
    publishedAt: "2 days ago",
    readTime: "7 min",
    image: "",
  },
];

const TrendingSection = () => {
  return (
    <section className="container py-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
          <Flame className="w-5 h-5 text-accent" />
        </div>
        <div>
          <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground">
            Trending Now
          </h2>
          <p className="text-sm text-muted-foreground">Most read stories this week</p>
        </div>
      </div>

      <div className="bg-card rounded-xl border border-border p-6">
        <div className="grid md:grid-cols-2 gap-x-8">
          <div>
            {trendingArticles.slice(0, 3).map((article) => (
              <ArticleCard key={article.id} article={article} variant="compact" />
            ))}
          </div>
          <div>
            {trendingArticles.slice(3).map((article, index) => (
              <ArticleCard
                key={article.id}
                article={{ ...article, id: String(index + 4) }}
                variant="compact"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
