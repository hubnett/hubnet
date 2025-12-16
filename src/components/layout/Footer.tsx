import { Link } from "react-router-dom";

const footerLinks = {
  services: [
    { label: "Service Assistance", href: "/plans" },
    { label: "Business Guidance", href: "/business" },
    { label: "FAQ", href: "/faq" },
    { label: "Coverage Info", href: "/coverage" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
  ],
};



export function Footer() {
  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 sm:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-black text-base sm:text-lg">H</span>
              </div>
              <span className="text-lg sm:text-xl font-bold">HubNet</span>
            </Link>
            <p className="text-sm sm:text-base text-primary-foreground/70 mb-4 sm:mb-6 max-w-sm">
              Independent assistance platform helping you explore and connect with internet, cable, and streaming services.
            </p>
            <div className="flex items-center gap-2">
              <a href="tel:+18559450333" className="text-accent hover:text-accent/80 transition-colors font-semibold text-sm sm:text-base">
                (855) 945-0333
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm sm:text-base mb-4 sm:mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-primary-foreground/10">
          <div className="bg-primary-foreground/5 rounded-2xl p-4 sm:p-6 mb-6">
            <p className="text-primary-foreground/70 text-xs sm:text-sm text-center leading-relaxed">
              <span className="font-semibold text-primary-foreground">Independent Third-Party Service:</span> HubNet is an independent assistance platform for cable, internet, and streaming services. We are not affiliated with, endorsed by, or representing any service provider. All trademarks belong to their respective owners.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-primary-foreground/50 text-xs sm:text-sm">
              © {new Date().getFullYear()} HubNet. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
