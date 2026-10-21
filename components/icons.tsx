import type { ReactNode } from "react";

type IconProps = { size?: number; className?: string };

function Stroke({ size = 24, width = 1.8, children }: { size?: number; width?: number; children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function LogoMark({ size = 34 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" aria-hidden="true">
      <circle cx="13" cy="17" r="9" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="21" cy="17" r="9" fill="currentColor" opacity="0.35" />
    </svg>
  );
}

export function ArrowRight({ size = 18 }: IconProps) {
  return (
    <Stroke size={size} width={2.2}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Stroke>
  );
}

export function ArrowLeft({ size = 18 }: IconProps) {
  return (
    <Stroke size={size} width={2}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </Stroke>
  );
}

export function Check({ size = 18 }: IconProps) {
  return (
    <Stroke size={size} width={2.4}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </Stroke>
  );
}

export function SearchIcon({ size = 18 }: IconProps) {
  return (
    <Stroke size={size} width={2}>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </Stroke>
  );
}

export function Sliders({ size = 22 }: IconProps) {
  return (
    <Stroke size={size}>
      <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12" />
      <circle cx="16" cy="6" r="2" />
      <circle cx="10" cy="12" r="2" />
      <circle cx="18" cy="18" r="2" />
    </Stroke>
  );
}

export function Speaker({ size = 22, waves = 2 }: IconProps & { waves?: 1 | 2 }) {
  return (
    <Stroke size={size}>
      <path d="M4 10v4h4l5 4V6L8 10z" />
      <path d={waves === 2 ? "M16 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11" : "M16 9a4 4 0 0 1 0 6"} />
    </Stroke>
  );
}

export function Play({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
    </svg>
  );
}

export function Pause({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor" />
    </svg>
  );
}

export function Flower({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <g fill="#F26B2D">
        {[0, 60, 120, 180, 240, 300].map((r) => (
          <ellipse key={r} cx="12" cy="6" rx="3" ry="5" transform={r ? `rotate(${r} 12 12)` : undefined} />
        ))}
      </g>
      <circle cx="12" cy="12" r="3" fill="#F7B733" />
    </svg>
  );
}

export function CaptionsIcon({ size = 20 }: IconProps) {
  return (
    <Stroke size={size}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M10.5 10.5a2 2 0 1 0 0 3M16.5 10.5a2 2 0 1 0 0 3" />
    </Stroke>
  );
}

export function HandIcon({ size = 20 }: IconProps) {
  return (
    <Stroke size={size}>
      <path d="M8 13V6.5a1.5 1.5 0 0 1 3 0V12M11 11V5a1.5 1.5 0 0 1 3 0v6M14 11V6.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6h-1a5 5 0 0 1-4.2-2.3L4 14.5a1.5 1.5 0 0 1 2.4-1.8L8 14" />
    </Stroke>
  );
}

export function SpeedIcon({ size = 20 }: IconProps) {
  return (
    <Stroke size={size}>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 13l4-3M12 3v2" />
    </Stroke>
  );
}

export function DocIcon({ size = 20 }: IconProps) {
  return (
    <Stroke size={size}>
      <path d="M6 3h9l4 4v14H6z" />
      <path d="M9 11h7M9 15h7M9 7h4" />
    </Stroke>
  );
}

export function Rewind({ size = 20 }: IconProps) {
  return (
    <Stroke size={size}>
      <path d="M4 12a8 8 0 1 0 3-6.2M4 4v4h4" />
    </Stroke>
  );
}

export function InterpreterFigure({ tall = false }: { tall?: boolean }) {
  return tall ? (
    <svg viewBox="0 0 120 160" width="100%" height="100%" preserveAspectRatio="xMidYMax meet" aria-hidden="true" style={{ display: "block" }}>
      <circle cx="60" cy="52" r="21" fill="#E9DCCB" />
      <path d="M20 160c0-36 17-62 40-62s40 26 40 62z" fill="#0B1516" />
      <path d="M28 126c-5-15 0-26 11-32l6 5c-6 6-8 15-6 25z" fill="#E9DCCB" />
      <path d="M92 112c9-9 13-19 11-30l-7 1c0 9-3 16-10 22z" fill="#E9DCCB" />
    </svg>
  ) : (
    <svg viewBox="0 0 120 150" width="100%" aria-hidden="true" style={{ display: "block" }}>
      <circle cx="60" cy="48" r="20" fill="#E9DCCB" />
      <path d="M22 150c0-34 16-58 38-58s38 24 38 58z" fill="#0B1516" />
      <path d="M30 118c-4-14 0-24 10-30l6 4c-6 6-8 14-6 24z" fill="#E9DCCB" />
      <path d="M90 104c8-8 12-18 10-28l-7 1c0 8-3 15-9 21z" fill="#E9DCCB" />
    </svg>
  );
}

export { Stroke };
