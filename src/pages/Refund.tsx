import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const RefundPage = () => {
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
              Refund Policy
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
                  <span className="font-semibold text-foreground">Important Notice:</span> This refund policy applies only to HubNet's assistance service fees. It does not apply to charges from third-party service providers. Contact your provider directly for their refund policies.
                </p>
              </div>

              <h2 className="heading-md mt-8 mb-4">1. Service Fee Refunds</h2>
              <p className="text-muted-foreground mb-4">
                Refunds for HubNet's assistance service fees may be requested within 30 days of payment if you are unsatisfied with the guidance services we provided. To request a refund, contact our support team at (855) 945-0333.
              </p>

              <h2 className="heading-md mt-8 mb-4">2. Third-Party Provider Charges</h2>
              <p className="text-muted-foreground mb-4">
                HubNet cannot issue refunds for charges billed by internet, cable, or streaming service providers. You will need to contact your service provider directly regarding their billing and refund policies. We are not a party to your agreement with them.
              </p>

              <h2 className="heading-md mt-8 mb-4">3. Consultation Fees</h2>
              <p className="text-muted-foreground mb-4">
                If you engaged our consultation services and did not proceed with connecting to a provider, our service fee may be refundable based on the scope of assistance provided. Contact our support team to discuss your specific situation.
              </p>

              <h2 className="heading-md mt-8 mb-4">3. Consultation Fees</h2>
              <p className="text-muted-foreground mb-4">
                If you engaged our consultation services and did not proceed with connecting to a provider, our service fee may be refundable based on the scope of assistance provided. Contact our support team to discuss your specific situation.
              </p>

              <h2 className="heading-md mt-8 mb-4">4. Non-Refundable Services</h2>
              <p className="text-muted-foreground mb-4">
                Certain assistance services may be non-refundable once completed, such as comprehensive service comparisons or detailed consultation sessions. These will be clearly identified before you engage the service.
              </p>

              <h2 className="heading-md mt-8 mb-4">5. How to Request a Refund</h2>
              <p className="text-muted-foreground mb-4">
                To request a refund of HubNet's service fees, please contact us at support@hubnet.com or call (855) 945-0333. Include your account information and reason for the request. Please note this does not apply to provider charges.
              </p>

              <h2 className="heading-md mt-8 mb-4">6. Processing Time</h2>
              <p className="text-muted-foreground">
                Approved refunds for our service fees will be processed within 5-10 business days and credited to your original payment method.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPage;
