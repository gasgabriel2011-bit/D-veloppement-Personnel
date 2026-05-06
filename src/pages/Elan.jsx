import { Routes, Route } from "react-router-dom";
import ElanLayout from "../components/elan/ElanLayout";
import ElanToday from "./elan/ElanToday";
import ElanObjectifs from "./elan/ElanObjectifs";
import ElanHabitudes from "./elan/ElanHabitudes";
import ElanAnalyse from "./elan/ElanAnalyse";
import ElanProfil from "./elan/ElanProfil";
import { useElan } from "../hooks/useElan";

export default function Elan() {
  const store = useElan();

  return (
    <ElanLayout>
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
        <Route path="/profil" element={<ElanProfil />} />
      </Routes>
    </ElanLayout>
  );
}