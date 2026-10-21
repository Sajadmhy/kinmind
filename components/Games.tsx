"use client";

import { useEffect, useState, type ComponentType } from "react";
import { BubbleBreath } from "./games/BubbleBreath";
import { CalmSort } from "./games/CalmSort";
import { GameDialog } from "./games/GameDialog";
import { MemoryMatch } from "./games/MemoryMatch";
import { PatternGarden } from "./games/PatternGarden";
import { WordBuilder } from "./games/WordBuilder";
import { Flower } from "./icons";

type Art = "bubble" | "garden" | "words" | "sort" | "match";
type Category = "Calm" | "Focus" | "Reading" | "Memory";

const GAMES: { title: string; cat: Category[]; mins: string; desc: string; art: Art; tint: string }[] = [
  { title: "Bubble Breath", cat: ["Calm"], mins: "2 min", desc: "Follow a soft bubble as it grows and shrinks. Breathe along — no sound needed.", art: "bubble", tint: "var(--tint4)" },
  { title: "Pattern Garden", cat: ["Focus", "Memory"], mins: "5 min", desc: "Remember where the flowers bloomed, then plant them back. It only gets harder if you want it to.", art: "garden", tint: "var(--tint1)" },
  { title: "Word Builder", cat: ["Reading"], mins: "5 min", desc: "Build words from big, clear letter tiles. Hear each sound as you tap it.", art: "words", tint: "var(--tint5)" },
  { title: "Calm Sort", cat: ["Calm", "Focus"], mins: "3–10 min", desc: "Sort colours into tubes at your own pace. Undo any move, as often as you like.", art: "sort", tint: "var(--tint3)" },
  { title: "Memory Match", cat: ["Memory"], mins: "4 min", desc: "Turn over cards to find the pairs. Choose 6, 12 or 20 cards.", art: "match", tint: "var(--tint6)" },
];

const FILTERS: ("All" | Category)[] = ["All", "Calm", "Focus", "Reading", "Memory"];

const PLAY: Record<Art, { intro: string; Game: ComponentType<{ active: boolean }> }> = {
  bubble: { intro: "Breathe in as the bubble grows and out as it shrinks. Pause whenever you like.", Game: BubbleBreath },
  garden: { intro: "Look at the flowers, hide them when you’re ready, then plant them back.", Game: PatternGarden },
  words: { intro: "Read the clue and build the word from the letter tiles.", Game: WordBuilder },
  sort: { intro: "Move one piece at a time until each tube holds one colour and shape.", Game: CalmSort },
  match: { intro: "Turn over two cards at a time to find the matching pairs.", Game: MemoryMatch },
};

const isArt = (v: string): v is Art => v in PLAY;

export function Games() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const games = GAMES.filter((g) => filter === "All" || g.cat.includes(filter));
  const [playing, setPlaying] = useState<Art | null>(null);
  // Games stay mounted after their first open, so closing one keeps your progress.
  const [started, setStarted] = useState<Art[]>([]);

  const play = (art: Art) => {
    setStarted((s) => (s.includes(art) ? s : [...s, art]));
    setPlaying(art);
  };

  // Links like /#play-bubble (from the check-in) open a game directly.
  useEffect(() => {
    const fromHash = () => {
      const m = window.location.hash.match(/^#play-(\w+)$/);
      if (m && isArt(m[1])) {
        play(m[1]);
        document.getElementById("games")?.scrollIntoView();
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const close = () => {
    setPlaying(null);
    if (window.location.hash.startsWith("#play-")) history.replaceState(null, "", "#games");
  };

  return (
    <section id="games" aria-labelledby="games-title" className="container games">
      <div className="games-head">
        <div className="section-head" style={{ maxWidth: "40em" }}>
          <p className="eyebrow">
            <Flower />
            Games
          </p>
          <h2 id="games-title" className="display">
            Games that grow focus and calm
          </h2>
          <p className="muted">No timers, no flashing, no loud surprises. Pause any time and pick up where you left off.</p>
        </div>
        <div role="group" aria-label="Filter games" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {FILTERS.map((f) => (
            <button key={f} type="button" className="chip round" aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className="grid" aria-live="polite">
        {games.map((g) => (
          <article key={g.title} className="k-card game-card">
            <div aria-hidden="true" className="game-art" style={{ background: g.tint }}>
              <GameArt art={g.art} />
            </div>
            <div className="game-body">
              <p className="cat">
                {g.cat.join(" · ")} · {g.mins}
              </p>
              <h3 className="display card-title">{g.title}</h3>
              <p className="desc">{g.desc}</p>
              <ul aria-label="Comfort features" className="comforts">
                <li>No timer</li>
                <li>Silent mode</li>
                <li>Pause anytime</li>
              </ul>
              <button type="button" className="play-link" aria-haspopup="dialog" onClick={() => play(g.art)}>
                Play {g.title}
              </button>
            </div>
          </article>
        ))}
      </div>
      {GAMES.filter((g) => started.includes(g.art)).map((g) => {
        const { intro, Game } = PLAY[g.art];
        return (
          <GameDialog key={g.art} id={`game-${g.art}`} title={g.title} intro={intro} open={playing === g.art} onClose={close}>
            <Game active={playing === g.art} />
          </GameDialog>
        );
      })}
    </section>
  );
}

const dot = (bg: string) => ({ width: 22, height: 22, borderRadius: "50%", background: bg });
const tile = { display: "flex", alignItems: "center", justifyContent: "center", width: 44, height: 50, borderRadius: 10, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 24 } as const;
const tube = { width: 30, height: 100, borderRadius: "0 0 15px 15px", border: "2px solid var(--primary)", borderTop: "none", display: "flex", flexDirection: "column-reverse", overflow: "hidden" } as const;
const card = { width: 36, height: 46, borderRadius: 8, background: "var(--primary)" };
const faceUp = { ...card, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--surface)" };

function GameArt({ art }: { art: Art }) {
  switch (art) {
    case "bubble":
      return (
        <div style={{ width: 112, height: 112, borderRadius: "50%", border: "2px solid var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 72, height: 72, borderRadius: "50%", background: "var(--surface)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 34, height: 34, borderRadius: "50%", background: "var(--primary)" }} />
          </div>
        </div>
      );
    case "garden": {
      const p = "var(--primary)", s = "var(--surface)", a = "var(--accent)";
      const cells = [p, s, a, s, s, p, s, p, a, s, s, s];
      return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 10 }}>
          {cells.map((c, i) => (
            <span key={i} style={dot(c)} />
          ))}
        </div>
      );
    }
    case "words":
      return (
        <div style={{ display: "flex", gap: 8 }}>
          <span style={{ ...tile, background: "var(--surface)", color: "var(--ink)" }}>s</span>
          <span style={{ ...tile, background: "var(--primary)", color: "var(--on-primary)" }}>u</span>
          <span style={{ ...tile, background: "var(--surface)", color: "var(--ink)" }}>n</span>
        </div>
      );
    case "sort":
      return (
        <div style={{ display: "flex", gap: 14, alignItems: "flex-end" }}>
          {[["--primary", "--primary", "--accent"], ["--accent", "--accent"], ["--primary"]].map((col, i) => (
            <div key={i} style={tube}>
              {col.map((c, j) => (
                <span key={j} style={{ height: 24, background: `var(${c})` }} />
              ))}
            </div>
          ))}
        </div>
      );
    case "match":
      return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 8 }}>
          {[false, true, false, false, false, true].map((up, i) =>
            up ? (
              <span key={i} style={faceUp}>
                <span style={{ width: 16, height: 16, borderRadius: "50%", background: "var(--accent)" }} />
              </span>
            ) : (
              <span key={i} style={card} />
            ),
          )}
        </div>
      );
  }
}
