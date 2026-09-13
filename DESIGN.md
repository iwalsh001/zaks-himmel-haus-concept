---
name: Himmel Haus
description: A German Bavarian restaurant and bierhaus in South Lake Tahoe, CA
colors:
  dusk-timber: "#14100D"
  timber-shadow: "#1F1813"
  timber-grain: "#3A2E24"
  timber-grain-soft: "#2C231B"
  warm-ivory: "#F4EDE2"
  muted-alpenglow: "#B9AC9B"
  faint-alpenglow: "#9C8F80"
  alpenglow-amber: "#D08A1E"
  alpenglow-amber-bright: "#E8A63A"
  amber-ember: "#8A5D16"
  dusk-ink: "#14100D"
  reserved-lozenge-blue: "#6199CE"
  status-open: "#5FA871"
  status-closed: "#E5544B"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.5rem, 6.4vw, 5rem)"
    fontWeight: 400
    lineHeight: 1.03
    letterSpacing: "-0.022em"
  headline:
    fontFamily: "Playfair Display, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.85rem, 3.7vw, 2.9rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Playfair Display, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.2rem, 1.9vw, 1.55rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "Karla, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "'Playfair Display SC', 'Playfair Display', Georgia, serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.22em"
rounded:
  sharp: "2px"
  pill: "100px"
  circle: "50%"
spacing:
  s1: "8px"
  s2: "16px"
  s3: "24px"
  s4: "40px"
  s5: "64px"
  s6: "96px"
components:
  button-primary:
    backgroundColor: "{colors.alpenglow-amber}"
    textColor: "{colors.dusk-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sharp}"
    padding: "12px 22px"
  button-primary-hover:
    backgroundColor: "{colors.alpenglow-amber-bright}"
    textColor: "{colors.dusk-ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.warm-ivory}"
    typography: "{typography.body}"
    rounded: "{rounded.sharp}"
    padding: "12px 22px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.faint-alpenglow}"
    rounded: "{rounded.pill}"
    padding: "3px 10px"
  card:
    backgroundColor: "{colors.timber-shadow}"
    rounded: "{rounded.sharp}"
    padding: "40px"
---

# Design System: Himmel Haus

## Overview

**Creative North Star: "Alpenglow at Altitude"**

The system reads as the last warm light at dusk over the Sierra: a near-black timber ground that recedes almost to nothing, with a single brass-amber accent doing all the work of warmth and attention. It's the California/Tahoe setting shaking hands with German tradition — nothing about the palette or type says "theme restaurant," but the German vocabulary (Vorspeisen, Hauptgericht, Käse) is kept intact and set with quiet formality in small caps, never played for kitsch.

The voice is warm, confident, and unfussy — generous like the communal tables and hearty food, but never precious or performed. Depth comes from tone, not shadow; the page stays flat and lets one accent color and a hairline of light do the signaling. Confirmed rejections: clip-art lederhosen, novelty "Oktoberfest" display fonts, and tiled diamond/lozenge backgrounds — the Bavarian blue-and-white motif is present only as a single reserved accent, never as pattern.

**Key Characteristics:**
- Single-theme, dark-by-intent — there is no light mode; a bierhaus at night doesn't have one.
- One accent color (amber) carries nearly all visual emphasis; everything else is tonal.
- Flat surfaces with hairline borders instead of shadows; a hazy backdrop-blur is reserved for floating chrome only.
- German vocabulary is a deliberate texture, always set in the small-caps label voice, never translated away.

## Colors

Warm, near-monochrome timber tones anchor the page; amber is the only color allowed to draw the eye, and a single reserved blue is held in reserve for a specific brand motif.

### Primary
- **Alpenglow Amber** (#D08A1E): The one accent. Reservations CTA, prices, active nav-pill state, event flags, dish "signature"/"limited" chip borders, headline em-accent underline. Used sparingly — it marks the thing the visitor should act on or notice, not decoration.
- **Alpenglow Amber Bright** (#E8A63A): Hover/active state of the amber accent — buttons and interactive amber text lighten on interaction, never darken.
- **Amber Ember** (#8A5D16): Dimmed amber for lower-emphasis accent moments — "soon" event card borders, the seasonal-closure note border. Signals "amber family, quieter register."

### Tertiary
- **Reserved Lozenge Blue** (#6199CE): The Bavarian blue-and-white lozenge reference color. Defined in tokens but not yet placed in any live component — reserved for a future sparing use (e.g. a small flag/lozenge motif), consistent with the brief's instruction that this motif stay an accent, never wallpaper. **Never use as text or on-text fill** — it fails contrast against the dark ground (4.24, below the 4.5 AA text minimum). Safe only as a small fill/graphic element, verified against its actual background before use.

### Neutral
- **Dusk Timber** (#14100D): Page background (`--ground`). The near-black warm brown that everything else sits on.
- **Timber Shadow** (#1F1813): One step up from Dusk Timber — card, section-card, and quote-card backgrounds. The system's only "surface" step; there is no second elevation tier.
- **Timber Grain** (#3A2E24): Default hairline border/divider color.
- **Timber Grain Soft** (#2C231B): Subtler divider — used where a border needs to be present but nearly silent (course dividers, footer rule).
- **Warm Ivory** (#F4EDE2): Primary text color on dark surfaces. Also the fill for the brand glyph's "roof."
- **Muted Alpenglow** (#B9AC9B): Secondary text — body copy that isn't the primary read (ledes, dish descriptions, nav links at rest).
- **Faint Alpenglow** (#9C8F80): Tertiary/meta text — chip labels, captions, micro-copy, English translations under German section names.
- **Dusk Ink** (#14100D): Same hex as Dusk Timber, but a distinct semantic role — the dark text color used *on top of* amber fills (primary buttons, event flags, the ribbon). Never used as a background.
- **Status Open** (#5FA871): "Open now" status-dot fill.
- **Status Closed** (#E5544B): "Closed" status-dot fill.

### Named Rules
**The Verified Contrast Rule.** Every text/background pairing in this system was measured before use: Warm Ivory/Dusk Timber 16.27, Muted Alpenglow/Dusk Timber 8.50, Faint Alpenglow/Timber Shadow 5.55, Alpenglow Amber/Dusk Timber 6.61, Dusk Ink/Alpenglow Amber 6.61. Two pairings are explicitly banned: Warm Ivory text on Alpenglow Amber (2.46 — fails) and Reserved Lozenge Blue as a text fill (4.24 — fails AA). Any new color pairing gets measured before it ships, not assumed.

**The One Voice Rule.** Alpenglow Amber is the only color allowed to mean "look here." If a screen needs a second attention-grabbing color, that's a sign the layout needs restructuring, not a second accent.

## Typography

**Display Font:** Playfair Display (with Georgia, "Times New Roman", serif fallback)
**Body Font:** Karla (with Helvetica Neue, Arial, sans-serif fallback)
**Label/Mono Font:** Playfair Display SC (small-caps variant of the display face)

**Character:** A formal, slightly editorial serif carries anything meant to be read as a headline or a name (dish names, event names, the hero line); a plain, warm humanist sans carries anything meant to be read at length; a small-caps variant of the serif carries wayfinding, metadata, and — deliberately — the German vocabulary, so it reads as considered typography rather than novelty lettering.

### Hierarchy
- **Display** (400, `clamp(2.5rem, 6.4vw, 5rem)`, line-height 1.03): The hero `<h1>` only. Nothing else uses this size.
- **Headline** (500, `clamp(1.85rem, 3.7vw, 2.9rem)`, line-height 1.12): Section headers ("Bavarian food, cooked the long way.", "Six taps that rotate.").
- **Title** (500, `clamp(1.2rem, 1.9vw, 1.55rem)`, line-height 1.2): Dish names, event names, subsection headings — still the display serif, one step down.
- **Body** (400, 1.0625rem, line-height 1.6; max ~60–64ch): Paragraph copy — ledes, dish descriptions, addresses. Karla.
- **Label** (400, 0.8125rem, letter-spacing 0.14em–0.3em depending on context, uppercase): Eyebrows, nav pills, table headers, event date/time, German section names (Vorspeisen, Hauptgericht). Always Playfair Display SC, always uppercase-set.

### Named Rules
**The Two-Voice Rule.** Names and headlines speak in the display serif; everything meant to orient or label speaks in the small-caps label voice; everything meant to be read at length speaks in the plain sans. No element mixes registers — a dish name is never set in label caps, a nav pill is never set in body sans.

## Layout

Content sits in a single centered container (`max-width: 1180px`, `padding-inline: 24px`). Sections carry large, consistent vertical rhythm — 96px of padding above and below every section — so the page reads as a series of distinct rooms rather than a continuous scroll. Internal component spacing steps through a six-value scale (8 / 16 / 24 / 40 / 64 / 96px): the smallest values separate elements within a component (icon-to-label gaps, chip padding), the middle value is the default stack/inline gap, and the largest two govern spacing between a section's internal blocks and between sections themselves.

Grids are mobile-first and promote at two breakpoints: **600px** (events and press quotes go 2-up, the gallery goes 3-up, the menu's signature-dish layout goes side-by-side) and **900px** (the full nav becomes visible and the mobile action bar disappears, quotes go 3-up, and the About/Visit/Bier sections split into two explicit columns). Below 900px, a fixed bottom action bar (Call / Reserve) replaces the header's reserve button as the primary conversion point.

## Elevation & Depth

Flat by design — there are no drop shadows anywhere in the system except a single 3px glow ring on the "open now" status dot, which is a live-state pulse, not a depth cue. Depth is conveyed two ways instead: a single background step (Dusk Timber → Timber Shadow) for anything that needs to read as "a surface," and 1px hairline borders in Timber Grain or Timber Grain Soft to separate regions without lifting them. A frosted-glass treatment (`backdrop-filter: blur` over a translucent Dusk Timber fill) is reserved specifically for chrome that floats over scrolling content — the sticky nav once scrolled past the hero, the status pill, the sticky menu-section nav, the mobile action bar, and the event ribbon. It never appears on in-flow cards or content.

### Named Rules
**The No-Shadow Rule.** Depth is structural (border + one background step), never simulated (box-shadow). The glass-blur treatment is the one exception, and it's reserved for fixed/sticky chrome only — never for cards or content blocks.

## Shapes

Two corner languages, used deliberately: a near-square **2px radius** on every structural container — buttons, cards, event/quote cards, photo frames, the seasonal-closure note — and a **full pill (100px)** on anything functioning as a tag or a piece of wayfinding — the status pill, sticky menu-section nav links, and dietary/attribute chips. A plain **circle (50%)** is reserved for indicator dots only (the open/closed status dot, the "today" marker in the hours table). Borders are always a 1px hairline; nothing in the system uses a heavier stroke.

## Components

### Buttons
- **Shape:** Sharp, near-square corners (2px radius) — never pill-shaped.
- **Primary:** Alpenglow Amber fill, Dusk Ink text, `12px 22px` padding, 44px minimum tap height.
- **Hover / Focus:** Primary brightens to Alpenglow Amber Bright and lifts 1px on hover; all interactive states transition on the system's standard ease (`cubic-bezier(.22,.61,.36,1)`).
- **Ghost:** Transparent fill, Timber Grain border, Warm Ivory text; on hover the border turns amber and a faint amber wash (10% opacity) fills the background. Used for secondary actions (Call, Directions) beside a primary Reserve button.

### Chips (dietary / attribute tags)
- **Style:** Full pill, transparent background, 1px Timber Grain border, Faint Alpenglow text, `.75rem` size.
- **State:** A "limited/signature" variant swaps the border to Amber Ember and the text to Alpenglow Amber. An "add-on" variant uses a dashed border instead of solid.

### Cards / Containers
- **Corner Style:** Sharp (2px radius).
- **Background:** Timber Shadow, one step above the page ground.
- **Shadow Strategy:** None — see Elevation & Depth. Emphasis states (an event that's on-now or coming soon) are signaled by border color, not shadow or lift.
- **Border:** 1px, Timber Grain Soft at rest; amber or amber-dim when a card is in an emphasized state.
- **Internal Padding:** 40px (s4).

### Navigation
- **Top nav:** Transparent over the hero, transitions to a blurred, translucent Dusk Timber bar with a hairline bottom border once the page scrolls. Links are Muted Alpenglow at rest, Warm Ivory on hover; no underline.
- **Menu section nav:** A horizontally-scrolling row of label-voice pills that sticks below the main nav; the active section's pill gets a filled border and Timber Shadow background via scroll-spy.
- **Mobile:** Below 900px, the top nav's Reserve button is replaced as the primary action by a fixed bottom bar (Call / Reserve) that slides in once the visitor scrolls past ~70% of the viewport height.

### The Haus Glyph (signature)
A hand-drawn, single-color line/fill SVG mark — a stylized alpine roofline over a simplified pretzel silhouette — used as the brand mark in the nav and repeated (in outline form) as the divider glyph between major sections. It's the one illustrative element in an otherwise typographic, photography-led system, and it should not be redrawn in a different style elsewhere on the site.

## Do's and Don'ts

### Do:
- **Do** keep German vocabulary (Vorspeisen, Hauptgericht, Käse, etc.) in the small-caps label voice — it's a deliberate texture, not a translation gap.
- **Do** measure any new text/background pairing against the Verified Contrast Rule's numbers before shipping it.
- **Do** use the pill shape only for tags and wayfinding, and the sharp 2px shape for everything structural — mixing them reads as an error, not a variant.
- **Do** reserve the frosted-glass/blur treatment for fixed or sticky chrome only.

### Don't:
- **Don't** introduce a second accent color for emphasis — Alpenglow Amber is the only "look here" color in the system.
- **Don't** use Reserved Lozenge Blue as a text color, or as a large fill, without re-measuring contrast against its actual background.
- **Don't** add drop shadows to cards, images, or buttons — depth here is border + tonal step only.
- **Don't** reintroduce clip-art Bavarian imagery, novelty "Oktoberfest" display fonts, or a tiled lozenge/diamond background — all three were explicitly rejected for this system.
- **Don't** refer to the business as anything other than "Himmel Haus" — no other name is confirmed by any source.
