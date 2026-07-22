# Flow Editorial DNA — Page Template System

**Companion to:** `design-dna.md` (tokens, rules, and components defined there apply everywhere; this file defines how they compose into full pages).
**Scope:** every page type on the Scenic Stays site (and any future Flow editorial build).

---

## 0. The two registers

The whole site runs on the same four tokens, two typefaces, hairlines, and square corners — but pages operate in one of two registers, and most pages mix them:

**Editorial register** — composed frames, oversized Didone, full-bleed photography, extravagant whitespace. Used where the job is desire: covers, features, stories.

**Catalog register** — the same tokens at working density: hairline-ruled rows and grids, label-caps metadata, serif names at headline-md, compact vertical rhythm. Used where the job is scanning and choosing: listings, indexes, tables, policies. A catalog page in this system should feel like the *index pages at the back of a magazine* — dense but typeset, never widget-like.

The rule: **every page opens in the editorial register (a header frame), then shifts to catalog register where function demands density.** The header frame is what keeps a search-results page feeling like the same publication as the homepage.

Catalog-register specifics:
- Rows, not cards: 1px hairline separators, generous padding, no borders-as-boxes.
- Property entries: photo (fixed ratio, square-cornered) + serif name (headline-md) + whisper line (label-caps: location · sleeps · key feature) + rate in label-caps ("From $485 / night"). No badges, no star widgets.
- Filters as text chips per DNA §8: 1px border, label-caps; active = ink fill, paper text.
- Pagination as typeset folio: "Page 2 of 12" in label-caps with ghost prev/next.
- Sorting as an underlined text control, not a select box (visually — semantically it can be a styled select).

## 1. Template inventory

Nine templates cover the entire sitemap:

| # | Template | Covers |
|---|----------|--------|
| T1 | The Cover | Homepage (built — see design-dna.md §page architecture) |
| T2 | The Index | /rentals, destination pages, collection pages (Gulf Front, Pet Friendly, Private Pools, Golf Cart, 100 Collection), A–Z list |
| T3 | The Residence | Individual property pages (/rentals/[slug]) |
| T4 | The Resort | Resort profiles (SunDestin, One Seagrove Place, The Crescent, Emerald Towers, High Pointe, Amalfi Coast, Palazzo, Seychelles) |
| T5 | The Journal | Blog index + articles, destination guides, Things To Do, Weddings & Events |
| T6 | The Story | About, Meet the Team, Housekeeping Commitment |
| T7 | The Prospectus | Property Management, Real Estate (owner acquisition) |
| T8 | The Offers | Vacation Deals |
| T9 | The Record | Contact, FAQs, Rental Policies, What's Included, Privacy, Terms |

## 2. T2 — The Index (listings & search results)

The hardest template: booking-engine density inside editorial identity.

**Frame 1 — Destination cover (~70svh):** full-bleed destination photo, polarity rule, serif name at display scale ("Destin."), one-line serif dek ("The harbor town, from bay to beach."), Fig. caption. For filter-collection pages, the cover is quieter (~50svh, vellum, typographic only): "No. — Gulf Front Homes" + a serif line.
**Frame 2 — The working strip:** search/filter bar in booking-strip style (hairline fields, chips). Sticky on scroll in frosted-vellum.
**Body — catalog register:** results as hairline rows, alternating photo-left/photo-right per row on desktop for print rhythm; grid collapses to single column mobile. Every 8–10 results, insert one **editorial interruption**: a full-width pull-quote or full-bleed image band (a "spread" between "index pages") — this is what keeps long result sets from collapsing into template-feel.
**Footer of results:** typeset pagination.

SEO note: destination pages carry a prose block (editorial-register, headline-md + body-lg, 150–250 words) between cover and working strip — the ranking copy their current pages bury at the bottom, given dignity instead.

## 3. T3 — The Residence (property detail)

Structure = a magazine feature article about one house.

1. **Cover frame:** best photo full-bleed, house name in display-xl overlapping the image edge, whisper line ("Seagrove Beach · Sleeps 20 · Gulf views · 6 BD / 7 BA"), Fig. caption.
2. **The facts strip (sticky):** hairline row — dates, guests, rate, and one solid-ink "Begin an inquiry / Reserve" button. This is the page's persistent functional anchor; frosted-vellum on scroll.
3. **Editorial intro:** folio marker ("No. — The House") + 2–3 short serif-led paragraphs. Rewrite of the listing description in the voice (confident, short, no exclamation points).
4. **The gallery:** NOT a thumbnail grid. Art-directed spreads — alternating full-bleed singles, pairs, and a material close-up — with Fig. captions ("Fig. 03 — The kitchen, morning"). "View all N photographs" opens a full-screen index (catalog register) for completists.
5. **The particulars:** amenities as typeset index columns (label-caps headings: The House / The Kitchen / Outside / Included), plain text items, hairlines between columns. No icons.
6. **Availability & rates:** calendar and rate table in catalog register — hairline grid, ink/paper states, label-caps day headers. If the booking engine (Guesty) forces an embedded widget, quarantine it: hairline-framed "functional zone" with a folio label ("Reserve"), custom-themed as far as the widget allows (fonts/colors via its config), accepted as-is beyond that. Never let widget styles leak outward.
7. **The Guestbook:** property-specific reviews, one full pull-quote + additional reviews as hairline rows (catalog register).
8. **The map:** hairline-framed, grayscale/muted map style, gold pin. Caption-treated ("30.32° N — Seagrove Beach").
9. **Closing frame:** "Nearby in the collection" — two related properties as mini-spreads + the closing serif line.

## 4. T4 — The Resort

Hybrid: resort as the feature, units as the index.
Cover frame (resort name, polarity) → editorial intro + Difference-strip-style amenity columns (pool, front desk, beach access) → **unit index in catalog register** (hairline rows: unit name serif, floor/view/sleeps whisper, from-rate) → resort Guestbook → map → closing.
SunDestin's page carries the "front desk that answers at 3 a.m." line natively — it lives there.

## 5. T5 — The Journal (guides & blog)

**Index:** cover frame ("The Journal." + issue-style dek) → featured article as a full spread → article list in catalog register (hairline rows: serif headline, label-caps date + category, no thumbnails required — text-forward like a magazine contents page).
**Article:** title frame (display serif on paper — no image required; the *type is the cover*), byline/date in label-caps, body at body-lg with a 65–70ch measure, images as full-bleed Fig.-captioned breaks, pull quotes in headline-lg italic. Destination guides append a catalog-register "Stay here" block: 3 properties in that destination.
This template is the SEO/GEO workhorse — structure headings semantically (h2/h3 real hierarchy), FAQ schema on guide pages.

## 6. T6 — The Story

About = the brand's own feature article: cover frame (team or coastline photo), the history told in editorial prose with Fig.-captioned photos, the Difference strip reprised in full, team as a **masthead page** — names in serif, roles in label-caps, hairline rows (photos optional; a text masthead is more Vogue than a headshot grid). "200 combined years" as a pull quote.

## 7. T7 — The Prospectus (owner acquisition)

The money template — treat owners as the luxury clients they are.
Cover frame: dark, moody house-at-dusk, "Management worthy of the house." → the pitch in editorial prose (short, confident) → proof as Difference-strip columns (occupancy, care, local ownership — real numbers in serif at headline scale, labels in caps: the *numbers become the typography*) → owner Guestbook (owner testimonials — content requirement) → fee/service particulars in catalog register → inquiry form in booking-strip style (hairline fields, ghost submit) → closing frame.
Real Estate page: same skeleton, "Invest in the coastline, properly." — links out to myscenicrealestate.com; keep the bridge page on-DNA.

## 8. T8 — The Offers

The register-clash page: deals are inherently loud; the DNA is quiet. Resolution: **offers as editions.** Vellum cover frame ("No. — The Offers" + "Quiet months, generous rates."). Each deal = a hairline-ruled entry: serif offer name ("The September Edition"), terms in body text, dates + promo code in label-caps, gold "Reserve" link. No burst badges, no strikethrough prices at display scale, no countdown timers. Discount figures may sit in serif at headline-md — a number can be big; it cannot flash.

## 9. T9 — The Record (utility pages)

Pure catalog register with a minimal typographic header (headline-lg title on paper, hairline, no photo). FAQs as hairline accordion rows (plus-to-minus rendered as typeset "+"/"−" characters, not icons). Policies as clean measure-limited prose with real heading hierarchy. Contact: address/phone/email in the colophon style + a booking-strip form. These pages prove the system's floor: even Terms & Conditions is typeset, not dumped.

## 10. Global elements (every template)

- Masthead + mega-nav (per DNA §8), active section underlined.
- Colophon footer (per DNA §8 — full link columns, newsletter row, text socials, legal line).
- Breadcrumbs on T2–T5 as a typeset trail in label-caps: "The Collection — Destin — Emerald Towers 1101" (em-dash separated, no chevrons).
- Every template opens with an editorial-register frame, however small. No page starts in catalog register cold.
- Frame discipline (svh, peek, rhythm) applies to editorial-register sections; catalog-register bodies flow naturally and are exempt from frame sizing.
- 404: a full editorial frame. "Lost, pleasantly." + ghost link home. The error page is a brand page.

## 11. Build order (Astro)

1. `tokens.css` + `Frame.astro` + masthead/footer (global shell)
2. T1 Cover (validates the shell)
3. T2 Index + catalog-register row/chip/pagination components (unlocks the most pages)
4. T3 Residence (highest-value single template; booking-engine integration risk lives here — spike the Guesty embed early)
5. T5 Journal (SEO engine)
6. T7 Prospectus (revenue)
7. T4, T8, T9 (compose from existing parts)

Data reality: T2/T3/T4 are driven by the booking platform (Guesty). Confirm API access vs. widget-embed early — it determines whether availability/rates render natively (full DNA control) or in the quarantined functional zone.
