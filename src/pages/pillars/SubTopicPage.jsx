import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import PrincipleCard from "../../components/PrincipleCard";
import { pillarsData } from "../../data/pillarData";

export default function SubTopicPage() {
  const { pillarId, topicId } = useParams();
  const navigate = useNavigate();
  
  const pillar = pillarsData[pillarId];
  const topic = pillar?.topics?.find(t => t.id === topicId);

  if (!pillar || !topic) return null;

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Top nav */}
      <div className="sticky top-0 z-40 px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border flex items-center gap-4">
        <button
          onClick={() => navigate(`/pillar/${pillarId}`)}
          className="flex items-center gap-2 text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          {pillar.title}
        </button>
        <span className="text-muted-foreground/40">/</span>
        <span className="text-sm font-body font-medium text-foreground">{topic.title}</span>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden h-52 md:h-64">
        <img src={pillar.heroImage} alt={topic.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-8 left-6 md:left-12">
          <span className="text-4xl mr-4">{topic.emoji}</span>
          <span className="font-heading text-3xl md:text-4xl font-semibold text-foreground">{topic.title}</span>
          <p className="font-body text-muted-foreground italic mt-1">{topic.tagline}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-2">
            Concepts Fondamentaux
          </p>
          <h2 className="font-heading text-3xl font-semibold text-foreground">
            {topic.principles.length} principe{topic.principles.length > 1 ? "s" : ""} essentiels
          </h2>
        </motion.div>

        <div className="space-y-4">
          {topic.principles.map((p, i) => (
            <PrincipleCard key={i} principle={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}