import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import ProgressRing from "../../components/elan/ProgressRing";
import TrendBadge from "../../components/elan/TrendBadge";

const WEEK_DATA = [
  { day: "Lun", completed: 4, total: 5 },
  { day: "Mar", completed: 3, total: 5 },
  { day: "Mer", completed: 5, total: 5 },
  { day: "Jeu", completed: 2, total: 5 },
  { day: "Ven", completed: 4, total: 5 },
  { day: "Sam", completed: 1, total: 3 },
  { day: "Dim", completed: 2, total: 3 },
];

function getInsights(habits, objectives) {
  const best = [...habits].sort((a, b) => b.completionRate - a.completionRate)[0];
  const fragile = [...habits].filter(h => h.completionRate < 50).sort((a, b) => a.completionRate - b.completionRate)[0];
  const topObj = [...objectives].sort((a, b) => b.progress - a.progress)[0];
  const insights = [];
  if (topObj) insights.push(`Ton objectif le plus avancé : "${topObj.title}" à ${topObj.progress}%.`);
  if (best) insights.push(`Tu es très régulier sur "${best.title}" (${best.completionRate}% de réussite).`);
  if (fragile) insights.push(`"${fragile.title}" semble fragile. Essaie de la rendre plus simple.`);
  insights.push("Tu progresses mieux quand tes actions durent moins de 15 minutes.");
  return insights;
}

export default function ElanAnalyse({ habits, objectives }) {
  const globalCompletion = Math.round(habits.reduce((s, h) => s + h.completionRate, 0) / (habits.length || 1));
  const maxStreak = Math.max(...habits.map(h => h.streak), 0);
  const validatedThisWeek = WEEK_DATA.reduce((s, d) => s + d.completed, 0);
  const insights = getInsights(habits, objectives);
  const fragileHabits = habits.filter(h => h.completionRate < 50);
  const strongHabits = habits.filter(h => h.completionRate >= 70);

  return (
    <div className="max-w-2xl mx-auto px-5 py-10 space-y-8">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-heading text-2xl font-semibold" style={{ color: "#111111" }}>Analyse</h1>
        <p className="text-sm mt-0.5" style={{ color: "#6F6A61" }}>Ta progression de cette semaine</p>
      </motion.div>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-3">
        <StatCard label="Taux global" value={`${globalCompletion}%`} sub="de complétion" />
        <StatCard label="Cette semaine" value={validatedThisWeek} sub="validations" />
        <StatCard label="Série actuelle" value={`${maxStreak} jr`} sub="meilleure série" />
        <StatCard label="Objectifs" value={objectives.filter(o => o.status === "active").length} sub="actifs" />
      </div>

      {/* Weekly bar chart */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="rounded-2xl border p-5" style={{ background: "#FFFFFF", borderColor: "#E7E0D6" }}>
        <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "#6F6A61" }}>
          Habitudes validées — 7 derniers jours
        </p>
        <ResponsiveContainer width="100%" height={140}>
          <BarChart data={WEEK_DATA} barSize={20}>
            <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#6F6A61" }} axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip
              contentStyle={{ background: "#FFFFFF", border: "1px solid #E7E0D6", borderRadius: 12, fontSize: 12 }}
              formatter={(v, n) => [v, n === "completed" ? "Validées" : "Total"]}
            />
            <Bar dataKey="total" fill="#E7E0D6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="completed" fill="#111111" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Objectives progression */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
        className="rounded-2xl border p-5" style={{ background: "#FFFFFF", borderColor: "#E7E0D6" }}>
        <p className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: "#6F6A61" }}>
          Progression par objectif
        </p>
        <div className="space-y-5">
          {objectives.map(obj => {
            const color = obj.progress >= 60 ? "#2F6B4F" : obj.progress >= 30 ? "#B89B5E" : "#9C3D3D";
            return (
              <div key={obj.id} className="flex items-center gap-4">
                <ProgressRing progress={obj.progress} size={48} stroke={4} color={color} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <p className="text-sm font-semibold truncate" style={{ color: "#111111" }}>{obj.title}</p>
                    <TrendBadge trend={obj.trend} />
                  </div>
                  <p className="text-xs" style={{ color: "#6F6A61" }}>{obj.category}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Strong habits */}
      {strongHabits.length > 0 && (
        <Section label="Habitudes les plus régulières">
          {strongHabits.map(h => (
            <HabitStat key={h.id} habit={h} />
          ))}
        </Section>
      )}

      {/* Fragile habits */}
      {fragileHabits.length > 0 && (
        <Section label="Habitudes fragiles">
          {fragileHabits.map(h => (
            <HabitStat key={h.id} habit={h} fragile />
          ))}
        </Section>
      )}

      {/* AI Insights */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
        className="rounded-2xl border p-5 space-y-3" style={{ background: "#F8F5EF", borderColor: "#E7E0D6" }}>
        <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#6F6A61" }}>Observations</p>
        {insights.map((ins, i) => (
          <div key={i} className="flex gap-3 items-start">
            <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: "#B89B5E" }} />
            <p className="text-sm leading-relaxed" style={{ color: "#111111" }}>{ins}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function StatCard({ label, value, sub }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border p-5" style={{ background: "#FFFFFF", borderColor: "#E7E0D6" }}>
      <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#6F6A61" }}>{label}</p>
      <p className="font-heading text-2xl font-semibold" style={{ color: "#111111" }}>{value}</p>
      <p className="text-xs mt-0.5" style={{ color: "#6F6A61" }}>{sub}</p>
    </motion.div>
  );
}

function Section({ label, children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border p-5" style={{ background: "#FFFFFF", borderColor: "#E7E0D6" }}>
      <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "#6F6A61" }}>{label}</p>
      <div className="space-y-3">{children}</div>
    </motion.div>
  );
}

function HabitStat({ habit, fragile }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-sm font-medium" style={{ color: "#111111" }}>{habit.title}</p>
        <p className="text-xs" style={{ color: "#6F6A61" }}>Série : {habit.streak} jr · Meilleure : {habit.bestStreak} jr</p>
      </div>
      <span className="text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0"
        style={{
          background: fragile ? "#F5E6E3" : "#E7F2EB",
          color: fragile ? "#9C3D3D" : "#2F6B4F",
        }}>
        {habit.completionRate}%
      </span>
    </div>
  );
}