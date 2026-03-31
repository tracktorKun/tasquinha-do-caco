import React from "react";
import { motion } from "motion/react";

export default function Story() {
  // Using the specific authentic Francesinha image provided by the user
  const francesinhaImage = "https://tasquinhadocaco.pt/wp-content/uploads/2021/08/francesinha-tasquinha-do-caco-hamburgueria-e-pregaria-porfolio-impact-transition-1024x683.jpg";

  return (
    <section id="story" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-12">
              <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
                O Nosso Conceito
              </span>
              <h2 className="text-5xl md:text-7xl font-display font-extrabold mb-8 leading-tight uppercase">
                A Alma do <br />
                <span className="gold-gradient-text italic font-serif lowercase">Bolo do Caco</span>
              </h2>
              <div className="w-24 h-1 bg-brand-gold/30 mb-8" />
            </div>

            <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light">
              <p className="text-brand-gold font-bold text-xl mb-4">
                O SPOT onde encontra os sabores autênticos do nosso país.
              </p>
              <p>
                Nascemos da paixão pela simplicidade e pela qualidade. A Tasquinha do Caco é mais do que um restaurante; é um tributo à tradição madeirense reinventada com o espírito vibrante do Porto.
              </p>
              <p className="font-serif italic text-white/90 border-l-2 border-brand-gold/40 pl-6 py-2">
                "O segredo está na paciência do pão e na frescura dos ingredientes que o abraçam."
              </p>
              <p>
                Cada hambúrguer e cada prego é servido no autêntico Bolo do Caco, garantindo uma textura e sabor inigualáveis que nos tornaram uma referência na cidade desde 2014.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <span className="block text-3xl font-display font-bold text-brand-gold mb-1">10+</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Anos de História</span>
              </div>
              <div>
                <span className="block text-3xl font-display font-bold text-brand-gold mb-1">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Artesanal</span>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl group">
              <img
                src={francesinhaImage}
                alt="Francesinha no Caco"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/60 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 right-8 bg-brand-gold p-6 rounded-2xl shadow-2xl rotate-3 group-hover:rotate-0 transition-transform">
                <span className="block text-brand-brown font-bold text-xs uppercase tracking-widest mb-1">Especialidade</span>
                <span className="block text-brand-brown font-display font-extrabold text-2xl">Francesinha</span>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-brand-gold/20 rounded-full animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-gold/5 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
