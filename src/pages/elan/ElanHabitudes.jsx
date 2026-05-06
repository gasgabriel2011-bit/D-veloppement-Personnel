import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, PauseCircle } from "lucide-react";
import CreateHabitModal from "../../components/elan/CreateHabitModal";

const FILTERS = ["Toutes","À faire","À éviter","Observer","En pause"];
const TYPE_MAP = { positive: "À faire", negative: "À éviter", observation: "Observer" };
const IMPACT_LABEL = { low: "Faible", medium: "Moyen", high: "Fort" };
const DIFF_LABEL = { easy: "Facile", medium: "Moyenne", hard: "Difficile" };

const TYPE_STYLE = {
  positive:    { dot: "#2F6B4F", bg: "#E7F2EB", color: "#2F6B4F" },
  negative:    { dot: "#9C3D3D", bg: "#F5E6E3", color: "#9C3D3D" },
  observation: { dot: "#B89B5E", bg: "#F5EED8", color: "#B89B5E" },
};

export default function ElanHabitudes({ habits, objectives, addHabit, updateHabit, deleteHabit }) {
  const [filter, setFilter] = useState("Toutes");
  const [showCreate, setShowCreate] = useState(false);

  const filtered = habits.filter(h => {
    if (filter === "Toutes") return true;
    if (filter === "En pause") return h.status === "paused";
    return TYPE_MAP[h.type] === filter && h.status === "active";
  });

  return (
    <div className="max-w-2xl mx-auto px-5 py-10 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-semibold" style={{ color: "#111111" }}>Habitudes</h1>
          <p className="text-sm mt-0.5" style={{ color: "#6F6A61" }}>{habits.filter(h => h.status === "active").length} actives</p>
        </div>
        <button onClick={() => setShowCreate(true)}
          className="flex items-center gap-2 h-10 px-5 rounded-full text-sm font-semibold transition-all hover:opacity-90"
          style={{ background: "#111111", color: "#FFFFFF" }}>
          <Plus className="w-4 h-4" /> Ajouter
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap">
        {FILTERS.map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className="px-4 py-1.5 rounded-full text-xs font-semibold border transition-all"
            style={{
              background: filter === f ? "#111111" : "#FFFFFF",
              color: filter === f ? "#FFFFFF" : "#6F6A61",
              borderColor: filter === f ? "#111111" : "#E7E0D6",
            }}>
            {f}
          </button>
        ))}
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border p-10 text-center" style={{ background: "#FFFFFF", borderColor: "#E7E0D6" }}>
          <p className="text-sm" style={{ color: "#6F6A61" }}>
            Ajoute une première action simple.<br />Elle doit être assez petite pour être répétée.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((h, i) => {
            const ts = TYPE_STYLE[h.type] || TYPE_STYLE.positive;
            const obj = objectives.find(o => o.id === h.objectiveId);
            return (
              <motion.div key={h.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}
                className="rounded-2xl border p-5" style={{ background: "#FFFFFF", borderColor: "#E7E0D6" }}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    {/* Type badge */}
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2"
                      style={{ background: ts.bg, color: ts.color }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: ts.dot }} />
                      {TYPE_MAP[h.type]}
                    </span>
                    <h4 className="font-heading text-base font-semibold mb-1" style={{ color: "#111111" }}>
                      {h.title}
                    </h4>
                    {obj && <p className="text-xs mb-2" style={{ color: "#6F6A61" }}>→ {obj.title}</p>}
                    <div className="flex items-center gap-3 flex-wrap">
                      <Stat label="Série" value={`${h.streak} jr`} />
                      <Stat label="Meilleure" value={`${h.bestStreak} jr`} />
                      <Stat label="Réussite" value={`${h.completionRate}%`} />
                      <Stat label="Impact" value={IMPACT_LABEL[h.impact.level]} />
                      <Stat label="Points" value={`+${h.impact.points}`} color="#2F6B4F" />
                    </div>
                  </div>
                  {/* Actions */}
                  <div className="flex flex-col gap-2 flex-shrink-0">
                    <button onClick={() => updateHabit(h.id, { status: h.status === "active" ? "paused" : "active" })}
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:opacity-70"
                      style={{ background: "#F8F5EF", color: "#6F6A61" }}>
                      <PauseCircle className="w-4 h-4" />
                    </button>
                    <button onClick={() => deleteHabit(h.id)}
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:opacity-70"
                      style={{ background: "#F5E6E3", color: "#9C3D3D" }}>
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      <CreateHabitModal isOpen={showCreate} onClose={() => setShowCreate(false)} onSave={addHabit} objectives={objectives} />
    </div>
  );
}

function Stat({ label, value, color = "#6F6A61" }) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-[10px] uppercase tracking-wider" style={{ color: "#B0A99A" }}>{label}</span>
      <span className="text-xs font-semibold" style={{ color }}>{value}</span>
    </div>
  );
}