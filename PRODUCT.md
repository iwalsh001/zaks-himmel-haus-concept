# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML + CSS + vanilla JS. No framework, no build step, no database — chosen for a content-heavy, mostly-static restaurant site where fast LCP and zero-JS-framework overhead matter more than componentization.

## Users

Primary: diners and visitors to South Lake Tahoe — the après-ski crowd, tourists, and locals — looking for German/Bavarian food and an extensive German/Belgian beer selection. Best fit for big groups, quality beer, and casual drinks with light bites. Secondary: returning guests checking hours/menu before a visit, and prospective private-event bookers.

## Product Purpose

Himmel Haus is a German/Bavarian restaurant and bierhaus in South Lake Tahoe, CA, serving Bavarian-inspired food with a California twist alongside one of the largest German/Belgian beer and wine lists in the region. The site's job is to drive reservations (via SevenRooms), inform visitors of hours/menu/events, and let the beer list function as the site's standout content asset.

## Positioning

"One of the best German restaurants in South Lake Tahoe, CA and possibly the state" — differentiated primarily by its ~60+ SKU German/Belgian/Trappist beer and cider list (draft, bottled, sours, GF options) alongside a genuine Bavarian menu with a contemporary California twist, in an alpine/Black Forest atmosphere. Press coverage (NYT Travel, The Infatuation) frames it as an après-ski destination with authentic beers and Black Forest décor.

## Operating Context

- Indoor dining via SevenRooms reservations; outdoor heated patio is first-come, first-served (no reservations)
- Takeout available by phone (no online ordering platform currently)
- Weekly Trivia Night (Wednesdays, 9pm) and seasonal Oktoberfest (mid/late Sept–early Oct) are recurring events
- Hosts private/large parties informally today — no dedicated inquiry form exists yet (gap)
- Mobile-heavy traffic, often on weak mountain-area signal — mobile performance matters

## Capabilities and Constraints

- Reservations are handled externally via SevenRooms (embed or deep link required)
- Menu and beer/wine list must be structured data, not a PDF/image (Menu/MenuSection/MenuItem schema)
- LocalBusiness/Restaurant JSON-LD required: NAP, hours (with seasonal overrides), geo, priceRange, servesCuisine: German, acceptsReservations
- NAP must be identical everywhere for local SEO (see Evidence for the confirmed values)
- Legacy Wix paths should redirect to their modern equivalents (see Evidence for the mapping)
- Undecided, do not invent: online ordering platform, gift cards/merch/catering, newsletter platform, careers page
- Undecided: whether current menu prices are still accurate — flagged for owner verification

## Brand Commitments

- Name: Himmel Haus — a German/Bavarian restaurant + bierhaus
- German vocabulary used deliberately for flavor: Vorspeisen, Wurst, Hauptgericht, Kindermenü, Bier/Wein, Haus, Spätzle, Käse, Rotkohl, Jäger, Schweinshaxe, Sauerbraten, Schnitzel, Apfelschorle
- Design direction seeds volunteered by the user (binding, recorded without expansion): dark timber + warm candlelight; Black Forest/alpine lodge feel; Bavarian blue-and-white lozenge used sparingly as accent, never as wallpaper; a bold condensed display face for German words paired with a highly legible humanist sans for body; brass/amber as the accent color. Explicitly avoid: clip-art lederhosen, novelty "Oktoberfest" fonts, tiled diamond backgrounds.
- Existing logo and brand assets are available (Wix CDN originals to be re-pulled at highest resolution) — see Evidence
- Current footer reads "© 2023 by THE PUB. Proudly created with Wix.com" — must be replaced

## Evidence on Hand

- Full verbatim food menu, beer/wine list, events, press quotes, and asset inventory captured from the live site at /Users/ianwalsh/Downloads/core.md (source: himmelhausslt.com, captured 2026-08-24) — not yet copied into the project
- NAP: 3819 Saddle Road, South Lake Tahoe, CA 96150 · (530) 314-7665 · himmelbookings@gmail.com · geo 38.937268, -119.940902
- Hours as currently published (needs owner confirmation before launch): Mon–Thu 4–9pm, Fri–Sat 12–10pm, Sun 12–9pm; seasonal closures apply (e.g. closed Mon/Tue Apr 13–May 19)
- Reservations: SevenRooms — https://www.sevenrooms.com/explore/himmelhaus/reservations/create/search/
- Social/review presence: Facebook (facebook.com/himmelhausslt), Yelp (~4.5★, ~2,043 reviews), TripAdvisor; Instagram/TikTok handles NOT found — do not fabricate
- Press quotes on record: New York Times (Travel), The Infatuation (Tahoe) — verbatim text in core.md
- Existing photography and logo are hosted on Wix CDN (static.wixstatic.com); file list in core.md §10 — need re-download and re-optimization; no high-res or vector logo confirmed yet
- Leadership names/bios exist on a legacy domain but are explicitly UNVERIFIED — do not publish until confirmed
- Explicit absences future work must not fabricate: no dessert menu found on the current site, no confirmed online ordering platform, no confirmed current ownership/management, no confirmed Instagram/TikTok handles, no vector logo confirmed, vegan sausage availability/price unconfirmed

## Product Principles

1. The beer/bier list (~60+ SKUs) is the strongest content asset and differentiator — treat it as a first-class, filterable feature, not an afterthought.
2. Structured data and mobile performance are non-negotiable: this is a mobile-heavy, weak-signal audience, and schema markup drives real bookings via local search.
3. Preserve authentic German identity (vocabulary, Bavarian menu, alpine/Black Forest atmosphere) while allowing the "contemporary California twist" — never drift into kitsch or clip-art Oktoberfest tropes.
4. Never invent facts the source material doesn't confirm (hours, leadership, desserts, social handles, current pricing) — flag gaps for the owner instead of guessing.
5. Reservations and contact must be frictionless on mobile — sticky call/reserve action, clear SevenRooms path.

## Accessibility & Inclusion

WCAG 2.2 AA contrast is an explicit requirement, flagged as a real risk given the intended dark alpine/timber palette — verify contrast during design, not only at final audit.
