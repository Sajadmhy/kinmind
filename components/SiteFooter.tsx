"use client";

import Link from "next/link";
import { useState } from "react";
import { LogoMark } from "./icons";

const RATINGS = [
  { label: "Easy", tint: "var(--tint1)" },
  { label: "Okay", tint: "var(--tint5)" },
  { label: "Hard", tint: "var(--tint2)" },
];

const COLUMNS = [
  {
    title: "Learn",
    links: [
      { href: "/#paths", label: "Guides" },
      { href: "/#videos", label: "Videos" },
      { href: "/#games", label: "Games" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/#psychology", label: "Find a psychologist" },
      { href: "#families", label: "For families" },
      { href: "#schools", label: "For schools & employers" },
    ],
  },
  {
    title: "About",
    links: [
      { href: "#statement", label: "Accessibility statement" },
      { href: "#privacy", label: "Privacy" },
      { href: "#contact", label: "Contact us" },
    ],
  },
];

export function SiteFooter() {
  const [feedback, setFeedback] = useState<string | null>(null);

  return (
    <footer className="site-footer">
      <div className="container inner">
        <div id="feedback" className="feedback">
          {feedback ? (
            <>
              <p role="status" style={{ fontWeight: 700 }}>
                Thank you. Your answer helps us make Kinmind easier for every mind.
              </p>
              <a href="#contact" className="text-link" style={{ textDecorationThickness: 1, textUnderlineOffset: 4 }}>
                Tell us more (optional)
              </a>
            </>
          ) : (
            <>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <h2 className="display">Was this page easy to use?</h2>
                <p className="muted" style={{ fontSize: "0.92em" }}>
                  We test Kinmind with neurodivergent people and change it based on what you tell us.
                </p>
              </div>
              <div role="group" aria-label="Rate this page" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {RATINGS.map((r) => (
                  <button key={r.label} type="button" onClick={() => setFeedback(r.label)} style={{ background: r.tint }}>
                    {r.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="footer-cols">
          <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: "22em" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--primary)" }}>
              <LogoMark size={30} />
              <span className="display" style={{ fontSize: "1.2em", color: "var(--ink)" }}>
                Kinmind
              </span>
            </div>
            <p className="muted" style={{ margin: 0, fontSize: "0.93em" }}>
              A calm place for minds that work differently.
            </p>
          </div>
          <nav aria-label="Footer" className="footer-nav">
            {COLUMNS.map((c) => (
              <div key={c.title}>
                <h2>{c.title}</h2>
                {c.links.map((l) => (
                  <Link key={l.label} href={l.href}>
                    {l.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>
        <div className="footer-base">
          <p>
            In crisis? Call <strong>[LOCAL CRISIS LINE]</strong> or your local emergency number.
          </p>
          <p>© {new Date().getFullYear()} Kinmind</p>
        </div>
      </div>
    </footer>
  );
}
