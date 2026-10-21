import type { ReactNode } from "react";
import { ArrowRight, Flower } from "./icons";

const ITEMS: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: "Readable contrast",
    body: "Text meets 4.5:1 contrast in every theme, including dark and high-contrast.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 4a8 8 0 0 1 0 16z" style={{ fill: "var(--primary)" }} />
      </>
    ),
  },
  {
    title: "Keyboard first",
    body: "Every action works with Tab, Enter and Space, with a clear focus ring you can always see.",
    icon: (
      <>
        <rect x="3" y="7" width="18" height="11" rx="2" />
        <path d="M7 11h1M11 11h1M15 11h1M8 14.5h8" />
      </>
    ),
  },
  {
    title: "Screen-reader ready",
    body: "Real headings, labels and landmarks, built for VoiceOver, NVDA and TalkBack.",
    icon: (
      <>
        <path d="M4 10v4h4l5 4V6L8 10z" />
        <path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11" />
      </>
    ),
  },
  {
    title: "No flashing, no autoplay",
    body: "Nothing moves or plays unless you start it. Reduce motion stops every animation.",
    icon: <path d="M3 3l18 18M10.6 6.1A9 9 0 0 1 21 12a13 13 0 0 1-2.4 3.2M6.6 6.6A13 13 0 0 0 3 12s3.5 6 9 6a8.7 8.7 0 0 0 4.4-1.2" />,
  },
  {
    title: "No time limits",
    body: "Forms save as you go. Games and exercises never rush you or count down.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2M3 3l18 18" />
      </>
    ),
  },
  {
    title: "Plain language",
    body: "Short sentences, Easy Read versions and a tap-to-explain glossary for hard words.",
    icon: (
      <>
        <path d="M4 18l4-12 4 12M5.5 14h5" />
        <circle cx="16.5" cy="15" r="2.5" />
        <path d="M19 12v6" />
      </>
    ),
  },
];

export function AccessibilitySection() {
  return (
    <section id="accessibility" aria-labelledby="wcag-title" className="container wcag">
      <div className="section-head">
        <p className="eyebrow">
          <Flower />
          Accessibility
        </p>
        <h2 id="wcag-title" className="display">
          Built to WCAG 2.2 AA — and beyond
        </h2>
        <p className="muted">Accessibility isn’t a feature we added at the end. It’s how every page is designed, written and built.</p>
      </div>
      <div className="wcag-grid">
        {ITEMS.map((it) => (
          <div key={it.title} className="wcag-item">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {it.icon}
            </svg>
            <div>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
            </div>
          </div>
        ))}
      </div>
      <a href="#statement" className="text-link" style={{ alignSelf: "flex-start" }}>
        Read our full accessibility statement
        <ArrowRight size={16} />
      </a>
    </section>
  );
}
