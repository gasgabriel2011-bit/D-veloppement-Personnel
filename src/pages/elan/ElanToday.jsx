import { motion } from "framer-motion";
import HabitCardToday from "../../components/elan/HabitCardToday";

function greeting() {
  const h = new Date().getHours();
  if (h < 5) return "Bonne nuit";
  if (h < 12) return "Bonjour";
  if (h < 18) return "Bon après-midi";
  return "Bonsoir";
}

const MOTIVATING = [
  "Voici les actions qui font avancer tes objectifs.",
  "Avance doucement, mais clairement.",
  "Chaque validation compte.",
  "Tu construis ton système, pas à pas.",
];

export default function ElanToday({ todayHabits, completedToday, totalToday, objectives, validateHabit }) {
  const pct = totalToday > 0 ? Math.round((completedToday / totalToday) * 100) : 0;
  const phrase = MOTIVATING[new Date().getDay() % MOTIVATING.length];
  const today = new Date().toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });

  // Unique impacted objectives today
  const impactedObjIds = [...new Set(todayHabits.map(h => h.objectiveId))];
  const impactedObjs = impactedObjIds.map(id => objectives.find(o => o.id === id)).filter(Boolean);

  return (
    <div className="max-w-2xl mx-auto px-5 py-10 space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-1" style={{ color: "#B89B5E" }}>
          {today}
        </p>
        <h1 className="font-heading text-3xl font-semibold mb-1" style={{ color: "#111111" }}>
          {greeting()}
        </h1>
        <p className="text-sm" style={{ color: "#6F6A61" }}>{phrase}</p>
      </motion.div>

      {/* Overview card */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
        className="rounded-2xl p-6 border" style={{ background: "#FFFFFF", borderColor: "#E7E0D6" }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="font-heading text-2xl font-semibold" style={{ color: "#111111" }}>
              {completedToday} <span className="text-base font-body font-normal" style={{ color: "#6F6A61" }}>sur {totalToday}</span>
            </p>
            <p className="text-sm" style={{ color: "#6F6A61" }}>actions validées aujourd'hui</p>
          </div>
          <div className="text-right">
            <p className="font-heading text-2xl font-semibold" style={{ color: "#111111" }}>{pct}%</p>
            <p className="text-xs" style={{ color: "#6F6A61" }}>complétion</p>
          </div>
        </div>
        {/* Progress bar */}
        <div className="h-1.5 rounded-full" style={{ background: "#E7E0D6" }}>
          <motion.div className="h-full rounded-full"
            style={{ background: pct === 100 ? "#2F6B4F" : "#111111" }}
            initial={{ width: 0 }} animate={{ width: `${pct}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }} />
        </div>
        {pct === 100 && (
          <p className="text-xs mt-3 font-medium" style={{ color: "#2F6B4F" }}>
            Belle régularité aujourd'hui. Ton système avance.
          </p>
        )}
      </motion.div>

      {/* Habit list */}
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#6F6A61" }}>
          Tes actions du jour
        </p>
        {todayHabits.length === 0 ? (
          <div className="rounded-2xl border p-8 text-center" style={{ background: "#FFFFFF", borderColor: "#E7E0D6" }}>
            <p className="text-sm" style={{ color: "#6F6A61" }}>
              Aucune habitude prévue aujourd'hui.
              <br />Ajoute-en une dans l'onglet Habitudes.
            </p>
          </div>
        ) : (
          todayHabits.map((h, i) => (
            <motion.div key={h.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.04 }}>
              <HabitCardToday
                habit={h}
                objective={objectives.find(o => o.id === h.objectiveId)}
                onValidate={(id) => validateHabit(id, "completed")}
                onMiss={(id) => validateHabit(id, "missed")}
              />
            </motion.div>
          ))
        )}
      </div>

      {/* Impacted objectives */}
      {impactedObjs.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="rounded-2xl border p-5" style={{ background: "#F8F5EF", borderColor: "#E7E0D6" }}>
          <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#6F6A61" }}>
            Ces actions font avancer
          </p>
          <div className="space-y-2">
            {impactedObjs.map(obj => (
              <div key={obj.id} className="flex items-center justify-between">
                <p className="text-sm font-medium" style={{ color: "#111111" }}>{obj.title}</p>
                <span className="text-xs font-semibold" style={{ color: "#6F6A61" }}>{obj.progress}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}