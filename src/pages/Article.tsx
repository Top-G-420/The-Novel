import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Share2, Bookmark, Lock, Volume2, ThumbsUp, MessageSquare } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import AdSlot from "@/components/ads/AdSlot";

const sampleArticle = {
  id: "1",
  title: "Kenya's Tech Sector Sees Record $1.2B Investment in 2024",
  excerpt: "International investors pour billions into Kenyan startups, marking a pivotal moment for East Africa's largest economy.",
  content: `
    <p>Kenya's technology sector has achieved a historic milestone, attracting over $1.2 billion in foreign direct investment during 2024. This unprecedented inflow of capital signals growing international confidence in the country's digital economy and its potential to serve as a gateway to the broader African market.</p>
    
    <h2>The Rise of Nairobi's Silicon Savannah</h2>
    <p>Over the past decade, Nairobi has emerged as Africa's most dynamic tech hub, earning the moniker "Silicon Savannah." The city's unique combination of entrepreneurial spirit, technical talent, and supportive regulatory environment has created fertile ground for innovation.</p>
    
    <p>Major international venture capital firms, including Andreessen Horowitz, Sequoia Capital, and Tiger Global, have significantly increased their exposure to Kenyan startups. This marks a departure from earlier years when African tech investments were primarily driven by development finance institutions and impact investors.</p>
    
    <h2>Key Sectors Driving Growth</h2>
    <p>Fintech continues to dominate the investment landscape, accounting for approximately 45% of total funding. The success of M-Pesa demonstrated the potential of mobile financial services in Africa, inspiring a new generation of startups focused on payments, lending, and insurance.</p>
    
    <blockquote>"Kenya has proven that African solutions can achieve global scale. We're just scratching the surface of what's possible," says Sarah Kimani, Senior Business Editor at The Novel.</blockquote>
    
    <p>Beyond fintech, significant investments have flowed into agritech, healthtech, and logistics startups. These sectors address critical infrastructure gaps while leveraging Kenya's mobile-first consumer base.</p>
    
    <h2>Challenges and Opportunities Ahead</h2>
    <p>Despite the optimism, challenges remain. Currency volatility, regulatory uncertainty, and the need for deeper capital markets pose risks to sustained growth. However, industry leaders remain confident that Kenya's fundamentals will continue to attract investment.</p>
  `,
  category: "Startups",
  author: { 
    id: "sarah-kimani",
    name: "Sarah Kimani", 
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    bio: "Senior Business Editor at The Novel"
  },
  publishedAt: "January 15, 2025",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
  isPremium: false,
  likes: 234,
  comments: 45,
};

const Article = () => {
  const { id } = useParams();
  const { isPremium, isAuthenticated } = useAuth();
  const article = sampleArticle;
  const canRead = !article.isPremium || isPremium;

  return (
    <Layout>
      <article className="container py-8 max-w-4xl">
        {/* Category */}
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary">{article.category}</Badge>
          {article.isPremium && (
            <Badge variant="outline" className="border-novel-gold text-novel-gold">
              <Lock className="w-3 h-3 mr-1" /> Premium
            </Badge>
          )}
        </div>

        {/* Title */}
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
          {article.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-border">
          <Link to={`/journalist/${article.author.id}`} className="flex items-center gap-3 hover:opacity-80">
            <Avatar>
              <AvatarImage src={article.author.avatar} />
              <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-foreground">{article.author.name}</div>
              <div className="text-sm text-muted-foreground">{article.author.bio}</div>
            </div>
          </Link>
          <div className="flex items-center gap-4 text-sm text-muted-foreground ml-auto">
            <span>{article.publishedAt}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{article.readTime}</span>
          </div>
        </div>

        {/* Featured Image */}
        <img src={article.image} alt={article.title} className="w-full aspect-video object-cover rounded-xl mb-8" />

        {/* Actions */}
        <div className="flex items-center gap-2 mb-8">
          {isPremium && (
            <Button variant="outline" size="sm" className="gap-2">
              <Volume2 className="w-4 h-4" /> Listen
            </Button>
          )}
          <Button variant="ghost" size="icon"><Bookmark className="w-4 h-4" /></Button>
          <Button variant="ghost" size="icon"><Share2 className="w-4 h-4" /></Button>
          <div className="ml-auto flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><ThumbsUp className="w-4 h-4" />{article.likes}</span>
            <span className="flex items-center gap-1"><MessageSquare className="w-4 h-4" />{article.comments}</span>
          </div>
        </div>

        {/* Ad Slot */}
        <AdSlot type="in-article" className="mb-8" />

        {/* Content */}
        {canRead ? (
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
        ) : (
          <div className="text-center py-12 bg-secondary rounded-xl">
            <Lock className="w-12 h-12 text-novel-gold mx-auto mb-4" />
            <h3 className="font-serif text-xl font-bold mb-2">Premium Content</h3>
            <p className="text-muted-foreground mb-4">Subscribe to access this article</p>
            <Button className="bg-accent hover:bg-accent/90">Subscribe Now</Button>
          </div>
        )}
      </article>
    </Layout>
  );
};

export default Article;
