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
    },
     {
  category: "Phylogenetics: Monophyly",
  img: "./images/phylo-tree2.png",
  imgAlt: "Three phylogenetic trees labeled A, B, and C showing relationships among taxa A–G. Taxa A, B, and C are highlighted in blue.",
  caption: "Trees A–C showing alternative groupings of taxa A, B, and C.",
  prompt:
    "In which tree do taxa A, B, and C form a monophyletic group?",
  choices: [
    { text: "Tree A", hint: "check whether A, B, and C share a single common ancestor exclusive to them" },
    { text: "Tree B", hint: "look for a node that includes only A, B, and C and no other taxa" },
    { text: "Tree C", hint: "verify whether all descendants of the common ancestor are included" },
    { text: "None of the trees", hint: "consider whether any tree includes all descendants of the group’s most recent common ancestor" }
  ],
  answer: "Tree B",
  explanation:
    "In Tree B, taxa A, B, and C share a most recent common ancestor and all descendants of that ancestor are included. This satisfies the definition of a monophyletic group."
},

{
  category: "Phylogenetics: Paraphyly",
  img: "./images/phylo-tree2.png",
  imgAlt: "Three phylogenetic trees labeled A, B, and C showing relationships among taxa A–G. Taxa A, B, and C are highlighted in blue.",
  caption: "Trees A–C showing alternative groupings of taxa A, B, and C.",
  prompt:
    "In which tree do taxa A, B, and C form a paraphyletic group?",
  choices: [
    { text: "Tree A", hint: "the group includes a common ancestor but leaves out at least one descendant" },
    { text: "Tree B", hint: "monophyletic groups include all descendants" },
    { text: "Tree C", hint: "polyphyletic groups lack a single recent common ancestor" },
    { text: "None of the trees", hint: "check whether any grouping excludes descendants of the common ancestor" }
  ],
  answer: "Tree A",
  explanation:
    "In Tree A, taxa A, B, and C share a common ancestor, but not all descendants of that ancestor are included in the group. This makes the grouping paraphyletic."
},

{
  category: "Phylogenetics: Polyphyly",
  img: "./images/phylo-tree2.png",
  imgAlt: "Three phylogenetic trees labeled A, B, and C showing relationships among taxa A–G. Taxa A, B, and C are highlighted in blue.",
  caption: "Trees A–C showing alternative groupings of taxa A, B, and C.",
  prompt:
    "In which tree do taxa A, B, and C form a polyphyletic group?",
  choices: [
    { text: "Tree A", hint: "paraphyletic groups still share a recent common ancestor" },
    { text: "Tree B", hint: "monophyletic groups include all descendants of a common ancestor" },
    { text: "Tree C", hint: "polyphyletic groups are drawn from multiple evolutionary lineages" },
    { text: "None of the trees", hint: "check whether A, B, and C are scattered across the tree" }
  ],
  answer: "Tree C",
  explanation:
    "In Tree C, taxa A, B, and C do not share a single recent common ancestor exclusive to them. Instead, they are drawn from different branches, making the grouping polyphyletic."
},
     
{
  category: "Phylogenetics: Group type",
  img: "./images/phylo-tree3.png",
  imgAlt: "Phylogenetic tree labeled A showing relationships among taxa A–G. Taxa A, B, and C are highlighted in blue.",
  caption: "Tree A showing relationships among taxa A–G.",
  prompt:
    "Based on the tree, how should the grouping of taxa A, B, and C be classified?",
  choices: [
    { text: "Monophyletic", hint: "monophyletic groups include all descendants of a single common ancestor" },
    { text: "Paraphyletic", hint: "paraphyletic groups include a common ancestor but exclude some descendants" },
    { text: "Polyphyletic", hint: "polyphyletic groups do not include the most recent common ancestor" },
    { text: "Cannot be determined from the tree", hint: "the tree topology alone is sufficient to classify the grouping" }
  ],
  answer: "Polyphyletic",
  explanation:
    "Taxa A, B, and C do not form a single clade on this tree and do not share a most recent common ancestor exclusive to them. The grouping is therefore polyphyletic."
},
     
{
  category: "Phylogenetics: Ancestral vs derived traits",
  img: "./images/phylo-tree3.png",
  imgAlt: "Phylogenetic tree labeled A showing relationships among taxa A–G. Taxa A, B, and C are highlighted in blue.",
  caption: "Tree A with taxa A, B, and C highlighted.",
  prompt:
    "Suppose taxa A, B, and C all share the same trait (for example, color vision). Based on the tree, which interpretation is most likely?",
  choices: [
    { text: "The trait is ancestral and was present in the common ancestor of all taxa", hint: "an ancestral trait would likely appear in many additional taxa" },
    { text: "The trait is derived and evolved once in the ancestor of A, B, and C", hint: "this would require A, B, and C to form a clade" },
    { text: "The trait evolved independently in multiple lineages", hint: "polyphyletic distributions often indicate convergence" },
    { text: "The tree provides no information about trait evolution", hint: "phylogenies are commonly used to infer trait history" }
  ],
  answer: "The trait evolved independently in multiple lineages",
  explanation:
    "Because A, B, and C are polyphyletic on the tree, their shared trait is unlikely to have been inherited from a single recent common ancestor. The most parsimonious explanation is independent evolution in multiple lineages."
},
     
{
  category: "Phylogenetics: Homology vs convergence",
  img: "./images/phylo-tree3.png",
  imgAlt: "Phylogenetic tree labeled A showing relationships among taxa A–G. Taxa A, B, and C are highlighted in blue.",
  caption: "Tree A showing the distribution of a shared trait in taxa A, B, and C.",
  prompt:
    "If taxa A, B, and C share a similar trait, how should that similarity most accurately be described?",
  choices: [
    { text: "Homology, because the trait is shared", hint: "shared traits are not always inherited from a common ancestor" },
    { text: "Homology, because A, B, and C are closely related", hint: "the tree does not show them as a clade" },
    { text: "Convergent evolution, because the trait likely evolved independently", hint: "polyphyletic trait distributions suggest convergence" },
    { text: "Genetic drift, because random processes explain similarity", hint: "drift does not explain repeated trait evolution across lineages" }
  ],
  answer: "Convergent evolution, because the trait likely evolved independently",
  explanation:
    "Because A, B, and C do not form a monophyletic group, their shared trait is unlikely to be inherited from a recent common ancestor. Instead, the similarity is best explained by convergent evolution."
},

{
  category: "Phylogenetics: Group type",
  img: "./images/phylo-tree4.png",
  imgAlt: "Phylogenetic tree labeled B showing relationships among taxa A–G. Taxa A, B, and C are highlighted in blue.",
  caption: "Tree B showing relationships among taxa A–G.",
  prompt:
    "If taxa A, B, and C are grouped together as a single group, how should that grouping be classified?",
  choices: [
    { text: "Monophyletic", hint: "monophyletic groups include all descendants of their most recent common ancestor" },
    { text: "Paraphyletic", hint: "paraphyletic groups include a common ancestor but exclude at least one descendant" },
    { text: "Polyphyletic", hint: "polyphyletic groups lack a single recent common ancestor" },
    { text: "Sister taxa", hint: "sister taxa refers to two lineages, not a multi-taxon group" }
  ],
  answer: "Paraphyletic",
  explanation:
    "Taxa A, B, and C share a common ancestor, but that ancestor also gave rise to taxon D, which is excluded from the group. Because at least one descendant is missing, the grouping is paraphyletic."
},
     
{
  category: "Phylogenetics: Trait interpretation",
  img: "./images/phylo-tree4.png",
  imgAlt: "Phylogenetic tree labeled B showing relationships among taxa A–G. Taxa A, B, and C are highlighted in blue.",
  caption: "Tree B with taxa A, B, and C highlighted.",
  prompt:
    "Suppose taxa A, B, and C all share a similar trait. Which explanation best fits the tree?",
  choices: [
    { text: "The trait is homologous in all three taxa", hint: "this would require inheritance from a single common ancestor of A, B, and C" },
    { text: "The trait is homologous in A and B, but convergent in C", hint: "A and B form a clade, while C is in a separate lineage" },
    { text: "The trait evolved independently in all three taxa", hint: "this would require three separate evolutionary origins" },
    { text: "The trait is ancestral and was lost in all other taxa", hint: "this would require multiple independent losses" }
  ],
  answer: "The trait is homologous in A and B, but convergent in C",
  explanation:
    "A and B share a recent common ancestor, making homology likely between them. C is not part of that clade, so a similar trait in C is best explained by convergent evolution."
},

{
  category: "Phylogenetics: Ancestral traits and loss",
  img: "./images/phylo-tree4.png",
  imgAlt: "Phylogenetic tree labeled B showing relationships among taxa A–G. Taxa A, B, and C are highlighted in blue.",
  caption: "Tree B showing trait distribution among taxa.",
  prompt:
    "Which scenario could explain A, B, and C sharing a trait while D does not?",
  choices: [
    { text: "The trait evolved independently in A, B, and C", hint: "this requires multiple separate evolutionary events" },
    { text: "The trait is ancestral and was lost in lineage D", hint: "trait loss after divergence can explain this pattern" },
    { text: "The trait evolved only in A and B and spread to C by gene flow", hint: "gene flow between distant lineages is unlikely" },
    { text: "The trait cannot be interpreted without a molecular clock", hint: "tree topology alone can inform trait evolution" }
  ],
  answer: "The trait is ancestral and was lost in lineage D",
  explanation:
    "If the trait evolved in the common ancestor of C, D, A, and B, a subsequent loss in lineage D could explain why A, B, and C retain the trait while D does not."
},






     
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
