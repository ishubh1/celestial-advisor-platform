import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Astro Vikram Ghosi" },
      { name: "description", content: "Privacy policy for Astro Vikram Ghosi consultation services." },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <Layout>
      <article className="container mx-auto px-4 lg:px-8 py-20 max-w-3xl prose prose-invert">
        <h1 className="font-display text-4xl lg:text-5xl text-gold-gradient mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground">Your privacy is sacred to us. All birth details, consultation discussions and personal information shared with Astro Vikram Ghosi are kept strictly confidential and never shared with third parties. We use your contact details solely to deliver the consultation services you have requested.</p>
      </article>
    </Layout>
  ),
});
