import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Are you an official cable or internet provider?",
    answer: "No, we are not. HubNet operates as an independent third-party assistance platform. We are not affiliated with, endorsed by, or representing any internet, cable, or streaming service provider. Our role is to help guide you through the process of finding and setting up services that may be available in your area."
  },
  {
    question: "Do you sell internet, cable, or streaming plans?",
    answer: "No, we do not sell plans directly. HubNet provides assistance and guidance services only. We help you understand your options, compare features, and facilitate connections with available service providers. You will contract directly with the provider you choose."
  },
  {
    question: "Do you charge for your services?",
    answer: "Yes, HubNet charges a separate service fee for our assistance and guidance services. This fee is for our consultation, setup support, and ongoing customer assistance. It is separate from and in addition to any charges you may incur from your chosen service provider."
  },
  {
    question: "Will I still be billed by my service provider?",
    answer: "Yes, absolutely. You will be billed directly by the service provider you select for their internet, cable, or streaming services. Our service fee is separate and covers only our assistance and guidance services. Your provider will handle all service-related billing independently."
  },
  {
    question: "Do you need my account passwords or sensitive information?",
    answer: "No, never. HubNet will never request your service provider account passwords, login credentials, or other sensitive authentication information. We only collect basic contact and address information necessary to help guide you to appropriate service options."
  },
  {
    question: "Which providers do you support?",
    answer: "We provide guidance for connecting with multiple internet, cable, and streaming service providers that may be available in your area. Provider availability varies by location. All provider names and trademarks are the property of their respective owners. We are not affiliated with or endorsed by any of these providers."
  },
  {
    question: "Are your services refundable?",
    answer: "Please refer to our Refund Policy page for complete details about our refund terms and conditions. We want to ensure you understand the scope of our assistance services before engaging with our platform."
  },
  {
    question: "How do I contact customer support?",
    answer: "You can reach our assistance team by phone at (855) 945-0333 or through our Contact page. Our team is available to help answer questions about our guidance services and how we can assist you."
  },
  {
    question: "What if I have issues with my internet or cable service?",
    answer: "For technical issues with your internet, cable, or streaming service, you will need to contact your service provider directly, as they manage and maintain the actual service. We can help guide you on how to reach them or assist with understanding your service agreement."
  },
  {
    question: "Can you guarantee service availability in my area?",
    answer: "No, we cannot guarantee service availability. Service availability depends entirely on the providers who operate in your specific location. We can help you explore what options may be available, but the final service availability and terms are determined by the providers themselves."
  }
];

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-muted-foreground text-lg">
                Get answers about our assistance services and how we can help you
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-3xl p-6 md:p-8 shadow-card"
            >
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-12 text-center"
            >
              <p className="text-muted-foreground mb-4">
                Still have questions?
              </p>
              <a 
                href="/contact"
                className="text-accent hover:text-accent/80 font-semibold"
              >
                Contact our assistance team
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
