import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import ArticleCard, { Article } from "@/components/articles/ArticleCard";
import { Check, Users, FileText, Calendar } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const journalists: Record<string, any> = {
  "sarah-kimani": {
    id: "sarah-kimani",
    name: "Sarah Kimani",
    role: "Senior Business Editor",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
    bio: "Sarah Kimani is the Senior Business Editor at The Novel. With over a decade of experience covering Kenyan markets, fintech, and economic policy, she has established herself as one of East Africa's most respected business journalists.",
    email: "sarah.kimani@thenovel.com",
    twitter: "@sarahkimani",
    joinedAt: "June 2020",
    articlesCount: 247,
    followersCount: 12500,
    isVerified: true,
  },
  "david-kamau": {
    id: "david-kamau",
    name: "David Kamau",
    role: "Market Analyst",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
    bio: "David Kamau specializes in market analysis and investment research. He brings insights from both local and international markets.",
    joinedAt: "March 2021",
    articlesCount: 156,
    followersCount: 8200,
    isVerified: true,
  },
};

const articles: Article[] = [
  { id: "1", title: "Kenya's Tech Sector Sees Record Investment", excerpt: "International investors pour billions into Kenyan startups.", category: "Startups", author: { name: "Sarah Kimani" }, publishedAt: "Today", readTime: "8 min read", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" },
  { id: "2", title: "CBK Holds Interest Rates Steady", excerpt: "Central Bank maintains benchmark rate amid inflation pressures.", category: "Economy", author: { name: "Sarah Kimani" }, publishedAt: "Yesterday", readTime: "5 min read", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=80", isPremium: true },
  { id: "3", title: "Banking Sector Posts Strong Earnings", excerpt: "Major banks report improved profitability.", category: "Business", author: { name: "Sarah Kimani" }, publishedAt: "2 days ago", readTime: "6 min read", image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&q=80" },
];

const JournalistProfile = () => {
  const { id } = useParams();
  const { isAuthenticated } = useAuth();
  const journalist = journalists[id || "sarah-kimani"] || journalists["sarah-kimani"];

  return (
    <Layout>
      <div className="container py-8 max-w-4xl">
        {/* Profile Header */}
        <div className="card-elevated p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <Avatar className="w-32 h-32">
              <AvatarImage src={journalist.avatar} />
              <AvatarFallback>{journalist.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="font-serif text-2xl font-bold">{journalist.name}</h1>
                {journalist.isVerified && <Check className="w-5 h-5 text-market-up" />}
              </div>
              <p className="text-accent font-medium mb-3">{journalist.role}</p>
              <p className="text-muted-foreground mb-4">{journalist.bio}</p>
              <div className="flex flex-wrap gap-6 text-sm">
                <span className="flex items-center gap-1"><FileText className="w-4 h-4" />{journalist.articlesCount} articles</span>
                <span className="flex items-center gap-1"><Users className="w-4 h-4" />{journalist.followersCount.toLocaleString()} followers</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />Joined {journalist.joinedAt}</span>
              </div>
            </div>
            <Button className="bg-accent hover:bg-accent/90">{isAuthenticated ? "Following" : "Follow"}</Button>
          </div>
        </div>

        {/* Articles */}
        <h2 className="font-serif text-xl font-bold mb-6">Latest Articles</h2>
        <div className="space-y-4">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} variant="horizontal" />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default JournalistProfile;
