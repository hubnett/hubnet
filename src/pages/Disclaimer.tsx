import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const DisclaimerPage = () => {
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
              Disclaimer
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-muted-foreground mb-6">Last updated: December 16, 2024</p>

              <h2 className="heading-md mt-8 mb-4">Independent Third-Party Service</h2>
              <p className="text-muted-foreground mb-4">
                HubNet is an independent third-party assistance platform. We are not an internet service provider, cable company, or streaming service. We are not affiliated with, endorsed by, certified by, or officially connected with any internet, cable, television, or streaming service provider.
              </p>

              <h2 className="heading-md mt-8 mb-4">Nature of Our Services</h2>
              <p className="text-muted-foreground mb-4">
                We provide assistance, guidance, and facilitation services to help consumers understand their options and connect with service providers. We do not sell, provide, or directly offer internet, cable, television, or streaming services. Our role is strictly to assist and guide you through the process.
              </p>

              <h2 className="heading-md mt-8 mb-4">Service Fees</h2>
              <p className="text-muted-foreground mb-4">
                HubNet charges a separate service fee for our assistance and guidance services. This fee is independent of and in addition to any charges you may incur from service providers. Our fee covers consultation, setup assistance, comparison guidance, and ongoing customer support for navigating service options.
              </p>

              <h2 className="heading-md mt-8 mb-4">Provider Relationships</h2>
              <p className="text-muted-foreground mb-4">
                When you engage with service providers through our assistance, you will enter into a direct contractual relationship with that provider. We are not a party to that agreement. All service terms, pricing, features, and obligations are established between you and the provider directly.
              </p>

              <h2 className="heading-md mt-8 mb-4">Trademarks and Brand Names</h2>
              <p className="text-muted-foreground mb-4">
                All internet, cable, television, and streaming service provider names, logos, and trademarks referenced on this website are the property of their respective owners. Reference to these names is for descriptive purposes only and does not imply any affiliation, endorsement, or partnership.
              </p>

              <h2 className="heading-md mt-8 mb-4">No Guarantees</h2>
              <p className="text-muted-foreground mb-4">
                We cannot and do not guarantee service availability, pricing, speeds, features, or any other aspects of third-party services. Service availability and terms are determined solely by the individual providers. Our assistance is limited to helping you explore available options.
              </p>

              <h2 className="heading-md mt-8 mb-4">Account Security</h2>
              <p className="text-muted-foreground mb-4">
                HubNet will never request your service provider account passwords, login credentials, or other sensitive authentication information. We only collect basic information necessary to provide our assistance services, such as your name, contact information, and service address.
              </p>

              <h2 className="heading-md mt-8 mb-4">Technical Support</h2>
              <p className="text-muted-foreground mb-4">
                For technical issues, service outages, billing disputes, or other matters related to your actual internet, cable, or streaming service, you must contact your service provider directly. While we can guide you on how to reach them, we do not have access to or control over their systems or services.
              </p>

              <h2 className="heading-md mt-8 mb-4">Information Accuracy</h2>
              <p className="text-muted-foreground mb-4">
                While we strive to provide accurate and up-to-date information about service options, availability, and features, information can change. All final service details, pricing, and terms must be confirmed directly with the service provider before you commit to any service.
              </p>

              <h2 className="heading-md mt-8 mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                HubNet is not liable for any issues, disputes, or problems that may arise between you and any service provider. Our liability is limited to the assistance services we provide directly. We are not responsible for service quality, uptime, speeds, pricing changes, or any other aspects of third-party services.
              </p>

              <h2 className="heading-md mt-8 mb-4">Questions About This Disclaimer</h2>
              <p className="text-muted-foreground">
                If you have questions about our role as an independent assistance platform or about this disclaimer, please contact us at support@hubnet.com or call (855) 945-0333.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DisclaimerPage;
