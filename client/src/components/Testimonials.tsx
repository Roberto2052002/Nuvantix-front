import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// simple inline SVG placeholder (data URL) used as a neutral filler image
const fillerAvatar =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="100%" height="100%" fill="%23e5e7eb"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="20" fill="%239ca3af">Photo</text></svg>';

type Testimonial = {
  quote: string;
  name: string;
  title?: string;
  company?: string;
  image?: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "Within a week, our calendar was full. The leads were qualified and ready to talk — it was like flipping a switch.",
    name: "Jessica Ray",
    title: "Trial Client",
    company: "",
    image: fillerAvatar
  },
  {
    quote: "The AI receptionist handled all incoming calls without missing a beat. It’s like having a full-time assistant, but smarter.",
    name: "Jason Lee",
    title: "Early Tester",
    company: "",
    image: fillerAvatar
  },
  {
    quote: "We used their lead gen system during a slow quarter and ended up breaking a sales record. That says everything.",
    name: "Daniel Foster",
    title: "Early User",
    company: "",
    image: fillerAvatar
  },
  {
    quote: "I was skeptical at first, but the voice sounded natural and the system booked appointments better than my old process.",
    name: "Tyrese Morgan",
    title: "Small Business Owner",
    company: "",
    image: fillerAvatar
  },
  {
    quote: "The targeting was spot-on. We didn’t just get leads — we got the right ones. Saved us hours of cold outreach.",
    name: "Priya Nair",
    title: "Startup Founder",
    company: "",
    image: fillerAvatar
  },
  {
    quote: "Setup was incredibly fast. Within minutes, we had a working solution that actually saved us time every single day.",
    name: "Natalie Gomez",
    title: "Trial User",
    company: "",
    image: fillerAvatar
  },
  {
    quote: "We’ve tested other services, but this is the first one that actually delivered leads that convert.",
    name: "Alex Boudreaux",
    title: "Growth Consultant",
    company: "",
    image: fillerAvatar
  },
  {
    quote: "We used the AI receptionist for one week and immediately noticed fewer missed calls. Clients even commented on how 'professional' we sounded.",
    name: "Amira Patel",
    title: "Beta Tester",
    company: "",
    image: fillerAvatar
  },
  {
    quote: "I honestly wasn’t expecting much, but we landed 3 high-ticket clients in the first two weeks of testing.",
    name: "Luis Martinez",
    title: "Beta Tester",
    company: "",
    image: fillerAvatar
  },
  {
    quote: "This tool gave me back hours of my day. I didn’t have to worry about answering every single call anymore.",
    name: "Brandon Wu",
    title: "Early Access User",
    company: "",
    image: fillerAvatar
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
            Results from our beta testers and early users
          </p>
        </div>
        
        {/* Horizontal infinite scroll carousel (JS-driven seamless loop) */}
        <div className="w-full overflow-hidden">
          <CarouselInner testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}

function CarouselInner({ testimonials }: { testimonials: Testimonial[] }) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const singleRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const [paused, setPaused] = useState(false);
  const [singleWidth, setSingleWidth] = useState(0);
  const [gapPx, setGapPx] = useState(24);

  // measure widths
  useEffect(() => {
    const measure = () => {
      if (!singleRef.current) return;
      const cs = getComputedStyle(singleRef.current);
      const gapStr = (cs.gap || (cs as any).columnGap || '24px') as string;
      const parsedGap = parseFloat(gapStr) || 24;
      setGapPx(parsedGap);

      // precise child widths sum (avoid relying on offsetWidth of parent)
      const children = Array.from(singleRef.current.children) as HTMLElement[];
      const childrenWidth = children.reduce((acc, el) => acc + el.offsetWidth, 0);
      const totalGapsWidth = Math.max(0, children.length - 1) * parsedGap;
      const preciseSingle = childrenWidth + totalGapsWidth;

      // include one extra gap spacer between sequences
      const finalSingle = preciseSingle + parsedGap;
      setSingleWidth(finalSingle);
      // optional debug outline
      if (window.location.search.includes('debugCarousel') && singleRef.current) {
        singleRef.current.style.outline = '2px dashed rgba(255,0,0,0.4)';
      }

      // ensure transform is within range
      offsetRef.current = offsetRef.current % Math.max(1, finalSingle);
      if (scrollerRef.current) scrollerRef.current.style.transform = `translate3d(${-offsetRef.current}px,0,0)`;
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    const speed = 40; // pixels per second
    let last = performance.now();

    const step = (now: number) => {
      if (!scrollerRef.current || singleWidth === 0) {
        rafRef.current = requestAnimationFrame(step);
        last = now;
        return;
      }

      const dt = now - last;
      last = now;

      if (!paused) {
        offsetRef.current += (speed * dt) / 1000;
        if (offsetRef.current >= singleWidth && singleWidth > 0) {
          offsetRef.current -= singleWidth;
        }
        // apply transform with translate3d for GPU acceleration
        scrollerRef.current.style.transform = `translate3d(${-offsetRef.current}px,0,0)`;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [paused, singleWidth]);

  // single sequence render
  const single = (
    <div ref={singleRef} className="flex gap-6 items-stretch" style={{ paddingRight: gapPx }}>
  {testimonials.map((t: Testimonial, idx: number) => (
        <article
          key={idx}
          className="min-w-[280px] md:min-w-[320px] lg:min-w-[360px] p-6 rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 text-white shadow-xl ring-1 ring-black/20 hover:shadow-2xl transform hover:-translate-y-1 transition-all"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
                {t.name.split(' ').map((n: string) => n[0]).slice(0,2).join('')}
              </div>
            </div>

            <div className="text-sm leading-relaxed italic text-slate-100">“{t.quote}”</div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div>
              <div className="font-semibold">{t.name}</div>
              <div className="text-xs text-slate-300">{t.title}</div>
            </div>
            <Quote className="w-6 h-6 text-primary/60" />
          </div>
        </article>
      ))}
    </div>
  );

  return (
    <div
      ref={viewportRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div ref={scrollerRef} className="flex will-change-transform items-stretch" style={{ transform: 'translateX(0px)' }}>
        {single}
        {/* spacer to separate the end of the first sequence and start of the duplicate */}
        <div style={{ width: gapPx }} aria-hidden />
        {/* duplicate for seamless looping */}
        {single}
      </div>
    </div>
  );
}
