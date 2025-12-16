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

              <h2 className="heading-md mt-8 mb-4">1. Refund Eligibility Window</h2>
              <p className="text-muted-foreground mb-4">
                Refund requests for HubNet's assistance service fees can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided. Eligibility depends on whether the guidance services have been fully delivered and the specific service type engaged. To request a refund, contact our support team at (855) 945-0333 or support@hubnet.com.
              </p>

              <h2 className="heading-md mt-8 mb-4">2. Eligibility Conditions</h2>
              <p className="text-muted-foreground mb-4">
                Refund eligibility is determined by the nature and extent of assistance already provided. Services that have been substantially completed or where detailed guidance has already been delivered may not qualify for a full refund. Each request is reviewed individually based on the circumstances.
              </p>

              <h2 className="heading-md mt-8 mb-4">3. Third-Party Provider Charges</h2>
              <p className="text-muted-foreground mb-4">
                HubNet cannot issue refunds for charges billed by internet, cable, or streaming service providers. You will need to contact your service provider directly regarding their billing and refund policies. We are not a party to your agreement with them.
              </p>

              <h2 className="heading-md mt-8 mb-4">4. Non-Completed Services</h2>
              <p className="text-muted-foreground mb-4">
                If you engaged our consultation services and assistance was not delivered or you did not proceed with connecting to a provider, you may be eligible for a refund within the 7-15 day window. Contact our support team to discuss your specific situation.
              </p>

              <h2 className="heading-md mt-8 mb-4">5. Non-Refundable Scenarios</h2>
              <p className="text-muted-foreground mb-4">
                Certain assistance services may be non-refundable once completed, such as comprehensive service comparisons, detailed consultation sessions that have been fully delivered, or after the 7-15 day window has passed. Service terms will be clearly communicated before you engage.
              </p>

              <h2 className="heading-md mt-8 mb-4">6. How to Request a Refund</h2>
              <p className="text-muted-foreground mb-4">
                To request a refund of HubNet's service fees, please contact us at support@hubnet.com or call (855) 945-0333 within the 7-15 day window. Include your account information, service details, and reason for the request. Please note this does not apply to provider charges.
              </p>

              <h2 className="heading-md mt-8 mb-4">7. Processing Time</h2>
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
