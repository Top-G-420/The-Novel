import { ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const opinions = [
  {
    id: "1",
    title: "Kenya Needs a Digital Currency Strategy Now",
    excerpt:
      "As CBDCs gain momentum globally, Kenya risks falling behind if it doesn't act decisively on digital currency policy.",
    author: {
      name: "Dr. Janet Muthoni",
      role: "Economist & Policy Analyst",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
  },
  {
    id: "2",
    title: "The Hidden Cost of Kenya's Tax Reforms",
    excerpt:
      "While the Finance Bill promises revenue growth, its impact on SMEs could stifle the entrepreneurship we desperately need.",
    author: {
      name: "Peter Odhiambo",
      role: "Business Columnist",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    },
  },
  {
    id: "3",
    title: "Africa's Fintech Boom: Opportunity or Bubble?",
    excerpt:
      "The influx of venture capital into African fintech raises questions about sustainability and real economic impact.",
    author: {
      name: "Amina Yusuf",
      role: "Investment Analyst",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
    },
  },
];

const OpinionSection = () => {
  return (
    <section className="container py-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center">
            <Quote className="w-5 h-5 text-accent-foreground" />
          </div>
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              Opinion & Analysis
            </h2>
            <p className="text-muted-foreground text-sm">Expert perspectives on what matters</p>
          </div>
        </div>
        <Button variant="ghost" asChild className="hidden sm:flex items-center gap-2 text-accent hover:text-accent/80">
          <Link to="/opinion">
            All Opinion
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {opinions.map((opinion) => (
          <article
            key={opinion.id}
            className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <Quote className="w-8 h-8 text-accent/20 mb-4" />
            <Link to={`/opinion/${opinion.id}`}>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {opinion.title}
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 line-clamp-3">{opinion.excerpt}</p>
            <div className="flex items-center gap-3">
              <img
                src={opinion.author.avatar}
                alt={opinion.author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-foreground">{opinion.author.name}</p>
                <p className="text-xs text-muted-foreground">{opinion.author.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 text-center sm:hidden">
        <Button variant="outline" className="w-full" asChild>
          <Link to="/opinion">View All Opinion</Link>
        </Button>
      </div>
    </section>
  );
};

export default OpinionSection;
