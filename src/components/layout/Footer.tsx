import { Link } from "react-router-dom";

const footerLinks = {
  services: [
    { label: "Residential Plans", href: "/plans" },
    { label: "Business Solutions", href: "/business" },
    { label: "Managed Wi-Fi", href: "/plans" },
    { label: "TV & Bundles", href: "/plans" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
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
              Internet that actually makes life easier. Fast, reliable connectivity for homes and businesses.
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
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-primary-foreground/50 text-xs sm:text-sm">
            © {new Date().getFullYear()} HubNet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
