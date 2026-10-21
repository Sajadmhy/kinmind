"use client";

import Link from "next/link";
import { useState } from "react";
import { LESSON_HREF } from "@/lib/content";
import { ArrowRight, Flower } from "./icons";

type MoodId = "over" | "restless" | "loop" | "stuck" | "ok";

const MOODS: { id: MoodId; label: string; tint: string }[] = [
  { id: "over", label: "Overwhelmed", tint: "var(--tint4)" },
  { id: "restless", label: "Restless", tint: "var(--tint2)" },
  { id: "loop", label: "Stuck in a thought loop", tint: "var(--tint3)" },
  { id: "stuck", label: "Can’t get started", tint: "var(--tint5)" },
  { id: "ok", label: "Okay and curious", tint: "var(--tint1)" },
];

const SUGGESTIONS: Record<MoodId, { tag: string; title: string; body: string; cta: string; href: string }> = {
  over: { tag: "Calm · 2 min", title: "Bubble Breath", body: "Slow your breathing with a soft, silent bubble. No score and no timer.", cta: "Start breathing", href: "/#play-bubble" },
  restless: { tag: "Focus · 5 min", title: "Pattern Garden", body: "Give your busy brain one gentle thing to follow. Stop whenever you like.", cta: "Play Pattern Garden", href: "/#play-garden" },
  loop: { tag: "Psychology · 5 min", title: "Thought Reframe", body: "Notice the thought, name it, and let it loosen a little. Based on CBT.", cta: "Try Thought Reframe", href: "/#psychology" },
  stuck: { tag: "Planning · 3 min", title: "Tiny-Steps Planner", body: "Turn one task into three tiny steps. The first one takes under two minutes.", cta: "Break it down", href: "/#psychology" },
  ok: { tag: "Video lesson", title: "OCD: why the brain asks twice", body: "A short lesson with captions, sign language and an Easy Read summary.", cta: "Watch the lesson", href: LESSON_HREF },
};

export function CheckIn() {
  const [mood, setMood] = useState<MoodId | null>(null);
  const s = mood ? SUGGESTIONS[mood] : null;

  return (
    <section id="checkin" aria-labelledby="checkin-title" className="container checkin">
      <div className="panel">
        <div className="section-head">
          <p className="eyebrow">
            <Flower />
            Check-in
          </p>
          <h2 id="checkin-title" className="display">
            How are you arriving today?
          </h2>
          <p className="muted" style={{ maxWidth: "40em" }}>
            Pick the words that fit best. There’s no wrong answer — we’ll suggest one small next step.
          </p>
        </div>
        <div role="group" aria-label="How you feel" className="mood-row">
          {MOODS.map((m) => (
            <button
              key={m.id}
              type="button"
              className="mood"
              aria-pressed={mood === m.id}
              onClick={() => setMood(mood === m.id ? null : m.id)}
              style={{ background: m.tint }}
            >
              {m.label}
            </button>
          ))}
        </div>
        <div aria-live="polite">
          {s ? (
            <div className="suggestion">
              <div className="body">
                <p className="tag">A gentle next step · {s.tag}</p>
                <h3 className="display">{s.title}</h3>
                <p className="muted">{s.body}</p>
              </div>
              {/* A plain link for same-page game links, so the hash change opens the game. */}
              {s.href.startsWith("/#") ? (
                <a href={s.href} className="btn btn-primary">
                  {s.cta}
                  <ArrowRight />
                </a>
              ) : (
                <Link href={s.href} className="btn btn-primary">
                  {s.cta}
                  <ArrowRight />
                </Link>
              )}
            </div>
          ) : (
            <p className="muted" style={{ margin: 0, fontSize: "0.92em" }}>
              Nothing is saved or shared. You can skip this any time.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
