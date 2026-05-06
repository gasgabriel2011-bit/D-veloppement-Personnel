import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection({ heroImage, onExplore }) {
  return (
    <section className="relative h-full min-h-screen overflow-hidden">
      <img
        src={heroImage}
        alt="Développement personnel"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 flex h-full min-h-screen items-end px-6 pb-16 md:px-12 md:pb-20 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Développement Personnel
          </p>
          <h1 className="font-heading text-5xl font-semibold leading-[0.95] text-white md:text-7xl lg:text-8xl">
            Construis ta vie,
            <br />
            <span className="italic text-primary">pilier par pilier</span>
          </h1>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-white/75 md:text-lg">
            Un espace clair pour explorer le sommeil, l'énergie, le travail, la confiance,
            les finances et les habitudes qui changent vraiment le quotidien.
          </p>
          <Button
            onClick={onExplore}
            className="mt-8 h-12 rounded-full px-6 font-body font-medium"
          >
            Explorer les piliers
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
