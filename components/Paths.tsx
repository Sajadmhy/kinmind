"use client";

import type { ReactNode } from "react";
import { ArrowRight, Stroke } from "./icons";
import { useSettings } from "./SettingsProvider";

const PATHS: { id: string; title: string; body: string; link: string; icon: ReactNode }[] = [
  {
    id: "adhd",
    title: "ADHD",
    body: "Focus, time, energy and the bright side of a busy brain.",
    link: "Explore ADHD",
    icon: <path d="M13 3L5 13h6l-1 8 8-10h-6z" />,
  },
  {
    id: "ocd",
    title: "OCD",
    body: "Understand thought loops and the urge to check, and how to loosen them.",
    link: "Explore OCD",
    icon: (
      <>
        <path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3" />
        <path d="M18 3v4h-4M6 21v-4h4" />
      </>
    ),
  },
  {
    id: "autism",
    title: "Autism",
    body: "Sensory needs, communication styles, routines and recharging.",
    link: "Explore autism",
    icon: <path d="M6.5 9a3 3 0 1 0 0 6c2.5 0 3.5-2 5.5-3s3-3 5.5-3a3 3 0 1 1 0 6c-2.5 0-3.5-2-5.5-3S9 9 6.5 9z" />,
  },
  {
    id: "dyslexia",
    title: "Dyslexia",
    body: "Reading and spelling tools, and ways to show what you really know.",
    link: "Explore dyslexia",
    icon: <path d="M4 5h6a2 2 0 0 1 2 2v12a2 2 0 0 0-2-2H4zM20 5h-6a2 2 0 0 0-2 2v12a2 2 0 0 1 2-2h6z" />,
  },
  {
    id: "dyspraxia",
    title: "Dyspraxia",
    body: "Movement, coordination and planning — with practical everyday tips.",
    link: "Explore dyspraxia",
    icon: <path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3" />,
  },
  {
    id: "tourettes",
    title: "Tourette’s & tics",
    body: "What tics are, how stress affects them, and how others can help.",
    link: "Explore Tourette’s",
    icon: <path d="M3 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0" />,
  },
];

export function Paths() {
  const { settings } = useSettings();
  if (settings.focus) return null;

  return (
    <section id="paths" aria-labelledby="paths-title" className="container paths">
      <div className="section-head">
        <h2 id="paths-title" className="display">
          Find your path
        </h2>
        <p className="muted">Plain-language guides for you, your family, your teachers and your workplace. Read, listen or watch — whichever is easiest.</p>
      </div>
      <div className="grid">
        {PATHS.map((p) => (
          <article key={p.id} className="k-card path-card">
            <span aria-hidden="true" className="icon-tile">
              <Stroke size={26}>{p.icon}</Stroke>
            </span>
            <h3 className="display">{p.title}</h3>
            <p>{p.body}</p>
            <a href={`#${p.id}`} className="text-link">
              {p.link}
              <ArrowRight size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
