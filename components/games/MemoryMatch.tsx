"use client";

import { type ReactNode } from "react";
import { useSavedState } from "./useSavedState";

const SYMBOLS: { name: string; color: string; draw: ReactNode }[] = [
  { name: "sun", color: "#E0861A", draw: <><circle cx="16" cy="16" r="6" /><path d="M16 3v4M16 25v4M3 16h4M25 16h4M7 7l3 3M22 22l3 3M7 25l3-3M22 10l3-3" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></> },
  { name: "moon", color: "#4B3BA8", draw: <path d="M21 4a12 12 0 1 0 7 19A10 10 0 0 1 21 4z" /> },
  { name: "heart", color: "#C2335E", draw: <path d="M16 27S4 19.5 4 11.5A6 6 0 0 1 16 9a6 6 0 0 1 12 2.5C28 19.5 16 27 16 27z" /> },
  { name: "leaf", color: "#2F7D55", draw: <path d="M6 26C6 12 14 5 27 5c0 13-7 21-21 21zm0 0l11-11" /> },
  { name: "star", color: "#B8860B", draw: <path d="M16 3l3.8 8.2 9 1-6.7 6.1 1.9 8.9L16 22.6 8 27.2l1.9-8.9L3.2 12.2l9-1z" /> },
  { name: "drop", color: "#2D6FB5", draw: <path d="M16 3s9 10.5 9 16a9 9 0 0 1-18 0c0-5.5 9-16 9-16z" /> },
  { name: "flower", color: "#D2531F", draw: <>{[0, 72, 144, 216, 288].map((r) => <ellipse key={r} cx="16" cy="8.5" rx="4" ry="6" transform={`rotate(${r} 16 16)`} />)}<circle cx="16" cy="16" r="3.5" fill="#F7E3A1" /></> },
  { name: "house", color: "#7A4E2D", draw: <path d="M4 15L16 5l12 10v12H20v-8h-8v8H4z" /> },
  { name: "cloud", color: "#5E6A7D", draw: <path d="M9 25a6 6 0 0 1-.8-12A8 8 0 0 1 23.6 11 7 7 0 0 1 23 25z" /> },
  { name: "bell", color: "#8A2D63", draw: <path d="M16 4a8 8 0 0 0-8 8v7l-3 4h22l-3-4v-7a8 8 0 0 0-8-8zm-3 21a3 3 0 0 0 6 0z" /> },
];

const SIZES = [6, 12, 20];
const COLUMNS: Record<number, number> = { 6: 3, 12: 4, 20: 5 };

type Card = { key: number; symbol: number };

function deal(size: number): Card[] {
  const symbols = Array.from({ length: size / 2 }, (_, i) => i).flatMap((s) => [s, s]);
  for (let i = symbols.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [symbols[i], symbols[j]] = [symbols[j], symbols[i]];
  }
  return symbols.map((symbol, key) => ({ key, symbol }));
}

export function MemoryMatch() {
  const [size, setSize] = useSavedState("match-size", 12);
  const [cards, setCards] = useSavedState("match-cards", () => deal(12));
  const [open, setOpen] = useSavedState<number[]>("match-open", []);
  const [matchedList, setMatched] = useSavedState<number[]>("match-matched", []);
  const [turns, setTurns] = useSavedState("match-turns", 0);
  const matched = new Set(matchedList);

  const pairs = size / 2;
  const found = matched.size / 2;
  const done = found === pairs;

  const restart = (n = size) => {
    setSize(n);
    setCards(deal(n));
    setOpen([]);
    setMatched([]);
    setTurns(0);
  };

  // Two unmatched cards stay face up until the next tap — no timer turns them back.
  const flip = (i: number) => {
    if (matched.has(i) || open.includes(i)) return;
    const current = open.length === 2 ? [] : open;
    const next = [...current, i];
    setOpen(next);
    if (next.length === 2) {
      setTurns((t) => t + 1);
      const [x, y] = next;
      if (cards[x].symbol === cards[y].symbol) {
        setMatched((m) => [...m, x, y]);
        setOpen([]);
      }
    }
  };

  const lastPair = open.length === 2;

  return (
    <div className="match-game">
      <p className="game-step" aria-live="polite">
        {done
          ? `You found all ${pairs} pairs in ${turns} turns. Lovely focus!`
          : lastPair
            ? "Not a pair this time. Tap any card to keep going."
            : `Turn over two cards to find a pair. ${found} of ${pairs} pairs found.`}
      </p>
      <div className="match-grid" style={{ gridTemplateColumns: `repeat(${COLUMNS[size]}, minmax(0, 130px))` }}>
        {cards.map((c, i) => {
          const faceUp = matched.has(i) || open.includes(i);
          const s = SYMBOLS[c.symbol];
          return (
            <button
              key={c.key}
              type="button"
              className={`match-card${faceUp ? " up" : ""}${matched.has(i) ? " matched" : ""}`}
              aria-label={`Card ${i + 1}: ${faceUp ? s.name : "face down"}${matched.has(i) ? ", matched" : ""}`}
              disabled={matched.has(i)}
              onClick={() => flip(i)}
            >
              {faceUp && (
                <svg viewBox="0 0 32 32" width="60%" height="60%" aria-hidden="true" style={{ color: s.color }} fill="currentColor">
                  {s.draw}
                </svg>
              )}
            </button>
          );
        })}
      </div>
      <div className="game-controls">
        <button type="button" className={done ? "btn btn-primary" : "chip"} onClick={() => restart()}>
          {done ? "Play again" : "Shuffle and start again"}
        </button>
        <div role="group" aria-label="Number of cards" className="opts">
          {SIZES.map((n) => (
            <button key={n} type="button" className="chip" aria-pressed={size === n} onClick={() => restart(n)}>
              {n} cards
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
