import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";

const DAYS = ["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"];
const IMPACT_POINTS = { low: 1, medium: 3, high: 5 };
const IMPACT_OPTIONS = [
  { value: "low", label: "Faible", meta: "+1", helper: "Petit geste", color: "#6F6A61" },
  { value: "medium", label: "Moyen", meta: "+3", helper: "Bon levier", color: "#B89B5E" },
  { value: "high", label: "Fort", meta: "+5", helper: "Prioritaire", color: "#2F6B4F" },
];
const DIFFICULTY_OPTIONS = [
  { value: "easy", label: "Facile", helper: "Presque automatique" },
  { value: "medium", label: "Moyenne", helper: "Demande un effort" },
  { value: "hard", label: "Difficile", helper: "À protéger" },
];

export default function CreateHabitModal({ isOpen, onClose, onSave, objectives }) {
  const [form, setForm] = useState({
    title: "", type: "positive", objectiveId: objectives[0]?.id || "",
    subObjectiveId: null, days: ["Lun","Mar","Mer","Jeu","Ven"],
    impact: { level: "medium", points: 3 },
    durationMinutes: 15, difficulty: "easy",
  });

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const toggleDay = (d) => set("days", form.days.includes(d) ? form.days.filter(x => x !== d) : [...form.days, d]);
  const setObjective = (objectiveId) => setForm(f => ({ ...f, objectiveId, subObjectiveId: null }));

  const selectedObj = objectives.find(o => o.id === form.objectiveId);

  const handleSave = () => {
    if (!form.title.trim() || !form.objectiveId) return;
    onSave({ ...form, streak: 0, bestStreak: 0, completionRate: 0, status: "active",
      frequency: { type: "weekly", days: form.days } });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50" style={{ background: "rgba(0,0,0,0.35)" }} onClick={onClose} />
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-0 left-0 right-0 z-50 md:inset-0 md:flex md:items-center md:justify-center"
            onClick={e => e.stopPropagation()}>
            <div className="soft-scroll soft-volume relative w-full md:max-w-lg rounded-t-3xl md:rounded-3xl p-7 space-y-5 overflow-y-auto max-h-[92vh]"
              style={{ background: "#FFFFFF", border: "1px solid #E7E0D6" }}>
              <div className="flex items-center justify-between">
                <h2 className="font-heading text-xl font-semibold" style={{ color: "#111111" }}>Nouvelle habitude</h2>
                <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "#F8F5EF", color: "#6F6A61" }}><X className="w-4 h-4" /></button>
              </div>

              <Field label="Nom">
                <input value={form.title} onChange={e => set("title", e.target.value)}
                  placeholder="Ex : Marcher 30 minutes"
                  className="w-full h-11 px-4 rounded-xl border text-sm outline-none focus:border-[#111111] transition-colors"
                  style={{ background: "#F8F5EF", borderColor: "#E7E0D6", color: "#111111" }} />
              </Field>

              <Field label="Type">
                <div className="flex gap-2">
                  {[["positive","À faire"],["negative","À éviter"],["observation","Observer"]].map(([v,l]) => (
                    <button key={v} onClick={() => set("type", v)}
                      className="flex-1 py-2 rounded-xl text-xs font-semibold border transition-all"
                      style={{
                        background: form.type === v ? "#111111" : "#F8F5EF",
                        color: form.type === v ? "#FFFFFF" : "#6F6A61",
                        borderColor: form.type === v ? "#111111" : "#E7E0D6",
                      }}>
                      {l}
                    </button>
                  ))}
                </div>
              </Field>

              <Field label="Objectif lié">
                {objectives.length > 0 ? (
                  <div className="space-y-2">
                    {objectives.map(objective => (
                      <LinkedObjectiveChoice
                        key={objective.id}
                        objective={objective}
                        selected={form.objectiveId === objective.id}
                        onClick={() => setObjective(objective.id)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="rounded-2xl border px-4 py-3 text-sm"
                    style={{ background: "#F8F5EF", borderColor: "#E7E0D6", color: "#6F6A61" }}>
                    Crée d'abord un objectif pour y relier cette habitude.
                  </div>
                )}
              </Field>

              {selectedObj?.subObjectives?.length > 0 && (
                <Field label="Sous-objectif (optionnel)">
                  <div className="flex flex-wrap gap-2">
                    <SubObjectiveChoice
                      label="Aucun"
                      selected={!form.subObjectiveId}
                      onClick={() => set("subObjectiveId", null)}
                    />
                    {selectedObj.subObjectives.map(subObjective => (
                      <SubObjectiveChoice
                        key={subObjective.id}
                        label={subObjective.title}
                        selected={form.subObjectiveId === subObjective.id}
                        onClick={() => set("subObjectiveId", subObjective.id)}
                      />
                    ))}
                  </div>
                </Field>
              )}

              <Field label="Jours">
                <div className="flex gap-1.5 flex-wrap">
                  {DAYS.map(d => (
                    <button key={d} onClick={() => toggleDay(d)}
                      className="w-10 h-10 rounded-xl text-xs font-semibold border transition-all"
                      style={{
                        background: form.days.includes(d) ? "#111111" : "#F8F5EF",
                        color: form.days.includes(d) ? "#FFFFFF" : "#6F6A61",
                        borderColor: form.days.includes(d) ? "#111111" : "#E7E0D6",
                      }}>
                      {d}
                    </button>
                  ))}
                </div>
              </Field>

              <div className="grid grid-cols-2 gap-3">
                <Field label="Impact">
                  <div className="space-y-2">
                    {IMPACT_OPTIONS.map(option => (
                      <MiniChoice
                        key={option.value}
                        option={option}
                        selected={form.impact.level === option.value}
                        onClick={() => set("impact", { level: option.value, points: IMPACT_POINTS[option.value] })}
                      />
                    ))}
                  </div>
                </Field>
                <Field label="Difficulté">
                  <div className="space-y-2">
                    {DIFFICULTY_OPTIONS.map(option => (
                      <MiniChoice
                        key={option.value}
                        option={option}
                        selected={form.difficulty === option.value}
                        onClick={() => set("difficulty", option.value)}
                      />
                    ))}
                  </div>
                </Field>
              </div>

              <button onClick={handleSave}
                className="w-full h-12 rounded-2xl font-semibold text-sm transition-all hover:opacity-90"
                style={{ background: "#111111", color: "#FFFFFF" }}>
                Créer l'habitude
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Field({ label, children }) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#6F6A61" }}>{label}</label>
      {children}
    </div>
  );
}

function LinkedObjectiveChoice({ objective, selected, onClick }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className="flex w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left transition-all hover:-translate-y-0.5"
      style={{
        background: selected ? "#111111" : "#F8F5EF",
        borderColor: selected ? "#111111" : "#E7E0D6",
        boxShadow: selected ? "0 14px 26px rgba(17,17,17,0.12)" : "none",
      }}
    >
      <span className="min-w-0">
        <span className="block truncate text-sm font-semibold" style={{ color: selected ? "#FFFFFF" : "#111111" }}>
          {objective.title}
        </span>
        <span className="mt-1 inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
          style={{
            background: selected ? "rgba(255,255,255,0.12)" : "#FFFFFF",
            color: selected ? "rgba(255,255,255,0.72)" : "#6F6A61",
          }}>
          {objective.category}
        </span>
      </span>
      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border"
        style={{
          borderColor: selected ? "rgba(255,255,255,0.55)" : "#D9D0C3",
          color: selected ? "#FFFFFF" : "transparent",
        }}>
        <Check className="h-3.5 w-3.5" />
      </span>
    </button>
  );
}

function SubObjectiveChoice({ label, selected, onClick }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className="inline-flex min-h-9 items-center gap-2 rounded-full border px-3 text-xs font-semibold transition-all hover:-translate-y-0.5"
      style={{
        background: selected ? "#111111" : "#F8F5EF",
        borderColor: selected ? "#111111" : "#E7E0D6",
        color: selected ? "#FFFFFF" : "#6F6A61",
      }}
    >
      {label}
      {selected && <Check className="h-3.5 w-3.5" />}
    </button>
  );
}

function MiniChoice({ option, selected, onClick }) {
  const color = option.color || "#111111";

  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className="w-full rounded-2xl border px-3 py-2.5 text-left transition-all hover:-translate-y-0.5"
      style={{
        background: selected ? `${color}14` : "#F8F5EF",
        borderColor: selected ? color : "#E7E0D6",
        color: selected ? color : "#111111",
        boxShadow: selected ? `0 10px 22px ${color}12` : "none",
      }}
    >
      <span className="flex items-center justify-between gap-2">
        <span className="text-sm font-semibold">{option.label}</span>
        {option.meta && (
          <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
            style={{ background: selected ? `${color}18` : "#FFFFFF", color: selected ? color : "#6F6A61" }}>
            {option.meta}
          </span>
        )}
      </span>
      <span className="mt-1 block text-[11px] leading-snug" style={{ color: selected ? color : "#6F6A61" }}>
        {option.helper}
      </span>
    </button>
  );
}
