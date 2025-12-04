import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Users, Award, Heart, Zap, Target, Shield, Lightbulb, TrendingUp } from "lucide-react";

const values = [
  { icon: Heart, title: "Customer First", description: "Every decision starts with what's best for you." },
  { icon: Zap, title: "Innovation", description: "Constantly improving our network and services." },
  { icon: Users, title: "Community", description: "We're your neighbors, invested in local success." },
  { icon: Award, title: "Excellence", description: "Committed to the highest quality in everything." },
];

const timeline = [
  { year: "2014", title: "Company Founded", description: "Started with a vision to revolutionize internet connectivity" },
  { year: "2016", title: "First 1000 Customers", description: "Reached our first major milestone in customer growth" },
  { year: "2019", title: "Fiber Network Expansion", description: "Deployed fiber optic infrastructure across the region" },
  { year: "2022", title: "Award-Winning Service", description: "Recognized as Best ISP Provider by Tech Review" },
  { year: "2025", title: "10,000+ Connected", description: "Serving over 10,000 homes and businesses" },
];

const achievements = [
  { icon: Users, value: "10K+", label: "Active Customers" },
  { icon: Target, value: "99.9%", label: "Uptime Guarantee" },
  { icon: Shield, value: "24/7", label: "Customer Support" },
  { icon: TrendingUp, value: "500+", label: "Miles of Fiber" },
];

const AboutPage = () => {
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
              About HubNet
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
            >
              We're on a mission to make fast, reliable internet accessible to everyone. Since 2014, we've been connecting communities with the technology they deserve.
            </motion.p>
          </div>
        </section>

        {/* Story */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-charcoal text-primary-foreground">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">Our Story</h2>
                <p className="text-sm sm:text-base text-primary-foreground/80 mb-4">
                  Founded by a team of tech enthusiasts frustrated with slow, unreliable internet, HubNet was born from a simple idea: everyone deserves great connectivity.
                </p>
                <p className="text-primary-foreground/80">
                  Today, we serve over 2,000 homes and businesses with fiber-fast speeds and friendly, local support. We're not just an internet provider — we're your neighbors.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-accent rounded-4xl aspect-video flex items-center justify-center"
              >
                <span className="text-6xl font-black text-accent-foreground">10+ Years</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 sm:mb-12">Our Values</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <value.icon size={20} className="sm:hidden text-accent" />
                    <value.icon size={28} className="hidden sm:inline text-accent" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="py-20 px-6 bg-secondary">
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-md text-center mb-16"
            >
              See Us In Action
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group"
              >
                <img
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=800&fit=crop"
                  alt="Team at work"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-3xl overflow-hidden group aspect-square"
              >
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop"
                  alt="Office culture"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="rounded-3xl overflow-hidden group aspect-square"
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="rounded-3xl overflow-hidden group aspect-square"
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop"
                  alt="Innovation"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="rounded-3xl overflow-hidden group aspect-square"
              >
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=400&fit=crop"
                  alt="Technology"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-md text-center mb-16"
            >
              Our Journey
            </motion.h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/20 md:left-1/2" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <div className="ml-16 md:ml-0 bg-card rounded-2xl p-6 border border-border hover:border-accent transition-colors">
                      <div className="text-accent font-bold text-sm mb-2">{item.year}</div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-8 w-4 h-4 bg-accent rounded-full border-4 border-background md:left-1/2 md:-ml-2" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Stats */}
        <section className="py-20 px-6 bg-gradient-to-br from-accent to-accent/80">
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-md text-center mb-16 text-accent-foreground"
            >
              Our Impact By The Numbers
            </motion.h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon size={32} className="text-accent-foreground" />
                  </div>
                  <div className="text-4xl font-bold text-accent-foreground mb-2">{achievement.value}</div>
                  <div className="text-accent-foreground/80 text-sm">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 px-6 bg-charcoal text-primary-foreground">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Lightbulb className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="heading-md mb-6">Our Mission</h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
                "To empower communities with lightning-fast, reliable internet connectivity that enables 
                dreams, fuels innovation, and brings people closer together."
              </p>
              <div className="w-24 h-1 bg-accent mx-auto" />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
