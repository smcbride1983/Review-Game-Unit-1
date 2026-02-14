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
   /* grammar_FILLIN_decks_nom_pronouns_fillin.js
   Deck: Nominativpronomen (ich/du/er/sie/es/wir/ihr/Sie) — Fill-in-the-blank
   Deck key: GRAMMAR_FILLIN_NOM_PRONOUNS_FILLIN

   Notes:
   - IDs: NOM_PRON-001, ...
   - mechanic: fill-in
   - answer: required nominative pronoun (case-insensitive in your checker, but stored lowercase except "Sie")
   - tags: ["Grammar","pronouns","Nom","fill-in"]
*/

(function () {
  window.FILLIN_DECKS = window.FILLIN_DECKS || {};
  window.FILLIN_DECKS_META = window.FILLIN_DECKS_META || {};

  const DECK_KEY_NOM = "GRAMMAR_FILLIN_NOM_PRONOUNS_FILLIN";

  window.FILLIN_DECKS_META[DECK_KEY_NOM] = {
    title: "Nominativpronomen — Fill-in",
    category: "Grammar",
    level: "easy",
    mechanic: "fill-in",
    description: "Fill in the missing subject pronoun (Nominativ): ich, du, er, sie, es, wir, ihr, Sie."
  };

  window.FILLIN_DECKS[DECK_KEY_NOM] = [
    // ich
    { id: "NOM_PRON-001", prompt_de: "____ bin müde.", answer: "ich", hint_en: "I (subject)", tags: ["Grammar","pronouns","Nom","fill-in"] },
    { id: "NOM_PRON-002", prompt_de: "____ komme aus Virginia.", answer: "ich", hint_en: "I (subject)", tags: ["Grammar","pronouns","Nom","fill-in"] },
    { id: "NOM_PRON-003", prompt_de: "____ habe heute keine Zeit.", answer: "ich", hint_en: "I (subject)", tags: ["Grammar","pronouns","Nom","fill-in"] },

    // du
    { id: "NOM_PRON-004", prompt_de: "____ bist sehr freundlich.", answer: "du", hint_en: "you (informal, singular)", tags: ["Grammar","pronouns","Nom","fill-in"] },
    { id: "NOM_PRON-005", prompt_de: "____ lernst gerade Deutsch.", answer: "du", hint_en: "you (informal, singular)", tags: ["Grammar","pronouns","Nom","fill-in"] },
    { id: "NOM_PRON-006", prompt_de: "____ hast recht.", answer: "du", hint_en: "you (informal, singular)", tags: ["Grammar","pronouns","Nom","fill-in"] },

    // er
    { id: "NOM_PRON-007", prompt_de: "____ ist mein Bruder.", answer: "er", hint_en: "he (subject)", tags: ["Grammar","pronouns","Nom","fill-in"] },
    { id: "NOM_PRON-008", prompt_de: "____ wohnt in Berlin.", answer: "er", hint_en: "he (subject)", tags: ["Grammar","pronouns","Nom","fill-in"] },
    { id: "NOM_PRON-009", prompt_de: "____ arbeitet heute spät.", answer: "er", hint_en: "he (subject)", tags: ["Grammar","pronouns","Nom","fill-in"] },

    // sie (she)
    { id: "NOM_PRON-010", prompt_de: "____ ist meine Schwester.", answer: "sie", hint_en: "she (subject)", tags: ["Grammar","pronouns","Nom","fill-in"] },
    { id: "NOM_PRON-011", prompt_de: "____ spricht sehr gut Deutsch.", answer: "sie", hint_en: "she (subject)", tags: ["Grammar","pronouns","Nom","fill-in"] },
    { id: "NOM_PRON-012", prompt_de: "____ hat morgen Geburtstag.", answer: "sie", hint_en: "she (subject)", tags: ["Grammar","pronouns","Nom","fill-in"] },

    // es
    { id: "NOM_PRON-013", prompt_de: "____ regnet heute.", answer: "es", hint_en: "it (weather)", tags: ["Grammar","pronouns","Nom","fill-in"] },
    { id: "NOM_PRON-014", prompt_de: "____ ist kalt draußen.", answer: "es", hint_en: "it (impersonal)", tags: ["Grammar","pronouns","Nom","fill-in"] },
    { id: "NOM_PRON-015", prompt_de: "____ ist wichtig, pünktlich zu sein.", answer: "es", hint_en: "it (dummy subject)", tags: ["Grammar","pronouns","Nom","fill-in"] },

    // wir
    { id: "NOM_PRON-016", prompt_de: "____ gehen heute ins Kino.", answer: "wir", hint_en: "we (subject)", tags: ["Grammar","pronouns","Nom","fill-in"] },
    { id: "NOM_PRON-017", prompt_de: "____ haben Hunger.", answer: "wir", hint_en: "we (subject)", tags: ["Grammar","pronouns","Nom","fill-in"] },
    { id: "NOM_PRON-018", prompt_de: "____ lernen zusammen.", answer: "wir", hint_en: "we (subject)", tags: ["Grammar","pronouns","Nom","fill-in"] },

    // ihr
    { id: "NOM_PRON-019", prompt_de: "____ seid schon fertig.", answer: "ihr", hint_en: "you (plural, informal)", tags: ["Grammar","pronouns","Nom","fill-in"] },
    { id: "NOM_PRON-020", prompt_de: "____ kommt aus der Stadt, oder?", answer: "ihr", hint_en: "you (plural, informal)", tags: ["Grammar","pronouns","Nom","fill-in"] },
    { id: "NOM_PRON-021", prompt_de: "____ habt das wirklich gut gemacht.", answer: "ihr", hint_en: "you (plural, informal)", tags: ["Grammar","pronouns","Nom","fill-in"] },

    // Sie (formal you)
    { id: "NOM_PRON-022", prompt_de: "____ sind heute sehr pünktlich.", answer: "Sie", hint_en: "you (formal)", tags: ["Grammar","pronouns","Nom","fill-in"] },
    { id: "NOM_PRON-023", prompt_de: "____ haben eine Frage?", answer: "Sie", hint_en: "you (formal)", tags: ["Grammar","pronouns","Nom","fill-in"] },
    { id: "NOM_PRON-024", prompt_de: "____ kommen aus den USA, stimmt’s?", answer: "Sie", hint_en: "you (formal)", tags: ["Grammar","pronouns","Nom","fill-in"] },

    // sie (they) — ambiguous with "sie (she)" but context helps (plural verb)
    { id: "NOM_PRON-025", prompt_de: "____ kommen später.", answer: "sie", hint_en: "they (subject)", tags: ["Grammar","pronouns","Nom","fill-in"] },
    { id: "NOM_PRON-026", prompt_de: "____ sind im Park.", answer: "sie", hint_en: "they (subject)", tags: ["Grammar","pronouns","Nom","fill-in"] },
    { id: "NOM_PRON-027", prompt_de: "____ haben das schon gesehen.", answer: "sie", hint_en: "they (subject)", tags: ["Grammar","pronouns","Nom","fill-in"] },

    // mixed quick checks
    { id: "NOM_PRON-028", prompt_de: "____ bin Student.", answer: "ich", hint_en: "I (subject)", tags: ["Grammar","pronouns","Nom","fill-in"] },
    { id: "NOM_PRON-029", prompt_de: "____ ist neu hier.", answer: "er", hint_en: "he (subject)", tags: ["Grammar","pronouns","Nom","fill-in"] },
    { id: "NOM_PRON-030", prompt_de: "____ sind Freunde.", answer: "wir", hint_en: "we (subject)", tags: ["Grammar","pronouns","Nom","fill-in"] }
  ];
/* grammar_FILLIN_decks_akk_pronouns_fillin.js
   Deck: Akkusativpronomen — Fill-in-the-blank
   Deck key: GRAMMAR_FILLIN_AKK_PRONOUNS_FILLIN

   Notes:
   - IDs: AKK_PRON-001, ...
   - Focus: direct-object pronouns (mich, dich, ihn, sie, es, uns, euch, Sie, sie)
   - Prompt uses "____" for the pronoun slot
   - answer is the required accusative pronoun (store lowercase except "Sie")
   - tags: ["Grammar","pronouns","Akk","fill-in"]
*/

(function () {
  window.FILLIN_DECKS = window.FILLIN_DECKS || {};
  window.FILLIN_DECKS_META = window.FILLIN_DECKS_META || {};

  const DECK_KEY_AKK_PRON = "GRAMMAR_FILLIN_AKK_PRONOUNS_FILLIN";

  window.FILLIN_DECKS_META[DECK_KEY_AKK_PRON] = {
    title: "Akkusativpronomen — Fill-in",
    category: "Grammar",
    level: "easy",
    mechanic: "fill-in",
    description: "Fill in the missing direct-object pronoun (Akkusativ): mich, dich, ihn, sie, es, uns, euch, Sie, sie."
  };

  window.FILLIN_DECKS[DECK_KEY_AKK_PRON] = [
    // mich
    { id: "AKK_PRON-001", prompt_de: "Kannst du ____ hören?", answer: "mich", hint_en: "me", tags: ["Grammar","pronouns","Akk","fill-in"] },
    { id: "AKK_PRON-002", prompt_de: "Er sieht ____ jeden Tag.", answer: "mich", hint_en: "me", tags: ["Grammar","pronouns","Akk","fill-in"] },
    { id: "AKK_PRON-003", prompt_de: "Sie ruft ____ heute Abend an.", answer: "mich", hint_en: "me", tags: ["Grammar","pronouns","Akk","fill-in"] },

    // dich
    { id: "AKK_PRON-004", prompt_de: "Ich mag ____ sehr.", answer: "dich", hint_en: "you (informal, singular)", tags: ["Grammar","pronouns","Akk","fill-in"] },
    { id: "AKK_PRON-005", prompt_de: "Wir brauchen ____ jetzt.", answer: "dich", hint_en: "you (informal, singular)", tags: ["Grammar","pronouns","Akk","fill-in"] },
    { id: "AKK_PRON-006", prompt_de: "Ich sehe ____ morgen.", answer: "dich", hint_en: "you (informal, singular)", tags: ["Grammar","pronouns","Akk","fill-in"] },

    // ihn
    { id: "AKK_PRON-007", prompt_de: "Kennst du Max? Ich kenne ____.", answer: "ihn", hint_en: "him", tags: ["Grammar","pronouns","Akk","fill-in"] },
    { id: "AKK_PRON-008", prompt_de: "Wo ist der Hund? Ich finde ____ nicht.", answer: "ihn", hint_en: "him", tags: ["Grammar","pronouns","Akk","fill-in"] },
    { id: "AKK_PRON-009", prompt_de: "Ich besuche meinen Bruder. Ich besuche ____ am Wochenende.", answer: "ihn", hint_en: "him", tags: ["Grammar","pronouns","Akk","fill-in"] },

    // sie (her)
    { id: "AKK_PRON-010", prompt_de: "Kennst du Anna? Ich kenne ____.", answer: "sie", hint_en: "her", tags: ["Grammar","pronouns","Akk","fill-in"] },
    { id: "AKK_PRON-011", prompt_de: "Ich sehe die Lehrerin. Ich sehe ____ gleich.", answer: "sie", hint_en: "her", tags: ["Grammar","pronouns","Akk","fill-in"] },
    { id: "AKK_PRON-012", prompt_de: "Magst du deine Schwester? Ja, ich mag ____.", answer: "sie", hint_en: "her", tags: ["Grammar","pronouns","Akk","fill-in"] },

    // es
    { id: "AKK_PRON-013", prompt_de: "Das Buch ist neu. Ich lese ____ gerade.", answer: "es", hint_en: "it", tags: ["Grammar","pronouns","Akk","fill-in"] },
    { id: "AKK_PRON-014", prompt_de: "Hast du das verstanden? Ja, ich verstehe ____.", answer: "es", hint_en: "it", tags: ["Grammar","pronouns","Akk","fill-in"] },
    { id: "AKK_PRON-015", prompt_de: "Ich kaufe das. Ich kaufe ____ jetzt.", answer: "es", hint_en: "it", tags: ["Grammar","pronouns","Akk","fill-in"] },

    // uns
    { id: "AKK_PRON-016", prompt_de: "Kannst du ____ helfen?", answer: "uns", hint_en: "us (direct object)", tags: ["Grammar","pronouns","Akk","fill-in"] },
    { id: "AKK_PRON-017", prompt_de: "Er besucht ____ morgen.", answer: "uns", hint_en: "us", tags: ["Grammar","pronouns","Akk","fill-in"] },
    { id: "AKK_PRON-018", prompt_de: "Sie sieht ____ im Park.", answer: "uns", hint_en: "us", tags: ["Grammar","pronouns","Akk","fill-in"] },

    // euch
    { id: "AKK_PRON-019", prompt_de: "Ich sehe ____ später.", answer: "euch", hint_en: "you (plural, informal)", tags: ["Grammar","pronouns","Akk","fill-in"] },
    { id: "AKK_PRON-020", prompt_de: "Wir treffen ____ am Samstag.", answer: "euch", hint_en: "you (plural, informal)", tags: ["Grammar","pronouns","Akk","fill-in"] },
    { id: "AKK_PRON-021", prompt_de: "Der Lehrer fragt ____ etwas.", answer: "euch", hint_en: "you (plural, informal)", tags: ["Grammar","pronouns","Akk","fill-in"] },

    // Sie (formal you)
    { id: "AKK_PRON-022", prompt_de: "Entschuldigung, kann ich ____ kurz sprechen?", answer: "Sie", hint_en: "you (formal)", tags: ["Grammar","pronouns","Akk","fill-in"] },
    { id: "AKK_PRON-023", prompt_de: "Ich sehe ____ gleich im Büro.", answer: "Sie", hint_en: "you (formal)", tags: ["Grammar","pronouns","Akk","fill-in"] },
    { id: "AKK_PRON-024", prompt_de: "Der Arzt untersucht ____ jetzt.", answer: "Sie", hint_en: "you (formal)", tags: ["Grammar","pronouns","Akk","fill-in"] },

    // sie (they) — same form as "sie (her)" in Akk, but context helps (plural subject)
    { id: "AKK_PRON-025", prompt_de: "Die Studenten kommen gleich. Ich sehe ____ später.", answer: "sie", hint_en: "them", tags: ["Grammar","pronouns","Akk","fill-in"] },
    { id: "AKK_PRON-026", prompt_de: "Wo sind die Kinder? Ich höre ____ im Garten.", answer: "sie", hint_en: "them", tags: ["Grammar","pronouns","Akk","fill-in"] },
    { id: "AKK_PRON-027", prompt_de: "Ich kenne deine Eltern. Ich kenne ____ gut.", answer: "sie", hint_en: "them", tags: ["Grammar","pronouns","Akk","fill-in"] },

    // mixed quick checks
    { id: "AKK_PRON-028", prompt_de: "Rufst du ____ an?", answer: "mich", hint_en: "me", tags: ["Grammar","pronouns","Akk","fill-in"] },
    { id: "AKK_PRON-029", prompt_de: "Ich finde ____ super.", answer: "dich", hint_en: "you (informal, singular)", tags: ["Grammar","pronouns","Akk","fill-in"] },
    { id: "AKK_PRON-030", prompt_de: "Wir kaufen ____ heute.", answer: "es", hint_en: "it", tags: ["Grammar","pronouns","Akk","fill-in"] }
  ];
/* grammar_FILLIN_decks_dat_pronouns_fillin.js
   Deck: Dativpronomen — Fill-in-the-blank
   Deck key: GRAMMAR_FILLIN_DAT_PRONOUNS_FILLIN

   Notes:
   - IDs: DAT_PRON-001, ...
   - Focus: indirect-object pronouns (mir, dir, ihm, ihr, ihm, uns, euch, Ihnen, ihnen)
     - "ihm" appears for both masculine "er" and neuter "es" in Dativ
   - Prompt uses "____" for the pronoun slot
   - answer is the required dative pronoun (store lowercase except "Ihnen")
   - tags: ["Grammar","pronouns","Dat","fill-in"]
*/

(function () {
  window.FILLIN_DECKS = window.FILLIN_DECKS || {};
  window.FILLIN_DECKS_META = window.FILLIN_DECKS_META || {};

  const DECK_KEY_DAT_PRON = "GRAMMAR_FILLIN_DAT_PRONOUNS_FILLIN";

  window.FILLIN_DECKS_META[DECK_KEY_DAT_PRON] = {
    title: "Dativpronomen — Fill-in",
    category: "Grammar",
    level: "easy",
    mechanic: "fill-in",
    description: "Fill in the missing indirect-object pronoun (Dativ): mir, dir, ihm, ihr, uns, euch, Ihnen, ihnen."
  };

  window.FILLIN_DECKS[DECK_KEY_DAT_PRON] = [
    // mir
    { id: "DAT_PRON-001", prompt_de: "Kannst du ____ helfen?", answer: "mir", hint_en: "to me", tags: ["Grammar","pronouns","Dat","fill-in"] },
    { id: "DAT_PRON-002", prompt_de: "Er gibt ____ das Buch.", answer: "mir", hint_en: "to me", tags: ["Grammar","pronouns","Dat","fill-in"] },
    { id: "DAT_PRON-003", prompt_de: "Sie erklärt ____ die Aufgabe.", answer: "mir", hint_en: "to me", tags: ["Grammar","pronouns","Dat","fill-in"] },

    // dir
    { id: "DAT_PRON-004", prompt_de: "Ich zeige ____ den Weg.", answer: "dir", hint_en: "to you (informal, singular)", tags: ["Grammar","pronouns","Dat","fill-in"] },
    { id: "DAT_PRON-005", prompt_de: "Wir schicken ____ eine Nachricht.", answer: "dir", hint_en: "to you (informal, singular)", tags: ["Grammar","pronouns","Dat","fill-in"] },
    { id: "DAT_PRON-006", prompt_de: "Er antwortet ____ sofort.", answer: "dir", hint_en: "to you (informal, singular)", tags: ["Grammar","pronouns","Dat","fill-in"] },

    // ihm (masc)
    { id: "DAT_PRON-007", prompt_de: "Ich gebe ____ das Geld.", answer: "ihm", hint_en: "to him", tags: ["Grammar","pronouns","Dat","fill-in"] },
    { id: "DAT_PRON-008", prompt_de: "Sie hilft ____ bei den Hausaufgaben.", answer: "ihm", hint_en: "to him", tags: ["Grammar","pronouns","Dat","fill-in"] },
    { id: "DAT_PRON-009", prompt_de: "Wir erzählen ____ die Geschichte.", answer: "ihm", hint_en: "to him", tags: ["Grammar","pronouns","Dat","fill-in"] },

    // ihr (fem)
    { id: "DAT_PRON-010", prompt_de: "Ich gebe ____ den Schlüssel.", answer: "ihr", hint_en: "to her", tags: ["Grammar","pronouns","Dat","fill-in"] },
    { id: "DAT_PRON-011", prompt_de: "Er erklärt ____ die Regeln.", answer: "ihr", hint_en: "to her", tags: ["Grammar","pronouns","Dat","fill-in"] },
    { id: "DAT_PRON-012", prompt_de: "Wir gratulieren ____ zum Geburtstag.", answer: "ihr", hint_en: "to her", tags: ["Grammar","pronouns","Dat","fill-in"] },

    // ihm (neuter: es -> ihm)
    { id: "DAT_PRON-013", prompt_de: "Das Kind gibt ____ einen Namen.", answer: "ihm", hint_en: "to it (neuter: es → ihm)", tags: ["Grammar","pronouns","Dat","fill-in"] },
    { id: "DAT_PRON-014", prompt_de: "Ich helfe ____ beim Lernen.", answer: "ihm", hint_en: "to it (neuter: es → ihm)", tags: ["Grammar","pronouns","Dat","fill-in"] },
    { id: "DAT_PRON-015", prompt_de: "Wir geben ____ eine Chance.", answer: "ihm", hint_en: "to it (neuter: es → ihm)", tags: ["Grammar","pronouns","Dat","fill-in"] },

    // uns
    { id: "DAT_PRON-016", prompt_de: "Kannst du ____ das erklären?", answer: "uns", hint_en: "to us", tags: ["Grammar","pronouns","Dat","fill-in"] },
    { id: "DAT_PRON-017", prompt_de: "Er bringt ____ Kaffee.", answer: "uns", hint_en: "to us", tags: ["Grammar","pronouns","Dat","fill-in"] },
    { id: "DAT_PRON-018", prompt_de: "Sie erzählt ____ etwas Wichtiges.", answer: "uns", hint_en: "to us", tags: ["Grammar","pronouns","Dat","fill-in"] },

    // euch
    { id: "DAT_PRON-019", prompt_de: "Ich zeige ____ die Fotos.", answer: "euch", hint_en: "to you (plural, informal)", tags: ["Grammar","pronouns","Dat","fill-in"] },
    { id: "DAT_PRON-020", prompt_de: "Wir schicken ____ die Unterlagen.", answer: "euch", hint_en: "to you (plural, informal)", tags: ["Grammar","pronouns","Dat","fill-in"] },
    { id: "DAT_PRON-021", prompt_de: "Der Lehrer erklärt ____ die Aufgabe.", answer: "euch", hint_en: "to you (plural, informal)", tags: ["Grammar","pronouns","Dat","fill-in"] },

    // Ihnen (formal you)
    { id: "DAT_PRON-022", prompt_de: "Kann ich ____ helfen?", answer: "Ihnen", hint_en: "to you (formal)", tags: ["Grammar","pronouns","Dat","fill-in"] },
    { id: "DAT_PRON-023", prompt_de: "Ich schicke ____ eine E-Mail.", answer: "Ihnen", hint_en: "to you (formal)", tags: ["Grammar","pronouns","Dat","fill-in"] },
    { id: "DAT_PRON-024", prompt_de: "Der Arzt erklärt ____ alles.", answer: "Ihnen", hint_en: "to you (formal)", tags: ["Grammar","pronouns","Dat","fill-in"] },

    // ihnen (they)
    { id: "DAT_PRON-025", prompt_de: "Ich gebe ____ das Geld.", answer: "ihnen", hint_en: "to them", tags: ["Grammar","pronouns","Dat","fill-in"] },
    { id: "DAT_PRON-026", prompt_de: "Wir helfen ____ bei der Aufgabe.", answer: "ihnen", hint_en: "to them", tags: ["Grammar","pronouns","Dat","fill-in"] },
    { id: "DAT_PRON-027", prompt_de: "Der Lehrer erklärt ____ die Regeln.", answer: "ihnen", hint_en: "to them", tags: ["Grammar","pronouns","Dat","fill-in"] },

    // mixed quick checks
    { id: "DAT_PRON-028", prompt_de: "Er sagt ____ die Wahrheit.", answer: "mir", hint_en: "to me", tags: ["Grammar","pronouns","Dat","fill-in"] },
    { id: "DAT_PRON-029", prompt_de: "Ich schreibe ____ morgen.", answer: "dir", hint_en: "to you (informal, singular)", tags: ["Grammar","pronouns","Dat","fill-in"] },
    { id: "DAT_PRON-030", prompt_de: "Wir geben ____ Bescheid.", answer: "Ihnen", hint_en: "to you (formal)", tags: ["Grammar","pronouns","Dat","fill-in"] }
  ];




})();
