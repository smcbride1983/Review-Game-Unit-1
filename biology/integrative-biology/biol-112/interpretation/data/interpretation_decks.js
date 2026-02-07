/* data/interpretation_decks.js
   Figure Interpretation decks (image + MCQ + per-option hints)

   IMPORTANT PATH RULE:
   - img paths are resolved relative to the HTML file that loads this script.
   - If your HTML is: interpretation/interpretation.html
     and your images are in: interpretation/images/
     then use: "./images/figureF.png"
*/

window.INTERPRETATION_DECKS = {
  // -----------------------------
  // DECK 1: Evolution
  // -----------------------------
  "Evolution": [
    {
      category: "Selection type",
      img: "./images/Fitness-graph1.jpg",
      imgAlt: "Figure A: Fitness MM bar graph comparing Green, Intermediate, and Melanic insect fitness.",
      caption: "Figure A (Fitness, MM environment).",
      prompt:
        "Based on Figure A, how would you describe the type of selective pressure acting on body color of the pictured insects in the MM environment?",
      choices: [
        { text: "Directional selection", hint: "because one extreme phenotype is favored over all others" },
        { text: "Stabilizing selection", hint: "because individuals with intermediate coloration have the highest recapture rate" },
        { text: "Disruptive selection", hint: "because both extreme phenotypes have higher recapture rates than intermediates" },
        { text: "No selection", hint: "because all color categories were released in equal numbers" }
      ],
      answer: "Stabilizing selection",
      explanation:
        "Intermediate coloration has the highest recapture rate, while both extremes (green and melanic) are lower—consistent with stabilizing selection."
    },

    {
      category: "Selection type",
      img: "./images/Fitness-graph1.jpg",
      imgAlt: "Figure B: Fitness A/C bar graph comparing Green, Intermediate, and Melanic insect fitness.",
      caption: "Figure B (Fitness, A/C environment).",
      prompt:
        "Based on Figure B, how would you describe the type of selective pressure acting on insect body color in the A/C environment?",
      choices: [
        { text: "Directional selection", hint: "because one phenotype is consistently favored over the others" },
        { text: "Stabilizing selection", hint: "because individuals with intermediate coloration have the highest recapture rate" },
        { text: "Disruptive selection", hint: "because both extreme phenotypes have higher recapture rates than intermediates" },
        { text: "No selection", hint: "because release numbers were equal across phenotypes" }
      ],
      answer: "Disruptive selection",
      explanation:
        "Both extreme phenotypes (green and melanic) show higher recapture than the intermediate phenotype—consistent with disruptive selection."
    }
  ],

  // -----------------------------
  // DECK 2: Experimental design / controls
  // -----------------------------
  "TBD": [
    {
      category: "Controls",
      img: "./images/releaseMM.png",
      imgAlt: "Release MM bar graph.",
      caption: "Release panel (MM).",
      prompt:
        "Why is the release panel important for interpreting the recapture results?",
      choices: [
        { text: "It checks whether phenotypes were released in unequal numbers", hint: "starting bias could explain differences in recapture" },
        { text: "It directly measures fitness in the field", hint: "release counts are not a fitness measure" },
        { text: "It proves selection occurred", hint: "controls help interpretation but don’t prove a mechanism alone" },
        { text: "It shows mutation rate differences among phenotypes", hint: "release counts do not measure mutation rates" }
      ],
      answer: "It checks whether phenotypes were released in unequal numbers",
      explanation:
        "If one phenotype were released more often, it might be recaptured more often even without selection. Release panels help rule out that starting-number confound."
    },

    {
      category: "Controls",
      img: "./images/releaseAC.png",
      imgAlt: "Release A/C bar graph.",
      caption: "Release panel (A/C).",
      prompt:
        "If the release panel showed far fewer intermediate individuals released than the other colors, what would that do to your confidence in interpreting recapture patterns as selection?",
      choices: [
        { text: "Increase confidence, because fewer intermediates makes selection easier to detect", hint: "starting imbalance is a confound, not a benefit" },
        { text: "Decrease confidence, because recapture differences could reflect starting numbers", hint: "unequal release can mimic selection signals" },
        { text: "No effect, because release numbers never matter", hint: "starting numbers can strongly affect counts" },
        { text: "Prove disruptive selection, because intermediates are rare", hint: "rarity alone does not prove a selection mode" }
      ],
      answer: "Decrease confidence, because recapture differences could reflect starting numbers",
      explanation:
        "Unequal release creates a confound: recapture differences might simply mirror starting numbers rather than differential survival or detectability."
    }
  ]

  // Add more decks here as additional keys:
  // "My New Deck Name": [ { ... }, { ... } ]
};
