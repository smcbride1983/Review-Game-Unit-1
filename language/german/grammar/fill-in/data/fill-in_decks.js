/* grammar_FILLIN_decks_akk_prep_fillin.js
   Deck: Verb + Preposition (Akkusativ) — Fill-in-the-blank
   Deck key: GRAMMAR_FILLIN_PREPOSITION_AKK_FILLIN

   Notes:
   - IDs are informative: AKK_PREP-001, ...
   - Each card has:
     prompt_de: German sentence with a blank "____"
     answer: the required preposition (lowercase)
     hint_en: optional English hint
     tags: ["Grammar","verb-prep","Akk","fill-in"]
*/

(function () {
  window.FILLIN_DECKS = window.FILLIN_DECKS || {};
  window.FILLIN_DECKS_META = window.FILLIN_DECKS_META || {};

  const DECK_KEY_AKK = "GRAMMAR_FILLIN_PREPOSITION_AKK_FILLIN";

  window.FILLIN_DECKS_META[DECK_KEY_AKK] = {
    title: "Verb + Präposition (Akkusativ) — Fill-in",
    category: "Grammar",
    level: "easy",
    mechanic: "fill-in",
    description: "Fill in the missing preposition for common verb–preposition combinations that take Akkusativ."
  };

  window.FILLIN_DECKS[DECK_KEY_AKK] = [
    // AUF + Akk
    { id: "AKK_PREP-001", prompt_de: "Ich warte ____ den Bus.", answer: "auf", hint_en: "warten auf", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-002", prompt_de: "Wir hoffen ____ gutes Wetter.", answer: "auf", hint_en: "hoffen auf", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-003", prompt_de: "Er verzichtet ____ Zucker.", answer: "auf", hint_en: "verzichten auf", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-004", prompt_de: "Sie reagiert schnell ____ Kritik.", answer: "auf", hint_en: "reagieren auf", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-005", prompt_de: "Achte bitte ____ die Aussprache.", answer: "auf", hint_en: "achten auf", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-006", prompt_de: "Er besteht ____ eine Antwort.", answer: "auf", hint_en: "bestehen auf", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-007", prompt_de: "Ich verlasse mich ____ dich.", answer: "auf", hint_en: "sich verlassen auf", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-008", prompt_de: "Wir freuen uns ____ das Wochenende.", answer: "auf", hint_en: "sich freuen auf (look forward)", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-009", prompt_de: "Konzentrier dich ____ die Aufgabe.", answer: "auf", hint_en: "sich konzentrieren auf", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-010", prompt_de: "Sie bereitet sich ____ die Prüfung vor.", answer: "auf", hint_en: "sich vorbereiten auf", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-011", prompt_de: "Antworte bitte ____ meine E-Mail.", answer: "auf", hint_en: "antworten auf", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-012", prompt_de: "Der Artikel bezieht sich ____ eine Studie.", answer: "auf", hint_en: "sich beziehen auf", tags: ["Grammar","verb-prep","Akk","fill-in"] },

    // ÜBER + Akk
    { id: "AKK_PREP-013", prompt_de: "Wir sprechen ____ den Kurs.", answer: "über", hint_en: "sprechen über", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-014", prompt_de: "Sie diskutieren ____ das Thema.", answer: "über", hint_en: "diskutieren über", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-015", prompt_de: "Er beschwert sich ____ den Lärm.", answer: "über", hint_en: "sich beschweren über", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-016", prompt_de: "Ich ärgere mich ____ den Fehler.", answer: "über", hint_en: "sich ärgern über", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-017", prompt_de: "Wir lachen ____ den Witz.", answer: "über", hint_en: "lachen über", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-018", prompt_de: "Sie denkt oft ____ ihre Zukunft nach.", answer: "über", hint_en: "nachdenken über", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-019", prompt_de: "Er wundert sich ____ die Nachricht.", answer: "über", hint_en: "sich wundern über", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-020", prompt_de: "Die Lehrerin informiert ____ den Test.", answer: "über", hint_en: "informieren über", tags: ["Grammar","verb-prep","Akk","fill-in"] },

    // FÜR + Akk
    { id: "AKK_PREP-021", prompt_de: "Ich interessiere mich ____ Biologie.", answer: "für", hint_en: "sich interessieren für", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-022", prompt_de: "Sie entscheidet sich ____ den blauen Pulli.", answer: "für", hint_en: "sich entscheiden für", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-023", prompt_de: "Wir bedanken uns ____ deine Hilfe.", answer: "für", hint_en: "sich bedanken für", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-024", prompt_de: "Er entschuldigt sich ____ die Verspätung.", answer: "für", hint_en: "sich entschuldigen für", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-025", prompt_de: "Sie kämpft ____ ihre Rechte.", answer: "für", hint_en: "kämpfen für", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-026", prompt_de: "Er sorgt ____ die Kinder.", answer: "für", hint_en: "sorgen für", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-027", prompt_de: "Ich halte ihn ____ ehrlich.", answer: "für", hint_en: "halten für", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-028", prompt_de: "Wir bezahlen ____ das Ticket.", answer: "für", hint_en: "bezahlen für", tags: ["Grammar","verb-prep","Akk","fill-in"] },

    // UM + Akk
    { id: "AKK_PREP-029", prompt_de: "Sie kümmert sich ____ den Hund.", answer: "um", hint_en: "sich kümmern um", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-030", prompt_de: "Ich bitte ____ einen Rat.", answer: "um", hint_en: "bitten um", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-031", prompt_de: "Es geht ____ ein Missverständnis.", answer: "um", hint_en: "es geht um", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-032", prompt_de: "Er bewirbt sich ____ die Stelle.", answer: "um", hint_en: "sich bewerben um", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-033", prompt_de: "Sie streiten ____ Geld.", answer: "um", hint_en: "streiten um", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-034", prompt_de: "Wir trauern ____ einen Freund.", answer: "um", hint_en: "trauern um", tags: ["Grammar","verb-prep","Akk","fill-in"] },

    // AN + Akk (thinking/remembering/believing)
    { id: "AKK_PREP-035", prompt_de: "Ich denke oft ____ meine Familie.", answer: "an", hint_en: "denken an", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-036", prompt_de: "Er erinnert sich ____ den Namen.", answer: "an", hint_en: "sich erinnern an", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-037", prompt_de: "Sie glaubt ____ Wunder.", answer: "an", hint_en: "glauben an", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-038", prompt_de: "Wir gewöhnen uns ____ den neuen Rhythmus.", answer: "an", hint_en: "sich gewöhnen an", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-039", prompt_de: "Er schreibt ____ seine Mutter.", answer: "an", hint_en: "schreiben an", tags: ["Grammar","verb-prep","Akk","fill-in"] },

    // DURCH + Akk
    { id: "AKK_PREP-040", prompt_de: "Er ersetzt Zucker ____ Honig.", answer: "durch", hint_en: "ersetzen durch", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-041", prompt_de: "Sie gewinnt viel ____ Training.", answer: "durch", hint_en: "gewinnen durch", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-042", prompt_de: "Der Erfolg kommt ____ harte Arbeit.", answer: "durch", hint_en: "durch (means/through)", tags: ["Grammar","verb-prep","Akk","fill-in"] },

    // GEGEN + Akk
    { id: "AKK_PREP-043", prompt_de: "Wir kämpfen ____ Ungerechtigkeit.", answer: "gegen", hint_en: "kämpfen gegen", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-044", prompt_de: "Sie protestieren ____ die Entscheidung.", answer: "gegen", hint_en: "protestieren gegen", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-045", prompt_de: "Er verstößt ____ die Regeln.", answer: "gegen", hint_en: "verstoßen gegen", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-046", prompt_de: "Ich bin ____ Grippe geimpft.", answer: "gegen", hint_en: "impfen gegen", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-047", prompt_de: "Sie wehrt sich ____ Kritik.", answer: "gegen", hint_en: "sich wehren gegen", tags: ["Grammar","verb-prep","Akk","fill-in"] },

    // OHNE + Akk (not always verb-bound, but common)
    { id: "AKK_PREP-048", prompt_de: "Ich komme ____ Kaffee nicht aus.", answer: "ohne", hint_en: "auskommen ohne", tags: ["Grammar","verb-prep","Akk","fill-in"] },
    { id: "AKK_PREP-049", prompt_de: "Er lebt ____ sein Handy.", answer: "ohne", hint_en: "leben ohne", tags: ["Grammar","verb-prep","Akk","fill-in"] },

    // BONUS high-frequency Akk-prep phrases (still good practice)
    { id: "AKK_PREP-050", prompt_de: "Wir freuen uns ____ die guten Nachrichten.", answer: "über", hint_en: "sich freuen über (happy about)", tags: ["Grammar","verb-prep","Akk","fill-in"] }
  ];
const DECK_KEY_DAT = "GRAMMAR_FILLIN_PREPOSITION_DAT_FILLIN";

  window.FILLIN_DECKS_META[DECK_KEY_DAT] = {
    title: "Verb + Präposition (Dativ) — Fill-in",
    category: "Grammar",
    level: "easy",
    mechanic: "fill-in",
    description: "Fill in the missing preposition for common verb–preposition combinations that take Dativ."
  };

  window.FILLIN_DECKS[DECK_KEY_DAT] = [

    // MIT + Dat
    { id: "DAT_PREP-001", prompt_de: "Ich spreche ____ meinem Professor.", answer: "mit", hint_en: "sprechen mit", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-002", prompt_de: "Wir treffen uns ____ unseren Freunden.", answer: "mit", hint_en: "sich treffen mit", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-003", prompt_de: "Er versteht sich gut ____ seinen Kollegen.", answer: "mit", hint_en: "sich verstehen mit", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-004", prompt_de: "Sie beginnt ____ der Arbeit.", answer: "mit", hint_en: "beginnen mit", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-005", prompt_de: "Wir rechnen ____ Problemen.", answer: "mit", hint_en: "rechnen mit", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-006", prompt_de: "Er ist zufrieden ____ dem Ergebnis.", answer: "mit", hint_en: "zufrieden sein mit", tags: ["Grammar","verb-prep","Dat","fill-in"] },

    // VON + Dat
    { id: "DAT_PREP-007", prompt_de: "Wir profitieren ____ der Erfahrung.", answer: "von", hint_en: "profitieren von", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-008", prompt_de: "Alles hängt ____ der Zeit ab.", answer: "von", hint_en: "abhängen von", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-009", prompt_de: "Ich träume ____ einem Urlaub.", answer: "von", hint_en: "träumen von", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-010", prompt_de: "Sie erzählt ____ ihrer Reise.", answer: "von", hint_en: "erzählen von", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-011", prompt_de: "Wir sprechen ____ dem Problem.", answer: "von", hint_en: "sprechen von (mention)", tags: ["Grammar","verb-prep","Dat","fill-in"] },

    // BEI + Dat
    { id: "DAT_PREP-012", prompt_de: "Ich bedanke mich ____ dir.", answer: "bei", hint_en: "sich bedanken bei (person)", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-013", prompt_de: "Sie hilft mir ____ der Aufgabe.", answer: "bei", hint_en: "helfen bei", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-014", prompt_de: "Er arbeitet ____ einer Firma.", answer: "bei", hint_en: "arbeiten bei", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-015", prompt_de: "Wir bleiben ____ unserem Plan.", answer: "bei", hint_en: "bleiben bei", tags: ["Grammar","verb-prep","Dat","fill-in"] },

    // ZU + Dat
    { id: "DAT_PREP-016", prompt_de: "Das gehört ____ meinem Bruder.", answer: "zu", hint_en: "gehören zu", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-017", prompt_de: "Das passt gut ____ deinem Kleid.", answer: "zu", hint_en: "passen zu", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-018", prompt_de: "Sie lädt uns ____ ihrer Party ein.", answer: "zu", hint_en: "einladen zu", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-019", prompt_de: "Ich gratuliere dir ____ deinem Erfolg.", answer: "zu", hint_en: "gratulieren zu", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-020", prompt_de: "Er zwingt mich ____ einer Entscheidung.", answer: "zu", hint_en: "zwingen zu", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-021", prompt_de: "Ich entschließe mich ____ einem neuen Plan.", answer: "zu", hint_en: "sich entschließen zu", tags: ["Grammar","verb-prep","Dat","fill-in"] },

    // NACH + Dat
    { id: "DAT_PREP-022", prompt_de: "Ich frage ____ dem Weg.", answer: "nach", hint_en: "fragen nach", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-023", prompt_de: "Wir suchen ____ einer Lösung.", answer: "nach", hint_en: "suchen nach", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-024", prompt_de: "Es riecht ____ Kaffee.", answer: "nach", hint_en: "riechen nach", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-025", prompt_de: "Das schmeckt ____ Erdbeeren.", answer: "nach", hint_en: "schmecken nach", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-026", prompt_de: "Er verlangt ____ mehr Freizeit.", answer: "nach", hint_en: "verlangen nach", tags: ["Grammar","verb-prep","Dat","fill-in"] },

    // VOR + Dat
    { id: "DAT_PREP-027", prompt_de: "Ich habe Angst ____ Spinnen.", answer: "vor", hint_en: "Angst haben vor", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-028", prompt_de: "Sie warnt uns ____ Gefahren.", answer: "vor", hint_en: "warnen vor", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-029", prompt_de: "Er schützt sich ____ Regen.", answer: "vor", hint_en: "schützen vor", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-030", prompt_de: "Sie flieht ____ dem Sturm.", answer: "vor", hint_en: "fliehen vor", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-031", prompt_de: "Er zittert ____ Kälte.", answer: "vor", hint_en: "zittern vor", tags: ["Grammar","verb-prep","Dat","fill-in"] },

    // AN + Dat (less common but important)
    { id: "DAT_PREP-032", prompt_de: "Er leidet ____ einer Krankheit.", answer: "an", hint_en: "leiden an", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-033", prompt_de: "Sie zweifelt ____ seiner Ehrlichkeit.", answer: "an", hint_en: "zweifeln an", tags: ["Grammar","verb-prep","Dat","fill-in"] },

    // IN + Dat
    { id: "DAT_PREP-034", prompt_de: "Der Fehler liegt ____ der Planung.", answer: "in", hint_en: "liegen in", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-035", prompt_de: "Er irrt sich ____ diesem Punkt.", answer: "in", hint_en: "sich irren in", tags: ["Grammar","verb-prep","Dat","fill-in"] },

    // AUS + Dat
    { id: "DAT_PREP-036", prompt_de: "Das besteht ____ vielen Teilen.", answer: "aus", hint_en: "bestehen aus", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-037", prompt_de: "Sie kommt ____ Berlin.", answer: "aus", hint_en: "kommen aus", tags: ["Grammar","verb-prep","Dat","fill-in"] },

    // Additional common fixed combinations
    { id: "DAT_PREP-038", prompt_de: "Er nimmt ____ dem Projekt teil.", answer: "an", hint_en: "teilnehmen an", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-039", prompt_de: "Ich arbeite ____ einem Buch.", answer: "an", hint_en: "arbeiten an", tags: ["Grammar","verb-prep","Dat","fill-in"] },
    { id: "DAT_PREP-040", prompt_de: "Sie erkennt ihn ____ seiner Stimme.", answer: "an", hint_en: "erkennen an", tags: ["Grammar","verb-prep","Dat","fill-in"] }

  ];
})();
