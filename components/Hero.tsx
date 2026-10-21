"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowRight, Check, Pause, Play } from "./icons";
import { useSettings } from "./SettingsProvider";

const PULSES = [
  { cx: 258, cy: 242, r: 100, fill: "hg-warm", delay: 0 },
  { cx: 240, cy: 345, r: 78, fill: "hg-pink", delay: -2 },
  { cx: 336, cy: 482, r: 66, fill: "hg-warm", delay: -4 },
  { cx: 665, cy: 350, r: 60, fill: "hg-pink", delay: -1 },
  { cx: 360, cy: 165, r: 64, fill: "hg-pink", delay: -3 },
];

const NEURONS = [
  { d: "M 250 420 C 330 380 420 440 520 392 S 650 362 700 398" },
  { d: "M 290 470 C 380 438 470 492 560 452 S 660 430 692 452", dur: 7, delay: -2 },
  { d: "M 330 342 C 400 318 470 360 560 330 S 640 310 690 332", dur: 6, delay: -4 },
  { d: "M 90 250 C 170 200 290 232 380 186 S 520 120 610 160", dur: 9, delay: -1 },
  { d: "M 520 300 C 560 280 600 300 640 270", dur: 8, delay: -5 },
];

const SPARKS = [
  { cx: 140, cy: 150, r: 9, delay: 0 },
  { cx: 455, cy: 96, r: 8, delay: -0.7 },
  { cx: 600, cy: 230, r: 10, delay: -1.4 },
  { cx: 420, cy: 420, r: 8, delay: -2.1 },
  { cx: 300, cy: 300, r: 7, delay: -2.8 },
  { cx: 560, cy: 470, r: 9, delay: -3.5 },
  { cx: 200, cy: 420, r: 7, delay: -1 },
  { cx: 680, cy: 300, r: 8, delay: -2.4 },
  { cx: 250, cy: 110, r: 7, delay: -3.1 },
];

const SMALL = "M 0 0 C 7 -9 19 -9 23 0 C 19 9 7 9 0 0 Z";
const TINY = "M 0 0 C 5 -7 14 -7 17 0 C 14 7 5 7 0 0 Z";
const PETALS = [
  { at: [258, 242], dx: -210, dy: 300, rot: -260, dur: 16, delay: 0, fill: "hp-orange", d: "M 0 0 C 8 -11 23 -11 28 0 C 23 11 8 11 0 0 Z", vein: { d: "M 3 0 L 24 0", stroke: "#B8380F", o: 0.45 } },
  { at: [270, 230], dx: -120, dy: 420, rot: 300, dur: 19, delay: -6, fill: "hp-orange", d: SMALL },
  { at: [240, 345], dx: -260, dy: 200, rot: 220, dur: 15, delay: -3, fill: "hp-pink", d: "M 0 0 C 10 -14 28 -12 32 0 C 28 12 10 14 0 0 Z", vein: { d: "M 3 0 L 28 0", stroke: "#B02A5E", o: 0.4 } },
  { at: [336, 482], dx: 60, dy: 300, rot: -200, dur: 17, delay: -9, fill: "hp-orange", d: SMALL },
  { at: [665, 350], dx: 160, dy: 280, rot: 280, dur: 18, delay: -4, fill: "hp-pink", d: "M 0 0 C 9 -12 24 -11 28 0 C 24 11 9 12 0 0 Z" },
  { at: [360, 165], dx: 80, dy: -200, rot: 240, dur: 20, delay: -12, fill: "hp-pink", d: "M 0 0 C 8 -11 22 -10 26 0 C 22 10 8 11 0 0 Z" },
  { at: [520, 400], dx: 230, dy: 150, rot: -240, dur: 16, delay: -8, fill: "hp-gold", d: TINY },
  { at: [470, 430], dx: -40, dy: 330, rot: 200, dur: 21, delay: -14, fill: "hp-gold", d: TINY },
];

export function Hero() {
  const { settings, toggle } = useSettings();

  return (
    <div className="hero-wrap">
      <div aria-hidden="true" className="blob k-morph" style={{ top: -180, right: -220, width: 780, height: 740, borderRadius: "46% 54% 60% 40% / 50% 42% 58% 50%", background: "var(--tint6)", filter: "blur(30px)" }} />
      <div aria-hidden="true" className="blob k-morph" style={{ animationDelay: "-6s", top: 30, left: "28%", width: 380, height: 300, borderRadius: "58% 42% 40% 60% / 45% 55% 45% 55%", background: "var(--tint1)", filter: "blur(40px)", opacity: 0.7 }} />
      <div aria-hidden="true" className="blob k-float" style={{ top: 120, right: 360, width: 140, height: 140, borderRadius: "50%", background: "var(--tint5)", animationDuration: "9s" }} />
      <div aria-hidden="true" className="blob k-float" style={{ top: 64, left: "46%", width: 18, height: 18, borderRadius: "50%", background: "var(--accent)", opacity: 0.55, animationDuration: "7s", animationDelay: "-3s" }} />
      <div aria-hidden="true" className="blob k-float" style={{ bottom: 90, left: "40%", width: 12, height: 12, borderRadius: "50%", background: "var(--primary)", opacity: 0.5, animationDuration: "8s", animationDelay: "-1s" }} />
      <div aria-hidden="true" className="blob k-morph" style={{ animationDelay: "-12s", bottom: -120, left: -160, width: 460, height: 440, borderRadius: "58% 42% 40% 60% / 45% 55% 45% 55%", background: "var(--tint2)", filter: "blur(30px)" }} />

      <section aria-labelledby="hero-title" className="container hero">
        <div className="hero-copy">
          <p className="pill k-rise">For ADHD, OCD, autism, dyslexia — and every kind of mind</p>
          <h1 id="hero-title" className="display k-rise" style={{ animationDelay: "0.12s" }}>
            A calm place for minds that work{" "}
            <span className="hl">
              differently.
              <svg aria-hidden="true" viewBox="0 0 300 20" preserveAspectRatio="none">
                <path className="k-draw" d="M4 14 C 60 2, 110 2, 150 10 S 240 18, 296 6" fill="none" strokeWidth="6" strokeLinecap="round" stroke="#F26B2D" />
              </svg>
            </span>
          </h1>
          <p className="lead k-rise" style={{ animationDelay: "0.24s" }}>
            Psychology-based tools, gentle games and videos with captions and sign language. No pressure, no timers, no noise — go at your own pace.
          </p>
          <div className="ctas k-rise" style={{ animationDelay: "0.36s" }}>
            <a href="#checkin" className="btn btn-primary k-btn">
              Start a 1-minute check-in
              <ArrowRight size={20} />
            </a>
            <a href="#games" className="btn btn-outline">
              Explore games
            </a>
          </div>
          <ul className="checks k-rise" style={{ animationDelay: "0.48s" }}>
            <li>
              <Check />
              No ads, no pop-ups
            </li>
            <li>
              <Check />
              Captions + sign language on every video
            </li>
            <li>
              <Check />
              Works with keyboard and screen readers
            </li>
          </ul>
          <button type="button" className="motion-btn k-rise" aria-pressed={settings.motion} onClick={() => toggle("motion")} style={{ animationDelay: "0.6s" }}>
            {settings.motion ? <Play size={16} /> : <Pause size={16} />}
            {settings.motion ? "Play animations" : "Pause animations"}
          </button>
        </div>

        {!settings.focus && (
          <div className="hero-art k-rise" style={{ animationDelay: "0.3s" }}>
            <span aria-hidden="true" className="float-tag k-float" style={{ top: 0, left: -6 }}>
              <span className="dot" style={{ background: "var(--primary)" }} />
              Captions on
            </span>
            <span aria-hidden="true" className="float-tag k-float" style={{ top: "40%", right: -10, animationDelay: "-2s" }}>
              <span className="dot" style={{ background: "var(--accent)" }} />
              {settings.lang} interpreter
            </span>
            <span aria-hidden="true" className="float-tag dark k-float" style={{ bottom: 4, left: "14%", animationDelay: "-4s" }}>
              No timers, ever
            </span>
            <div className="hero-figure-wrap">
              <div aria-hidden="true" className="blob k-morph" style={{ inset: "2% 0%", borderRadius: "46% 54% 60% 40% / 50% 42% 58% 50%", background: "var(--tint1)", filter: "blur(26px)", opacity: 0.85 }} />
              <figure className="hero-figure">
                <div className="hero-mask">
                  <Image
                    className="h-kenburns"
                    src="/hero-brain.jpg"
                    alt="Collage artwork of a brain filled with flowers, mountains, buildings and colourful patterns"
                    width={735}
                    height={724}
                    priority
                  />
                  <HeroGlow />
                  <HeroSheen />
                </div>
                <HeroPetals />
              </figure>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

function HeroGlow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 735 724" className="overlay" style={{ mixBlendMode: "screen" }}>
      <defs>
        <radialGradient id="hg-warm">
          <stop offset="0" stopColor="#FFC27A" stopOpacity="0.55" />
          <stop offset="1" stopColor="#FFC27A" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hg-pink">
          <stop offset="0" stopColor="#FF9EC4" stopOpacity="0.5" />
          <stop offset="1" stopColor="#FF9EC4" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hg-spark">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="0.35" stopColor="#FFF1C9" stopOpacity="0.8" />
          <stop offset="1" stopColor="#FFF1C9" stopOpacity="0" />
        </radialGradient>
        <filter id="hg-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {PULSES.map((p, i) => (
        <circle key={i} className="h-pulse" style={{ animationDelay: `${p.delay}s` }} cx={p.cx} cy={p.cy} r={p.r} fill={`url(#${p.fill})`} />
      ))}
      <g fill="none" stroke="#FFF4D6" strokeWidth="4" strokeLinecap="round" filter="url(#hg-glow)">
        {NEURONS.map((n, i) => (
          <path key={i} className="h-neuron" d={n.d} style={n.dur ? { animationDuration: `${n.dur}s`, animationDelay: `${n.delay}s` } : undefined} />
        ))}
      </g>
      <g>
        {SPARKS.map((s, i) => (
          <circle key={i} className="h-spark" style={{ animationDelay: `${s.delay}s` }} cx={s.cx} cy={s.cy} r={s.r} fill="url(#hg-spark)" />
        ))}
      </g>
    </svg>
  );
}

function HeroSheen() {
  return (
    <svg aria-hidden="true" viewBox="0 0 735 724" className="overlay" style={{ mixBlendMode: "soft-light" }}>
      <defs>
        <linearGradient id="hg-sweep" x1="0" x2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <clipPath id="hg-cbl">
          <ellipse cx="532" cy="578" rx="118" ry="62" transform="rotate(-6 532 578)" />
        </clipPath>
      </defs>
      <g transform="rotate(18 367 362)">
        <rect className="h-sweep" x="-260" y="-100" width="200" height="924" fill="url(#hg-sweep)" />
      </g>
      <g clipPath="url(#hg-cbl)">
        <rect className="h-sheen" x="300" y="500" width="120" height="160" fill="url(#hg-sweep)" />
      </g>
    </svg>
  );
}

function HeroPetals() {
  return (
    <svg aria-hidden="true" viewBox="0 0 735 724" className="overlay" style={{ overflow: "visible", pointerEvents: "none" }}>
      <defs>
        <linearGradient id="hp-orange" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFB067" />
          <stop offset="1" stopColor="#E8461E" />
        </linearGradient>
        <linearGradient id="hp-pink" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFB3CF" />
          <stop offset="1" stopColor="#E0457F" />
        </linearGradient>
        <linearGradient id="hp-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFE08A" />
          <stop offset="1" stopColor="#F2A516" />
        </linearGradient>
        <linearGradient id="hb-up" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFC46B" />
          <stop offset="0.55" stopColor="#F27A2A" />
          <stop offset="1" stopColor="#B8380F" />
        </linearGradient>
        <linearGradient id="hb-low" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F7A54A" />
          <stop offset="1" stopColor="#C2410C" />
        </linearGradient>
      </defs>
      {PETALS.map((p, i) => (
        <g key={i} transform={`translate(${p.at[0]} ${p.at[1]})`}>
          <g
            className="h-petal"
            style={{ "--dx": `${p.dx}px`, "--dy": `${p.dy}px`, "--rot": `${p.rot}deg`, animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s` } as CSSProperties}
          >
            <path d={p.d} fill={`url(#${p.fill})`} />
            {p.vein && <path d={p.vein.d} stroke={p.vein.stroke} strokeOpacity={p.vein.o} strokeWidth="1" />}
          </g>
        </g>
      ))}
      <g className="h-fly">
        <g transform="translate(560 190) rotate(-14)">
          <g className="h-flap">
            <path d="M 0 -2 C -10 -30 -46 -40 -50 -18 C -53 -2 -30 6 0 2 Z" fill="url(#hb-up)" stroke="#3A1408" strokeWidth="2" />
            <path d="M 0 2 C -24 6 -40 22 -32 34 C -24 44 -8 30 0 6 Z" fill="url(#hb-low)" stroke="#3A1408" strokeWidth="2" />
            <path d="M 0 -2 C 10 -30 46 -40 50 -18 C 53 -2 30 6 0 2 Z" fill="url(#hb-up)" stroke="#3A1408" strokeWidth="2" />
            <path d="M 0 2 C 24 6 40 22 32 34 C 24 44 8 30 0 6 Z" fill="url(#hb-low)" stroke="#3A1408" strokeWidth="2" />
            <path d="M -6 -4 L -40 -24 M -6 -2 L -42 -10 M 6 -4 L 40 -24 M 6 -2 L 42 -10" stroke="#3A1408" strokeOpacity="0.45" strokeWidth="1.2" />
            <circle cx="-44" cy="-22" r="2.6" fill="#FFF6E0" />
            <circle cx="-38" cy="-30" r="2" fill="#FFF6E0" />
            <circle cx="44" cy="-22" r="2.6" fill="#FFF6E0" />
            <circle cx="38" cy="-30" r="2" fill="#FFF6E0" />
          </g>
          <rect x="-2.5" y="-14" width="5" height="34" rx="2.5" fill="#2A160E" />
          <path d="M -1 -13 C -5 -24 -10 -28 -14 -30 M 1 -13 C 5 -24 10 -28 14 -30" stroke="#2A160E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
}
