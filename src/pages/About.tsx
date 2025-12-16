import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Users, Award, Heart, Zap, Target, Shield, Lightbulb, TrendingUp } from "lucide-react";

const values = [
  { icon: Heart, title: "User First", description: "Your needs guide every decision we make." },
  { icon: Lightbulb, title: "Transparency", description: "Clear, honest information about how we work." },
  { icon: Shield, title: "Independence", description: "Unbiased guidance with no provider allegiance." },
  { icon: TrendingUp, title: "Growth", description: "Learning and improving our platform daily." },
];

const timeline = [
  { year: "2025", title: "Platform Launched", description: "HubNet starts as an independent assistance platform" },
  { year: "Q1 2025", title: "Core Features", description: "Built our guidance and comparison tools" },
  { year: "Q2 2025", title: "User Feedback", description: "Actively learning from early users to improve" },
  { year: "Q3 2025", title: "Service Expansion", description: "Added more provider references and resources" },
  { year: "Q4 2025", title: "Growing", description: "Helping more people navigate service options" },
];

const achievements = [
  { icon: Users, value: "2025", label: "Year Launched" },
  { icon: Target, value: "100%", label: "Independent" },
  { icon: Shield, value: "24/7", label: "Guidance Available" },
  { icon: Lightbulb, value: "New", label: "Always Learning" },
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
              A new kind of service platform, launched in 2025 to help consumers navigate the complex world of internet, cable, and streaming options. We're here to guide, not sell.
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
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">Our Mission</h2>
                <p className="text-sm sm:text-base text-primary-foreground/80 mb-4">
                  Launched in 2025, HubNet was created to solve a simple problem: finding and comparing internet and cable services is confusing and time-consuming. We built this platform to make it easier.
                </p>
                <p className="text-primary-foreground/80">
                  As an independent startup, we provide unbiased guidance to help you understand your options. We're learning and improving every day, focused on making the process transparent and user-friendly.
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
