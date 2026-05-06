import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Eye } from "lucide-react";

const TYPE_STYLE = {
  positive:    { dot: "#2F6B4F", label: "À faire" },
  negative:    { dot: "#9C3D3D", label: "À éviter" },
  observation: { dot: "#B89B5E", label: "Observer" },
};

const IMPACT_LABEL = { low: "Faible", medium: "Moyen", high: "Fort" };

export default function HabitCardToday({ habit, objective, onValidate, onMiss }) {
  const status = habit.todayStatus;
  const ts = TYPE_STYLE[habit.type] || TYPE_STYLE.positive;
  const done = status === "completed";
  const missed = status === "missed";

  return (
    <motion.div layout
      className="relative rounded-2xl border p-5 transition-all"
      style={{
        background: done ? "#E7F2EB" : missed ? "#F5E6E3" : "#FFFFFF",
        borderColor: done ? "#2F6B4F33" : missed ? "#9C3D3D33" : "#E7E0D6",
        opacity: (done || missed) ? 0.85 : 1,
      }}>
      {/* Header row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          {/* Type dot + label */}
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: ts.dot }} />
            <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: ts.dot }}>
              {ts.label}
            </span>
          </div>

          <h4 className="font-heading text-base font-semibold leading-snug"
            style={{ color: "#111111", textDecoration: done ? "line-through" : "none" }}>
            {habit.title}
          </h4>

          {/* Linked objective */}
          {objective && (
            <p className="text-xs mt-1" style={{ color: "#6F6A61" }}>
              → {objective.title}
            </p>
          )}

          {/* Impact */}
          <p className="text-[11px] mt-1.5 font-medium" style={{ color: "#6F6A61" }}>
            Impact : {IMPACT_LABEL[habit.impact.level]}
            {habit.durationMinutes ? ` · ${habit.durationMinutes} min` : ""}
          </p>
        </div>

        {/* Action buttons */}
        <AnimatePresence mode="wait">
          {!status ? (
            <motion.div key="actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="flex flex-col gap-2 flex-shrink-0">
              {habit.type === "observation" ? (
                <button onClick={() => onValidate(habit.id)}
                  className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all hover:scale-105"
                  style={{ borderColor: "#B89B5E", color: "#B89B5E" }}>
                  <Eye className="w-4 h-4" />
                </button>
              ) : (
                <>
                  <button onClick={() => onValidate(habit.id)}
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all hover:scale-105"
                    style={{ borderColor: "#2F6B4F", color: "#2F6B4F" }}>
                    <Check className="w-4 h-4" />
                  </button>
                  <button onClick={() => onMiss(habit.id)}
                    className="w-8 h-8 rounded-full border flex items-center justify-center transition-all hover:scale-105 self-center"
                    style={{ borderColor: "#E7E0D6", color: "#6F6A61" }}>
                    <X className="w-3.5 h-3.5" />
                  </button>
                </>
              )}
            </motion.div>
          ) : (
            <motion.div key="status" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: done ? "#2F6B4F" : "#9C3D3D" }}>
              {done ? <Check className="w-4 h-4 text-white" /> : <X className="w-4 h-4 text-white" />}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}