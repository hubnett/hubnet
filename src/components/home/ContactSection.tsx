import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, Clock, MessageCircle, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    icon: Phone,
    title: "Request Assistance",
    description: "Mon-Fri from 8am to 8pm",
    contact: "Call for guidance",
    action: "/contact",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: MessageCircle,
    title: "Ask Questions",
    description: "Get answers about service options",
    contact: "Start a conversation",
    action: "/contact",
    color: "bg-green-500/10 text-green-500",
  },
  {
    icon: Headphones,
    title: "Guidance Team",
    description: "Expert help exploring your options",
    contact: "We're here to assist",
    action: "/contact",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "Fast turnaround on all inquiries",
    contact: "Replies within 24 hours",
    action: "/contact",
    color: "bg-orange-500/10 text-orange-500",
  },
];

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <p className="text-accent text-xs sm:text-sm font-medium mb-2">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4">Let's Connect</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Questions about how we can help? We're a new startup, and we'd love to hear your feedback and assist with your service research.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group cursor-pointer"
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${method.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                <method.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-bold text-base sm:text-lg mb-2">{method.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-3">{method.description}</p>
              <p className="text-foreground font-medium text-xs sm:text-sm">{method.contact}</p>
            </motion.div>
          ))}
        </div>

        {/* Support Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16"
        >
          <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center border border-border">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
            </div>
            <h3 className="font-bold text-lg sm:text-xl mb-2">24/7 Guidance</h3>
            <p className="text-sm sm:text-base text-muted-foreground">Our assistance team is available to guide you</p>
          </div>
          <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center border border-border">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
            </div>
            <h3 className="font-bold text-xl mb-2">Instant Messaging</h3>
            <p className="text-muted-foreground">Get quick answers through our live chat platform</p>
          </div>
          <div className="bg-card rounded-2xl p-8 text-center border border-border">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Headphones className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-bold text-xl mb-2">Expert Assistance</h3>
            <p className="text-muted-foreground">Knowledgeable staff ready to help with any questions</p>
          </div>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-gradient-to-br from-accent to-accent/80 rounded-3xl p-8 md:p-12 text-center"
        >
          <Phone className="w-16 h-16 mx-auto mb-6 text-accent-foreground" />
          <h3 className="heading-md text-accent-foreground mb-4">Ready for Assistance?</h3>
          <p className="text-accent-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            We're here to answer questions and provide guidance on service options in your area. As a new platform, we value every conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-accent hover:bg-white/90" asChild>
              <a href="tel:+18559450333">Request Help</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href="tel:+18559450333">Speak With Support</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}