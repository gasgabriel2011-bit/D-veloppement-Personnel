import { useState, useCallback } from "react";
import { DEMO_OBJECTIVES, DEMO_HABITS, getTodayHabits, IMPACT_POINTS } from "../data/elanData";

// Deep clone helper
const clone = (v) => JSON.parse(JSON.stringify(v));

export function useElan() {
  const [objectives, setObjectives] = useState(clone(DEMO_OBJECTIVES));
  const [habits, setHabits] = useState(clone(DEMO_HABITS));
  const [logs, setLogs] = useState([]); // HabitLog[]

  // Today's habit completion state: { [habitId]: "completed"|"missed"|null }
  const [todayStatus, setTodayStatus] = useState({});

  // ── Validate a habit ──────────────────────────────────────────────────────
  const validateHabit = useCallback((habitId, status = "completed", value = null, note = null) => {
    const habit = habits.find(h => h.id === habitId);
    if (!habit) return;

    const pointsEarned = status === "completed" ? habit.impact.points : 0;

    // Log
    setLogs(prev => [
      ...prev,
      { id: Date.now().toString(), habitId, objectiveId: habit.objectiveId,
        date: new Date().toISOString(), status, value, note, pointsEarned }
    ]);

    // Update today status
    setTodayStatus(prev => ({ ...prev, [habitId]: status }));

    // Update habit streak
    setHabits(prev => prev.map(h => {
      if (h.id !== habitId) return h;
      return { ...h, streak: status === "completed" ? h.streak + 1 : 0 };
    }));

    // Progress objective
    if (pointsEarned > 0) {
      setObjectives(prev => prev.map(obj => {
        if (obj.id !== habit.objectiveId) return obj;
        const newPoints = obj.currentPoints + pointsEarned;
        const newProgress = Math.min(100, Math.round(newPoints / obj.targetPoints * 100));
        return { ...obj, currentPoints: newPoints, progress: newProgress };
      }));
    }
  }, [habits]);

  // ── CRUD helpers ──────────────────────────────────────────────────────────
  const addObjective = useCallback((obj) => {
    setObjectives(prev => [...prev, {
      id: "obj_" + Date.now(), progress: 0, currentPoints: 0, targetPoints: 300,
      trend: "stable", subObjectives: [], status: "active", ...obj
    }]);
  }, []);

  const updateObjective = useCallback((id, patch) => {
    setObjectives(prev => prev.map(o => o.id === id ? { ...o, ...patch } : o));
  }, []);

  const deleteObjective = useCallback((id) => {
    setObjectives(prev => prev.filter(o => o.id !== id));
    setHabits(prev => prev.filter(h => h.objectiveId !== id));
  }, []);

  const addHabit = useCallback((habit) => {
    setHabits(prev => [...prev, {
      id: "h_" + Date.now(), streak: 0, bestStreak: 0, completionRate: 0,
      status: "active", ...habit
    }]);
  }, []);

  const updateHabit = useCallback((id, patch) => {
    setHabits(prev => prev.map(h => h.id === id ? { ...h, ...patch } : h));
  }, []);

  const deleteHabit = useCallback((id) => {
    setHabits(prev => prev.filter(h => h.id !== id));
  }, []);

  // ── Derived ───────────────────────────────────────────────────────────────
  const todayHabits = getTodayHabits().map(h => ({
    ...habits.find(x => x.id === h.id) || h,
    todayStatus: todayStatus[h.id] || null,
  }));

  const completedToday = todayHabits.filter(h => h.todayStatus === "completed").length;
  const globalStreak = Math.min(...habits.map(h => h.streak).filter(s => s > 0), 0) || 0;

  return {
    objectives,
    habits,
    logs,
    todayHabits,
    completedToday,
    totalToday: todayHabits.length,
    globalStreak,
    validateHabit,
    addObjective, updateObjective, deleteObjective,
    addHabit, updateHabit, deleteHabit,
  };
}