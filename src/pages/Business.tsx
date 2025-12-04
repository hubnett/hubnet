import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Building2, Shield, Headphones, Zap, Check } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Dedicated Bandwidth",
    description: "Guaranteed speeds with no throttling during peak hours.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Advanced firewall, DDoS protection, and secure VPN options.",
  },
  {
    icon: Headphones,
    title: "24/7 Priority Support",
    description: "Dedicated account manager and 4-hour response SLA.",
  },
  {
    icon: Building2,
    title: "Scalable Solutions",
    description: "Grow your bandwidth as your business grows.",
  },
];

const BusinessPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 sm:mb-6">
                  Business-Grade<br />Connectivity
                </h1>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
                  Enterprise solutions built for reliability, security, and speed. Keep your business running at full capacity with our dedicated business plans.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <a href="tel:+18559450333">Get a Quote</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="tel:+18559450333">View Plans</a>
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-charcoal rounded-3xl sm:rounded-4xl p-8 sm:p-12 text-primary-foreground"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Business Pro</h3>
                <div className="mb-4 sm:mb-6">
                  <span className="text-4xl sm:text-5xl font-black">$199</span>
                  <span className="text-primary-foreground/60 text-sm sm:text-base">/mo</span>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {["Up to 10 Gbps", "99.99% Uptime SLA", "Static IP Included", "24/7 Priority Support", "Free Installation"].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check size={16} className="sm:hidden text-accent flex-shrink-0" />
                      <Check size={18} className="hidden sm:inline text-accent flex-shrink-0" />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="accent" className="w-full" asChild>
                  <a href="tel:+18559450333">Contact Sales</a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-secondary">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 sm:mb-12">Why Businesses Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl sm:rounded-3xl p-5 sm:p-6"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-accent/10 flex items-center justify-center mb-3 sm:mb-4">
                    <feature.icon size={20} className="sm:hidden text-accent" />
                    <feature.icon size={24} className="hidden sm:inline text-accent" />
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions with Images */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-md text-center mb-16"
            >
              Solutions For Every Industry
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3]"
              >
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
                  alt="Tech companies"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Tech & Startups</h3>
                  <p className="text-white/90 mb-4">High-speed connectivity for development teams, cloud services, and rapid scaling.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-accent" />
                      <span className="text-sm">Ultra-low latency</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-accent" />
                      <span className="text-sm">IPv6 ready</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3]"
              >
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
                  alt="Retail businesses"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Retail & E-commerce</h3>
                  <p className="text-white/90 mb-4">Reliable connectivity for POS systems, inventory management, and customer Wi-Fi.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-accent" />
                      <span className="text-sm">99.99% uptime</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-accent" />
                      <span className="text-sm">Guest network options</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3]"
              >
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop"
                  alt="Creative agencies"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Creative Agencies</h3>
                  <p className="text-white/90 mb-4">Fast uploads for large media files, video rendering, and client collaboration.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-accent" />
                      <span className="text-sm">Symmetrical speeds</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-accent" />
                      <span className="text-sm">Priority bandwidth</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3]"
              >
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                  alt="Professional services"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Professional Services</h3>
                  <p className="text-white/90 mb-4">Secure connectivity for law firms, accountants, and consultants.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-accent" />
                      <span className="text-sm">Enterprise security</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-accent" />
                      <span className="text-sm">VPN support</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-6 bg-charcoal text-primary-foreground">
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-md text-center mb-16"
            >
              What Business Leaders Say
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card/5 rounded-3xl p-8"
              >
                <p className="text-primary-foreground/90 italic mb-6">
                  "Since switching to HubNet Business, our productivity has increased significantly. The dedicated support team is always there when we need them."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
                    alt="CEO"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold">Marcus Johnson</p>
                    <p className="text-primary-foreground/60 text-sm">CEO, TechFlow Inc.</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card/5 rounded-3xl p-8"
              >
                <p className="text-primary-foreground/90 italic mb-6">
                  "The uptime guarantee is real. We haven't experienced a single outage in over a year. That's reliability you can count on."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face"
                    alt="Operations Manager"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold">Lisa Chen</p>
                    <p className="text-primary-foreground/60 text-sm">Operations Manager, Retail Plus</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent to-accent/80 rounded-4xl p-12 text-center text-accent-foreground"
            >
              <h2 className="heading-md mb-4">Ready to Upgrade Your Business?</h2>
              <p className="text-xl mb-8 text-accent-foreground/90">
                Get a custom quote tailored to your business needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-accent hover:bg-white/90" asChild>
                  <a href="tel:+18559450333">Contact Sales</a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <a href="tel:+18559450333">View All Plans</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessPage;
