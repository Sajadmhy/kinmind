"use client";

import { useSavedState } from "./useSavedState";

const ROWS = 3;
const COLS = 4;
const CELLS = ROWS * COLS;

type Stage = "look" | "plant" | "done";

function newGarden(count: number) {
  const picks = new Set<number>();
  while (picks.size < count) picks.add(Math.floor(Math.random() * CELLS));
  return [...picks];
}

export function PatternGarden() {
  const [count, setCount] = useSavedState("garden-count", 3);
  const [gardenList, setGarden] = useSavedState("garden-flowers", () => newGarden(3));
  const [plantedList, setPlanted] = useSavedState<number[]>("garden-planted", []);
  const [stage, setStage] = useSavedState<Stage>("garden-stage", "look");
  const garden = new Set(gardenList);
  const planted = new Set(plantedList);

  const restart = (n = count) => {
    setCount(n);
    setGarden(newGarden(n));
    setPlanted([]);
    setStage("look");
  };

  const tap = (i: number) => {
    if (stage !== "plant") return;
    setPlanted((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));
  };

  const found = [...planted].filter((i) => garden.has(i)).length;
  const extra = planted.size - found;

  return (
    <div className="garden-game">
      <p className="game-step" aria-live="polite">
        {stage === "look" && `Look at where the ${count} flowers are. Take as long as you like.`}
        {stage === "plant" && `Tap the soil to plant the flowers back. ${planted.size} of ${count} planted.`}
        {stage === "done" &&
          (found === count && extra === 0
            ? "Your garden is just as it was. Lovely remembering!"
            : `You remembered ${found} of ${count} flowers. The outlined spots show where the others were.`)}
      </p>
      <div className="garden-grid" style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}>
        {Array.from({ length: CELLS }, (_, i) => {
          const isFlower = garden.has(i);
          const isPlanted = planted.has(i);
          const show = stage === "look" ? isFlower : isPlanted;
          const missed = stage === "done" && isFlower && !isPlanted;
          const wrong = stage === "done" && isPlanted && !isFlower;
          const where = `Row ${Math.floor(i / COLS) + 1}, spot ${(i % COLS) + 1}`;
          const state = show ? (wrong ? "planted, no flower was here" : "flower") : missed ? "a flower was here" : "empty soil";
          return (
            <button
              key={i}
              type="button"
              className={`plot${missed ? " missed" : ""}${wrong ? " wrong" : ""}`}
              aria-label={`${where}: ${state}`}
              aria-pressed={stage === "plant" ? isPlanted : undefined}
              disabled={stage !== "plant"}
              onClick={() => tap(i)}
            >
              {show && <FlowerMark muted={wrong} />}
              {missed && <FlowerMark ghost />}
            </button>
          );
        })}
      </div>
      <div className="game-controls">
        {stage === "look" && (
          <button type="button" className="btn btn-primary" onClick={() => setStage("plant")}>
            I’m ready — hide the flowers
          </button>
        )}
        {stage === "plant" && (
          <>
            <button type="button" className="btn btn-primary" onClick={() => setStage("done")}>
              Check my garden
            </button>
            <button type="button" className="chip" onClick={() => setStage("look")}>
              Peek again
            </button>
          </>
        )}
        {stage === "done" && (
          <button type="button" className="btn btn-primary" onClick={() => restart()}>
            Grow a new garden
          </button>
        )}
        <div role="group" aria-label="Number of flowers" className="opts">
          {[2, 3, 4, 5, 6].map((n) => (
            <button key={n} type="button" className="chip sq" aria-pressed={count === n} aria-label={`${n} flowers`} onClick={() => restart(n)}>
              {n}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function FlowerMark({ ghost = false, muted = false }: { ghost?: boolean; muted?: boolean }) {
  const petal = ghost ? "none" : muted ? "var(--muted)" : "#F26B2D";
  return (
    <svg viewBox="0 0 24 24" width="60%" height="60%" aria-hidden="true">
      <g fill={petal} stroke={ghost ? "var(--primary)" : "none"} strokeWidth="1.2" strokeDasharray={ghost ? "2 2" : undefined}>
        {[0, 60, 120, 180, 240, 300].map((r) => (
          <ellipse key={r} cx="12" cy="6" rx="3" ry="5" transform={`rotate(${r} 12 12)`} />
        ))}
      </g>
      {!ghost && <circle cx="12" cy="12" r="3" fill={muted ? "var(--surface)" : "#F7B733"} />}
    </svg>
  );
}
