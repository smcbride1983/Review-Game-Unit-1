/* grammar-drill_deck.js
   Super Easy Verb + Preposition + Wo/Da Forms (Verb-linked)
*/

(function () {
  window.DRILL_DECKS = window.DRILL_DECKS || {};
  window.DRILL_DECKS_META = window.DRILL_DECKS_META || {};

  const DECK_KEY = "GRAMMAR_DRILL_PREPOSITION";

  window.DRILL_DECKS_META[DECK_KEY] = {
    title: "Grammar Drill: Verb + Preposition )",
    category: "grammar-drill",
    level: "easy",
    mechanic: "match",
    description: "Match verb-preposition combinations and their wo/da forms."
  };

  window.DRILL_DECKS[DECK_KEY] = [

const VERB_PREP = [

/* ======================
   AUF + Akk
====================== */
{ id:"VERB_PREP-001", verb:"warten", prep:"auf", kase:"Akk", en:"to wait for" },
{ id:"VERB_PREP-002", verb:"hoffen", prep:"auf", kase:"Akk", en:"to hope for" },
{ id:"VERB_PREP-003", verb:"verzichten", prep:"auf", kase:"Akk", en:"to do without" },
{ id:"VERB_PREP-004", verb:"reagieren", prep:"auf", kase:"Akk", en:"to react to" },
{ id:"VERB_PREP-005", verb:"achten", prep:"auf", kase:"Akk", en:"to pay attention to" },
{ id:"VERB_PREP-006", verb:"bestehen", prep:"auf", kase:"Akk", en:"to insist on" },
{ id:"VERB_PREP-007", verb:"sich verlassen", prep:"auf", kase:"Akk", en:"to rely on" },
{ id:"VERB_PREP-008", verb:"sich freuen", prep:"auf", kase:"Akk", en:"to look forward to" },
{ id:"VERB_PREP-009", verb:"sich konzentrieren", prep:"auf", kase:"Akk", en:"to concentrate on" },
{ id:"VERB_PREP-010", verb:"sich vorbereiten", prep:"auf", kase:"Akk", en:"to prepare for" },
{ id:"VERB_PREP-011", verb:"antworten", prep:"auf", kase:"Akk", en:"to respond to" },
{ id:"VERB_PREP-012", verb:"sich beziehen", prep:"auf", kase:"Akk", en:"to refer to" },

/* ======================
   ÜBER + Akk
====================== */
{ id:"VERB_PREP-013", verb:"sprechen", prep:"über", kase:"Akk", en:"to talk about" },
{ id:"VERB_PREP-014", verb:"diskutieren", prep:"über", kase:"Akk", en:"to discuss" },
{ id:"VERB_PREP-015", verb:"sich beschweren", prep:"über", kase:"Akk", en:"to complain about" },
{ id:"VERB_PREP-016", verb:"sich ärgern", prep:"über", kase:"Akk", en:"to be annoyed about" },
{ id:"VERB_PREP-017", verb:"lachen", prep:"über", kase:"Akk", en:"to laugh about" },
{ id:"VERB_PREP-018", verb:"nachdenken", prep:"über", kase:"Akk", en:"to think about" },
{ id:"VERB_PREP-019", verb:"sich wundern", prep:"über", kase:"Akk", en:"to be surprised about" },
{ id:"VERB_PREP-020", verb:"informieren", prep:"über", kase:"Akk", en:"to inform about" },

/* ======================
   FÜR + Akk
====================== */
{ id:"VERB_PREP-021", verb:"sich interessieren", prep:"für", kase:"Akk", en:"to be interested in" },
{ id:"VERB_PREP-022", verb:"sich entscheiden", prep:"für", kase:"Akk", en:"to decide for" },
{ id:"VERB_PREP-023", verb:"sich bedanken", prep:"für", kase:"Akk", en:"to thank for" },
{ id:"VERB_PREP-024", verb:"sich entschuldigen", prep:"für", kase:"Akk", en:"to apologize for" },
{ id:"VERB_PREP-025", verb:"kämpfen", prep:"für", kase:"Akk", en:"to fight for" },
{ id:"VERB_PREP-026", verb:"sorgen", prep:"für", kase:"Akk", en:"to take care of" },
{ id:"VERB_PREP-027", verb:"halten", prep:"für", kase:"Akk", en:"to consider (as)" },
{ id:"VERB_PREP-028", verb:"bezahlen", prep:"für", kase:"Akk", en:"to pay for" },

/* ======================
   UM + Akk
====================== */
{ id:"VERB_PREP-029", verb:"sich kümmern", prep:"um", kase:"Akk", en:"to take care of" },
{ id:"VERB_PREP-030", verb:"bitten", prep:"um", kase:"Akk", en:"to ask for" },
{ id:"VERB_PREP-031", verb:"sich handeln", prep:"um", kase:"Akk", en:"to be about" },
{ id:"VERB_PREP-032", verb:"sich bewerben", prep:"um", kase:"Akk", en:"to apply for" },
{ id:"VERB_PREP-033", verb:"streiten", prep:"um", kase:"Akk", en:"to argue about" },
{ id:"VERB_PREP-034", verb:"weinen", prep:"um", kase:"Akk", en:"to mourn" },

/* ======================
   AN + Akk
====================== */
{ id:"VERB_PREP-035", verb:"denken", prep:"an", kase:"Akk", en:"to think of" },
{ id:"VERB_PREP-036", verb:"sich erinnern", prep:"an", kase:"Akk", en:"to remember" },
{ id:"VERB_PREP-037", verb:"glauben", prep:"an", kase:"Akk", en:"to believe in" },
{ id:"VERB_PREP-038", verb:"sich gewöhnen", prep:"an", kase:"Akk", en:"to get used to" },
{ id:"VERB_PREP-039", verb:"erkennen", prep:"an", kase:"Akk", en:"to recognize by" },
{ id:"VERB_PREP-040", verb:"teilnehmen", prep:"an", kase:"Dat", en:"to participate in" },

/* ======================
   MIT + Dat
====================== */
{ id:"VERB_PREP-041", verb:"sprechen", prep:"mit", kase:"Dat", en:"to speak with" },
{ id:"VERB_PREP-042", verb:"sich treffen", prep:"mit", kase:"Dat", en:"to meet with" },
{ id:"VERB_PREP-043", verb:"sich verstehen", prep:"mit", kase:"Dat", en:"to get along with" },
{ id:"VERB_PREP-044", verb:"beginnen", prep:"mit", kase:"Dat", en:"to begin with" },
{ id:"VERB_PREP-045", verb:"rechnen", prep:"mit", kase:"Dat", en:"to expect" },
{ id:"VERB_PREP-046", verb:"zufrieden sein", prep:"mit", kase:"Dat", en:"to be satisfied with" },

/* ======================
   VON + Dat
====================== */
{ id:"VERB_PREP-047", verb:"profitieren", prep:"von", kase:"Dat", en:"to benefit from" },
{ id:"VERB_PREP-048", verb:"abhängen", prep:"von", kase:"Dat", en:"to depend on" },
{ id:"VERB_PREP-049", verb:"träumen", prep:"von", kase:"Dat", en:"to dream of" },
{ id:"VERB_PREP-050", verb:"erzählen", prep:"von", kase:"Dat", en:"to tell about" },

/* ======================
   BEI + Dat
====================== */
{ id:"VERB_PREP-051", verb:"sich bedanken", prep:"bei", kase:"Dat", en:"to thank (someone)" },
{ id:"VERB_PREP-052", verb:"helfen", prep:"bei", kase:"Dat", en:"to help with" },
{ id:"VERB_PREP-053", verb:"arbeiten", prep:"bei", kase:"Dat", en:"to work at/for" },
{ id:"VERB_PREP-054", verb:"bleiben", prep:"bei", kase:"Dat", en:"to stick with" },
{ id:"VERB_PREP-055", verb:"unterstützen", prep:"bei", kase:"Dat", en:"to support with" },

/* ======================
   ZU + Dat
====================== */
{ id:"VERB_PREP-056", verb:"gehören", prep:"zu", kase:"Dat", en:"to belong to" },
{ id:"VERB_PREP-057", verb:"passen", prep:"zu", kase:"Dat", en:"to match / fit with" },
{ id:"VERB_PREP-058", verb:"einladen", prep:"zu", kase:"Dat", en:"to invite to" },
{ id:"VERB_PREP-059", verb:"gratulieren", prep:"zu", kase:"Dat", en:"to congratulate on" },
{ id:"VERB_PREP-060", verb:"zwingen", prep:"zu", kase:"Dat", en:"to force to" },

/* ======================
   NACH + Dat
====================== */
{ id:"VERB_PREP-061", verb:"fragen", prep:"nach", kase:"Dat", en:"to ask about" },
{ id:"VERB_PREP-062", verb:"suchen", prep:"nach", kase:"Dat", en:"to search for" },
{ id:"VERB_PREP-063", verb:"riechen", prep:"nach", kase:"Dat", en:"to smell like" },
{ id:"VERB_PREP-064", verb:"schmecken", prep:"nach", kase:"Dat", en:"to taste like" },
{ id:"VERB_PREP-065", verb:"verlangen", prep:"nach", kase:"Dat", en:"to demand / long for" },

/* ======================
   VOR + Dat
====================== */
{ id:"VERB_PREP-066", verb:"Angst haben", prep:"vor", kase:"Dat", en:"to be afraid of" },
{ id:"VERB_PREP-067", verb:"warnen", prep:"vor", kase:"Dat", en:"to warn about" },
{ id:"VERB_PREP-068", verb:"schützen", prep:"vor", kase:"Dat", en:"to protect from" },
{ id:"VERB_PREP-069", verb:"fliehen", prep:"vor", kase:"Dat", en:"to flee from" },
{ id:"VERB_PREP-070", verb:"zittern", prep:"vor", kase:"Dat", en:"to tremble from" },

/* ======================
   DURCH + Akk
====================== */
{ id:"VERB_PREP-071", verb:"ersetzen", prep:"durch", kase:"Akk", en:"to replace with/by" },
{ id:"VERB_PREP-072", verb:"informieren", prep:"durch", kase:"Akk", en:"to inform through" },
{ id:"VERB_PREP-073", verb:"gewinnen", prep:"durch", kase:"Akk", en:"to gain through" },
{ id:"VERB_PREP-074", verb:"verursachen", prep:"durch", kase:"Akk", en:"to cause through" },
{ id:"VERB_PREP-075", verb:"unterstützen", prep:"durch", kase:"Akk", en:"to support through" },

/* ======================
   GEGEN + Akk
====================== */
{ id:"VERB_PREP-076", verb:"kämpfen", prep:"gegen", kase:"Akk", en:"to fight against" },
{ id:"VERB_PREP-077", verb:"protestieren", prep:"gegen", kase:"Akk", en:"to protest against" },
{ id:"VERB_PREP-078", verb:"verstoßen", prep:"gegen", kase:"Akk", en:"to violate / break (a rule)" },
{ id:"VERB_PREP-079", verb:"impfen", prep:"gegen", kase:"Akk", en:"to vaccinate against" },
{ id:"VERB_PREP-080", verb:"sich wehren", prep:"gegen", kase:"Akk", en:"to defend oneself against" },

/* ======================
   OHNE + Akk
====================== */
{ id:"VERB_PREP-081", verb:"auskommen", prep:"ohne", kase:"Akk", en:"to get by without" },
{ id:"VERB_PREP-082", verb:"leben", prep:"ohne", kase:"Akk", en:"to live without" },
{ id:"VERB_PREP-083", verb:"reisen", prep:"ohne", kase:"Akk", en:"to travel without" },
{ id:"VERB_PREP-084", verb:"arbeiten", prep:"ohne", kase:"Akk", en:"to work without" },
{ id:"VERB_PREP-085", verb:"funktionieren", prep:"ohne", kase:"Akk", en:"to function without" },

/* ======================
   IN + Dat
====================== */
{ id:"VERB_PREP-086", verb:"bestehen", prep:"in", kase:"Dat", en:"to consist of" },
{ id:"VERB_PREP-087", verb:"liegen", prep:"in", kase:"Dat", en:"to lie in / be located in" },
{ id:"VERB_PREP-088", verb:"führen", prep:"in", kase:"Akk", en:"to lead into" },
{ id:"VERB_PREP-089", verb:"sich irren", prep:"in", kase:"Dat", en:"to be mistaken about" },
{ id:"VERB_PREP-090", verb:"investieren", prep:"in", kase:"Akk", en:"to invest in" },

/* ======================
   AUF + Dat (Location)
====================== */
{ id:"VERB_PREP-091", verb:"sein", prep:"auf", kase:"Dat", en:"to be on (location)" },
{ id:"VERB_PREP-092", verb:"liegen", prep:"auf", kase:"Dat", en:"to lie on" },
{ id:"VERB_PREP-093", verb:"stehen", prep:"auf", kase:"Dat", en:"to stand on" },

/* ======================
   FÜR + Dat (Rare fixed phrases)
====================== */
{ id:"VERB_PREP-094", verb:"halten", prep:"zu", kase:"Dat", en:"to stick with / side with" },

/* ======================
   Additional High-Frequency Combos
====================== */
{ id:"VERB_PREP-095", verb:"sich freuen", prep:"über", kase:"Akk", en:"to be happy about" },
{ id:"VERB_PREP-096", verb:"sich entschließen", prep:"zu", kase:"Dat", en:"to decide to" },
{ id:"VERB_PREP-097", verb:"leiden", prep:"an", kase:"Dat", en:"to suffer from" },
{ id:"VERB_PREP-098", verb:"bestehen", prep:"aus", kase:"Dat", en:"to consist of" },
{ id:"VERB_PREP-099", verb:"sich verlassen", prep:"auf", kase:"Akk", en:"to rely on" },
{ id:"VERB_PREP-100", verb:"zweifeln", prep:"an", kase:"Dat", en:"to doubt" },


  ];

     // --- Deck 2 ---
  const DECK_KEY_2 = "GRAMMAR_DRILL_WO_DA_2_PREP";
  window.DRILL_DECKS_META[DECK_KEY_2] = { ... };
  window.DRILL_DECKS[DECK_KEY_2] = [ ... ];

})();
