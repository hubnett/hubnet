import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import familyStreaming from "@/assets/family-streaming.png";
import { Play, Monitor, Gamepad2, Video } from "lucide-react";

const streamingFeatures = [
  { icon: Play, title: "4K Streaming", desc: "Buffer-free entertainment" },
  { icon: Monitor, title: "Smart TV Ready", desc: "All platforms supported" },
  { icon: Gamepad2, title: "Online Gaming", desc: "Low latency gameplay" },
  { icon: Video, title: "Video Calls", desc: "Crystal clear quality" },
];

export function StreamingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-6 bg-background" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="rounded-4xl overflow-hidden shadow-card">
              <img
                src={familyStreaming}
                alt="Happy family enjoying streaming content"
                className="w-full h-auto"
              />
            </div>
            
            {/* Overlay badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 left-6 bg-charcoal text-primary-foreground rounded-2xl p-4 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                  <Play size={24} className="text-accent-foreground" fill="currentColor" />
                </div>
                <div>
                  <p className="font-bold">Stream Everything</p>
                  <p className="text-xs text-primary-foreground/60">No buffering, ever</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">Entertainment</span>
            <h2 className="heading-lg mt-4 mb-6">
              Stream, Game &amp;<br />Work Without Limits
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Whether you're streaming your favorite shows in 4K, competing in online games, or working from home — our high-speed internet keeps everyone connected.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {streamingFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="bg-secondary rounded-2xl p-4"
                >
                  <feature.icon size={24} className="text-accent mb-2" />
                  <h3 className="font-bold text-sm">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <a href="tel:+18559450333">Get Connected</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
