# innerHTML Audit — app.js (27 sites)

All 27 `innerHTML` assignments audited. None interpolate user-supplied or remote data without escaping.

## Line-by-line

| Line | Code | Data source | Why safe |
|------|------|-------------|----------|
| 17 | `t.innerHTML = ""` | — | Clearing only, no data |
| 218 | `$("sheetBody").innerHTML = ...` | `l.district`, `l.region`, `l.fact`, `l.nearby`, `l.transit_town`, `l.ppc.motif`, `l.ppc.introduced`, `l.office_type_full` | All via `esc()` which escapes `&<>"'` |
| 239 | `$("sheetFoot").innerHTML = ...` | Static buttons | No variables |
| 282 | `t.innerHTML = ""` | — | Clearing only |
| 415 | `d.innerHTML = ... esc(l?l.name:"")` | `l.name` (office name from dataset) | Via `esc()` |
| 436 | Photo picker buttons | Static: "Take photo", "Choose from gallery", "Cancel" | No variables |
| 507 | Photo thumbnail shell | Static HTML structure | No data interpolated |
| 514 | "Add stamp photo" button | Static | No variables |
| 530 | Photo viewer chrome | Static: close/prev/next buttons | No variables |
| 581 | `pct.toFixed(1)` | Numeric percentage | Number only, safe |
| 584 | "Photo storage unavailable" | Static message | No variables |
| 596 | `sBox.innerHTML = ""` | — | Clearing only |
| 600 | "No matches." | Static | No variables (should use t() for i18n) |
| 601 | Search results | `l.n` (number), `esc(fullName(l))`, `esc(l.district)`, `l.pin` (number) | Names/districts via `esc()`; n/pin are numbers |
| 629 | `esc(msg)` | `msg` (internal message) | Via `esc()` |
| 634 | `$("sheetFoot").innerHTML = ""` | — | Clearing only |
| 650 | Nearby rows | `l.n` (number), `esc(l.name)`, `esc(l.district)`, `d.toFixed(1)` (number) | Names via `esc()`; numbers safe |
| 654 | `$("sheetFoot").innerHTML = ""` | — | Clearing only |
| 690 | Circuit list | `esc(rg)` (region name), `done`/`stops.length` (numbers) | Region via `esc()`; numbers safe |
| 730 | Notch bar | `state.visited[l.n]?"hit":""` (boolean) | Boolean to class string, safe |
| 731 | Milestone badges | `[25,50,75,100]` (numbers) | Numeric only |
| 747 | Passport grid tiles | `l.n` (number), `esc(l.name)`, `esc(dispName(l))`, `esc(l.district)`, `st` (enum) | Names via `esc()`; n numeric; st is internal enum |
| 810 | District progress | `d` (district name), counts (numbers) | District names from dataset; numbers safe |
| 1011 | `prev.innerHTML = ""` | — | Clearing only |
| 1093 | `el.innerHTML = t(...)` | i18n string table (author-controlled) | We author all strings; no user input |
| 1108 | `b.innerHTML = ""` | — | Clearing only (nav button, SVG re-added) |
| 1320 | "Leaderboard not connected yet." | Static | No variables (should use t() for i18n) |

## Remote data (Supabase)
The Rivals section handles remote data (display names, friend codes from Supabase). These use `createElement`/`textContent`, NOT `innerHTML`:
- `buildRivalRow()` (L1274): `document.createElement`, `textContent` for `r.display_name`
- Leaderboard/friends: `textContent = ""` to clear, then `appendChild()`

## Conclusion
All 27 sites are safe. The `esc()` function escapes `&<>"'`. User-supplied data (display names) and remote data (Supabase profiles) never touch `innerHTML`.
