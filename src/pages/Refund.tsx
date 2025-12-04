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
              <p className="text-muted-foreground mb-6">Last updated: December 1, 2024</p>

              <h2 className="heading-md mt-8 mb-4">1. 30-Day Money Back Guarantee</h2>
              <p className="text-muted-foreground mb-4">
                New customers are eligible for a full refund within the first 30 days of service if they are not satisfied for any reason. To request a refund, contact our customer support team.
              </p>

              <h2 className="heading-md mt-8 mb-4">2. Service Credits</h2>
              <p className="text-muted-foreground mb-4">
                If you experience a service outage lasting more than 24 consecutive hours due to issues within our network, you may be eligible for a prorated service credit on your next bill.
              </p>

              <h2 className="heading-md mt-8 mb-4">3. Installation Fee Refunds</h2>
              <p className="text-muted-foreground mb-4">
                Installation fees are non-refundable once the installation has been completed. If installation cannot be completed due to issues on our end, the fee will be fully refunded.
              </p>

              <h2 className="heading-md mt-8 mb-4">4. Equipment Returns</h2>
              <p className="text-muted-foreground mb-4">
                Leased equipment must be returned within 14 days of service cancellation. Failure to return equipment may result in charges for the full replacement cost.
              </p>

              <h2 className="heading-md mt-8 mb-4">5. Early Termination</h2>
              <p className="text-muted-foreground mb-4">
                If you cancel service before the end of your contract term, early termination fees may apply as outlined in your service agreement. The 30-day money back guarantee supersedes early termination fees for new customers.
              </p>

              <h2 className="heading-md mt-8 mb-4">6. How to Request a Refund</h2>
              <p className="text-muted-foreground mb-4">
                To request a refund or service credit, please contact us at billing@hubnet.com or call (123) 456-7890. Include your account number and reason for the request.
              </p>

              <h2 className="heading-md mt-8 mb-4">7. Processing Time</h2>
              <p className="text-muted-foreground">
                Approved refunds will be processed within 5-10 business days and credited to your original payment method.
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
