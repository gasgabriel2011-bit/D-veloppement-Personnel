import { motion } from "framer-motion";

export default function SubTopicCard({ topic, pillarColor, theme, index, onClick }) {
  const localTheme = theme || {
    accent: "#C9682D",
    accentSoft: "#F8F5EF",
    secondary: "#6F6A61",
    ink: "#111111",
    panel: "#FFFFFF",
    line: "#E7E0D6",
    cardVariant: "classic",
  };
  const principleCount = topic.principles?.length || 0;

  return (
    <motion.button
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.07, duration: 0.45 }}
      whileHover={{ y: -4 }}
      onClick={() => onClick(topic)}
      className={`group relative min-h-[220px] overflow-hidden rounded-[1.35rem] border p-6 text-left transition-all duration-300 pillar-card-${localTheme.cardVariant || "classic"}`}
      style={{
        backgroundColor: localTheme.panel,
        borderColor: localTheme.line,
        boxShadow: "0 18px 42px rgba(37, 42, 54, 0.07), inset 0 1px 0 rgba(255,255,255,0.7)",
      }}
    >
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${pillarColor || "from-primary to-primary/40"}`} />
      <div className="absolute right-0 top-0 h-full w-20 translate-x-8 skew-x-[-14deg] opacity-70 transition-transform duration-500 group-hover:translate-x-4"
        style={{ background: `linear-gradient(180deg, ${localTheme.accentSoft}, transparent)` }} />
      <div className="absolute bottom-0 left-0 h-24 w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `linear-gradient(180deg, transparent, ${localTheme.accentSoft})` }} />

      <div className="relative flex h-full flex-col">
        <div className="mb-6 flex items-start justify-between gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl text-3xl transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105"
            style={{ background: localTheme.accentSoft }}>
            {topic.emoji}
          </span>
          <span className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
            style={{ background: `${localTheme.accent}12`, color: localTheme.accent }}>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <span className="font-heading text-2xl font-semibold leading-tight" style={{ color: localTheme.ink }}>
          {topic.title}
        </span>
        <span className="mt-3 font-body text-sm leading-relaxed" style={{ color: "#6F6A61" }}>
          {topic.tagline}
        </span>

        <div className="mt-auto flex items-end justify-between gap-4 pt-7">
          <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: localTheme.secondary }}>
            {principleCount || "Bonus"} principe{principleCount > 1 ? "s" : ""}
          </span>
          <span className="rounded-full px-3 py-1.5 text-xs font-semibold transition-all group-hover:translate-x-1"
            style={{ background: localTheme.accent, color: "#FFFFFF" }}>
            Découvrir →
          </span>
        </div>
      </div>
    </motion.button>
  );
}
