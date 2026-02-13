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
{ id:"VERB_PREP-001", de:"warten", prep:"auf", tag:"verb-prep", kase:"Akk", hint:"to wait for" },
{ id:"VERB_PREP-002", de:"hoffen", prep:"auf", tag:"verb-prep", kase:"Akk", hint:"to hope for" },
{ id:"VERB_PREP-003", de:"verzichten", prep:"auf", tag:"verb-prep", kase:"Akk", hint:"to do without" },
{ id:"VERB_PREP-004", de:"reagieren", prep:"auf", tag:"verb-prep", kase:"Akk", hint:"to react to" },
{ id:"VERB_PREP-005", de:"achten", prep:"auf", tag:"verb-prep", kase:"Akk", hint:"to pay attention to" },
{ id:"VERB_PREP-006", de:"bestehen", prep:"auf", tag:"verb-prep", kase:"Akk", hint:"to insist on" },
{ id:"VERB_PREP-007", de:"sich verlassen", prep:"auf", tag:"verb-prep", kase:"Akk", hint:"to rely on" },
{ id:"VERB_PREP-008", de:"sich freuen", prep:"auf", tag:"verb-prep", kase:"Akk", hint:"to look forward to" },
{ id:"VERB_PREP-009", de:"sich konzentrieren", prep:"auf", tag:"verb-prep", kase:"Akk", hint:"to concentrate on" },
{ id:"VERB_PREP-010", de:"sich vorbereiten", prep:"auf", tag:"verb-prep", kase:"Akk", hint:"to prepare for" },
{ id:"VERB_PREP-011", de:"antworten", prep:"auf", tag:"verb-prep", kase:"Akk", hint:"to respond to" },
{ id:"VERB_PREP-012", de:"sich beziehen", prep:"auf", tag:"verb-prep", kase:"Akk", hint:"to refer to" },

/* ======================
   ÜBER + Akk
====================== */
{ id:"VERB_PREP-013", de:"sprechen", prep:"über", tag:"verb-prep", kase:"Akk", hint:"to talk about" },
{ id:"VERB_PREP-014", de:"diskutieren", prep:"über", tag:"verb-prep", kase:"Akk", hint:"to discuss" },
{ id:"VERB_PREP-015", de:"sich beschweren", prep:"über", tag:"verb-prep", kase:"Akk", hint:"to complain about" },
{ id:"VERB_PREP-016", de:"sich ärgern", prep:"über", tag:"verb-prep", kase:"Akk", hint:"to be annoyed about" },
{ id:"VERB_PREP-017", de:"lachen", prep:"über", tag:"verb-prep", kase:"Akk", hint:"to laugh about" },
{ id:"VERB_PREP-018", de:"nachdenken", prep:"über", tag:"verb-prep", kase:"Akk", hint:"to think about" },
{ id:"VERB_PREP-019", de:"sich wundern", prep:"über", tag:"verb-prep", kase:"Akk", hint:"to be surprised about" },
{ id:"VERB_PREP-020", de:"informieren", prep:"über", tag:"verb-prep", kase:"Akk", hint:"to inform about" },

/* ======================
   FÜR + Akk
====================== */
{ id:"VERB_PREP-021", de:"sich interessieren", prep:"für", tag:"verb-prep", kase:"Akk", hint:"to be interested in" },
{ id:"VERB_PREP-022", de:"sich entscheiden", prep:"für", tag:"verb-prep", kase:"Akk", hint:"to decide for" },
{ id:"VERB_PREP-023", de:"sich bedanken", prep:"für", tag:"verb-prep", kase:"Akk", hint:"to thank for" },
{ id:"VERB_PREP-024", de:"sich entschuldigen", prep:"für", tag:"verb-prep", kase:"Akk", hint:"to apologize for" },
{ id:"VERB_PREP-025", de:"kämpfen", prep:"für", tag:"verb-prep", kase:"Akk", hint:"to fight for" },
{ id:"VERB_PREP-026", de:"sorgen", prep:"für", tag:"verb-prep", kase:"Akk", hint:"to take care of" },
{ id:"VERB_PREP-027", de:"halten", prep:"für", tag:"verb-prep", kase:"Akk", hint:"to consider (as)" },
{ id:"VERB_PREP-028", de:"bezahlen", prep:"für", tag:"verb-prep", kase:"Akk", hint:"to pay for" },

/* ======================
   UM + Akk
====================== */
{ id:"VERB_PREP-029", de:"sich kümmern", prep:"um", tag:"verb-prep", kase:"Akk", hint:"to take care of" },
{ id:"VERB_PREP-030", de:"bitten", prep:"um", tag:"verb-prep", kase:"Akk", hint:"to ask for" },
{ id:"VERB_PREP-031", de:"sich handeln", prep:"um", tag:"verb-prep", kase:"Akk", hint:"to be about" },
{ id:"VERB_PREP-032", de:"sich bewerben", prep:"um", tag:"verb-prep", kase:"Akk", hint:"to apply for" },
{ id:"VERB_PREP-033", de:"streiten", prep:"um", tag:"verb-prep", kase:"Akk", hint:"to argue about" },
{ id:"VERB_PREP-034", de:"weinen", prep:"um", tag:"verb-prep", kase:"Akk", hint:"to mourn" },

/* ======================
   AN + Akk
====================== */
{ id:"VERB_PREP-035", de:"denken", prep:"an", tag:"verb-prep", kase:"Akk", hint:"to think of" },
{ id:"VERB_PREP-036", de:"sich erinnern", prep:"an", tag:"verb-prep", kase:"Akk", hint:"to remember" },
{ id:"VERB_PREP-037", de:"glauben", prep:"an", tag:"verb-prep", kase:"Akk", hint:"to believe in" },
{ id:"VERB_PREP-038", de:"sich gewöhnen", prep:"an", tag:"verb-prep", kase:"Akk", hint:"to get used to" },
{ id:"VERB_PREP-039", de:"erkennen", prep:"an", tag:"verb-prep", kase:"Akk", hint:"to recognize by" },
{ id:"VERB_PREP-040", de:"teilnehmen", prep:"an", tag:"verb-prep", kase:"Dat", hint:"to participate in" },

/* ======================
   MIT + Dat
====================== */
{ id:"VERB_PREP-041", de:"sprechen", prep:"mit", tag:"verb-prep", kase:"Dat", hint:"to speak with" },
{ id:"VERB_PREP-042", de:"sich treffen", prep:"mit", tag:"verb-prep", kase:"Dat", hint:"to meet with" },
{ id:"VERB_PREP-043", de:"sich verstehen", prep:"mit", tag:"verb-prep", kase:"Dat", hint:"to get along with" },
{ id:"VERB_PREP-044", de:"beginnen", prep:"mit", tag:"verb-prep", kase:"Dat", hint:"to begin with" },
{ id:"VERB_PREP-045", de:"rechnen", prep:"mit", tag:"verb-prep", kase:"Dat", hint:"to expect" },
{ id:"VERB_PREP-046", de:"zufrieden sein", prep:"mit", tag:"verb-prep", kase:"Dat", hint:"to be satisfied with" },

/* ======================
   VON + Dat
====================== */
{ id:"VERB_PREP-047", de:"profitieren", prep:"von", tag:"verb-prep", kase:"Dat", hint:"to benefit from" },
{ id:"VERB_PREP-048", de:"abhängen", prep:"von", tag:"verb-prep", kase:"Dat", hint:"to depend on" },
{ id:"VERB_PREP-049", de:"träumen", prep:"von", tag:"verb-prep", kase:"Dat", hint:"to dream of" },
{ id:"VERB_PREP-050", de:"erzählen", prep:"von", tag:"verb-prep", kase:"Dat", hint:"to tell about" },

/* ======================
   BEI + Dat
====================== */
{ id:"VERB_PREP-051", de:"sich bedanken", prep:"bei", tag:"verb-prep", kase:"Dat", hint:"to thank (someone)" },
{ id:"VERB_PREP-052", de:"helfen", prep:"bei", tag:"verb-prep", kase:"Dat", hint:"to help with" },
{ id:"VERB_PREP-053", de:"arbeiten", prep:"bei", tag:"verb-prep", kase:"Dat", hint:"to work at/for" },
{ id:"VERB_PREP-054", de:"bleiben", prep:"bei", tag:"verb-prep", kase:"Dat", hint:"to stick with" },
{ id:"VERB_PREP-055", de:"unterstützen", prep:"bei", tag:"verb-prep", kase:"Dat", hint:"to support with" },

/* ======================
   ZU + Dat
====================== */
{ id:"VERB_PREP-056", de:"gehören", prep:"zu", tag:"verb-prep", kase:"Dat", hint:"to belong to" },
{ id:"VERB_PREP-057", de:"passen", prep:"zu", tag:"verb-prep", kase:"Dat", hint:"to match / fit with" },
{ id:"VERB_PREP-058", de:"einladen", prep:"zu", tag:"verb-prep", kase:"Dat", hint:"to invite to" },
{ id:"VERB_PREP-059", de:"gratulieren", prep:"zu", tag:"verb-prep", kase:"Dat", hint:"to congratulate on" },
{ id:"VERB_PREP-060", de:"zwingen", prep:"zu", tag:"verb-prep", kase:"Dat", hint:"to force to" },

/* ======================
   NACH + Dat
====================== */
{ id:"VERB_PREP-061", de:"fragen", prep:"nach", tag:"verb-prep", kase:"Dat", hint:"to ask about" },
{ id:"VERB_PREP-062", de:"suchen", prep:"nach", tag:"verb-prep", kase:"Dat", hint:"to search for" },
{ id:"VERB_PREP-063", de:"riechen", prep:"nach", tag:"verb-prep", kase:"Dat", hint:"to smell like" },
{ id:"VERB_PREP-064", de:"schmecken", prep:"nach", tag:"verb-prep", kase:"Dat", hint:"to taste like" },
{ id:"VERB_PREP-065", de:"verlangen", prep:"nach", tag:"verb-prep", kase:"Dat", hint:"to demand / long for" },

/* ======================
   VOR + Dat
====================== */
{ id:"VERB_PREP-066", de:"Angst haben", prep:"vor", tag:"verb-prep", kase:"Dat", hint:"to be afraid of" },
{ id:"VERB_PREP-067", de:"warnen", prep:"vor", tag:"verb-prep", kase:"Dat", hint:"to warn about" },
{ id:"VERB_PREP-068", de:"schützen", prep:"vor", tag:"verb-prep", kase:"Dat", hint:"to protect from" },
{ id:"VERB_PREP-069", de:"fliehen", prep:"vor", tag:"verb-prep", kase:"Dat", hint:"to flee from" },
{ id:"VERB_PREP-070", de:"zittern", prep:"vor", tag:"verb-prep", kase:"Dat", hint:"to tremble from" },

/* ======================
   DURCH + Akk
====================== */
{ id:"VERB_PREP-071", de:"ersetzen", prep:"durch", tag:"verb-prep", kase:"Akk", hint:"to replace with/by" },
{ id:"VERB_PREP-072", de:"informieren", prep:"durch", tag:"verb-prep", kase:"Akk", hint:"to inform through" },
{ id:"VERB_PREP-073", de:"gewinnen", prep:"durch", tag:"verb-prep", kase:"Akk", hint:"to gain through" },
{ id:"VERB_PREP-074", de:"verursachen", prep:"durch", tag:"verb-prep", kase:"Akk", hint:"to cause through" },
{ id:"VERB_PREP-075", de:"unterstützen", prep:"durch", tag:"verb-prep", kase:"Akk", hint:"to support through" },

/* ======================
   GEGEN + Akk
====================== */
{ id:"VERB_PREP-076", de:"kämpfen", prep:"gegen", tag:"verb-prep", kase:"Akk", hint:"to fight against" },
{ id:"VERB_PREP-077", de:"protestieren", prep:"gegen", tag:"verb-prep", kase:"Akk", hint:"to protest against" },
{ id:"VERB_PREP-078", de:"verstoßen", prep:"gegen", tag:"verb-prep", kase:"Akk", hint:"to violate / break (a rule)" },
{ id:"VERB_PREP-079", de:"impfen", prep:"gegen", tag:"verb-prep", kase:"Akk", hint:"to vaccinate against" },
{ id:"VERB_PREP-080", de:"sich wehren", prep:"gegen", tag:"verb-prep", kase:"Akk", hint:"to defend oneself against" },

/* ======================
   OHNE + Akk
====================== */
{ id:"VERB_PREP-081", de:"auskommen", prep:"ohne", tag:"verb-prep", kase:"Akk", hint:"to get by without" },
{ id:"VERB_PREP-082", de:"leben", prep:"ohne", tag:"verb-prep", kase:"Akk", hint:"to live without" },
{ id:"VERB_PREP-083", de:"reisen", prep:"ohne", tag:"verb-prep", kase:"Akk", hint:"to travel without" },
{ id:"VERB_PREP-084", de:"arbeiten", prep:"ohne", tag:"verb-prep", kase:"Akk", hint:"to work without" },
{ id:"VERB_PREP-085", de:"funktionieren", prep:"ohne", tag:"verb-prep", kase:"Akk", hint:"to function without" },

/* ======================
   IN + Dat
====================== */
{ id:"VERB_PREP-086", de:"bestehen", prep:"in", tag:"verb-prep", kase:"Dat", hint:"to consist of" },
{ id:"VERB_PREP-087", de:"liegen", prep:"in", tag:"verb-prep", kase:"Dat", hint:"to lie in / be located in" },
{ id:"VERB_PREP-088", de:"führen", prep:"in", tag:"verb-prep", kase:"Akk", hint:"to lead into" },
{ id:"VERB_PREP-089", de:"sich irren", prep:"in", tag:"verb-prep", kase:"Dat", hint:"to be mistaken about" },
{ id:"VERB_PREP-090", de:"investieren", prep:"in", tag:"verb-prep", kase:"Akk", hint:"to invest in" },

/* ======================
   AUF + Dat (Location)
====================== */
{ id:"VERB_PREP-091", de:"sein", prep:"auf", tag:"verb-prep", kase:"Dat", hint:"to be on (location)" },
{ id:"VERB_PREP-092", de:"liegen", prep:"auf", tag:"verb-prep", kase:"Dat", hint:"to lie on" },
{ id:"VERB_PREP-093", de:"stehen", prep:"auf", tag:"verb-prep", kase:"Dat", hint:"to stand on" },

/* ======================
   FÜR + Dat (Rare fixed phrases)
====================== */
{ id:"VERB_PREP-094", de:"halten", prep:"zu", tag:"verb-prep", kase:"Dat", hint:"to stick with / side with" },

/* ======================
   Additional High-Frequency Combos
====================== */
{ id:"VERB_PREP-095", de:"sich freuen", prep:"über", tag:"verb-prep", kase:"Akk", hint:"to be happy about" },
{ id:"VERB_PREP-096", de:"sich entschließen", prep:"zu", tag:"verb-prep", kase:"Dat", hint:"to decide to" },
{ id:"VERB_PREP-097", de:"leiden", prep:"an", tag:"verb-prep", kase:"Dat", hint:"to suffer from" },
{ id:"VERB_PREP-098", de:"bestehen", prep:"aus", tag:"verb-prep", kase:"Dat", hint:"to consist of" },
{ id:"VERB_PREP-099", de:"sich verlassen", prep:"auf", tag:"verb-prep", kase:"Akk", hint:"to rely on" },
{ id:"VERB_PREP-100", de:"zweifeln", prep:"an", tag:"verb-prep", kase:"Dat", hint:"to doubt" },


  ];

     // --- Deck 2 ---
  const DECK_KEY_2 = "GRAMMAR_DRILL_WO_DA_2_PREP";
  window.DRILL_DECKS_META[DECK_KEY_2] = { ... };
  window.DRILL_DECKS[DECK_KEY_2] = [ ... ];

})();
