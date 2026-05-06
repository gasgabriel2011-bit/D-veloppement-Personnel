import { Link, useLocation } from "react-router-dom";
import { Sun, Target, Repeat2, BarChart2, User } from "lucide-react";

const NAV = [
  { to: "/elan", label: "Aujourd'hui", icon: Sun },
  { to: "/elan/objectifs", label: "Objectifs", icon: Target },
  { to: "/elan/habitudes", label: "Habitudes", icon: Repeat2 },
  { to: "/elan/analyse", label: "Analyse", icon: BarChart2 },
  { to: "/elan/profil", label: "Profil", icon: User },
];

export default function ElanLayout({ children }) {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#F8F5EF", fontFamily: "var(--font-body)" }}>
      {/* Desktop sidebar */}
      <div className="hidden md:flex fixed left-0 top-0 bottom-0 w-56 flex-col border-r z-30"
        style={{ background: "#FFFFFF", borderColor: "#E7E0D6" }}>
        <div className="px-7 py-8 border-b" style={{ borderColor: "#E7E0D6" }}>
          <h1 className="font-heading text-2xl font-semibold" style={{ color: "#111111" }}>Élan</h1>
          <p className="text-xs mt-0.5" style={{ color: "#6F6A61" }}>Chaque action compte.</p>
        </div>
        <nav className="flex-1 py-6 space-y-1 px-3">
          {NAV.map(({ to, label, icon: Icon }) => {
            const active = pathname === to || (to !== "/elan" && pathname.startsWith(to));
            return (
              <Link key={to} to={to}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                style={{
                  color: active ? "#111111" : "#6F6A61",
                  background: active ? "#EFE6D8" : "transparent",
                  fontWeight: active ? 600 : 400,
                }}>
                <Icon className="w-4 h-4 flex-shrink-0" />
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="px-7 py-5 text-xs" style={{ color: "#6F6A61", borderTop: "1px solid #E7E0D6" }}>
          © 2026 Élan
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 md:ml-56 pb-24 md:pb-0">{children}</main>

      {/* Mobile bottom nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 flex border-t"
        style={{ background: "#FFFFFF", borderColor: "#E7E0D6" }}>
        {NAV.map(({ to, label, icon: Icon }) => {
          const active = pathname === to || (to !== "/elan" && pathname.startsWith(to));
          return (
            <Link key={to} to={to} className="flex-1 flex flex-col items-center gap-1 py-3 transition-all"
              style={{ color: active ? "#111111" : "#6F6A61" }}>
              <Icon className="w-5 h-5" strokeWidth={active ? 2.2 : 1.6} />
              <span className="text-[10px] font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}