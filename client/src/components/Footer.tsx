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
            <div>
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" data-testid="text-footer-logo">
                Nuvantix Tech LLC
              </h3>
              <div className="mt-1">
                <span className="text-sm text-gray-400">(commonly referred to as "Nuvantix Tech")</span>
              </div>
            </div>
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
              nuvantixtech@gmail.com
            </a>

            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 16.92V21a1 1 0 0 1-1.11 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2 3.11 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75c.12.74.36 1.45.7 2.1a1 1 0 0 1-.24 1.05L8.5 8.5a16 16 0 0 0 7 7l1.6-1.05a1 1 0 0 1 1.05-.24c.65.34 1.36.58 2.1.7a1 1 0 0 1 .75 1V22z" />
              </svg>
              <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (786) 937 8729</a>
            </div>
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
