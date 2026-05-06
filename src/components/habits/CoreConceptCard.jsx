import { motion } from "framer-motion";

export default function CoreConceptCard({ concept, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      className="group bg-secondary/40 border border-border rounded-2xl p-7 hover:bg-secondary/70 transition-all duration-500 hover:shadow-lg"
    >
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-5">
        <span className="text-xs font-heading font-bold text-primary">
          {index + 1}
        </span>
      </div>
      <h4 className="font-heading text-xl font-semibold text-foreground mb-3">
        {concept.title}
      </h4>
      <p className="font-body text-sm leading-relaxed text-muted-foreground">
        {concept.description}
      </p>
    </motion.div>
  );
}