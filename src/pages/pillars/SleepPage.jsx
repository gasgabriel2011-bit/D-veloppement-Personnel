import { useState } from "react";
import { motion } from "framer-motion";
import PillarLayout from "../../components/PillarLayout";
import PrincipleCard from "../../components/PrincipleCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Moon } from "lucide-react";

const HERO = "/images/b36a7d47c_generated_ce746b24.png";

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
  if (a <= 5) return "10-13h";
  if (a <= 12) return "9-11h";
  if (a <= 17) return "8-10h";
  if (a <= 64) return "7-9h";
  return "7-8h";
}

function getAgeTips(age) {
  const a = parseInt(age);
  if (a <= 17) {
    return [
      "Garde des horaires réguliers, même le week-end, pour stabiliser ton horloge biologique.",
      "Évite les écrans au moins 1h avant le coucher pour protéger la mélatonine.",
      "Prévois une vraie marge de sommeil profond: elle soutient la mémoire, l'énergie et la récupération."
    ];
  }

  if (a <= 35) {
    return [
      "Évite la caféine après 14h si tu vises un coucher avant minuit.",
      "Place les séances de sport intenses plutôt en journée ou en fin d'après-midi.",
      "Garde une chambre fraîche, idéalement autour de 18-20°C."
    ];
  }

  return [
    "Priorise un horaire fixe 7j/7: c'est l'un des meilleurs leviers de qualité de sommeil.",
    "Limite l'alcool le soir, car il fragmente les cycles et réduit le sommeil paradoxal.",
    "Prévois un rituel calme de 30 minutes pour faire redescendre le système nerveux."
  ];
}

function calculateSleep(wakeTimeStr, ageVal) {
  const wakeMin = timeToMinutes(wakeTimeStr);
  const cycle = 90;
  const sleepOnset = 14;

  return {
    ideal_bedtime: minutesToTime(wakeMin - 6 * cycle - sleepOnset),
    option_2: minutesToTime(wakeMin - 5 * cycle - sleepOnset),
    option_3: minutesToTime(wakeMin - 4 * cycle - sleepOnset),
    recommended_hours: getRecommendedHours(ageVal),
    cycles_count: 6,
    tips: getAgeTips(ageVal),
  };
}

const principles = [
  {
    title: "La Règle 3-2-1",
    description: "3h avant le coucher : plus de repas lourd. 2h : plus de travail. 1h : plus d'écran.",
    details: "Cette règle crée une descente progressive du système nerveux. Le corps commence à produire de la mélatonine environ 2h avant l'heure de coucher habituelle. L'alimentation lourde maintient le système digestif actif, perturbant le sommeil profond. La lumière bleue des écrans bloque la mélatonine jusqu'à 3h après l'exposition.",
    tip: "Remplace les écrans par un livre papier, un journal ou une méditation guidée. Un bain chaud 1h30 avant de dormir abaisse la température centrale du corps et accélère l'endormissement.",
    science: "Une étude de Harvard Medical School montre que la lumière bleue perturbe le rythme circadien 2x plus que les autres longueurs d'onde. L'Université de Bath confirme qu'un bain chaud réduit le temps d'endormissement de 10 minutes en moyenne."
  },
  {
    title: "Les Cycles de Sommeil",
    description: "Un cycle dure environ 90 minutes. Se réveiller en fin de cycle = meilleur réveil.",
    details: "Le sommeil se compose de 4 à 6 cycles de 90 minutes chacun. Chaque cycle inclut du sommeil léger (N1/N2), du sommeil profond (N3) et du sommeil paradoxal (REM). Le sommeil profond domine les premières heures, le REM les dernières. Se réveiller pendant le sommeil profond = grosse somnolence matinale.",
    tip: "Pour te réveiller facilement : compte 6 cycles (9h) ou 5 cycles (7h30) depuis l'endormissement. Ajoute 15 minutes d'endormissement. Utilise des applications comme Sleep Cycle ou un réveil progressif.",
    science: "Le Dr Matthew Walker (Université de Berkeley) dans 'Why We Sleep' : le REM est crucial pour la consolidation mémorielle et la régulation émotionnelle. Réduire le REM même d'une seule nuit impacte les performances cognitives le lendemain."
  },
  {
    title: "La Bonne Position de Sommeil",
    description: "La position sur le dos ou sur le côté gauche est optimale pour la santé.",
    details: "Sur le dos : maintient la colonne vertébrale alignée, réduit les douleurs cervicales et lombaires. Idéal avec un oreiller de soutien cervical. Sur le côté gauche : améliore la digestion, réduit les reflux gastriques, favorise la circulation lymphatique cérébrale (clearance de déchets via le système glymphatique). Sur le ventre : déconseillé — courbe cervicale forcée et pression sur organes.",
    tip: "Si tu dors sur le côté, place un oreiller entre tes genoux pour aligner le bassin. Si sur le dos, un petit coussin sous les genoux soulage le bas du dos.",
    science: "Une étude publiée dans le Journal of Neuroscience montre que le système glymphatique (nettoyage cérébral) est 25% plus efficace en position latérale gauche qu'en position dorsale."
  },
  {
    title: "Le Rythme Circadien",
    description: "Expose-toi à la lumière naturelle dès le réveil. Dors et lève-toi aux mêmes heures, même le week-end.",
    details: "Le cortisol, hormone d'éveil, atteint son pic 30-45 minutes après le réveil — surtout si tu t'exposes à la lumière naturelle. Retarder l'exposition à la lumière décale ton horloge interne de 1h par jour. Le 'social jet-lag' (changer d'horaires le week-end) est associé à une augmentation du risque cardio-vasculaire de 11%.",
    tip: "Sors dehors dans les 30 premières minutes après le réveil, même par temps nuageux (10 000 lux vs 400 en intérieur). Si impossible, utilise une lampe de luminothérapie (10 000 lux) pendant 20-30 minutes.",
    science: "Dr Andrew Huberman (Stanford) : la lumière matinale définit le pic de mélatonine 12-16h plus tard, déterminant ainsi l'heure naturelle d'endormissement."
  },
  {
    title: "L'Environnement de Sommeil Optimal",
    description: "Chambre à 18-19°C, obscurité totale, silence. La chambre = le temple du sommeil.",
    details: "La température corporelle doit baisser de 1-2°C pour initier et maintenir le sommeil. Une chambre trop chaude (>21°C) réduit le sommeil profond. L'obscurité totale est nécessaire car même la lumière à travers les paupières supprime la mélatonine. Le bruit est particulièrement perturbateur car le cerveau reste en alerte même en sommeil.",
    tip: "Investis dans des rideaux occultants, des bouchons d'oreille ou du bruit blanc (application Calm, Noisli). Baisse le chauffage ou utilise un climatiseur silencieux. La qualité du matelas affecte le sommeil profond — c'est un investissement santé.",
    science: "L'Université de Pittsburgh a montré que des températures de 15-19°C augmentent le temps en sommeil profond de 30% comparé à des chambres à 23°C."
  },
  {
    title: "La Sieste Stratégique",
    description: "Une sieste de 20 minutes entre 13h et 15h peut restaurer 34% des performances cognitives.",
    details: "La sieste de 20 minutes (nap) améliore l'attention, la mémoire et les performances motrices sans provoquer d'inertie de sommeil. La sieste de 90 minutes complète un cycle mais nécessite du temps. Évite de dormir après 15h pour ne pas perturber l'endormissement nocturne.",
    tip: "La 'nappuccino' : bois un café juste avant ta sieste de 20 minutes. La caféine met 20 minutes à agir — tu te réveilles avec un double boost naturel. Met un réveil pour ne pas dépasser 20 min.",
    science: "NASA : des pilotes ayant fait une sieste de 26 minutes ont amélioré leurs performances de 34% et leur vigilance de 100%. La sieste courte ne modifie pas l'architecture du sommeil nocturne si faite avant 15h."
  },
  {
    title: "La Gestion du Stress Pré-Sommeil",
    description: "L'anxiété et le ruminage sont les premières causes d'insomnie. Externalise tes pensées.",
    details: "Le cortisol et l'adrénaline maintiennent le cerveau en mode vigilance. La technique du 'brain dump' (vider son esprit sur papier) réduit l'activité du cortex préfrontal et facilite l'endormissement. La respiration 4-7-8 (inspirer 4s, retenir 7s, expirer 8s) active le système nerveux parasympathique.",
    tip: "Crée un rituel pré-sommeil de 30-60 min : journal de 3 gratitudes + 1 intention pour demain + respiration 4-7-8 × 4 cycles. La régularité de ce rituel conditionne le cerveau à associer ces actions à l'endormissement.",
    science: "Une méta-analyse publiée dans Sleep Medicine Reviews confirme que les interventions cognitivo-comportementales (CBT-I) sont plus efficaces à long terme que les somnifères, sans effets secondaires."
  }
];

export default function SleepPage() {
  const [age, setAge] = useState("");
  const [wakeTime, setWakeTime] = useState("07:00");
  const [latestWake, setLatestWake] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleCalculate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setResult(calculateSleep(latestWake || wakeTime, age));
    setLoading(false);
  };

  return (
    <PillarLayout>
      {/* Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={HERO} alt="Sommeil" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-8 left-6 md:left-12">
          <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-2">Pilier Fondamental</p>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground">Sommeil</h1>
          <p className="font-body text-muted-foreground italic mt-1">Le fondement invisible de la performance</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-8 py-12 space-y-4">
        {principles.map((p, i) => <PrincipleCard key={i} principle={p} index={i} />)}
      </div>

      {/* AI Sleep Calculator */}
      <div className="max-w-3xl mx-auto px-6 md:px-8 pb-16">
        <div className="bg-foreground rounded-3xl p-8 md:p-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Moon className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-heading text-2xl font-semibold text-background">Calculateur de Sommeil IA</h2>
          </div>
          <p className="font-body text-background/60 mb-8">Entre tes informations pour obtenir tes heures de coucher optimales basées sur ta science circadienne.</p>

          <form onSubmit={handleCalculate} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-xs font-body font-semibold text-background/60 uppercase tracking-wider mb-1.5 block">Ton âge</label>
                <Input type="number" placeholder="ex: 25" value={age} onChange={e => setAge(e.target.value)}
                  className="h-12 rounded-xl bg-background/10 border-background/20 text-background placeholder:text-background/30 font-body" required min="5" max="100" />
              </div>
              <div>
                <label className="text-xs font-body font-semibold text-background/60 uppercase tracking-wider mb-1.5 block">Heure de lever</label>
                <Input type="time" value={wakeTime} onChange={e => setWakeTime(e.target.value)}
                  className="h-12 rounded-xl bg-background/10 border-background/20 text-background font-body" required />
              </div>
              <div>
                <label className="text-xs font-body font-semibold text-background/60 uppercase tracking-wider mb-1.5 block">Lever au plus tard (optionnel)</label>
                <Input type="time" value={latestWake} onChange={e => setLatestWake(e.target.value)}
                  className="h-12 rounded-xl bg-background/10 border-background/20 text-background font-body" />
              </div>
            </div>
            <Button type="submit" disabled={loading} className="h-12 px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-body font-medium">
              {loading ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Calcul en cours...</> : "Calculer mes heures optimales"}
            </Button>
          </form>

          {result && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 space-y-4">
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
              <p className="font-body text-sm text-background/60">Recommandation pour ton âge : {result.recommended_hours}</p>
              {result.tips?.length > 0 && (
                <div className="space-y-2">
                  {result.tips.map((tip, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="font-body text-sm text-background/80">{tip}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </PillarLayout>
  );
}
