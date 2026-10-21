"use client";

import { useMemo, useState } from "react";

const WORDS = [
  { word: "sun", hint: "It shines in the sky in the daytime." },
  { word: "cat", hint: "A soft pet that purrs." },
  { word: "map", hint: "It shows you where places are." },
  { word: "fish", hint: "It swims in water." },
  { word: "frog", hint: "A green animal that hops and croaks." },
  { word: "moon", hint: "It glows in the sky at night." },
  { word: "book", hint: "You read stories in it." },
];

function shuffle<T>(xs: T[]) {
  const a = xs.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function speak(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 0.8;
  window.speechSynthesis.speak(u);
}

export function WordBuilder() {
  const [index, setIndex] = useState(0);
  const [sound, setSound] = useState(false);
  const [built, setBuilt] = useState<number[]>([]);
  const [showWord, setShowWord] = useState(false);
  const { word, hint } = WORDS[index];

  // Tile order is shuffled once per word; each tile keeps its own id so
  // repeated letters (like the o's in "moon") stay distinct.
  const tiles = useMemo(() => shuffle(word.split("").map((letter, id) => ({ id, letter }))), [word]);

  const attempt = built.map((id) => tiles.find((t) => t.id === id)!.letter).join("");
  const full = built.length === word.length;
  const right = full && attempt === word;

  const add = (id: number, letter: string) => {
    if (full) return;
    setBuilt((b) => [...b, id]);
    if (sound) speak(letter);
  };

  const next = () => {
    setIndex((i) => (i + 1) % WORDS.length);
    setBuilt([]);
    setShowWord(false);
  };

  return (
    <div className="word-game">
      <p className="game-step">
        <strong>Clue:</strong> {hint}
        {showWord && (
          <>
            {" "}
            The word is <strong>{word}</strong>.
          </>
        )}
      </p>

      <div className="word-slots" aria-label={`Your word: ${attempt || "empty"}`} role="group">
        {word.split("").map((_, i) => {
          const id = built[i];
          const tile = tiles.find((t) => t.id === id);
          return tile ? (
            <button
              key={i}
              type="button"
              className={`letter-tile slot filled${right ? " right" : ""}`}
              aria-label={`Take back ${tile.letter}`}
              disabled={right}
              onClick={() => setBuilt((b) => b.filter((x) => x !== id))}
            >
              {tile.letter}
            </button>
          ) : (
            <span key={i} className="letter-tile slot" aria-hidden="true" />
          );
        })}
      </div>

      <p className="game-step" aria-live="polite">
        {right ? `You built “${word}”!` : full ? "Not quite yet — tap a letter above to take it back." : "Tap the letters below to build the word."}
      </p>

      <div className="word-tiles" role="group" aria-label="Letter tiles">
        {tiles.map((t) => {
          const used = built.includes(t.id);
          return (
            <button key={t.id} type="button" className="letter-tile" disabled={used || full} aria-label={`Letter ${t.letter}`} onClick={() => add(t.id, t.letter)}>
              {used ? "" : t.letter}
            </button>
          );
        })}
      </div>

      <div className="game-controls">
        {right ? (
          <button type="button" className="btn btn-primary" onClick={next}>
            Next word
          </button>
        ) : (
          <button type="button" className="chip" onClick={() => setShowWord(true)} disabled={showWord}>
            Show me the word
          </button>
        )}
        {right && sound && (
          <button type="button" className="chip" onClick={() => speak(word)}>
            Hear the word
          </button>
        )}
        <button type="button" className="toggle" aria-pressed={sound} onClick={() => setSound((s) => !s)}>
          <span aria-hidden="true" className="track">
            <span className="knob" />
          </span>
          Hear letters
        </button>
      </div>
    </div>
  );
}
