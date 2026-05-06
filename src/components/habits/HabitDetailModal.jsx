import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function HabitDetailModal({ habit, isOpen, onClose }) {
  if (!habit) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-4 md:inset-x-auto md:inset-y-8 md:left-1/2 md:-translate-x-1/2 md:max-w-3xl md:w-full z-[61] bg-background rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="relative px-8 pt-8 pb-6 border-b border-border">
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute top-4 right-4 rounded-full"
              >
                <X className="w-5 h-5" />
              </Button>
              <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-2">
                {habit.law} — {habit.subtitle}
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
                {habit.title}
              </h2>
              <p className="font-body text-muted-foreground mt-2 italic">
                {habit.tagline}
              </p>
            </div>

            {/* Content */}
            <ScrollArea className="flex-1">
              <div className="px-8 py-8 space-y-8">
                {/* Principles */}
                <div className="space-y-6">
                  <h3 className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                    Principes d'Action
                  </h3>
                  {habit.principles.map((p, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                      className="flex gap-5"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                        <span className="text-sm font-heading font-bold text-primary">
                          {i + 1}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-heading text-lg font-semibold text-foreground mb-1">
                          {p.title}
                        </h4>
                        <p className="font-body text-sm leading-relaxed text-muted-foreground">
                          {p.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Inversion */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-secondary/50 rounded-2xl p-6 border border-border"
                >
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                    ↩ {habit.inversion.title}
                  </h4>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">
                    {habit.inversion.description}
                  </p>
                </motion.div>
              </div>
            </ScrollArea>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}