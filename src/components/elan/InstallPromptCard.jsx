import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, Share, Smartphone, SquarePlus, X } from "lucide-react";

function isInstalledApp() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
}

export default function InstallPromptCard() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = window.localStorage.getItem("elan.installPrompt.dismissed") === "true";
    setVisible(!isInstalledApp() && !dismissed);
  }, []);

  if (!visible) return null;

  function dismiss() {
    window.localStorage.setItem("elan.installPrompt.dismissed", "true");
    setVisible(false);
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-[28px] border p-5 sm:p-6"
      style={{
        background: "linear-gradient(145deg, #FFFFFF 0%, #F2F8FC 55%, #F7E9D8 100%)",
        borderColor: "#D9E3EA",
        boxShadow: "0 18px 50px rgba(43,75,114,0.10)",
      }}
    >
      <button
        type="button"
        onClick={dismiss}
        className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full transition-all hover:-translate-y-0.5"
        style={{ background: "rgba(255,255,255,0.72)", color: "#6F6A61" }}
        aria-label="Masquer l'aide d'installation"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
        <div className="flex-1 min-w-0 pr-8 sm:pr-0">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold mb-3"
            style={{ color: "#2B4B72", background: "rgba(255,255,255,0.72)" }}>
            <Smartphone className="w-3.5 h-3.5" />
            Installer Dev Perso
          </div>
          <h2 className="font-heading text-xl font-semibold mb-2" style={{ color: "#111111" }}>
            Mets Élan sur ton écran d'accueil
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#5D6672" }}>
            Sur iPhone, ouvre le site dans Safari, appuie sur le bouton de partage en bas,
            puis choisis Ajouter à l'écran d'accueil.
          </p>
        </div>

        <div className="w-full sm:w-44 rounded-[24px] border p-3" style={{ background: "rgba(255,255,255,0.74)", borderColor: "#E5EDF2" }}>
          <div className="rounded-[20px] p-3" style={{ background: "#F8F5EF" }}>
            <div className="h-20 rounded-2xl mb-3 grid place-items-center" style={{ background: "#FFFFFF", color: "#2B4B72" }}>
              <Share className="w-7 h-7" />
            </div>
            <div className="flex items-center justify-around rounded-2xl px-3 py-2" style={{ background: "#FFFFFF" }}>
              <Home className="w-4 h-4" style={{ color: "#B87E52" }} />
              <Share className="w-5 h-5" style={{ color: "#2B4B72" }} />
              <SquarePlus className="w-4 h-4" style={{ color: "#6F6A61" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-5">
        {[
          [Share, "Partager", "Icône en bas de Safari"],
          [SquarePlus, "Ajouter", "Ajouter à l'écran d'accueil"],
          [Home, "Valider", "Dev Perso arrive comme une app"],
        ].map(([Icon, title, text]) => (
          <div key={title} className="rounded-2xl border px-3 py-3" style={{ background: "rgba(255,255,255,0.66)", borderColor: "#E5EDF2" }}>
            <Icon className="w-4 h-4 mb-2" style={{ color: "#2B4B72" }} />
            <p className="text-sm font-semibold" style={{ color: "#111111" }}>{title}</p>
            <p className="text-xs mt-0.5" style={{ color: "#6F6A61" }}>{text}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
