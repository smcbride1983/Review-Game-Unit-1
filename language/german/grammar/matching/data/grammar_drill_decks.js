/* grammar-drill_deck.js
   Super Easy Verb + Preposition + Wo/Da Forms (Verb-linked)
*/

(function () {
  window.DRILL_DECKS = window.DRILL_DECKS || {};
  window.DRILL_DECKS_META = window.DRILL_DECKS_META || {};

  const DECK_KEY = "GRAMMAR_DRILL_WO_DA";

  window.DRILL_DECKS_META[DECK_KEY] = {
    title: "Grammar Drill: Accusative Prepositions",
    category: "grammar-drill",
    level: "easy",
    mechanic: "match",
    description: "Match prepositions that take the accusative."
  };

  window.DRILL_DECKS[DECK_KEY] = [

    // warten auf
    { id: "WO-DA-001", de: "warten", en: "auf", level: "easy",    kind:"prep",  tag:"verb-prep" },
    { id: "WO-DA-002", de: "warten", en: "worauf", level: "easy", kind:"wo",    tag:"wo-form" },
    { id: "WO-DA-003", de: "warten", en: "darauf", level: "easy", kind:"da",    tag:"da-form" },

    // sprechen über
    { id: "WO-DA-004", de: "sprechen", en: "über", level: "easy",    kind:"prep",  tag:"verb-prep" },
    { id: "WO-DA-005", de: "sprechen", en: "worüber", level: "easy", kind:"wo",    tag:"wo-form" },
    { id: "WO-DA-006", de: "sprechen", en: "darüber", level: "easy", kind:"da",    tag:"da-form" },

    // denken an
    { id: "WO-DA-007", de: "denken", en: "an", level: "easy",    kind:"prep",  tag:"verb-prep" },
    { id: "WO-DA-008", de: "denken", en: "woran", level: "easy", kind:"wo",    tag:"wo-form" },
    { id: "WO-DA-009", de: "denken", en: "daran", level: "easy", kind:"da",    tag:"da-form" },

    // träumen von
    { id: "WO-DA-010", de: "träumen", en: "von", level: "easy",    kind:"prep",  tag:"verb-prep" },
    { id: "WO-DA-011", de: "träumen", en: "wovon", level: "easy", kind:"wo",    tag:"wo-form" },
    { id: "WO-DA-012", de: "träumen", en: "davon", level: "easy", kind:"da",    tag:"da-form" },

    // teilnehmen an
    { id:"GD-013", de:"teilnehmen", en:"an",    kind:"prep",  tag:"verb-prep" }
    { id:"GD-014", de:"teilnehmen", en:"woran", kind:"wo",    tag:"wo-form" }
    { id:"GD-015", de:"teilnehmen", en:"daran", kind:"da",    tag:"da-form" }

    // sich interessieren für
    { id: "WO-DA-016", de: "sich interessieren", en: "für", level: "easy",    kind:"prep",  tag:"verb-prep" },
    { id: "WO-DA-017", de: "sich interessieren", en: "wofür", level: "easy", kind:"wo",    tag:"wo-form" },
    { id: "WO-DA-018", de: "sich interessieren", en: "dafür", level: "easy", kind:"da",    tag:"da-form" }

  ];

})();
