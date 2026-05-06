import { motion } from "framer-motion";

export default function HabitCard({ habit, image, index, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      whileHover={{ scale: 1.02, y: -4 }}
      onClick={() => onOpen(habit)}
      className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-square"
    >
      <img
        src={image}
        alt={habit.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${habit.color} transition-opacity duration-500`} />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
        <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-white/60 mb-2">
          {habit.law}
        </p>
        <h3 className="font-heading text-2xl md:text-3xl font-semibold text-white mb-2">
          {habit.title}
        </h3>
        <p className="font-body text-sm text-white/70 mb-3">
          {habit.subtitle}
        </p>

        {/* Hover reveal tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="font-body text-sm text-white/90 italic opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          {habit.tagline}
        </motion.p>

        <div className="mt-4 flex items-center gap-2 text-white/50 group-hover:text-white/90 transition-colors">
          <span className="text-xs font-body font-medium tracking-wider uppercase">
            Découvrir
          </span>
          <span className="text-xs transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </motion.div>
  );
}