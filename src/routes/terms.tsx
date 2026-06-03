import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Astro Vikram Ghosi" },
      { name: "description", content: "Terms and conditions governing the use of Astro Vikram Ghosi consultation services." },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <Layout>
      <article className="container mx-auto px-4 lg:px-8 py-20 max-w-3xl prose prose-invert">
        <h1 className="font-display text-4xl lg:text-5xl text-gold-gradient mb-6">Terms &amp; Conditions</h1>
        <p className="text-muted-foreground">Consultations provided by Astro Vikram Ghosi are intended for guidance and self-reflection. They do not substitute professional medical, legal or financial advice. By booking a consultation you agree that decisions taken based on the guidance shared remain your responsibility.</p>
      </article>
    </Layout>
  ),
});
