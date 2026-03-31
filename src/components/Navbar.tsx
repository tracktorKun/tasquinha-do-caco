import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu as MenuIcon, X, Instagram, Facebook, Phone, Twitter, Youtube } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "O Conceito", href: "#story" },
    { name: "Menu", href: "#menu" },
    { name: "Reservas", href: "#reservations" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "py-4 bg-brand-ink/80 backdrop-blur-xl border-b border-white/5" 
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <a href="#home" className="flex items-center gap-4">
            <img 
              src="https://scontent.flis9-1.fna.fbcdn.net/v/t39.30808-1/253689414_2970023079927349_5359916755120940037_n.png?stp=dst-png_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=YtgTpdnWrqAQ7kNvwEVTxpX&_nc_oc=AdrqHf6XABNuwVdrqlqDciTrv8ZBse0ydSeNe28pvLcEPGicNn4F6Gb__KYorjTgwZU&_nc_zt=24&_nc_ht=scontent.flis9-1.fna&_nc_gid=gW3VCnRFWk2rizpXd-PDZg&_nc_ss=7a389&oh=00_AfxBhbqazBENZn2lkAQw0njheqDb8bSDg0ZFlpLCOlXwcg&oe=69D18899" 
              alt="Tasquinha do Caco" 
              className="h-16 w-auto object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
            <span className="text-xl font-display font-bold tracking-tighter uppercase hidden sm:block">
              Tasquinha <span className="text-brand-gold">do Caco</span>
            </span>
          </a>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 hover:text-brand-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+351225400532"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-brown transition-all"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-ink border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-12 flex flex-col gap-8 items-center text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-bold uppercase tracking-tighter"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-6 mt-8">
                <Instagram className="w-6 h-6 text-brand-gold" />
                <Facebook className="w-6 h-6 text-brand-gold" />
                <Twitter className="w-6 h-6 text-brand-gold" />
                <Youtube className="w-6 h-6 text-brand-gold" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
