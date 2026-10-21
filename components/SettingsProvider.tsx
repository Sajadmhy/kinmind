"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { THEMES, TEXT_SIZES, type SignLanguage, type ThemeId } from "@/lib/themes";

export type Settings = {
  theme: ThemeId;
  size: number;
  dys: boolean;
  focus: boolean;
  motion: boolean;
  sign: boolean;
  read: boolean;
  lang: SignLanguage;
};

export type ToggleKey = "dys" | "focus" | "motion" | "sign" | "read";

const DEFAULTS: Settings = {
  theme: "calm",
  size: 1,
  dys: false,
  focus: false,
  motion: false,
  sign: true,
  read: false,
  lang: "ASL",
};

const STORAGE_KEY = "kinmind-settings";

type Ctx = {
  settings: Settings;
  update: (patch: Partial<Settings>) => void;
  toggle: (key: ToggleKey) => void;
};

const SettingsContext = createContext<Ctx | null>(null);

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used inside SettingsProvider");
  return ctx;
}

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(DEFAULTS);
  const [loaded, setLoaded] = useState(false);

  // Restore saved choices; "Read aloud" never resumes on its own.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setSettings({ ...DEFAULTS, ...JSON.parse(raw), read: false });
    } catch {
      // Storage unavailable: keep defaults.
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // Storage unavailable: choices last for this visit only.
    }
  }, [settings, loaded]);

  const update = useCallback((patch: Partial<Settings>) => setSettings((s) => ({ ...s, ...patch })), []);
  const toggle = useCallback((key: ToggleKey) => setSettings((s) => ({ ...s, [key]: !s[key] })), []);

  const value = useMemo(() => ({ settings, update, toggle }), [settings, update, toggle]);

  const t = THEMES[settings.theme];
  const style = {
    "--bg": t.bg,
    "--surface": t.surface,
    "--surface2": t.surface2,
    "--ink": t.ink,
    "--muted": t.muted,
    "--primary": t.primary,
    "--on-primary": t.onPrimary,
    "--primary-soft": t.primarySoft,
    "--accent": t.accent,
    "--accent-soft": t.accentSoft,
    "--line": t.line,
    "--tint1": t.tint1,
    "--tint2": t.tint2,
    "--tint3": t.tint3,
    "--tint4": t.tint4,
    "--tint5": t.tint5,
    "--tint6": t.tint6,
    "--anim": settings.motion ? "paused" : "running",
    "--enter": settings.motion ? "none" : "rise",
    "--draw": settings.motion ? "none" : "draw",
    fontSize: `${TEXT_SIZES[settings.size].px}px`,
  } as CSSProperties;

  return (
    <SettingsContext.Provider value={value}>
      <div id="top" className={`site${settings.dys ? " dys" : ""}`} style={style}>
        {children}
      </div>
    </SettingsContext.Provider>
  );
}
