import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919949505134" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 9949505134</span>
            </a>
            <a href="mailto:info@everestdevelopers.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@everestdevelopers.com</span>
            </a>
          </div>
          <div className="text-muted-foreground">
            Somajiguda, Hyderabad
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 lg:top-10 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md lg:top-0"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-gold rounded flex items-center justify-center">
                <span className="font-serif text-xl font-bold text-primary-foreground">E</span>
              </div>
            </div>
            <div className={`hidden sm:block ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
              <span className="font-serif text-xl font-semibold tracking-tight">EVEREST</span>
              <p className="text-xs tracking-[0.2em] uppercase opacity-80">Constructions</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-accent ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button variant="gold" size="sm">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground font-medium py-2 hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button variant="gold" className="mt-2">
                Get Quote
              </Button>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
};
