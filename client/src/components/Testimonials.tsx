import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import testimonial1 from "@assets/generated_images/Female_testimonial_headshot_770c400d.png";
import testimonial2 from "@assets/generated_images/Male_testimonial_headshot_31d984de.png";

const testimonials = [
  {
    quote: "Nuvantix Tech's AI receptionist has been a game changer for our business. We haven't missed a single lead since implementing it, and our customers love the instant response time.",
    name: "Sarah Mitchell",
    title: "Marketing Director",
    company: "TechFlow Solutions",
    image: testimonial1
  },
  {
    quote: "The marketing campaigns they ran for us generated a 300% ROI in just 60 days. Their team understands our business and delivers real results, not just vanity metrics.",
    name: "Marcus Chen",
    title: "Founder & CEO",
    company: "GrowthLab",
    image: testimonial2
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-testimonials-heading">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real businesses
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative hover-elevate transition-all duration-300"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="w-12 h-12" />
              </div>
              
              <CardContent className="pt-8 space-y-6">
                <p className="text-lg text-foreground relative z-10" data-testid={`text-testimonial-quote-${index}`}>
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <p className="font-semibold text-foreground" data-testid={`text-testimonial-name-${index}`}>
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-title-${index}`}>
                      {testimonial.title}
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-company-${index}`}>
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
