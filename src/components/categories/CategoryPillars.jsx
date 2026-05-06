import { useState } from "react";
import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";
import CategoryDetailModal from "./CategoryDetailModal";
import { categories } from "./categoryData";

export default function CategoryPillars() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section id="categories" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Les Piliers de la Vitalité
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Construis ta vie,
            <br />
            <span className="text-primary italic">pilier par pilier</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore chaque dimension du développement personnel. Clique sur une catégorie
            pour découvrir des principes concrets et des stratégies éprouvées.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {categories.map((cat, i) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              index={i}
              onOpen={setSelectedCategory}
            />
          ))}
        </div>
      </div>

      <CategoryDetailModal
        category={selectedCategory}
        isOpen={!!selectedCategory}
        onClose={() => setSelectedCategory(null)}
      />
    </section>
  );
}