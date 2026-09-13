# Zak's Himmel Haus — concept redesign

**This is unsolicited spec work.** Himmel Haus is a real German/Bavarian restaurant and bierhaus at 3819 Saddle Road, South Lake Tahoe, CA. They are a prospective client — not a signed one — and this repo is a self-directed redesign built to demonstrate front-end and design-system thinking, not a commissioned deliverable. Their actual site is [himmelhausslt.com](https://www.himmelhausslt.com/), which stays canonical everywhere in this project (see `<link rel="canonical">` in `index.html`, `robots.txt`, and the on-page disclosure banner).

**The live demo is password-gated.** It's a portfolio piece shared by direct link, not something meant to rank in search or be mistaken for the real site.

## Stack

Static HTML + CSS + vanilla JS. No framework, no build step, no database, no client-side router. The only Node dependency (`@vercel/functions`) exists solely so `middleware.ts` can gate the deployed site with HTTP Basic Auth — it plays no role in the page itself.

## Why static, on purpose

A restaurant site is almost entirely read-only, image-heavy content — hours, menu, events, directions. Reaching for a framework here would trade nothing for something: no data layer, no client state, no interactivity beyond a status pill, a scroll-spy nav, and an event countdown. Plain HTML/CSS/JS keeps the page weight and mental overhead as small as the problem actually is.

## Decisions worth defending

- **Dark palette with programmatically verified WCAG ratios.** Every text/background pairing in the system ([`design-system/MASTER.md`](design-system/MASTER.md)) was measured, not eyeballed — including two pairings that were tried and explicitly rejected (bone-on-amber at 2.46:1, an earlier `--faint` candidate at 4.42:1) because they failed contrast. The rule is enforced in the doc, not just in one file.
- **A structured HTML menu instead of a PDF.** The full menu is real markup and also drives the `Menu`/`MenuSection`/`MenuItem` JSON-LD block — a PDF menu is common in this space and is invisible to search and screen readers alike.
- **A date-driven event system that promotes and retires itself.** Events (Trivia Night, Oktoberfest) are plain data; a small script computes "on now" / "coming in N days" / past-and-hidden state from the current date, so nobody has to manually take down a stale event banner after it ends.
- **A photo grading pipeline.** The seven hero/gallery photos went through a consistent tonal grade to match the "Alpenglow at Altitude" palette (near-black timber ground, one warm amber accent) instead of shipping mismatched, ungraded source photos next to a bespoke color system.
- **Restaurant + Menu + Event JSON-LD**, all in one block, matching the real NAP (name/address/phone) and the real SevenRooms reservation link — so the structured data models what a working, launchable site would actually ship, not a mocked-up placeholder.

## Access

The production deployment is gated with HTTP Basic Auth at the edge (`middleware.ts`, no exclusions — every route, asset, and `robots.txt` itself requires the password). Vercel is on the Hobby plan, which doesn't include built-in Deployment Protection, so this is a from-scratch edge-middleware gate rather than a dashboard toggle. Credentials were shared with whoever requested access to this repo/demo — they are not published here or committed anywhere in this repository.

## Spec-work labelling

Because this targets a real, non-consenting business, the whole site is marked as concept work at every level search engines or a visitor could find it:

- `noindex, nofollow` on the page
- `robots.txt` disallowing all crawlers
- `<link rel="canonical">` pointing at the real himmelhausslt.com
- A small dismissible on-page notice: *"Concept redesign · not affiliated with or endorsed by Zak's Himmel Haus. Visit the official site →"*, linking out to the real site

The phone number and SevenRooms reservation link in this repo are real and intentionally left live and unmodified — faking or disabling them would misrepresent what a finished version of this design would actually do.
