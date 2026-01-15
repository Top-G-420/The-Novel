import { Link } from "react-router-dom";
import { Mail, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  sections: [
    { label: "Business", href: "/business" },
    { label: "Finance", href: "/finance" },
    { label: "Markets", href: "/markets" },
    { label: "Economy", href: "/economy" },
    { label: "Startups", href: "/startups" },
    { label: "Opinion", href: "/opinion" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Advertise", href: "/advertise" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">
              Stay Informed
            </h3>
            <p className="text-primary-foreground/70 mb-6">
              Get the latest business and finance news delivered to your inbox every morning.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-accent"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground shrink-0">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-accent-foreground font-serif font-bold text-xl">N</span>
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold">The Novel</h4>
                <p className="text-[10px] uppercase tracking-[0.15em] text-primary-foreground/60">
                  Business & Finance
                </p>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Your trusted source for Kenyan and international business, finance, and market news.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Sections */}
          <div>
            <h5 className="font-semibold mb-4 text-sm uppercase tracking-wider">Sections</h5>
            <ul className="space-y-2">
              {footerLinks.sections.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-semibold mb-4 text-sm uppercase tracking-wider">Company</h5>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h5>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} The Novel. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60">
            Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
