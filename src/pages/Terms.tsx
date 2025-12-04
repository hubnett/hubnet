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
              <p className="text-muted-foreground mb-6">Last updated: December 1, 2024</p>

              <h2 className="heading-md mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing or using HubNet internet services, you agree to be bound by these Terms & Conditions. If you do not agree to all the terms, you may not access or use our services.
              </p>

              <h2 className="heading-md mt-8 mb-4">2. Service Description</h2>
              <p className="text-muted-foreground mb-4">
                HubNet provides internet connectivity services to residential and business customers. Service availability, speeds, and features vary by location and plan selection.
              </p>

              <h2 className="heading-md mt-8 mb-4">3. Account Responsibilities</h2>
              <p className="text-muted-foreground mb-4">
                You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use.
              </p>

              <h2 className="heading-md mt-8 mb-4">4. Acceptable Use</h2>
              <p className="text-muted-foreground mb-4">
                You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair our network or interfere with any other party's use of our services.
              </p>

              <h2 className="heading-md mt-8 mb-4">5. Billing and Payment</h2>
              <p className="text-muted-foreground mb-4">
                Service fees are billed monthly in advance. Payment is due upon receipt of invoice. Late payments may result in service suspension and additional fees.
              </p>

              <h2 className="heading-md mt-8 mb-4">6. Service Level Agreement</h2>
              <p className="text-muted-foreground mb-4">
                We strive to maintain 99.9% network uptime. Scheduled maintenance windows will be communicated in advance. Service credits may be available for extended outages as outlined in your service agreement.
              </p>

              <h2 className="heading-md mt-8 mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                HubNet shall not be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use our services.
              </p>

              <h2 className="heading-md mt-8 mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground">
                For questions about these Terms, please contact us at legal@hubnet.com or call (123) 456-7890.
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
