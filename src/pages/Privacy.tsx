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
              <p className="text-muted-foreground mb-6">Last updated: December 16, 2024</p>

              <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mb-8">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Your Privacy Matters:</span> We will never request your service provider account passwords or login credentials. We only collect information necessary to provide our assistance services.
                </p>
              </div>

              <h2 className="heading-md mt-8 mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect information you provide when requesting assistance, such as your name, email address, phone number, and service address. We do not collect or request service provider account passwords, login credentials, or other sensitive authentication information.
              </p>

              <h2 className="heading-md mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use your information solely to provide our assistance services, including helping you explore service options, facilitating connections with providers, and providing customer support. We do not sell your personal information to third parties.
              </p>

              <h2 className="heading-md mt-8 mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We may share your contact information with service providers only when you request assistance in connecting with them. We do not sell, trade, or otherwise transfer your personal information to outside parties for marketing purposes.
              </p>

              <h2 className="heading-md mt-8 mb-4">4. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate security measures to protect your personal information. All data transmission is encrypted using HTTPS. We never store service provider passwords or authentication credentials.
              </p>

              <h2 className="heading-md mt-8 mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your information. To exercise these rights, please contact us at privacy@hubnet.com or call (855) 945-0333.
              </p>

              <h2 className="heading-md mt-8 mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at privacy@hubnet.com or call (855) 945-0333.
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
