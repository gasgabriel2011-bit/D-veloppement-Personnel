import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TimePicker from "@/components/ui/TimePicker";

const DAYS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
const FULL_DAYS = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

// A slot = { days: [], startTime, endTime }
const newSlot = () => ({ days: [], startTime: "08:00", endTime: "09:00" });

export default function ActivityPanel({ activity, existingData, onSave, onClose }) {
  const [name, setName] = useState(existingData?.name || activity?.defaultName || "");
  const [slots, setSlots] = useState(
    existingData?.slots?.length
      ? existingData.slots
      : [{ days: existingData?.days || [], startTime: existingData?.startTime || activity?.defaultStart || "08:00", endTime: existingData?.endTime || activity?.defaultEnd || "09:00" }]
  );
  const [notes, setNotes] = useState(existingData?.notes || "");
  const [alreadyDoing, setAlreadyDoing] = useState(!!existingData);

  const updateSlot = (idx, field, val) => {
    setSlots(prev => prev.map((s, i) => i === idx ? { ...s, [field]: val } : s));
  };
  const toggleDay = (slotIdx, day) => {
    setSlots(prev => prev.map((s, i) => {
      if (i !== slotIdx) return s;
      const days = s.days.includes(day) ? s.days.filter(d => d !== day) : [...s.days, day];
      return { ...s, days };
    }));
  };
  const addSlot = () => setSlots(prev => [...prev, newSlot()]);
  const removeSlot = (idx) => setSlots(prev => prev.filter((_, i) => i !== idx));

  const canSave = slots.some(s => s.days.length > 0 && s.startTime && s.endTime);

  const handleSave = () => {
    // Flatten to multiple entries (one per slot, with its own days)
    const validSlots = slots.filter(s => s.days.length > 0 && s.startTime && s.endTime);
    onSave({
      id: activity.id,
      type: activity.id,
      name: name || activity.label,
      slots: validSlots,
      // For calendar compat: use first slot as primary but store all
      days: validSlots.flatMap(s => s.days),
      startTime: validSlots[0]?.startTime,
      endTime: validSlots[0]?.endTime,
      notes,
      color: activity.color || "#6B7280",
      emoji: activity.emoji
    });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="flex-1 bg-foreground/40 backdrop-blur-sm" onClick={onClose} />
        <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="w-full max-w-sm bg-background border-l border-border overflow-y-auto flex flex-col">

          {/* Header */}
          <div className="sticky top-0 bg-background/95 backdrop-blur border-b border-border px-6 py-5 flex items-center justify-between z-10">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{activity.emoji}</span>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">{activity.label}</h3>
                <p className="font-body text-xs text-muted-foreground">{activity.description}</p>
              </div>
            </div>
            <button onClick={onClose} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-border transition-colors">
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          <div className="flex-1 px-6 py-6 space-y-6">
            {/* Already doing */}
            <div>
              <p className="text-sm font-body font-semibold text-foreground mb-3">Tu fais déjà ça régulièrement ?</p>
              <div className="flex gap-3">
                {[{ v: true, l: "Oui, créneau existant" }, { v: false, l: "Non / Je planifie" }].map(opt => (
                  <button key={String(opt.v)} onClick={() => setAlreadyDoing(opt.v)}
                    className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-body font-medium transition-all ${alreadyDoing === opt.v ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary/30"}`}>
                    {opt.l}
                  </button>
                ))}
              </div>
            </div>

            {/* Name if needed */}
            {activity.askName && (
              <div>
                <label className="text-sm font-body font-medium text-foreground mb-1.5 block">{activity.namePlaceholder || "Précise l'activité :"}</label>
                <Input value={name} onChange={e => setName(e.target.value)}
                  placeholder={activity.namePlaceholder || "ex: Football, Guitare..."}
                  className="h-11 font-body" />
              </div>
            )}

            {/* Slots */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-body font-semibold text-foreground">Créneaux horaires</p>
                <button onClick={addSlot}
                  className="flex items-center gap-1.5 text-xs font-body font-semibold text-primary hover:text-primary/70 transition-colors">
                  <Plus className="w-3.5 h-3.5" />
                  Ajouter un créneau
                </button>
              </div>

              {slots.map((slot, idx) => (
                <div key={idx} className="border border-border rounded-xl p-4 space-y-3 bg-secondary/20">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider">
                      Créneau {idx + 1}
                    </span>
                    {slots.length > 1 && (
                      <button onClick={() => removeSlot(idx)}
                        className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center hover:bg-destructive/20 transition-colors">
                        <Trash2 className="w-3 h-3 text-destructive" />
                      </button>
                    )}
                  </div>

                  {/* Days */}
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">Jours</p>
                    <div className="grid grid-cols-7 gap-1">
                      {DAYS.map((d, i) => (
                        <button key={d} onClick={() => toggleDay(idx, FULL_DAYS[i])}
                          className={`h-8 rounded-lg text-[11px] font-body font-semibold transition-all ${slot.days.includes(FULL_DAYS[i]) ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:bg-border"}`}>
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Times */}
                  <div className="grid grid-cols-2 gap-3">
                    <TimePicker label="Début" value={slot.startTime} onChange={v => updateSlot(idx, "startTime", v)} />
                    <TimePicker label="Fin" value={slot.endTime} onChange={v => updateSlot(idx, "endTime", v)} />
                  </div>
                </div>
              ))}
            </div>

            {/* Notes */}
            <div>
              <label className="text-sm font-body font-semibold text-foreground mb-1.5 block">Notes & objectifs</label>
              <textarea value={notes} onChange={e => setNotes(e.target.value)}
                placeholder={activity.notesPlaceholder || "Objectifs, détails, rappels..."}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background font-body text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-1 focus:ring-ring" />
            </div>

            {/* Tips */}
            {activity.tips && (
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 space-y-2">
                <p className="text-xs font-body font-semibold uppercase tracking-wider text-primary">💡 Conseils</p>
                {activity.tips.map((tip, i) => (
                  <p key={i} className="text-xs font-body text-foreground/70 leading-relaxed">• {tip}</p>
                ))}
              </div>
            )}
          </div>

          <div className="sticky bottom-0 bg-background border-t border-border px-6 py-4">
            <Button onClick={handleSave} disabled={!canSave} className="w-full h-12 rounded-full font-body font-medium">
              <Check className="w-4 h-4 mr-2" />
              Ajouter à mon planning
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}