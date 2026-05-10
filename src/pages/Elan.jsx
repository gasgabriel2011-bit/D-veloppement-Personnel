import { Routes, Route } from "react-router-dom";
import ElanLayout from "../components/elan/ElanLayout";
import ElanToday from "./elan/ElanToday";
import ElanObjectifs from "./elan/ElanObjectifs";
import ElanHabitudes from "./elan/ElanHabitudes";
import ElanAnalyse from "./elan/ElanAnalyse";
import ElanProfil from "./elan/ElanProfil";
import { useElan } from "../hooks/useElan";
import { useElanAccount } from "../hooks/useElanAccount";
import ElanAccountGate from "../components/elan/ElanAccountGate";

export default function Elan() {
  const accountStore = useElanAccount();
  const store = useElan(accountStore.account?.id);

  if (!accountStore.isAuthenticated) {
    return (
      <ElanAccountGate
        onCreateAccount={accountStore.createAccount}
        onLogin={accountStore.login}
      />
    );
  }

  return (
    <ElanLayout account={accountStore.account} onLogout={accountStore.logout}>
      <Routes>
        <Route path="/" element={
          <ElanToday
            todayHabits={store.todayHabits}
            completedToday={store.completedToday}
            totalToday={store.totalToday}
            objectives={store.objectives}
            validateHabit={store.validateHabit}
          />
        } />
        <Route path="/objectifs" element={
          <ElanObjectifs
            objectives={store.objectives}
            habits={store.habits}
            addObjective={store.addObjective}
            updateObjective={store.updateObjective}
            deleteObjective={store.deleteObjective}
          />
        } />
        <Route path="/habitudes" element={
          <ElanHabitudes
            habits={store.habits}
            objectives={store.objectives}
            addHabit={store.addHabit}
            updateHabit={store.updateHabit}
            deleteHabit={store.deleteHabit}
          />
        } />
        <Route path="/analyse" element={
          <ElanAnalyse habits={store.habits} objectives={store.objectives} />
        } />
        <Route path="/profil" element={
          <ElanProfil
            objectives={store.objectives}
            habits={store.habits}
            logs={store.logs}
            points={store.points}
            completedToday={store.completedToday}
            totalToday={store.totalToday}
          />
        } />
      </Routes>
    </ElanLayout>
  );
}
