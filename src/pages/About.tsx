import { Users, Target, Award, Globe } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Accuracy First",
    description: "We verify every story and prioritize factual, unbiased reporting in all our coverage.",
  },
  {
    icon: Globe,
    title: "Local & Global",
    description: "Bridging Kenyan business with international markets to give you a complete picture.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards of journalism and professionalism.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a community of informed readers, investors, and business leaders.",
  },
];

const team = [
  {
    name: "Dr. Janet Muthoni",
    role: "Editor-in-Chief",
    bio: "Former economics editor at Nation Media Group with 20+ years in business journalism.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
  },
  {
    name: "Peter Odhiambo",
    role: "Managing Editor",
    bio: "Award-winning investigative journalist specializing in finance and corporate governance.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
  },
  {
    name: "Amina Yusuf",
    role: "Markets Editor",
    bio: "CFA charterholder with experience at leading investment banks in Nairobi and London.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            About The Novel
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto">
            Kenya's premier source for business and finance journalism, delivering accurate, insightful, and impactful reporting since 2024.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Novel exists to empower Kenyan investors, entrepreneurs, and business professionals with the information they need to make informed decisions. We believe that quality financial journalism is essential for a thriving economy and an informed citizenry.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-secondary py-16">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container py-16">
        <h2 className="font-serif text-3xl font-bold text-center mb-4">Leadership Team</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Our editorial team brings decades of experience in journalism, finance, and business.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-accent mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500K+</div>
              <div className="text-primary-foreground/70">Monthly Readers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-primary-foreground/70">Expert Journalists</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-primary-foreground/70">Articles Published</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15</div>
              <div className="text-primary-foreground/70">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
