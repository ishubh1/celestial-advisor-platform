import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How does an astrology consultation work?", a: "After you book, share your birth details and primary concern. Vikram ji studies your chart in depth and conducts a one-on-one session (call/video) explaining findings, timing, and remedies in clear language." },
  { q: "Do I need my exact birth details?", a: "Yes — accurate date, time and place of birth are essential for a precise Vedic reading. If exact time is unknown, we can use rectification techniques." },
  { q: "Can I consult online or only in person?", a: "Both options are available. Most clients prefer phone, WhatsApp video, or Zoom consultations from anywhere in the world." },
  { q: "How long is each session?", a: "A standard consultation is 45–60 minutes. Detailed kundli readings or business strategy sessions may extend to 90 minutes." },
  { q: "What services are offered?", a: "Love & relationship, marriage matching, career, business, kundli analysis, Vastu, gemstone guidance, and complete remedial astrology." },
  { q: "Is my personal information kept confidential?", a: "Absolutely. Every consultation is private. Your details and discussion are never shared with anyone." },
  { q: "How soon will I see results from remedies?", a: "Subtle shifts often appear within days, while major life changes typically manifest over 3–6 months depending on planetary cycles." },
  { q: "Do you provide gemstone recommendations?", a: "Yes — gemstones are recommended only after thorough chart analysis to ensure they truly benefit you, with sourcing guidance for authentic stones." },
  { q: "What payment methods are accepted?", a: "UPI, bank transfer, all major cards and international payment options. Payment details are shared upon booking." },
  { q: "Can I get follow-up support after the session?", a: "Yes — every consultation includes 7 days of WhatsApp follow-up for clarification on any guidance shared." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Frequently Asked</div>
          <h2 className="font-display text-4xl lg:text-5xl font-medium">Your <span className="text-gold-gradient">Questions Answered</span></h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`glass-card rounded-2xl overflow-hidden transition-all ${isOpen ? "border-gold/50" : ""}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-display text-lg font-semibold text-foreground">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 text-gold shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
