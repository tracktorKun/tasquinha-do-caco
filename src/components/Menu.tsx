import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Menu() {
  const suggestions = [
    {
      title: "Petiscos",
      image: "https://tasquinhadocaco.pt/wp-content/uploads/2021/08/pratos-tradicionais-tasquinha-do-caco-hamburgueria-e-pregaria-porfolio-impact-transition-768x512.jpg",
      desc: "Para partilhar com amigos"
    },
    {
      title: "Hambúrgueres",
      image: "https://tasquinhadocaco.pt/wp-content/uploads/2021/08/gg-768x512.jpeg",
      desc: "O clássico no Bolo do Caco"
    },
    {
      title: "Pregos",
      image: "https://tasquinhadocaco.pt/wp-content/uploads/2021/08/tradi-768x512.jpeg",
      desc: "Tradição em cada dentada"
    },
    {
      title: "Francesinhas",
      image: "https://tasquinhadocaco.pt/wp-content/uploads/2021/08/francesinha-tasquinha-do-caco-hamburgueria-e-pregaria-porfolio-impact-transition-1024x683.jpg",
      desc: "A nossa especialidade"
    }
  ];

  const alternatives = [
    {
      title: "Vegetarianos",
      image: "https://tasquinhadocaco.pt/wp-content/uploads/2021/08/Pimentos2.jpg",
      desc: "Sabor sem compromissos"
    },
    {
      title: "Celíacos",
      image: "https://tasquinhadocaco.pt/wp-content/uploads/2021/08/celiacos-tasquinha-do-caco-hamburgueria-e-pregaria-porfolio-impact-transition-1024x683.jpg",
      desc: "Opções sem glúten"
    }
  ];

  return (
    <section id="menu" className="py-32 bg-brand-ink/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">
            A Nossa Carta
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-extrabold uppercase mb-6 leading-relaxed">
            Sugestão <span className="gold-gradient-text italic font-serif lowercase pr-2 py-2 inline-block">do Chefe</span>
          </h2>
          <div className="w-24 h-1 bg-brand-gold/30 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {suggestions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden mb-6 shadow-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-display font-bold text-white mb-2 uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/60 uppercase tracking-widest font-bold">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">
                Inclusividade
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-extrabold uppercase">
                Alternativas <span className="gold-gradient-text italic font-serif lowercase">para todos</span>
              </h2>
            </div>
            <button className="px-10 py-4 rounded-full border border-white/10 text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-brand-brown transition-all">
              Ver Menu Completo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {alternatives.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-[400px] rounded-[40px] overflow-hidden shadow-2xl cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-ink via-brand-ink/40 to-transparent" />
                
                <div className="absolute inset-0 p-12 flex flex-col justify-center max-w-md">
                  <h3 className="text-4xl font-display font-bold text-white mb-4 uppercase">
                    {item.title}
                  </h3>
                  <p className="text-white/60 mb-8 leading-relaxed">
                    {item.desc}. Porque acreditamos que todos devem desfrutar do sabor autêntico do Bolo do Caco.
                  </p>
                  <div className="flex items-center gap-4 text-brand-gold font-bold text-xs uppercase tracking-widest group-hover:gap-6 transition-all">
                    Explorar <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
