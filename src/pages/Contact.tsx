import { motion } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Check, Phone } from "lucide-react";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

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
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
            >
              Have questions about our assistance services? We're here to guide you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-accent/10 border border-accent/20 rounded-xl p-3 mt-6 max-w-2xl mx-auto"
            >
              <p className="text-xs sm:text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">New Startup:</span> HubNet is an independent assistance platform launched in 2025. We are not affiliated with any service provider.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="pb-20 px-6">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-card rounded-4xl p-8 shadow-card"
              >
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check size={32} className="text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Thank you!</h3>
                    <p className="text-muted-foreground">We'll be in touch soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="rounded-xl h-12"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                        <Input
                          id="phone"
                          placeholder="Your phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="rounded-xl h-12"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="rounded-xl h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                      <Textarea
                        id="message"
                        placeholder="How can we help?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="rounded-xl min-h-[120px]"
                      />
                    </div>
                    <Button type="submit" variant="accent" className="w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                )}
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="heading-md mb-6">We're Here to Help</h3>
                  <div className="space-y-6">
                    <div className="p-6 bg-secondary rounded-2xl">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                        <Phone size={24} className="text-accent" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Request Assistance</h4>
                      <p className="text-muted-foreground">Our guidance team is available to help you explore service options.</p>
                    </div>
                    <div className="p-6 bg-secondary rounded-2xl">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                        <Check size={24} className="text-accent" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Quick Response</h4>
                      <p className="text-muted-foreground">We respond to all inquiries within 24 hours during business days.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
