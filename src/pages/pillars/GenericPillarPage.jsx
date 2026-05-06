import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SubTopicCard from "../../components/SubTopicCard";
import { pillarsData } from "../../data/pillarData";

export default function GenericPillarPage() {
  const { pillarId } = useParams();
  const navigate = useNavigate();
  const pillar = pillarsData[pillarId];

  if (!pillar) return null;

  // Special case: habits page redirects to the atomic habits section
  if (pillarId === "habits") {
    navigate("/pillar/habits/detail");
    return null;
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Top nav */}
      <div className="sticky top-0 z-40 px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border">
        <button
          onClick={() => navigate("/pillars")}
          className="flex items-center gap-2 text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Retour au menu
        </button>
      </div>

      {/* Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={pillar.heroImage} alt={pillar.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-8 left-6 md:left-12">
          <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-2">Pilier</p>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground">{pillar.title}</h1>
          <p className="font-body text-muted-foreground italic mt-1">{pillar.tagline}</p>
        </div>
      </div>

      {/* Sub-topic grid */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-2">Explorer</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-2">
            {pillar.topics.length} thèmes à explorer
          </h2>
          <p className="font-body text-muted-foreground">
            Clique sur un thème pour découvrir ses concepts fondamentaux.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillar.topics.map((topic, i) => (
            <SubTopicCard
              key={topic.id}
              topic={topic}
              pillarColor={pillar.color}
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
              index={pillar.topics.length}
              onClick={() => navigate("/pillar/sleep/calculator")}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}
