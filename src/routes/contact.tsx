import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { LeadForm } from "@/components/sections/LeadForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Astro Vikram Ghosi — Call, WhatsApp or Email" },
      { name: "description", content: "Reach Astro Vikram Ghosi via call, WhatsApp or email. Personalized Vedic astrology consultations available Mon–Sat." },
      { property: "og:title", content: "Contact Astro Vikram Ghosi" },
      { property: "og:description", content: "Get in touch for confidential astrology guidance." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => <Layout><LeadForm /></Layout>,
});
