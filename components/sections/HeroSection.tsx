import ArticleCard, { Article } from "@/components/articles/ArticleCard";

const featuredArticle: Article = {
  id: "1",
  title: "Kenya's Tech Sector Sees Record $1.2B Investment in 2024",
  excerpt:
    "International investors pour billions into Kenyan startups, marking a pivotal moment for East Africa's largest economy and its growing tech ecosystem.",
  category: "Startups",
  author: { name: "Sarah Kimani" },
  publishedAt: "2 hours ago",
  readTime: "8 min read",
  image:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
  isBreaking: true,
  isPremium: false,
};

const sideArticles: Article[] = [
  {
    id: "2",
    title: "CBK Holds Interest Rates Amid Inflation Concerns",
    excerpt: "The Central Bank of Kenya maintains benchmark rate at 10.5% as inflation pressures ease.",
    category: "Economy",
    author: { name: "James Ochieng" },
    publishedAt: "4 hours ago",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=80",
  },
  {
    id: "3",
    title: "Safaricom Expands M-Pesa to 8 New African Markets",
    excerpt: "The mobile money giant continues its continental expansion strategy.",
    category: "Business",
    author: { name: "Grace Wanjiku" },
    publishedAt: "6 hours ago",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    isPremium: true,
  },
];

const HeroSection = () => {
  return (
    <section className="container py-8">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Featured Article */}
        <div className="lg:col-span-2">
          <ArticleCard article={featuredArticle} variant="featured" />
        </div>

        {/* Side Articles */}
        <div className="flex flex-col gap-4">
          {sideArticles.map((article) => (
            <ArticleCard key={article.id} article={article} variant="horizontal" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
