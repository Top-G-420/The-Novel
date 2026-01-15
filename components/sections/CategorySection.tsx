import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ArticleCard, { Article } from "@/components/articles/ArticleCard";
import { Button } from "@/components/ui/button";

interface CategorySectionProps {
  title: string;
  category: string;
  articles: Article[];
  href: string;
}

const CategorySection = ({ title, category, articles, href }: CategorySectionProps) => {
  return (
    <section className="container py-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-1 h-8 bg-accent rounded-full" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
            {title}
          </h2>
        </div>
        <Button variant="ghost" asChild className="hidden sm:flex items-center gap-2 text-accent hover:text-accent/80">
          <Link to={href}>
            More {category}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Main article */}
        <div className="md:col-span-2">
          <ArticleCard article={articles[0]} variant="featured" />
        </div>

        {/* Side articles */}
        <div className="flex flex-col gap-4">
          {articles.slice(1, 4).map((article) => (
            <ArticleCard key={article.id} article={article} variant="horizontal" />
          ))}
        </div>
      </div>

      <div className="mt-6 text-center sm:hidden">
        <Button variant="outline" className="w-full" asChild>
          <Link to={href}>View All {category}</Link>
        </Button>
      </div>
    </section>
  );
};

export default CategorySection;
