import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AccessibilityBar } from "@/components/AccessibilityBar";
import { Stroke } from "@/components/icons";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { GUIDES, getGuide, guideHref } from "@/lib/guides";
import { GuideBody } from "./GuideBody";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuide((await params).slug);
  if (!guide) return {};
  return { title: `${guide.title} — a plain-language guide · Kinmind`, description: guide.lead };
}

export default async function GuidePage({ params }: Props) {
  const guide = getGuide((await params).slug);
  if (!guide) notFound();

  const others = GUIDES.filter((g) => g.slug !== guide.slug);
  const { icon, ...content } = guide;

  return (
    <>
      <a href="#main" className="skip">
        Skip to main content
      </a>
      <SiteHeader />
      <AccessibilityBar />
      <main id="main">
        <div className="guide-hero" style={{ background: guide.tint }}>
          <div className="container guide-hero-inner">
            <nav aria-label="Breadcrumb" className="breadcrumb">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/#paths">Guides</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{guide.title}</li>
              </ol>
            </nav>
            <div className="guide-title">
              <span aria-hidden="true" className="icon-tile">
                <Stroke size={30}>{icon}</Stroke>
              </span>
              <h1 className="display">{guide.title}</h1>
            </div>
            <p className="guide-lead">{guide.lead}</p>
          </div>
        </div>

        <GuideBody guide={content} />

        <section aria-labelledby="more-guides" className="container more-guides">
          <h2 id="more-guides" className="display">
            More guides
          </h2>
          <ul>
            {others.map((g) => (
              <li key={g.slug}>
                <Link href={guideHref(g.slug)} style={{ background: g.tint }}>
                  <span aria-hidden="true" className="icon-tile">
                    <Stroke size={22}>{g.icon}</Stroke>
                  </span>
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
