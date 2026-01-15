import { Crown, Check, Headphones, BookOpen, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  { icon: BookOpen, text: "Unlimited access to all premium articles" },
  { icon: Headphones, text: "AI voice reading powered by ElevenLabs" },
  { icon: Zap, text: "Early access to breaking news" },
  { icon: Check, text: "Ad-free reading experience" },
];

const PremiumCTA = () => {
  return (
    <section className="gradient-hero py-16 md:py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-novel-gold/20 text-novel-gold mb-6">
            <Crown className="w-4 h-4" />
            <span className="text-sm font-medium">Premium Subscription</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Elevate Your Business Intelligence
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
            Get exclusive insights, in-depth analysis, and premium features designed for serious investors and business professionals.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-left p-4 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10"
              >
                <benefit.icon className="w-5 h-5 text-novel-gold shrink-0" />
                <span className="text-sm text-primary-foreground/90">{benefit.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base font-semibold"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base"
            >
              View Plans
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/50 mt-6">
            Starting at KES 499/month • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default PremiumCTA;
