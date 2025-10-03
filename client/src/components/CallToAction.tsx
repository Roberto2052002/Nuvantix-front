import { Button } from "@/components/ui/button";

export default function CallToAction() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-chart-2 to-primary opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" data-testid="text-cta-heading">
          Let's grow your business with smart automation and targeted marketing.
        </h2>
        
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Stop losing leads and start scaling with confidence. Book your free consultation today.
        </p>
        
        <Button
          size="lg"
          onClick={() => scrollToSection("contact")}
          className="bg-white text-primary hover:bg-white/90 rounded-full px-8 shadow-xl text-base font-semibold"
          data-testid="button-book-call-cta"
        >
          Book Free Call
        </Button>
      </div>
    </section>
  );
}
