import { Award } from "lucide-react";
import cert1 from "@/assets/cert-1.jpg.asset.json";
import cert2 from "@/assets/cert-2.jpg.asset.json";
import cert3 from "@/assets/cert-3.jpg.asset.json";
import cert4 from "@/assets/cert-4.jpg.asset.json";

const certs = [
  { title: "Jyotish Bhushan", issuer: "All India Federation of Astrologers' Societies (AIFAS)", src: cert1.url },
  { title: "Honorary Doctorate", issuer: "Asia Vedic Culture Research University", src: cert2.url },
  { title: "Jyotish Bhushan", issuer: "Future Point · AIFAS", src: cert3.url },
  { title: "International Certified Consultant", issuer: "International Astrology Federation (IAF)", src: cert4.url },
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
            Formal accreditations from leading Vedic and international astrology bodies — proof of a
            disciplined, lifelong study of the shastras.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((c) => (
            <div key={c.title + c.issuer} className="glass-card rounded-2xl p-5 group hover:border-gold/60 transition-all">
              <div className="aspect-[3/4] rounded-xl overflow-hidden gold-border bg-gradient-to-br from-[oklch(0.18_0.08_285)] to-[oklch(0.12_0.05_280)] grid place-items-center mb-4">
                {c.src ? (
                  <img src={c.src} alt={`${c.title} certificate issued by ${c.issuer}`} className="h-full w-full object-cover" loading="lazy" />
                ) : (
                  <div className="text-center p-4">
                    <Award className="h-12 w-12 text-gold mx-auto mb-2" />
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Certificate</div>
                  </div>
                )}
              </div>
              <div className="font-display text-lg font-semibold leading-tight">{c.title}</div>
              <div className="text-xs text-muted-foreground mt-1 leading-snug">{c.issuer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
