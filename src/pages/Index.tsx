import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { FiberTechnologySection } from "@/components/home/FiberTechnologySection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { StreamingSection } from "@/components/home/StreamingSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { SpeedTestSection } from "@/components/home/SpeedTestSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ContactSection } from "@/components/home/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FiberTechnologySection />
        <ServicesSection />
        <WhyChooseUsSection />
        <StreamingSection />
        <HowItWorksSection />
        <SpeedTestSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
