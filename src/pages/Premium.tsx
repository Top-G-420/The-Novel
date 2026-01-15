import { Crown, Check, Headphones, BookOpen, Zap, BarChart3, Shield, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: BookOpen,
    title: "Unlimited Premium Content",
    description: "Access all paywalled articles, in-depth analysis, and exclusive reports.",
  },
  {
    icon: Headphones,
    title: "AI Voice Reading",
    description: "Listen to any article with natural AI-powered narration by ElevenLabs.",
  },
  {
    icon: Zap,
    title: "Early Access",
    description: "Get breaking news alerts and market updates before anyone else.",
  },
  {
    icon: BarChart3,
    title: "Market Insights",
    description: "Exclusive market analysis, investment tips, and portfolio recommendations.",
  },
  {
    icon: Shield,
    title: "Ad-Free Experience",
    description: "Enjoy uninterrupted reading without any advertisements.",
  },
  {
    icon: Clock,
    title: "Reading History",
    description: "Save articles and track your reading progress across devices.",
  },
];

const plans = [
  {
    name: "Monthly",
    price: "KES 499",
    period: "/month",
    description: "Perfect for casual readers",
    features: ["All premium articles", "AI voice reading", "Ad-free experience"],
    popular: false,
  },
  {
    name: "Annual",
    price: "KES 3,999",
    period: "/year",
    description: "Best value for serious readers",
    features: ["All premium articles", "AI voice reading", "Ad-free experience", "Early access to breaking news", "Exclusive newsletters", "Save 33%"],
    popular: true,
  },
  {
    name: "Corporate",
    price: "Custom",
    period: "",
    description: "For teams and organizations",
    features: ["Multiple user accounts", "Team analytics", "Custom integrations", "Dedicated support", "Invoice billing"],
    popular: false,
  },
];

const Premium = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-novel-gold/20 text-novel-gold mb-6">
            <Crown className="w-4 h-4" />
            <span className="text-sm font-medium">Premium Subscription</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Unlock Premium Insights
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            Get exclusive access to in-depth analysis, expert opinions, and premium features designed for serious investors and business professionals.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold">
            Start 7-Day Free Trial
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">What You Get</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-secondary py-16">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold text-center mb-4">Choose Your Plan</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Select the subscription that best fits your reading habits. All plans include a 7-day free trial.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? "border-accent ring-2 ring-accent" : "border-border"}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-accent shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? "bg-accent hover:bg-accent/90 text-accent-foreground" : ""}`} variant={plan.popular ? "default" : "outline"}>
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-16">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto space-y-6">
          {[
            { q: "Can I cancel anytime?", a: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period." },
            { q: "What payment methods do you accept?", a: "We accept M-Pesa, credit/debit cards, and PayPal for international subscribers." },
            { q: "Is there a student discount?", a: "Yes! Students with a valid .edu email address get 50% off all plans." },
            { q: "Can I share my subscription?", a: "Individual plans are for single users. For team access, please check our Corporate plan." },
          ].map((faq, index) => (
            <div key={index} className="border-b border-border pb-6 last:border-0">
              <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
              <p className="text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Premium;
