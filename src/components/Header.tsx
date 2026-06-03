import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { SITE } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/book", label: "Book" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-gold/20 shadow-deep" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8 h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Astro Vikram Ghosi" className="h-14 w-14 object-contain drop-shadow-[0_0_12px_rgba(212,175,55,0.45)] transition-transform group-hover:scale-105" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-xl text-gold-gradient font-semibold tracking-wide">Astro Vikram Ghosi</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Vedic · Cosmic · Guidance</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-gold transition-colors relative [&.active]:text-gold"
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center h-11 w-11 rounded-full bg-[oklch(0.7_0.18_150)] text-white shadow-gold hover:scale-105 transition-transform"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <a
            href={SITE.phoneHref}
            className="hidden sm:inline-flex items-center gap-2 h-11 px-5 rounded-full bg-gold-gradient text-primary-foreground font-semibold text-sm shadow-gold hover:scale-105 transition-transform"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden h-11 w-11 inline-flex items-center justify-center rounded-full glass-card text-gold"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gold/20 bg-background/95 backdrop-blur-xl">
          <nav className="container mx-auto px-4 py-4 flex flex-col">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground/90 hover:text-gold border-b border-border/40 last:border-0"
              >
                {n.label}
              </Link>
            ))}
            <a href={SITE.phoneHref} className="mt-4 inline-flex items-center justify-center gap-2 h-12 rounded-full bg-gold-gradient text-primary-foreground font-semibold">
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
