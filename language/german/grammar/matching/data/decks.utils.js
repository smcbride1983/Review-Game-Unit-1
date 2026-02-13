// vocab/data/decks.utils.js
// Shared helpers for working with decks in decks.js
// Requires decks.js to be loaded first (DECKS global)

/* ----------------------------
   BASIC DECK HELPERS
---------------------------- */

function getDeck(name) {
  return Array.isArray(DECKS[name]) ? DECKS[name] : [];
}

function listDecks() {
  return Object.keys(DECKS);
}

/**
 * Remove duplicate term/definition pairs from a deck.
 * Safely ignores malformed entries.
 *
 * @param {Array} list - array of { de, en } objects
 * @returns {Array} deduplicated array
 */
function dedupePairs(list) {
  const seen = new Set();
  const out = [];

  for (const item of list || []) {
    if (!item || typeof item.de !== "string" || typeof item.en !== "string") {
      continue;
    }
    const key = `${item.de}|||${item.en}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }

  return out;
}

/**
 * Get up to N random cards, optionally filtered
 * @param {Array} deck
 * @param {Object} options
 * @param {number} options.count
 * @param {Function} options.filterFn
 */
function getRandomCards(deck, { count = 20, filterFn = null } = {}) {
  if (!Array.isArray(deck)) {
    throw new Error("Deck must be an array");
  }

  let pool = [...deck];
  if (filterFn) pool = pool.filter(filterFn);

  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return pool.slice(0, Math.min(count, pool.length));
}

/**
 * Wire a reshuffle button to rerun a render function with a fresh sample.
 * @param {string} buttonId
 * @param {Function} drawFn - should redraw the UI
 */
function attachReshuffle(buttonId, drawFn) {
  const btn = document.getElementById(buttonId);
  if (!btn) return; // game might not have the button
  btn.addEventListener("click", () => drawFn());
}

/* ----------------------------
   TRACKER (LOCALSTORAGE)
   - Works across all games
   - Keyed by card.id
---------------------------- */

const TRACKER_STORAGE_KEY = "qa_tracker_v1";

/**
 * Data shape in localStorage:
 * {
 *   [id]: { attempts: number, correct: number, lastTs: number }
 * }
 */
function _loadTracker() {
  try {
    return JSON.parse(localStorage.getItem(TRACKER_STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function _saveTracker(obj) {
  localStorage.setItem(TRACKER_STORAGE_KEY, JSON.stringify(obj));
}

/**
 * Ensure card has an id; if not, returns null.
 */
function _cardId(card) {
  return card && typeof card.id === "string" && card.id.trim() ? card.id.trim() : null;
}

/**
 * Record a graded attempt for a card.
 * Call this ONLY when the learner actually submits an answer
 * (not when they skip, reshuffle, etc).
 *
 * @param {string|Object} cardOrId - card object with id OR id string
 * @param {boolean} isCorrect
 */
function recordAttempt(cardOrId, isCorrect) {
  const id = (typeof cardOrId === "string") ? cardOrId : _cardId(cardOrId);
  if (!id) return;

  const t = _loadTracker();
  const cur = t[id] || { attempts: 0, correct: 0, lastTs: 0 };

  cur.attempts += 1;
  if (isCorrect) cur.correct += 1;
  cur.lastTs = Date.now();

  t[id] = cur;
  _saveTracker(t);
}

/**
 * Get stats for a single card id.
 * @returns { attempts, correct, pct (0..1 or null), lastTs }
 */
function getStats(cardOrId) {
  const id = (typeof cardOrId === "string") ? cardOrId : _cardId(cardOrId);
  const t = _loadTracker();
  const cur = (id && t[id]) ? t[id] : { attempts: 0, correct: 0, lastTs: 0 };
  const pct = cur.attempts ? (cur.correct / cur.attempts) : null;
  return { ...cur, pct };
}

/**
 * Summarize performance across a whole deck.
 * @param {Array} deck - list of cards with id
 * @returns { attempts, correct, pct (0..1 or null), covered }
 */
function getDeckPerformance(deck) {
  const t = _loadTracker();
  let attempts = 0, correct = 0, covered = 0;

  for (const card of deck || []) {
    const id = _cardId(card);
    if (!id) continue;
    const s = t[id];
    if (!s) continue;

    covered += 1;
    attempts += s.attempts || 0;
    correct += s.correct || 0;
  }

  return {
    attempts,
    correct,
    pct: attempts ? (correct / attempts) : null,
    covered
  };
}

/* ----------------------------
   WEAK CONCEPT HELPERS
---------------------------- */

/**
 * Return the weakest cards in a deck (lowest accuracy),
 * optionally requiring a minimum number of attempts to avoid noise.
 *
 * @param {Array} deck
 * @param {Object} options
 * @param {number} options.limit
 * @param {number} options.minAttempts
 * @param {boolean} options.includeUnseen - if true, includes unseen cards with pct = null at the top
 * @returns {Array} array of { card, attempts, correct, pct }
 */
function getWeakCards(deck, { limit = 10, minAttempts = 2, includeUnseen = true } = {}) {
  const t = _loadTracker();
  const rows = [];

  for (const card of deck || []) {
    const id = _cardId(card);
    if (!id) continue;

    const s = t[id];
    if (!s) {
      if (includeUnseen) rows.push({ card, attempts: 0, correct: 0, pct: null });
      continue;
    }

    const pct = s.attempts ? (s.correct / s.attempts) : null;
    if ((s.attempts || 0) < minAttempts) continue;
    rows.push({ card, attempts: s.attempts, correct: s.correct, pct });
  }

  rows.sort((a, b) => {
    // unseen first if enabled
    if (a.pct === null && b.pct !== null) return -1;
    if (a.pct !== null && b.pct === null) return 1;
    // then lowest pct
    if (a.pct !== b.pct) return a.pct - b.pct;
    // tie-break: more attempts first (more evidence)
    return (b.attempts || 0) - (a.attempts || 0);
  });

  return rows.slice(0, Math.min(limit, rows.length));
}

/**
 * Aggregate accuracy by tag (concept area).
 * Cards without a tag go into "Untagged".
 *
 * @param {Array} deck
 * @param {Object} options
 * @param {number} options.minAttemptsPerTag - ignore tags with too little data
 * @returns {Array} array of { tag, attempts, correct, pct, cardsCovered }
 */
function getWeakTags(deck, { minAttemptsPerTag = 5 } = {}) {
  const t = _loadTracker();
  const agg = {};

  for (const card of deck || []) {
    const id = _cardId(card);
    if (!id) continue;

    const tag = (card && typeof card.tag === "string" && card.tag.trim()) ? card.tag.trim() : "Untagged";
    const s = t[id];
    if (!s || !s.attempts) continue;

    if (!agg[tag]) agg[tag] = { tag, attempts: 0, correct: 0, cardsCovered: 0 };
    agg[tag].attempts += s.attempts;
    agg[tag].correct += s.correct;
    agg[tag].cardsCovered += 1;
  }

  const out = Object.values(agg)
    .map(r => ({ ...r, pct: r.attempts ? (r.correct / r.attempts) : null }))
    .filter(r => (r.attempts || 0) >= minAttemptsPerTag);

  out.sort((a, b) => (a.pct ?? 1) - (b.pct ?? 1)); // lowest first
  return out;
}

/**
 * Convenience: build a filter function for study mode.
 * Example: only show cards in weakest tags.
 *
 * @param {Array<string>} tags
 * @returns {Function} filterFn(card) => boolean
 */
function makeTagFilter(tags) {
  const set = new Set((tags || []).map(s => String(s)));
  return (card) => set.has(String(card.tag || "Untagged"));
}

/* ----------------------------
   TRACKER MAINTENANCE
---------------------------- */

function resetTracker() {
  localStorage.removeItem(TRACKER_STORAGE_KEY);
}

function exportTracker() {
  return localStorage.getItem(TRACKER_STORAGE_KEY) || "{}";
}

function importTracker(jsonString) {
  try {
    const obj = JSON.parse(jsonString);
    if (!obj || typeof obj !== "object") throw new Error("Invalid tracker JSON");
    localStorage.setItem(TRACKER_STORAGE_KEY, JSON.stringify(obj));
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

/* ----------------------------
   OPTIONAL: expose utilities globally
   (so older non-module games can call them)
---------------------------- */

window.DECK_UTILS = {
  // existing helpers
  getDeck,
  listDecks,
  dedupePairs,
  getRandomCards,
  attachReshuffle,

  // tracker
  recordAttempt,
  getStats,
  getDeckPerformance,

  // weak concept helpers
  getWeakCards,
  getWeakTags,
  makeTagFilter,

  // maintenance
  resetTracker,
  exportTracker,
  importTracker
};
