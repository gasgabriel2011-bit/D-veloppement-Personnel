import { motion } from "framer-motion";
import ProgressRing from "./ProgressRing";
import TrendBadge from "./TrendBadge";

const CATEGORY_COLOR = {
  "Santé": "#2F6B4F", "Sport": "#2F6B4F", "Argent": "#B89B5E",
  "Travail": "#6F6A61", "Création": "#7C5A2E", "Développement personnel": "#4A6B8A",
  "Bien-être": "#2F6B4F",
};

export default function ObjectiveCard({ objective, habitsCount, onClick }) {
  const color = CATEGORY_COLOR[objective.category] || "#6F6A61";
  return (
    <motion.div whileHover={{ y: -2 }} onClick={onClick}
      className="rounded-2xl border p-6 cursor-pointer transition-all hover:shadow-sm"
      style={{ background: "#FFFFFF", borderColor: "#E7E0D6" }}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
              style={{ background: color + "15", color }}>
              {objective.category}
            </span>
            <TrendBadge trend={objective.trend} />
          </div>
          <h3 className="font-heading text-lg font-semibold leading-tight mb-1" style={{ color: "#111111" }}>
            {objective.title}
          </h3>
          <p className="text-sm leading-relaxed line-clamp-2" style={{ color: "#6F6A61" }}>
            {objective.why}
          </p>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex-1 h-1.5 rounded-full" style={{ background: "#E7E0D6" }}>
              <div className="h-full rounded-full transition-all" style={{ width: `${objective.progress}%`, background: color }} />
            </div>
            <span className="text-xs font-semibold flex-shrink-0" style={{ color: "#111111" }}>
              {objective.progress} %
            </span>
          </div>
          <p className="text-xs mt-2" style={{ color: "#6F6A61" }}>
            {habitsCount} habitude{habitsCount !== 1 ? "s" : ""} liée{habitsCount !== 1 ? "s" : ""}
            · {objective.subObjectives?.length || 0} sous-objectif{(objective.subObjectives?.length || 0) !== 1 ? "s" : ""}
          </p>
        </div>
        <ProgressRing progress={objective.progress} size={64} stroke={4} color={color} />
      </div>
    </motion.div>
  );
}