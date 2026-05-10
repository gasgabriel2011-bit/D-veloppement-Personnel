import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, KeyRound, LockKeyhole, Mail, Sparkles, UserRound } from "lucide-react";

export default function ElanAccountGate({ onCreateAccount, onLogin }) {
  const [mode, setMode] = useState("create");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accessCode, setAccessCode] = useState("");
  const [error, setError] = useState("");

  const isCreate = mode === "create";

  function submit(event) {
    event.preventDefault();
    setError("");

    try {
      const payload = { name, email, accessCode };
      if (isCreate) {
        onCreateAccount(payload);
      } else {
        onLogin(payload);
      }
    } catch (err) {
      setError(err.message || "Impossible d'ouvrir ton compte Élan.");
    }
  }

  return (
    <div className="min-h-screen px-5 py-6 flex flex-col" style={{ background: "#F8F5EF", fontFamily: "var(--font-body)" }}>
      <div className="max-w-5xl mx-auto w-full">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all hover:-translate-y-0.5"
          style={{ color: "#2B4B72", borderColor: "#D8E3EC", background: "#FFFFFF" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Retour au site
        </Link>
      </div>

      <div className="flex-1 grid place-items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md rounded-[28px] border p-5 sm:p-7 shadow-[0_20px_70px_rgba(41,54,72,0.12)]"
          style={{ background: "#FFFFFF", borderColor: "#E7E0D6" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-12 h-12 rounded-2xl grid place-items-center"
              style={{ background: "linear-gradient(135deg, #DCEAF5, #F3E6D4)", color: "#2B4B72" }}
            >
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#B87E52" }}>
                Compte Élan
              </p>
              <h1 className="font-heading text-2xl font-semibold" style={{ color: "#111111" }}>
                {isCreate ? "Crée ton espace" : "Reviens dans Élan"}
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-2 rounded-2xl p-1 mb-6" style={{ background: "#F4F0EA" }}>
            {[
              ["create", "Créer"],
              ["login", "Connexion"],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => {
                  setMode(value);
                  setError("");
                }}
                className="rounded-xl py-2.5 text-sm font-semibold transition-all"
                style={{
                  background: mode === value ? "#FFFFFF" : "transparent",
                  color: mode === value ? "#111111" : "#6F6A61",
                  boxShadow: mode === value ? "0 8px 22px rgba(41,54,72,0.08)" : "none",
                }}
              >
                {label}
              </button>
            ))}
          </div>

          <form onSubmit={submit} className="space-y-4">
            {isCreate && (
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: "#6F6A61" }}>
                  Prénom
                </span>
                <div className="mt-2 flex items-center gap-3 rounded-2xl border px-4 py-3" style={{ borderColor: "#E1D8CC", background: "#FBF8F2" }}>
                  <UserRound className="w-4 h-4" style={{ color: "#2B4B72" }} />
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full bg-transparent outline-none text-sm"
                    style={{ color: "#111111" }}
                    placeholder="Ton prénom"
                    autoComplete="given-name"
                  />
                </div>
              </label>
            )}

            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: "#6F6A61" }}>
                Email
              </span>
              <div className="mt-2 flex items-center gap-3 rounded-2xl border px-4 py-3" style={{ borderColor: "#E1D8CC", background: "#FBF8F2" }}>
                <Mail className="w-4 h-4" style={{ color: "#2B4B72" }} />
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full bg-transparent outline-none text-sm"
                  style={{ color: "#111111" }}
                  placeholder="toi@email.fr"
                  type="email"
                  autoComplete="email"
                />
              </div>
            </label>

            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: "#6F6A61" }}>
                Code d'accès
              </span>
              <div className="mt-2 flex items-center gap-3 rounded-2xl border px-4 py-3" style={{ borderColor: "#E1D8CC", background: "#FBF8F2" }}>
                <KeyRound className="w-4 h-4" style={{ color: "#2B4B72" }} />
                <input
                  value={accessCode}
                  onChange={(event) => setAccessCode(event.target.value)}
                  className="w-full bg-transparent outline-none text-sm"
                  style={{ color: "#111111" }}
                  placeholder="4 caractères minimum"
                  type="password"
                  autoComplete={isCreate ? "new-password" : "current-password"}
                />
              </div>
            </label>

            {error && (
              <p className="rounded-2xl px-4 py-3 text-sm" style={{ color: "#8A3D2B", background: "#F8E7DE" }}>
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5"
              style={{ background: "#2B4B72", color: "#FFFFFF", boxShadow: "0 16px 34px rgba(43,75,114,0.22)" }}
            >
              <LockKeyhole className="w-4 h-4" />
              {isCreate ? "Créer mon compte Élan" : "Ouvrir Élan"}
            </button>
          </form>

          <p className="mt-5 text-xs leading-relaxed" style={{ color: "#6F6A61" }}>
            Ton espace garde tes habitudes, objectifs et points séparés par compte sur cet appareil.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
