import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Compass, Layers3, Sparkles } from "lucide-react";
import SubTopicCard from "../../components/SubTopicCard";
import { pillarsData } from "../../data/pillarData";

const LEGACY_INTERIOR_STYLE = {
  accent: "#C9682D",
  accentSoft: "#F8F5EF",
  secondary: "#6F6A61",
  ink: "#111111",
  wash: "#F5F1EA",
  panel: "#FFFFFF",
  line: "#E7E0D6",
  heroOverlay: "linear-gradient(180deg, rgba(245,241,234,0.02), rgba(245,241,234,0.92))",
  cardVariant: "classic",
};

const PILLAR_INTERIOR_THEMES = {
  sleep: {
    eyebrow: "Sommeil profond",
    accent: "#276A93",
    accentSoft: "#E8F3F8",
    secondary: "#7B68A8",
    ink: "#10283A",
    wash: "#F3F8FA",
    panel: "#FFFFFF",
    line: "#D6E7EF",
    glow: "rgba(39,106,147,0.18)",
    heroOverlay: "linear-gradient(90deg, rgba(12,40,58,0.92), rgba(39,106,147,0.54), rgba(243,248,250,0.1))",
    cardVariant: "nocturne",
    metricOne: "Rythme",
    metricTwo: "Repos",
  },
  nutrition: {
    eyebrow: "Énergie claire",
    accent: "#1F6F9F",
    accentSoft: "#E6F3F5",
    secondary: "#4C8B62",
    ink: "#123047",
    wash: "#F4F8F2",
    panel: "#FFFFFF",
    line: "#DDE9DC",
    glow: "rgba(31,111,159,0.16)",
    heroOverlay: "linear-gradient(90deg, rgba(18,48,71,0.9), rgba(76,139,98,0.5), rgba(244,248,242,0.1))",
    cardVariant: "fresh",
    metricOne: "Carburant",
    metricTwo: "Clarté",
  },
  work: {
    eyebrow: "Focus system",
    accent: "#2456A6",
    accentSoft: "#EAF1FF",
    secondary: "#51606F",
    ink: "#101D34",
    wash: "#F3F6FB",
    panel: "#FFFFFF",
    line: "#DCE4F2",
    glow: "rgba(36,86,166,0.18)",
    heroOverlay: "linear-gradient(90deg, rgba(16,29,52,0.92), rgba(36,86,166,0.58), rgba(243,246,251,0.1))",
    cardVariant: "studio",
    metricOne: "Priorité",
    metricTwo: "Exécution",
  },
  confidence: {
    eyebrow: "Présence intérieure",
    accent: "#2B6EA6",
    accentSoft: "#EAF3F8",
    secondary: "#B98242",
    ink: "#16283B",
    wash: "#F7F2EA",
    panel: "#FFFFFF",
    line: "#E8DDCF",
    glow: "rgba(43,110,166,0.16)",
    heroOverlay: "linear-gradient(90deg, rgba(22,40,59,0.9), rgba(43,110,166,0.46), rgba(247,242,234,0.1))",
    cardVariant: "atelier",
    metricOne: "Identité",
    metricTwo: "Élan",
  },
  finance: {
    eyebrow: "Capital calme",
    accent: "#1F5D83",
    accentSoft: "#E7F1F5",
    secondary: "#B89B5E",
    ink: "#102B3A",
    wash: "#F6F2E8",
    panel: "#FFFFFF",
    line: "#E6DCC4",
    glow: "rgba(31,93,131,0.18)",
    heroOverlay: "linear-gradient(90deg, rgba(16,43,58,0.92), rgba(31,93,131,0.55), rgba(246,242,232,0.1))",
    cardVariant: "ledger",
    metricOne: "Actifs",
    metricTwo: "Vision",
  },
  influence: {
    eyebrow: "Connexion & persuasion",
    accent: "#285F9E",
    accentSoft: "#ECF3FB",
    secondary: "#9C5475",
    ink: "#17243B",
    wash: "#F7F2F4",
    panel: "#FFFFFF",
    line: "#E7DADF",
    glow: "rgba(40,95,158,0.17)",
    heroOverlay: "linear-gradient(90deg, rgba(23,36,59,0.92), rgba(40,95,158,0.48), rgba(247,242,244,0.1))",
    cardVariant: "salon",
    metricOne: "Signal",
    metricTwo: "Impact",
  },
};

export default function GenericPillarPage() {
  const { pillarId } = useParams();
  const navigate = useNavigate();
  const pillar = pillarsData[pillarId];
  const theme = PILLAR_INTERIOR_THEMES[pillarId] || LEGACY_INTERIOR_STYLE;
  const totalPrinciples = pillar?.topics?.reduce((sum, topic) => sum + (topic.principles?.length || 0), 0) || 0;

  if (!pillar) return null;

  // Special case: habits page redirects to the atomic habits section
  if (pillarId === "habits") {
    navigate("/pillar/habits/detail");
    return null;
  }

  return (
    <div
      className="min-h-screen pb-24"
      style={{
        background:
          `linear-gradient(180deg, ${theme.wash} 0%, #FFFFFF 42%, ${theme.wash} 100%)`,
      }}
    >
      {/* Top nav */}
      <div className="sticky top-0 z-40 border-b px-6 py-4 backdrop-blur-md"
        style={{ background: `${theme.wash}DD`, borderColor: theme.line }}>
        <button
          onClick={() => navigate("/pillars")}
          className="flex items-center gap-2 text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors group"
          style={{ color: theme.ink }}
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Retour au menu
        </button>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={pillar.heroImage} alt={pillar.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: theme.heroOverlay }} />
          <div className="absolute inset-x-0 bottom-0 h-28" style={{ background: `linear-gradient(180deg, transparent, ${theme.wash})` }} />
        </div>

        <div className="relative mx-auto grid min-h-[440px] max-w-7xl items-end gap-8 px-6 pb-12 pt-24 md:grid-cols-[1.1fr_0.9fr] md:px-12 lg:px-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ background: "rgba(255,255,255,0.14)", borderColor: "rgba(255,255,255,0.24)", color: "#FFFFFF" }}>
              <Compass className="h-3.5 w-3.5" />
              {theme.eyebrow || "Pilier"}
            </div>
            <h1 className="font-heading text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
              {pillar.title}
            </h1>
            <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-white/78 md:text-lg">
              {pillar.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="soft-volume hidden rounded-[1.6rem] border p-5 md:block"
            style={{ background: "rgba(255,255,255,0.82)", borderColor: "rgba(255,255,255,0.64)" }}
          >
            <div className="grid grid-cols-3 gap-3">
              <HeroMetric icon={Layers3} label="Thèmes" value={pillar.topics.length} theme={theme} />
              <HeroMetric icon={BookOpen} label="Principes" value={totalPrinciples} theme={theme} />
              <HeroMetric icon={Sparkles} label={theme.metricOne} value={theme.metricTwo} theme={theme} text />
            </div>
            <p className="mt-5 text-sm leading-relaxed" style={{ color: theme.ink }}>
              Une entrée plus visuelle pour choisir le bon axe sans changer le fond des contenus.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Sub-topic grid */}
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 md:flex md:items-end md:justify-between md:gap-8"
        >
          <div>
            <p className="mb-2 text-xs font-body font-semibold uppercase tracking-[0.2em]" style={{ color: theme.accent }}>Explorer</p>
            <h2 className="font-heading text-3xl font-semibold md:text-5xl" style={{ color: theme.ink }}>
              Choisis ton angle d'attaque
            </h2>
          </div>
          <p className="mt-4 max-w-md font-body text-sm leading-relaxed md:mt-0" style={{ color: "#6F6A61" }}>
            Chaque carte ouvre un thème précis. L'intérieur des thèmes reste inchangé pour l'instant.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillar.topics.map((topic, i) => (
            <SubTopicCard
              key={topic.id}
              topic={topic}
              pillarColor={pillar.color}
              theme={theme}
              index={i}
              onClick={(t) => navigate(`/pillar/${pillarId}/${t.id}`)}
            />
          ))}
        </div>

        {/* Special extras per pillar */}
        {pillarId === "sleep" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <SubTopicCard
              topic={{ id: "calculator", title: "Calculateur de Sommeil IA", tagline: "Trouve tes heures de coucher optimales selon ton âge et tes horaires", emoji: "🌙", principles: [] }}
              pillarColor={pillar.color}
              theme={theme}
              index={pillar.topics.length}
              onClick={() => navigate("/pillar/sleep/calculator")}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}

function HeroMetric({ icon: Icon, label, value, theme, text }) {
  return (
    <div className="rounded-2xl border px-3 py-4 text-center"
      style={{ background: theme.accentSoft, borderColor: theme.line }}>
      <Icon className="mx-auto mb-2 h-4 w-4" style={{ color: theme.accent }} />
      <p className={`${text ? "text-sm" : "text-2xl"} font-semibold leading-none`} style={{ color: theme.ink }}>
        {value}
      </p>
      <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider" style={{ color: theme.secondary }}>
        {label}
      </p>
    </div>
  );
}
