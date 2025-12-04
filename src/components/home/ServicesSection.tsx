import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Wifi, Building2, Router, Tv, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Residential Plans",
    description: "High-speed internet for your home with unlimited data and 24/7 support.",
    icon: Wifi,
    href: "/plans",
    color: "bg-accent",
  },
  {
    title: "Business Solutions",
    description: "Enterprise-grade connectivity with dedicated support and SLA guarantees.",
    icon: Building2,
    href: "/business",
    color: "bg-charcoal",
  },
  {
    title: "Managed Wi-Fi",
    description: "Professional installation and management of your wireless network.",
    icon: Router,
    href: "/plans",
    color: "bg-accent",
  },
  {
    title: "TV & Bundles",
    description: "Stream your favorite content with our all-in-one entertainment packages.",
    icon: Tv,
    href: "/plans",
    color: "bg-charcoal",
  },
];

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start mb-12 sm:mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Our Comprehensive<br />Internet Plans
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-sm sm:text-base md:text-lg"
          >
            From fiber to wireless and property solutions, we offer a wide range of internet plans tailored to power what matters most to you. Explore our flexible and affordable options, designed to provide peace of mind in every aspect of your life.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
            >
              <Link
                to={service.href}
                className={`group block p-6 sm:p-8 rounded-3xl sm:rounded-4xl transition-all duration-500 hover:-translate-y-2 ${
                  service.color === "bg-accent"
                    ? "bg-accent text-accent-foreground"
                    : "bg-charcoal text-primary-foreground"
                }`}
              >
                <div className="flex items-start justify-between mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-bold max-w-[150px] sm:max-w-[200px]">{service.title}</h3>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -10 }}
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center ${
                      service.color === "bg-accent"
                        ? "bg-accent-foreground/10"
                        : "bg-primary-foreground/10"
                    }`}
                  >
                    <service.icon size={24} className="sm:hidden" />
                    <service.icon size={32} className="hidden sm:inline" />
                  </motion.div>
                </div>
                <p className={`mb-4 sm:mb-6 text-sm sm:text-base ${
                  service.color === "bg-accent"
                    ? "text-accent-foreground/80"
                    : "text-primary-foreground/70"
                }`}>
                  {service.description}
                </p>
                <div className="flex items-center gap-2 font-semibold group-hover:gap-4 transition-all">
                  <span>Learn more</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
