import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.jpg";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative min-h-screen pt-16 md:pt-20 overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.9, 0.24, 1] }}
            className="order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-muted-foreground mb-3 md:mb-4 text-xs sm:text-sm tracking-wide uppercase"
            >
              Internet & Cable Connection Assistance
            </motion.p>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 md:mb-6">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block"
              >
                Get Help
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="block text-accent"
              >
                Finding Internet
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="block"
              >
                &amp; Cable Services
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-base sm:text-lg text-muted-foreground mb-4 md:mb-6 max-w-lg"
            >
              We're a new startup helping people understand and compare internet, cable, and streaming options. Our goal is to make the research process simpler and more transparent.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="bg-accent/10 border border-accent/20 rounded-xl p-3 mb-6 md:mb-8 max-w-lg"
            >
              <p className="text-xs sm:text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">New Platform:</span> HubNet is an independent third-party assistance startup launched in 2025. We are not affiliated with or endorsed by any service provider.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <a href="tel:+18559450333">Get Assistance</a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="tel:+18559450333">Speak With Support</a>
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center justify-between gap-4 sm:gap-6 mt-8 md:mt-10 pt-6 md:pt-8 border-t border-border"
            >
              <div className="text-center">
                <span className="text-xl sm:text-2xl font-black text-accent">Free</span>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Consultation</p>
              </div>
              <div className="w-px h-8 sm:h-10 bg-border" />
              <div className="text-center">
                <span className="text-xl sm:text-2xl font-black text-accent">Multiple</span>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Providers</p>
              </div>
              <div className="w-px h-8 sm:h-10 bg-border" />
              <div className="text-center">
                <span className="text-xl sm:text-2xl font-black text-accent">24/7</span>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Guidance</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 0.9, 0.24, 1] }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              {/* Background circle */}
              <motion.div
                style={{ y, scale }}
                className="absolute inset-0 bg-charcoal rounded-full"
              />
              
              {/* Decorative wavy line */}
              <div className="absolute bottom-8 left-0 right-0 h-6 wavy-line z-10" />
              
              {/* Portrait */}
              <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
                className="relative z-10 overflow-hidden rounded-full aspect-square"
              >
                <img
                  src={heroImage}
                  alt="Professional internet technician"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8 w-16 h-16"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z"
                    fill="hsl(var(--sunny-yellow))"
                  />
                </svg>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-12 w-8 h-8"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="40" fill="hsl(var(--sunny-yellow))" />
                </svg>
              </motion.div>

              {/* Wifi signal icon */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 -right-8 w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-glow"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                  <path d="M12 20h.01M8.5 16.5a5 5 0 017 0M5 13a10 10 0 0114 0M1.5 9.5a15 15 0 0121 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
