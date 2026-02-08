// vocab/data/decks.utils.js
// Shared helpers for working with decks in decks.js
// Requires decks.js to be loaded first (DECKS global)

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

  if (filterFn) {
    pool = pool.filter(filterFn);
  }

  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return pool.slice(0, Math.min(count, pool.length));
}
