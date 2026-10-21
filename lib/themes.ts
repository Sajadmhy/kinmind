export type ThemeId = "calm" | "dark" | "contrast";

export type Theme = {
  bg: string;
  surface: string;
  surface2: string;
  ink: string;
  muted: string;
  primary: string;
  onPrimary: string;
  primarySoft: string;
  accent: string;
  accentSoft: string;
  line: string;
  tint1: string;
  tint2: string;
  tint3: string;
  tint4: string;
  tint5: string;
  tint6: string;
};

export const BRAND = "#A63D1F";

export const THEMES: Record<ThemeId, Theme> = {
  calm: {
    bg: "#FCE9DA",
    surface: "#FFF6EE",
    surface2: "#F9DCC8",
    ink: "#2A1C2E",
    muted: "#5E4A55",
    primary: BRAND,
    onPrimary: "#FFFFFF",
    primarySoft: "#F9D9C8",
    accent: "#8A2D63",
    accentSoft: "#F8D6E4",
    line: "#EBC5AE",
    tint1: "#FFD9BC",
    tint2: "#FFE4CC",
    tint3: "#F6D3E6",
    tint4: "#FDE3B8",
    tint5: "#FFD2C2",
    tint6: "#F9CFD8",
  },
  dark: {
    bg: "#16162E",
    surface: "#201F3D",
    surface2: "#1A1A35",
    ink: "#F6EDE6",
    muted: "#C3BAD3",
    primary: "#B9AEFF",
    onPrimary: "#16162E",
    primarySoft: "#2E2A5A",
    accent: "#FFA57A",
    accentSoft: "#3E2620",
    line: "#36345C",
    tint1: "#1D3B3D",
    tint2: "#43291F",
    tint3: "#2D2852",
    tint4: "#1E3446",
    tint5: "#3E3820",
    tint6: "#45243A",
  },
  contrast: {
    bg: "#FFFFFF",
    surface: "#FFFFFF",
    surface2: "#F2F2F2",
    ink: "#000000",
    muted: "#1A1A1A",
    primary: "#0033A0",
    onPrimary: "#FFFFFF",
    primarySoft: "#E3EBFF",
    accent: "#7A2E00",
    accentSoft: "#FFEBD9",
    line: "#000000",
    tint1: "#E6F2EE",
    tint2: "#FCEBDD",
    tint3: "#EEEAFB",
    tint4: "#E6EFFB",
    tint5: "#FBF5DC",
    tint6: "#FBE8EC",
  },
};

export const THEME_OPTIONS: { id: ThemeId; label: string; sw1: string; sw2: string }[] = [
  { id: "calm", label: "Bloom", sw1: "#FCE9DA", sw2: BRAND },
  { id: "dark", label: "Dark", sw1: "#16162E", sw2: "#B9AEFF" },
  { id: "contrast", label: "High contrast", sw1: "#FFFFFF", sw2: "#000000" },
];

export const TEXT_SIZES = [
  { aria: "Smaller text", px: 15, glyph: "0.78em" },
  { aria: "Default text size", px: 17, glyph: "0.95em" },
  { aria: "Larger text", px: 20, glyph: "1.12em" },
  { aria: "Largest text", px: 23, glyph: "1.3em" },
];

export const SIGN_LANGUAGES = ["ASL", "BSL", "Auslan"] as const;
export type SignLanguage = (typeof SIGN_LANGUAGES)[number];
