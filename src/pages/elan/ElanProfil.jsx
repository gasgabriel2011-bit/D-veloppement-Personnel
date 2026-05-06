import { motion } from "framer-motion";

export default function ElanProfil() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-10 space-y-6">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-heading text-2xl font-semibold" style={{ color: "#111111" }}>Profil</h1>
        <p className="text-sm mt-0.5" style={{ color: "#6F6A61" }}>Tes préférences et paramètres</p>
      </motion.div>

      {/* Avatar */}
      <div className="flex items-center gap-5 p-6 rounded-2xl border" style={{ background: "#FFFFFF", borderColor: "#E7E0D6" }}>
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-heading text-2xl font-bold"
          style={{ background: "#EFE6D8", color: "#111111" }}>G</div>
        <div>
          <p className="font-heading text-lg font-semibold" style={{ color: "#111111" }}>Gabriel</p>
          <p className="text-sm" style={{ color: "#6F6A61" }}>Membre depuis mai 2026</p>
        </div>
      </div>

      {/* Settings sections */}
      <SettingsGroup title="Préférences">
        <SettingsRow label="Rappel quotidien" value="08:00" />
        <SettingsRow label="Thème" value="Clair — Premium" />
        <SettingsRow label="Langue" value="Français" />
      </SettingsGroup>

      <SettingsGroup title="Données">
        <SettingsRow label="Export des données" value="CSV" action />
        <SettingsRow label="Réinitialiser" value="" action danger />
      </SettingsGroup>

      <SettingsGroup title="Premium">
        <div className="p-4 rounded-xl" style={{ background: "#F8F5EF" }}>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-semibold" style={{ color: "#111111" }}>Élan Premium</p>
            <span className="text-xs px-2.5 py-1 rounded-full font-semibold"
              style={{ background: "#EFE6D8", color: "#B89B5E" }}>Bientôt</span>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: "#6F6A61" }}>
            IA de suggestions d'habitudes · Notifications intelligentes · Export PDF · Mode coaching
          </p>
        </div>
      </SettingsGroup>

      <p className="text-center text-xs py-4" style={{ color: "#B0A99A" }}>
        Élan · Chaque action compte. · v1.0
      </p>
    </div>
  );
}

function SettingsGroup({ title, children }) {
  return (
    <div className="rounded-2xl border overflow-hidden" style={{ background: "#FFFFFF", borderColor: "#E7E0D6" }}>
      <p className="px-5 pt-4 pb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: "#6F6A61" }}>{title}</p>
      <div>{children}</div>
    </div>
  );
}

function SettingsRow({ label, value, action, danger }) {
  return (
    <div className="flex items-center justify-between px-5 py-3.5 border-t" style={{ borderColor: "#F0EDE8" }}>
      <p className="text-sm font-medium" style={{ color: danger ? "#9C3D3D" : "#111111" }}>{label}</p>
      {action ? (
        <button className="text-xs font-semibold px-3 py-1 rounded-full border transition-all hover:opacity-70"
          style={{ borderColor: danger ? "#9C3D3D" : "#E7E0D6", color: danger ? "#9C3D3D" : "#6F6A61" }}>
          {danger ? "Effacer" : "Exporter"}
        </button>
      ) : (
        <p className="text-sm" style={{ color: "#6F6A61" }}>{value}</p>
      )}
    </div>
  );
}