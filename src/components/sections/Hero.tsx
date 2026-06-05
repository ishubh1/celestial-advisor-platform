import { MessageCircle, Sparkles, ShieldCheck, Users, Lock } from "lucide-react";
import { StarField } from "@/components/StarField";
import astrologer from "@/assets/astrologer.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { SITE } from "@/lib/site";

const trust = [
  { icon: Users, label: "5,000+ Consultations" },
  { icon: ShieldCheck, label: "Trusted Guidance" },
  { icon: Sparkles, label: "Personalized Solutions" },
  { icon: Lock, label: "100% Confidential" },
];

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>
      <StarField density={60} />

      <div className="container relative mx-auto px-4 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-gold text-xs uppercase tracking-[0.25em]">
            <Sparkles className="h-3.5 w-3.5" /> Vedic Astrology · Since 2010
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] font-medium">
            Get <span className="text-gold-gradient">Trusted Astrology</span> Guidance for Love, Career, Marriage &amp; Business
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Astro Vikram Ghosi provides personalized Vedic astrology consultations to help you make
            confident, clear-headed decisions in every chapter of life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-3 h-14 px-8 rounded-full bg-[oklch(0.65_0.18_150)] text-white font-semibold shadow-gold hover:scale-[1.03] transition-transform">
              <MessageCircle className="h-5 w-5" /> WhatsApp Now
            </a>
            <a href="/book" className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full glass-card gold-border text-gold hover:bg-gold/10 transition-colors font-semibold">
              Book Consultation
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            {trust.map((t) => (
              <div key={t.label} className="flex flex-col items-center lg:items-start gap-2 text-center lg:text-left">
                <t.icon className="h-5 w-5 text-gold" />
                <div className="text-xs font-medium text-foreground/85 leading-tight">{t.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 bg-gold/20 blur-3xl rounded-full" />
          <div className="absolute -inset-2 bg-gradient-to-br from-gold/40 via-mystic/30 to-transparent rounded-3xl blur-xl animate-float-slow" />
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden gold-border shadow-deep">
            <img src={astrologer} alt="Astro Vikram Ghosi" className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent p-6">
              <div className="font-display text-2xl text-gold-gradient font-semibold">Vikram Ghosi</div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Vedic Astrologer &amp; Spiritual Guide</div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl px-5 py-4 shadow-gold hidden sm:block">
            <div className="text-3xl font-display text-gold-gradient font-semibold">13+</div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Years of practice</div>
          </div>
          <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-3 flex items-center gap-2 hidden sm:flex hover:scale-105 transition-transform">
            <MessageCircle className="h-5 w-5 text-[oklch(0.75_0.18_150)]" />
            <div>
              <div className="text-xs text-muted-foreground">Quick reply</div>
              <div className="text-sm font-semibold text-gold">WhatsApp Now</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
