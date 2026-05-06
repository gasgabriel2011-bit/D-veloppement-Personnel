import { motion } from "framer-motion";

export default function SubTopicCard({ topic, pillarColor, index, onClick }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.07, duration: 0.45 }}
      whileHover={{ y: -4 }}
      onClick={() => onClick(topic)}
      className="group relative min-h-[190px] overflow-hidden rounded-2xl border border-border bg-card p-6 text-left transition-colors hover:border-primary/30"
    >
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${pillarColor || "from-primary to-primary/40"}`} />
      <div className="flex h-full flex-col">
        <span className="mb-6 text-4xl">{topic.emoji}</span>
        <span className="font-heading text-2xl font-semibold text-foreground">
          {topic.title}
        </span>
        <span className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
          {topic.tagline}
        </span>
        <span className="mt-auto pt-6 font-body text-xs font-semibold uppercase tracking-wider text-primary/70 transition-colors group-hover:text-primary">
          Découvrir →
        </span>
      </div>
    </motion.button>
  );
}
