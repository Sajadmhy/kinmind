"use client";

import { useEffect, useRef, useState } from "react";
import { SIGN_LANGUAGES, TEXT_SIZES, THEME_OPTIONS } from "@/lib/themes";
import { Sliders, Speaker } from "./icons";
import { useSettings, type ToggleKey } from "./SettingsProvider";

const TOGGLES: { id: ToggleKey; label: string }[] = [
  { id: "dys", label: "Dyslexia-friendly text" },
  { id: "focus", label: "Focus mode" },
  { id: "motion", label: "Reduce motion" },
  { id: "sign", label: "Sign language" },
  { id: "read", label: "Read aloud" },
];

const READ_TEXT = "A calm place for minds that work differently.";

export function AccessibilityBar() {
  const { settings, update, toggle } = useSettings();

  return (
    <>
      <section aria-labelledby="a11y-title" className="a11y-bar">
        <div className="container inner">
          <h2 id="a11y-title" className="display">
            <Sliders />
            Make this page work for you
            <small>Your choices are saved on this device.</small>
          </h2>
          <div className="a11y-row">
            <div role="group" aria-label="Text size" className="a11y-group">
              <span aria-hidden="true" className="label">
                Text size
              </span>
              {TEXT_SIZES.map((s, i) => (
                <button
                  key={s.aria}
                  type="button"
                  className="chip size-btn"
                  aria-pressed={settings.size === i}
                  aria-label={s.aria}
                  onClick={() => update({ size: i })}
                  style={{ fontSize: s.glyph }}
                >
                  A
                </button>
              ))}
            </div>
            <div role="group" aria-label="Colour theme" className="a11y-group">
              <span aria-hidden="true" className="label">
                Theme
              </span>
              {THEME_OPTIONS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className="chip theme-btn"
                  aria-pressed={settings.theme === t.id}
                  onClick={() => update({ theme: t.id })}
                >
                  <span aria-hidden="true" className="swatch">
                    <span style={{ background: t.sw1 }} />
                    <span style={{ background: t.sw2 }} />
                  </span>
                  {t.label}
                </button>
              ))}
            </div>
            <div role="group" aria-label="Reading and viewing options" className="a11y-group">
              {TOGGLES.map((t) => (
                <button key={t.id} type="button" className="toggle" aria-pressed={settings[t.id]} onClick={() => toggle(t.id)}>
                  <span aria-hidden="true" className="track">
                    <span className="knob" />
                  </span>
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          {settings.sign && (
            <div role="group" aria-label="Sign language" className="a11y-group">
              <span className="label">Interpreter on every video:</span>
              {SIGN_LANGUAGES.map((l) => (
                <button key={l} type="button" className="chip" aria-pressed={settings.lang === l} onClick={() => update({ lang: l })}>
                  {l}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {settings.read && <ReadAloudBar onStop={() => update({ read: false })} />}

      {settings.focus && (
        <div role="status" className="focus-bar">
          <div className="container inner">
            <p>
              <strong>Focus mode is on.</strong> We’ve hidden the extras so you can do one thing at a time.
            </p>
            <button type="button" onClick={() => update({ focus: false })}>
              Show everything
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function ReadAloudBar({ onStop }: { onStop: () => void }) {
  const [paused, setPaused] = useState(false);
  const [rate, setRate] = useState(1);
  const supported = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    supported.current = true;
    const synth = window.speechSynthesis;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(READ_TEXT);
    u.rate = rate;
    synth.speak(u);
    setPaused(false);
    return () => synth.cancel();
  }, [rate]);

  const togglePause = () => {
    if (!supported.current) return;
    const synth = window.speechSynthesis;
    if (paused) synth.resume();
    else synth.pause();
    setPaused(!paused);
  };

  return (
    <div role="status" className="status-bar">
      <div className="container inner">
        <Speaker />
        <p>
          <strong>Reading aloud:</strong> “{READ_TEXT}”
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button type="button" onClick={togglePause}>
            {paused ? "Resume" : "Pause"}
          </button>
          <button type="button" onClick={() => setRate((r) => Math.max(0.5, +(r - 0.2).toFixed(1)))}>
            Slower
          </button>
          <button type="button" className="solid" onClick={onStop}>
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}
