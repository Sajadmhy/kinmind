import Link from "next/link";
import { LogoMark, SearchIcon } from "./icons";

const NAV = [
  { href: "/#paths", label: "Learn" },
  { href: "/#psychology", label: "Psychology" },
  { href: "/#games", label: "Games" },
  { href: "/#videos", label: "Videos" },
  { href: "/#accessibility", label: "Accessibility" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container bar">
        <Link href="/" aria-label="Kinmind home" className="logo">
          <LogoMark />
          <span className="display">Kinmind</span>
        </Link>
        <nav aria-label="Main" className="main-nav">
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <form role="search" action="/" className="search">
          <SearchIcon />
          <label htmlFor="site-search" className="sr-only">
            Search Kinmind
          </label>
          <input id="site-search" name="q" type="search" placeholder="Search guides, games, videos" />
          <button type="submit">Search</button>
        </form>
        <div className="header-actions">
          <a href="#signin" className="btn btn-ghost">
            Sign in
          </a>
          <Link href="/#psychology" className="btn btn-primary">
            Talk to someone
          </Link>
        </div>
      </div>
    </header>
  );
}
