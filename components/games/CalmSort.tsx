"use client";

import { useState } from "react";

const CAP = 4;
type Color = "a" | "b" | "c";
type Tubes = Color[][];

// Each colour also has its own shape, so the puzzle never relies on colour alone.
const COLORS: Record<Color, { name: string; fill: string; shape: "circle" | "triangle" | "square" }> = {
  a: { name: "rust circle", fill: "#A63D1F", shape: "circle" },
  b: { name: "gold triangle", fill: "#F2B33D", shape: "triangle" },
  c: { name: "blue square", fill: "#3F6FB5", shape: "square" },
};

// All three are checked to be solvable (10–11 moves) with one-ball moves.
const PUZZLES: Tubes[] = [
  [["a", "b", "c", "a"], ["c", "a", "b", "b"], ["b", "c", "a", "c"], [], []],
  [["b", "a", "a", "c"], ["c", "b", "c", "a"], ["a", "c", "b", "b"], [], []],
  [["c", "c", "a", "b"], ["a", "b", "b", "c"], ["b", "a", "c", "a"], [], []],
];

const copy = (t: Tubes) => t.map((x) => x.slice());
const top = (t: Color[]) => t[t.length - 1];
const isSolved = (t: Tubes) => t.every((x) => x.length === 0 || (x.length === CAP && x.every((c) => c === x[0])));

export function CalmSort() {
  const [puzzle, setPuzzle] = useState(0);
  const [tubes, setTubes] = useState<Tubes>(() => copy(PUZZLES[0]));
  const [history, setHistory] = useState<Tubes[]>([]);
  const [picked, setPicked] = useState<number | null>(null);
  const [message, setMessage] = useState("Tap a tube to pick up its top piece, then tap where it should go.");

  const solved = isSolved(tubes);

  const canMove = (from: number, to: number) => {
    const src = tubes[from];
    const dst = tubes[to];
    return from !== to && src.length > 0 && dst.length < CAP && (dst.length === 0 || top(dst) === top(src));
  };

  const tap = (i: number) => {
    if (solved) return;
    if (picked === null) {
      if (!tubes[i].length) {
        setMessage("That tube is empty. Pick one with pieces in it.");
        return;
      }
      setPicked(i);
      setMessage(`Holding a ${COLORS[top(tubes[i])].name}. Tap a tube to put it in.`);
      return;
    }
    if (picked === i) {
      setPicked(null);
      setMessage("Put back. Pick any tube.");
      return;
    }
    if (!canMove(picked, i)) {
      setMessage("It can go in an empty tube, or on top of the same piece. Try another tube.");
      return;
    }
    const next = copy(tubes);
    next[i].push(next[picked].pop()!);
    setHistory((h) => [...h, tubes]);
    setTubes(next);
    setPicked(null);
    setMessage(isSolved(next) ? "Every tube is sorted. Well done — take a slow breath." : "Moved. Pick the next piece.");
  };

  const undo = () => {
    if (!history.length) return;
    setTubes(history[history.length - 1]);
    setHistory((h) => h.slice(0, -1));
    setPicked(null);
    setMessage("Undone. Undo as often as you like.");
  };

  const load = (n: number) => {
    setPuzzle(n);
    setTubes(copy(PUZZLES[n]));
    setHistory([]);
    setPicked(null);
    setMessage("Tap a tube to pick up its top piece, then tap where it should go.");
  };

  return (
    <div className="sort-game">
      <p className="game-step" aria-live="polite">
        {message}
      </p>
      <div className="tubes" role="group" aria-label="Tubes">
        {tubes.map((t, i) => (
          <button
            key={i}
            type="button"
            className={`tube${picked === i ? " picked" : ""}`}
            aria-pressed={picked === i}
            aria-label={`Tube ${i + 1}: ${t.length ? t.map((c) => COLORS[c].name).join(", ") + " (bottom to top)" : "empty"}`}
            onClick={() => tap(i)}
          >
            {t.map((c, j) => (
              <span key={j} className={`piece${picked === i && j === t.length - 1 ? " lifted" : ""}`} style={{ background: COLORS[c].fill }}>
                <Shape kind={COLORS[c].shape} />
              </span>
            ))}
          </button>
        ))}
      </div>
      <div className="game-controls">
        <button type="button" className="chip" onClick={undo} disabled={!history.length}>
          Undo
        </button>
        <button type="button" className="chip" onClick={() => load(puzzle)} disabled={!history.length}>
          Start this puzzle again
        </button>
        <button type="button" className={solved ? "btn btn-primary" : "chip"} onClick={() => load((puzzle + 1) % PUZZLES.length)}>
          Next puzzle
        </button>
      </div>
      <p className="muted game-note">Moves so far: {history.length}. There’s no limit — take your time.</p>
    </div>
  );
}

function Shape({ kind }: { kind: "circle" | "triangle" | "square" }) {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
      {kind === "circle" && <circle cx="10" cy="10" r="6" fill="#FFFFFF" />}
      {kind === "triangle" && <path d="M10 3.5L17 16H3z" fill="#2A1C2E" />}
      {kind === "square" && <rect x="4.5" y="4.5" width="11" height="11" rx="1.5" fill="#FFFFFF" />}
    </svg>
  );
}
