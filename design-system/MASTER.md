# Himmel Haus — Design System (Master)

**Stack:** Static HTML + CSS + vanilla JS. No framework, no build step, no database. Everything ships as-is from `index.html`, `/images`, and a handful of config files (`robots.txt`, `vercel.json`, `middleware.ts`).

**Creative North Star:** "Alpenglow at Altitude" — a near-black timber ground that recedes almost to nothing, with a single brass-amber accent doing all the work of warmth and attention. Depth comes from tone, not shadow. German vocabulary (Vorspeisen, Hauptgericht, Käse) is kept intact, set with quiet formality in small caps — never played for kitsch, never translated away.

---

## Verified Contrast Rules (load-bearing — do not ship an unmeasured pairing)

Every text/background pairing actually used in `index.html` was measured before use:

| Pairing | Ratio | Verdict |
|---|---|---|
| Warm Ivory `#F4EDE2` on Dusk Timber `#14100D` | 16.27:1 | ✅ primary text |
| Muted Alpenglow `#B9AC9B` on Dusk Timber `#14100D` | 8.50:1 | ✅ secondary text |
| Faint Alpenglow `#9C8F80` on Timber Shadow (card) `#1F1813` | 5.55:1 | ✅ tertiary/meta text |
| Alpenglow Amber `#D08A1E` on Dusk Timber `#14100D` | 6.61:1 | ✅ amber-as-text (links, prices) |
| Dusk Ink `#14100D` on Alpenglow Amber `#D08A1E` | 6.61:1 | ✅ primary button text |

**Banned pairings:**
- **Warm Ivory (bone) on Alpenglow Amber — 2.46:1. NEVER.** This is the one every future edit must re-check: bone-on-amber fails badly and it's an easy mistake to make since amber is the accent color. Button/chip text on amber is always Dusk Ink, never bone.
- **Reserved Lozenge Blue `#6199CE` as a text fill — 4.24:1. Fails AA.** `--blau` is defined as a token but is fill/decoration only (reserved for a future Bavarian lozenge motif), never used as text or a large surface. Any future use must be re-measured against its actual background before shipping.

**Faint text history:** an earlier candidate for `--faint`, `#8A7E70`, measured 4.42:1 on the card surface and was rejected (below the 4.5 AA body-text threshold). The shipped value, `#9C8F80` at 5.55:1, is the only one that passes — don't revert to the darker value for "more contrast with muted."

**The rule going forward:** any new color pairing gets measured against its real background before it ships, not assumed from a palette that "looks dark enough."

---

## Colors

Warm, near-monochrome timber tones anchor the page; amber is the only color allowed to draw the eye.

**Neutral / structural**
- `--ground` Dusk Timber `#14100D` — page background
- `--card` Timber Shadow `#1F1813` — card / section-card / quote-card surfaces (the system's only elevation step)
- `--elev` `#2A211A` — secondary elevation, used sparingly
- `--line` Timber Grain `#3A2E24` — default hairline border
- `--line-soft` Timber Grain Soft `#2C231B` — subtler divider (course dividers, footer rule)

**Text**
- `--bone` Warm Ivory `#F4EDE2` — primary text on dark surfaces
- `--muted` Muted Alpenglow `#B9AC9B` — secondary text (ledes, dish descriptions, nav at rest)
- `--faint` Faint Alpenglow `#9C8F80` — tertiary/meta text (chip labels, captions, German-to-English glosses)

**Accent (the only "look here" color)**
- `--amber` Alpenglow Amber `#D08A1E` — reservations CTA, prices, active nav-pill, event flags, signature/limited chip borders
- `--amber-hi` Alpenglow Amber Bright `#E8A63A` — hover/active state; interactive amber always brightens, never darkens
- `--amber-dim` Amber Ember `#8A5D16` — dimmed accent for lower-emphasis moments ("soon" event borders, seasonal-closure note)
- `--ink` Dusk Ink `#14100D` — text color used only on top of amber fills; never a background

**Reserved**
- `--blau` Reserved Lozenge Blue `#6199CE` — defined, not yet placed in any live component. Fill/decoration only if used, never text (see contrast table above).

**Status**
- `--open` `#5FA871` — open-now status dot
- `--closed` `#E5544B` — closed status dot

**One Voice Rule:** Alpenglow Amber is the only color allowed to mean "look here." A second accent color is a layout problem, not a palette problem.

---

## Typography

- **Display** — Playfair Display, 400, `clamp(2.5rem, 6.4vw, 5rem)`, line-height 1.03. Hero `<h1>` only.
- **Headline** — Playfair Display, 500, `clamp(1.85rem, 3.7vw, 2.9rem)`, line-height 1.12. Section headers.
- **Title** — Playfair Display, 500, `clamp(1.2rem, 1.9vw, 1.55rem)`, line-height 1.2. Dish/event names, subsection headings.
- **Body** — Karla, 400, `1.0625rem`, line-height 1.6, max ~60–64ch. Paragraph copy.
- **Label** — Playfair Display SC, 400, `0.8125rem`, letter-spacing 0.14em–0.3em, uppercase. Eyebrows, nav pills, table headers, German section names — always small caps, never mixed with body or display voice.

Fonts are loaded via Google Fonts `<link>` (`fonts.googleapis.com` / `fonts.gstatic.com`) — see the note on `font-src` in the Vercel headers config; this is why those two origins remain in the CSP allowlist instead of `'self'` only.

**Two-Voice Rule:** names/headlines speak in the display serif, wayfinding speaks in label small caps, long-form copy speaks in body sans. No element mixes registers.

---

## Layout

- Single centered container: `max-width: 1180px`, `padding-inline: 24px`.
- Section rhythm: 96px padding above/below every section.
- Spacing scale: `--s1` 8px, `--s2` 16px, `--s3` 24px, `--s4` 40px, `--s5` 64px, `--s6` 96px.
- Breakpoints: **600px** (events/press go 2-up, gallery 3-up, menu signature layout side-by-side) and **900px** (full nav appears, mobile action bar disappears, quotes go 3-up, About/Visit/Bier split into two columns).
- Below 900px, a fixed bottom action bar (Call / Reserve) replaces the header's reserve button.

## Elevation & Depth

No drop shadows anywhere except a 3px glow ring on the "open now" status dot (a live-state pulse, not a depth cue). Depth = one background step (ground → card) + 1px hairline borders. `backdrop-filter: blur` is reserved for floating chrome only (sticky nav past the hero, status pill, sticky menu nav, mobile action bar, event ribbon) — never on in-flow cards or content.

**No-Shadow Rule:** depth is structural (border + background step), never simulated (box-shadow).

## Shapes

- **2px radius** (`--radius`) on every structural container — buttons, cards, photo frames.
- **Full pill (100px)** on tags/wayfinding — status pill, sticky menu-nav links, dietary chips.
- **Circle (50%)** reserved for indicator dots only.
- Borders are always 1px hairline.

## Components

- **Buttons:** sharp 2px corners, never pill. Primary = amber fill + ink text, 44px min tap height, brightens + lifts 1px on hover. Ghost = transparent fill, timber-grain border, bone text; border turns amber + 10% amber wash on hover.
- **Chips:** full pill, transparent fill, 1px timber-grain border, faint text. Signature/limited variant swaps to amber-dim border + amber text. Add-on variant uses a dashed border.
- **Cards:** sharp corners, card-surface background, no shadow, 1px timber-grain-soft border (amber/amber-dim when emphasized), 40px internal padding.
- **Navigation:** transparent over hero → blurred translucent bar with hairline border once scrolled. Menu section nav is a sticky, horizontally-scrolling pill row with scroll-spy. Mobile swaps the header's Reserve button for a fixed bottom Call/Reserve bar past ~70% of viewport height.
- **The Haus Glyph:** hand-drawn single-color alpine-roofline/pretzel mark. The one illustrative element in an otherwise typographic, photography-led system — don't redraw it in a different style elsewhere.

## Do's and Don'ts

**Do:** keep German vocabulary in the label voice · measure any new pairing against the contrast table above · use pill only for tags/wayfinding and 2px sharp for everything structural · reserve blur for fixed/sticky chrome only.

**Don't:** introduce a second accent color · use `--blau` as text or a large fill without re-measuring · add drop shadows to cards/images/buttons · reintroduce clip-art Bavarian imagery, novelty display fonts, or a tiled lozenge background · call the business anything other than "Himmel Haus."

---

## Routing / Redirects

Redirects for retired/renamed URLs live in `vercel.json` (`redirects`), not in application code — there's no router to own them since this is static HTML.
