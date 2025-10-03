import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Globe, Mail, TrendingUp, BarChart } from "lucide-react";

const services = [
  {
    title: "AI Receptionist",
    icon: Phone,
    description: "Your 24/7 virtual phone receptionist that never sleeps",
    features: [
      "Answers calls and handles FAQs automatically",
      "Books appointments and manages your calendar",
      "Speaks English and Spanish fluently",
      "Seamlessly transfers to a human when needed"
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Marketing & Lead Generation",
    icon: TrendingUp,
    description: "Fill your pipeline with qualified leads",
    features: [
      "Facebook, Instagram, and TikTok ad campaigns",
      "Custom landing pages and lead capture funnels",
      "Automated email and SMS follow-ups",
      "Lead tracking and campaign performance dashboard"
    ],
    gradient: "from-purple-500 to-pink-500"
  }
];

export default function Services() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-services-heading">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to automate and grow your business
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="relative overflow-hidden hover-elevate transition-all duration-300"
                data-testid={`card-service-${index}`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full -translate-y-16 translate-x-16`} />
                
                <CardHeader className="space-y-4">
                  <div className={`inline-flex w-16 h-16 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} text-white`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground" data-testid={`text-service-description-${index}`}>
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3" data-testid={`text-service-feature-${index}-${fIndex}`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection("contact")}
                    className="w-full"
                    data-testid={`button-learn-more-${index}`}
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
