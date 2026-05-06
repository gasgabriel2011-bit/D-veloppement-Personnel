import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Lightbulb, Microscope } from "lucide-react";

export default function PrincipleCard({ principle, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.45 }}
      className="overflow-hidden rounded-2xl border border-border bg-card"
    >
      <button
        onClick={() => setIsOpen((value) => !value)}
        className="flex w-full items-start gap-4 p-5 text-left transition-colors hover:bg-secondary/40 md:p-6"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-bold text-primary">
          {index + 1}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-heading text-xl font-semibold text-foreground">
            {principle.title}
          </span>
          <span className="mt-2 block font-body text-sm leading-relaxed text-muted-foreground">
            {principle.description}
          </span>
        </span>
        <ChevronDown
          className={`mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="space-y-5 border-t border-border px-5 py-5 md:px-6">
          {principle.details && (
            <p className="font-body text-sm leading-relaxed text-foreground/80">
              {principle.details}
            </p>
          )}

          {principle.tip && (
            <div className="flex gap-3 rounded-xl bg-primary/5 p-4">
              <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <p className="font-body text-sm leading-relaxed text-foreground/80">
                {principle.tip}
              </p>
            </div>
          )}

          {principle.science && (
            <div className="flex gap-3 rounded-xl bg-secondary/60 p-4">
              <Microscope className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {principle.science}
              </p>
            </div>
          )}
        </div>
      )}
    </motion.article>
  );
}
