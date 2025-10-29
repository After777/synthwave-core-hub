import { useState, useEffect } from "react";
import { X } from "lucide-react";
import logo from "@/assets/ravlabs-logo.png";
import ThemeToggle from "./ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

// Force redeploy
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
          >
            <img
              src={logo}
              alt="Rav Labs"
              className="h-10 w-auto transition-all duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-100 brightness-90 group-hover:brightness-110 saturate-90 group-hover:saturate-100"
              style={{
                filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.2))',
              }}
            />
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative text-sm font-bold text-foreground/70 hover:text-primary transition-all duration-500 group uppercase tracking-[0.15em] futuristic-nav-link"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{link.label}</span>
                {/* Neon underline glow */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary group-hover:w-full transition-all duration-500 shadow-[0_0_8px_hsl(var(--primary))]"></span>
                {/* Subtle background glow on hover */}
                <span className="absolute inset-0 -z-10 bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-0 group-hover:scale-150"></span>
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            
            {/* Terms & Conditions Button */}
            <button
              type="button"
              onClick={() => setTermsOpen(true)}
              className="px-6 py-2.5 rounded-3xl bg-card/50 text-foreground font-bold text-xs shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.7)] transition-all duration-500 uppercase tracking-[0.15em] border-2 border-primary/40 hover:border-primary/70 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
            >
              Terms & Conditions
            </button>

            {/* CTA Button */}
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 rounded-3xl bg-gradient-to-r from-primary via-accent to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-bold text-sm shadow-[0_0_25px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.8)] hover:scale-105 transition-all duration-500 uppercase tracking-[0.2em] border-2 border-primary/30 relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/30"
                  aria-label="Open menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] glass-effect-strong border-l-2 border-primary/20 rounded-l-3xl overflow-hidden">
                <div className="flex flex-col h-full">
                  {/* Mobile Logo */}
                  <div className="flex items-center justify-between mb-12 mt-4">
                    <img src={logo} alt="Rav Labs" className="h-10 w-auto opacity-80" />
                  </div>

                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col gap-6">
                    {navLinks.map((link, index) => (
                      <button
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                        className="text-left text-lg font-bold text-foreground/80 hover:text-primary transition-all duration-300 uppercase tracking-wider relative group py-2"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <span className="relative z-10">{link.label}</span>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => {
                        setTermsOpen(true);
                        setMobileMenuOpen(false);
                      }}
                      className="text-left text-lg font-bold text-foreground/80 hover:text-primary transition-all duration-300 uppercase tracking-wider relative group py-2"
                    >
                      <span className="relative z-10">Terms & Conditions</span>
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                    </button>
                  </nav>

                  {/* Mobile CTA */}
                  <button
                    type="button"
                    onClick={() => scrollToSection("contact")}
                    className="mt-auto mb-8 px-8 py-4 rounded-3xl bg-gradient-to-r from-primary to-accent text-white font-bold text-sm shadow-[0_0_25px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.8)] transition-all duration-500 uppercase tracking-[0.2em] border-2 border-primary/20"
                  >
                    Get Started
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Terms & Conditions Dialog */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-w-3xl max-h-[85vh] bg-card border-2 border-primary/40 shadow-[0_0_50px_hsl(var(--primary)/0.5)] rounded-3xl overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-primary">Terms & Conditions</span>
              <span className="text-muted-foreground">— Rav Labs</span>
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-base">
              By working with Rav Labs or using our services, you agree to the following terms and conditions.
            </DialogDescription>
          </DialogHeader>
          
          <ScrollArea className="h-[60vh] pr-4">
            <div className="space-y-8 text-foreground/90">
              {/* Section 1 */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary">1. Monthly Payments</h3>
                <ul className="space-y-2 list-disc list-inside text-sm leading-relaxed">
                  <li>Monthly payments must be completed within 7 days of the due date.</li>
                  <li>If payment is delayed beyond 7 days, the client's website will be temporarily blocked until payment is cleared.</li>
                  <li>Continuous delays may result in permanent suspension of hosting or maintenance services.</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary">2. Limitation of Liability</h3>
                <ul className="space-y-2 list-disc list-inside text-sm leading-relaxed">
                  <li>Rav Labs will not be held responsible for any indirect, incidental, or consequential damages caused by the use or inability to use the website or related services.</li>
                  <li>We are not liable for third-party integrations, plugins, or external tools used within a project.</li>
                  <li>While we may assist with certain third-party tools, responsibility for their performance remains with their respective providers.</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary">3. Revisions & Delivery</h3>
                <ul className="space-y-2 list-disc list-inside text-sm leading-relaxed">
                  <li>Each project includes a fixed number of revisions as discussed before the project begins.</li>
                  <li>Additional revisions beyond that limit will incur extra fees.</li>
                  <li>Once the final project is approved, Rav Labs is not responsible for further edits or modifications.</li>
                  <li>Minor post-delivery adjustments may be allowed once or twice as a courtesy, but not beyond that.</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary">4. Service Agreement</h3>
                <ul className="space-y-2 list-disc list-inside text-sm leading-relaxed">
                  <li>All projects begin after an initial discussion, quotation, and client approval.</li>
                  <li>Clients are responsible for providing accurate content, images, and project details.</li>
                  <li>Any new features or design changes requested after approval will be charged separately.</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary">5. Intellectual Property</h3>
                <ul className="space-y-2 list-disc list-inside text-sm leading-relaxed">
                  <li>Upon full payment, ownership of the final website design, content, and assets is transferred to the client.</li>
                  <li>Rav Labs retains the right to display completed work in its portfolio, social media, and promotional materials as a representation of our work.</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary">6. Confidentiality</h3>
                <ul className="space-y-2 list-disc list-inside text-sm leading-relaxed">
                  <li>All client information, project files, and data shared with Rav Labs are treated as strictly confidential.</li>
                  <li>We do not share, sell, or disclose any client data to third parties without explicit consent.</li>
                </ul>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navbar;
