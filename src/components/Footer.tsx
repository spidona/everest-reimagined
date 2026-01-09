import { Facebook, Instagram, Youtube, Linkedin, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-dark text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-gold rounded flex items-center justify-center">
                <span className="font-serif text-xl font-bold text-primary-foreground">E</span>
              </div>
              <div>
                <span className="font-serif text-xl font-semibold">EVEREST</span>
                <p className="text-xs tracking-[0.2em] uppercase opacity-70">Constructions & Developers</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-md mb-6">
              Your trusted partner in turning real estate aspirations into reality. 
              Building dreams and creating legacies since our foundation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 rounded flex items-center justify-center hover:bg-accent transition-colors group"
                >
                  <social.icon className="w-5 h-5 group-hover:text-accent-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>Somajiguda, Hyderabad</li>
              <li>Adjacent to Park Hotel</li>
              <li>+91 9949505134</li>
              <li>info@everestdevelopers.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Everest Constructions & Developers. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-accent rounded flex items-center justify-center hover:bg-accent/80 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-accent-foreground" />
          </button>
        </div>
      </div>
    </footer>
  );
};
