import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const pillars = [
  {
    id: "sleep",
    title: "Sommeil",
    tagline: "Le fondement invisible de la performance",
    image: "/images/b36a7d47c_generated_ce746b24.png",
    route: "/pillar/sleep",
  },
  {
    id: "nutrition",
    title: "Alimentation",
    tagline: "Le carburant de ta transformation",
    image: "/images/7adf7d831_generated_aef130a2.png",
    route: "/pillar/nutrition",
  },
  {
    id: "work",
    title: "Travail & Productivité",
    tagline: "L'art du travail profond et intentionnel",
    image: "/images/ea1aeb23d_generated_371ac1bd.png",
    route: "/pillar/work",
  },
  {
    id: "confidence",
    title: "Confiance en Soi",
    tagline: "Le pouvoir de la croyance intérieure",
    image: "/images/27565d003_generated_18ef2ffc.png",
    route: "/pillar/confidence",
  },
  {
    id: "finance",
    title: "Finance & Richesse",
    tagline: "Bâtir des actifs, pas juste un salaire",
    image: "/images/8514b49bc_generated_image.png",
    route: "/pillar/finance",
  },
  {
    id: "influence",
    title: "Influence & Persuasion",
    tagline: "Les 6 principes universels de Cialdini",
    image: "/images/66d4937f5_generated_image.png",
    route: "/pillar/influence",
  },
];

// Habits card (wide, bottom) + Schedule card (wide, bottom)
const widePillars = [
  {
    id: "habits",
    title: "Habitudes Atomiques",
    tagline: "Les 4 Lois du Changement — James Clear",
    image: "/images/c503c6871_generated_image.png",
    route: "/pillar/habits",
  },
  {
    id: "schedule",
    title: "Emploi du Temps Optimal",
    tagline: "Ton système de vie quotidien basé sur la science",
    image: "/images/ea1aeb23d_generated_371ac1bd.png",
    route: "/schedule",
  },
];

function PillarTile({ pillar, index, wide = false }) {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -5 }}
      onClick={() => navigate(pillar.route)}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${wide ? "aspect-[21/6] md:aspect-[21/5]" : "aspect-[4/3]"}`}
    >
      <img
        src={pillar.image}
        alt={pillar.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
      <div className="relative z-10 h-full flex flex-col justify-end p-7 md:p-8">
        <h3 className={`font-heading font-semibold text-white mb-1 ${wide ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"}`}>
          {pillar.title}
        </h3>
        <p className="font-body text-sm text-white/70 group-hover:text-white/90 transition-colors">
          {pillar.tagline}
        </p>
        <div className="mt-3 flex items-center gap-2 text-white/40 group-hover:text-white/90 transition-colors">
          <span className="text-xs font-body font-medium tracking-wider uppercase">Explorer</span>
          <span className="text-xs transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Pillars() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="pt-20 pb-12 px-6 md:px-12 lg:px-20 text-center max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Développement Personnel
          </p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-5">
            Construis ta vie,
            <br />
            <span className="text-primary italic">pilier par pilier</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore chaque dimension du développement personnel.
            Clique sur une catégorie pour découvrir des principes concrets.
          </p>
        </motion.div>
      </div>

      {/* Grid */}
      <div className="px-6 md:px-12 lg:px-20 pb-20 max-w-7xl mx-auto space-y-5">
        {/* 2x3 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p, i) => <PillarTile key={p.id} pillar={p} index={i} />)}
        </div>

        {/* Wide cards */}
        <div className="grid grid-cols-1 gap-5">
          {widePillars.map((p, i) => <PillarTile key={p.id} pillar={p} index={i} wide />)}
        </div>
      </div>

      <Footer />
    </div>
  );
}