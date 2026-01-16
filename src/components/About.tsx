import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import greenBuilding from "@/assets/green-building.jpg";
import safetyCulture from "@/assets/safety-culture.jpg";
import bridgeProject from "@/assets/bridge-project.jpg";

const values = [
  {
    image: greenBuilding,
    title: "A Green Builder",
    subtitle: "Operating responsibly",
    description: "As we apply our knowledge of green technology to assist our clients, we run our own business to support sustainable operations and building practices.",
    link: "#services",
  },
  {
    image: safetyCulture,
    title: "A Safety Culture",
    subtitle: '"No one gets hurt"',
    description: "This is our mantra and commitment in everything we do, every day. We continue to refine our safety processes, training and culture to achieve this goal.",
    link: "#commitment",
  },
  {
    image: bridgeProject,
    title: "An Active Citizen",
    subtitle: "Giving back",
    description: "We contribute to the communities where we live and work in a variety of ways, from financial support to giving our time, both as a company and as individuals.",
    link: "#commitment",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        {/* Main Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8">
            We are ASTEHE ULTIMATE SYNERGY.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            We're one of the largest and most established builders in Nigeria, with values and an approach 
            to business guided by our commitment to excellence and innovation. We come to work every day 
            to be the builder of choice for customers, the employer of choice for our people, and to set the 
            highest standards for ethics, quality and safety across West Africa.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden mb-6">
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="industrial-border pl-4">
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-1">
                  {value.title}
                </h3>
                <p className="font-condensed text-lg text-accent uppercase tracking-wide mb-3">
                  {value.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {value.description}
                </p>
                <a 
                  href={value.link}
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};