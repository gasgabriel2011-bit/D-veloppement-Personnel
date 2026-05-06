import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ElanBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 rounded-lg border border-primary/20 bg-primary/10 p-6 md:flex md:items-center md:justify-between md:gap-8"
    >
      <div className="max-w-2xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          Élan
        </div>
        <h3 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
          Transforme tes habitudes en système quotidien.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          Suis tes objectifs, valide tes actions et garde une lecture claire de tes progrès.
        </p>
      </div>

      <Button asChild className="mt-6 h-11 px-5 md:mt-0">
        <Link to="/elan">
          Ouvrir Élan
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </motion.div>
  );
}
