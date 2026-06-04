import { UserCheck, Award, Lock, CheckCircle2, MessageCircle, FileText, Sparkles } from "lucide-react";
import { SITE } from "@/lib/site";

const reasons = [
  { icon: UserCheck, title: "Personalized Consultation", desc: "Every reading is hand-prepared for your unique chart — never generic forecasts." },
  { icon: Award, title: "Experienced Guidance", desc: "Over 13 years of dedicated Vedic practice and 5,000+ resolved consultations." },
  { icon: Lock, title: "Confidential Sessions", desc: "Your details and conversations stay strictly between you and Vikram ji." },
  { icon: CheckCircle2, title: "Practical Solutions", desc: "Clear, doable remedies — mantras, gemstones, rituals — that fit modern life." },
];

const steps = [
  { icon: MessageCircle, title: "Message on WhatsApp", desc: "Reach out via WhatsApp to schedule your consultation in minutes." },
  { icon: FileText, title: "Share Your Details", desc: "Provide your birth date, time, place and the concern you'd like guidance on." },
  { icon: Sparkles, title: "Receive Guidance", desc: "Get a personalized reading with clear remedies and next-step recommendations." },
];

export function WhyChoose() {
  return (
    <section className="relative py-24 lg:py-32 bg-royal-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Why Choose Vikram Ji</div>
          <h2 className="font-display text-4xl lg:text-5xl font-medium">
            Guidance You Can <span className="text-gold-gradient">Truly Trust</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r.title} className="glass-card rounded-2xl p-6 text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-gold-gradient grid place-items-center text-primary-foreground shadow-gold mb-4">
                <r.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">How It Works</div>
          <h2 className="font-display text-4xl lg:text-5xl font-medium">Three Simple Steps to <span className="text-gold-gradient">Clarity</span></h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3 relative">
          <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          {steps.map((s, i) => (
            <div key={s.title} className="relative text-center">
              <div className="relative mx-auto h-20 w-20 mb-6">
                <div className="absolute inset-0 rounded-full bg-gold/20 blur-xl" />
                <div className="relative h-20 w-20 rounded-full bg-gold-gradient grid place-items-center text-primary-foreground shadow-gold">
                  <s.icon className="h-8 w-8" />
                </div>
                <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full glass-card grid place-items-center text-gold font-semibold text-sm">
                  {i + 1}
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-[oklch(0.65_0.18_150)] text-white font-semibold shadow-gold">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
