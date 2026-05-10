import { useState, useCallback, useEffect } from "react";
import { DEMO_OBJECTIVES, DEMO_HABITS } from "../data/elanData";

const clone = (v) => JSON.parse(JSON.stringify(v));

const defaultStore = () => ({
  objectives: clone(DEMO_OBJECTIVES),
  habits: clone(DEMO_HABITS),
  logs: [],
  todayStatus: {},
});

const canUseStorage = () => typeof window !== "undefined" && window.localStorage;

function storageKey(accountId) {
  return `elan.data.${accountId}`;
}

function readStore(accountId) {
  if (!accountId || !canUseStorage()) return defaultStore();

  try {
    const raw = window.localStorage.getItem(storageKey(accountId));
    return raw ? { ...defaultStore(), ...JSON.parse(raw) } : defaultStore();
  } catch {
    return defaultStore();
  }
}

function writeStore(accountId, store) {
  if (!accountId || !canUseStorage()) return;
  window.localStorage.setItem(storageKey(accountId), JSON.stringify(store));
}

export function useElan(accountId = null) {
  const initialStore = readStore(accountId);
  const [objectives, setObjectives] = useState(initialStore.objectives);
  const [habits, setHabits] = useState(initialStore.habits);
  const [logs, setLogs] = useState(initialStore.logs);
  const [todayStatus, setTodayStatus] = useState(initialStore.todayStatus);
  const [loadedAccountId, setLoadedAccountId] = useState(accountId);

  useEffect(() => {
    const nextStore = readStore(accountId);
    setObjectives(nextStore.objectives);
    setHabits(nextStore.habits);
    setLogs(nextStore.logs);
    setTodayStatus(nextStore.todayStatus);
    setLoadedAccountId(accountId);
  }, [accountId]);

  useEffect(() => {
    if (!accountId || loadedAccountId !== accountId) return;

    writeStore(accountId, {
      objectives,
      habits,
      logs,
      todayStatus,
    });
  }, [accountId, loadedAccountId, objectives, habits, logs, todayStatus]);

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
  const todayDay = ["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"][new Date().getDay()];
  const todayHabits = habits
    .filter(h => h.frequency.days.includes(todayDay) && h.status === "active")
    .map(h => ({
      ...h,
      todayStatus: todayStatus[h.id] || null,
    }));

  const completedToday = todayHabits.filter(h => h.todayStatus === "completed").length;
  const activeStreaks = habits.map(h => h.streak).filter(s => s > 0);
  const globalStreak = activeStreaks.length ? Math.min(...activeStreaks) : 0;
  const totalPoints = objectives.reduce((sum, obj) => sum + (obj.currentPoints || 0), 0);
  const targetPoints = objectives.reduce((sum, obj) => sum + (obj.targetPoints || 0), 0);
  const todayKey = new Date().toDateString();
  const todayPoints = logs
    .filter(log => new Date(log.date).toDateString() === todayKey)
    .reduce((sum, log) => sum + (log.pointsEarned || 0), 0);
  const todayAvailablePoints = todayHabits.reduce((sum, habit) => sum + (habit.impact?.points || 0), 0);
  const weeklyPotentialPoints = habits
    .filter(h => h.status === "active")
    .reduce((sum, habit) => sum + ((habit.impact?.points || 0) * (habit.frequency?.days?.length || 0)), 0);
  const points = {
    total: totalPoints,
    target: targetPoints,
    progress: targetPoints ? Math.min(100, Math.round((totalPoints / targetPoints) * 100)) : 0,
    today: todayPoints,
    todayAvailable: todayAvailablePoints,
    weeklyPotential: weeklyPotentialPoints,
  };

  return {
    objectives,
    habits,
    logs,
    todayHabits,
    completedToday,
    totalToday: todayHabits.length,
    globalStreak,
    points,
    validateHabit,
    addObjective, updateObjective, deleteObjective,
    addHabit, updateHabit, deleteHabit,
  };
}
