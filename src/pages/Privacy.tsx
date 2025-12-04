import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const PrivacyPage = () => {
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
              Privacy Policy
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-muted-foreground mb-6">Last updated: December 1, 2024</p>

              <h2 className="heading-md mt-8 mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect information you provide directly to us, such as when you create an account, subscribe to our services, contact us for support, or otherwise communicate with us. This may include your name, email address, phone number, billing address, and payment information.
              </p>

              <h2 className="heading-md mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions.
              </p>

              <h2 className="heading-md mt-8 mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell, trade, or otherwise transfer your personal information to outside parties except as described in this policy. We may share information with trusted third parties who assist us in operating our website, conducting our business, or servicing you.
              </p>

              <h2 className="heading-md mt-8 mb-4">4. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="heading-md mt-8 mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your information. To exercise these rights, please contact us at privacy@hubnet.com.
              </p>

              <h2 className="heading-md mt-8 mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at privacy@hubnet.com or call (123) 456-7890.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
