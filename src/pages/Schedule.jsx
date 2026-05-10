import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, CheckCircle2, Sparkles, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ActivityPanel from "../components/schedule/ActivityPanel";
import CalendarView from "../components/schedule/CalendarView";
import { ACTIVITY_CATEGORIES, WISHLIST_ACTIVITIES, UNIVERSAL_HABITS } from "../data/universalHabits";

const STEPS = [
  { id: "configure", label: "Configurer", emoji: "⚙️" },
  { id: "wishlist", label: "À essayer", emoji: "✨" },
  { id: "calendar", label: "Mon Calendrier", emoji: "📅" },
];

export default function Schedule() {
  const navigate = useNavigate();
  const [step, setStep] = useState("configure");
  const [openPanel, setOpenPanel] = useState(null); // { activity, existingData }
  const [configuredActivities, setConfiguredActivities] = useState({});
  const [selectedWishlist, setSelectedWishlist] = useState([]);
  const [expandedCategory, setExpandedCategory] = useState(ACTIVITY_CATEGORIES[0].category);

  // Save an activity's config
  const saveActivity = (data) => {
    setConfiguredActivities(prev => ({ ...prev, [data.id]: data }));
  };

  const removeActivity = (id) => {
    setConfiguredActivities(prev => {
      const n = { ...prev };
      delete n[id];
      return n;
    });
  };

  const updateActivity = (updated) => {
    setConfiguredActivities(prev => ({
      ...prev,
      [updated._actId]: { ...prev[updated._actId], ...updated }
    }));
  };

  const toggleWishlist = (id) => {
    setSelectedWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  // Build wishlist as pseudo-activities for calendar
  const wishlistActivities = useMemo(() => {
    return selectedWishlist.map(id => {
      const item = WISHLIST_ACTIVITIES.find(w => w.id === id);
      if (!item) return null;
      return {
        id: item.id,
        type: "wishlist",
        name: item.label,
        emoji: item.emoji,
        days: ["Samedi", "Dimanche"],
        startTime: "10:00",
        endTime: "10:30",
        color: item.color,
        isHabit: false,
        notes: item.description,
        detail: item.description
      };
    }).filter(Boolean);
  }, [selectedWishlist]);

  const allConfigured = Object.values(configuredActivities);
  const totalActivities = allConfigured.length + selectedWishlist.length;

  const configuredCount = Object.keys(configuredActivities).length;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border px-6 py-4 flex items-center justify-between gap-4">
        <button onClick={() => navigate("/pillars")}
          className="flex items-center gap-2 text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Retour
        </button>

        {/* Step tabs */}
        <div className="flex items-center bg-secondary rounded-xl p-1 gap-0.5">
          {STEPS.map(s => (
            <button key={s.id} onClick={() => setStep(s.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-body font-semibold transition-all ${step === s.id ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
              <span>{s.emoji}</span>
              <span className="hidden sm:inline">{s.label}</span>
            </button>
          ))}
        </div>

        {step !== "calendar" && (
          <Button onClick={() => setStep("calendar")} size="sm" className="rounded-full font-body text-xs h-8 px-4">
            Voir le calendrier →
          </Button>
        )}
        {step === "calendar" && <div className="w-20" />}
      </div>

      {/* STEP: Configure */}
      {step === "configure" && (
        <div className="flex-1 max-w-4xl mx-auto w-full px-6 md:px-10 py-10 space-y-8">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-2">Étape 1</p>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-3">
              Configure tes activités
            </h1>
            <p className="font-body text-muted-foreground max-w-xl">
              Clique sur une activité pour définir ses horaires, jours et objectifs. 
              Ces créneaux seront fixes dans ton calendrier chaque semaine.
            </p>
          </motion.div>

          {/* Configured summary */}
          {configuredCount > 0 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="bg-primary/5 border border-primary/20 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-body font-semibold text-primary">{configuredCount} activité{configuredCount > 1 ? "s" : ""} configurée{configuredCount > 1 ? "s" : ""}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {allConfigured.map(act => (
                  <div key={act.id} className="flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-full border text-xs font-body font-medium"
                    style={{ borderColor: act.color + "40", backgroundColor: act.color + "15", color: act.color }}>
                    <span>{act.emoji}</span>
                    <span>{act.name}</span>
                    <span className="text-[10px] opacity-60">{act.startTime}–{act.endTime}</span>
                    {act.pointsEstimate ? <span className="text-[10px] font-semibold opacity-80">+{act.pointsEstimate} pts</span> : null}
                    <button onClick={() => removeActivity(act.id)}
                      className="w-4 h-4 rounded-full bg-current/20 flex items-center justify-center hover:bg-current/30 transition-colors">
                      <X className="w-2.5 h-2.5" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Categories */}
          <div className="space-y-4">
            {ACTIVITY_CATEGORIES.map((cat, ci) => (
              <motion.div key={cat.category} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: ci * 0.05 }}
                className="border border-border rounded-2xl overflow-hidden">
                <button onClick={() => setExpandedCategory(expandedCategory === cat.category ? null : cat.category)}
                  className="w-full flex items-center justify-between px-6 py-4 hover:bg-secondary/50 transition-colors">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{cat.category}</h3>
                  <motion.div animate={{ rotate: expandedCategory === cat.category ? 180 : 0 }}>
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedCategory === cat.category && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
                      className="overflow-hidden">
                      <div className="px-6 pb-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {cat.items.map(activity => {
                          const configured = configuredActivities[activity.id];
                          return (
                            <motion.button key={activity.id} whileHover={{ y: -2 }}
                              onClick={() => setOpenPanel({ activity, existingData: configured || null })}
                              className={`flex items-start gap-4 p-4 rounded-xl border text-left transition-all ${configured ? "border-primary/30 bg-primary/5" : "border-border hover:border-primary/20 hover:bg-secondary/30"}`}>
                              <span className="text-2xl flex-shrink-0">{activity.emoji}</span>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2">
                                  <h4 className="font-body text-sm font-semibold text-foreground">{activity.label}</h4>
                                  {configured ? (
                                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                  ) : (
                                    <Plus className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                                  )}
                                </div>
                                <p className="font-body text-xs text-muted-foreground mt-0.5">{activity.description}</p>
                                {configured && (
                                  <p className="font-body text-xs text-primary mt-1.5 font-medium">
                                    {configured.startTime}–{configured.endTime} · {configured.days.length} jour{configured.days.length > 1 ? "s" : ""}
                                  </p>
                                )}
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Universal habits info */}
          <div className="bg-secondary/40 border border-border rounded-2xl p-6">
            <p className="text-xs font-body font-semibold uppercase tracking-wider text-muted-foreground mb-3">🌟 Habitudes Universelles (déjà dans ton calendrier)</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {UNIVERSAL_HABITS.map(h => (
                <div key={h.id} className="flex items-center gap-2 text-xs font-body text-muted-foreground">
                  <span>{h.emoji}</span>
                  <span>{h.name}</span>
                </div>
              ))}
            </div>
          </div>

          <Button onClick={() => setStep("wishlist")} className="w-full h-13 rounded-full font-body font-medium text-base py-4">
            Continuer → Ce que j'aimerais essayer
          </Button>
        </div>
      )}

      {/* STEP: Wishlist */}
      {step === "wishlist" && (
        <div className="flex-1 max-w-4xl mx-auto w-full px-6 md:px-10 py-10 space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-2">Étape 2 — Optionnel</p>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-3">
              Ce que tu aimerais essayer
            </h1>
            <p className="font-body text-muted-foreground max-w-xl">
              Sélectionne les habitudes ou activités que tu veux intégrer progressivement. 
              Elles apparaîtront dans ton calendrier comme suggestions le week-end.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WISHLIST_ACTIVITIES.map((item, i) => (
              <motion.button key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
                whileHover={{ y: -3 }} onClick={() => toggleWishlist(item.id)}
                className={`flex items-start gap-4 p-5 rounded-2xl border text-left transition-all ${selectedWishlist.includes(item.id) ? "border-primary/40 bg-primary/5 shadow-sm" : "border-border hover:border-primary/20 bg-card"}`}>
                <span className="text-3xl flex-shrink-0">{item.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4 className="font-heading text-base font-semibold text-foreground">{item.label}</h4>
                    {selectedWishlist.includes(item.id) && <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />}
                  </div>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.button>
            ))}
          </div>

          {selectedWishlist.length > 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-xl px-5 py-4">
              <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="font-body text-sm text-foreground/80">
                <strong className="text-primary">{selectedWishlist.length}</strong> activité{selectedWishlist.length > 1 ? "s" : ""} sélectionnée{selectedWishlist.length > 1 ? "s" : ""} — elles apparaîtront le week-end dans ton calendrier.
              </p>
            </motion.div>
          )}

          <Button onClick={() => setStep("calendar")} className="w-full h-13 rounded-full font-body font-medium text-base py-4">
            Voir mon Calendrier →
          </Button>
        </div>
      )}

      {/* STEP: Calendar */}
      {step === "calendar" && (
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="px-6 pt-6 pb-3 max-w-7xl mx-auto w-full">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h1 className="font-heading text-3xl font-semibold text-foreground">Mon Emploi du Temps</h1>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  {UNIVERSAL_HABITS.length} habitudes universelles + {allConfigured.length} activités configurées
                  {selectedWishlist.length > 0 ? ` + ${selectedWishlist.length} à essayer` : ""}
                </p>
              </div>
              <Button variant="outline" size="sm" onClick={() => setStep("configure")} className="rounded-full font-body text-xs h-8">
                ⚙️ Modifier
              </Button>
            </div>
          </div>
          <div className="flex-1 overflow-hidden max-w-7xl mx-auto w-full px-2 md:px-6 pb-6">
            <div className="h-full border border-border rounded-2xl overflow-hidden bg-card">
              <CalendarView
                activities={[...allConfigured, ...wishlistActivities]}
                universalHabits={UNIVERSAL_HABITS}
                onUpdateActivity={updateActivity}
                onDeleteActivity={removeActivity}
              />
            </div>
          </div>
        </div>
      )}

      {/* Activity config panel */}
      <AnimatePresence>
        {openPanel && (
          <ActivityPanel
            activity={openPanel.activity}
            existingData={openPanel.existingData}
            onSave={saveActivity}
            onClose={() => setOpenPanel(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
