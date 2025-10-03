import { Calendar, Settings, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    number: "01",
    title: "Book a Free Call",
    description: "Schedule a consultation to discuss your business needs and goals"
  },
  {
    icon: Settings,
    number: "02",
    title: "Customize Your Solution",
    description: "We tailor your AI agent or marketing campaign to fit your brand"
  },
  {
    icon: Rocket,
    number: "03",
    title: "Launch in 48 Hours",
    description: "Go live quickly with our streamlined setup process"
  },
  {
    icon: LineChart,
    number: "04",
    title: "Watch Results Grow",
    description: "Track performance and see your business scale with real-time analytics"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-how-heading">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in four simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative text-center space-y-4"
                data-testid={`card-step-${index}`}
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
                
                <div className="relative inline-flex items-center justify-center w-24 h-24 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-chart-2 rounded-full opacity-10" />
                  <div className="relative">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                </div>
                
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-semibold" data-testid={`text-step-title-${index}`}>
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground" data-testid={`text-step-description-${index}`}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
