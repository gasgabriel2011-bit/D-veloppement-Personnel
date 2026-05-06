import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border px-6 py-8 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p className="font-body">
          Développement Personnel · Sommeil, habitudes, énergie et clarté.
        </p>
        <button
          onClick={scrollTop}
          className="inline-flex items-center gap-2 font-body font-medium text-foreground transition-colors hover:text-primary"
        >
          Haut de page
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </footer>
  );
}
