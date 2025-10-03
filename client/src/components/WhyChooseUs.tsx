import { Clock, TrendingUp, Zap } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Call Handling",
    description: "Never miss a lead with our AI receptionist answering calls around the clock, even when you can't."
  },
  {
    icon: TrendingUp,
    title: "Results-Driven Campaigns",
    description: "Data-backed marketing strategies that deliver measurable growth and qualified leads to your business."
  },
  {
    icon: Zap,
    title: "Human + AI Hybrid Efficiency",
    description: "The perfect blend of AI automation and human expertise to maximize your business potential."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-why-heading">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge technology with proven marketing strategies
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center space-y-4"
                data-testid={`card-feature-${index}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 text-primary">
                  <Icon className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold" data-testid={`text-feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-feature-description-${index}`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
