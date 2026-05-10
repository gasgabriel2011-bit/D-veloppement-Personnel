import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, LogOut, Sun, Target, Repeat2, BarChart2, User } from "lucide-react";

const NAV = [
  { to: "/elan", label: "Aujourd'hui", icon: Sun },
  { to: "/elan/objectifs", label: "Objectifs", icon: Target },
  { to: "/elan/habitudes", label: "Habitudes", icon: Repeat2 },
  { to: "/elan/analyse", label: "Analyse", icon: BarChart2 },
  { to: "/elan/profil", label: "Profil", icon: User },
];

export default function ElanLayout({ children, account, onLogout }) {
  const { pathname } = useLocation();
  const firstName = account?.name?.split(" ")[0] || "Élan";

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#F8F5EF", fontFamily: "var(--font-body)" }}>
      {/* Desktop sidebar */}
      <div className="hidden md:flex fixed left-0 top-0 bottom-0 w-56 flex-col border-r z-30"
        style={{ background: "#FFFFFF", borderColor: "#E7E0D6" }}>
        <div className="px-7 py-8 border-b" style={{ borderColor: "#E7E0D6" }}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold mb-5 transition-all hover:-translate-y-0.5"
            style={{ color: "#2B4B72", borderColor: "#D8E3EC", background: "#F7FBFD" }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Site Dev Perso
          </Link>
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
        <div className="px-5 py-5 text-xs space-y-3" style={{ color: "#6F6A61", borderTop: "1px solid #E7E0D6" }}>
          <div className="rounded-2xl px-3 py-3" style={{ background: "#F8F5EF" }}>
            <p className="font-semibold text-sm" style={{ color: "#111111" }}>{firstName}</p>
            <p className="truncate">{account?.email}</p>
          </div>
          <button
            type="button"
            onClick={onLogout}
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 font-semibold transition-all hover:-translate-y-0.5"
            style={{ color: "#6F6A61", background: "#F8F5EF" }}
          >
            <LogOut className="w-3.5 h-3.5" />
            Quitter
          </button>
        </div>
      </div>

      <div
        className="md:hidden sticky top-0 z-30 flex items-center justify-between border-b px-4 py-3"
        style={{ background: "rgba(255,255,255,0.92)", borderColor: "#E7E0D6", backdropFilter: "blur(14px)" }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold"
          style={{ color: "#2B4B72", borderColor: "#D8E3EC", background: "#F7FBFD" }}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Dev Perso
        </Link>
        <button
          type="button"
          onClick={onLogout}
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold"
          style={{ color: "#6F6A61", background: "#F8F5EF" }}
        >
          <LogOut className="w-3.5 h-3.5" />
          Quitter
        </button>
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
