import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import brightThumb from "@assets/generated_images/WhatsApp Image 2025-10-01 at 12.50.54_c0e7c839 - Editado (1).png";
import darkThumb from "@assets/generated_images/Diseño Sin Título - 1 - Editado.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24 lg:h-28">
          <div className="flex-shrink-0 flex items-center">
            <button onClick={() => scrollToSection("hero")} aria-label="Home" className="p-0">
              <img
                src={theme === "dark" ? darkThumb : brightThumb}
                alt="Nuvantix logo"
                className="w-20 md:w-28 lg:w-48 object-contain"
              />
            </button>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground font-medium hover:text-primary transition-colors"
              data-testid="link-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground font-medium hover:text-primary transition-colors"
              data-testid="link-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground font-medium hover:text-primary transition-colors"
              data-testid="link-contact"
            >
              Contact
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              className="rounded-full"
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="rounded-full px-6"
              data-testid="button-book-call-nav"
            >
              Book Free Call
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left py-2 text-foreground font-medium"
              data-testid="link-home-mobile"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left py-2 text-foreground font-medium"
              data-testid="link-services-mobile"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 text-foreground font-medium"
              data-testid="link-contact-mobile"
            >
              Contact
            </button>
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="ghost"
                onClick={toggleTheme}
                className="rounded-full"
                data-testid="button-theme-toggle-mobile"
              >
                {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="flex-1 rounded-full"
                data-testid="button-book-call-mobile"
              >
                Book Free Call
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
