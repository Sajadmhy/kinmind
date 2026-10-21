"use client";

import Link from "next/link";
import { useState } from "react";

type Tab = "transcript" | "easy" | "key";

const TABS: { id: Tab; label: string }[] = [
  { id: "transcript", label: "Transcript" },
  { id: "easy", label: "Easy Read" },
  { id: "key", label: "Key points" },
];

const LINES = [
  { time: "1:40", text: "Let’s look at what happens in the check loop." },
  { time: "1:52", text: "First, a worry pops up: “Did I lock the door?”" },
  { time: "2:05", text: "The worry feels urgent, so you go back and check." },
  { time: "2:14", text: "Checking brings a moment of relief — so the brain learns to ask for it again.", now: true },
  { time: "2:26", text: "Next time, the worry comes back a little louder." },
  { time: "2:38", text: "This isn’t a flaw in you. It’s a habit loop the brain has learned." },
];

const EASY = [
  "OCD can bring worries that keep coming back.",
  "The worries can make you want to check or repeat things.",
  "Checking helps for a short time only.",
  "Then the worry comes back.",
  "A therapist can help you practise small steps to feel better.",
];

export function LessonText() {
  const [tab, setTab] = useState<Tab>("transcript");

  return (
    <aside aria-label="Lesson text" className="box lesson-aside">
      <div role="tablist" aria-label="Read the lesson" className="tabs">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={tab === t.id}
            aria-controls="lesson-panel"
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" id="lesson-panel" aria-labelledby={`tab-${tab}`} className="tabpanel">
        {tab === "transcript" && (
          <>
            <div className="transcript">
              {LINES.map((l) => (
                <p key={l.time} className={l.now ? "now" : undefined}>
                  <span className="time">{l.time}</span>
                  <span>{l.text}</span>
                </p>
              ))}
            </div>
            <button type="button" className="chip" style={{ alignSelf: "flex-start" }}>
              Download transcript
            </button>
          </>
        )}

        {tab === "easy" && (
          <>
            <p className="muted" style={{ margin: 0, fontSize: "0.88em" }}>
              Short sentences. One idea at a time.
            </p>
            <ol className="easy-read">
              {EASY.map((text, i) => (
                <li key={text}>
                  <span aria-hidden="true" className="n display">
                    {i + 1}
                  </span>
                  <span className="t">{text}</span>
                </li>
              ))}
            </ol>
          </>
        )}

        {tab === "key" && (
          <ul className="key-points">
            <li>
              <strong>Obsessions</strong> are unwanted thoughts, images or urges that feel stuck.
            </li>
            <li>
              <strong>Compulsions</strong> are things done to make the worry go away, like checking or washing.
            </li>
            <li>The relief is short. Each compulsion teaches the brain to ask again.</li>
            <li>
              <strong>ERP</strong> (exposure and response prevention) helps by practising small steps of not doing the compulsion — ideally with a therapist.
            </li>
          </ul>
        )}

        <div className="calm-note">
          <p className="title">Feeling stirred up by this topic?</p>
          <p style={{ fontSize: "0.95em" }}>That’s okay. You can pause here and take a minute to breathe.</p>
          <Link href="/#play-bubble">Take a breathing break</Link>
        </div>
      </div>
    </aside>
  );
}
