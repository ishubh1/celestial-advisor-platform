import { Award } from "lucide-react";

// Replace the src values with your uploaded certificate image paths in src/assets/
const certs = [
  { title: "Jyotish Acharya", issuer: "Bharatiya Vidya Bhavan", src: "" },
  { title: "Vastu Shastra Expert", issuer: "All India Federation of Astrologers", src: "" },
  { title: "Vedic Numerology", issuer: "Indian Council of Astrological Sciences", src: "" },
  { title: "Lal Kitab Specialist", issuer: "Akhil Bharatiya Jyotish Sansthan", src: "" },
];

export function Certificates() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Credentials</div>
          <h2 className="font-display text-4xl lg:text-5xl font-medium">
            Certified &amp; <span className="text-gold-gradient">Recognized Expertise</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Formal accreditations across Vedic astrology, Vastu and allied sciences — proof of a
            disciplined, lifelong study of the shastras.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((c) => (
            <div key={c.title} className="glass-card rounded-2xl p-5 group hover:border-gold/60 transition-all">
              <div className="aspect-[3/4] rounded-xl overflow-hidden gold-border bg-gradient-to-br from-[oklch(0.18_0.08_285)] to-[oklch(0.12_0.05_280)] grid place-items-center mb-4">
                {c.src ? (
                  <img src={c.src} alt={`${c.title} certificate`} className="h-full w-full object-cover" loading="lazy" />
                ) : (
                  <div className="text-center p-4">
                    <Award className="h-12 w-12 text-gold mx-auto mb-2" />
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Upload certificate image</div>
                  </div>
                )}
              </div>
              <div className="font-display text-lg font-semibold">{c.title}</div>
              <div className="text-xs text-muted-foreground mt-1">{c.issuer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
