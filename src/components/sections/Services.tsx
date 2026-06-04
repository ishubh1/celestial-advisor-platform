import { Link } from "@tanstack/react-router";
import { Heart, HeartHandshake, Briefcase, TrendingUp, ScrollText, Users2, Home, Gem, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceItem = {
  slug: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  long: string;
  bullets: string[];
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    slug: "love-relationship",
    icon: Heart,
    title: "Love & Relationship",
    desc: "Clarity on compatibility, conflicts, reunion, and the path to lasting harmony.",
    long: "Understand the planetary patterns shaping your romantic life — from emotional compatibility and recurring conflicts to reunion possibilities and the right timing for commitment. Vikram ji decodes the 5th, 7th and Venus placements in your chart and prescribes simple remedies to dissolve misunderstandings.",
    bullets: ["Love compatibility reading", "Reunion & breakup guidance", "Venus & Moon remedies", "Right time to commit"],
  },
  {
    slug: "marriage",
    icon: HeartHandshake,
    title: "Marriage Consultation",
    desc: "Right timing, partner match, family harmony and remedies for marital bliss.",
    long: "From identifying the most auspicious marriage window to resolving Manglik, Nadi or Bhakoot doshas, every reading is personalised. Vikram ji helps couples and families navigate decisions about engagement timing, in-law relationships, and long-term marital harmony.",
    bullets: ["Marriage timing prediction", "Manglik & dosha remedies", "Family harmony guidance", "Post-marriage counselling"],
  },
  {
    slug: "career",
    icon: Briefcase,
    title: "Career Astrology",
    desc: "Identify your strongest career path, growth windows, and decisive moves.",
    long: "Whether you are choosing a stream, switching jobs, or eyeing a promotion, your 10th house, Saturn and Sun reveal your most natural career direction. Get clarity on government vs private, abroad opportunities, and the next 12-month growth window.",
    bullets: ["Best-fit career path", "Job change & promotion timing", "Abroad / foreign opportunities", "Saturn & Sun remedies"],
  },
  {
    slug: "business",
    icon: TrendingUp,
    title: "Business Astrology",
    desc: "Auspicious timings, partnerships, expansion strategy and wealth alignment.",
    long: "Launching a venture, picking a partner, or planning an expansion? Vikram ji aligns your muhurat, partner compatibility, brand name vibrations and 2nd–11th house wealth flows so you move forward with cosmic backing and grounded strategy.",
    bullets: ["Muhurat for launch & deals", "Partner compatibility check", "Business name numerology", "Wealth & cash-flow remedies"],
  },
  {
    slug: "kundli",
    icon: ScrollText,
    title: "Kundli Analysis",
    desc: "Deep birth-chart reading covering every house, dasha and planetary placement.",
    long: "A full janma kundli reading covering all 12 houses, current Mahadasha and Antardasha, planetary strengths, doshas and yogas. You receive a clear life-roadmap with timing of major events and exact remedies tailored to your chart.",
    bullets: ["Complete 12-house reading", "Mahadasha & Antardasha timing", "Yogas & dosha analysis", "Personalised remedies"],
  },
  {
    slug: "kundli-matching",
    icon: Users2,
    title: "Kundli Matching",
    desc: "Comprehensive guna milan and dosha analysis for confident matrimony.",
    long: "Beyond a simple 36-guna score, Vikram ji compares Mangal dosha, Nadi dosha, Bhakoot, longevity and mental compatibility — and recommends powerful remedies when the match needs strengthening, so families can move forward with full confidence.",
    bullets: ["Detailed 36-guna milan", "Mangal & Nadi dosha check", "Longevity & health match", "Remedies for low scores"],
  },
  {
    slug: "vastu",
    icon: Home,
    title: "Vastu Consultation",
    desc: "Energize home and workplace through scientific Vastu correction.",
    long: "Most Vastu problems can be solved without breaking walls. Get room-wise corrections for bedroom, kitchen, pooja room, office cabin and main entrance using mirrors, colours, salts and yantras — bringing peace, prosperity and positive flow.",
    bullets: ["Home & office Vastu audit", "No-demolition corrections", "Direction-wise remedies", "Yantras & energy tools"],
  },
  {
    slug: "gemstone",
    icon: Gem,
    title: "Gemstone Guidance",
    desc: "Personally calibrated gemstones to amplify favourable planetary energy.",
    long: "Wrong gemstones can harm more than help. Vikram ji recommends the correct primary and supportive stones based on your ascendant, dasha and planetary strengths — along with weight, metal, finger and the right muhurat to wear them.",
    bullets: ["Right stone for your chart", "Weight, metal & finger", "Wearing muhurat", "Substitute & affordable options"],
  },
];

const services = SERVICES_LIST;

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
            <article key={s.slug} className="group relative glass-card rounded-2xl p-6 hover:border-gold/60 transition-all duration-500 hover:-translate-y-1 flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-mystic/0 group-hover:from-gold/10 group-hover:to-mystic/10 rounded-2xl transition-all duration-500 pointer-events-none" />
              <div className="relative flex-1 flex flex-col">
                <div className="h-14 w-14 rounded-xl bg-gold-gradient grid place-items-center text-primary-foreground shadow-gold mb-5">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{s.desc}</p>
                <Link
                  to="/services"
                  hash={s.slug}
                  className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:gap-3 transition-all relative z-10"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesDetailed() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 space-y-10">
        {SERVICES_LIST.map((s) => (
          <article id={s.slug} key={s.slug} className="glass-card rounded-3xl p-8 lg:p-10 grid lg:grid-cols-[auto_1fr] gap-8 scroll-mt-28">
            <div className="h-20 w-20 rounded-2xl bg-gold-gradient grid place-items-center text-primary-foreground shadow-gold">
              <s.icon className="h-10 w-10" />
            </div>
            <div>
              <h3 className="font-display text-2xl lg:text-3xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{s.long}</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-foreground/85">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
