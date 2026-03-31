import React from "react";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-ink pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <img 
                src="https://scontent.flis9-1.fna.fbcdn.net/v/t39.30808-1/253689414_2970023079927349_5359916755120940037_n.png?stp=dst-png_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=YtgTpdnWrqAQ7kNvwEVTxpX&_nc_oc=AdrqHf6XABNuwVdrqlqDciTrv8ZBse0ydSeNe28pvLcEPGicNn4F6Gb__KYorjTgwZU&_nc_zt=24&_nc_ht=scontent.flis9-1.fna&_nc_gid=gW3VCnRFWk2rizpXd-PDZg&_nc_ss=7a389&oh=00_AfxBhbqazBENZn2lkAQw0njheqDb8bSDg0ZFlpLCOlXwcg&oe=69D18899" 
                alt="Tasquinha do Caco" 
                className="h-24 w-auto object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
              <span className="text-lg font-display font-bold tracking-tighter uppercase">
                Tasquinha <span className="text-brand-gold">do Caco</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              A autêntica experiência do Bolo do Caco no coração do Porto. Tradição, qualidade e sabor desde 2014.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-brown transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold mb-8">Navegação</h4>
            <ul className="space-y-4">
              {["Início", "O Conceito", "Menu", "Reservas"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(" ", "")}`} className="text-white/60 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold mb-8">Contactos</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-gold" />
                Rua Amândio Galhano nº 51, Porto
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold" />
                +351 225 400 532
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-gold" />
                geral@tasquinhadocaco.pt
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold mb-8">Newsletter</h4>
            <p className="text-white/40 text-sm mb-6">Subscreva para receber novidades e ofertas exclusivas.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Seu email"
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-brand-gold/50 transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 px-6 bg-brand-gold text-brand-brown rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-all">
                OK
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
          <p>© 2026 Tasquinha do Caco. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
