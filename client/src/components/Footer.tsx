import { Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-[hsl(240_5%_10%)] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" data-testid="text-footer-logo">
              Nuvantix Tech
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed" data-testid="text-footer-description">
              Empowering businesses with AI-driven automation and results-focused marketing strategies. 
              Never miss an opportunity to grow.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-300 hover:text-white transition-colors text-left text-sm"
                data-testid="link-footer-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-300 hover:text-white transition-colors text-left text-sm"
                data-testid="link-footer-services"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-white transition-colors text-left text-sm"
                data-testid="link-footer-contact"
              >
                Contact
              </button>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <a
              href="mailto:contact@nuvantixtech.com"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
              data-testid="link-footer-email"
            >
              <Mail className="w-4 h-4" />
              contact@nuvantixtech.com
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400" data-testid="text-footer-copyright">
            © {new Date().getFullYear()} Nuvantix Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
