"use client";

import Link from "next/link";
import { GUIDES, guideHref } from "@/lib/guides";
import { ArrowRight, Stroke } from "./icons";
import { useSettings } from "./SettingsProvider";

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
        {GUIDES.map((g) => (
          <article key={g.slug} className="k-card path-card">
            <span aria-hidden="true" className="icon-tile">
              <Stroke size={26}>{g.icon}</Stroke>
            </span>
            <h3 className="display">{g.title}</h3>
            <p>{g.card}</p>
            <Link href={guideHref(g.slug)} className="text-link">
              {g.linkLabel}
              <ArrowRight size={16} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
