import { motion } from "framer-motion";
import { Check, ArrowRight, Bot, Settings, Rocket, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data based on instructions
const agents = [
  {
    name: "Atlas",
    industry: "Real Estate",
    description: "Atlas is designed for real estate professionals who want to capture and qualify leads automatically. It responds to inquiries, identifies serious buyers or renters, and books property showings directly on the agent's calendar.",
    setup: "$1,500",
    monthly: "$500/mo",
    capabilities: [
      "Responds to Instagram DMs and website inquiries 24/7",
      "Qualifies buyers and renters based on budget, location, and intent",
      "Books property showings through Calendly",
      "Logs every lead automatically to Google Sheets",
      "Sends confirmation emails with showing details",
      "Follows up with cold leads automatically after 24 hours"
    ]
  },
  {
    name: "Nexus",
    industry: "Aesthetic Clinics & Med Spas",
    description: "Nexus is built for aesthetic clinics and med spas that receive constant inquiries about treatments and appointments. It guides potential clients through conversations and converts them into booked consultations automatically.",
    setup: "$750",
    monthly: "$500/mo",
    capabilities: [
      "Answers questions about Botox, fillers, lasers, facials, and treatments",
      "Qualifies potential clients based on treatment interest",
      "Sends booking links through Calendly",
      "Captures lead information automatically",
      "Sends confirmation messages and reminders",
      "Logs leads into Google Sheets for tracking"
    ]
  },
  {
    name: "Mesa",
    industry: "Restaurants & Nightlife",
    description: "Mesa helps restaurants and nightlife venues handle reservations, event inquiries, and guest questions automatically while promoting events and specials.",
    setup: "$750",
    monthly: "$500/mo",
    capabilities: [
      "Answers questions about hours, reservations, and dress code",
      "Books reservations via Calendly or reservation platforms",
      "Handles waitlist inquiries during busy nights",
      "Promotes events and specials automatically",
      "Captures guest details such as party size and contact info"
    ]
  },
  {
    name: "Pulse",
    industry: "Gyms & Fitness",
    description: "Pulse is designed for gyms and fitness studios that receive constant inquiries about memberships, classes, and personal training. It converts conversations into booked visits or trial sessions.",
    setup: "$1,000",
    monthly: "$500/mo",
    capabilities: [
      "Answers questions about memberships and pricing",
      "Shares class schedules and training options",
      "Promotes challenges, offers, and gym programs",
      "Guides prospects to book trials or consultations",
      "Captures lead details and membership interest automatically"
    ]
  },
  {
    name: "Smile",
    industry: "Dental Clinics",
    description: "Smile helps dental clinics respond to patient inquiries, answer common questions, and convert conversations into booked consultations or appointments.",
    setup: "$1,000",
    monthly: "$500/mo",
    capabilities: [
      "Answers questions about cleanings, whitening, veneers, Invisalign",
      "Responds to insurance and pricing questions",
      "Guides patients to book appointments via Calendly",
      "Provides office hours and location information",
      "Captures patient name, phone, and treatment interest automatically"
    ]
  },
  {
    name: "Lex",
    industry: "Law Firms",
    description: "Lex is built for law firms that want to pre-qualify potential cases before attorneys spend time on consultations.",
    setup: "$2,000",
    monthly: "$500/mo",
    capabilities: [
      "Answers inquiries about legal practice areas",
      "Qualifies cases based on incident details",
      "Filters out cases outside the firm's scope politely",
      "Books legal consultations through Calendly",
      "Logs qualified leads automatically",
      "Sends confirmation emails for intake appointments"
    ]
  }
];

export default function Home() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 text-foreground font-sans selection:bg-primary/30">
      <main className="pt-8 pb-24">
        {/* Main AI Agents Section */}
        <section id="agents" className="container mx-auto px-6 max-w-7xl scroll-mt-24 md:scroll-mt-32">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              AI Agents Built For <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Your Industry</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Our AI agents handle conversations, qualify leads, and book appointments automatically — helping businesses capture more opportunities without adding staff.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col bg-card rounded-2xl border border-white/5 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(41,98,255,0.1)]"
              >
                {/* Subtle gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="p-8 flex-1 flex flex-col relative z-10">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold">{agent.name}</h3>
                      <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                        {agent.industry}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed h-28 line-clamp-6">
                      {agent.description}
                    </p>
                  </div>

                  <div className="bg-background/50 rounded-xl p-5 border border-white/5 mb-8">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Setup</p>
                        <p className="text-xl font-semibold">{agent.setup}</p>
                      </div>
                      <div className="w-px h-10 bg-white/10 mx-4"></div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Monthly</p>
                        <p className="text-xl font-semibold text-primary">{agent.monthly}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 mb-8">
                    <p className="text-sm font-semibold mb-4 flex items-center gap-2">
                      <Settings className="w-4 h-4 text-primary" /> Key Capabilities
                    </p>
                    <ul className="space-y-3">
                      {agent.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="leading-snug">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    onClick={scrollToContact}
                    className="w-full rounded-xl bg-muted hover:bg-primary text-foreground hover:text-primary-foreground border border-border hover:border-primary transition-all group-hover:shadow-[0_0_15px_rgba(41,98,255,0.4)]"
                    data-testid={`button-book-demo-${agent.name.toLowerCase()}`}
                  >
                    Book Demo <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Custom Automations Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-card to-background border border-primary/20 shadow-[0_0_50px_rgba(41,98,255,0.05)] p-1"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative bg-card/80 backdrop-blur-xl rounded-[22px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-2">
                  <Bot className="w-4 h-4" /> Go Beyond Templates
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Custom AI Automations</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Not every business problem fits into a template. Nuvantix also builds custom AI automations that connect your systems, capture leads, and streamline internal workflows.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {[
                    "Lead capture automations", 
                    "CRM integrations", 
                    "Appointment scheduling systems", 
                    "Customer support AI agents", 
                    "Internal workflow automation"
                  ].map((item, i) => (
                    <span key={i} className="text-sm px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-muted-foreground flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-primary" /> {item}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="lg:w-5/12 w-full max-w-md">
                <div className="bg-background/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Rocket className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Build Your Custom System</h3>
                  <p className="text-muted-foreground text-sm mb-8">Discuss your specific workflow requirements with our automation engineers.</p>
                  
                  <Button 
                    onClick={scrollToContact}
                    className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium text-base shadow-[0_0_20px_rgba(41,98,255,0.4)]"
                    data-testid="button-schedule-consultation"
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        
      </main>
    </div>
  );
}
