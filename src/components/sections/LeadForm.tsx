import { useState } from "react";
import { Send, Loader2, MessageCircle, Mail, Instagram } from "lucide-react";
import { SITE } from "@/lib/site";
import { toast } from "sonner";

const SERVICES = [
  "Love & Relationship",
  "Marriage Consultation",
  "Career Astrology",
  "Business Astrology",
  "Kundli Analysis",
  "Kundli Matching",
  "Vastu Consultation",
  "Gemstone Guidance",
];

export function LeadForm() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const service = String(fd.get("service") || "");
    const message = String(fd.get("message") || "").trim();

    if (name.length < 2 || name.length > 80) return toast.error("Please enter a valid name");
    if (!/^[+\d\s\-()]{7,20}$/.test(phone)) return toast.error("Please enter a valid phone number");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return toast.error("Please enter a valid email");
    if (message.length > 1000) return toast.error("Message too long");

    setLoading(true);
    const text = `Namaste Vikram ji,%0A%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AService: ${service}%0A%0A${encodeURIComponent(message)}`;
    setTimeout(() => {
      window.open(`https://wa.me/${SITE.whatsapp}?text=${text}`, "_blank");
      toast.success("Opening WhatsApp — Vikram ji will reply shortly");
      (e.target as HTMLFormElement).reset();
      setLoading(false);
    }, 600);
  }

  return (
    <section id="book" className="relative py-24 lg:py-32 bg-royal-gradient">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Book a Consultation</div>
            <h2 className="font-display text-4xl lg:text-5xl font-medium">Begin Your <span className="text-gold-gradient">Journey to Clarity</span></h2>
            <p className="mt-4 text-muted-foreground">
              Share a few details and Vikram ji's team will reach out personally within hours. For urgent queries, message on WhatsApp.
            </p>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3"><MessageCircle className="h-5 w-5 text-gold mt-0.5" /><div><div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div><a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-gold">Chat instantly</a></div></li>
            <li className="flex items-start gap-3"><Mail className="h-5 w-5 text-gold mt-0.5" /><div><div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div><a href={`mailto:${SITE.email}`} className="text-foreground hover:text-gold">{SITE.email}</a></div></li>
            <li className="flex items-start gap-3"><Instagram className="h-5 w-5 text-gold mt-0.5" /><div><div className="text-xs uppercase tracking-wider text-muted-foreground">Instagram</div><a href={SITE.instagramHref} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-gold">@{SITE.instagram}</a></div></li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-3 glass-card rounded-3xl p-8 lg:p-10 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" name="name" required maxLength={80} />
            <Field label="Phone" name="phone" required maxLength={20} inputMode="tel" />
          </div>
          <Field label="Email" name="email" type="email" maxLength={120} />
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Service Needed</label>
            <select name="service" className="w-full h-12 px-4 rounded-xl bg-input border border-border focus:border-gold focus:outline-none text-foreground">
              {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Your Message</label>
            <textarea name="message" rows={4} maxLength={1000} className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-gold focus:outline-none text-foreground resize-none" placeholder="Briefly share what guidance you're seeking…" />
          </div>
          <button type="submit" disabled={loading} className="w-full h-14 rounded-full bg-gold-gradient text-primary-foreground font-semibold shadow-gold hover:scale-[1.01] transition-transform flex items-center justify-center gap-2 disabled:opacity-70">
            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
            {loading ? "Sending…" : "Request Consultation"}
          </button>
          <p className="text-xs text-muted-foreground text-center">Your information stays 100% confidential.</p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">{label}{props.required && <span className="text-gold"> *</span>}</label>
      <input {...props} className="w-full h-12 px-4 rounded-xl bg-input border border-border focus:border-gold focus:outline-none text-foreground" />
    </div>
  );
}
