import { motion } from "motion/react";
import { ArrowRight, Utensils } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipO9OCtwSb1YrJe3jKc1YJPiLpfldBei8Pouy5IL=s1360-w1360-h1020-rw"
          alt="Tasquinha do Caco Ambiente"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/80 via-brand-ink/20 to-brand-ink" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <span className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-xl text-[10px] font-bold uppercase tracking-[0.4em] border border-white/10 text-brand-gold">
              Porto • Desde 2014
            </span>
          </motion.div>
          
          <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-display font-extrabold leading-[0.8] mb-6 tracking-tighter uppercase">
            <span className="block text-white/90">Tasquinha</span>
            <span className="block gold-gradient-text">Do Caco</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
            <div className="h-[1px] w-12 bg-brand-gold/30 hidden md:block" />
            <p className="text-sm md:text-lg font-serif italic text-white/60 max-w-xl">
              A tradição do Bolo do Caco abraça a modernidade no coração do Porto.
            </p>
            <div className="h-[1px] w-12 bg-brand-gold/30 hidden md:block" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16">
            <a
              href="#menu"
              className="group relative w-full sm:w-auto overflow-hidden bg-brand-gold text-brand-brown px-16 py-5 rounded-full font-bold uppercase tracking-widest transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explorar Menu <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="#reservations"
              className="w-full sm:w-auto border border-white/20 text-white px-16 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-brand-brown transition-all backdrop-blur-sm"
            >
              Reservar
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-brand-gold to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
