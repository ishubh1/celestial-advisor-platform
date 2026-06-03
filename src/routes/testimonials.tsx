import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Testimonials — Astro Vikram Ghosi" },
      { name: "description", content: "Read stories from clients across India who found clarity and transformation through Astro Vikram Ghosi's Vedic guidance." },
      { property: "og:title", content: "Client Testimonials — Astro Vikram Ghosi" },
      { property: "og:description", content: "Real stories from 5,000+ consultations." },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: () => <Layout><Testimonials /><CTABanner /></Layout>,
});
