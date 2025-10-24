import { Button } from "@/components/ui/button";
import * as React from "react";
import heroImg from "@assets/generated_images/AI_technology_hero_illustration_02dbb40d.png";

type FormState = {
  name: string;
  email: string;
  phone: string;
  businessName?: string;
  message: string;
};

export default function CallToAction() {
  const [form, setForm] = React.useState<FormState>({ name: "", email: "", phone: "", businessName: "", message: "" });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) return "Please enter a valid email.";
    if (!form.phone.trim() || !/^\+?[0-9()\-\s\.]{7,}$/.test(form.phone)) return "Please enter a valid phone number.";
    if (!form.message.trim()) return "Please enter a message.";
    return null;
  };

  const onSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setError(null);
    const v = validate();
    if (v) return setError(v);

    setLoading(true);
    try {
      // Prepare payload matching backend expected keys (fullName)
      const payload = {
        businessName: form.businessName || "",
        fullName: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      };

  // Resolve API base from environment. Prefer VITE_API_BASE_URL, then VITE_CONTACT_ENDPOINT.
  // Fallback to relative /submit when no env is set (works with Vite dev proxy).
  const env = import.meta.env as unknown as Record<string, string | undefined>;
  const API_BASE = env.VITE_API_BASE_URL ?? env.VITE_CONTACT_ENDPOINT ?? "";
  const base = API_BASE ? API_BASE.replace(/\/$/, "") : "";
  const endpoint = base ? `${base}/submit` : "/submit";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to submit form");

  setSuccess(true);
  setForm({ name: "", email: "", phone: "", businessName: "", message: "" });
    } catch (err) {
      setError((err as Error).message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden scroll-mt-24 md:scroll-mt-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-chart-2 to-primary opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" data-testid="text-cta-heading">
          Let's grow your business with smart automation and targeted marketing.
        </h2>

        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Stop losing leads and start scaling with confidence. Book your free consultation today.
        </p>

        {success ? (
          <div className="p-6 bg-white/10 rounded-xl text-white inline-block shadow-2xl border border-white/10">
            Thank you — we'll get back to you shortly.
          </div>
        ) : (
          <form onSubmit={onSubmit} className="max-w-3xl mx-auto text-left p-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                {/* business name */}
                <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7V5a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v2" />
                    </svg>
                  </span>
                  <input
                    name="businessName"
                    value={form.businessName}
                    onChange={handleChange}
                    placeholder="Business name (optional)"
                      className="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-slate-900 placeholder:text-slate-500 text-lg border border-slate-200 outline-none focus:ring-4 focus:ring-primary/25"
                    aria-label="Business name (optional)"
                  />
                </div>

                {/* name */}
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A9 9 0 1 1 18.879 6.196 9 9 0 0 1 5.12 17.804z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    </svg>
                  </span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-slate-900 placeholder:text-slate-500 text-lg border border-slate-200 outline-none focus:ring-4 focus:ring-primary/25"
                    aria-label="Your name"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8" />
                    </svg>
                  </span>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-slate-900 placeholder:text-slate-500 text-lg border border-slate-200 outline-none focus:ring-4 focus:ring-primary/25"
                    aria-label="Email address"
                  />
                </div>

                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 16.92V21a1 1 0 0 1-1.11 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2 3.11 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75c.12.74.36 1.45.7 2.1a1 1 0 0 1-.24 1.05L8.5 8.5a16 16 0 0 0 7 7l1.6-1.05a1 1 0 0 1 1.05-.24c.65.34 1.36.58 2.1.7a1 1 0 0 1 .75 1V22z" />
                    </svg>
                  </span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-slate-900 placeholder:text-slate-500 text-lg border border-slate-200 outline-none focus:ring-4 focus:ring-primary/25"
                    aria-label="Phone number"
                  />
                </div>
              </div>

              <div className="mb-4">
                <div className="relative">
                  <span className="absolute left-3 top-4 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.7-1.1L3 19l1.1-3.3A9.863 9.863 0 0 1 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={5}
                    className="w-full pl-12 pr-4 py-4 rounded-lg bg-white text-slate-900 placeholder:text-slate-500 text-lg border border-slate-200 outline-none focus:ring-4 focus:ring-primary/25"
                    aria-label="Message"
                  />
                </div>
              </div>

              {error && <div className="text-red-300 mb-3">{error}</div>}

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-white text-primary rounded-full px-8 py-3 shadow-2xl transform hover:-translate-y-0.5 transition"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
                <span className="text-white/90 text-sm">or <a href="#contact" className="underline">book a call</a></span>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
