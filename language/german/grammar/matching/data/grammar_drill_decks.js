/* grammar-drill_deck.js
   Super Easy Verb + Preposition + Wo/Da Forms (Verb-linked)
*/

(function () {
  window.DRILL_DECKS = window.DRILL_DECKS || {};
  window.DRILL_DECKS_META = window.DRILL_DECKS_META || {};

  const DECK_KEY = "GRAMMAR_DRILL_PREPOSITION";

  window.DRILL_DECKS_META[DECK_KEY] = {
    title: "Grammar Drill: Verb + Preposition (Wo/Da)",
    category: "grammar-drill",
    level: "easy",
    mechanic: "match",
    description: "Match verb-preposition combinations and their wo/da forms."
  };

  window.DRILL_DECKS[DECK_KEY] = [

    { id: "WO-DA-001", de: "warten", en: "auf", kind:"prep", tag:"verb-prep" },
    { id: "WO-DA-002", de: "hoffen", en: "auf", kind:"prep", tag:"verb-prep" },
    { id: "WO-DA-003", de: "verzichten", en: "auf", kind:"prep", tag:"verb-prep" },
    { id: "WO-DA-004", de: "reagieren", en: "auf", kind:"prep", tag:"verb-prep" },
    { id: "WO-DA-005", de: "sich kümmern", en: "um", kind:"prep", tag:"verb-prep" },
    { id: "WO-DA-006", de: "bitten", en: "um", kind:"prep", tag:"verb-prep" },
    { id: "WO-DA-007", de: "sich interessieren", en: "für", kind:"prep", tag:"verb-prep" },
    { id: "WO-DA-008", de: "sich entscheiden", en: "für", kind:"prep", tag:"verb-prep" },


  ];

})();
