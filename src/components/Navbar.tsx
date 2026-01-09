import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, MapPin, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Our Company", href: "#about" },
  { name: "Our Experience", href: "#experience" },
  { name: "Our Services", href: "#services" },
  { name: "Our Commitment", href: "#commitment" },
  { name: "Your Career", href: "#careers" },
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
            <a href="#" className="hover:text-accent transition-colors font-medium">Equipment for Sale</a>
            <a href="#" className="hover:text-accent transition-colors font-medium">News & Media</a>
            <a href="#" className="hover:text-accent transition-colors font-medium">Bidding Opportunities</a>
            <a href="#contact" className="hover:text-accent transition-colors font-medium">Contact Us</a>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <MapPin className="w-4 h-4 text-accent" />
            <span>Change Location</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 lg:top-10 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/98 backdrop-blur-md shadow-lg lg:top-0"
            : "bg-background/95 backdrop-blur-sm"
        }`}
      >
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="relative flex items-center gap-2">
              <div className="flex items-center">
                <span className="font-display text-xl md:text-2xl lg:text-3xl text-primary tracking-wider">ATSEHE</span>
                <div className="mx-1.5 flex gap-0.5">
                  <div className="w-2 h-6 md:h-8 bg-accent transform -skew-x-12" />
                  <div className="w-2 h-6 md:h-8 bg-accent transform -skew-x-12" />
                </div>
                <span className="font-display text-xl md:text-2xl lg:text-3xl text-primary tracking-wider">SYNERGY</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-foreground/80 hover:text-accent transition-colors uppercase tracking-wide flex items-center gap-1"
              >
                {link.name}
                <ChevronDown className="w-4 h-4 opacity-60" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
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
                  className="text-foreground font-semibold py-2 hover:text-accent transition-colors uppercase tracking-wide"
                >
                  {link.name}
                </a>
              ))}
              <Button variant="green" className="mt-2">
                Contact Us
              </Button>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
};