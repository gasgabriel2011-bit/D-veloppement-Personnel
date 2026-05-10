import { motion } from "framer-motion";
import { Award, Flame, Sparkles, Target, TrendingUp } from "lucide-react";

export default function ElanProfil({
  objectives = [],
  habits = [],
  logs = [],
  points = { total: 0, target: 0, progress: 0, today: 0, todayAvailable: 0, weeklyPotential: 0 },
  completedToday = 0,
  totalToday = 0,
}) {
  const activeObjectives = objectives.filter(o => o.status === "active");
  const activeHabits = habits.filter(h => h.status === "active");
  const completedLogs = logs.filter(log => log.status === "completed");
  const topObjectives = [...activeObjectives]
    .sort((a, b) => (b.currentPoints || 0) - (a.currentPoints || 0))
    .slice(0, 3);

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

      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="soft-volume rounded-[1.4rem] border p-5"
        style={{ background: "#FFFFFF", borderColor: "#E7E0D6" }}
      >
        <div className="flex items-start justify-between gap-5">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
              style={{ background: "#F5EED8", color: "#B89B5E" }}>
              <Award className="h-3.5 w-3.5" />
              Tes points
            </div>
            <p className="font-heading text-5xl font-semibold leading-none" style={{ color: "#111111" }}>
              {points.total}
            </p>
            <p className="mt-2 text-sm" style={{ color: "#6F6A61" }}>
              {points.target > 0 ? `${points.progress}% de ton cap global atteint` : "Commence un objectif pour ouvrir ton compteur."}
            </p>
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded-[1.35rem]"
            style={{ background: "linear-gradient(145deg, #111111, #3A332B)", color: "#FFFFFF", boxShadow: "0 18px 34px rgba(17,17,17,0.18)" }}>
            <Sparkles className="h-7 w-7" />
          </div>
        </div>

        <div className="mt-5 h-2 overflow-hidden rounded-full" style={{ background: "#F0EDE8" }}>
          <div className="h-full rounded-full transition-all"
            style={{
              width: `${points.progress}%`,
              background: "linear-gradient(90deg, #B89B5E, #2F6B4F)",
            }}
          />
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          <PointStat icon={Flame} label="Aujourd'hui" value={`${points.today}/${points.todayAvailable}`} />
          <PointStat icon={TrendingUp} label="Semaine" value={`+${points.weeklyPotential}`} />
          <PointStat icon={Target} label="Validées" value={`${completedToday}/${totalToday}`} />
        </div>

        {topObjectives.length > 0 && (
          <div className="mt-5 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#6F6A61" }}>
              Points par objectif
            </p>
            {topObjectives.map(objective => (
              <ObjectivePoints key={objective.id} objective={objective} />
            ))}
          </div>
        )}
      </motion.section>

      <div className="grid grid-cols-2 gap-3">
        <SoftMetric label="Objectifs actifs" value={activeObjectives.length} />
        <SoftMetric label="Habitudes actives" value={activeHabits.length} />
        <SoftMetric label="Actions validées" value={completedLogs.length} />
        <SoftMetric label="Points possibles" value={`+${points.weeklyPotential}`} />
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

function PointStat({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl border px-3 py-3" style={{ background: "#F8F5EF", borderColor: "#EFE6D8" }}>
      <Icon className="mb-2 h-4 w-4" style={{ color: "#B89B5E" }} />
      <p className="text-lg font-semibold leading-none" style={{ color: "#111111" }}>{value}</p>
      <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider" style={{ color: "#8B8376" }}>{label}</p>
    </div>
  );
}

function ObjectivePoints({ objective }) {
  const current = objective.currentPoints || 0;
  const target = objective.targetPoints || 0;
  const progress = target ? Math.min(100, Math.round((current / target) * 100)) : 0;

  return (
    <div className="rounded-2xl border px-4 py-3" style={{ background: "#F8F5EF", borderColor: "#EFE6D8" }}>
      <div className="mb-2 flex items-center justify-between gap-3">
        <p className="truncate text-sm font-semibold" style={{ color: "#111111" }}>{objective.title}</p>
        <p className="text-xs font-semibold" style={{ color: "#6F6A61" }}>{current}/{target} pts</p>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full" style={{ background: "#E7E0D6" }}>
        <div className="h-full rounded-full" style={{ width: `${progress}%`, background: "#B89B5E" }} />
      </div>
    </div>
  );
}

function SoftMetric({ label, value }) {
  return (
    <div className="soft-volume rounded-2xl border p-4" style={{ background: "#FFFFFF", borderColor: "#E7E0D6" }}>
      <p className="font-heading text-2xl font-semibold" style={{ color: "#111111" }}>{value}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wider" style={{ color: "#6F6A61" }}>{label}</p>
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
