import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import fiberCables from "@/assets/fiber-cables.png";
import { Zap, Shield, Wifi, Globe } from "lucide-react";

const features = [
  { icon: Zap, label: "Ultra-fast speeds" },
  { icon: Shield, label: "Secure connection" },
  { icon: Wifi, label: "Whole-home coverage" },
  { icon: Globe, label: "Low latency" },
];

export function FiberTechnologySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-6 bg-charcoal overflow-hidden" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-4xl overflow-hidden">
              <motion.img
                src={fiberCables}
                alt="Fiber optic cables with glowing data streams"
                className="w-full h-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            {/* Floating speed badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-accent rounded-3xl p-6 shadow-glow"
            >
              <span className="text-3xl font-black text-accent-foreground">1 Gbps</span>
              <p className="text-sm text-accent-foreground/80">Download Speed</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary-foreground"
          >
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">Fiber Technology</span>
            <h2 className="heading-lg mt-4 mb-6">
              Next-Generation<br />Fiber Optic Network
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Our state-of-the-art fiber optic infrastructure delivers lightning-fast speeds directly to your home. Experience the future of connectivity with symmetrical upload and download speeds.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                    <feature.icon size={20} className="text-accent" />
                  </div>
                  <span className="text-sm font-medium">{feature.label}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="accent" size="lg" asChild>
              <a href="tel:+18559450333">Explore Fiber Plans</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
