import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";

const offices = [
  {
    name: "ATSEHE HEAD OFFICE",
    address: ["Plot 123 Ahmadu Bello Way", "Victoria Island, Lagos"],
    phone: "+234 1 234 5678",
    fax: "+234 1 234 5679",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7305!2d3.4226!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVmljdG9yaWEgSXNsYW5k!5e0!3m2!1sen!2sng!4v1234567890",
  },
  {
    name: "ABUJA OFFICE",
    address: ["15 Maitama District", "FCT, Abuja"],
    phone: "+234 9 876 5432",
    fax: "+234 9 876 5433",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.0!2d7.4951!3d9.0765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTWFpdGFtYQ!5e0!3m2!1sen!2sng!4v1234567890",
  },
  {
    name: "PORT HARCOURT OFFICE",
    address: ["42 Trans Amadi Road", "Port Harcourt, Rivers State"],
    phone: "+234 84 123 4567",
    fax: "",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.5!2d7.0134!3d4.8156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUG9ydCBIYXJjb3VydA!5e0!3m2!1sen!2sng!4v1234567890",
  },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
    }
  };

  return (
    <section id="contact" className="bg-primary" ref={ref}>
      {/* Newsletter Section */}
      <div className="section-padding border-b border-primary-foreground/10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">
              Stay Up-to-Date
            </h2>
            <p className="text-primary-foreground/70 mb-8">
              Subscribe to our monthly newsletter for updates on news and events.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 flex-1"
              />
              <Button variant="green" type="submit">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Offices Grid */}
      <div className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {offices.map((office) => (
              <div key={office.name} className="text-center md:text-left">
                {/* Map Embed */}
                <div className="w-full h-40 mb-6 overflow-hidden rounded">
                  <iframe
                    src={office.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${office.name} Map`}
                  />
                </div>
                
                <h3 className="font-condensed text-lg font-semibold text-primary-foreground uppercase tracking-wide mb-4">
                  {office.name}
                </h3>
                
                <div className="space-y-1 text-primary-foreground/70 mb-4">
                  {office.address.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                
                {office.phone && (
                  <div className="space-y-1 text-primary-foreground/70">
                    <p>T: {office.phone}</p>
                    {office.fax && <p>F: {office.fax}</p>}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};