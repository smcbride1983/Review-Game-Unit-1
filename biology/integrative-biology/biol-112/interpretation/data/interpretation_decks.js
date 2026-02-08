/* data/interpretation_decks.js
   Figure Interpretation decks (image + MCQ + per-option hints)

   IMPORTANT PATH RULE:
   - img paths are resolved relative to the HTML file that loads this script.
   - If your HTML is: interpretation/interpretation.html
     and your images are in: interpretation/interpretation/images/
     then use: "./images/figureF.png"
*/

window.INTERPRETATION_DECKS = {
  // -----------------------------
  // DECK 1: Evolution
  // -----------------------------
  "Evolution": [
    {
      category: "microevolution",
      img: "./images/Fitness-graph1.jpg",
      imgAlt: "Figure B: Fitness MM bar graph comparing Green, Intermediate, and Melanic insect fitness.",
      caption: "Figure B (Fitness, MM environment).",
      prompt:
        "Based on Figure B, how would you describe the type of selective pressure acting on body color of the pictured insects in the MM environment?",
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
      category: "microevolution",
      img: "./images/Fitness-graph1.jpg",
      imgAlt: "Figure C: Fitness A/C bar graph comparing Green, Intermediate, and Melanic insect fitness.",
      caption: "Figure C (Fitness, A/C environment).",
      prompt:
        "Based on Figure C, how would you describe the type of selective pressure acting on insect body color in the A/C environment?",
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

    // =============================
    // phylo-tree2.png
    // =============================
    {
      category: "Phylogenetics",
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
      answer: "Tree A",
      explanation:
        "In Tree A, taxa A, B, and C share a most recent common ancestor and all descendants of that ancestor are included. This satisfies the definition of a monophyletic group."
    },

    {
      category: "Phylogenetics",
      img: "./images/phylo-tree2.png",
      imgAlt: "Three phylogenetic trees labeled A, B, and C showing relationships among taxa A–G. Taxa A, B, and C are highlighted in blue.",
      caption: "Trees A–C showing alternative groupings of taxa A, B, and C.",
      prompt:
        "In which tree do taxa A, B, and C form a paraphyletic group?",
      choices: [
        { text: "Tree A", hint: "the group includes a common ancestor but leaves out at least one descendant" },
        { text: "Tree B", hint: "paraphyletic groups exclude at least one descendant of the common ancestor" },
        { text: "Tree C", hint: "polyphyletic groups lack a single recent common ancestor" },
        { text: "None of the trees", hint: "check whether any grouping excludes descendants of the common ancestor" }
      ],
      answer: "Tree B",
      explanation:
        "In Tree B, taxa A, B, and C share a common ancestor, but at least one descendant of that ancestor is excluded from the highlighted group. That makes the grouping paraphyletic."
    },

    {
      category: "Phylogenetics",
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
        "In Tree C, taxa A, B, and C do not form a single clade and are drawn from different branches, making the grouping polyphyletic."
    },

    // =============================
    // phylo-tree3.png (monophyletic)
    // =============================
    {
      category: "Phylogenetics",
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
      answer: "Monophyletic",
      explanation:
        "Taxa A, B, and C form a single clade (a node whose descendants are only A, B, and C). Including all descendants of their most recent common ancestor makes the group monophyletic."
    },

    {
      category: "Phylogenetics",
      img: "./images/phylo-tree3.png",
      imgAlt: "Phylogenetic tree labeled A showing relationships among taxa A–G. Taxa A, B, and C are highlighted in blue.",
      caption: "Tree A with taxa A, B, and C highlighted.",
      prompt:
        "Suppose taxa A, B, and C all share the same trait (for example, color vision). Based on the tree, which interpretation is most likely?",
      choices: [
        { text: "The trait is ancestral and was present in the common ancestor of all taxa", hint: "an ancestral trait would likely appear in many additional taxa" },
        { text: "The trait is derived and evolved once in the ancestor of A, B, and C", hint: "this is supported if A, B, and C form a clade" },
        { text: "The trait evolved independently in multiple lineages", hint: "this is more likely when the taxa do not form a clade" },
        { text: "The tree provides no information about trait evolution", hint: "phylogenies are commonly used to infer trait history" }
      ],
      answer: "The trait is derived and evolved once in the ancestor of A, B, and C",
      explanation:
        "Because A, B, and C are monophyletic on this tree, a shared trait is most parsimoniously explained as originating once in their most recent common ancestor and being inherited by all three."
    },

    {
      category: "Phylogenetics",
      img: "./images/phylo-tree3.png",
      imgAlt: "Phylogenetic tree labeled A showing relationships among taxa A–G. Taxa A, B, and C are highlighted in blue.",
      caption: "Tree A showing the distribution of a shared trait in taxa A, B, and C.",
      prompt:
        "If taxa A, B, and C share a similar trait, how should that similarity most accurately be described?",
      choices: [
        { text: "Homology, because the trait is shared", hint: "shared traits are not always inherited—but clade membership supports inheritance" },
        { text: "Homology, because A, B, and C are closely related", hint: "a monophyletic group strongly supports inheritance from a recent common ancestor" },
        { text: "Convergent evolution, because the trait likely evolved independently", hint: "convergence is more likely if the taxa do NOT form a clade" },
        { text: "Genetic drift, because random processes explain similarity", hint: "drift doesn’t typically create the same complex trait independently" }
      ],
      answer: "Homology, because A, B, and C are closely related",
      explanation:
        "Because A, B, and C form a monophyletic group, their shared trait is most likely homologous—present in their most recent common ancestor and inherited by descendants."
    },

    // =============================
    // phylo-tree4.png (paraphyletic)
    // =============================
    {
      category: "Phylogenetics",
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
      category: "Phylogenetics",
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
      category: "Phylogenetics",
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

    {
      category: "Phylogenetics",
      img: "./images/phylo-tree5.png",
      imgAlt: "Phylogenetic tree labeled C showing relationships among taxa A–G. Taxa A, B, and C are highlighted in blue.",
      caption: "Tree C showing a shared trait in taxa A, B, and C.",
      prompt:
        "How should the shared trait in taxa A, B, and C most accurately be interpreted?",
      choices: [
        { text: "Homologous, because the trait is shared", hint: "shared traits are not always inherited from a recent common ancestor" },
        { text: "Homologous, because A, B, and C are part of the same group", hint: "the tree does not show them as a clade" },
        { text: "Convergent, because the trait likely evolved independently", hint: "polyphyletic distributions suggest convergence" },
        { text: "Neutral, because the tree provides no evolutionary context", hint: "phylogenies are used specifically to infer trait history" }
      ],
      answer: "Convergent, because the trait likely evolved independently",
      explanation:
        "The polyphyletic distribution of the trait across the tree indicates that it did not arise from a single recent common ancestor. Instead, similar selective pressures likely led to convergent evolution."
    },

    {
      category: "Phylogenetics",
      img: "./images/phylo-tree5.png",
      imgAlt: "Phylogenetic tree labeled C showing relationships among taxa A–G. Taxa A, B, and C are highlighted in blue.",
      caption: "Tree C with taxa A, B, and C highlighted.",
      prompt:
        "Suppose taxa A, B, and C all share a similar adaptive trait. Based on the tree, what is the most likely explanation?",
      choices: [
        { text: "The trait evolved once in a recent common ancestor of A, B, and C", hint: "this would require A, B, and C to form a clade" },
        { text: "The trait is ancestral and was lost in all other lineages", hint: "this would require multiple independent losses" },
        { text: "The trait evolved independently in response to similar selective pressures", hint: "similar environments can favor similar adaptations" },
        { text: "The similarity is due to random mutation alone", hint: "random mutation does not consistently produce adaptive similarity" }
      ],
      answer: "The trait evolved independently in response to similar selective pressures",
      explanation:
        "Because A, B, and C are not closely related on the tree, their shared adaptive trait is unlikely to reflect shared ancestry. Independent evolution driven by similar selective pressures is the most parsimonious explanation."
    },

    {
      category: "Phylogenetics",
      img: "./images/phylo-tree5.png",
      imgAlt: "Phylogenetic tree labeled C showing relationships among taxa A–G. Taxa A, B, and C are highlighted in blue.",
      caption: "Tree C showing relationships among taxa A–G.",
      prompt:
        "If taxa A, B, and C are grouped together as a single group, how should that grouping be classified?",
      choices: [
        { text: "Monophyletic", hint: "monophyletic groups include all descendants of a single common ancestor" },
        { text: "Paraphyletic", hint: "paraphyletic groups include a common ancestor but exclude some descendants" },
        { text: "Polyphyletic", hint: "polyphyletic groups are composed of taxa from different evolutionary lineages" },
        { text: "Sister taxa", hint: "sister taxa refers to two lineages, not a multi-taxon group" }
      ],
      answer: "Polyphyletic",
      explanation:
        "Taxa A, B, and C do not share a single recent common ancestor exclusive to them. They are scattered across different branches of the tree, making the grouping polyphyletic."
    },

     
  // =============================
  // PHYLO-TREE5 (polyphyletic A, B, C)
  // =============================
  {
    category: "Phylogenetics",
    img: "./images/phylo-tree5.png",
    imgAlt: "Phylogenetic tree labeled C showing relationships among taxa A–G. Taxa A, B, and C are highlighted in blue.",
    caption: "Tree C showing a shared trait in taxa A, B, and C.",
    prompt: "How should the shared trait in taxa A, B, and C most accurately be interpreted?",
    choices: [
      { text: "Homologous, because the trait is shared", hint: "shared traits are not always inherited from a recent common ancestor" },
      { text: "Homologous, because A, B, and C are part of the same group", hint: "the tree does not show them as a clade" },
      { text: "Convergent, because the trait likely evolved independently", hint: "polyphyletic distributions suggest convergence" },
      { text: "Neutral, because the tree provides no evolutionary context", hint: "phylogenies are used specifically to infer trait history" }
    ],
    answer: "Convergent, because the trait likely evolved independently",
    explanation:
      "The polyphyletic distribution of the trait across the tree indicates that it did not arise from a single recent common ancestor. Instead, similar selective pressures likely led to convergent evolution."
  },
  {
    category: "Phylogenetics",
    img: "./images/phylo-tree5.png",
    imgAlt: "Phylogenetic tree labeled C showing relationships among taxa A–G. Taxa A, B, and C are highlighted in blue.",
    caption: "Tree C with taxa A, B, and C highlighted.",
    prompt: "Suppose taxa A, B, and C all share a similar adaptive trait. Based on the tree, what is the most likely explanation?",
    choices: [
      { text: "The trait evolved once in a recent common ancestor of A, B, and C", hint: "this would require A, B, and C to form a clade" },
      { text: "The trait is ancestral and was lost in all other lineages", hint: "this would require multiple independent losses" },
      { text: "The trait evolved independently in response to similar selective pressures", hint: "similar environments can favor similar adaptations" },
      { text: "The similarity is due to random mutation alone", hint: "random mutation does not consistently produce adaptive similarity" }
    ],
    answer: "The trait evolved independently in response to similar selective pressures",
    explanation:
      "Because A, B, and C are not closely related on the tree, their shared adaptive trait is unlikely to reflect shared ancestry. Independent evolution driven by similar selective pressures is the most parsimonious explanation."
  },
  {
    category: "Phylogenetics",
    img: "./images/phylo-tree5.png",
    imgAlt: "Phylogenetic tree labeled C showing relationships among taxa A–G. Taxa A, B, and C are highlighted in blue.",
    caption: "Tree C showing relationships among taxa A–G.",
    prompt: "If taxa A, B, and C are grouped together as a single group, how should that grouping be classified?",
    choices: [
      { text: "Monophyletic", hint: "monophyletic groups include all descendants of a single common ancestor" },
      { text: "Paraphyletic", hint: "paraphyletic groups include a common ancestor but exclude some descendants" },
      { text: "Polyphyletic", hint: "polyphyletic groups are composed of taxa from different evolutionary lineages" },
      { text: "Sister taxa", hint: "sister taxa refers to two lineages, not a multi-taxon group" }
    ],
    answer: "Polyphyletic",
    explanation:
      "Taxa A, B, and C do not share a single recent common ancestor exclusive to them. They are scattered across different branches of the tree, making the grouping polyphyletic."
  },

  // =============================
  // DRIFT vs GENE FLOW (drift-flow2.png)
  // =============================
  {
    category: "Microevolution",
    img: "./images/drift-flow2.png",
    imgAlt: "Two panels (A and B) showing trajectories of genetic difference between populations across generations. Each line represents a replicate population pair.",
    caption: "Panels A–B: Change in genetic difference between populations over time.",
    prompt: "Which statement best describes the overall pattern in Panel A?",
    choices: [
      { text: "Genetic differences vary widely among replicates over time", hint: "lines spread out in multiple directions" },
      { text: "Genetic differences consistently decrease", hint: "no shared downward trend is visible" },
      { text: "Genetic differences converge toward zero", hint: "this pattern appears in Panel B" },
      { text: "Genetic differences remain identical across replicates", hint: "variation clearly increases" }
    ],
    answer: "Genetic differences vary widely among replicates over time",
    explanation: "In Panel A, replicate trajectories diverge in different directions, producing a wide range of genetic differences."
  },
  {
    category: "Microevolution",
    img: "./images/drift-flow2.png",
    imgAlt: "Two panels (A and B) showing trajectories of genetic difference between populations across generations. Each line represents a replicate population pair.",
    caption: "Panels A–B: Change in genetic difference between populations over time.",
    prompt: "What is the most obvious difference between Panels A and B?",
    choices: [
      { text: "Panel A shows divergence among replicates, while Panel B shows convergence", hint: "compare the spread of lines" },
      { text: "Panel A has more generations than Panel B", hint: "both panels span similar time scales" },
      { text: "Panel B shows greater variability than Panel A", hint: "variability decreases in Panel B" },
      { text: "Panel A begins at a higher genetic difference", hint: "starting points are similar" }
    ],
    answer: "Panel A shows divergence among replicates, while Panel B shows convergence",
    explanation: "Replicates in Panel A spread apart over time, whereas replicates in Panel B trend toward lower genetic difference."
  },
  {
    category: "Microevolution",
    img: "./images/drift-flow2.png",
    imgAlt: "Two panels (A and B) showing trajectories of genetic difference between populations across generations. Each line represents a replicate population pair.",
    caption: "Panels A–B: Change in genetic difference between populations over time.",
    prompt: "Which evolutionary process best explains the pattern observed in Panel A?",
    choices: [
      { text: "Genetic drift acting independently in isolated populations", hint: "random divergence produces varied outcomes" },
      { text: "Strong gene flow between populations", hint: "this would reduce differences" },
      { text: "Stabilizing selection favoring identical genotypes", hint: "this would limit divergence" },
      { text: "Directional selection favoring the same alleles", hint: "this would cause convergence" }
    ],
    answer: "Genetic drift acting independently in isolated populations",
    explanation: "Random changes in allele frequencies cause replicate populations to diverge unpredictably when gene flow is absent."
  },
  {
    category: "Microevolution",
    img: "./images/drift-flow2.png",
    imgAlt: "Two panels (A and B) showing trajectories of genetic difference between populations across generations. Each line represents a replicate population pair.",
    caption: "Panels A–B: Change in genetic difference between populations over time.",
    prompt: "Which panel is most consistent with ongoing gene flow between populations?",
    choices: [
      { text: "Panel B", hint: "genetic differences decrease over time" },
      { text: "Panel A", hint: "differences persist and spread" },
      { text: "Both panels", hint: "patterns differ clearly" },
      { text: "Neither panel", hint: "gene flow produces predictable effects" }
    ],
    answer: "Panel B",
    explanation: "Gene flow homogenizes populations, reducing genetic differences as shown by the downward trend in Panel B."
  },
  {
    category: "Microevolution",
    img: "./images/drift-flow2.png",
    imgAlt: "Two panels (A and B) showing trajectories of genetic difference between populations across generations. Each line represents a replicate population pair.",
    caption: "Panels A–B: Change in genetic difference between populations over time.",
    prompt: "Which panel best represents populations that are genetically isolated from one another?",
    choices: [
      { text: "Panel A", hint: "differences accumulate independently" },
      { text: "Panel B", hint: "differences decline over time" },
      { text: "Both panels equally", hint: "patterns are not equivalent" },
      { text: "Neither panel", hint: "isolation leaves clear signatures" }
    ],
    answer: "Panel A",
    explanation: "Without gene flow, isolated populations diverge through drift, producing variable genetic differences."
  },
  {
    category: "Microevolution",
    img: "./images/drift-flow2.png",
    imgAlt: "Two panels (A and B) showing trajectories of genetic difference between populations across generations. Each line represents a replicate population pair.",
    caption: "Panels A–B: Change in genetic difference between populations over time.",
    prompt: "If gene flow were introduced into the system shown in Panel A, what change would you expect?",
    choices: [
      { text: "Genetic differences would decrease over time", hint: "gene flow homogenizes populations" },
      { text: "Genetic differences would increase faster", hint: "gene flow opposes divergence" },
      { text: "Replicates would diverge more randomly", hint: "gene flow reduces randomness" },
      { text: "No change in trajectories", hint: "gene flow alters allele frequencies" }
    ],
    answer: "Genetic differences would decrease over time",
    explanation: "Gene flow moves alleles between populations, counteracting divergence caused by drift."
  },
  {
    category: "Microevolution",
    img: "./images/drift-flow2.png",
    imgAlt: "Two panels (A and B) showing trajectories of genetic difference between populations across generations. Each line represents a replicate population pair.",
    caption: "Panels A–B: Change in genetic difference between populations over time.",
    prompt: "Why do different replicates in Panel A show different trajectories?",
    choices: [
      { text: "Genetic drift produces random outcomes", hint: "random sampling drives divergence" },
      { text: "Each replicate experiences identical selection", hint: "identical selection would align trajectories" },
      { text: "Mutations stop occurring in some replicates", hint: "mutation continues in all populations" },
      { text: "Gene flow varies randomly each generation", hint: "no gene flow is implied" }
    ],
    answer: "Genetic drift produces random outcomes",
    explanation: "Drift causes stochastic changes in allele frequencies, leading to different outcomes even under identical conditions."
  },
  {
    category: "Macroevolution",
    img: "./images/drift-flow2.png",
    imgAlt: "Two panels (A and B) showing trajectories of genetic difference between populations across generations. Each line represents a replicate population pair.",
    caption: "Panels A–B: Change in genetic difference between populations over time.",
    prompt: "Which panel is more likely to represent populations on a trajectory toward speciation?",
    choices: [
      { text: "Panel A", hint: "genetic differences persist and increase" },
      { text: "Panel B", hint: "gene flow maintains similarity" },
      { text: "Both panels", hint: "speciation requires isolation" },
      { text: "Neither panel", hint: "divergence is required for speciation" }
    ],
    answer: "Panel A",
    explanation: "Persistent divergence without gene flow promotes the accumulation of reproductive barriers."
  },
  {
    category: "Microevolution",
    img: "./images/drift-flow2.png",
    imgAlt: "Two panels (A and B) showing trajectories of genetic difference between populations across generations. Each line represents a replicate population pair.",
    caption: "Panels A–B: Change in genetic difference between populations over time.",
    prompt: "Taken together, what best explains the difference between Panels A and B?",
    choices: [
      { text: "Panel A shows drift with isolation; Panel B shows drift with gene flow", hint: "connect divergence vs convergence" },
      { text: "Panel A shows selection; Panel B shows mutation only", hint: "selection patterns are not shown" },
      { text: "Panel A shows gene flow; Panel B shows isolation", hint: "this reverses the observed pattern" },
      { text: "Panel A shows stabilizing selection; Panel B shows disruptive selection", hint: "fitness is not shown" }
    ],
    answer: "Panel A shows drift with isolation; Panel B shows drift with gene flow",
    explanation: "Isolation allows drift to drive divergence, while gene flow counteracts divergence and promotes genetic similarity."
  },

  // =============================
  // DRIFT vs GENE FLOW (drift-flow3.png)
  // =============================
  {
    category: "Microevolution",
    img: "./images/drift-flow3.png",
    imgAlt: "Two panels (A and B) showing accumulation of genetic variants over generations. Blue and green lines represent private variants in Pop 1 and Pop 2, while the red line represents shared variants.",
    caption: "Panels A–B: Accumulation of private and shared genetic variants over time.",
    prompt: "What is the main difference between Panels A and B in terms of shared genetic variants?",
    choices: [
      { text: "Shared variants remain low in A but increase in B", hint: "compare the red lines across panels" },
      { text: "Shared variants increase equally in both panels", hint: "the red lines behave differently" },
      { text: "Shared variants decrease over time in A", hint: "the red line in A is relatively flat" },
      { text: "Shared variants are higher than private variants in A", hint: "private variants dominate in A" }
    ],
    answer: "Shared variants remain low in A but increase in B",
    explanation: "Panel A shows little accumulation of shared variants, while Panel B shows a steady increase in shared variants over time."
  },
  {
    category: "Microevolution",
    img: "./images/drift-flow3.png",
    imgAlt: "Two panels (A and B) showing accumulation of genetic variants over generations. Blue and green lines represent private variants in Pop 1 and Pop 2, while the red line represents shared variants.",
    caption: "Panels A–B: Accumulation of private and shared genetic variants over time.",
    prompt: "Which panel is most consistent with ongoing gene flow between Pop 1 and Pop 2?",
    choices: [
      { text: "Panel B", hint: "shared variants accumulate over time" },
      { text: "Panel A", hint: "shared variants remain low" },
      { text: "Both panels equally", hint: "patterns differ clearly" },
      { text: "Neither panel", hint: "private variants increase in both" }
    ],
    answer: "Panel B",
    explanation: "Gene flow causes mutations to be shared between populations, leading to an increase in shared variants as seen in Panel B."
  },
  {
    category: "Microevolution",
    img: "./images/drift-flow3.png",
    imgAlt: "Two panels (A and B) showing accumulation of genetic variants over generations. Blue and green lines represent private variants in Pop 1 and Pop 2, while the red line represents shared variants.",
    caption: "Panels A–B: Accumulation of private and shared genetic variants over time.",
    prompt: "Which panel best represents populations that are genetically isolated from one another?",
    choices: [
      { text: "Panel A", hint: "private variants accumulate independently" },
      { text: "Panel B", hint: "shared variants increase over time" },
      { text: "Both panels", hint: "isolation produces different patterns" },
      { text: "Neither panel", hint: "private variants alone do not indicate isolation" }
    ],
    answer: "Panel A",
    explanation: "Genetic isolation limits gene flow, allowing each population to accumulate its own private mutations."
  },
  {
    category: "Microevolution",
    img: "./images/drift-flow3.png",
    imgAlt: "Two panels (A and B) showing accumulation of genetic variants over generations. Blue and green lines represent private variants in Pop 1 and Pop 2, while the red line represents shared variants.",
    caption: "Panels A–B: Accumulation of private and shared genetic variants over time.",
    prompt: "Why is genetic drift a more likely explanation than natural selection for the pattern in Panel A?",
    choices: [
      { text: "Mutations accumulate independently without a consistent shared pattern", hint: "drift is random" },
      { text: "Larger populations experience stronger drift", hint: "drift is stronger in small populations" },
      { text: "Selection prevents private variants from forming", hint: "selection does not stop mutation" },
      { text: "Shared variants are eliminated by selection", hint: "no evidence of purifying selection is shown" }
    ],
    answer: "Mutations accumulate independently without a consistent shared pattern",
    explanation: "Genetic drift causes random accumulation of mutations, leading to divergence when populations are isolated."
  },
  {
    category: "Microevolution",
    img: "./images/drift-flow3.png",
    imgAlt: "Two panels (A and B) showing accumulation of genetic variants over generations. Blue and green lines represent private variants in Pop 1 and Pop 2, while the red line represents shared variants.",
    caption: "Panels A–B: Accumulation of private and shared genetic variants over time.",
    prompt: "Which process most directly explains the increasing number of shared variants in Panel B?",
    choices: [
      { text: "Gene flow between populations", hint: "shared variants increase when alleles move between populations" },
      { text: "Independent mutation in each population", hint: "this would produce private variants" },
      { text: "Directional selection", hint: "selection would favor specific alleles, not sharing per se" },
      { text: "Genetic drift", hint: "drift does not create shared variation across populations" }
    ],
    answer: "Gene flow between populations",
    explanation: "Gene flow allows mutations arising in one population to spread to the other, increasing shared genetic variation."
  },
  {
    category: "Macroevolution",
    img: "./images/drift-flow3.png",
    imgAlt: "Two panels (A and B) showing accumulation of genetic variants over generations. Blue and green lines represent private variants in Pop 1 and Pop 2, while the red line represents shared variants.",
    caption: "Panels A–B: Accumulation of private and shared genetic variants over time.",
    prompt: "Which panel best represents populations that are most likely to continue diverging into separate species?",
    choices: [
      { text: "Panel A", hint: "genetic differences accumulate independently" },
      { text: "Panel B", hint: "gene flow maintains similarity" },
      { text: "Both panels", hint: "speciation requires isolation" },
      { text: "Neither panel", hint: "divergence is clearly occurring in one case" }
    ],
    answer: "Panel A",
    explanation: "Continued accumulation of private variants without gene flow promotes long-term divergence and speciation."
  },
  {
    category: "Microevolution",
    img: "./images/drift-flow3.png",
    imgAlt: "Two panels (A and B) showing accumulation of genetic variants over generations. Blue and green lines represent private variants in Pop 1 and Pop 2, while the red line represents shared variants.",
    caption: "Panels A–B: Accumulation of private and shared genetic variants over time.",
    prompt: "If gene flow were introduced into the system shown in Panel A, which change would you most expect?",
    choices: [
      { text: "An increase in shared variants over time", hint: "gene flow spreads alleles between populations" },
      { text: "A decrease in private variants", hint: "mutations would still occur" },
      { text: "Immediate genetic uniformity", hint: "gene flow acts gradually" },
      { text: "No change in genetic patterns", hint: "gene flow alters allele distributions" }
    ],
    answer: "An increase in shared variants over time",
    explanation: "Introducing gene flow would allow variants to move between populations, increasing shared genetic variation."
  },
  {
    category: "Macroevolution",
    img: "./images/drift-flow3.png",
    imgAlt: "Two panels (A and B) showing accumulation of genetic variants over generations. Blue and green lines represent private variants in Pop 1 and Pop 2, while the red line represents shared variants.",
    caption: "Panels A–B: Accumulation of private and shared genetic variants over time.",
    prompt: "What type of barrier is most consistent with the pattern observed in Panel A?",
    choices: [
      { text: "A barrier preventing gene flow between populations", hint: "isolation allows independent mutation accumulation" },
      { text: "A barrier affecting survival within populations", hint: "selection within populations is not shown" },
      { text: "A barrier preventing mutation", hint: "mutations still accumulate" },
      { text: "No barrier at all", hint: "shared variants would then increase" }
    ],
    answer: "A barrier preventing gene flow between populations",
    explanation: "Without gene flow, populations accumulate private genetic variants independently."
  },
  {
    category: "Microevolution",
    img: "./images/drift-flow3.png",
    imgAlt: "Two panels (A and B) showing accumulation of genetic variants over generations. Blue and green lines represent private variants in Pop 1 and Pop 2, while the red line represents shared variants.",
    caption: "Panels A–B: Accumulation of private and shared genetic variants over time.",
    prompt: "Taken together, what evolutionary processes best explain the differences between Panels A and B?",
    choices: [
      { text: "Panel A: genetic drift with isolation; Panel B: drift with gene flow", hint: "both involve mutation, but connectivity differs" },
      { text: "Panel A: selection; Panel B: mutation only", hint: "selection patterns are not shown" },
      { text: "Panel A: gene flow; Panel B: isolation", hint: "this reverses the observed pattern" },
      { text: "Panel A: stabilizing selection; Panel B: disruptive selection", hint: "no fitness differences are shown" }
    ],
    answer: "Panel A: genetic drift with isolation; Panel B: drift with gene flow",
    explanation: "Both panels show mutation accumulation, but isolation in Panel A promotes divergence, while gene flow in Panel B maintains shared variation."
  },

  // =============================
  // DIRECTIONAL SELECTION OVER TIME (Fitness-graph2.png)
  // =============================
  {
    category: "Microevolution",
    img: "./images/Fitness-graph2.png",
    imgAlt: "Four histograms (A–D) showing the distribution of male size across generations. Panel A represents early generations with a centered distribution, while Panels B–D show a shift toward larger body size over time.",
    caption: "Panels A–D: Change in male size distribution over successive generations.",
    prompt: "How does the distribution of male size change from Panel A to Panel D?",
    choices: [
      { text: "The distribution shifts toward larger sizes", hint: "the peak moves to the right over time" },
      { text: "The distribution becomes bimodal", hint: "there are not two distinct peaks" },
      { text: "The distribution narrows around the same mean", hint: "the mean is not stable" },
      { text: "The distribution shifts toward smaller sizes", hint: "the peak does not move left" }
    ],
    answer: "The distribution shifts toward larger sizes",
    explanation: "Across generations, the peak of the distribution moves toward larger male size, indicating a consistent directional change."
  },
  {
    category: "Microevolution",
    img: "./images/Fitness-graph2.png",
    imgAlt: "Four histograms (A–D) showing the distribution of male size across generations. Panel A represents early generations with a centered distribution, while Panels B–D show a shift toward larger body size over time.",
    caption: "Panels A–D: Change in male size distribution over successive generations.",
    prompt: "Which type of natural selection is best illustrated by the change in male size from Panel A to Panel D?",
    choices: [
      { text: "Directional selection", hint: "one extreme phenotype is consistently favored" },
      { text: "Stabilizing selection", hint: "this would favor intermediate sizes" },
      { text: "Disruptive selection", hint: "this would favor both extremes" },
      { text: "Balancing selection", hint: "this would maintain multiple phenotypes" }
    ],
    answer: "Directional selection",
    explanation: "Directional selection occurs when individuals at one extreme of a trait distribution have higher fitness, causing the population mean to shift over time."
  },
  {
    category: "Microevolution",
    img: "./images/Fitness-graph2.png",
    imgAlt: "Four histograms (A–D) showing the distribution of male size across generations. Panel A represents early generations with a centered distribution, while Panels B–D show a shift toward larger body size over time.",
    caption: "Panels A–D: Change in male size distribution over successive generations.",
    prompt: "Based on the change in the distributions, which individuals most likely had the highest reproductive success?",
    choices: [
      { text: "Larger males", hint: "their frequency increases over generations" },
      { text: "Intermediate-sized males", hint: "the mean does not remain stable" },
      { text: "Smaller males", hint: "their frequency declines over time" },
      { text: "All males equally", hint: "equal fitness would prevent a shift" }
    ],
    answer: "Larger males",
    explanation: "The increasing frequency of larger males suggests they had higher fitness and produced more offspring."
  },
  {
    category: "Microevolution",
    img: "./images/Fitness-graph2.png",
    imgAlt: "Four histograms (A–D) showing the distribution of male size across generations. Panel A represents early generations with a centered distribution, while Panels B–D show a shift toward larger body size over time.",
    caption: "Panels A–D: Change in male size distribution over successive generations.",
    prompt: "Which condition must be true for directional selection on male size to occur?",
    choices: [
      { text: "Male size must be heritable", hint: "selection only acts on heritable traits" },
      { text: "All males must start at the same size", hint: "variation is required" },
      { text: "Mutations must occur every generation", hint: "standing variation is sufficient" },
      { text: "Selection must favor intermediates", hint: "this describes stabilizing selection" }
    ],
    answer: "Male size must be heritable",
    explanation: "Natural selection changes trait distributions only when variation in the trait has a genetic basis."
  },
  {
    category: "Microevolution",
    img: "./images/Fitness-graph2.png",
    imgAlt: "Four histograms (A–D) showing the distribution of male size across generations. Panel A represents early generations with a centered distribution, while Panels B–D show a shift toward larger body size over time.",
    caption: "Panels A–D: Change in male size distribution over successive generations.",
    prompt: "Why is genetic drift alone unlikely to explain the consistent shift seen from Panel A to Panel D?",
    choices: [
      { text: "The change is consistently in one direction", hint: "drift is random" },
      { text: "The population size is large", hint: "size alone does not rule out drift" },
      { text: "Mutations are rare", hint: "mutation rate does not explain directionality" },
      { text: "Selection only affects survival", hint: "selection affects reproduction as well" }
    ],
    answer: "The change is consistently in one direction",
    explanation: "Genetic drift produces random fluctuations, whereas a consistent directional shift suggests selection."
  },
  {
    category: "Microevolution",
    img: "./images/Fitness-graph2.png",
    imgAlt: "Four histograms (A–D) showing the distribution of male size across generations. Panel A represents early generations with a centered distribution, while Panels B–D show a shift toward larger body size over time.",
    caption: "Panels A–D: Change in male size distribution over successive generations.",
    prompt: "If the selective pressure favoring larger males continues, what pattern would you expect in future generations?",
    choices: [
      { text: "The distribution would continue shifting toward larger sizes", hint: "directional selection would persist" },
      { text: "The distribution would return to the original mean", hint: "this would require selection to reverse" },
      { text: "The distribution would become bimodal", hint: "this would suggest disruptive selection" },
      { text: "The distribution would stop changing immediately", hint: "selection does not halt without cause" }
    ],
    answer: "The distribution would continue shifting toward larger sizes",
    explanation: "As long as larger size confers higher fitness and variation exists, directional selection will continue to move the trait mean."
  },
  {
    category: "Microevolution",
    img: "./images/Fitness-graph2.png",
    imgAlt: "Four histograms (A–D) showing the distribution of male size across generations. Panel A represents early generations with a centered distribution, while Panels B–D show a shift toward larger body size over time.",
    caption: "Panels A–D: Change in male size distribution over successive generations.",
    prompt: "Which factor could eventually limit the continued increase in male size?",
    choices: [
      { text: "Energetic or survival costs of large size", hint: "trade-offs can counter selection" },
      { text: "Lack of mutation every generation", hint: "standing variation can persist" },
      { text: "Genetic drift", hint: "drift does not impose consistent limits" },
      { text: "Random mating", hint: "random mating does not prevent selection" }
    ],
    answer: "Energetic or survival costs of large size",
    explanation: "Trade-offs such as increased energy demands or predation risk can oppose selection for ever-larger size."
  },
  {
    category: "Microevolution",
    img: "./images/Fitness-graph2.png",
    imgAlt: "Four histograms (A–D) showing the distribution of male size across generations. Panel A represents early generations with a centered distribution, while Panels B–D show a shift toward larger body size over time.",
    caption: "Panels A–D: Change in male size distribution over successive generations.",
    prompt: "If larger male size increases mating success but decreases survival, which form of selection is most directly favoring larger size?",
    choices: [
      { text: "Sexual selection", hint: "mating success drives the pattern" },
      { text: "Stabilizing selection", hint: "this favors intermediates" },
      { text: "Genetic drift", hint: "drift is random" },
      { text: "Artificial selection", hint: "no human involvement is shown" }
    ],
    answer: "Sexual selection",
    explanation: "Sexual selection favors traits that increase mating success, even if they reduce survival."
  },
  {
    category: "Macroevolution",
    img: "./images/Fitness-graph2.png",
    imgAlt: "Four histograms (A–D) showing the distribution of male size across generations. Panel A represents early generations with a centered distribution, while Panels B–D show a shift toward larger body size over time.",
    caption: "Panels A–D: Change in male size distribution over successive generations.",
    prompt: "How could continued directional selection on male size contribute to speciation?",
    choices: [
      { text: "By leading to reproductive isolation through mate choice", hint: "divergent preferences can reduce gene flow" },
      { text: "By eliminating all variation", hint: "selection does not eliminate all variation" },
      { text: "By increasing gene flow between populations", hint: "selection typically reduces gene flow when divergent" },
      { text: "By preventing mutation", hint: "selection does not stop mutation" }
    ],
    answer: "By leading to reproductive isolation through mate choice",
    explanation: "If different populations experience different selection pressures on size, mate preferences may diverge, contributing to reproductive isolation."
  },

  // =============================
  // HABITAT USE & ECOLOGICAL ISOLATION (habitats-stacked.png)
  // =============================
  {
    category: "Microevolution",
    img: "./images/habitats-stacked.png",
    imgAlt: "Four panels (A–D) showing stacked bar charts of habitat use by two populations (Pop 1 and Pop 2) across Hab1, Hab2, and Both habitats.",
    caption: "Panels A–D: Habitat use by Pop 1 and Pop 2.",
    prompt: "Which panel shows the greatest difference in habitat use between Pop 1 and Pop 2?",
    choices: [
      { text: "Panel A", hint: "each population primarily uses a different habitat" },
      { text: "Panel B", hint: "habitat use differs, but overlap is substantial" },
      { text: "Panel C", hint: "habitat use is similar between populations" },
      { text: "Panel D", hint: "habitat use is nearly identical" }
    ],
    answer: "Panel A",
    explanation: "In Panel A, Pop 1 primarily uses Hab1 while Pop 2 primarily uses Hab2, showing strong habitat segregation."
  },
  {
    category: "Microevolution",
    img: "./images/habitats-stacked.png",
    imgAlt: "Four panels (A–D) showing stacked bar charts of habitat use by two populations (Pop 1 and Pop 2) across Hab1, Hab2, and Both habitats.",
    caption: "Panels A–D: Habitat use by Pop 1 and Pop 2.",
    prompt: "Which panel shows the least habitat overlap between Pop 1 and Pop 2?",
    choices: [
      { text: "Panel A", hint: "habitat use is almost entirely non-overlapping" },
      { text: "Panel B", hint: "overlap is present but incomplete" },
      { text: "Panel C", hint: "most habitat use is shared" },
      { text: "Panel D", hint: "habitat use is nearly identical" }
    ],
    answer: "Panel A",
    explanation: "Panel A shows minimal shared habitat use, indicating strong segregation."
  },
  {
    category: "Microevolution",
    img: "./images/habitats-stacked.png",
    imgAlt: "Four panels (A–D) showing stacked bar charts of habitat use by two populations (Pop 1 and Pop 2) across Hab1, Hab2, and Both habitats.",
    caption: "Panels A–D: Habitat use by Pop 1 and Pop 2.",
    prompt: "In which panel would gene flow between Pop 1 and Pop 2 most likely be lowest?",
    choices: [
      { text: "Panel A", hint: "fewer shared habitats means fewer encounters" },
      { text: "Panel B", hint: "some overlap still allows mating" },
      { text: "Panel C", hint: "high overlap promotes gene flow" },
      { text: "Panel D", hint: "nearly identical habitat use promotes gene flow" }
    ],
    answer: "Panel A",
    explanation: "Reduced habitat overlap lowers encounter rates, decreasing gene flow."
  },
  {
    category: "Macroevolution",
    img: "./images/habitats-stacked.png",
    imgAlt: "Four panels (A–D) showing stacked bar charts of habitat use by two populations (Pop 1 and Pop 2) across Hab1, Hab2, and Both habitats.",
    caption: "Panels A–D: Habitat use by Pop 1 and Pop 2.",
    prompt: "The reduced interaction between populations in Panel A is best described as which type of reproductive barrier?",
    choices: [
      { text: "Ecological (habitat) isolation", hint: "populations occupy different habitats" },
      { text: "Temporal isolation", hint: "this involves different mating times" },
      { text: "Mechanical isolation", hint: "this involves incompatible structures" },
      { text: "Postzygotic isolation", hint: "this occurs after fertilization" }
    ],
    answer: "Ecological (habitat) isolation",
    explanation: "Habitat-based isolation prevents encounters before mating occurs, making it a prezygotic barrier."
  },
  {
    category: "Macroevolution",
    img: "./images/habitats-stacked.png",
    imgAlt: "Four panels (A–D) showing stacked bar charts of habitat use by two populations (Pop 1 and Pop 2) across Hab1, Hab2, and Both habitats.",
    caption: "Panels A–D: Habitat use by Pop 1 and Pop 2.",
    prompt: "Which panel most likely represents populations in the early stages of divergence rather than fully separate species?",
    choices: [
      { text: "Panel A", hint: "strong isolation suggests late-stage divergence" },
      { text: "Panel B", hint: "partial isolation suggests divergence in progress" },
      { text: "Panel C", hint: "high overlap suggests little divergence" },
      { text: "Panel D", hint: "nearly identical habitat use suggests a single population" }
    ],
    answer: "Panel B",
    explanation: "Partial habitat segregation suggests reduced but ongoing gene flow, consistent with early-stage divergence."
  },
  {
    category: "Microevolution",
    img: "./images/habitats-stacked.png",
    imgAlt: "Four panels (A–D) showing stacked bar charts of habitat use by two populations (Pop 1 and Pop 2) across Hab1, Hab2, and Both habitats.",
    caption: "Panels A–D: Habitat use by Pop 1 and Pop 2.",
    prompt: "Which panel most strongly suggests divergent natural selection acting on habitat preference?",
    choices: [
      { text: "Panel A", hint: "strong habitat specialization suggests selection" },
      { text: "Panel B", hint: "overlap suggests weaker selective differences" },
      { text: "Panel C", hint: "shared habitat use limits divergence" },
      { text: "Panel D", hint: "identical habitat use suggests similar selection pressures" }
    ],
    answer: "Panel A",
    explanation: "Strong habitat specialization is consistent with divergent selection favoring different environments."
  },
  {
    category: "Microevolution",
    img: "./images/habitats-stacked.png",
    imgAlt: "Four panels (A–D) showing stacked bar charts of habitat use by two populations (Pop 1 and Pop 2) across Hab1, Hab2, and Both habitats.",
    caption: "Panels A–D: Habitat use by Pop 1 and Pop 2.",
    prompt: "In which panel would Pop 1 and Pop 2 be most likely to experience independent genetic drift and selection?",
    choices: [
      { text: "Panel A", hint: "limited interaction allows independent evolution" },
      { text: "Panel B", hint: "some gene flow still connects populations" },
      { text: "Panel C", hint: "high gene flow constrains divergence" },
      { text: "Panel D", hint: "gene flow is likely extensive" }
    ],
    answer: "Panel A",
    explanation: "Reduced gene flow allows drift and selection to act independently in each population."
  },
  {
    category: "Macroevolution",
    img: "./images/habitats-stacked.png",
    imgAlt: "Four panels (A–D) showing stacked bar charts of habitat use by two populations (Pop 1 and Pop 2) across Hab1, Hab2, and Both habitats.",
    caption: "Panels A–D: Habitat use by Pop 1 and Pop 2.",
    prompt: "If hybrids between Pop 1 and Pop 2 have reduced fitness, which change would be most consistent with reinforcement?",
    choices: [
      { text: "A shift from Panel B toward Panel A over time", hint: "selection would favor reduced overlap" },
      { text: "A shift from Panel A toward Panel D over time", hint: "this would increase hybridization" },
      { text: "No change in habitat use patterns", hint: "reinforcement predicts stronger isolation" },
      { text: "Increased use of the same habitat by both populations", hint: "this would increase gene flow" }
    ],
    answer: "A shift from Panel B toward Panel A over time",
    explanation: "Reinforcement strengthens prezygotic barriers when hybrids are costly."
  },
  {
    category: "Microevolution",
    img: "./images/habitats-stacked.png",
    imgAlt: "Four panels (A–D) showing stacked bar charts of habitat use by two populations (Pop 1 and Pop 2) across Hab1, Hab2, and Both habitats.",
    caption: "Panels A–D: Habitat use by Pop 1 and Pop 2.",
    prompt: "Which panel would be most sensitive to environmental change that alters habitat availability?",
    choices: [
      { text: "Panel B", hint: "partial specialization makes shifts impactful" },
      { text: "Panel A", hint: "strong specialization may buffer small changes" },
      { text: "Panel D", hint: "generalist use reduces sensitivity" },
      { text: "Panel C", hint: "high overlap reduces differential effects" }
    ],
    answer: "Panel B",
    explanation:
      "Partially segregated populations may shift toward greater overlap or stronger isolation depending on environmental change."
  },

  // =============================
  // TEMPORAL ISOLATION & GENE FLOW (mating-time.png) — de-duplicated (single set)
  // =============================
  {
    category: "Macroevolution",
    img: "./images/mating-time.png",
    imgAlt: "Four panels (A–D) showing density distributions of mating activity over Julian day for two species. Panel A shows complete overlap, B partial overlap (~50%), C minimal overlap (5–10%), and D no overlap.",
    caption: "Panels A–D: Temporal overlap in mating activity between two species.",
    prompt: "Which panel represents the populations most likely to experience ongoing gene flow?",
    choices: [
      { text: "Panel A", hint: "complete temporal overlap allows frequent interbreeding" },
      { text: "Panel B", hint: "partial overlap limits but does not eliminate gene flow" },
      { text: "Panel C", hint: "very limited overlap greatly reduces mating opportunities" },
      { text: "Panel D", hint: "no overlap prevents mating entirely" }
    ],
    answer: "Panel A",
    explanation: "Complete overlap in mating timing maximizes opportunities for interbreeding, resulting in the highest potential gene flow."
  },
  {
    category: "Macroevolution",
    img: "./images/mating-time.png",
    imgAlt: "Four panels (A–D) showing density distributions of mating activity over Julian day for two species. Panel A shows complete overlap, B partial overlap (~50%), C minimal overlap (5–10%), and D no overlap.",
    caption: "Panels A–D: Temporal overlap in mating activity between two species.",
    prompt: "Which panel represents populations with effectively no gene flow due to prezygotic isolation?",
    choices: [
      { text: "Panel A", hint: "overlap allows mating" },
      { text: "Panel B", hint: "some overlap still allows gene flow" },
      { text: "Panel C", hint: "rare overlap still permits occasional mating" },
      { text: "Panel D", hint: "no overlap prevents mating entirely" }
    ],
    answer: "Panel D",
    explanation: "When mating times do not overlap at all, individuals cannot mate, creating complete prezygotic isolation and eliminating gene flow."
  },
  {
    category: "Macroevolution",
    img: "./images/mating-time.png",
    imgAlt: "Four panels (A–D) showing density distributions of mating activity over Julian day for two species. Panel A shows complete overlap, B partial overlap (~50%), C minimal overlap (5–10%), and D no overlap.",
    caption: "Panels A–D: Temporal overlap in mating activity between two species.",
    prompt: "The isolation shown in Panel D is best described as which type of reproductive barrier?",
    choices: [
      { text: "Temporal isolation (prezygotic)", hint: "mating occurs at different times" },
      { text: "Mechanical isolation", hint: "this involves incompatible reproductive structures" },
      { text: "Postzygotic isolation", hint: "this occurs after fertilization" },
      { text: "Geographic isolation", hint: "no spatial separation is shown" }
    ],
    answer: "Temporal isolation (prezygotic)",
    explanation: "The populations are isolated because they mate at different times of year, preventing mating before fertilization can occur."
  },
  {
    category: "Microevolution",
    img: "./images/mating-time.png",
    imgAlt: "Four panels (A–D) showing density distributions of mating activity over Julian day for two species. Panel A shows complete overlap, B partial overlap (~50%), C minimal overlap (5–10%), and D no overlap.",
    caption: "Panels A–D: Temporal overlap in mating activity between two species.",
    prompt: "Which panel is most likely to allow populations to accumulate independent genetic drift and experience different selective pressures?",
    choices: [
      { text: "Panel A", hint: "high gene flow counteracts divergence" },
      { text: "Panel B", hint: "moderate gene flow still constrains divergence" },
      { text: "Panel C", hint: "limited gene flow allows partial independence" },
      { text: "Panel D", hint: "no gene flow allows independent evolution" }
    ],
    answer: "Panel D",
    explanation: "Without gene flow, populations evolve independently, allowing genetic drift and selection to act separately in each lineage."
  },
  {
    category: "Macroevolution",
    img: "./images/mating-time.png",
    imgAlt: "Four panels (A–D) showing density distributions of mating activity over Julian day for two species. Panel A shows complete overlap, B partial overlap (~50%), C minimal overlap (5–10%), and D no overlap.",
    caption: "Panels A–D: Temporal overlap in mating activity between two species.",
    prompt: "Which panel most likely represents populations that are in the early stages of speciation rather than fully separate species?",
    choices: [
      { text: "Panel A", hint: "high overlap suggests a single interbreeding population" },
      { text: "Panel B", hint: "partial isolation may indicate divergence in progress" },
      { text: "Panel C", hint: "near-complete isolation suggests late-stage divergence" },
      { text: "Panel D", hint: "complete isolation suggests speciation is already complete" }
    ],
    answer: "Panel B",
    explanation: "Partial overlap in mating time suggests reduced but ongoing gene flow, consistent with early-stage speciation."
  },
  {
    category: "Macroevolution",
    img: "./images/mating-time.png",
    imgAlt: "Four panels (A–D) showing density distributions of mating activity over Julian day for two species. Panel A shows complete overlap, B partial overlap (~50%), C minimal overlap (5–10%), and D no overlap.",
    caption: "Panels A–D: Temporal overlap in mating activity between two species.",
    prompt: "If hybrids between these populations have reduced fitness, which pattern would be most consistent with reinforcement?",
    choices: [
      { text: "A shift from Panel B toward Panel C or D over time", hint: "selection would favor reduced overlap" },
      { text: "A shift from Panel D toward Panel A over time", hint: "this would increase hybridization" },
      { text: "No change in mating distributions", hint: "reinforcement predicts increased isolation" },
      { text: "Complete overlap regardless of hybrid fitness", hint: "this contradicts reinforcement theory" }
    ],
    answer: "A shift from Panel B toward Panel C or D over time",
    explanation:
      "Reinforcement occurs when selection favors traits that reduce hybridization, increasing prezygotic isolation such as divergence in mating time."
  },
  {
    category: "Microevolution",
    img: "./images/mating-time.png",
    imgAlt: "Four panels (A–D) showing density distributions of mating activity over Julian day for two species. Panel A shows complete overlap, B partial overlap (~50%), C minimal overlap (5–10%), and D no overlap.",
    caption: "Panels A–D: Temporal overlap in mating activity between two species.",
    prompt: "Which panel would be most sensitive to environmental change that shifts breeding season timing?",
    choices: [
      { text: "Panel A", hint: "overlap would remain high despite shifts" },
      { text: "Panel B", hint: "small shifts could greatly alter overlap" },
      { text: "Panel D", hint: "no overlap means shifts must be large to matter" },
      { text: "All panels equally", hint: "temporal isolation does not respond equally to shifts" }
    ],
    answer: "Panel B",
    explanation: "In partially overlapping populations, small environmental changes could either increase or eliminate overlap, strongly affecting gene flow."
  },

  // =============================
  // MODE OF SPECIATION — overlap (modes-speciation2.png)
  // =============================
  {
    category: "Macroevolution",
    img: "./images/modes-speciation2.png",
    imgAlt: "Panel A: scatter plot showing two populations occupying the same geographic space with complete overlap. Panel B: phylogenetic tree showing the populations as distinct evolutionary lineages.",
    caption: "Panels A–B: Geographic overlap (A) and phylogenetic divergence (B).",
    prompt:
      "Panel A shows two populations occupying the same geographic space with complete overlap, while Panel B shows them as distinct evolutionary lineages. Which mode of speciation best explains this pattern?",
    choices: [
      { text: "Sympatric speciation", hint: "speciation occurs without geographic separation" },
      { text: "Allopatric speciation", hint: "this requires a physical barrier separating populations" },
      { text: "Parapatric speciation", hint: "this typically involves adjacent, partially overlapping ranges" },
      { text: "Vicariance", hint: "this involves splitting a population with a new geographic barrier" }
    ],
    answer: "Sympatric speciation",
    explanation: "Because the populations overlap geographically in Panel A, geographic isolation is unlikely. Divergence despite overlap is most consistent with sympatric speciation."
  },
  {
    category: "Macroevolution",
    img: "./images/modes-speciation2.png",
    imgAlt: "Panel A: scatter plot showing two populations occupying the same geographic space with complete overlap. Panel B: phylogenetic tree showing the populations as distinct evolutionary lineages.",
    caption: "Panels A–B: Geographic overlap (A) and phylogenetic divergence (B).",
    prompt: "Which mode of speciation occurs when reproductive isolation evolves between populations that occupy the same geographic area?",
    choices: [
      { text: "Allopatric speciation", hint: "this requires physical separation" },
      { text: "Sympatric speciation", hint: "this occurs without geographic separation" },
      { text: "Parapatric speciation", hint: "this involves neighboring populations with limited overlap" },
      { text: "Peripatric speciation", hint: "this involves small populations at the edge of a range" }
    ],
    answer: "Sympatric speciation",
    explanation: "Sympatric speciation occurs when populations diverge and become reproductively isolated while living in the same geographic area."
  },
  {
    category: "Macroevolution",
    img: "./images/modes-speciation2.png",
    imgAlt: "Panel A: scatter plot showing two populations occupying the same geographic space with complete overlap. Panel B: phylogenetic tree showing the populations as distinct evolutionary lineages.",
    caption: "Panels A–B: Geographic overlap (A) and phylogenetic divergence (B).",
    prompt: "Which mode of speciation is least consistent with the pattern shown in Panels A and B?",
    choices: [
      { text: "Allopatric speciation", hint: "this requires geographic isolation" },
      { text: "Sympatric speciation", hint: "geographic overlap is expected" },
      { text: "Speciation driven by ecological differentiation", hint: "ecological divergence can occur in sympatry" },
      { text: "Speciation involving reduced gene flow without physical barriers", hint: "this can occur in sympatric scenarios" }
    ],
    answer: "Allopatric speciation",
    explanation: "Allopatric speciation depends on geographic separation, which is not present in Panel A. Therefore, it is least consistent with the observed pattern."
  },
  {
    category: "Microevolution",
    img: "./images/modes-speciation2.png",
    imgAlt: "Panel A: scatter plot showing two populations occupying the same geographic space with complete overlap. Panel B: phylogenetic tree showing the populations as distinct evolutionary lineages.",
    caption: "Panels A–B: Geographic overlap (A) and phylogenetic divergence (B).",
    prompt: "Which mechanism could most plausibly drive the speciation shown here despite geographic overlap?",
    choices: [
      { text: "Disruptive selection favoring different traits within the same environment", hint: "selection can reduce gene flow even without barriers" },
      { text: "Physical isolation caused by a mountain range", hint: "no barrier is shown in Panel A" },
      { text: "Founder effects from population fragmentation", hint: "fragmentation implies separation" },
      { text: "Random mating across the entire population", hint: "this would prevent divergence" }
    ],
    answer: "Disruptive selection favoring different traits within the same environment",
    explanation:
      "In sympatric speciation, divergence can occur through mechanisms like disruptive selection, assortative mating, or ecological specialization within the same geographic area."
  },
  {
    category: "Macroevolution",
    img: "./images/modes-speciation2.png",
    imgAlt: "Panel A: scatter plot showing two populations occupying the same geographic space with complete overlap. Panel B: phylogenetic tree showing the populations as distinct evolutionary lineages.",
    caption: "Panels A–B: Geographic overlap (A) and phylogenetic divergence (B).",
    prompt: "Which additional observation would most strongly support sympatric speciation in this system?",
    choices: [
      { text: "Evidence of assortative mating between the two groups", hint: "nonrandom mating can reduce gene flow in sympatry" },
      { text: "Discovery of a geographic barrier separating the populations", hint: "this would support allopatric speciation instead" },
      { text: "High gene flow with no reproductive barriers", hint: "this would prevent speciation" },
      { text: "Recent colonization of a new island by one group", hint: "this suggests geographic isolation" }
    ],
    answer: "Evidence of assortative mating between the two groups",
    explanation:
      "Assortative mating can reduce gene flow between overlapping populations, allowing reproductive isolation to evolve without geographic separation."
  },
  {
    category: "Macroevolution",
    img: "./images/modes-speciation2.png",
    imgAlt: "Panel A: scatter plot showing two populations occupying the same geographic space with complete overlap. Panel B: phylogenetic tree showing the populations as distinct evolutionary lineages.",
    caption: "Panels A–B: Geographic overlap (A) and phylogenetic divergence (B).",
    prompt: "What key feature distinguishes the speciation shown here from allopatric speciation?",
    choices: [
      { text: "Reproductive isolation evolves without geographic separation", hint: "this defines sympatric speciation" },
      { text: "Speciation occurs instantaneously", hint: "sympatric speciation is not necessarily instant" },
      { text: "Natural selection is absent", hint: "selection often plays a major role" },
      { text: "Phylogenetic divergence cannot be detected", hint: "Panel B clearly shows divergence" }
    ],
    answer: "Reproductive isolation evolves without geographic separation",
    explanation:
      "The defining feature of sympatric speciation is that populations diverge and become reproductively isolated while remaining in the same geographic area."
  },

  // =============================
  // MODE OF SPECIATION — separation (mode-speciation1.png)
  // =============================
  {
    category: "Macroevolution",
    img: "./images/mode-speciation1.png",
    imgAlt: "Panel A: scatter plot showing two geographically separated population clusters (blue vs red). Panel B: phylogenetic tree showing the two populations as distinct lineages, consistent with speciation.",
    caption: "Panels A–B: Geographic separation (A) and phylogenetic divergence (B).",
    prompt:
      "Panel A shows two populations that are spatially separated with no overlap. Panel B shows those populations as distinct evolutionary lineages. Which mode of speciation most likely explains this pattern?",
    choices: [
      { text: "Allopatric speciation", hint: "look for geographic isolation that reduces gene flow" },
      { text: "Sympatric speciation", hint: "this requires speciation without geographic separation" },
      { text: "Parapatric speciation", hint: "this usually involves adjacent ranges with a contact zone" },
      { text: "Polyploid speciation", hint: "this is common in plants and can cause instant reproductive isolation" }
    ],
    answer: "Allopatric speciation",
    explanation:
      "The populations are geographically separated (Panel A), which would reduce gene flow and allow divergence over time. The phylogenetic split (Panel B) is consistent with allopatric speciation."
  },
  {
    category: "Macroevolution",
    img: "./images/mode-speciation1.png",
    imgAlt: "Panel A: scatter plot showing two geographically separated population clusters (blue vs red). Panel B: phylogenetic tree showing the two populations as distinct lineages, consistent with speciation.",
    caption: "Panels A–B: Geographic separation (A) and phylogenetic divergence (B).",
    prompt:
      "Which mode of speciation is defined as the formation of new species following geographic isolation that prevents gene flow, as suggested by Panels A and B?",
    choices: [
      { text: "Sympatric speciation", hint: "think: speciation in the same geographic area" },
      { text: "Allopatric speciation", hint: "think: speciation after a physical separation" },
      { text: "Parapatric speciation", hint: "think: adjacent populations with limited gene flow across a border" },
      { text: "Adaptive radiation", hint: "think: rapid diversification into many species, often after new habitats open" }
    ],
    answer: "Allopatric speciation",
    explanation: "Allopatric speciation occurs when populations become geographically isolated, reducing gene flow and allowing reproductive isolation to evolve."
  },
  {
    category: "Macroevolution",
    img: "./images/mode-speciation1.png",
    imgAlt: "Panel A: scatter plot showing two geographically separated population clusters (blue vs red). Panel B: phylogenetic tree showing the two populations as distinct lineages, consistent with speciation.",
    caption: "Panels A–B: Geographic separation (A) and phylogenetic divergence (B).",
    prompt: "Which mode of speciation is least consistent with the pattern shown in Panels A and B?",
    choices: [
      { text: "Sympatric speciation", hint: "sympatric speciation happens without geographic separation" },
      { text: "Allopatric speciation", hint: "geographic separation strongly supports this mode" },
      { text: "Speciation driven by geographic isolation", hint: "this is another way of describing allopatric speciation" },
      { text: "Speciation following long-term reduction in gene flow", hint: "reduced gene flow is expected when populations are separated" }
    ],
    answer: "Sympatric speciation",
    explanation: "Panels A and B indicate geographic separation and divergence, which conflicts with sympatric speciation (speciation without geographic separation)."
  },
  {
    category: "Microevolution",
    img: "./images/mode-speciation1.png",
    imgAlt: "Panel A: scatter plot showing two geographically separated population clusters (blue vs red). Panel B: phylogenetic tree showing the two populations as distinct lineages, consistent with speciation.",
    caption: "Panels A–B: Geographic separation (A) and phylogenetic divergence (B).",
    prompt: "What factor most directly initiated the divergence that led to the speciation pattern shown in Panels A and B?",
    choices: [
      { text: "Geographic isolation leading to reduced gene flow", hint: "physical separation prevents mixing of alleles" },
      { text: "Disruptive selection within a single population", hint: "this can contribute, but does not require separation" },
      { text: "Polyploidy causing instant reproductive isolation", hint: "this is a chromosome-number mechanism, not shown here" },
      { text: "Sexual selection in overlapping populations", hint: "this would be more consistent with sympatric scenarios" }
    ],
    answer: "Geographic isolation leading to reduced gene flow",
    explanation:
      "The most direct trigger suggested by Panel A is geographic separation, which reduces gene flow and allows populations to evolve independently."
  },
  {
    category: "Macroevolution",
    img: "./images/mode-speciation1.png",
    imgAlt: "Panel A: scatter plot showing two geographically separated population clusters (blue vs red). Panel B: phylogenetic tree showing the two populations as distinct lineages, consistent with speciation.",
    caption: "Panels A–B: Geographic separation (A) and phylogenetic divergence (B).",
    prompt:
      "If the geographic barrier separating the populations in Panel A were removed before reproductive isolation was complete, what outcome would be most likely?",
    choices: [
      { text: "The populations would freely interbreed", hint: "early in divergence, reproductive barriers may be weak or absent" },
      { text: "The populations would remain distinct species", hint: "this requires reproductive isolation to already be strong" },
      { text: "Hybrid inviability would immediately occur", hint: "strong postzygotic barriers are not guaranteed early" },
      { text: "A new polyploid species would form", hint: "polyploidy is not caused by removing geographic barriers" }
    ],
    answer: "The populations would freely interbreed",
    explanation:
      "If reproductive isolation had not yet evolved, restoring gene flow would allow interbreeding and could reduce or erase differences between the populations."
  },
  {
    category: "Macroevolution",
    img: "./images/mode-speciation1.png",
    imgAlt: "Panel A: scatter plot showing two geographically separated population clusters (blue vs red). Panel B: phylogenetic tree showing the two populations as distinct lineages, consistent with speciation.",
    caption: "Panels A–B: Geographic separation (A) and phylogenetic divergence (B).",
    prompt: "How would the evidence need to change if the speciation shown were sympatric rather than allopatric?",
    choices: [
      { text: "Panel A would show geographic overlap while Panel B still shows two lineages", hint: "sympatric speciation occurs in the same area" },
      { text: "Panel A would show even greater separation between clusters", hint: "greater separation supports allopatric, not sympatric" },
      { text: "Panel B would show no branching between populations", hint: "speciation requires lineage splitting" },
      { text: "Panel A would show identical points because selection stops in sympatry", hint: "sympatric speciation can still involve strong divergence" }
    ],
    answer: "Panel A would show geographic overlap while Panel B still shows two lineages",
    explanation:
      "Sympatric speciation occurs without geographic separation, so the populations would overlap spatially but still be distinct lineages if speciation occurred."
  }


  ],

  // -----------------------------
  // DECK 2: Experimental design / controls
  // -----------------------------
  "TBD": [
    {
    }
  ]
};
