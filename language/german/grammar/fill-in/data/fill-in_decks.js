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

/* grammar_FILLIN_decks_case_trigger_pronouns.js
   Deck: Case Trigger — Object Pronouns (Mixed Akk/Dat)
   Deck key: GRAMMAR_FILLIN_CASE_TRIGGER_PRONOUNS

   Notes:
   - Learner must determine case from verb structure
   - Then choose correct pronoun form
   - IDs: CASE_TRIG-001, ...
   - tags: ["Grammar","pronouns","case-detection","mixed","fill-in"]
*/

(function () {
  window.FILLIN_DECKS = window.FILLIN_DECKS || {};
  window.FILLIN_DECKS_META = window.FILLIN_DECKS_META || {};

  const DECK_KEY_CASE = "GRAMMAR_FILLIN_CASE_TRIGGER_PRONOUNS";

  window.FILLIN_DECKS_META[DECK_KEY_CASE] = {
    title: "Case Trigger — Mixed Object Pronouns",
    category: "Grammar",
    level: "medium",
    mechanic: "fill-in",
    description: "Choose the correct pronoun form (Akk or Dat) based on the verb and structure."
  };

  window.FILLIN_DECKS[DECK_KEY_CASE] = [

    // Akkusativ triggers (direct object)
    { id: "CASE_TRIG-001", prompt_de: "Er sieht ____ (ich).", answer: "mich", hint_en: "sehen → direct object", tags: ["Grammar","pronouns","case-detection","mixed","fill-in"] },
    { id: "CASE_TRIG-002", prompt_de: "Wir besuchen ____ (du).", answer: "dich", hint_en: "besuchen → direct object", tags: ["Grammar","pronouns","case-detection","mixed","fill-in"] },
    { id: "CASE_TRIG-003", prompt_de: "Ich kenne ____ (er).", answer: "ihn", hint_en: "kennen → direct object", tags: ["Grammar","pronouns","case-detection","mixed","fill-in"] },
    { id: "CASE_TRIG-004", prompt_de: "Sie ruft ____ (wir) an.", answer: "uns", hint_en: "anrufen → direct object", tags: ["Grammar","pronouns","case-detection","mixed","fill-in"] },
    { id: "CASE_TRIG-005", prompt_de: "Ich finde ____ (sie – plural).", answer: "sie", hint_en: "finden → direct object", tags: ["Grammar","pronouns","case-detection","mixed","fill-in"] },

    // Dativ triggers (indirect object verbs)
    { id: "CASE_TRIG-006", prompt_de: "Er hilft ____ (ich).", answer: "mir", hint_en: "helfen → Dativ", tags: ["Grammar","pronouns","case-detection","mixed","fill-in"] },
    { id: "CASE_TRIG-007", prompt_de: "Ich danke ____ (du).", answer: "dir", hint_en: "danken → Dativ", tags: ["Grammar","pronouns","case-detection","mixed","fill-in"] },
    { id: "CASE_TRIG-008", prompt_de: "Wir folgen ____ (er).", answer: "ihm", hint_en: "folgen → Dativ", tags: ["Grammar","pronouns","case-detection","mixed","fill-in"] },
    { id: "CASE_TRIG-009", prompt_de: "Sie antwortet ____ (wir).", answer: "uns", hint_en: "antworten → Dativ", tags: ["Grammar","pronouns","case-detection","mixed","fill-in"] },
    { id: "CASE_TRIG-010", prompt_de: "Ich gratuliere ____ (sie – singular).", answer: "ihr", hint_en: "gratulieren → Dativ", tags: ["Grammar","pronouns","case-detection","mixed","fill-in"] },

    // Double-object structures (must choose correct case)
    { id: "CASE_TRIG-011", prompt_de: "Ich gebe ____ (er) das Buch.", answer: "ihm", hint_en: "geben → indirect object = Dativ", tags: ["Grammar","pronouns","case-detection","mixed","fill-in"] },
    { id: "CASE_TRIG-012", prompt_de: "Sie zeigt ____ (ich) den Weg.", answer: "mir", hint_en: "zeigen → indirect object = Dativ", tags: ["Grammar","pronouns","case-detection","mixed","fill-in"] },
    { id: "CASE_TRIG-013", prompt_de: "Wir schicken ____ (du) eine Nachricht.", answer: "dir", hint_en: "schicken → indirect object = Dativ", tags: ["Grammar","pronouns","case-detection","mixed","fill-in"] },
    { id: "CASE_TRIG-014", prompt_de: "Er bringt ____ (wir) Kaffee.", answer: "uns", hint_en: "bringen → indirect object = Dativ", tags: ["Grammar","pronouns","case-detection","mixed","fill-in"] },

    // Contrast pairs (Akk vs Dat confusion)
    { id: "CASE_TRIG-015", prompt_de: "Er fragt ____ (ich).", answer: "mich", hint_en: "fragen → Akkusativ", tags: ["Grammar","pronouns","case-detection","mixed","fill-in"] },
    { id: "CASE_TRIG-016", prompt_de: "Er antwortet ____ (ich).", answer: "mir", hint_en: "antworten → Dativ", tags: ["Grammar","pronouns","case-detection","mixed","fill-in"] },

    { id: "CASE_TRIG-017", prompt_de: "Ich höre ____ (du).", answer: "dich", hint_en: "hören → Akkusativ", tags: ["Grammar","pronouns","case-detection","mixed","fill-in"] },
    { id: "CASE_TRIG-018", prompt_de: "Ich helfe ____ (du).", answer: "dir", hint_en: "helfen → Dativ", tags: ["Grammar","pronouns","case-detection","mixed","fill-in"] },

    { id: "CASE_TRIG-019", prompt_de: "Wir sehen ____ (sie – singular).", answer: "sie", hint_en: "sehen → Akkusativ", tags: ["Grammar","pronouns","case-detection","mixed","fill-in"] },
    { id: "CASE_TRIG-020", prompt_de: "Wir geben ____ (sie – singular) das Geld.", answer: "ihr", hint_en: "geben → indirect object = Dativ", tags: ["Grammar","pronouns","case-detection","mixed","fill-in"] },

    // Formal forms
    { id: "CASE_TRIG-021", prompt_de: "Ich sehe ____ (Sie – formal).", answer: "Sie", hint_en: "Akkusativ formal", tags: ["Grammar","pronouns","case-detection","mixed","fill-in"] },
    { id: "CASE_TRIG-022", prompt_de: "Ich helfe ____ (Sie – formal).", answer: "Ihnen", hint_en: "Dativ formal", tags: ["Grammar","pronouns","case-detection","mixed","fill-in"] },

    // Plural forms
    { id: "CASE_TRIG-023", prompt_de: "Ich sehe ____ (sie – plural).", answer: "sie", hint_en: "Akkusativ plural", tags: ["Grammar","pronouns","case-detection","mixed","fill-in"] },
    { id: "CASE_TRIG-024", prompt_de: "Ich helfe ____ (sie – plural).", answer: "ihnen", hint_en: "Dativ plural", tags: ["Grammar","pronouns","case-detection","mixed","fill-in"] }

  ];
/* grammar_FILLIN_decks_conversation_articles_case.js
   Deck: Conversation — Articles (Akk vs Dat)
   Deck key: GRAMMAR_FILLIN_CONVERSATION_ARTICLES_CASE

   Learner must:
   - Read a short question
   - Complete the response
   - Insert the correct article form (der/die/das/den/dem/…)

   IDs: CONV_ART-001, ...
   Tags: ["Grammar","articles","Akk","Dat","conversation","fill-in"]
*/

(function () {
  window.FILLIN_DECKS = window.FILLIN_DECKS || {};
  window.FILLIN_DECKS_META = window.FILLIN_DECKS_META || {};

  const DECK_KEY_CONV = "GRAMMAR_FILLIN_CONVERSATION_ARTICLES_CASE";

  window.FILLIN_DECKS_META[DECK_KEY_CONV] = {
    title: "Conversation — Articles (Akk vs Dat)",
    category: "Grammar",
    level: "medium",
    mechanic: "fill-in",
    description: "Complete the response using the correct article form based on Akkusativ or Dativ."
  };

  window.FILLIN_DECKS[DECK_KEY_CONV] = [

    // Akkusativ triggers (direct object)

    {
      id: "CONV_ART-001",
      prompt_de: "A: Hast du den Film gesehen?\nB: Ja, ich habe ____ Film gesehen.",
      answer: "den",
      hint_en: "sehen → Akkusativ",
      tags: ["Grammar","articles","Akk","conversation","fill-in"]
    },

    {
      id: "CONV_ART-002",
      prompt_de: "A: Kennst du die Lehrerin?\nB: Ja, ich kenne ____ Lehrerin.",
      answer: "die",
      hint_en: "kennen → Akkusativ (fem stays die)",
      tags: ["Grammar","articles","Akk","conversation","fill-in"]
    },

    {
      id: "CONV_ART-003",
      prompt_de: "A: Kaufst du das Auto?\nB: Ja, ich kaufe ____ Auto.",
      answer: "das",
      hint_en: "kaufen → Akkusativ (neuter stays das)",
      tags: ["Grammar","articles","Akk","conversation","fill-in"]
    },

    {
      id: "CONV_ART-004",
      prompt_de: "A: Besuchst du der Arzt?\nB: Nein, ich besuche ____ Arzt morgen.",
      answer: "den",
      hint_en: "besuchen → Akkusativ (masc → den)",
      tags: ["Grammar","articles","Akk","conversation","fill-in"]
    },

    // Dativ triggers (prepositions)

    {
      id: "CONV_ART-005",
      prompt_de: "A: Mit wem sprichst du?\nB: Ich spreche mit ____ Lehrer.",
      answer: "dem",
      hint_en: "mit → Dativ (masc → dem)",
      tags: ["Grammar","articles","Dat","conversation","fill-in"]
    },

    {
      id: "CONV_ART-006",
      prompt_de: "A: Hilfst du der Frau?\nB: Ja, ich helfe ____ Frau.",
      answer: "der",
      hint_en: "helfen → Dativ (fem → der)",
      tags: ["Grammar","articles","Dat","conversation","fill-in"]
    },

    {
      id: "CONV_ART-007",
      prompt_de: "A: Arbeitest du bei der Firma?\nB: Ja, ich arbeite bei ____ Firma.",
      answer: "der",
      hint_en: "bei → Dativ",
      tags: ["Grammar","articles","Dat","conversation","fill-in"]
    },

    {
      id: "CONV_ART-008",
      prompt_de: "A: Spielst du mit dem Kind?\nB: Ja, ich spiele mit ____ Kind.",
      answer: "dem",
      hint_en: "mit → Dativ (neuter → dem)",
      tags: ["Grammar","articles","Dat","conversation","fill-in"]
    },

    // Mixed: double object

    {
      id: "CONV_ART-009",
      prompt_de: "A: Gibst du dem Mann das Buch?\nB: Ja, ich gebe ____ Mann das Buch.",
      answer: "dem",
      hint_en: "indirect object → Dativ",
      tags: ["Grammar","articles","Dat","conversation","fill-in"]
    },

    {
      id: "CONV_ART-010",
      prompt_de: "A: Zeigst du den Schülern den Film?\nB: Ja, ich zeige ____ Film.",
      answer: "den",
      hint_en: "direct object → Akkusativ",
      tags: ["Grammar","articles","Akk","conversation","fill-in"]
    },

    // Preposition + Akk

    {
      id: "CONV_ART-011",
      prompt_de: "A: Freust du dich auf das Wochenende?\nB: Ja, ich freue mich auf ____ Wochenende.",
      answer: "das",
      hint_en: "auf (no movement) → Akkusativ",
      tags: ["Grammar","articles","Akk","conversation","fill-in"]
    },

    {
      id: "CONV_ART-012",
      prompt_de: "A: Denkst du an den Test?\nB: Ja, ich denke an ____ Test.",
      answer: "den",
      hint_en: "an → Akkusativ here",
      tags: ["Grammar","articles","Akk","conversation","fill-in"]
    },

    // Dativ after certain verbs

    {
      id: "CONV_ART-013",
      prompt_de: "A: Folgst du dem Lehrer?\nB: Ja, ich folge ____ Lehrer.",
      answer: "dem",
      hint_en: "folgen → Dativ",
      tags: ["Grammar","articles","Dat","conversation","fill-in"]
    },

    {
      id: "CONV_ART-014",
      prompt_de: "A: Dankst du der Frau?\nB: Ja, ich danke ____ Frau.",
      answer: "der",
      hint_en: "danken → Dativ",
      tags: ["Grammar","articles","Dat","conversation","fill-in"]
    }

  ];
/* grammar_FILLIN_decks_dat_pronouns_core_40.js
   Deck: Dative Pronouns — Core Drill (40 Questions)
   Deck key: GRAMMAR_FILLIN_DAT_PRONOUNS_CORE_40

   Focus:
   - One blank
   - No hints
   - Verb determines Dativ
   - Reinforces mir/dir/ihm/ihr/uns/euch/Ihnen/ihnen

   Tags: ["Grammar","pronouns","Dat","core","fill-in"]
*/

(function () {
  window.FILLIN_DECKS = window.FILLIN_DECKS || {};
  window.FILLIN_DECKS_META = window.FILLIN_DECKS_META || {};

  const DECK_KEY = "GRAMMAR_FILLIN_DAT_PRONOUNS_CORE_40";

  window.FILLIN_DECKS_META[DECK_KEY] = {
    title: "Dative Pronouns — Core Drill (40)",
    category: "Grammar",
    level: "medium",
    mechanic: "fill-in",
    description: "Choose the correct Dativ pronoun based on context."
  };

  window.FILLIN_DECKS[DECK_KEY] = [

    // helfen
    { id: "DAT40-001", prompt_de: "Er hilft ____.", answer: "mir", tags: ["Grammar","pronouns","Dat","core","fill-in"] },
    { id: "DAT40-002", prompt_de: "Ich helfe ____.", answer: "dir", tags: ["Grammar","pronouns","Dat","core","fill-in"] },
    { id: "DAT40-003", prompt_de: "Wir helfen ____.", answer: "ihm", tags: ["Grammar","pronouns","Dat","core","fill-in"] },
    { id: "DAT40-004", prompt_de: "Sie hilft ____.", answer: "uns", tags: ["Grammar","pronouns","Dat","core","fill-in"] },
    { id: "DAT40-005", prompt_de: "Ich helfe ____ gern.", answer: "euch", tags: ["Grammar","pronouns","Dat","core","fill-in"] },

    // danken
    { id: "DAT40-006", prompt_de: "Ich danke ____.", answer: "dir", tags: ["Grammar","pronouns","Dat","core","fill-in"] },
    { id: "DAT40-007", prompt_de: "Wir danken ____.", answer: "ihnen", tags: ["Grammar","pronouns","Dat","core","fill-in"] },
    { id: "DAT40-008", prompt_de: "Er dankt ____.", answer: "ihr", tags: ["Grammar","pronouns","Dat","core","fill-in"] },
    { id: "DAT40-009", prompt_de: "Sie dankt ____ sehr.", answer: "mir", tags: ["Grammar","pronouns","Dat","core","fill-in"] },

    // antworten
    { id: "DAT40-010", prompt_de: "Er antwortet ____.", answer: "mir", tags: ["Grammar","pronouns","Dat","core","fill-in"] },
    { id: "DAT40-011", prompt_de: "Ich antworte ____.", answer: "ihm", tags: ["Grammar","pronouns","Dat","core","fill-in"] },
    { id: "DAT40-012", prompt_de: "Wir antworten ____ später.", answer: "euch", tags: ["Grammar","pronouns","Dat","core","fill-in"] },
    { id: "DAT40-013", prompt_de: "Sie antwortet ____ nicht.", answer: "uns", tags: ["Grammar","pronouns","Dat","core","fill-in"] },

    // folgen
    { id: "DAT40-014", prompt_de: "Wir folgen ____.", answer: "ihr", tags: ["Grammar","pronouns","Dat","core","fill-in"] },
    { id: "DAT40-015", prompt_de: "Er folgt ____.", answer: "mir", tags: ["Grammar","pronouns","Dat","core","fill-in"] },
    { id: "DAT40-016", prompt_de: "Ich folge ____.", answer: "dir", tags: ["Grammar","pronouns","Dat","core","fill-in"] },
    { id: "DAT40-017", prompt_de: "Sie folgt ____.", answer: "ihm", tags: ["Grammar","pronouns","Dat","core","fill-in"] },

    // gehören
    { id: "DAT40-018", prompt_de: "Das gehört ____.", answer: "mir", tags: ["Grammar","pronouns","Dat","core","fill-in"] },
    { id: "DAT40-019", prompt_de: "Das gehört ____.", answer: "uns", tags: ["Grammar","pronouns","Dat","core","fill-in"] },
    { id: "DAT40-020", prompt_de: "Das gehört ____.", answer: "ihnen", tags: ["Grammar","pronouns","Dat","core","fill-in"] },

    // gratulieren
    { id: "DAT40-021", prompt_de: "Ich gratuliere ____.", answer: "dir", tags: ["Grammar","pronouns","Dat","core","fill-in"] },
    { id: "DAT40-022", prompt_de: "Wir gratulieren ____.", answer: "ihr", tags: ["Grammar","pronouns","Dat","core","fill-in"] },
    { id: "DAT40-023", prompt_de: "Er gratuliert ____.", answer: "uns", tags: ["Grammar","pronouns","Dat","core","fill-in"] },

    // passen
    { id: "DAT40-024", prompt_de: "Das passt ____ gut.", answer: "mir", tags: ["Grammar","pronouns","Dat","core","fill-in"] },
    { id: "DAT40-025", prompt_de: "Das passt ____ nicht.", answer: "dir", tags: ["Grammar","pronouns","Dat","core","fill-in"] },
    { id: "DAT40-026", prompt_de: "Das passt ____ perfekt.", answer: "ihr", tags: ["Grammar","pronouns","Dat","core","fill-in"] },

    // gefallen
    { id: "DAT40-027", prompt_de: "Das gefällt ____.", answer: "mir", tags: ["Grammar","pronouns","Dat","core","fill-in"] },
    { id: "DAT40-028", prompt_de: "Das gefällt ____ sehr.", answer: "ihm", tags: ["Grammar","pronouns","Dat","core","fill-in"] },
    { id: "DAT40-029", prompt_de: "Das gefällt ____ nicht.", answer: "uns", tags: ["Grammar","pronouns","Dat","core","fill-in"] },

    // schmecken
    { id: "DAT40-030", prompt_de: "Das schmeckt ____ gut.", answer: "dir", tags: ["Grammar","pronouns","Dat","core","fill-in"] },
    { id: "DAT40-031", prompt_de: "Das schmeckt ____ nicht.", answer: "euch", tags: ["Grammar","pronouns","Dat","core","fill-in"] },

    // glauben
    { id: "DAT40-032", prompt_de: "Er glaubt ____.", answer: "mir", tags: ["Grammar","pronouns","Dat","core","fill-in"] },
    { id: "DAT40-033", prompt_de: "Ich glaube ____.", answer: "dir", tags: ["Grammar","pronouns","Dat","core","fill-in"] },

    // fehlen
    { id: "DAT40-034", prompt_de: "Du fehlst ____.", answer: "mir", tags: ["Grammar","pronouns","Dat","core","fill-in"] },
    { id: "DAT40-035", prompt_de: "Wir fehlen ____.", answer: "ihnen", tags: ["Grammar","pronouns","Dat","core","fill-in"] },

    // formell
    { id: "DAT40-036", prompt_de: "Kann ich ____ helfen?", answer: "Ihnen", tags: ["Grammar","pronouns","Dat","core","fill-in"] },
    { id: "DAT40-037", prompt_de: "Ich danke ____ herzlich.", answer: "Ihnen", tags: ["Grammar","pronouns","Dat","core","fill-in"] },

    // mixed reinforcement
    { id: "DAT40-038", prompt_de: "Wir helfen ____ morgen.", answer: "ihnen", tags: ["Grammar","pronouns","Dat","core","fill-in"] },
    { id: "DAT40-039", prompt_de: "Sie antwortet ____ sofort.", answer: "dir", tags: ["Grammar","pronouns","Dat","core","fill-in"] },
    { id: "DAT40-040", prompt_de: "Er folgt ____ nach Hause.", answer: "uns", tags: ["Grammar","pronouns","Dat","core","fill-in"] }

  ];
/* grammar_FILLIN_decks_mixed_articles_def_indef_40.js
   Deck: Mixed Articles — Definite & Indefinite (Akk + Dat)
   Deck key: GRAMMAR_FILLIN_MIXED_ARTICLES_DEF_INDEF_40

   Focus:
   - Mixed Akkusativ & Dativ
   - Definite + Indefinite
   - Hint provides gender + case only (e.g., "masc Akk")
   - High emphasis on masculine transformations

   Tags: ["Grammar","articles","Akk","Dat","mixed","fill-in"]
*/

(function () {
  window.FILLIN_DECKS = window.FILLIN_DECKS || {};
  window.FILLIN_DECKS_META = window.FILLIN_DECKS_META || {};

  const DECK_KEY = "GRAMMAR_FILLIN_MIXED_ARTICLES_DEF_INDEF_40";

  window.FILLIN_DECKS_META[DECK_KEY] = {
    title: "Mixed Articles — Definite & Indefinite (40)",
    category: "Grammar",
    level: "medium",
    mechanic: "fill-in",
    description: "Choose the correct definite or indefinite article based on gender and case."
  };

  window.FILLIN_DECKS[DECK_KEY] = [

    // Masculine — Akk vs Dat (highest impact)

    { id: "ART40-001", prompt_de: "Ich sehe ____ Mann.", answer: "den", hint_en: "masc Akk (def)", tags: ["Grammar","articles","fill-in"] },
    { id: "ART40-002", prompt_de: "Ich helfe ____ Mann.", answer: "dem", hint_en: "masc Dat (def)", tags: ["Grammar","articles","fill-in"] },
    { id: "ART40-003", prompt_de: "Ich sehe ____ Hund.", answer: "einen", hint_en: "masc Akk (indef)", tags: ["Grammar","articles","fill-in"] },
    { id: "ART40-004", prompt_de: "Ich helfe ____ Hund.", answer: "einem", hint_en: "masc Dat (indef)", tags: ["Grammar","articles","fill-in"] },

    { id: "ART40-005", prompt_de: "Ich kenne ____ Lehrer.", answer: "den", hint_en: "masc Akk (def)", tags: ["Grammar","articles","fill-in"] },
    { id: "ART40-006", prompt_de: "Ich danke ____ Lehrer.", answer: "dem", hint_en: "masc Dat (def)", tags: ["Grammar","articles","fill-in"] },
    { id: "ART40-007", prompt_de: "Ich kaufe ____ Apfel.", answer: "einen", hint_en: "masc Akk (indef)", tags: ["Grammar","articles","fill-in"] },
    { id: "ART40-008", prompt_de: "Ich gebe ____ Apfel.", answer: "einem", hint_en: "masc Dat (indef)", tags: ["Grammar","articles","fill-in"] },

    // Feminine

    { id: "ART40-009", prompt_de: "Ich sehe ____ Frau.", answer: "die", hint_en: "fem Akk (def)", tags: ["Grammar","articles","fill-in"] },
    { id: "ART40-010", prompt_de: "Ich helfe ____ Frau.", answer: "der", hint_en: "fem Dat (def)", tags: ["Grammar","articles","fill-in"] },
    { id: "ART40-011", prompt_de: "Ich kaufe ____ Tasche.", answer: "eine", hint_en: "fem Akk (indef)", tags: ["Grammar","articles","fill-in"] },
    { id: "ART40-012", prompt_de: "Ich helfe ____ Tasche.", answer: "einer", hint_en: "fem Dat (indef)", tags: ["Grammar","articles","fill-in"] },

    { id: "ART40-013", prompt_de: "Ich besuche ____ Freundin.", answer: "die", hint_en: "fem Akk (def)", tags: ["Grammar","articles","fill-in"] },
    { id: "ART40-014", prompt_de: "Ich danke ____ Freundin.", answer: "der", hint_en: "fem Dat (def)", tags: ["Grammar","articles","fill-in"] },

    // Neuter

    { id: "ART40-015", prompt_de: "Ich sehe ____ Kind.", answer: "das", hint_en: "neut Akk (def)", tags: ["Grammar","articles","fill-in"] },
    { id: "ART40-016", prompt_de: "Ich helfe ____ Kind.", answer: "dem", hint_en: "neut Dat (def)", tags: ["Grammar","articles","fill-in"] },
    { id: "ART40-017", prompt_de: "Ich kaufe ____ Auto.", answer: "ein", hint_en: "neut Akk (indef)", tags: ["Grammar","articles","fill-in"] },
    { id: "ART40-018", prompt_de: "Ich gebe ____ Auto.", answer: "einem", hint_en: "neut Dat (indef)", tags: ["Grammar","articles","fill-in"] },

    // Plural definite

    { id: "ART40-019", prompt_de: "Ich sehe ____ Kinder.", answer: "die", hint_en: "plural Akk (def)", tags: ["Grammar","articles","fill-in"] },
    { id: "ART40-020", prompt_de: "Ich helfe ____ Kindern.", answer: "den", hint_en: "plural Dat (def)", tags: ["Grammar","articles","fill-in"] },
    { id: "ART40-021", prompt_de: "Ich spreche mit ____ Studenten.", answer: "den", hint_en: "plural Dat (def)", tags: ["Grammar","articles","fill-in"] },

    // Prepositions — mixed

    { id: "ART40-022", prompt_de: "Ich freue mich auf ____ Urlaub.", answer: "den", hint_en: "masc Akk (def)", tags: ["Grammar","articles","fill-in"] },
    { id: "ART40-023", prompt_de: "Ich arbeite bei ____ Firma.", answer: "der", hint_en: "fem Dat (def)", tags: ["Grammar","articles","fill-in"] },
    { id: "ART40-024", prompt_de: "Ich denke an ____ Test.", answer: "den", hint_en: "masc Akk (def)", tags: ["Grammar","articles","fill-in"] },
    { id: "ART40-025", prompt_de: "Ich spreche mit ____ Kollegen.", answer: "dem", hint_en: "masc Dat (def)", tags: ["Grammar","articles","fill-in"] },

    // Double object structures

    { id: "ART40-026", prompt_de: "Ich gebe ____ Mann das Buch.", answer: "dem", hint_en: "masc Dat (def)", tags: ["Grammar","articles","fill-in"] },
    { id: "ART40-027", prompt_de: "Ich kaufe ____ Mann ein Geschenk.", answer: "einem", hint_en: "masc Dat (indef)", tags: ["Grammar","articles","fill-in"] },
    { id: "ART40-028", prompt_de: "Ich sehe ____ Mann.", answer: "einen", hint_en: "masc Akk (indef)", tags: ["Grammar","articles","fill-in"] },

    // More rotation for automaticity

    { id: "ART40-029", prompt_de: "Ich kenne ____ Vater.", answer: "den", hint_en: "masc Akk (def)", tags: ["Grammar","articles","fill-in"] },
    { id: "ART40-030", prompt_de: "Ich folge ____ Vater.", answer: "dem", hint_en: "masc Dat (def)", tags: ["Grammar","articles","fill-in"] },

    { id: "ART40-031", prompt_de: "Ich sehe ____ Blume.", answer: "eine", hint_en: "fem Akk (indef)", tags: ["Grammar","articles","fill-in"] },
    { id: "ART40-032", prompt_de: "Ich helfe ____ Blume.", answer: "einer", hint_en: "fem Dat (indef)", tags: ["Grammar","articles","fill-in"] },

    { id: "ART40-033", prompt_de: "Ich kaufe ____ Buch.", answer: "ein", hint_en: "neut Akk (indef)", tags: ["Grammar","articles","fill-in"] },
    { id: "ART40-034", prompt_de: "Ich gebe ____ Buch.", answer: "einem", hint_en: "neut Dat (indef)", tags: ["Grammar","articles","fill-in"] },

    { id: "ART40-035", prompt_de: "Ich sehe ____ Studenten.", answer: "die", hint_en: "plural Akk (def)", tags: ["Grammar","articles","fill-in"] },
    { id: "ART40-036", prompt_de: "Ich helfe ____ Studenten.", answer: "den", hint_en: "plural Dat (def)", tags: ["Grammar","articles","fill-in"] },

    { id: "ART40-037", prompt_de: "Ich arbeite mit ____ Mann.", answer: "einem", hint_en: "masc Dat (indef)", tags: ["Grammar","articles","fill-in"] },
    { id: "ART40-038", prompt_de: "Ich denke an ____ Freund.", answer: "einen", hint_en: "masc Akk (indef)", tags: ["Grammar","articles","fill-in"] },

    { id: "ART40-039", prompt_de: "Ich danke ____ Kind.", answer: "dem", hint_en: "neut Dat (def)", tags: ["Grammar","articles","fill-in"] },
    { id: "ART40-040", prompt_de: "Ich sehe ____ Kind.", answer: "ein", hint_en: "neut Akk (indef)", tags: ["Grammar","articles","fill-in"] }

  ];

   /* grammar_FILLIN_decks_conversation_perfekt_conjugate_80_split.js
   Deck: Conversation — Perfekt (Split: Aux-only + Partizip-only)
   Deck key: GRAMMAR_FILLIN_CONVERSATION_PERFEKT_SPLIT_80

   Mechanic:
   - Each original item becomes TWO cards:
     a) Aux-only (one blank): user types only the conjugated auxiliary (habe/hast/hat/haben/seid/sind/etc.)
     b) Partizip-only (one blank): user types only the Partizip II

   Tags: ["Grammar","Perfekt","conversation","fill-in"]
*/

(function () {
  window.FILLIN_DECKS = window.FILLIN_DECKS || {};
  window.FILLIN_DECKS_META = window.FILLIN_DECKS_META || {};

  const DECK_KEY = "GRAMMAR_FILLIN_CONVERSATION_PERFEKT_SPLIT_80";

  window.FILLIN_DECKS_META[DECK_KEY] = {
    title: "Conversation — Perfekt (Split: Aux-only + Partizip) (80)",
    category: "Grammar",
    level: "medium",
    mechanic: "fill-in",
    description: "Each prompt appears twice: once for the auxiliary, once for the Partizip II."
  };

  window.FILLIN_DECKS[DECK_KEY] = [

    // 001
    { id: "PERF_CONJ-001a", prompt_de: "A: Was hast du gestern gemacht?\nB: Ich ____ Wasser getrunken (trinken).", answer: "habe", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-001b", prompt_de: "A: Was hast du gestern gemacht?\nB: Ich habe Wasser ____ (trinken).", answer: "getrunken", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 002
    { id: "PERF_CONJ-002a", prompt_de: "A: Und du?\nB: Du ____ Tee getrunken (trinken).", answer: "hast", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-002b", prompt_de: "A: Und du?\nB: Du hast Tee ____ (trinken).", answer: "getrunken", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 003
    { id: "PERF_CONJ-003a", prompt_de: "A: Was hat Paul gemacht?\nB: Er ____ einen Film gesehen (sehen).", answer: "hat", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-003b", prompt_de: "A: Was hat Paul gemacht?\nB: Er hat einen Film ____ (sehen).", answer: "gesehen", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 004
    { id: "PERF_CONJ-004a", prompt_de: "A: Hat Maria gekocht?\nB: Sie ____ Pasta gekocht (kochen).", answer: "hat", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-004b", prompt_de: "A: Hat Maria gekocht?\nB: Sie hat Pasta ____ (kochen).", answer: "gekocht", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 005
    { id: "PERF_CONJ-005a", prompt_de: "A: Hat das Kind gegessen?\nB: Es ____ ein Brötchen gegessen (essen).", answer: "hat", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-005b", prompt_de: "A: Hat das Kind gegessen?\nB: Es hat ein Brötchen ____ (essen).", answer: "gegessen", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 006
    { id: "PERF_CONJ-006a", prompt_de: "A: Was habt ihr gemacht?\nB: Wir ____ Musik gehört (hören).", answer: "haben", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-006b", prompt_de: "A: Was habt ihr gemacht?\nB: Wir haben Musik ____ (hören).", answer: "gehört", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 007
    { id: "PERF_CONJ-007a", prompt_de: "A: Und ihr?\nB: Ihr ____ viel gelernt (lernen).", answer: "habt", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-007b", prompt_de: "A: Und ihr?\nB: Ihr habt viel ____ (lernen).", answer: "gelernt", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 008
    { id: "PERF_CONJ-008a", prompt_de: "A: Was haben Sie gemacht?\nB: Sie ____ einen Brief geschrieben (schreiben).", answer: "haben", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-008b", prompt_de: "A: Was haben Sie gemacht?\nB: Sie haben einen Brief ____ (schreiben).", answer: "geschrieben", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 009
    { id: "PERF_CONJ-009a", prompt_de: "A: Was haben die Freunde gemacht?\nB: Sie ____ ein Geschenk gekauft (kaufen).", answer: "haben", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-009b", prompt_de: "A: Was haben die Freunde gemacht?\nB: Sie haben ein Geschenk ____ (kaufen).", answer: "gekauft", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 010
    { id: "PERF_CONJ-010a", prompt_de: "A: Hast du das verstanden?\nB: Ich ____ alles verstanden (verstehen).", answer: "habe", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-010b", prompt_de: "A: Hast du das verstanden?\nB: Ich habe alles ____ (verstehen).", answer: "verstanden", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 011
    { id: "PERF_CONJ-011a", prompt_de: "A: Hast du die Aufgaben gemacht?\nB: Du ____ sie gemacht (machen).", answer: "hast", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-011b", prompt_de: "A: Hast du die Aufgaben gemacht?\nB: Du hast sie ____ (machen).", answer: "gemacht", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 012
    { id: "PERF_CONJ-012a", prompt_de: "A: Hat er das Handy gefunden?\nB: Er ____ es gefunden (finden).", answer: "hat", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-012b", prompt_de: "A: Hat er das Handy gefunden?\nB: Er hat es ____ (finden).", answer: "gefunden", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 013
    { id: "PERF_CONJ-013a", prompt_de: "A: Hat sie dich gefragt?\nB: Sie ____ mich gefragt (fragen).", answer: "hat", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-013b", prompt_de: "A: Hat sie dich gefragt?\nB: Sie hat mich ____ (fragen).", answer: "gefragt", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 014
    { id: "PERF_CONJ-014a", prompt_de: "A: Warst du gestern draußen?\nB: Ich ____ nach Hause gegangen (gehen).", answer: "bin", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-014b", prompt_de: "A: Warst du gestern draußen?\nB: Ich bin nach Hause ____ (gehen).", answer: "gegangen", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 015
    { id: "PERF_CONJ-015a", prompt_de: "A: Und du?\nB: Du ____ sehr spät gekommen (kommen).", answer: "bist", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-015b", prompt_de: "A: Und du?\nB: Du bist sehr spät ____ (kommen).", answer: "gekommen", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 016
    { id: "PERF_CONJ-016a", prompt_de: "A: Was hat er gemacht?\nB: Er ____ nach Berlin gefahren (fahren).", answer: "ist", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-016b", prompt_de: "A: Was hat er gemacht?\nB: Er ist nach Berlin ____ (fahren).", answer: "gefahren", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 017
    { id: "PERF_CONJ-017a", prompt_de: "A: War sie in der Stadt?\nB: Sie ____ ins Kino gegangen (gehen).", answer: "ist", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-017b", prompt_de: "A: War sie in der Stadt?\nB: Sie ist ins Kino ____ (gehen).", answer: "gegangen", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 018
    { id: "PERF_CONJ-018a", prompt_de: "A: War das Kind müde?\nB: Es ____ sofort eingeschlafen (einschlafen).", answer: "ist", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-018b", prompt_de: "A: War das Kind müde?\nB: Es ist sofort ____ (einschlafen).", answer: "eingeschlafen", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 019
    { id: "PERF_CONJ-019a", prompt_de: "A: Seid ihr früh aufgestanden?\nB: Wir ____ um 6 Uhr aufgestanden (aufstehen).", answer: "sind", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-019b", prompt_de: "A: Seid ihr früh aufgestanden?\nB: Wir sind um 6 Uhr ____ (aufstehen).", answer: "aufgestanden", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 020
    { id: "PERF_CONJ-020a", prompt_de: "A: Und ihr?\nB: Ihr ____ schnell gelaufen (laufen).", answer: "seid", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-020b", prompt_de: "A: Und ihr?\nB: Ihr seid schnell ____ (laufen).", answer: "gelaufen", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 021
    { id: "PERF_CONJ-021a", prompt_de: "A: Sind Sie angekommen?\nB: Sie ____ um 8 Uhr angekommen (ankommen).", answer: "sind", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-021b", prompt_de: "A: Sind Sie angekommen?\nB: Sie sind um 8 Uhr ____ (ankommen).", answer: "angekommen", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 022
    { id: "PERF_CONJ-022a", prompt_de: "A: Sind die Freunde geflogen?\nB: Sie ____ nach München geflogen (fliegen).", answer: "sind", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-022b", prompt_de: "A: Sind die Freunde geflogen?\nB: Sie sind nach München ____ (fliegen).", answer: "geflogen", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 023
    { id: "PERF_CONJ-023a", prompt_de: "A: Hast du ihn angerufen?\nB: Ich ____ ihn angerufen (anrufen).", answer: "habe", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-023b", prompt_de: "A: Hast du ihn angerufen?\nB: Ich habe ihn ____ (anrufen).", answer: "angerufen", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 024
    { id: "PERF_CONJ-024a", prompt_de: "A: Hast du deine Eltern angerufen?\nB: Du ____ sie angerufen (anrufen).", answer: "hast", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-024b", prompt_de: "A: Hast du deine Eltern angerufen?\nB: Du hast sie ____ (anrufen).", answer: "angerufen", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 025
    { id: "PERF_CONJ-025a", prompt_de: "A: Ist er zurückgekommen?\nB: Er ____ gestern zurückgekommen (zurückkommen).", answer: "ist", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-025b", prompt_de: "A: Ist er zurückgekommen?\nB: Er ist gestern ____ (zurückkommen).", answer: "zurückgekommen", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 026
    { id: "PERF_CONJ-026a", prompt_de: "A: Seid ihr ausgegangen?\nB: Ihr ____ am Freitag ausgegangen (ausgehen).", answer: "seid", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-026b", prompt_de: "A: Seid ihr ausgegangen?\nB: Ihr seid am Freitag ____ (ausgehen).", answer: "ausgegangen", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 027
    { id: "PERF_CONJ-027a", prompt_de: "A: Hast du aufgehört?\nB: Ich ____ um 17 Uhr aufgehört (aufhören).", answer: "habe", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-027b", prompt_de: "A: Hast du aufgehört?\nB: Ich habe um 17 Uhr ____ (aufhören).", answer: "aufgehört", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 028
    { id: "PERF_CONJ-028a", prompt_de: "A: Hat sie angefangen?\nB: Sie ____ um 9 Uhr angefangen (anfangen).", answer: "hat", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-028b", prompt_de: "A: Hat sie angefangen?\nB: Sie hat um 9 Uhr ____ (anfangen).", answer: "angefangen", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 029
    { id: "PERF_CONJ-029a", prompt_de: "A: Hast du viel getrunken?\nB: Ich ____ viel Kaffee getrunken (trinken).", answer: "habe", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-029b", prompt_de: "A: Hast du viel getrunken?\nB: Ich habe viel Kaffee ____ (trinken).", answer: "getrunken", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 030
    { id: "PERF_CONJ-030a", prompt_de: "A: Hast du das Buch gelesen?\nB: Du ____ es gelesen (lesen).", answer: "hast", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-030b", prompt_de: "A: Hast du das Buch gelesen?\nB: Du hast es ____ (lesen).", answer: "gelesen", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 031
    { id: "PERF_CONJ-031a", prompt_de: "A: Hat er gegessen?\nB: Er ____ schon gegessen (essen).", answer: "hat", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-031b", prompt_de: "A: Hat er gegessen?\nB: Er hat schon ____ (essen).", answer: "gegessen", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 032
    { id: "PERF_CONJ-032a", prompt_de: "A: Haben wir das gesehen?\nB: Wir ____ das schon gesehen (sehen).", answer: "haben", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-032b", prompt_de: "A: Haben wir das gesehen?\nB: Wir haben das schon ____ (sehen).", answer: "gesehen", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 033
    { id: "PERF_CONJ-033a", prompt_de: "A: Habt ihr geschrieben?\nB: Ihr ____ eine E-Mail geschrieben (schreiben).", answer: "habt", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-033b", prompt_de: "A: Habt ihr geschrieben?\nB: Ihr habt eine E-Mail ____ (schreiben).", answer: "geschrieben", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 034
    { id: "PERF_CONJ-034a", prompt_de: "A: Bist du geblieben?\nB: Ich ____ zu Hause geblieben (bleiben).", answer: "bin", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-034b", prompt_de: "A: Bist du geblieben?\nB: Ich bin zu Hause ____ (bleiben).", answer: "geblieben", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 035
    { id: "PERF_CONJ-035a", prompt_de: "A: Bist du gereist?\nB: Du ____ nach Hamburg gereist (reisen).", answer: "bist", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-035b", prompt_de: "A: Bist du gereist?\nB: Du bist nach Hamburg ____ (reisen).", answer: "gereist", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 036
    { id: "PERF_CONJ-036a", prompt_de: "A: Ist sie gelaufen?\nB: Sie ____ nach Hause gelaufen (laufen).", answer: "ist", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-036b", prompt_de: "A: Ist sie gelaufen?\nB: Sie ist nach Hause ____ (laufen).", answer: "gelaufen", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 037
    { id: "PERF_CONJ-037a", prompt_de: "A: Hast du gearbeitet?\nB: Ich ____ bis 18 Uhr gearbeitet (arbeiten).", answer: "habe", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-037b", prompt_de: "A: Hast du gearbeitet?\nB: Ich habe bis 18 Uhr ____ (arbeiten).", answer: "gearbeitet", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 038
    { id: "PERF_CONJ-038a", prompt_de: "A: Habt ihr gespielt?\nB: Wir ____ Karten gespielt (spielen).", answer: "haben", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-038b", prompt_de: "A: Habt ihr gespielt?\nB: Wir haben Karten ____ (spielen).", answer: "gespielt", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 039
    { id: "PERF_CONJ-039a", prompt_de: "A: Hat er gefragt?\nB: Er ____ nach dem Weg gefragt (fragen).", answer: "hat", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-039b", prompt_de: "A: Hat er gefragt?\nB: Er hat nach dem Weg ____ (fragen).", answer: "gefragt", tags: ["Grammar","Perfekt","conversation","fill-in"] },

    // 040 (formal Sie = haben)
    { id: "PERF_CONJ-040a", prompt_de: "A: Haben Sie besucht?\nB: Sie ____ Freunde besucht (besuchen).", answer: "haben", tags: ["Grammar","Perfekt","conversation","fill-in"] },
    { id: "PERF_CONJ-040b", prompt_de: "A: Haben Sie besucht?\nB: Sie haben Freunde ____ (besuchen).", answer: "besucht", tags: ["Grammar","Perfekt","conversation","fill-in"] }

  ];






})();
