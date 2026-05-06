import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PillarLayout({ children }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="sticky top-0 z-40 border-b border-border bg-background/80 px-6 py-4 backdrop-blur-md">
        <button
          onClick={() => navigate("/pillars")}
          className="group flex items-center gap-2 font-body text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Retour aux piliers
        </button>
      </div>
      {children}
    </div>
  );
}
