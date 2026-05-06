import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Calendar, Columns, AlignJustify, Trash2, X } from "lucide-react";
import TimePicker from "@/components/ui/TimePicker";

const DAYS_SHORT = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
const DAYS_FULL = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
const MONTHS = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];

function timeToMinutes(t) {
  if (!t) return 0;
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

// Returns array of { event, col, totalCols } for a list of events
function layoutEvents(events) {
  if (!events.length) return [];
  const sorted = [...events].sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime));
  const columns = [];
  const result = sorted.map(ev => {
    const evStart = timeToMinutes(ev.startTime);
    const evEnd = timeToMinutes(ev.endTime);
    let placed = false;
    for (let ci = 0; ci < columns.length; ci++) {
      const lastEnd = timeToMinutes(columns[ci][columns[ci].length - 1].endTime);
      if (evStart >= lastEnd) {
        columns[ci].push(ev);
        placed = true;
        result?.forEach(r => r); // placeholder — we assign below
        break;
      }
    }
    if (!placed) columns.push([ev]);
    return { event: ev, col: columns.length - (placed ? /* recalc */ 0 : 1) };
  });

  // Redo properly
  const colMap = new Map();
  const cols2 = [];
  sorted.forEach(ev => {
    let placed = false;
    for (let ci = 0; ci < cols2.length; ci++) {
      const lastEnd = timeToMinutes(cols2[ci][cols2[ci].length - 1].endTime);
      if (timeToMinutes(ev.startTime) >= lastEnd) {
        cols2[ci].push(ev);
        colMap.set(ev._uid, ci);
        placed = true;
        break;
      }
    }
    if (!placed) {
      colMap.set(ev._uid, cols2.length);
      cols2.push([ev]);
    }
  });

  // For each event, compute totalCols as max overlapping columns in its time range
  return sorted.map(ev => {
    const col = colMap.get(ev._uid);
    // find all events that overlap with this one
    const evStart = timeToMinutes(ev.startTime);
    const evEnd = timeToMinutes(ev.endTime);
    let maxCol = 0;
    sorted.forEach(other => {
      const oStart = timeToMinutes(other.startTime);
      const oEnd = timeToMinutes(other.endTime);
      if (oStart < evEnd && oEnd > evStart) {
        maxCol = Math.max(maxCol, colMap.get(other._uid));
      }
    });
    return { event: ev, col, totalCols: maxCol + 1 };
  });
}

export default function CalendarView({ activities, universalHabits, onUpdateActivity, onDeleteActivity, onAddActivity }) {
  const [view, setView] = useState("week");
  const [zoom, setZoom] = useState(1);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [editingEvent, setEditingEvent] = useState(null);

  const weekStart = useMemo(() => {
    const d = new Date(currentDate);
    const day = d.getDay();
    const diff = day === 0 ? -6 : 1 - day;
    d.setDate(d.getDate() + diff);
    d.setHours(0, 0, 0, 0);
    return d;
  }, [currentDate]);

  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + i);
    return d;
  });

  // Build all events with unique IDs
  const allEvents = useMemo(() => {
    const events = [];
    const userDayRanges = {}; // dayIndex -> [{start, end}] for conflict avoidance

    // User activities (multi-slot)
    activities.forEach(act => {
      const slotsToProcess = act.slots || [{ days: act.days, startTime: act.startTime, endTime: act.endTime }];
      slotsToProcess.forEach((slot, slotIdx) => {
        (slot.days || []).forEach(day => {
          const dayIdx = DAYS_FULL.indexOf(day);
          if (dayIdx >= 0) {
            if (!userDayRanges[dayIdx]) userDayRanges[dayIdx] = [];
            userDayRanges[dayIdx].push({ start: timeToMinutes(slot.startTime), end: timeToMinutes(slot.endTime) });
            events.push({
              ...act,
              _uid: `${act.id}-${slotIdx}-${dayIdx}`,
              _actId: act.id,
              dayIndex: dayIdx,
              startTime: slot.startTime,
              endTime: slot.endTime,
              isUser: true,
            });
          }
        });
      });
    });

    // Universal habits — skip if conflicts with user events
    universalHabits.forEach(hab => {
      hab.days.forEach(day => {
        const dayIdx = DAYS_FULL.indexOf(day);
        if (dayIdx < 0) return;
        const habStart = timeToMinutes(hab.startTime);
        const habEnd = timeToMinutes(hab.endTime);
        const conflicts = (userDayRanges[dayIdx] || []).some(r => habStart < r.end && habEnd > r.start);
        if (!conflicts) {
          events.push({
            ...hab,
            _uid: `${hab.id}-${dayIdx}`,
            dayIndex: dayIdx,
            isHabit: true,
          });
        }
      });
    });

    return events;
  }, [activities, universalHabits]);

  const getEventsForDay = (dayIndex) => {
    return allEvents
      .filter(e => e.dayIndex === dayIndex)
      .sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime));
  };

  const hours = Array.from({ length: 18 }, (_, i) => i + 5);
  const HOUR_HEIGHT = 60 * zoom;

  const getEventStyle = (event, col, totalCols) => {
    const startMin = timeToMinutes(event.startTime) - 5 * 60;
    const endMin = timeToMinutes(event.endTime) - 5 * 60;
    const top = (startMin / 60) * HOUR_HEIGHT;
    const height = Math.max(((endMin - startMin) / 60) * HOUR_HEIGHT, 22);
    const gapPx = 2;
    const width = totalCols > 1 ? `calc(${100 / totalCols}% - ${gapPx}px)` : `calc(100% - 4px)`;
    const left = totalCols > 1 ? `calc(${(col / totalCols) * 100}% + ${gapPx / 2}px)` : "2px";
    return { top, height, width, left };
  };

  const navigate = (dir) => {
    const d = new Date(currentDate);
    if (view === "month") d.setMonth(d.getMonth() + dir);
    else if (view === "week") d.setDate(d.getDate() + dir * 7);
    else d.setDate(d.getDate() + dir);
    setCurrentDate(d);
  };

  const formatHeader = () => {
    if (view === "month") return `${MONTHS[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    if (view === "week") {
      const end = new Date(weekStart); end.setDate(end.getDate() + 6);
      if (weekStart.getMonth() === end.getMonth())
        return `${weekStart.getDate()}–${end.getDate()} ${MONTHS[weekStart.getMonth()]} ${weekStart.getFullYear()}`;
      return `${weekStart.getDate()} ${MONTHS[weekStart.getMonth()].slice(0, 3)} – ${end.getDate()} ${MONTHS[end.getMonth()].slice(0, 3)} ${weekStart.getFullYear()}`;
    }
    return `${DAYS_FULL[(currentDate.getDay() + 6) % 7]} ${currentDate.getDate()} ${MONTHS[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
  };

  const displayDays = view === "day"
    ? [weekDays[(currentDate.getDay() + 6) % 7]]
    : weekDays;

  const monthDays = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const first = new Date(year, month, 1);
    const last = new Date(year, month + 1, 0);
    const startOffset = (first.getDay() + 6) % 7;
    const days = [];
    for (let i = 0; i < startOffset; i++) days.push(null);
    for (let d = 1; d <= last.getDate(); d++) days.push(d);
    return days;
  }, [currentDate]);

  return (
    <div className="flex flex-col h-full">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-background/95 backdrop-blur sticky top-0 z-20 gap-3 flex-wrap">
        <div className="flex items-center bg-secondary rounded-xl p-1 gap-0.5">
          {[{ v:"day",icon:AlignJustify,l:"Jour" },{ v:"week",icon:Columns,l:"Semaine" },{ v:"month",icon:Calendar,l:"Mois" }].map(btn => (
            <button key={btn.v} onClick={() => setView(btn.v)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-body font-semibold transition-all ${view===btn.v?"bg-primary text-primary-foreground shadow-sm":"text-muted-foreground hover:text-foreground"}`}>
              <btn.icon className="w-3.5 h-3.5" />
              {btn.l}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-border transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-sm font-body font-semibold text-foreground min-w-[160px] text-center">{formatHeader()}</span>
          <button onClick={() => navigate(1)} className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-border transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        {view !== "month" && (
          <div className="flex items-center gap-1.5">
            <button onClick={() => setZoom(z => Math.max(0.5, +(z-0.3).toFixed(1)))} className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-border transition-colors">
              <ZoomOut className="w-4 h-4 text-muted-foreground" />
            </button>
            <span className="text-xs font-body text-muted-foreground w-10 text-center">{Math.round(zoom*100)}%</span>
            <button onClick={() => setZoom(z => Math.min(2.5, +(z+0.3).toFixed(1)))} className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-border transition-colors">
              <ZoomIn className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        )}
      </div>

      {/* MONTH VIEW */}
      {view === "month" && (
        <div className="flex-1 overflow-y-auto p-3">
          <div className="grid grid-cols-7 mb-2">
            {DAYS_SHORT.map(d => <div key={d} className="text-center text-xs font-body font-semibold text-muted-foreground py-2">{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {monthDays.map((day, i) => {
              if (!day) return <div key={`e-${i}`} />;
              const dow = (new Date(currentDate.getFullYear(), currentDate.getMonth(), day).getDay() + 6) % 7;
              const dayEvs = getEventsForDay(dow).slice(0, 3);
              const isToday = new Date().getDate()===day && new Date().getMonth()===currentDate.getMonth() && new Date().getFullYear()===currentDate.getFullYear();
              return (
                <div key={day} className={`min-h-[80px] rounded-xl border p-1.5 ${isToday?"border-primary bg-primary/5":"border-border/50 bg-card"}`}>
                  <span className={`text-xs font-body font-semibold ${isToday?"text-primary":"text-muted-foreground"}`}>{day}</span>
                  <div className="mt-1 space-y-0.5">
                    {dayEvs.map((ev,j)=>(
                      <div key={j} onClick={()=>setSelectedEvent(ev)}
                        className="text-[10px] font-body px-1.5 py-0.5 rounded-md truncate text-white cursor-pointer hover:opacity-80"
                        style={{backgroundColor:ev.color}}>{ev.emoji} {ev.name}</div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* WEEK/DAY VIEW */}
      {view !== "month" && (
        <div className="flex-1 overflow-auto">
          <div className="flex min-w-0">
            {/* Gutter */}
            <div className="flex-shrink-0 w-12 border-r border-border">
              <div className="h-10 border-b border-border" />
              <div style={{ position:"relative", height:`${hours.length*HOUR_HEIGHT}px` }}>
                {hours.map(h => (
                  <div key={h} className="absolute left-0 right-0 flex items-start justify-end pr-1.5"
                    style={{top:`${(h-5)*HOUR_HEIGHT}px`,height:`${HOUR_HEIGHT}px`}}>
                    <span className="text-[10px] font-body text-muted-foreground -mt-2">{String(h).padStart(2,"0")}h</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day columns */}
            {displayDays.map((date, colIdx) => {
              const dow = (date.getDay() + 6) % 7;
              const rawEvents = getEventsForDay(dow);
              const laid = layoutEvents(rawEvents);
              const isToday = date.toDateString() === new Date().toDateString();
              return (
                <div key={colIdx} className="flex-1 min-w-0 border-r border-border last:border-r-0">
                  <div className={`h-10 flex flex-col items-center justify-center border-b border-border ${isToday?"bg-primary/10":""}`}>
                    <span className="text-[10px] font-body text-muted-foreground">{DAYS_SHORT[dow]}</span>
                    <span className={`text-sm font-heading font-semibold ${isToday?"text-primary":"text-foreground"}`}>{date.getDate()}</span>
                  </div>
                  <div className="relative" style={{height:`${hours.length*HOUR_HEIGHT}px`}}>
                    {hours.map(h => (
                      <div key={h} className="absolute left-0 right-0 border-t border-border/30" style={{top:`${(h-5)*HOUR_HEIGHT}px`}} />
                    ))}
                    {laid.map(({ event: ev, col, totalCols }) => {
                      const s = getEventStyle(ev, col, totalCols);
                      return (
                        <motion.div key={ev._uid} onClick={() => setSelectedEvent(ev)}
                          whileHover={{ opacity: 0.85 }}
                          style={{
                            position:"absolute", top:s.top, height:s.height, width:s.width, left:s.left,
                            zIndex:10, backgroundColor:ev.color,
                          }}
                          className="rounded-lg px-1.5 py-1 cursor-pointer overflow-hidden border border-white/20 shadow-sm">
                          <p className="text-[11px] font-body font-semibold text-white truncate leading-tight">{ev.emoji} {ev.name}</p>
                          {s.height > 32 && <p className="text-[10px] text-white/70">{ev.startTime}–{ev.endTime}</p>}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Event detail/edit modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
            onClick={() => { setSelectedEvent(null); setEditingEvent(null); }}>
            <motion.div initial={{scale:0.9,y:20}} animate={{scale:1,y:0}} exit={{scale:0.9,y:20}}
              className="bg-background rounded-2xl p-6 max-w-sm w-full border border-border shadow-2xl"
              onClick={e => e.stopPropagation()}>

              {editingEvent ? (
                /* Edit mode */
                <div className="space-y-4">
                  <h3 className="font-heading text-lg font-semibold text-foreground">Modifier l'événement</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <TimePicker label="Début" value={editingEvent.startTime} onChange={v => setEditingEvent(e => ({...e,startTime:v}))} />
                    <TimePicker label="Fin" value={editingEvent.endTime} onChange={v => setEditingEvent(e => ({...e,endTime:v}))} />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground block mb-1">Notes</label>
                    <textarea value={editingEvent.notes||""} onChange={e => setEditingEvent(ev => ({...ev,notes:e.target.value}))}
                      rows={2} className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm font-body resize-none focus:outline-none focus:ring-1 focus:ring-ring" />
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => { onUpdateActivity?.(editingEvent); setSelectedEvent(null); setEditingEvent(null); }}
                      className="flex-1 h-10 rounded-full bg-primary text-primary-foreground text-sm font-body font-semibold hover:bg-primary/90">Sauvegarder</button>
                    <button onClick={() => setEditingEvent(null)}
                      className="flex-1 h-10 rounded-full bg-secondary text-foreground text-sm font-body hover:bg-border">Annuler</button>
                  </div>
                </div>
              ) : (
                /* View mode */
                <>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{selectedEvent.emoji}</span>
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground">{selectedEvent.name}</h3>
                        <p className="font-body text-sm text-muted-foreground">{selectedEvent.startTime} – {selectedEvent.endTime}</p>
                      </div>
                    </div>
                    <button onClick={() => { setSelectedEvent(null); setEditingEvent(null); }}
                      className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center">
                      <X className="w-3.5 h-3.5 text-muted-foreground" />
                    </button>
                  </div>
                  {selectedEvent.days?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {selectedEvent.days.map(d=>(
                        <span key={d} className="text-xs px-2.5 py-1 rounded-full font-body font-medium text-white"
                          style={{backgroundColor:selectedEvent.color+"cc"}}>{d}</span>
                      ))}
                    </div>
                  )}
                  {(selectedEvent.notes || selectedEvent.detail) && (
                    <div className="bg-secondary rounded-xl p-4 mb-4">
                      <p className="text-sm font-body text-foreground/80 leading-relaxed">{selectedEvent.notes || selectedEvent.detail}</p>
                    </div>
                  )}
                  {selectedEvent.isHabit && (
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-3 mb-4">
                      <p className="text-xs font-body font-semibold text-primary uppercase tracking-wider mb-1">Habitude Universelle</p>
                    </div>
                  )}
                  <div className="flex gap-2">
                    {selectedEvent.isUser && (
                      <>
                        <button onClick={() => setEditingEvent({...selectedEvent})}
                          className="flex-1 h-9 rounded-full bg-secondary text-foreground text-sm font-body hover:bg-border transition-colors">
                          ✏️ Modifier
                        </button>
                        <button onClick={() => { onDeleteActivity?.(selectedEvent._actId); setSelectedEvent(null); }}
                          className="h-9 w-9 rounded-full bg-destructive/10 flex items-center justify-center hover:bg-destructive/20 transition-colors">
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </button>
                      </>
                    )}
                    {!selectedEvent.isUser && (
                      <button onClick={() => { setSelectedEvent(null); setEditingEvent(null); }}
                        className="flex-1 h-9 rounded-full bg-secondary text-foreground text-sm font-body hover:bg-border">Fermer</button>
                    )}
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
