import Layout from "@/components/layout/Layout";
import ArticleCard, { Article } from "@/components/articles/ArticleCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, TrendingUp, Globe, Lightbulb } from "lucide-react";

const featuredArticle: Article = {
  id: "s-featured",
  title: "Kenya's Tech Sector Attracts Record $1.2 Billion in 2024",
  excerpt: "International investors pour billions into Kenyan startups, marking a pivotal moment for East Africa's largest economy and its growing tech ecosystem. The funding surge signals confidence in the region's innovation potential.",
  category: "Startups",
  author: { name: "Sarah Kimani", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80" },
  publishedAt: "2 hours ago",
  readTime: "12 min read",
  image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&q=80",
  isBreaking: true,
};

const articles: Article[] = [
  {
    id: "s1",
    title: "M-Pesa Expands to 8 New African Markets",
    excerpt: "The mobile money giant continues its continental expansion.",
    category: "Startups",
    author: { name: "Grace Wanjiku" },
    publishedAt: "Today",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  },
  {
    id: "s2",
    title: "AI Startup Lands $15M Series A Funding",
    excerpt: "Nairobi-based AI company set to expand across Africa.",
    category: "Startups",
    author: { name: "David Kamau" },
    publishedAt: "Yesterday",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    isPremium: true,
  },
  {
    id: "s3",
    title: "Fintech Revolution: Kenya Leads Africa",
    excerpt: "Local startups are reshaping financial services across the continent.",
    category: "Startups",
    author: { name: "Peter Njoroge" },
    publishedAt: "2 days ago",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    id: "s4",
    title: "AgriTech Solutions Transform Kenyan Farming",
    excerpt: "Technology helping smallholder farmers boost productivity.",
    category: "Startups",
    author: { name: "Amina Hassan" },
    publishedAt: "3 days ago",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
  },
  {
    id: "s5",
    title: "HealthTech Startup Raises Seed Funding",
    excerpt: "Telemedicine platform aims to reach rural communities.",
    category: "Startups",
    author: { name: "Michael Mwangi" },
    publishedAt: "4 days ago",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&q=80",
    isPremium: true,
  },
  {
    id: "s6",
    title: "E-commerce Platforms See Record Growth",
    excerpt: "Online shopping adoption accelerates post-pandemic.",
    category: "Startups",
    author: { name: "James Ochieng" },
    publishedAt: "5 days ago",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&q=80",
  },
];

const stats = [
  { label: "Total Funding 2024", value: "$1.2B", icon: TrendingUp },
  { label: "Active Startups", value: "3,500+", icon: Rocket },
  { label: "Tech Hubs", value: "50+", icon: Lightbulb },
  { label: "Countries Reached", value: "12", icon: Globe },
];

const Startups = () => {
  return (
    <Layout>
      <div className="container py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Startups & Tech
            </h1>
          </div>
          <p className="text-muted-foreground ml-4">
            Innovation, venture capital, and technology trends in East Africa
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="card-elevated p-6 text-center">
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <ArticleCard article={featuredArticle} variant="featured" />
        </div>

        {/* Trending Topics */}
        <div className="mb-8">
          <h2 className="font-serif text-xl font-bold mb-4">Trending Topics</h2>
          <div className="flex flex-wrap gap-2">
            {["Fintech", "AI/ML", "AgriTech", "HealthTech", "E-commerce", "EdTech", "CleanTech", "Logistics"].map((topic) => (
              <Badge key={topic} variant="secondary" className="px-4 py-2 cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors">
                {topic}
              </Badge>
            ))}
          </div>
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

export default Startups;
