import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, User, ChevronDown, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import AccountModal from "@/components/auth/AccountModal";

const mainNavItems = [
  { label: "Home", href: "/" },
  { label: "Business", href: "/business" },
  { label: "Finance", href: "/finance" },
  {
    label: "Markets",
    href: "/markets",
    submenu: [
      { label: "Stocks", href: "/markets/stocks" },
      { label: "Currencies", href: "/markets/currencies" },
      { label: "Crypto", href: "/markets/crypto" },
    ],
  },
  { label: "Economy", href: "/economy" },
  { label: "Startups", href: "/startups" },
  { label: "Opinion", href: "/opinion" },
  { label: "Videos", href: "/videos" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const { user, isAuthenticated, isAdmin } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between py-2 text-sm">
          <div className="hidden md:flex items-center gap-4">
            <span className="font-medium">Breaking:</span>
            <span className="text-primary-foreground/80">
              Kenya's Central Bank holds rates steady amid inflation concerns
            </span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <Link to="/premium" className="hover:text-accent transition-colors font-medium">
              Premium
            </Link>
            <Link to="/about" className="hover:text-primary-foreground/80 transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-primary-foreground/80 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center">
              <span className="text-accent-foreground font-serif font-bold text-xl">N</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-2xl font-bold text-foreground tracking-tight">
                The Novel
              </h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground -mt-0.5">
                Business & Finance
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNavItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  to={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="w-3 h-3" />}
                </Link>
                {item.submenu && (
                  <AnimatePresence>
                    {activeSubmenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 w-48 bg-card rounded-md shadow-lg border border-border py-2"
                      >
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.label}
                            to={subitem.href}
                            className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary transition-colors"
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="default" className="hidden sm:flex bg-accent hover:bg-accent/90 text-accent-foreground">
              Subscribe
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <nav className="container py-4 space-y-1">
              {mainNavItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="block py-3 px-4 text-foreground font-medium hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          to={subitem.href}
                          className="block py-2 px-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Subscribe Now
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
