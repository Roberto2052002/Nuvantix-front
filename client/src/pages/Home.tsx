import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import OptionsSection from "@/components/options";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WhyChooseUs />
      <Services />
      <HowItWorks />
      <Testimonials />    
      <OptionsSection />
      <CallToAction />
      <Footer />     
    </div>
  );
}
