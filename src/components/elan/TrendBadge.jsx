export default function TrendBadge({ trend }) {
  const cfg = {
    up:     { label: "En progression", bg: "#E7F2EB", color: "#2F6B4F" },
    stable: { label: "Stable",         bg: "#F0EDE8", color: "#6F6A61" },
    down:   { label: "À relancer",     bg: "#F5E6E3", color: "#9C3D3D" },
  }[trend] || { label: "Stable", bg: "#F0EDE8", color: "#6F6A61" };

  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold"
      style={{ background: cfg.bg, color: cfg.color }}>
      {cfg.label}
    </span>
  );
}