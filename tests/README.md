# StampQuest Playwright smoke suite

Regression tests for https://nyx4088.github.io/karnataka-philately-passport/ (Stage 3, task I).

## What it covers (`smoke.spec.js`)

| # | Test |
|---|------|
| 1 | Page loads with **zero JS errors** — every test collects `pageerror` + `console.error` and fails if any fire |
| 2 | All 5 tabs (Explore, Circuits, Passport, Rivals, Settings) switch: nav button gets `.on`, exactly one `.view.active` |
| 3 | Map renders: at least one Leaflet tile attaches **and** finishes loading (`naturalWidth > 0`) |
| 4 | Search for "Badami" returns result buttons containing "Badami" |
| 5 | Passport grid renders exactly **100** tiles (`#tileGrid .tile`), incl. tiles 1 and 100 |
| 6 | Kannada toggle switches nav labels (Explore → ಅನ್ವೇಷಣೆ), then restores English |
| 7 | Rivals tab leaves the "Loading…" state (leaderboard / empty-state / offline note all count) |
| 8 | Settings toggles exist as checkboxes; **share-photos is OFF by default**; theme toggle round-trips light → dark → light |

Mobile viewport 390×844 (touch) — the app is phone-first.

## Run

```bash
cd ~/workspace/philately-passport/tests
npm install          # one-time
npx playwright install chromium   # one-time: downloads the browser

npm test             # headless, against the live site
npm run test:headed  # watch it run
```

Against a local copy (e.g. after edits, before deploy):

```bash
cd ~/workspace/philately-passport/site && python3 -m http.server 8080
# in another shell:
cd ~/workspace/philately-passport/tests && npm run test:local
```

Or point at any URL: `BASE_URL=https://example.com npx playwright test`

## Notes

- Tests need network: OSM map tiles and Supabase must be reachable. If Supabase is down, test 7 still passes (the app shows its offline note instead of hanging on "Loading…").
- Language/theme toggles write to `localStorage`; each test restores English + light theme in `afterEach` so runs are repeatable and the profile is left clean.
- Report: `npx playwright show-report` after a run.
