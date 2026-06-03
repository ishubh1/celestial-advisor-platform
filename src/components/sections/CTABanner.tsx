import { Phone, MessageCircle, Sparkles } from "lucide-react";
import { StarField } from "@/components/StarField";
import { SITE } from "@/lib/site";

export function CTABanner() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl gold-border bg-gradient-to-br from-[oklch(0.18_0.08_285)] via-[oklch(0.22_0.12_295)] to-[oklch(0.16_0.06_280)] p-10 lg:p-16 text-center">
          <StarField density={30} />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-64 bg-gold/30 blur-3xl rounded-full" />
          <div className="relative">
            <Sparkles className="h-10 w-10 text-gold mx-auto mb-4" />
            <h2 className="font-display text-3xl lg:text-5xl font-medium max-w-3xl mx-auto">
              Need Guidance for <span className="text-gold-gradient">Important Life Decisions?</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Speak directly with Vikram ji today. Confidential, personalized, and rooted in classical Vedic wisdom.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href={SITE.phoneHref} className="inline-flex items-center justify-center gap-3 h-14 px-8 rounded-full bg-gold-gradient text-primary-foreground font-semibold shadow-gold hover:scale-[1.03] transition-transform">
                <Phone className="h-5 w-5" /> Call Now
              </a>
              <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 h-14 px-8 rounded-full bg-[oklch(0.65_0.18_150)] text-white font-semibold hover:scale-[1.03] transition-transform">
                <MessageCircle className="h-5 w-5" /> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
