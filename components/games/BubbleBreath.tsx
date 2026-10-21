"use client";

import { useEffect, useState } from "react";
import { useSettings } from "../SettingsProvider";
import { useSavedState } from "./useSavedState";

type Phase = "in" | "hold" | "out";

const PACES = {
  gentle: { label: "Gentle", in: 4, hold: 2, out: 5 },
  slow: { label: "Slow", in: 5, hold: 3, out: 7 },
} as const;
type Pace = keyof typeof PACES;

const NEXT: Record<Phase, Phase> = { in: "hold", hold: "out", out: "in" };
const WORDS: Record<Phase, string> = { in: "Breathe in", hold: "Hold gently", out: "Breathe out" };

export function BubbleBreath({ active }: { active: boolean }) {
  const { settings } = useSettings();
  const [running, setRunning] = useState(false);
  const [phase, setPhase] = useState<Phase>("out");
  const [pace, setPace] = useSavedState<Pace>("bubble-pace", "gentle");
  const [breaths, setBreaths] = useSavedState("bubble-breaths", 0);

  const p = PACES[pace];
  const seconds = p[phase];

  // The bubble guides the pace; it never ends a round or counts down.
  useEffect(() => {
    if (!running || !active) return;
    const t = window.setTimeout(() => {
      if (phase === "out") setBreaths((b) => b + 1);
      setPhase(NEXT[phase]);
    }, seconds * 1000);
    return () => window.clearTimeout(t);
  }, [running, active, phase, seconds]);

  useEffect(() => {
    if (!active) setRunning(false);
  }, [active]);

  const start = () => {
    if (!running && phase === "out") setPhase("in");
    setRunning((r) => !r);
  };

  // Starts the count again from zero and stops the bubble, ready for a fresh start.
  const reset = () => {
    setRunning(false);
    setPhase("out");
    setBreaths(0);
  };

  const big = phase !== "out" || !running;
  const scale = running ? (phase === "out" ? 0.55 : 1) : 0.75;

  return (
    <div className="bubble-game">
      <div className="bubble-stage" aria-hidden="true">
        <div className="bubble-ring">
          <div
            className="bubble"
            style={{ transform: `scale(${scale})`, transitionDuration: settings.motion ? "0s" : running ? `${seconds}s` : "0.6s", opacity: big ? 1 : 0.85 }}
          />
        </div>
      </div>
      <p className="bubble-word display" aria-live="polite">
        {running ? WORDS[phase] : breaths ? "Paused — start again when you’re ready" : "Press start, then breathe with the bubble"}
      </p>
      <div className="game-controls">
        <button type="button" className="btn btn-primary" onClick={start}>
          {running ? "Pause" : breaths ? "Keep breathing" : "Start"}
        </button>
        <div role="group" aria-label="Breathing pace" className="opts">
          {(Object.keys(PACES) as Pace[]).map((k) => (
            <button key={k} type="button" className="chip" aria-pressed={pace === k} onClick={() => setPace(k)}>
              {PACES[k].label}
            </button>
          ))}
        </div>
        {breaths > 0 && (
          <button type="button" className="chip" onClick={reset}>
            Reset breath count
          </button>
        )}
      </div>
      <p className="muted game-note">
        {p.in}s in · {p.hold}s hold · {p.out}s out{breaths > 0 ? ` · ${breaths} calm ${breaths === 1 ? "breath" : "breaths"} so far` : ""}
      </p>
    </div>
  );
}
