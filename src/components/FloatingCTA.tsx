import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
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
      <a
        href={SITE.phoneHref}
        aria-label="Call now"
        className="group relative h-14 w-14 rounded-full bg-gold-gradient text-primary-foreground grid place-items-center shadow-gold hover:scale-110 transition-transform"
      >
        <span className="absolute inset-0 rounded-full bg-gold animate-ping opacity-30" />
        <Phone className="h-6 w-6 relative" />
      </a>
    </div>
  );
}
