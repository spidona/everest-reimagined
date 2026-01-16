import { Facebook, Linkedin, Instagram, Youtube, ArrowUp } from "lucide-react";

const footerLinks = [
  { name: "Our Company", href: "#about" },
  { name: "Our Experience", href: "#experience" },
  { name: "Our Services", href: "#services" },
  { name: "Our Commitment", href: "#commitment" },
  { name: "Your Career", href: "#careers" },
  { name: "News & Media", href: "#" },
  { name: "Bidding Opportunities", href: "#" },
  { name: "Equipment For Sale", href: "#" },
  { name: "Contact Us", href: "#contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary border-t border-primary-foreground/10">
      <div className="container mx-auto px-6 py-12">
        {/* Links Grid */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-primary-foreground/70 hover:text-accent transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="w-10 h-10 bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors group"
            >
              <social.icon className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground transition-colors" />
            </a>
          ))}
        </div>

        {/* Legal */}
        <div className="text-center text-primary-foreground/50 text-sm space-y-4">
          <p>
            ©{new Date().getFullYear()} ASTEHE ULTIMATE SYNERGY. Equal Opportunity Employer. 
            All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-accent transition-colors">Contact Us</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-4 flex justify-end">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-accent-foreground" />
          </button>
        </div>
      </div>
    </footer>
  );
};