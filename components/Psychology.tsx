import type { ReactNode } from "react";
import { Flower, Stroke } from "./icons";

const TOOLS: { title: string; body: string; meta: string; icon: ReactNode }[] = [
  {
    title: "Thought Reframe",
    body: "Notice a sticky thought, name it, and find a kinder, truer way to see it.",
    meta: "CBT · 5 min · Guided",
    icon: (
      <>
        <path d="M7 16a5 5 0 1 1 2-9.6A5 5 0 0 1 19 8.5a4 4 0 0 1-1 7.5H7z" />
        <circle cx="6" cy="20" r="1.2" />
      </>
    ),
  },
  {
    title: "Brave Steps Ladder",
    body: "Build small steps against compulsions at a pace you choose. Best used with a therapist.",
    meta: "ERP for OCD · Self-paced",
    icon: <path d="M7 3v18M17 3v18M7 7h10M7 12h10M7 17h10" />,
  },
  {
    title: "Tiny-Steps Planner",
    body: "Turn one big task into tiny steps, with visual timers you control — never ones that rush you.",
    meta: "For ADHD · 3 min",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </>
    ),
  },
  {
    title: "My Sensory Profile",
    body: "Map what calms you and what overwhelms you, then share it with family, school or work.",
    meta: "For autism & ADHD · 10 min",
    icon: (
      <>
        <circle cx="12" cy="12" r="2" />
        <path d="M8 8a5.5 5.5 0 0 0 0 8M16 8a5.5 5.5 0 0 1 0 8M5 5a10 10 0 0 0 0 14M19 5a10 10 0 0 1 0 14" />
      </>
    ),
  },
];

export function Psychology() {
  return (
    <>
      <Wave d="M0 64 L0 34 C 240 -6 480 4 720 30 S 1200 70 1440 18 L1440 64 Z" fill="var(--surface)" />
      <section id="psychology" aria-labelledby="psych-title" className="band">
        <div className="container inner">
          <div className="section-head">
            <p className="eyebrow">
              <Flower />
              Psychology
            </p>
            <h2 id="psych-title" className="display">
              Tools grounded in psychology
            </h2>
            <p className="muted">
              Short, step-by-step exercises based on approaches therapists use, like CBT, ERP and mindfulness. Use them on your own or alongside your therapist.
            </p>
          </div>
          <div className="grid tools">
            {TOOLS.map((t) => (
              <article key={t.title} className="k-card tool-card">
                <span aria-hidden="true" className="icon-tile">
                  <Stroke size={26}>{t.icon}</Stroke>
                </span>
                <h3 className="display card-title">{t.title}</h3>
                <p>{t.body}</p>
                <p className="meta">{t.meta}</p>
              </article>
            ))}
          </div>
          <div className="cta-band">
            <div aria-hidden="true" style={{ position: "absolute", right: -90, bottom: -150, width: 340, height: 340, borderRadius: "50%", border: "44px solid var(--on-primary)", opacity: 0.08 }} />
            <div aria-hidden="true" style={{ position: "absolute", right: 230, top: -60, width: 120, height: 120, borderRadius: "50%", background: "var(--on-primary)", opacity: 0.07 }} />
            <div className="copy">
              <div aria-hidden="true" className="avatars">
                <span style={{ background: "var(--tint2)" }} />
                <span style={{ background: "var(--tint3)" }} />
                <span style={{ background: "var(--tint5)" }} />
                <span className="more">+</span>
              </div>
              <h3 className="display">Talk to a licensed psychologist</h3>
              <p>Video, voice or text-only sessions with professionals who understand neurodivergence. Choose text-only if talking feels hard today.</p>
            </div>
            <div className="actions">
              <a href="#find" className="btn btn-inverse k-btn">
                Find a psychologist
              </a>
              <a href="#how" className="btn btn-inverse-outline">
                How it works
              </a>
            </div>
          </div>
          <p className="crisis">
            Kinmind is not an emergency service. If you are in crisis, call <strong>[LOCAL CRISIS LINE]</strong> or your local emergency number.
          </p>
        </div>
      </section>
      <Wave d="M0 0 L1440 0 L1440 30 C 1200 70 960 60 720 34 S 240 -4 0 40 Z" fill="var(--surface)" />
    </>
  );
}

export function Wave({ d, fill }: { d: string; fill: string }) {
  return (
    <div aria-hidden="true" className="wave">
      <svg viewBox="0 0 1440 64" preserveAspectRatio="none">
        <path d={d} style={{ fill }} />
      </svg>
    </div>
  );
}
