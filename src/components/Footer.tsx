import { Link } from "@tanstack/react-router";
import { MessageCircle, Mail, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-gold/20 bg-royal-gradient">
      <div className="container mx-auto px-4 lg:px-8 py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="" className="h-14 w-14" loading="lazy" />
            <div className="font-display text-2xl text-gold-gradient font-semibold">Astro Vikram Ghosi</div>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Trusted Vedic astrology guidance for love, marriage, career and business. Personalized,
            confidential consultations rooted in over a decade of practice.
          </p>
        </div>

        <div>
          <h4 className="text-gold font-semibold mb-4 uppercase tracking-wider text-xs">Explore</h4>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/book" className="hover:text-gold">Book Consultation</Link></li>
            <li><Link to="/faq" className="hover:text-gold">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold font-semibold mb-4 uppercase tracking-wider text-xs">Reach Us</h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li>
              <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold">
                <MessageCircle className="h-4 w-4 text-gold" /> Chat instantly
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-gold">
                <Mail className="h-4 w-4 text-gold" /> {SITE.email}
              </a>
            </li>
            <li>
              <a href={SITE.instagramHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold">
                <Instagram className="h-4 w-4 text-gold" /> @{SITE.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Astro Vikram Ghosi · All rights reserved</div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-gold">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
