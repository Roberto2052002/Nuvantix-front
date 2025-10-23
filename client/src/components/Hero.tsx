import { Button } from "@/components/ui/button";
import brightHero from "@assets/generated_images/WhatsApp Image 2025-10-01 at 12.50.54_c0e7c839 - Editado (1).png";
import darkHero from "@assets/generated_images/Diseño Sin Título - 1 - Editado.png";
import { useTheme } from "@/components/ThemeProvider";

export default function Hero() {
  const { theme } = useTheme();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-chart-2/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight font-['Space_Grotesk']" data-testid="text-hero-headline">
              Automate, Grow, and Convert — All in One Place
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl" data-testid="text-hero-subheadline">
              Nuvantix Tech helps you never miss a call and fills your pipeline with qualified leads.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="rounded-full px-8 shadow-lg text-base"
                data-testid="button-book-call-hero"
              >
                Book Free Call
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("services")}
                className="rounded-full px-8 text-base"
                data-testid="button-see-work"
              >
                See Our Work
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <img
              src={theme === 'dark' ? darkHero : brightHero}
              alt="Nuvantix Tech logo"
              className="w-full max-w-sm md:max-w-4xl lg:max-w-[90rem] h-auto lg:translate-x-32"
              data-testid="img-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
