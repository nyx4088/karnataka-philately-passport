# Backlog: Untranslated Content

## Share-card text (English only)
**Location:** Canvas-drawn text in `shareCard()` function (app.js L1712-1794)

**Current English text:**
- "MY PHILATELY JOURNEY"
- "of 100 post offices"
- "+{n} more stamp(s) collected"
- "STAMPQUEST"

**Why not translated:** The canvas uses Fraunces and DM Sans fonts. The self-hosted Noto Sans Kannada subset (`fonts/notosans-kannada-subset.woff2`, 40KB) only covers the Kannada Unicode range U+0C80–U+0CFF plus basic Latin. Canvas text rendering with mixed fonts is unreliable — we'd need to:
1. Load the Kannada font via `document.fonts.load()` before drawing
2. Switch font family mid-draw for Kannada text
3. Test glyph coverage for all strings

**Proposal:** Add Kannada share-card text using the same STRINGS table. Before drawing, ensure the Kannada font is loaded:
```js
await document.fonts.load('16px "Noto Sans Kannada"');
```
Then use `t('share.heading')` etc. with font fallback: `"Fraunces", "Noto Sans Kannada", sans-serif`. Test with a real Kannada string to verify glyphs render.

**Effort:** Medium. Requires font loading + testing.

---

## Location facts and nearby places (English only)
**Location:** 100 records in LOCATIONS array, `fact` and `nearby` fields

**Example:**
- fact: "Aihole was the first capital of the Early Chalukyas..."
- nearby: ["Durga Temple complex", "Lad Khan Temple", "Meguti Jain Temple"]

**Why not translated:** These are editorial content, not UI strings. Accurate translation requires:
1. Domain knowledge (temple names, historical terms in Kannada)
2. Verification (is "Durga Temple complex" ದುರ್ಗಾ ದೇವಸ್ಥಾನ ಸಂಕೀರ್ಣ or something else?)
3. 100 records × 2 fields = 200 translations

**Proposal (phased):**
1. **Phase 1:** Translate `nearby` place names (short, mostly proper nouns). Many are already known in Kannada (e.g., "Mysuru Palace" → ಮೈಸೂರು ಅರಮನೆ).
2. **Phase 2:** Translate `fact` sentences. These are longer and need careful translation to preserve meaning.
3. **Verification:** Have a Kannada-speaking reviewer check a sample before full rollout.

**Alternative:** Keep facts/nearby in English with a note: "Descriptions in English; Kannada coming soon." This is honest and avoids inaccurate translations.

**Effort:** High. 200 strings, needs reviewer.

---

## Recommendation
Do share-card Kannada first (visible, high-impact, medium effort). Defer facts/nearby until a reviewer is available — inaccurate translations are worse than English.
