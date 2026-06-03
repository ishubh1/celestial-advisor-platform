import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyChoose, HowItWorks } from "@/components/sections/WhyHow";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQ } from "@/components/sections/FAQ";
import { LeadForm } from "@/components/sections/LeadForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Astro Vikram Ghosi — Trusted Vedic Astrology for Love, Career & Marriage" },
      { name: "description", content: "Get personalized Vedic astrology guidance from Astro Vikram Ghosi. 5,000+ consultations across love, marriage, career, business, kundli, Vastu & gemstones." },
      { property: "og:title", content: "Astro Vikram Ghosi — Trusted Vedic Astrology" },
      { property: "og:description", content: "Personalized astrology consultations to help you make confident life decisions." },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Astro Vikram Ghosi",
        description: "Trusted Vedic astrology consultations for love, marriage, career and business.",
        telephone: "+91 98765 43210",
        priceRange: "₹₹",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "5000" },
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <Hero />
      <Services />
      <WhyChoose />
      <HowItWorks />
      <Testimonials />
      <CTABanner />
      <FAQ />
      <LeadForm />
    </Layout>
  );
}
