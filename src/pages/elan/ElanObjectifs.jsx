import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ChevronRight, Trash2, PauseCircle } from "lucide-react";
import ObjectiveCard from "../../components/elan/ObjectiveCard";
import CreateObjectiveModal from "../../components/elan/CreateObjectiveModal";
import ProgressRing from "../../components/elan/ProgressRing";
import TrendBadge from "../../components/elan/TrendBadge";

export default function ElanObjectifs({ objectives, habits, addObjective, updateObjective, deleteObjective }) {
  const [showCreate, setShowCreate] = useState(false);
  const [selected, setSelected] = useState(null);

  const habitCount = (objId) => habits.filter(h => h.objectiveId === objId && h.status === "active").length;

  // Detail view
  if (selected) {
    const obj = objectives.find(o => o.id === selected);
    if (!obj) { setSelected(null); return null; }
    const relatedHabits = habits.filter(h => h.objectiveId === obj.id && h.status === "active");
    const IMPACT_LABEL = { low: "Faible", medium: "Moyen", high: "Fort" };
    const color = obj.progress >= 60 ? "#2F6B4F" : obj.progress >= 30 ? "#B89B5E" : "#9C3D3D";

    return (
      <div className="max-w-2xl mx-auto px-5 py-10">
        <button onClick={() => setSelected(null)}
          className="flex items-center gap-2 text-sm mb-8 font-medium transition-colors hover:opacity-70"
          style={{ color: "#6F6A61" }}>
          ← Retour aux objectifs
        </button>

        {/* Hero */}
        <div className="flex items-start gap-6 mb-8">
          <ProgressRing progress={obj.progress} size={88} stroke={5} color={color} />
          <div className="flex-1">
            <TrendBadge trend={obj.trend} />
            <h1 className="font-heading text-2xl font-semibold mt-2 mb-1" style={{ color: "#111111" }}>{obj.title}</h1>
            <p className="text-sm leading-relaxed" style={{ color: "#6F6A61" }}>{obj.why}</p>
          </div>
        </div>

        {/* Sub-objectives */}
        {obj.subObjectives?.length > 0 && (
          <section className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#6F6A61" }}>Sous-objectifs</p>
            <div className="space-y-2">
              {obj.subObjectives.map(sub => (
                <div key={sub.id} className="rounded-xl border p-4 flex items-center justify-between gap-4"
                  style={{ background: "#FFFFFF", borderColor: "#E7E0D6" }}>
                  <p className="text-sm font-medium" style={{ color: "#111111" }}>{sub.title}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-20 h-1 rounded-full" style={{ background: "#E7E0D6" }}>
                      <div className="h-full rounded-full" style={{ width: `${sub.progress}%`, background: "#2F6B4F" }} />
                    </div>
                    <span className="text-xs font-semibold w-10 text-right" style={{ color: "#6F6A61" }}>{sub.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related habits */}
        <section className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#6F6A61" }}>
            Habitudes liées ({relatedHabits.length})
          </p>
          {relatedHabits.length === 0 ? (
            <p className="text-sm" style={{ color: "#6F6A61" }}>Aucune habitude liée à cet objectif.</p>
          ) : (
            <div className="space-y-2">
              {relatedHabits.map(h => (
                <div key={h.id} className="rounded-xl border p-4 flex items-center justify-between"
                  style={{ background: "#FFFFFF", borderColor: "#E7E0D6" }}>
                  <div>
                    <p className="text-sm font-medium" style={{ color: "#111111" }}>{h.title}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#6F6A61" }}>
                      Impact {IMPACT_LABEL[h.impact.level]} · {h.streak} jr en série · {h.completionRate}% réussite
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: "#E7F2EB", color: "#2F6B4F" }}>+{h.impact.points} pts</span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Actions */}
        <div className="flex gap-3">
          <button onClick={() => { updateObjective(obj.id, { status: obj.status === "active" ? "paused" : "active" }); }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-medium transition-all hover:opacity-80"
            style={{ borderColor: "#E7E0D6", color: "#6F6A61", background: "#FFFFFF" }}>
            <PauseCircle className="w-4 h-4" />
            {obj.status === "active" ? "Mettre en pause" : "Reprendre"}
          </button>
          <button onClick={() => { deleteObjective(obj.id); setSelected(null); }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-medium transition-all hover:opacity-80"
            style={{ borderColor: "#F5E6E3", color: "#9C3D3D", background: "#F5E6E3" }}>
            <Trash2 className="w-4 h-4" />
            Supprimer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-5 py-10 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-semibold" style={{ color: "#111111" }}>Objectifs</h1>
          <p className="text-sm mt-0.5" style={{ color: "#6F6A61" }}>{objectives.filter(o => o.status === "active").length} actifs</p>
        </div>
        <button onClick={() => setShowCreate(true)}
          className="flex items-center gap-2 h-10 px-5 rounded-full text-sm font-semibold transition-all hover:opacity-90"
          style={{ background: "#111111", color: "#FFFFFF" }}>
          <Plus className="w-4 h-4" /> Ajouter
        </button>
      </div>

      {objectives.length === 0 ? (
        <div className="rounded-2xl border p-10 text-center" style={{ background: "#FFFFFF", borderColor: "#E7E0D6" }}>
          <p className="text-sm" style={{ color: "#6F6A61" }}>Commence par choisir une direction.<br />Tu pourras ensuite y relier tes habitudes.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {objectives.map((obj, i) => (
            <motion.div key={obj.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <ObjectiveCard
                objective={obj}
                habitsCount={habitCount(obj.id)}
                onClick={() => setSelected(obj.id)}
              />
            </motion.div>
          ))}
        </div>
      )}

      <CreateObjectiveModal isOpen={showCreate} onClose={() => setShowCreate(false)} onSave={addObjective} />
    </div>
  );
}