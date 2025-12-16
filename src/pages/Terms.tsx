import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="heading-lg mb-8"
            >
              Terms & Conditions
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-muted-foreground mb-6">Last updated: December 16, 2024</p>

              <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mb-8">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Important Notice:</span> HubNet is an independent third-party assistance platform. We are not an internet service provider, cable company, or streaming service. We are not affiliated with, endorsed by, or representing any service provider.
                </p>
              </div>

              <h2 className="heading-md mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing or using HubNet assistance services, you agree to be bound by these Terms & Conditions. If you do not agree to all the terms, you may not access or use our services.
              </p>

              <h2 className="heading-md mt-8 mb-4">2. Service Description</h2>
              <p className="text-muted-foreground mb-4">
                HubNet provides independent third-party assistance, guidance, and facilitation services to help consumers explore and connect with internet, cable, and streaming service providers. We do not sell, provide, or directly offer internet, cable, or streaming services. We are not affiliated with any service provider.
              </p>

              <h2 className="heading-md mt-8 mb-4">3. Service Fees</h2>
              <p className="text-muted-foreground mb-4">
                HubNet charges a separate service fee for our assistance and guidance services. This fee is independent of and in addition to any charges you may incur from service providers. You will be billed separately by your chosen service provider for their services.
              </p>

              <h2 className="heading-md mt-8 mb-4">3. Service Fees</h2>
              <p className="text-muted-foreground mb-4">
                HubNet charges a separate service fee for our assistance and guidance services. This fee is independent of and in addition to any charges you may incur from service providers. You will be billed separately by your chosen service provider for their services.
              </p>

              <h2 className="heading-md mt-8 mb-4">4. Account Responsibilities</h2>
              <p className="text-muted-foreground mb-4">
                You are responsible for maintaining the confidentiality of your account information with HubNet. We will never request your service provider account passwords or login credentials.
              </p>

              <h2 className="heading-md mt-8 mb-4">5. Acceptable Use</h2>
              <p className="text-muted-foreground mb-4">
                You agree to use our assistance services lawfully and not to misrepresent your relationship with us or any service provider. Our services are for personal assistance purposes only.
              </p>

              <h2 className="heading-md mt-8 mb-4">6. Provider Relationships</h2>
              <p className="text-muted-foreground mb-4">
                When you connect with a service provider through our assistance, you enter into a direct contractual relationship with that provider. We are not a party to that agreement. All service terms, pricing, and obligations are between you and the provider.
              </p>

              <h2 className="heading-md mt-8 mb-4">7. No Guarantees</h2>
              <p className="text-muted-foreground mb-4">
                We cannot guarantee service availability, pricing, speeds, or features from third-party providers. All service details must be confirmed directly with the provider. We are not responsible for provider service quality or performance.
              </p>

              <h2 className="heading-md mt-8 mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                HubNet shall not be liable for any issues arising from third-party services or provider relationships. Our liability is limited to the assistance services we provide directly.
              </p>

              <h2 className="heading-md mt-8 mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground">
                For questions about these Terms, please contact us at support@hubnet.com or call (855) 945-0333.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
