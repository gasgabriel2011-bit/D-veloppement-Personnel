import { useState } from "react";
import { motion } from "framer-motion";
import HabitCard from "./HabitCard";
import HabitDetailModal from "./HabitDetailModal";
import CoreConceptCard from "./CoreConceptCard";
import { habitLaws, coreConcepts } from "./habitData";
import ElanBanner from "./ElanBanner";

const habitImages = {
  cue: "https://media.base44.com/images/public/69d6a6cba62745514f53c039/4eddd5528_generated_961e8df5.png",
  craving: "https://media.base44.com/images/public/69d6a6cba62745514f53c039/d62d8b2fa_generated_1fff3f3d.png",
  response: "https://media.base44.com/images/public/69d6a6cba62745514f53c039/ebed93b62_generated_adccaf68.png",
  reward: "https://media.base44.com/images/public/69d6a6cba62745514f53c039/962cabe99_generated_35b12cdd.png",
};

export default function AtomicHabitsSection() {
  const [selectedHabit, setSelectedHabit] = useState(null);

  return (
    <section id="habits" className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Inspiré par Atomic Habits — James Clear
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Les 4 Lois du
            <br />
            <span className="text-primary italic">Changement</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Un rien peut tout changer. Chaque habitude suit un cycle en 4 étapes :
            signal, envie, réponse, récompense. Maîtrise ces lois pour transformer ta vie.
          </p>
        </motion.div>

        {/* 4 Laws Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {habitLaws.map((habit, i) => (
            <HabitCard
              key={habit.id}
              habit={habit}
              image={habitImages[habit.id]}
              index={i}
              onOpen={setSelectedHabit}
            />
          ))}
        </div>

        {/* Core Concepts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-8 text-center">
            Concepts Fondamentaux
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {coreConcepts.map((concept, i) => (
            <CoreConceptCard key={i} concept={concept} index={i} />
          ))}
        </div>

        {/* CTA Élan */}
        <ElanBanner />
      </div>

      <HabitDetailModal
        habit={selectedHabit}
        isOpen={!!selectedHabit}
        onClose={() => setSelectedHabit(null)}
      />
    </section>
  );
}