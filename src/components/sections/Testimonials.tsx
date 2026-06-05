import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  { name: "Priya Sharma", location: "Mumbai", text: "Vikram ji's guidance on my marriage was life-changing. His remedies brought peace to my home within weeks. Truly blessed to have consulted him." },
  { name: "Rohit Mehta", location: "Bangalore", text: "His career reading was incredibly accurate. I followed his timing for switching jobs and got my dream role with a 60% hike." },
  { name: "Anjali Verma", location: "Delhi", text: "The most compassionate astrologer I've consulted. He explains everything clearly without scare tactics. Highly recommended." },
  { name: "Suresh Iyer", location: "Chennai", text: "Vastu consultation for our new office transformed our business. Sales doubled within six months of his recommendations." },
  { name: "Neha Kapoor", location: "Pune", text: "His gemstone guidance was precise. I felt the positive shift in confidence and decision-making almost immediately." },
  { name: "Arjun Singh", location: "Hyderabad", text: "Honest, clear and incredibly insightful. Vikram ji helped me navigate a difficult relationship phase with grace." },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const visible = [testimonials[index], testimonials[(index + 1) % testimonials.length], testimonials[(index + 2) % testimonials.length]];
  return (
    <section className="relative py-24 lg:py-32 bg-royal-gradient overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Client Stories</div>
          <h2 className="font-display text-4xl lg:text-5xl font-medium">
            <span className="text-gold-gradient">5,000+ Lives</span> Touched
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {visible.map((t, i) => (
            <article key={`${index}-${i}`} className="glass-card rounded-2xl p-7 relative">
              <Quote className="absolute top-5 right-5 h-8 w-8 text-gold/30" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed italic mb-6">"{t.text}"</p>
              <div className="pt-4 border-t border-border/40">
                <div className="font-display text-lg font-semibold text-gold-gradient">{t.name}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{t.location}</div>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === index ? "bg-gold w-8" : "bg-gold/30 w-2"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
