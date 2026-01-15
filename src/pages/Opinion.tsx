import Layout from "@/components/layout/Layout";
import ArticleCard, { Article } from "@/components/articles/ArticleCard";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const featuredOpinion: Article = {
  id: "o-featured",
  title: "Kenya's Digital Economy: A Blueprint for Africa's Future",
  excerpt: "As Kenya continues to lead Africa's digital transformation, the lessons learned here will shape how the continent approaches technology-driven development for decades to come.",
  category: "Opinion",
  author: { 
    name: "Dr. Janet Muthoni", 
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80" 
  },
  publishedAt: "Today",
  readTime: "12 min read",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
  isPremium: true,
};

const opinions: Article[] = [
  {
    id: "o1",
    title: "Why Central Bank Digital Currencies Will Transform African Finance",
    excerpt: "The CBK's exploration of a digital shilling could revolutionize how Kenyans transact.",
    category: "Opinion",
    author: { name: "James Ochieng", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80" },
    publishedAt: "Yesterday",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80",
  },
  {
    id: "o2",
    title: "The Case for Stronger Corporate Governance in Kenya",
    excerpt: "Recent corporate scandals highlight the urgent need for reform.",
    category: "Opinion",
    author: { name: "Sarah Kimani", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80" },
    publishedAt: "2 days ago",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
    isPremium: true,
  },
  {
    id: "o3",
    title: "Infrastructure Investment: Building Kenya's Economic Future",
    excerpt: "Strategic infrastructure spending is key to sustainable growth.",
    category: "Opinion",
    author: { name: "Peter Njoroge", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80" },
    publishedAt: "3 days ago",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  },
  {
    id: "o4",
    title: "Financial Inclusion: Beyond Mobile Money",
    excerpt: "The next frontier of financial inclusion requires innovative thinking.",
    category: "Opinion",
    author: { name: "Grace Wanjiku", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80" },
    publishedAt: "4 days ago",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
  },
];

const columnists = [
  { name: "Dr. Janet Muthoni", role: "Senior Economics Editor", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80", id: "janet-muthoni" },
  { name: "James Ochieng", role: "Market Analyst", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80", id: "james-ochieng" },
  { name: "Sarah Kimani", role: "Business Editor", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80", id: "sarah-kimani" },
  { name: "Peter Njoroge", role: "Policy Correspondent", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80", id: "peter-njoroge" },
];

const Opinion = () => {
  return (
    <Layout>
      <div className="container py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Opinion & Analysis
            </h1>
          </div>
          <p className="text-muted-foreground ml-4">
            Expert perspectives on business, finance, and economic policy
          </p>
        </div>

        {/* Featured Opinion */}
        <div className="mb-12">
          <ArticleCard article={featuredOpinion} variant="featured" />
        </div>

        {/* Columnists */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl font-bold mb-6">Our Columnists</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {columnists.map((columnist) => (
              <Link 
                key={columnist.id} 
                to={`/journalist/${columnist.id}`}
                className="card-elevated p-6 text-center hover:border-accent transition-colors"
              >
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={columnist.avatar} alt={columnist.name} />
                  <AvatarFallback>{columnist.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-foreground">{columnist.name}</h3>
                <p className="text-sm text-muted-foreground">{columnist.role}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Opinions Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {opinions.map((opinion) => (
            <ArticleCard key={opinion.id} article={opinion} variant="horizontal" />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Opinions
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Opinion;
