import { Heart, Rings, Briefcase, TrendingUp, ScrollText, Users2, Home, Gem, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const services: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Heart, title: "Love & Relationship", desc: "Clarity on compatibility, conflicts, reunion, and the path to lasting harmony." },
  { icon: Rings, title: "Marriage Consultation", desc: "Right timing, partner match, family harmony and remedies for marital bliss." },
  { icon: Briefcase, title: "Career Astrology", desc: "Identify your strongest career path, growth windows, and decisive moves." },
  { icon: TrendingUp, title: "Business Astrology", desc: "Auspicious timings, partnerships, expansion strategy and wealth alignment." },
  { icon: ScrollText, title: "Kundli Analysis", desc: "Deep birth-chart reading covering every house, dasha and planetary placement." },
  { icon: Users2, title: "Kundli Matching", desc: "Comprehensive guna milan and dosha analysis for confident matrimony." },
  { icon: Home, title: "Vastu Consultation", desc: "Energize home and workplace through scientific Vastu correction." },
  { icon: Gem, title: "Gemstone Guidance", desc: "Personally calibrated gemstones to amplify favourable planetary energy." },
];

// Rings icon fallback (lucide doesn't ship Rings) — use a substitute via aliasing below if needed.
export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Our Services</div>
          <h2 className="font-display text-4xl lg:text-5xl font-medium">
            Guidance Tailored to <span className="text-gold-gradient">Every Life Chapter</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From love to legacy — each consultation is rooted in classical Vedic astrology and
            translated into practical, actionable steps.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article key={s.title} className="group relative glass-card rounded-2xl p-6 hover:border-gold/60 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-mystic/0 group-hover:from-gold/10 group-hover:to-mystic/10 rounded-2xl transition-all duration-500" />
              <div className="relative">
                <div className="h-14 w-14 rounded-xl bg-gold-gradient grid place-items-center text-primary-foreground shadow-gold mb-5">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                <a href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:gap-3 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
