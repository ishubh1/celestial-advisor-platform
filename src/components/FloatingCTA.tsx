import { MessageCircle, Instagram } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={SITE.instagramHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="group relative h-14 w-14 rounded-full bg-gradient-to-tr from-[oklch(0.6_0.22_25)] via-[oklch(0.55_0.25_330)] to-[oklch(0.6_0.2_280)] text-white grid place-items-center shadow-gold hover:scale-110 transition-transform"
      >
        <Instagram className="h-6 w-6 relative" />
      </a>
      <a
        href={SITE.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative h-14 w-14 rounded-full bg-[oklch(0.7_0.18_150)] text-white grid place-items-center shadow-gold hover:scale-110 transition-transform"
      >
        <span className="absolute inset-0 rounded-full bg-[oklch(0.7_0.18_150)] animate-ping opacity-30" />
        <MessageCircle className="h-6 w-6 relative" />
      </a>
    </div>
  );
}
