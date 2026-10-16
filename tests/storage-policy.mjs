// Storage policy tests for quest-photos bucket
// Run: node tests/storage-policy.mjs
// Uses the app's anon key, signs in anonymously, tests each policy case,
// then cleans up everything it created.

import { createClient } from '@supabase/supabase-js';

const SB_URL = "https://cpygucvkxnvghpxyqqjr.supabase.co";
const SB_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNweWd1Y3ZreG52Z2hweHlxcWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxMTU4NTQsImV4cCI6MjEwNzY5MTg1NH0.28JaSAVtjzjPwLm93E4ToOzYU75Q1DkG0rkihE3Rm44";

const sb = createClient(SB_URL, SB_ANON);

// Minimal valid JPEG (1x1 pixel)
function makeJpeg(sizeKB) {
  // JPEG SOI + minimal JFIF + EOI, padded to sizeKB
  const header = Buffer.from([
    0xFF, 0xD8, 0xFF, 0xE0, 0x00, 0x10, 0x4A, 0x46, 0x49, 0x46, 0x00, 0x01,
    0x01, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0xFF, 0xD9
  ]);
  const pad = Buffer.alloc(sizeKB * 1024 - header.length, 0);
  return Buffer.concat([header, pad]);
}

// Minimal PNG (1x1)
function makePng() {
  return Buffer.from([
    0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A,
    0x00, 0x00, 0x00, 0x0D, 0x49, 0x48, 0x44, 0x52,
    0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
    0x08, 0x02, 0x00, 0x00, 0x00, 0x90, 0x77, 0x53, 0xDE
  ]);
}

let passed = 0, failed = 0;
function check(name, condition, detail = "") {
  if (condition) { passed++; console.log(`✓ ${name}`); }
  else { failed++; console.log(`✗ ${name} ${detail}`); }
}

async function main() {
  // Sign in anonymously
  const { data: { user }, error: authErr } = await sb.auth.signInAnonymously();
  if (authErr || !user) {
    console.log("✗ Anonymous sign-in failed:", authErr?.message);
    process.exit(1);
  }
  const uid = user.id;
  console.log(`Signed in as ${uid}\n`);

  const bucket = sb.storage.from("quest-photos");
  const smallJpeg = makeJpeg(100);  // 100 KB valid JPEG
  const bigJpeg = makeJpeg(1024);   // 1 MB JPEG (over 256KB limit)
  const png = makePng();

  // 1. 1MB JPEG should be rejected (over 262144 byte limit)
  const r1 = await bucket.upload(`${uid}/5.jpg`, bigJpeg, { contentType: "image/jpeg" });
  check("1MB JPEG rejected", !!r1.error, r1.error?.message || "(uploaded!)");

  // 2. PNG should be rejected (not image/jpeg)
  const r2 = await bucket.upload(`${uid}/5.png`, png, { contentType: "image/png" });
  check("PNG rejected", !!r2.error, r2.error?.message || "(uploaded!)");

  // 3. "x.jpg" (wrong path format) should be rejected
  const r3 = await bucket.upload(`x.jpg`, smallJpeg, { contentType: "image/jpeg" });
  check("x.jpg path rejected", !!r3.error, r3.error?.message || "(uploaded!)");

  // 4. Valid <uid>/5.jpg should succeed
  const r4 = await bucket.upload(`${uid}/5.jpg`, smallJpeg, { contentType: "image/jpeg" });
  check("Valid uid/5.jpg succeeds", !r4.error, r4.error?.message || "");

  // 5. Replace with upsert should succeed
  const r5 = await bucket.upload(`${uid}/5.jpg`, smallJpeg, { contentType: "image/jpeg", upsert: true });
  check("Upsert replace succeeds", !r5.error, r5.error?.message || "");

  // 6. Upload to another user's folder should be rejected
  const otherUid = "00000000-0000-0000-0000-000000000000";
  const r6 = await bucket.upload(`${otherUid}/5.jpg`, smallJpeg, { contentType: "image/jpeg" });
  check("Other user's folder rejected", !!r6.error, r6.error?.message || "(uploaded!)");

  // 7. remove() should work on own file
  const r7 = await bucket.remove([`${uid}/5.jpg`]);
  check("remove() works", !r7.error, r7.error?.message || "");

  // Cleanup: sign out (deletes anonymous user)
  await sb.auth.signOut();
  console.log(`\n${passed} passed, ${failed} failed`);
  process.exit(failed ? 1 : 0);
}

main().catch(e => { console.error("Fatal:", e.message); process.exit(1); });
