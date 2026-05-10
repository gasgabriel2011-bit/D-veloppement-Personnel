import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Plus, Trash2 } from "lucide-react";
import { CATEGORY_OPTIONS } from "../../data/elanData";

const CATEGORY_COLOR = {
  "Santé": "#2F6B4F",
  "Sport": "#2F6B4F",
  "Argent": "#B89B5E",
  "Travail": "#6F6A61",
  "Projet personnel": "#7C5A2E",
  "Relations": "#9C3D3D",
  "Développement personnel": "#4A6B8A",
  "Création": "#7C5A2E",
  "Études": "#4A6B8A",
  "Bien-être": "#2F6B4F",
};

const SIZE_OPTIONS = [
  { value: 100, label: "Court", detail: "100 pts", helper: "Un élan rapide" },
  { value: 300, label: "Moyen", detail: "300 pts", helper: "Un cap solide" },
  { value: 1000, label: "Long", detail: "1000 pts", helper: "Une vraie saison" },
];

export default function CreateObjectiveModal({ isOpen, onClose, onSave }) {
  const [form, setForm] = useState({
    title: "", why: "", category: "Santé", targetPoints: 300,
  });
  const [subObjs, setSubObjs] = useState([""]);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSave = () => {
    if (!form.title.trim()) return;
    onSave({
      ...form,
      subObjectives: subObjs.filter(Boolean).map((t, i) => ({
        id: "sub_" + Date.now() + i, title: t, progress: 0
      }))
    });
    setForm({ title: "", why: "", category: "Santé", targetPoints: 300 });
    setSubObjs([""]);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50" style={{ background: "rgba(0,0,0,0.35)" }}
            onClick={onClose} />
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-0 left-0 right-0 z-50 md:inset-0 md:flex md:items-center md:justify-center"
            onClick={e => e.stopPropagation()}>
            <div className="soft-scroll soft-volume relative w-full md:max-w-lg rounded-t-3xl md:rounded-3xl p-7 space-y-5 overflow-y-auto max-h-[92vh]"
              style={{ background: "#FFFFFF", borderColor: "#E7E0D6", border: "1px solid #E7E0D6" }}>
              <div className="flex items-center justify-between">
                <h2 className="font-heading text-xl font-semibold" style={{ color: "#111111" }}>Nouvel objectif</h2>
                <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "#F8F5EF", color: "#6F6A61" }}><X className="w-4 h-4" /></button>
              </div>

              <Field label="Nom de l'objectif">
                <input value={form.title} onChange={e => set("title", e.target.value)}
                  placeholder="Ex : Retrouver de l'énergie"
                  className="w-full h-11 px-4 rounded-xl border text-sm outline-none focus:border-[#111111] transition-colors"
                  style={{ background: "#F8F5EF", borderColor: "#E7E0D6", color: "#111111" }} />
              </Field>

              <Field label="Pourquoi cet objectif ?">
                <textarea value={form.why} onChange={e => set("why", e.target.value)}
                  placeholder="Ce qui motive vraiment cet objectif..."
                  rows={2}
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-[#111111] transition-colors resize-none"
                  style={{ background: "#F8F5EF", borderColor: "#E7E0D6", color: "#111111" }} />
              </Field>

              <Field label="Catégorie">
                <div className="flex flex-wrap gap-2">
                  {CATEGORY_OPTIONS.map(category => (
                    <CategoryChoice
                      key={category}
                      category={category}
                      selected={form.category === category}
                      onClick={() => set("category", category)}
                    />
                  ))}
                </div>
              </Field>

              <Field label="Taille">
                <div className="grid grid-cols-3 gap-2">
                  {SIZE_OPTIONS.map(option => (
                    <SizeChoice
                      key={option.value}
                      option={option}
                      selected={form.targetPoints === option.value}
                      onClick={() => set("targetPoints", option.value)}
                    />
                  ))}
                </div>
              </Field>

              <Field label="Sous-objectifs (optionnel)">
                <div className="space-y-2">
                  {subObjs.map((s, i) => (
                    <div key={i} className="flex gap-2">
                      <input value={s} onChange={e => {
                        const n = [...subObjs]; n[i] = e.target.value; setSubObjs(n);
                      }}
                        placeholder={`Sous-objectif ${i + 1}`}
                        className="flex-1 h-10 px-3 rounded-xl border text-sm outline-none focus:border-[#111111] transition-colors"
                        style={{ background: "#F8F5EF", borderColor: "#E7E0D6", color: "#111111" }} />
                      {subObjs.length > 1 && (
                        <button onClick={() => setSubObjs(prev => prev.filter((_, j) => j !== i))}
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: "#F5E6E3", color: "#9C3D3D" }}>
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  ))}
                  {subObjs.length < 5 && (
                    <button onClick={() => setSubObjs(p => [...p, ""])}
                      className="flex items-center gap-2 text-sm font-medium py-2 transition-colors"
                      style={{ color: "#6F6A61" }}>
                      <Plus className="w-4 h-4" /> Ajouter un sous-objectif
                    </button>
                  )}
                </div>
              </Field>

              <button onClick={handleSave}
                className="w-full h-12 rounded-2xl font-semibold text-sm transition-all hover:opacity-90"
                style={{ background: "#111111", color: "#FFFFFF" }}>
                Créer l'objectif
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

function CategoryChoice({ category, selected, onClick }) {
  const color = CATEGORY_COLOR[category] || "#6F6A61";

  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className="inline-flex h-9 items-center gap-2 rounded-full border px-3 text-xs font-semibold transition-all hover:-translate-y-0.5"
      style={{
        background: selected ? `${color}14` : "#F8F5EF",
        borderColor: selected ? color : "#E7E0D6",
        color: selected ? color : "#6F6A61",
        boxShadow: selected ? `0 8px 20px ${color}12` : "none",
      }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
      {category}
      {selected && <Check className="h-3.5 w-3.5" />}
    </button>
  );
}

function SizeChoice({ option, selected, onClick }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className="min-h-[88px] rounded-2xl border p-3 text-left transition-all hover:-translate-y-0.5"
      style={{
        background: selected ? "#111111" : "#F8F5EF",
        borderColor: selected ? "#111111" : "#E7E0D6",
        color: selected ? "#FFFFFF" : "#111111",
        boxShadow: selected ? "0 14px 26px rgba(17,17,17,0.12)" : "none",
      }}
    >
      <span className="block text-sm font-semibold">{option.label}</span>
      <span className="mt-1 block text-[11px] font-semibold uppercase tracking-wider"
        style={{ color: selected ? "rgba(255,255,255,0.62)" : "#B0A99A" }}>
        {option.detail}
      </span>
      <span className="mt-2 block text-[11px] leading-snug"
        style={{ color: selected ? "rgba(255,255,255,0.72)" : "#6F6A61" }}>
        {option.helper}
      </span>
    </button>
  );
}
