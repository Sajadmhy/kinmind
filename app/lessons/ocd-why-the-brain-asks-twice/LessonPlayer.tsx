"use client";

import { useState } from "react";
import { useSettings } from "@/components/SettingsProvider";
import { CaptionsIcon, HandIcon, InterpreterFigure, Play, Rewind, Speaker } from "@/components/icons";
import { SIGN_LANGUAGES } from "@/lib/themes";

const SIGN_WIDTHS = ["20%", "27%", "34%"];
const CAPTION_SIZES = ["15px", "18px", "22px"];
const SPEEDS = ["0.5×", "0.75×", "1×", "1.25×"];

const CHAPTERS = [
  { meta: "1 · 0:00", title: "What OCD really is" },
  { meta: "2 · 1:40 · Now playing", title: "The check loop", now: true },
  { meta: "3 · 3:30", title: "Why checking keeps it going" },
  { meta: "4 · 5:10", title: "Pause & breathe" },
  { meta: "5 · 6:00", title: "What helps: small brave steps" },
];

export function LessonPlayer() {
  const { settings, update, toggle } = useSettings();
  const { sign, lang } = settings;
  const [side, setSide] = useState<"left" | "right">("right");
  const [signSize, setSignSize] = useState(1);
  const [cap, setCap] = useState(1);
  const [speed, setSpeed] = useState(1);

  return (
    <div className="lesson-main">
      <div className="player" style={{ background: "#2A1C2E" }}>
        <div aria-hidden="true" className="speaker">
          <div style={{ marginLeft: side === "right" ? "-22%" : "22%" }}>
            <div style={{ width: 104, height: 104, borderRadius: "50%", background: "#C65A3A" }} />
            <div style={{ width: 240, height: 160, borderRadius: "120px 120px 0 0", background: "#A63D1F", marginTop: 12 }} />
          </div>
        </div>
        <p aria-hidden="true" className="chapter-label">
          Chapter 2 · The check loop
        </p>
        {sign && (
          <div className="interpreter" style={{ [side]: 16, width: SIGN_WIDTHS[signSize], background: "#8A2D63", display: "block" }}>
            <InterpreterFigure tall />
            <span style={{ color: "#2A1C2E" }}>{lang}</span>
          </div>
        )}
        <p className="caption" style={{ bottom: 20, width: "70%", fontSize: CAPTION_SIZES[cap] }}>
          Checking brings a moment of relief — so the brain learns to ask for it again.
        </p>
      </div>

      <div className="progress">
        <label htmlFor="progress" className="sr-only">
          Video progress
        </label>
        <input id="progress" type="range" min={0} max={100} defaultValue={34} aria-valuetext="Chapter 2 of 5" />
        <div>
          <span>Chapter 2 of 5</span>
          <span>Pause &amp; breathe break ahead</span>
        </div>
      </div>

      <div className="controls">
        <button type="button" aria-label="Play" className="round-btn big">
          <Play />
        </button>
        <button type="button" aria-label="Back 10 seconds" className="round-btn">
          <Rewind />
        </button>
        <span className="spacer" />
        <button type="button" className="tool-btn" aria-pressed={sign} onClick={() => toggle("sign")}>
          <HandIcon />
          Sign language
        </button>
        <button type="button" className="tool-btn" aria-pressed="true">
          <CaptionsIcon />
          Captions
        </button>
        <button type="button" className="tool-btn">
          <Speaker size={20} waves={1} />
          Audio description
        </button>
      </div>

      <section aria-labelledby="settings-title" className="box watch">
        <h2 id="settings-title" className="display">
          Watch your way
        </h2>
        <div className="watch-grid">
          <div role="group" aria-labelledby="g-lang">
            <span id="g-lang" className="label">
              Sign language
            </span>
            <div className="opts">
              {SIGN_LANGUAGES.map((l) => (
                <button key={l} type="button" className="chip" aria-pressed={lang === l} onClick={() => update({ lang: l })}>
                  {l}
                </button>
              ))}
            </div>
          </div>
          <div role="group" aria-labelledby="g-side">
            <span id="g-side" className="label">
              Interpreter position &amp; size
            </span>
            <div className="opts">
              {(["left", "right"] as const).map((v) => (
                <button key={v} type="button" className="chip" aria-pressed={side === v} onClick={() => setSide(v)}>
                  {v === "left" ? "Left" : "Right"}
                </button>
              ))}
              {["S", "M", "L"].map((label, i) => (
                <button
                  key={label}
                  type="button"
                  className="chip sq"
                  aria-pressed={signSize === i}
                  aria-label={`${["Small", "Medium", "Large"][i]} interpreter`}
                  onClick={() => setSignSize(i)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div role="group" aria-labelledby="g-cap">
            <span id="g-cap" className="label">
              Caption size
            </span>
            <div className="opts">
              {["Small", "Medium", "Large"].map((label, i) => (
                <button key={label} type="button" className="chip" aria-pressed={cap === i} onClick={() => setCap(i)}>
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div role="group" aria-labelledby="g-speed">
            <span id="g-speed" className="label">
              Speed
            </span>
            <div className="opts">
              {SPEEDS.map((label, i) => (
                <button key={label} type="button" className="chip" aria-pressed={speed === i} onClick={() => setSpeed(i)} style={{ padding: "0 12px" }}>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="chapters-title" className="chapters">
        <h2 id="chapters-title" className="display">
          Chapters
        </h2>
        <ol>
          {CHAPTERS.map((c) => (
            <li key={c.title}>
              <a href="#chapter" aria-current={c.now ? "step" : undefined}>
                <span className="meta">{c.meta}</span>
                <span className="title">{c.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
