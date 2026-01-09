import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Shield, Users, CheckCircle2 } from "lucide-react";
import residentialImage from "@/assets/residential.jpg";

const features = [
  "Premium Quality Construction",
  "On-Time Project Delivery",
  "Transparent Pricing",
  "Expert Architecture Team",
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={residentialImage}
                alt="Luxury residential interior"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-sm shadow-lg"
              />
              {/* Accent Box */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-gold rounded-sm flex items-center justify-center p-6 shadow-lg">
                <div className="text-center text-primary-foreground">
                  <span className="font-serif text-4xl font-bold block">10+</span>
                  <span className="text-sm uppercase tracking-wider">Years of Excellence</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-accent font-medium uppercase tracking-wider text-sm">About Us</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-6 gold-underline pb-4">
              Everest Constructions & Developers
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Welcome to Everest Construction and Developers, your trusted partner in turning 
              real estate aspirations into reality. Nestled in the vibrant neighborhood of 
              Somajiguda, adjacent to the Park Hotel, we stand as a beacon of excellence in 
              the construction and real estate industry.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We bring dreams to life through our unwavering commitment to excellence. 
              Our comprehensive range of services is designed to cater to both residential 
              and commercial needs, setting us apart as a versatile and reliable partner 
              in your real estate journey.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: Award, label: "Quality Assured" },
                { icon: Shield, label: "Trusted Partner" },
                { icon: Users, label: "Expert Team" },
              ].map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <badge.icon className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
