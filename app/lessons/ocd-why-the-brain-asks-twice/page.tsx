import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, LogoMark } from "@/components/icons";
import { LessonPlayer } from "./LessonPlayer";
import { LessonText } from "./LessonText";

export const metadata: Metadata = {
  title: "OCD: why the brain asks twice — Kinmind video lesson",
  description: "A short lesson with captions, sign language, a full transcript and an Easy Read summary.",
};

export default function LessonPage() {
  return (
    <>
      <a href="#main" className="skip">
        Skip to main content
      </a>
      <header className="site-header">
        <div className="container bar" style={{ maxWidth: 1240 }}>
          <Link href="/" aria-label="Kinmind home" className="logo">
            <LogoMark size={32} />
            <span className="display" style={{ fontSize: "1.3em" }}>
              Kinmind
            </span>
          </Link>
          <Link href="/" className="btn btn-ghost" style={{ minHeight: 44, padding: "0 16px", fontSize: "0.95em" }}>
            <ArrowLeft />
            Back to home
          </Link>
        </div>
      </header>

      <main id="main" className="container lesson">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/#videos">Videos</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">OCD: why the brain asks twice</li>
          </ol>
        </nav>

        <div className="lesson-intro">
          <h1 className="display">OCD: why the brain asks twice</h1>
          <p>Why “just checking once more” never feels like enough — and the small, brave steps that help the loop let go.</p>
          <LessonTags />
          <section aria-labelledby="inshort" className="box in-short">
            <h2 id="inshort" className="display">
              In short
            </h2>
            <ul>
              <li>OCD brings worries that keep coming back, and urges to check or repeat.</li>
              <li>Checking gives quick relief, which teaches the brain to ask again.</li>
              <li>Small, guided steps (ERP) help the loop let go over time.</li>
            </ul>
          </section>
        </div>

        <div className="lesson-layout">
          <LessonPlayer />
          <LessonText />
        </div>
      </main>
    </>
  );
}

function LessonTags() {
  return (
    <ul className="tags">
      <li>Captions</li>
      <li>Sign language interpreter</li>
      <li>Audio description</li>
      <li className="accent">Easy Read</li>
      <li className="plain">No flashing images</li>
    </ul>
  );
}
