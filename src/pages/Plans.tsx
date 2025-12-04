import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Basic",
    speed: "100 Mbps",
    price: 39,
    features: ["Unlimited Data", "Wi-Fi Router Included", "24/7 Support", "1 TV Box"],
    popular: false,
  },
  {
    name: "Pro",
    speed: "500 Mbps",
    price: 69,
    features: ["Unlimited Data", "Premium Wi-Fi Router", "Priority Support", "2 TV Boxes", "Free Installation"],
    popular: true,
  },
  {
    name: "Ultra",
    speed: "1 Gbps",
    price: 99,
    features: ["Unlimited Data", "Mesh Wi-Fi System", "Dedicated Support", "4 TV Boxes", "Free Installation", "Static IP"],
    popular: false,
  },
];

const PlansPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <div className="container mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6"
            >
              Choose Your Perfect Plan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
            >
              Fast, reliable internet for every need. All plans include unlimited data and no hidden fees.
            </motion.p>
          </div>
        </section>

        {/* Plans Grid */}
        <section className="pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
          <div className="container mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className={`relative rounded-2xl sm:rounded-3xl lg:rounded-4xl p-6 sm:p-8 ${
                    plan.popular
                      ? "bg-charcoal text-primary-foreground"
                      : "bg-card border border-border"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1">
                      <Star size={12} className="sm:hidden" fill="currentColor" />
                      <Star size={14} className="hidden sm:inline" fill="currentColor" /> Best Value
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <Zap size={16} className="sm:hidden text-accent" />
                      <Zap size={18} className="hidden sm:inline text-accent" />
                      <span className="text-sm sm:text-base font-semibold">{plan.speed}</span>
                    </div>
                    <div className="mt-4">
                      <span className="text-3xl sm:text-4xl font-black">${plan.price}</span>
                      <span className={plan.popular ? "text-primary-foreground/60" : "text-muted-foreground"}>/mo</span>
                    </div>
                  </div>
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check size={16} className="sm:hidden text-accent flex-shrink-0" />
                        <Check size={18} className="hidden sm:inline text-accent flex-shrink-0" />
                        <span className={`text-sm sm:text-base ${plan.popular ? "text-primary-foreground/80" : ""}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.popular ? "accent" : "outline"}
                    className="w-full"
                    asChild
                  >
                    <a href="tel:+18559450333">Get Started</a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-secondary">
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 sm:mb-12"
            >
              Compare All Features
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-8 overflow-x-auto"
            >
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Feature</th>
                    <th className="text-center py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Basic</th>
                    <th className="text-center py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Pro</th>
                    <th className="text-center py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base">Ultra</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm">Download Speed</td>
                    <td className="text-center py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm">100 Mbps</td>
                    <td className="text-center py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm">500 Mbps</td>
                    <td className="text-center py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm">1 Gbps</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm">Upload Speed</td>
                    <td className="text-center py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm">50 Mbps</td>
                    <td className="text-center py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm">250 Mbps</td>
                    <td className="text-center py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm">500 Mbps</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4">Wi-Fi Router</td>
                    <td className="text-center py-4 px-4"><Check className="mx-auto text-accent" size={20} /></td>
                    <td className="text-center py-4 px-4"><Check className="mx-auto text-accent" size={20} /></td>
                    <td className="text-center py-4 px-4"><Check className="mx-auto text-accent" size={20} /></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4">TV Boxes</td>
                    <td className="text-center py-4 px-4">1</td>
                    <td className="text-center py-4 px-4">2</td>
                    <td className="text-center py-4 px-4">4</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4">Free Installation</td>
                    <td className="text-center py-4 px-4">-</td>
                    <td className="text-center py-4 px-4"><Check className="mx-auto text-accent" size={20} /></td>
                    <td className="text-center py-4 px-4"><Check className="mx-auto text-accent" size={20} /></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">Static IP</td>
                    <td className="text-center py-4 px-4">-</td>
                    <td className="text-center py-4 px-4">-</td>
                    <td className="text-center py-4 px-4"><Check className="mx-auto text-accent" size={20} /></td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* Use Cases with Images */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-md text-center mb-16"
            >
              Perfect For Every Need
            </motion.h2>
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group"
              >
                <div className="relative rounded-3xl overflow-hidden mb-6 aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
                    alt="Remote work"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-xl mb-1">Remote Work</h3>
                  </div>
                </div>
                <p className="text-muted-foreground">Perfect for video calls, cloud apps, and large file uploads. Recommended: Pro or Ultra</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group"
              >
                <div className="relative rounded-3xl overflow-hidden mb-6 aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop"
                    alt="Gaming and streaming"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-xl mb-1">Gaming & Streaming</h3>
                  </div>
                </div>
                <p className="text-muted-foreground">Low latency for competitive gaming and 4K streaming. Recommended: Ultra</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group"
              >
                <div className="relative rounded-3xl overflow-hidden mb-6 aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1609619385002-89d2bb48f7e0?w=800&h=600&fit=crop"
                    alt="Family browsing"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-xl mb-1">Family Browsing</h3>
                  </div>
                </div>
                <p className="text-muted-foreground">Multiple devices, streaming, and browsing simultaneously. Recommended: Basic or Pro</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 bg-charcoal text-primary-foreground">
          <div className="container mx-auto max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-md text-center mb-12"
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card/5 rounded-2xl p-6"
              >
                <h3 className="font-bold text-lg mb-2">Is there a data cap?</h3>
                <p className="text-primary-foreground/80">No! All our plans include unlimited data with no throttling or overage fees.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card/5 rounded-2xl p-6"
              >
                <h3 className="font-bold text-lg mb-2">Can I upgrade or downgrade my plan?</h3>
                <p className="text-primary-foreground/80">Yes! You can change your plan anytime. Changes take effect the next billing cycle.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card/5 rounded-2xl p-6"
              >
                <h3 className="font-bold text-lg mb-2">What's included in installation?</h3>
                <p className="text-primary-foreground/80">Our technicians will set up your router, run fiber to your home, and ensure everything is working perfectly.</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PlansPage;
