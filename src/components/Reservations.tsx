import React from "react";
import { motion } from "motion/react";
import { Phone, Clock } from "lucide-react";

export default function Reservations() {
  return (
    <section id="reservations" className="py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">
              Reserve a sua Mesa
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-extrabold uppercase mb-8 leading-tight">
              Momentos <br />
              <span className="gold-gradient-text italic font-serif lowercase">inesquecíveis</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-md leading-relaxed">
              Garanta o seu lugar na nossa tasquinha. Recomendamos reserva antecipada, especialmente aos fins de semana.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-gold/50 transition-colors">
                  <Phone className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Telefone</span>
                  <a href="tel:+351225400532" className="text-xl font-bold hover:text-brand-gold transition-colors">+351 225 400 532</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-gold/50 transition-colors">
                  <Clock className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Horário</span>
                  <p className="text-xl font-bold">12:00 - 23:00 (Ter-Dom)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Nome</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-gold/50 focus:outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Pessoas</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-gold/50 focus:outline-none transition-colors appearance-none">
                    <option className="bg-brand-brown">2 Pessoas</option>
                    <option className="bg-brand-brown">4 Pessoas</option>
                    <option className="bg-brand-brown">6+ Pessoas</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Data & Hora</label>
                <input
                  type="datetime-local"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-gold/50 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Notas</label>
                <textarea
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 h-32 focus:border-brand-gold/50 focus:outline-none transition-colors resize-none"
                  placeholder="Algum pedido especial?"
                ></textarea>
              </div>

              <button className="w-full bg-brand-gold text-brand-brown py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-brand-gold/10">
                Confirmar Reserva
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
