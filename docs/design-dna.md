# Flow Editorial Design DNA — "Editorial Speed"

**Project:** Scenic Stays redesign (concept) / Flow Web Designs signature system
**Source of truth for:** any agent (Cursor, Claude Code) building or modifying this design.
**Merged from:** Stitch DESIGN.md export (2026-07-22) + design rulings from concept review.

> The brand feel: a printed fashion magazine about the Gulf Coast that loads
> instantly. Paper and ink, not widgets. Photography is the narrative device;
> the UI is a transparent frame around it. If a choice would look wrong on a
> printed page, it is wrong here.

---

## 1. Color

Only four colors exist. Photography supplies everything else.

| Token        | Hex       | Role                                                        |
| ------------ | --------- | ----------------------------------------------------------- |
| `--paper`    | `#FAF7F2` | Primary background ("bright cream")                         |
| `--vellum`   | `#F3EEE4` | Alternating section background ("deep cream" = page turn)   |
| `--ink`      | `#141210` | All type, hairlines, solid buttons                          |
| `--gold`     | `#8A6D3B` | Rare accent: 1–2 uses per viewport max (link, underline)    |

Rules:
- Alternate `--paper` / `--vellum` between sections to imply pages turning.
- Gold is jewelry, not paint. Never a background, never a large fill.
- **Discard the Material-style token set from the Stitch export** (`surface-container-*`, `tertiary-fixed-dim`, etc.). It is auto-generated noise and contains at least one invalid hex (`#e5e20`). Only the four tokens above are canonical.
- Never pure `#FFFFFF` or `#000000` anywhere.

## 2. Typography

**Display: Bodoni Moda** (variable). Headlines only — never body, never UI.
**Body/UI: Hanken Grotesk.**

| Style             | Face           | Size (desktop)          | Notes                                  |
| ----------------- | -------------- | ----------------------- | -------------------------------------- |
| display-xl        | Bodoni Moda    | clamp(56px, 9vw, 120px) | Hero statements; lh 0.95–1.0; also cap ≤ ~40svh |
| headline-lg       | Bodoni Moda    | clamp(40px, 5vw, 64px)  | Pull quotes, house names; lh 1.0       |
| headline-md       | Bodoni Moda    | clamp(26px, 3vw, 40px)  | Closing lines, panel titles            |
| body-lg           | Hanken Grotesk | 18px / lh 1.6           |                                        |
| body-md           | Hanken Grotesk | 15px / lh 1.5           |                                        |
| label-caps        | Hanken Grotesk | 11px / 600 / 0.2em / UPPERCASE | Nav, eyebrows, captions, buttons, metadata |

Rules:
- **One italic word per major headline** — the editorial cadence signature. Statements end with a period. ("The Emerald Coast, *properly*.")
- Didone type falls apart small: Bodoni Moda never below headline-md sizes.
- Destination/index numbering is full-size serif, not small caps: "II. Destin".
- **Font loading:** self-host subsetted variable woff2s in `/public/fonts`. Preload the Bodoni file. `font-display: swap` + size-adjusted fallback metrics (Fontaine or manual `@font-face` overrides) — zero CLS from font swap is non-negotiable.

## 3. Texture — implied, not applied

Vogue is printed on smooth stock; its tactility is paper tone + ink density + photo surface. Recreate that hierarchy:

1. **Paper tones are the primary texture** (the `--paper`/`--vellum` alternation).
2. **Photography is the texture.** Art-direct crops that foreground material: sand, linen, water, cedar. Never apply grain, filters, or duotones to photographs.
3. **Literal grain is allowed in exactly two places:**
   - Cream surfaces: ≤ 3–4% opacity.
   - Hero/filmstrip **scrims** (the darkening layer between photo and type), blend-mode overlay, ~8–10% — reads as film without touching the image.
   - Implementation: one inline SVG `feTurbulence` filter shared page-wide. Zero network requests. No raster noise tiles.
4. **Ink density as texture:** huge display type against dense small caption blocks against empty cream.
5. Banned: torn edges, halftones, kraft paper, skeuomorphism of any kind.

## 4. Type-over-image: the polarity rule

Every labeled image runs through the same logic. This is a component prop, not a per-page decision.

- `polarity="dark"` (dark/moody photo): cream `#FAF7F2` type + grainy dark scrim (`scrimStrength` prop, 0.2–0.5 by photo brightness).
- `polarity="light"` (pale/bright photo): ink `#141210` type, minimal or no scrim.
- **Filmstrip / labeled photo panels:** a uniform bottom-gradient scrim zone on ALL panels regardless of polarity, so labels always sit on darkness. (Ruling from the Navarre-pier washout.)
- Eyebrows and Fig. captions follow the headline's polarity — never default to mid-gray.
- **Contrast guarantee:** the scrim is baked into the component; a client's bright photo can never produce unreadable type.

## 5. Frame discipline (viewport theory)

The page is a sequence of composed spreads, not a continuous scroll.

- Every section is a frame sized in **`svh`** (never `vh` — mobile URL-bar bug).
- **Hero = 100svh minus a 50px peek** of the next section's top hairline. The peek is the "continued on next page" cue. (`h-[calc(100svh-50px)]`.)
- **Rhythm: loud / quiet / loud.** Full-bleed dramatic frames alternate with calm cream frames. The quiet frame after the hero is a rest beat — anchor it with a hairline so the space reads composed, not empty.
- One property spread per frame (~90svh); a house's composition never straddles a scroll stop.
- Filmstrip = exactly 100svh, the mid-page second cover.
- **No scroll-snap.** Compose for natural stops; never enforce them.
- Mobile recomposes, never squishes: property pairs → one image per frame; filmstrip → three stacked ~70svh frames (each destination gets its own cover).
- Strip the Stitch export's `pt-[420px]` on `<main>` — mockup artifact compensating for the permanently-open dropdown.

## 6. Motion — the one rule

- A single reveal exists: **fade-up, 500ms, cubic-bezier(0.22, 1, 0.36, 1), translateY(24px→0)**.
- Fired per-frame via IntersectionObserver at ~30% visibility; elements within a frame stagger 80ms.
- Image hovers may scale 1.05 over 1000ms (from Stitch export — approved).
- Nothing else moves. No parallax, no scroll-jacking, no marquees.
- Respect `prefers-reduced-motion`: reveals become instant.

## 7. Shape & depth

- **90° corners on everything.** `border-radius: 0` globally. No exceptions.
- **No shadows, ever.** Depth = overlap (serif name crossing a photo edge) and tonal tiers (`--vellum` sections).
- Hairlines (`1px` ink, often at reduced opacity) define space instead of containers.
- Sticky nav translucency: frosted-vellum backdrop blur (`bg-paper/90 backdrop-blur`), not glass.

## 8. Components

**Buttons** — two sanctioned styles only:
- Ghost: transparent, 1px ink border, label-caps ink text. (Default; used for Search.)
- Solid: ink fill, paper text, label-caps. (Rare; primary CTA.)
- Text links: label-caps with gold hairline underline. No gray fills. Nothing rounded.

**Editorial hero** (`EditorialHero.astro`): props `image, headline, italicWord, eyebrow, polarity, scrimStrength, caption, coordinate`. Corner furniture: "Fig. 0X — [place, time]" bottom-left, coordinate bottom-right.

**Property spread** (`PropertySpread.astro`):
- House name in headline-lg, **overlapping the photo edge** — partly on image, partly on cream. At least one spread per page performs the overlap fully.
- Detail whisper (label-caps): "Seacrest Beach · Sleeps 12 · Gulf front". Location + capacity always present — the spell never omits the facts a booking decision needs.
- Text panels laid over photos: `--paper` background (never white), square, shadowless. One drop shadow away from Squarespace at all times — keep it locked.

**Folio markers**: format is "No. 0X — Section Name" ("No. 01 — The Private Homes"). Never the word "Folio" spelled out.

**Filmstrip** (`ImageStrip.astro`): equal-height full-bleed panels, ≤2px gap, serif numeral names ("I. Thirty-A"), character sublabels ("The villages", "The harbor", "The longest pier" — no compass directions), universal bottom scrim. **A panel contains one photograph and one label — never nested UI, cards, or body text.**

**Booking strip**: label-caps field labels, serif italic placeholders ("Where to?"), bare 1px baseline inputs, ghost search button. Reads as a magazine subscription card, not a booking engine.

**Pull quotes**: headline-lg italic, no quotation marks — the scale and italic already say "quote".

**Mega-nav panels**: full-width below masthead, `--paper`, hairline-bounded, label-caps column headings + serif links, one small captioned photo column. No hover-menu styling, no icons, no shadows. Interactive state in build (not permanently open). Phone number quiet at far right.

## 9. Editorial voice (copy rules)

- Captions in figure format: "Fig. 01 — Seagrove, first light".
- CTAs in the discovery register: "Discover the interiors", "View the collection", "Begin an inquiry" — never "View Property", "Book Now", "Learn More".
- Property prose is confident and short: "An exercise in transparency. Floor-to-ceiling glass curated for the unhurried traveler."
- Geography must be correct. (Navarre is the *west* end of the territory.)

## 10. Performance is part of the identity

The instant load is the digital equivalent of heavy paper stock.

- All images through Cloudflare Image Resizing (`cfImg()` helper) — responsive srcsets, AVIF/WebP. **Replace every `lh3.googleusercontent.com/aida-public` placeholder from the Stitch export** — they are AI-generated temps and will expire.
- Fonts self-hosted + subsetted (see §2). No Google Fonts CDN in production.
- No Tailwind CDN script in production — compiled Tailwind or vanilla CSS.
- Texture stack costs zero requests (inline SVG only).
- Budget: LCP < 1.5s, CLS ≈ 0, no layout shift from fonts, scrims, or reveals.

## 11. Hard bans (checklist for any agent)

- No rounded corners · no drop shadows · no gradients (except photo scrims)
- No colors beyond the four tokens · no pure white/black
- No grain on photographs · no skeuomorphic texture
- No icons in navigation or buttons (sparse Material Symbols acceptable only for functional UI like a menu toggle)
- No nested UI inside photo panels
- No scroll-snap, parallax, or second animation styles
- No carousels, badge clutter, star widgets, rounded cards
- No "Book Now"/"Learn More" copy register
- No `vh` units for frames (always `svh`)
