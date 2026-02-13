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

    // warten auf
    { id: "WO-DA-001", de: "warten", en: "auf", kind:"prep", tag:"verb-prep" },
    { id: "WO-DA-002", de: "warten", en: "worauf", kind:"wo", tag:"wo-form" },
    { id: "WO-DA-003", de: "warten", en: "darauf", kind:"da", tag:"da-form" },

    // hoffen auf
    { id: "WO-DA-004", de: "hoffen", en: "auf", kind:"prep", tag:"verb-prep" },
    { id: "WO-DA-005", de: "hoffen", en: "worauf", kind:"wo", tag:"wo-form" },
    { id: "WO-DA-006", de: "hoffen", en: "darauf", kind:"da", tag:"da-form" },

    // verzichten auf
    { id: "WO-DA-007", de: "verzichten", en: "auf", kind:"prep", tag:"verb-prep" },
    { id: "WO-DA-008", de: "verzichten", en: "worauf", kind:"wo", tag:"wo-form" },
    { id: "WO-DA-009", de: "verzichten", en: "darauf", kind:"da", tag:"da-form" },

    // reagieren auf
    { id: "WO-DA-010", de: "reagieren", en: "auf", kind:"prep", tag:"verb-prep" },
    { id: "WO-DA-011", de: "reagieren", en: "worauf", kind:"wo", tag:"wo-form" },
    { id: "WO-DA-012", de: "reagieren", en: "darauf", kind:"da", tag:"da-form" },

    // sich kümmern um
    { id: "WO-DA-013", de: "sich kümmern", en: "um", kind:"prep", tag:"verb-prep" },
    { id: "WO-DA-014", de: "sich kümmern", en: "worum", kind:"wo", tag:"wo-form" },
    { id: "WO-DA-015", de: "sich kümmern", en: "darum", kind:"da", tag:"da-form" },

    // bitten um
    { id: "WO-DA-016", de: "bitten", en: "um", kind:"prep", tag:"verb-prep" },
    { id: "WO-DA-017", de: "bitten", en: "worum", kind:"wo", tag:"wo-form" },
    { id: "WO-DA-018", de: "bitten", en: "darum", kind:"da", tag:"da-form" },

    // sich interessieren für
    { id: "WO-DA-019", de: "sich interessieren", en: "für", kind:"prep", tag:"verb-prep" },
    { id: "WO-DA-020", de: "sich interessieren", en: "wofür", kind:"wo", tag:"wo-form" },
    { id: "WO-DA-021", de: "sich interessieren", en: "dafür", kind:"da", tag:"da-form" },

    // sich entscheiden für
    { id: "WO-DA-022", de: "sich entscheiden", en: "für", kind:"prep", tag:"verb-prep" },
    { id: "WO-DA-023", de: "sich entscheiden", en: "wofür", kind:"wo", tag:"wo-form" },
    { id: "WO-DA-024", de: "sich entscheiden", en: "dafür", kind:"da", tag:"da-form" }

  ];

})();
