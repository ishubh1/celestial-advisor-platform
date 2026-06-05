import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { LeadForm } from "@/components/sections/LeadForm";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — Astro Vikram Ghosi" },
      { name: "description", content: "Book your personalized Vedic astrology consultation with Astro Vikram Ghosi. Confidential, accurate and life-changing guidance." },
      { property: "og:title", content: "Book a Consultation" },
      { property: "og:description", content: "Schedule your personalized Vedic astrology session today." },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: () => <Layout><LeadForm /></Layout>,
});
