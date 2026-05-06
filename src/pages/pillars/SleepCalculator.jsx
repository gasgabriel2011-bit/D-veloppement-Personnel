import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TimePicker from "@/components/ui/TimePicker";

function timeToMinutes(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function minutesToTime(mins) {
  const total = ((mins % 1440) + 1440) % 1440;
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
}

function getRecommendedHours(age) {
  const a = parseInt(age);
  if (a <= 5) return "10–13h";
  if (a <= 12) return "9–11h";
  if (a <= 17) return "8–10h";
  if (a <= 25) return "7–9h";
  if (a <= 64) return "7–9h";
  return "7–8h";
}

function getAgeTips(age) {
  const a = parseInt(age);
  if (a <= 17) return [
    "Évite les écrans au moins 1h avant de te coucher — la lumière bleue retarde la mélatonine.",
    "Le sommeil profond (stades 3-4) est crucial pour la croissance et la mémoire scolaire.",
    "Un horaire régulier même le week-end synchronise ton horloge biologique et améliore l'énergie."
  ];
  if (a <= 35) return [
    "La caféine reste dans le sang 5–6h : évite-la après 14h pour un coucher avant minuit.",
    "Le sport régulier améliore la qualité du sommeil profond, mais évite l'effort intense le soir.",
    "Baisse la température de ta chambre à 18–20°C — le corps doit refroidir pour s'endormir."
  ];
  return [
    "Maintiens un horaire fixe 7j/7 : c'est le facteur n°1 de qualité du sommeil après 40 ans.",
    "Le magnesium glycinate (200–400mg) avant le coucher peut réduire les réveils nocturnes.",
    "Évite l'alcool le soir — il fragmente les cycles REM et réduit la récupération cognitive."
  ];
}

function calculateSleep(wakeTimeStr, ageVal) {
  const wakeMin = timeToMinutes(wakeTimeStr);
  const CYCLE = 90; // minutes
  const SLEEP_ONSET = 14; // minutes to fall asleep
  return {
    ideal_bedtime: minutesToTime(wakeMin - 6 * CYCLE - SLEEP_ONSET),
    option_2: minutesToTime(wakeMin - 5 * CYCLE - SLEEP_ONSET),
    option_3: minutesToTime(wakeMin - 4 * CYCLE - SLEEP_ONSET),
    recommended_hours: getRecommendedHours(ageVal),
    tips: getAgeTips(ageVal),
  };
}

export default function SleepCalculator() {
  const navigate = useNavigate();
  const [age, setAge] = useState("");
  const [wakeTime, setWakeTime] = useState("07:00");
  const [latestWake, setLatestWake] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    setResult(calculateSleep(wakeTime, age));
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="sticky top-0 z-40 px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border flex items-center gap-4">
        <button onClick={() => navigate("/pillar/sleep")}
          className="flex items-center gap-2 text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Sommeil
        </button>
        <span className="text-muted-foreground/40">/</span>
        <span className="text-sm font-body font-medium text-foreground">Calculateur IA</span>
      </div>

      <div className="max-w-2xl mx-auto px-6 md:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <Moon className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-heading text-4xl font-semibold text-foreground mb-3">Calculateur de Sommeil IA</h1>
          <p className="font-body text-muted-foreground">Entre tes informations pour obtenir tes heures de coucher optimales basées sur la science circadienne et les cycles de 90 minutes.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="bg-foreground rounded-3xl p-8 md:p-10">
          <form onSubmit={handleCalculate} className="space-y-5">
            <div>
              <label className="text-xs font-body font-semibold text-background/60 uppercase tracking-wider mb-1.5 block">Ton âge</label>
              <Input type="number" placeholder="ex: 17" value={age} onChange={e => setAge(e.target.value)}
                className="h-12 rounded-xl bg-background/10 border-background/20 text-background placeholder:text-background/30 font-body" required min="5" max="100" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-body font-semibold text-background/60 uppercase tracking-wider mb-1.5 block">Heure de lever souhaitée</label>
                <TimePicker value={wakeTime} onChange={setWakeTime} />
              </div>
              <div>
                <label className="text-xs font-body font-semibold text-background/60 uppercase tracking-wider mb-1.5 block">Lever au plus tard (optionnel)</label>
                <TimePicker value={latestWake || "08:00"} onChange={setLatestWake} />
              </div>
            </div>
            <Button type="submit" className="w-full h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-body font-medium">
              Calculer mes heures optimales
            </Button>
          </form>

          {result && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 space-y-5">
              <h3 className="font-heading text-xl font-semibold text-background">Tes heures de coucher recommandées</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Optimal", time: result.ideal_bedtime, highlight: true },
                  { label: "Alternative", time: result.option_2 },
                  { label: "Minimum", time: result.option_3 },
                ].map((opt, i) => (
                  <div key={i} className={`rounded-2xl p-4 text-center ${opt.highlight ? "bg-primary text-primary-foreground" : "bg-background/10"}`}>
                    <p className={`text-xs font-body font-semibold uppercase tracking-wider mb-1 ${opt.highlight ? "text-primary-foreground/70" : "text-background/50"}`}>{opt.label}</p>
                    <p className={`font-heading text-2xl font-bold ${opt.highlight ? "text-primary-foreground" : "text-background"}`}>{opt.time}</p>
                  </div>
                ))}
              </div>
              <p className="font-body text-sm text-background/60">Recommandation médicale pour ton âge : {result.recommended_hours}</p>
              {result.tips?.length > 0 && (
                <div className="space-y-2 pt-2">
                  <p className="text-xs font-body font-semibold text-background/50 uppercase tracking-wider">Conseils personnalisés</p>
                  {result.tips.map((tip, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <p className="font-body text-sm text-background/80 leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}