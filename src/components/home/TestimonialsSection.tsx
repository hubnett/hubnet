import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alan Baker",
    role: "Small Business Owner",
    content: "HubNet helped me navigate the complex world of business internet options. Their guidance was invaluable in finding the right provider for my needs.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Thomas Webb",
    role: "Remote Worker",
    content: "The assistance team was patient and thorough, explaining all my options without pressure. They made choosing a provider so much easier.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Sarah Mitchell",
    role: "Home Office Professional",
    content: "I appreciated the unbiased guidance. HubNet helped me understand what to look for in an internet provider without pushing any specific company.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Michael Chen",
    role: "Gamer & Streamer",
    content: "Their expertise helped me find a provider that met my gaming needs. The consultation was informative and helped me make an informed decision.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Emily Rodriguez",
    role: "Content Creator",
    content: "HubNet's guidance saved me hours of research. They helped me understand which upload speeds I needed for content creation.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "David Thompson",
    role: "Family Household",
    content: "With four kids, choosing the right internet was overwhelming. HubNet's assistance made the process simple and stress-free.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
  },
];

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-charcoal overflow-hidden">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <p className="text-accent text-xs sm:text-sm font-medium mb-2">Customer Experiences</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground">Helping You Find Solutions</h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const isLarge = index === 0 || index === 4;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-primary-foreground/10 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 ${
                  isLarge ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""
                }`}
              >
                <div className="flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-10 h-10 text-accent/30" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        fill="hsl(var(--sunny-yellow))" 
                        className="text-accent" 
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className={`text-neutral-900 mb-4 sm:mb-6 flex-grow ${
                    isLarge ? "text-base sm:text-lg" : "text-sm sm:text-base"
                  }`}>
                    {testimonial.content}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 sm:gap-4 mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-accent/20"
                    />
                    <div>
                      <p className="font-bold text-sm sm:text-base text-neutral-900">{testimonial.name}</p>
                      <p className="text-neutral-700 text-xs sm:text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">4.9/5</div>
            <div className="text-primary-foreground/60 text-xs sm:text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">10K+</div>
            <div className="text-primary-foreground/60 text-xs sm:text-sm">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">99%</div>
            <div className="text-primary-foreground/60 text-xs sm:text-sm">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">24/7</div>
            <div className="text-primary-foreground/60 text-xs sm:text-sm">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
