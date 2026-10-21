"use client";

import Link from "next/link";
import { LESSON_HREF, UP_NEXT } from "@/lib/content";
import { Wave } from "./Psychology";
import { ArrowRight, CaptionsIcon, DocIcon, Flower, HandIcon, InterpreterFigure, Play, Speaker, SpeedIcon } from "./icons";
import { useSettings } from "./SettingsProvider";

export function Videos() {
  const { settings, toggle } = useSettings();
  const { sign, lang, focus } = settings;

  return (
    <>
      <Wave d="M0 64 L0 20 C 300 60 600 60 900 28 S 1260 0 1440 30 L1440 64 Z" fill="var(--surface2)" />
      <section id="videos" aria-labelledby="videos-title" className="band alt">
        <div className="container inner" style={{ gap: 28 }}>
          <div className="section-head">
            <p className="eyebrow">
              <Flower />
              Videos
            </p>
            <h2 id="videos-title" className="display">
              Watch, listen or read — your choice
            </h2>
            <p className="muted">
              Every video has captions, a sign language interpreter, a full transcript and an Easy Read summary. Nothing plays until you press play.
            </p>
          </div>
          <div className="video-layout">
            <div className="video-main">
              <div className="player">
                <div aria-hidden="true" className="speaker">
                  <div style={{ marginLeft: "-22%" }}>
                    <div style={{ width: 96, height: 96, borderRadius: "50%", background: "#3C6E68" }} />
                    <div style={{ width: 220, height: 150, borderRadius: "110px 110px 0 0", background: "#2E5752", marginTop: 12 }} />
                  </div>
                </div>
                <button type="button" aria-label="Play video: OCD, why the brain asks twice" className="play-btn">
                  <Play size={30} />
                </button>
                {sign && (
                  <div className="interpreter" style={{ right: 16, width: "26%", background: "#1F4B47" }}>
                    <InterpreterFigure />
                    <span>{lang} interpreter</span>
                  </div>
                )}
                <p className="caption" style={{ fontSize: "1.02em" }}>
                  When your brain asks you to check the door again — that’s the OCD loop talking, not you.
                </p>
              </div>
              <div role="toolbar" aria-label="Video options" className="toolbar">
                <button type="button" className="tool-btn" aria-pressed="true">
                  <CaptionsIcon />
                  Captions
                </button>
                <button type="button" className="tool-btn" aria-pressed={sign} onClick={() => toggle("sign")}>
                  <HandIcon />
                  Sign language
                </button>
                <button type="button" className="tool-btn">
                  <Speaker size={20} waves={1} />
                  Audio description
                </button>
                <button type="button" className="tool-btn">
                  <SpeedIcon />
                  Speed 0.75×
                </button>
                <button type="button" className="tool-btn">
                  <DocIcon />
                  Transcript
                </button>
              </div>
              <div className="video-meta">
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <h3 className="display">OCD: why the brain asks twice</h3>
                  <p>[LENGTH] · Captions · {lang} · Transcript · Easy Read</p>
                </div>
                <Link href={LESSON_HREF} className="btn btn-primary">
                  Open the full lesson
                  <ArrowRight />
                </Link>
              </div>
            </div>
            {!focus && (
              <div className="up-next">
                <h3 className="display">Up next</h3>
                <ul>
                  {UP_NEXT.map((title) => (
                    <li key={title}>
                      <Link href={LESSON_HREF}>
                        <span aria-hidden="true" className="thumb">
                          <Play />
                        </span>
                        <span style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 0 }}>
                          <span style={{ fontWeight: 700, fontSize: "0.95em", lineHeight: 1.3 }}>{title}</span>
                          <span className="badges">
                            <span className="badge">CC</span>
                            <span className="badge">{lang}</span>
                            <span className="badge accent">Easy Read</span>
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
      <Wave d="M0 0 L1440 0 L1440 36 C 1140 4 840 4 600 30 S 200 64 0 26 Z" fill="var(--surface2)" />
    </>
  );
}
