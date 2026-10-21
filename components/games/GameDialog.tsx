"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  intro: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

// A native <dialog> gives us focus trapping, Escape to close and focus
// restore for free. Closing only hides it, so a game picks up where it left off.
export function GameDialog({ id, title, intro, open, onClose, children }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <dialog
      ref={ref}
      className="game-dialog"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-intro`}
      onClose={onClose}
      onClick={(e) => {
        // Clicking the dimmed backdrop closes the game.
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="game-dialog-inner">
        <header className="game-dialog-head">
          <div>
            <h2 id={`${id}-title`} className="display">
              {title}
            </h2>
            <p id={`${id}-intro`} className="muted">
              {intro}
            </p>
          </div>
          <button type="button" className="round-btn" aria-label={`Close ${title}`} onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </header>
        {children}
        <p className="game-dialog-foot muted">No timer · No score · Close any time — your game is kept until you leave the page.</p>
      </div>
    </dialog>
  );
}
