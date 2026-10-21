# Kinmind

A calm, neurodiverse-friendly website — psychology-based tools, gentle games and videos with captions and sign language. Built with Next.js (App Router) from the Kinmind design canvas.

## Pages

- `/` — home: accessibility bar, hero, 1-minute check-in, guides, psychology tools, games, videos, accessibility promises, footer
- `/lessons/ocd-why-the-brain-asks-twice` — video lesson with sign-language interpreter controls, caption size, chapters, transcript / Easy Read / key points

## Accessibility settings

Text size, colour theme (Bloom, Dark, High contrast), dyslexia-friendly text, focus mode, reduce motion, sign language (ASL/BSL/Auslan) and read aloud (Web Speech API). Choices are saved in `localStorage` and shared across pages (`components/SettingsProvider.tsx`). Animations also stop under `prefers-reduced-motion`.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

Placeholders such as `[LOCAL CRISIS LINE]` and `[LENGTH]` are intentional and need real values before launch.
