"use client";

import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

const PREFIX = "kinmind-game-v1-";

// Like useState, but the value is kept in localStorage so a game can be picked
// up again after a reload. Games mount only in the browser (when first opened),
// so reading storage in the initialiser is safe.
export function useSavedState<T>(key: string, initial: T | (() => T)): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = window.localStorage.getItem(PREFIX + key);
      if (raw !== null) return JSON.parse(raw) as T;
    } catch {
      // Storage unavailable or unreadable: start fresh.
    }
    return initial instanceof Function ? initial() : initial;
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(PREFIX + key, JSON.stringify(value));
    } catch {
      // Storage unavailable: progress lasts for this visit only.
    }
  }, [key, value]);

  return [value, setValue];
}
