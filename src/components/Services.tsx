import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import residentialImage from "@/assets/residential.jpg";
import commercialImage from "@/assets/commercial.jpg";
import plotsImage from "@/assets/plots.jpg";

const services = [
  {
    title: "Residential Projects",
    description:
      "We understand that your home is more than just a structure – it's a sanctuary, a reflection of your lifestyle and aspirations. Our expertise ensures every home is a masterpiece combining functionality with aesthetic appeal.",
    image: residentialImage,
    features: ["Luxury Apartments", "Gated Communities", "Custom Villas"],
  },
  {
    title: "Commercial Projects",
    description:
      "Our commitment to excellence extends beyond residential spaces to meet the dynamic needs of the commercial sector. We are your partner in creating innovative and functional business environments.",
    image: commercialImage,
    features: ["Office Complexes", "Retail Spaces", "Business Parks"],
  },
  {
    title: "Open Plots",
    description:
      "Tailored to your unique preferences, our open plots are located in premium areas with excellent connectivity. From investment to building your dream home, we offer plots that align with your vision.",
    image: plotsImage,
    features: ["Prime Locations", "Clear Titles", "Gated Layouts"],
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-medium uppercase tracking-wider text-sm">
            What We Offer
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground">
            Comprehensive real estate solutions tailored to your unique needs, 
            from dream homes to strategic investments.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-card rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                
                {/* Hover Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-5 h-5 text-accent-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="h-1 w-0 bg-gradient-gold group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
