import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import heroConstruction from "@/assets/hero-construction.jpg";
import bridgeProject from "@/assets/bridge-project.jpg";
import waterTreatment from "@/assets/water-treatment.jpg";
import airportTerminal from "@/assets/airport-terminal.jpg";

const slides = [
  {
    id: 1,
    tag: "ATSEHE ULTIMATE SYNERGY",
    title: "Delivering Innovation",
    subtitle: "Building Nigeria's Future Infrastructure",
    image: heroConstruction,
    link: "#experience",
  },
  {
    id: 2,
    tag: "ATSEHE ULTIMATE SYNERGY",
    title: "Creating Connections",
    subtitle: "Nigeria's Premier Construction Partner",
    image: bridgeProject,
    link: "#experience",
  },
  {
    id: 3,
    tag: "ATSEHE ULTIMATE SYNERGY",
    title: "Strengthening Resources",
    subtitle: "Leading Infrastructure Development",
    image: waterTreatment,
    link: "#experience",
  },
  {
    id: 4,
    tag: "ATSEHE ULTIMATE SYNERGY",
    title: "Growing Careers",
    subtitle: "Professional and Trade Opportunities",
    image: airportTerminal,
    link: "#careers",
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-primary/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 h-full flex items-center pt-20">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-accent font-condensed text-lg tracking-[0.3em] uppercase mb-4">
                {slides[currentSlide].tag}
              </span>

              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-primary-foreground leading-none mb-4">
                {slides[currentSlide].title}
              </h1>

              <p className="font-condensed text-xl md:text-2xl lg:text-3xl text-primary-foreground/80 mb-8">
                {slides[currentSlide].subtitle}
              </p>

              <Button variant="heroOutline" size="lg" className="group">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container mx-auto px-6">
          {/* Navigation Arrows */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={prevSlide}
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <span className="text-primary-foreground font-condensed">prev</span>
            <span className="text-primary-foreground font-condensed ml-8">next</span>
            <button
              onClick={nextSlide}
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className={`text-left p-4 border-t-4 transition-all duration-300 ${
                  index === currentSlide
                    ? "border-accent bg-primary-foreground/10"
                    : "border-primary-foreground/20 hover:border-primary-foreground/40"
                }`}
              >
                <h3 className={`font-display text-lg md:text-xl ${
                  index === currentSlide ? "text-primary-foreground" : "text-primary-foreground/60"
                }`}>
                  {slide.title}
                </h3>
                <p className={`font-condensed text-sm mt-1 ${
                  index === currentSlide ? "text-primary-foreground/80" : "text-primary-foreground/40"
                }`}>
                  {slide.subtitle}
                </p>
              </button>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-accent w-8" : "bg-primary-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};