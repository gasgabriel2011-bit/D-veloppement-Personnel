import { motion } from "framer-motion";

export default function CategoryCard({ category, index, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      whileHover={{ y: -6 }}
      onClick={() => onOpen(category)}
      className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3]"
    >
      <img
        src={category.image}
        alt={category.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent transition-opacity duration-500" />

      <div className="relative z-10 h-full flex flex-col justify-end p-7">
        <h3 className="font-heading text-2xl md:text-3xl font-semibold text-white mb-1">
          {category.title}
        </h3>
        <p className="font-body text-sm text-white/70 group-hover:text-white/90 transition-colors">
          {category.tagline}
        </p>
        <div className="mt-4 flex items-center gap-2 text-white/40 group-hover:text-white/90 transition-colors">
          <span className="text-xs font-body font-medium tracking-wider uppercase">
            Explorer
          </span>
          <span className="text-xs transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </motion.div>
  );
}