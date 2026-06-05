import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — Astro Vikram Ghosi" },
      { name: "description", content: "Answers about how consultations work, what to expect, confidentiality, remedies and more." },
      { property: "og:title", content: "FAQ — Astro Vikram Ghosi" },
      { property: "og:description", content: "Your questions about Vedic astrology consultations answered." },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: () => <Layout><FAQ /><CTABanner /></Layout>,
});
