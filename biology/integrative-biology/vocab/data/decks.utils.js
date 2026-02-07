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
