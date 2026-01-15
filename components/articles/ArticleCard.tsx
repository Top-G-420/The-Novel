import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, User, Bookmark, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  readTime: string;
  image: string;
  isPremium?: boolean;
  isBreaking?: boolean;
}

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "featured" | "horizontal" | "compact";
}

const ArticleCard = ({ article, variant = "default" }: ArticleCardProps) => {
  if (variant === "featured") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="group relative h-[500px] rounded-xl overflow-hidden card-elevated"
      >
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-novel-dark via-novel-dark/50 to-transparent" />
        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
          <div className="flex items-center gap-2 mb-3">
            {article.isBreaking && (
              <Badge className="bg-accent text-accent-foreground animate-pulse">
                Breaking
              </Badge>
            )}
            <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-0">
              {article.category}
            </Badge>
            {article.isPremium && (
              <Badge variant="outline" className="border-novel-gold text-novel-gold">
                <Lock className="w-3 h-3 mr-1" />
                Premium
              </Badge>
            )}
          </div>
          <Link to={`/article/${article.id}`}>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-3 leading-tight group-hover:text-primary-foreground/90 transition-colors">
              {article.title}
            </h2>
          </Link>
          <p className="text-primary-foreground/80 text-sm md:text-base mb-4 line-clamp-2">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-4 text-sm text-primary-foreground/60">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{article.author.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  if (variant === "horizontal") {
    return (
      <motion.article
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="group flex gap-4 card-elevated p-4"
      >
        <div className="relative w-32 h-24 md:w-48 md:h-32 rounded-lg overflow-hidden shrink-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {article.isPremium && (
            <div className="absolute top-2 right-2">
              <Lock className="w-4 h-4 text-novel-gold" />
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="category-label text-accent">{article.category}</span>
            <span className="text-muted-foreground text-xs">•</span>
            <span className="text-xs text-muted-foreground">{article.publishedAt}</span>
          </div>
          <Link to={`/article/${article.id}`}>
            <h3 className="font-serif text-base md:text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
              {article.title}
            </h3>
          </Link>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>{article.author.name}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
          </div>
        </div>
      </motion.article>
    );
  }

  if (variant === "compact") {
    return (
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="group flex items-start gap-3 py-3 border-b border-border last:border-0"
      >
        <span className="font-serif text-2xl font-bold text-muted-foreground/30 shrink-0">
          {article.id.padStart(2, "0")}
        </span>
        <div className="flex-1 min-w-0">
          <span className="category-label text-accent text-[10px]">{article.category}</span>
          <Link to={`/article/${article.id}`}>
            <h4 className="font-serif text-sm font-medium text-foreground mt-1 line-clamp-2 group-hover:text-accent transition-colors">
              {article.title}
            </h4>
          </Link>
        </div>
      </motion.article>
    );
  }

  // Default variant
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group card-elevated"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {article.isPremium && (
          <div className="absolute top-3 right-3">
            <Badge variant="outline" className="border-novel-gold text-novel-gold bg-background/80 backdrop-blur-sm">
              <Lock className="w-3 h-3 mr-1" />
              Premium
            </Badge>
          </div>
        )}
        <button className="absolute top-3 left-3 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Bookmark className="w-4 h-4 text-foreground" />
        </button>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="category-label text-accent">{article.category}</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">{article.publishedAt}</span>
        </div>
        <Link to={`/article/${article.id}`}>
          <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
            {article.title}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{article.excerpt}</p>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <User className="w-4 h-4" />
            <span>{article.author.name}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ArticleCard;
