"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Check, Speaker } from "@/components/icons";
import type { Guide } from "@/lib/guides";

type View = "full" | "easy";

const SECTIONS = [
  { id: "what", label: "What it is" },
  { id: "feels", label: "What it can feel like" },
  { id: "strengths", label: "Strengths" },
  { id: "helps", label: "Things that can help" },
  { id: "others", label: "For family, school and work" },
  { id: "support", label: "Getting support" },
];

export function GuideBody({ guide }: { guide: Omit<Guide, "icon"> }) {
  const [view, setView] = useState<View>("full");
  const [speaking, setSpeaking] = useState(false);

  // Stop reading aloud when leaving the page or switching view.
  useEffect(() => () => window.speechSynthesis?.cancel(), []);
  useEffect(() => {
    window.speechSynthesis?.cancel();
    setSpeaking(false);
  }, [view]);

  const listen = () => {
    if (!("speechSynthesis" in window)) return;
    const synth = window.speechSynthesis;
    if (speaking) {
      synth.cancel();
      setSpeaking(false);
      return;
    }
    const text = view === "easy" ? guide.easyRead.join(" ") : [guide.lead, ...guide.inShort].join(" ");
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.9;
    u.onend = () => setSpeaking(false);
    synth.cancel();
    synth.speak(u);
    setSpeaking(true);
  };

  return (
    <div className="container guide-layout">
      <article className="guide-article">
        <div className="guide-tools">
          <div role="group" aria-label="Choose how to read this guide" className="opts">
            <button type="button" className="chip" aria-pressed={view === "full"} onClick={() => setView("full")}>
              Full guide
            </button>
            <button type="button" className="chip" aria-pressed={view === "easy"} onClick={() => setView("easy")}>
              Easy Read
            </button>
          </div>
          <button type="button" className="tool-btn" aria-pressed={speaking} onClick={listen}>
            <Speaker size={20} />
            {speaking ? "Stop listening" : view === "easy" ? "Listen to Easy Read" : "Listen to the summary"}
          </button>
        </div>

        {view === "easy" ? (
          <section aria-labelledby="easy-title" className="box guide-card">
            <h2 id="easy-title" className="display">
              {guide.title} in Easy Read
            </h2>
            <p className="muted" style={{ margin: 0, fontSize: "0.9em" }}>
              Short sentences. One idea at a time.
            </p>
            <ol className="easy-read">
              {guide.easyRead.map((text, i) => (
                <li key={text}>
                  <span aria-hidden="true" className="n display">
                    {i + 1}
                  </span>
                  <span className="t">{text}</span>
                </li>
              ))}
            </ol>
            <button type="button" className="chip" style={{ alignSelf: "flex-start" }} onClick={() => setView("full")}>
              Read the full guide
            </button>
          </section>
        ) : (
          <>
            <section aria-labelledby="inshort" className="box guide-card">
              <h2 id="inshort" className="display">
                In short
              </h2>
              <ul className="tick-list">
                {guide.inShort.map((t) => (
                  <li key={t}>
                    <Check />
                    {t}
                  </li>
                ))}
              </ul>
            </section>

            <section id="what" aria-labelledby="what-title" className="guide-section">
              <h2 id="what-title" className="display">
                What it is
              </h2>
              {guide.whatItIs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </section>

            <section id="feels" aria-labelledby="feels-title" className="guide-section">
              <h2 id="feels-title" className="display">
                What it can feel like
              </h2>
              <p className="muted">Everyone is different. You might recognise some of these, or none.</p>
              <ul className="feel-list">
                {guide.feelsLike.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>

            <section id="strengths" aria-labelledby="strengths-title" className="guide-section">
              <h2 id="strengths-title" className="display">
                Strengths
              </h2>
              <p className="muted">Many people say their way of thinking also brings things like:</p>
              <ul className="strength-list">
                {guide.strengths.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>

            <section id="helps" aria-labelledby="helps-title" className="guide-section">
              <h2 id="helps-title" className="display">
                Things that can help
              </h2>
              <ol className="help-list">
                {guide.helps.map((h, i) => (
                  <li key={h.title} className="box">
                    <span aria-hidden="true" className="n display">
                      {i + 1}
                    </span>
                    <div>
                      <h3>{h.title}</h3>
                      <p>{h.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section id="others" aria-labelledby="others-title" className="guide-section">
              <h2 id="others-title" className="display">
                For family, school and work
              </h2>
              <div className="others-grid">
                <div className="box">
                  <h3>Family &amp; friends</h3>
                  <p>{guide.others.family}</p>
                </div>
                <div className="box">
                  <h3>Teachers</h3>
                  <p>{guide.others.school}</p>
                </div>
                <div className="box">
                  <h3>Workplaces</h3>
                  <p>{guide.others.work}</p>
                </div>
              </div>
            </section>
          </>
        )}

        <section id="support" aria-labelledby="support-title" className="guide-support">
          <h2 id="support-title" className="display">
            Getting support
          </h2>
          <p>
            This guide is general information, not a diagnosis. If you think this sounds like you or someone you care about, a doctor or psychologist can help you
            understand more.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <Link href="/#psychology" className="btn btn-inverse">
              Talk to a psychologist
            </Link>
            <Link href="/#checkin" className="btn btn-inverse-outline">
              Do a 1-minute check-in
            </Link>
          </div>
          <p className="small">
            Kinmind is not an emergency service. If you are in crisis, call <strong>[LOCAL CRISIS LINE]</strong> or your local emergency number.
          </p>
        </section>
      </article>

      <aside className="guide-aside" aria-label="About this guide">
        {view === "full" && (
          <nav aria-labelledby="toc-title" className="box guide-card">
            <h2 id="toc-title" className="display">
              On this page
            </h2>
            <ul className="toc">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <section aria-labelledby="related-title" className="box guide-card">
          <h2 id="related-title" className="display">
            Try on Kinmind
          </h2>
          <ul className="related">
            {guide.related.map((r) => (
              <li key={r.label}>
                {/* Plain links so /#play-… opens the game on the home page. */}
                <a href={r.href}>
                  <span className={`badge${r.kind === "Game" ? " accent" : ""}`}>{r.kind}</span>
                  <span className="label">{r.label}</span>
                  <ArrowRight size={16} />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </aside>
    </div>
  );
}
