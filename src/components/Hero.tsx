import { motion } from "framer-motion";
import { ArrowRight, Building2, Home, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-building.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern luxury building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-32 lg:pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Somajiguda, Hyderabad
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-7xl text-primary-foreground leading-tight mb-6"
          >
            Building Dreams,{" "}
            <span className="text-gradient-gold">Creating Legacies</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl"
          >
            Your trusted partner in turning real estate aspirations into reality. 
            Excellence in residential and commercial construction since our foundation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="gold" size="lg" className="group">
              Explore Projects
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="lg">
              Schedule Consultation
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { icon: Building2, number: "50+", label: "Projects Completed" },
            { icon: Home, number: "200+", label: "Happy Families" },
            { icon: MapPin, number: "15+", label: "Prime Locations" },
            { icon: Building2, number: "10+", label: "Years Experience" },
          ].map((stat, index) => (
            <div key={index} className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                <stat.icon className="w-6 h-6 text-accent" />
                <span className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold">
                  {stat.number}
                </span>
              </div>
              <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-accent rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};
