import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Award, Sparkles, BookOpen, Heart } from "lucide-react";
import astrologer from "@/assets/astrologer.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Astro Vikram Ghosi — Vedic Astrologer & Spiritual Guide" },
      { name: "description", content: "Learn about Astro Vikram Ghosi, a Vedic astrologer with 13+ years of experience and 5,000+ consultations across India and abroad." },
      { property: "og:title", content: "About Astro Vikram Ghosi" },
      { property: "og:description", content: "Vedic astrologer with 13+ years of practice." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gold/20 blur-3xl rounded-full" />
            <img src={astrologer} alt="Astro Vikram Ghosi" className="relative rounded-3xl gold-border shadow-deep w-full aspect-[4/5] object-cover" />
          </div>
          <div className="space-y-6">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">About Vikram Ji</div>
            <h1 className="font-display text-4xl lg:text-6xl font-medium">A Lifetime Devoted to <span className="text-gold-gradient">Vedic Wisdom</span></h1>
            <p className="text-muted-foreground leading-relaxed">
              Astro Vikram Ghosi began his journey into Vedic astrology under the guidance of revered
              gurus in Varanasi. With over 13 years of dedicated practice and 5,000+ resolved
              consultations, he has become a trusted advisor to families, professionals and
              entrepreneurs across India and the diaspora.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              His approach blends classical Jyotish scriptures with a modern, compassionate
              perspective — translating ancient wisdom into clear, practical guidance that respects
              your time, autonomy and circumstances.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: Award, label: "13+ Years Experience" },
                { icon: Sparkles, label: "5,000+ Consultations" },
                { icon: BookOpen, label: "Classical Jyotish" },
                { icon: Heart, label: "Compassionate Approach" },
              ].map((b) => (
                <div key={b.label} className="glass-card rounded-xl p-4 flex items-center gap-3">
                  <b.icon className="h-5 w-5 text-gold" />
                  <div className="text-sm font-medium">{b.label}</div>
                </div>
              ))}
            </div>
            <Link to="/book" className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-gold-gradient text-primary-foreground font-semibold shadow-gold">Book a Consultation</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
