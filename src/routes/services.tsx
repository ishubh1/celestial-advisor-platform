import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Services, ServicesDetailed } from "@/components/sections/Services";
import { CTABanner } from "@/components/sections/CTABanner";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Astrology Services — Love, Career, Marriage, Business | Astro Vikram Ghosi" },
      { name: "description", content: "Explore personalized Vedic astrology services including kundli analysis, marriage matching, career guidance, Vastu and gemstone consultations." },
      { property: "og:title", content: "Astrology Services — Astro Vikram Ghosi" },
      { property: "og:description", content: "Personalized Vedic astrology services tailored to your life." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: () => (
    <Layout>
      <div className="pt-10">
        <Services />
        <ServicesDetailed />
        <CTABanner />
      </div>
    </Layout>
  ),
});
