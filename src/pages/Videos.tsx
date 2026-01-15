import Layout from "@/components/layout/Layout";
import { Play, Clock, Eye, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
  publishedAt: string;
  category: string;
  isPremium?: boolean;
  youtubeId: string;
}

const featuredVideo: Video = {
  id: "v-featured",
  title: "Kenya's Economic Outlook 2025: Expert Panel Discussion",
  description: "Leading economists discuss Kenya's economic prospects for 2025, covering inflation, currency stability, and growth projections.",
  thumbnail: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80",
  duration: "45:32",
  views: "24.5K",
  publishedAt: "2 days ago",
  category: "Economy",
  youtubeId: "dQw4w9WgXcQ",
};

const videos: Video[] = [
  {
    id: "v1",
    title: "Inside Kenya's Fintech Revolution",
    description: "How M-Pesa and new startups are transforming financial services.",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    duration: "18:45",
    views: "15.2K",
    publishedAt: "3 days ago",
    category: "Startups",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v2",
    title: "NSE Market Analysis: Weekly Roundup",
    description: "This week's top movers and market trends on the Nairobi Securities Exchange.",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
    duration: "12:30",
    views: "8.7K",
    publishedAt: "4 days ago",
    category: "Markets",
    isPremium: true,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v3",
    title: "Interview: CBK Governor on Monetary Policy",
    description: "Exclusive interview on interest rates, inflation, and currency stability.",
    thumbnail: "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&q=80",
    duration: "28:15",
    views: "32.1K",
    publishedAt: "1 week ago",
    category: "Economy",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v4",
    title: "Building a Business in Kenya: Entrepreneur Stories",
    description: "Three successful entrepreneurs share their journey and lessons learned.",
    thumbnail: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
    duration: "35:42",
    views: "19.8K",
    publishedAt: "1 week ago",
    category: "Business",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v5",
    title: "Personal Finance Masterclass: Investing 101",
    description: "A beginner's guide to investing in Kenya's stock market.",
    thumbnail: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=600&q=80",
    duration: "42:18",
    views: "28.4K",
    publishedAt: "2 weeks ago",
    category: "Finance",
    isPremium: true,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v6",
    title: "East African Trade: Opportunities and Challenges",
    description: "Examining cross-border trade dynamics in the EAC region.",
    thumbnail: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80",
    duration: "22:55",
    views: "11.3K",
    publishedAt: "2 weeks ago",
    category: "Economy",
    youtubeId: "dQw4w9WgXcQ",
  },
];

const VideoCard = ({ video, featured = false }: { video: Video; featured?: boolean }) => {
  const { isPremium } = useAuth();
  const canWatch = !video.isPremium || isPremium;

  if (featured) {
    return (
      <div className="relative group rounded-xl overflow-hidden card-elevated">
        <div className="aspect-video relative">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-novel-dark/80 via-novel-dark/20 to-transparent" />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 bg-accent/90 rounded-full flex items-center justify-center text-accent-foreground hover:bg-accent transition-colors group-hover:scale-110">
              <Play className="w-10 h-10 ml-1" fill="currentColor" />
            </button>
          </div>

          {/* Duration */}
          <div className="absolute bottom-4 right-4 bg-novel-dark/80 text-primary-foreground px-2 py-1 rounded text-sm font-medium">
            {video.duration}
          </div>

          {/* Premium Badge */}
          {video.isPremium && (
            <div className="absolute top-4 right-4">
              <Badge variant="outline" className="border-novel-gold text-novel-gold bg-background/80">
                <Lock className="w-3 h-3 mr-1" />
                Premium
              </Badge>
            </div>
          )}
        </div>
        <div className="p-6">
          <Badge variant="secondary" className="mb-3">{video.category}</Badge>
          <h2 className="font-serif text-2xl font-bold text-foreground mb-2">{video.title}</h2>
          <p className="text-muted-foreground mb-4">{video.description}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {video.views} views
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {video.publishedAt}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group card-elevated">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-14 h-14 bg-accent/90 rounded-full flex items-center justify-center text-accent-foreground">
            <Play className="w-6 h-6 ml-0.5" fill="currentColor" />
          </button>
        </div>

        {/* Duration */}
        <div className="absolute bottom-2 right-2 bg-novel-dark/80 text-primary-foreground px-2 py-0.5 rounded text-xs font-medium">
          {video.duration}
        </div>

        {/* Premium Badge */}
        {video.isPremium && (
          <div className="absolute top-2 right-2">
            <Lock className="w-4 h-4 text-novel-gold" />
          </div>
        )}
      </div>
      <div className="p-4">
        <Badge variant="secondary" className="mb-2 text-xs">{video.category}</Badge>
        <h3 className="font-serif font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
          {video.title}
        </h3>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            {video.views}
          </span>
          <span>{video.publishedAt}</span>
        </div>
      </div>
    </div>
  );
};

const Videos = () => {
  return (
    <Layout>
      <div className="container py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Videos
            </h1>
          </div>
          <p className="text-muted-foreground ml-4">
            In-depth interviews, market analysis, and expert discussions
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-12">
          <VideoCard video={featuredVideo} featured />
        </div>

        {/* Videos Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Videos
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Videos;
