import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import installationImg from "@/assets/installation.png";
import { MapPin, Calendar, Wrench, Wifi } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Check Coverage",
    description: "Enter your address to see available plans in your area.",
    color: "bg-accent",
  },
  {
    icon: Calendar,
    title: "Choose Your Plan",
    description: "Select the perfect speed and features for your household.",
    color: "bg-charcoal",
  },
  {
    icon: Wrench,
    title: "Free Installation",
    description: "Our certified technicians install your service at no cost.",
    color: "bg-accent",
  },
  {
    icon: Wifi,
    title: "Get Connected",
    description: "Start enjoying blazing-fast internet within 48 hours.",
    color: "bg-charcoal",
  },
];

export function HowItWorksSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-6 bg-background" ref={ref}>
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">How It Works</span>
          <h2 className="heading-lg mt-4">Get Connected in 4 Easy Steps</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15 + 0.2, duration: 0.5 }}
                className="flex gap-4 items-start"
              >
                <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center flex-shrink-0 ${step.color === 'bg-charcoal' ? 'text-primary-foreground' : 'text-accent-foreground'}`}>
                  <step.icon size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold text-accent">Step {index + 1}</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Installation Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-4xl overflow-hidden shadow-card">
              <img
                src={installationImg}
                alt="Professional technician installing internet service"
                className="w-full h-auto"
              />
            </div>
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full px-6 py-3 shadow-glow"
            >
              <span className="font-bold">Free Setup!</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
