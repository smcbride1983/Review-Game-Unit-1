/* grammar-drill_deck.js
   Super Easy Verb + Preposition + Wo/Da Forms (Verb-linked)
*/

(function () {
  window.DRILL_DECKS = window.DRILL_DECKS || {};
  window.DRILL_DECKS_META = window.DRILL_DECKS_META || {};

  const DECK_KEY = "GRAMMAR_DRILL_PREPOSITION";

  window.DRILL_DECKS_META[DECK_KEY] = {
    title: "Grammar Drill: Verb + Preposition",
    category: "grammar-drill",
    level: "easy",
    mechanic: "match",
    description: "Match verb-preposition combinations and their wo/da forms."
  };

  window.DRILL_DECKS[DECK_KEY] = [
    /* ======================
       AUF + Akk
    ====================== */
    { id:"VERB_PREP-001", de:"warten", en:"auf", tag:"verb-prep", kase:"Akk", hint:"to wait for" },
    { id:"VERB_PREP-002", de:"hoffen", en:"auf", tag:"verb-prep", kase:"Akk", hint:"to hope for" },
    { id:"VERB_PREP-003", de:"verzichten", en:"auf", tag:"verb-prep", kase:"Akk", hint:"to do without" },
    { id:"VERB_PREP-004", de:"reagieren", en:"auf", tag:"verb-prep", kase:"Akk", hint:"to react to" },
    { id:"VERB_PREP-005", de:"achten", en:"auf", tag:"verb-prep", kase:"Akk", hint:"to pay attention to" },
    { id:"VERB_PREP-006", de:"bestehen", en:"auf", tag:"verb-prep", kase:"Akk", hint:"to insist on" },
    { id:"VERB_PREP-007", de:"sich verlassen", en:"auf", tag:"verb-prep", kase:"Akk", hint:"to rely on" },
    { id:"VERB_PREP-008", de:"sich freuen", en:"auf", tag:"verb-prep", kase:"Akk", hint:"to look forward to" },
    { id:"VERB_PREP-009", de:"sich konzentrieren", en:"auf", tag:"verb-prep", kase:"Akk", hint:"to concentrate on" },
    { id:"VERB_PREP-010", de:"sich vorbereiten", en:"auf", tag:"verb-prep", kase:"Akk", hint:"to prepare for" },
    { id:"VERB_PREP-011", de:"antworten", en:"auf", tag:"verb-prep", kase:"Akk", hint:"to respond to" },
    { id:"VERB_PREP-012", de:"sich beziehen", en:"auf", tag:"verb-prep", kase:"Akk", hint:"to refer to" },

    /* ======================
       ÜBER + Akk
    ====================== */
    { id:"VERB_PREP-013", de:"sprechen", en:"über", tag:"verb-prep", kase:"Akk", hint:"to talk about" },
    { id:"VERB_PREP-014", de:"diskutieren", en:"über", tag:"verb-prep", kase:"Akk", hint:"to discuss" },
    { id:"VERB_PREP-015", de:"sich beschweren", en:"über", tag:"verb-prep", kase:"Akk", hint:"to complain about" },
    { id:"VERB_PREP-016", de:"sich ärgern", en:"über", tag:"verb-prep", kase:"Akk", hint:"to be annoyed about" },
    { id:"VERB_PREP-017", de:"lachen", en:"über", tag:"verb-prep", kase:"Akk", hint:"to laugh about" },
    { id:"VERB_PREP-018", de:"nachdenken", en:"über", tag:"verb-prep", kase:"Akk", hint:"to think about" },
    { id:"VERB_PREP-019", de:"sich wundern", en:"über", tag:"verb-prep", kase:"Akk", hint:"to be surprised about" },
    { id:"VERB_PREP-020", de:"informieren", en:"über", tag:"verb-prep", kase:"Akk", hint:"to inform about" },

    /* ======================
       FÜR + Akk
    ====================== */
    { id:"VERB_PREP-021", de:"sich interessieren", en:"für", tag:"verb-prep", kase:"Akk", hint:"to be interested in" },
    { id:"VERB_PREP-022", de:"sich entscheiden", en:"für", tag:"verb-prep", kase:"Akk", hint:"to decide for" },
    { id:"VERB_PREP-023", de:"sich bedanken", en:"für", tag:"verb-prep", kase:"Akk", hint:"to thank for" },
    { id:"VERB_PREP-024", de:"sich entschuldigen", en:"für", tag:"verb-prep", kase:"Akk", hint:"to apologize for" },
    { id:"VERB_PREP-025", de:"kämpfen", en:"für", tag:"verb-prep", kase:"Akk", hint:"to fight for" },
    { id:"VERB_PREP-026", de:"sorgen", en:"für", tag:"verb-prep", kase:"Akk", hint:"to take care of" },
    { id:"VERB_PREP-027", de:"halten", en:"für", tag:"verb-prep", kase:"Akk", hint:"to consider (as)" },
    { id:"VERB_PREP-028", de:"bezahlen", en:"für", tag:"verb-prep", kase:"Akk", hint:"to pay for" },

    /* ======================
       UM + Akk
    ====================== */
    { id:"VERB_PREP-029", de:"sich kümmern", en:"um", tag:"verb-prep", kase:"Akk", hint:"to take care of" },
    { id:"VERB_PREP-030", de:"bitten", en:"um", tag:"verb-prep", kase:"Akk", hint:"to ask for" },
    { id:"VERB_PREP-031", de:"gehen", en:"um", tag:"verb-prep", kase:"Akk", hint:"to be about (Es geht um...)" },
    { id:"VERB_PREP-032", de:"sich bewerben", en:"um", tag:"verb-prep", kase:"Akk", hint:"to apply for" },
    { id:"VERB_PREP-033", de:"streiten", en:"um", tag:"verb-prep", kase:"Akk", hint:"to argue about" },
    { id:"VERB_PREP-034", de:"weinen", en:"um", tag:"verb-prep", kase:"Akk", hint:"to mourn" },

    /* ======================
       AN + Akk / Dat
    ====================== */
    { id:"VERB_PREP-035", de:"denken", en:"an", tag:"verb-prep", kase:"Akk", hint:"to think of" },
    { id:"VERB_PREP-036", de:"sich erinnern", en:"an", tag:"verb-prep", kase:"Akk", hint:"to remember" },
    { id:"VERB_PREP-037", de:"glauben", en:"an", tag:"verb-prep", kase:"Akk", hint:"to believe in" },
    { id:"VERB_PREP-038", de:"sich gewöhnen", en:"an", tag:"verb-prep", kase:"Akk", hint:"to get used to" },
    { id:"VERB_PREP-039", de:"erkennen", en:"an", tag:"verb-prep", kase:"Akk", hint:"to recognize by" },
    { id:"VERB_PREP-040", de:"teilnehmen", en:"an", tag:"verb-prep", kase:"Dat", hint:"to participate in" },

    /* ======================
       MIT + Dat
    ====================== */
    { id:"VERB_PREP-041", de:"sprechen", en:"mit", tag:"verb-prep", kase:"Dat", hint:"to speak with" },
    { id:"VERB_PREP-042", de:"sich treffen", en:"mit", tag:"verb-prep", kase:"Dat", hint:"to meet with" },
    { id:"VERB_PREP-043", de:"sich verstehen", en:"mit", tag:"verb-prep", kase:"Dat", hint:"to get along with" },
    { id:"VERB_PREP-044", de:"beginnen", en:"mit", tag:"verb-prep", kase:"Dat", hint:"to begin with" },
    { id:"VERB_PREP-045", de:"rechnen", en:"mit", tag:"verb-prep", kase:"Dat", hint:"to expect" },
    { id:"VERB_PREP-046", de:"zufrieden sein", en:"mit", tag:"verb-prep", kase:"Dat", hint:"to be satisfied with" },

    /* ======================
       VON + Dat
    ====================== */
    { id:"VERB_PREP-047", de:"profitieren", en:"von", tag:"verb-prep", kase:"Dat", hint:"to benefit from" },
    { id:"VERB_PREP-048", de:"abhängen", en:"von", tag:"verb-prep", kase:"Dat", hint:"to depend on" },
    { id:"VERB_PREP-049", de:"träumen", en:"von", tag:"verb-prep", kase:"Dat", hint:"to dream of" },
    { id:"VERB_PREP-050", de:"erzählen", en:"von", tag:"verb-prep", kase:"Dat", hint:"to tell about" },

    /* ======================
       BEI + Dat
    ====================== */
    { id:"VERB_PREP-051", de:"sich bedanken", en:"bei", tag:"verb-prep", kase:"Dat", hint:"to thank (someone)" },
    { id:"VERB_PREP-052", de:"helfen", en:"bei", tag:"verb-prep", kase:"Dat", hint:"to help with" },
    { id:"VERB_PREP-053", de:"arbeiten", en:"bei", tag:"verb-prep", kase:"Dat", hint:"to work at/for" },
    { id:"VERB_PREP-054", de:"bleiben", en:"bei", tag:"verb-prep", kase:"Dat", hint:"to stick with" },

    /* ======================
       ZU + Dat
    ====================== */
    { id:"VERB_PREP-056", de:"gehören", en:"zu", tag:"verb-prep", kase:"Dat", hint:"to belong to" },
    { id:"VERB_PREP-057", de:"passen", en:"zu", tag:"verb-prep", kase:"Dat", hint:"to match / fit with" },
    { id:"VERB_PREP-058", de:"einladen", en:"zu", tag:"verb-prep", kase:"Dat", hint:"to invite to" },
    { id:"VERB_PREP-059", de:"gratulieren", en:"zu", tag:"verb-prep", kase:"Dat", hint:"to congratulate on" },
    { id:"VERB_PREP-060", de:"zwingen", en:"zu", tag:"verb-prep", kase:"Dat", hint:"to force to" },

    /* ======================
       NACH + Dat
    ====================== */
    { id:"VERB_PREP-061", de:"fragen", en:"nach", tag:"verb-prep", kase:"Dat", hint:"to ask about" },
    { id:"VERB_PREP-062", de:"suchen", en:"nach", tag:"verb-prep", kase:"Dat", hint:"to search for" },
    { id:"VERB_PREP-063", de:"riechen", en:"nach", tag:"verb-prep", kase:"Dat", hint:"to smell like" },
    { id:"VERB_PREP-064", de:"schmecken", en:"nach", tag:"verb-prep", kase:"Dat", hint:"to taste like" },

    /* ======================
       VOR + Dat
    ====================== */
    { id:"VERB_PREP-066", de:"Angst haben", en:"vor", tag:"verb-prep", kase:"Dat", hint:"to be afraid of" },
    { id:"VERB_PREP-067", de:"warnen", en:"vor", tag:"verb-prep", kase:"Dat", hint:"to warn about" },
    { id:"VERB_PREP-068", de:"schützen", en:"vor", tag:"verb-prep", kase:"Dat", hint:"to protect from" },

    /* ======================
       GEGEN + Akk
    ====================== */
    { id:"VERB_PREP-076", de:"kämpfen", en:"gegen", tag:"verb-prep", kase:"Akk", hint:"to fight against" },
    { id:"VERB_PREP-077", de:"protestieren", en:"gegen", tag:"verb-prep", kase:"Akk", hint:"to protest against" }
  ];

})();
