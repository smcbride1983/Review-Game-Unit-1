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
      category: "Selection type",
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
    // phylo-tree2.png FIXED:
    // A = monophyletic, B = paraphyletic, C = polyphyletic
    // =============================
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
      answer: "Tree A",
      explanation:
        "In Tree A, taxa A, B, and C share a most recent common ancestor and all descendants of that ancestor are included. This satisfies the definition of a monophyletic group."
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
        { text: "Tree B", hint: "paraphyletic groups exclude at least one descendant of the common ancestor" },
        { text: "Tree C", hint: "polyphyletic groups lack a single recent common ancestor" },
        { text: "None of the trees", hint: "check whether any grouping excludes descendants of the common ancestor" }
      ],
      answer: "Tree B",
      explanation:
        "In Tree B, taxa A, B, and C share a common ancestor, but at least one descendant of that ancestor is excluded from the highlighted group. That makes the grouping paraphyletic."
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
        "In Tree C, taxa A, B, and C do not form a single clade and are drawn from different branches, making the grouping polyphyletic."
    },

    // =============================
    // phylo-tree3.png FIXED:
    // tree3 = monophyletic
    // =============================
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
      answer: "Monophyletic",
      explanation:
        "Taxa A, B, and C form a single clade (a node whose descendants are only A, B, and C). Including all descendants of their most recent common ancestor makes the group monophyletic."
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
        { text: "The trait is derived and evolved once in the ancestor of A, B, and C", hint: "this is supported if A, B, and C form a clade" },
        { text: "The trait evolved independently in multiple lineages", hint: "this is more likely when the taxa do not form a clade" },
        { text: "The tree provides no information about trait evolution", hint: "phylogenies are commonly used to infer trait history" }
      ],
      answer: "The trait is derived and evolved once in the ancestor of A, B, and C",
      explanation:
        "Because A, B, and C are monophyletic on this tree, a shared trait is most parsimoniously explained as originating once in their most recent common ancestor and being inherited by all three."
    },

    {
      category: "Phylogenetics: Homology vs convergence",
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
    // phylo-tree4.png is paraphyletic (your existing logic was already consistent)
    // =============================
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

  // 1) Pattern recognition
  {
    category: "Genetic divergence: Pattern",
    img: DRIFT_FLOW2_IMG,
    imgAlt: DRIFT_FLOW2_ALT,
    caption: DRIFT_FLOW2_CAPTION,
    prompt:
      "Which statement best describes the overall pattern in Panel A?",
    choices: [
      { text: "Genetic differences vary widely among replicates over time", hint: "lines spread out in multiple directions" },
      { text: "Genetic differences consistently decrease", hint: "no shared downward trend is visible" },
      { text: "Genetic differences converge toward zero", hint: "this pattern appears in Panel B" },
      { text: "Genetic differences remain identical across replicates", hint: "variation clearly increases" }
    ],
    answer: "Genetic differences vary widely among replicates over time",
    explanation:
      "In Panel A, replicate trajectories diverge in different directions, producing a wide range of genetic differences."
  },

  // 2) Compare panels
  {
    category: "Genetic divergence: Comparison",
    img: DRIFT_FLOW2_IMG,
    imgAlt: DRIFT_FLOW2_ALT,
    caption: DRIFT_FLOW2_CAPTION,
    prompt:
      "What is the most obvious difference between Panels A and B?",
    choices: [
      { text: "Panel A shows divergence among replicates, while Panel B shows convergence", hint: "compare the spread of lines" },
      { text: "Panel A has more generations than Panel B", hint: "both panels span similar time scales" },
      { text: "Panel B shows greater variability than Panel A", hint: "variability decreases in Panel B" },
      { text: "Panel A begins at a higher genetic difference", hint: "starting points are similar" }
    ],
    answer: "Panel A shows divergence among replicates, while Panel B shows convergence",
    explanation:
      "Replicates in Panel A spread apart over time, whereas replicates in Panel B trend toward lower genetic difference."
  },

  // 3) Drift vs gene flow
  {
    category: "Evolutionary processes",
    img: DRIFT_FLOW2_IMG,
    imgAlt: DRIFT_FLOW2_ALT,
    caption: DRIFT_FLOW2_CAPTION,
    prompt:
      "Which evolutionary process best explains the pattern observed in Panel A?",
    choices: [
      { text: "Genetic drift acting independently in isolated populations", hint: "random divergence produces varied outcomes" },
      { text: "Strong gene flow between populations", hint: "this would reduce differences" },
      { text: "Stabilizing selection favoring identical genotypes", hint: "this would limit divergence" },
      { text: "Directional selection favoring the same alleles", hint: "this would cause convergence" }
    ],
    answer: "Genetic drift acting independently in isolated populations",
    explanation:
      "Random changes in allele frequencies cause replicate populations to diverge unpredictably when gene flow is absent."
  },

  // 4) Gene flow inference
  {
    category: "Gene flow",
    img: DRIFT_FLOW2_IMG,
    imgAlt: DRIFT_FLOW2_ALT,
    caption: DRIFT_FLOW2_CAPTION,
    prompt:
      "Which panel is most consistent with ongoing gene flow between populations?",
    choices: [
      { text: "Panel B", hint: "genetic differences decrease over time" },
      { text: "Panel A", hint: "differences persist and spread" },
      { text: "Both panels", hint: "patterns differ clearly" },
      { text: "Neither panel", hint: "gene flow produces predictable effects" }
    ],
    answer: "Panel B",
    explanation:
      "Gene flow homogenizes populations, reducing genetic differences as shown by the downward trend in Panel B."
  },

  // 5) Isolation inference
  {
    category: "Population isolation",
    img: DRIFT_FLOW2_IMG,
    imgAlt: DRIFT_FLOW2_ALT,
    caption: DRIFT_FLOW2_CAPTION,
    prompt:
      "Which panel best represents populations that are genetically isolated from one another?",
    choices: [
      { text: "Panel A", hint: "differences accumulate independently" },
      { text: "Panel B", hint: "differences decline over time" },
      { text: "Both panels equally", hint: "patterns are not equivalent" },
      { text: "Neither panel", hint: "isolation leaves clear signatures" }
    ],
    answer: "Panel A",
    explanation:
      "Without gene flow, isolated populations diverge through drift, producing variable genetic differences."
  },

  // 6) Predict introducing gene flow
  {
    category: "Evolutionary predictions",
    img: DRIFT_FLOW2_IMG,
    imgAlt: DRIFT_FLOW2_ALT,
    caption: DRIFT_FLOW2_CAPTION,
    prompt:
      "If gene flow were introduced into the system shown in Panel A, what change would you expect?",
    choices: [
      { text: "Genetic differences would decrease over time", hint: "gene flow homogenizes populations" },
      { text: "Genetic differences would increase faster", hint: "gene flow opposes divergence" },
      { text: "Replicates would diverge more randomly", hint: "gene flow reduces randomness" },
      { text: "No change in trajectories", hint: "gene flow alters allele frequencies" }
    ],
    answer: "Genetic differences would decrease over time",
    explanation:
      "Gene flow moves alleles between populations, counteracting divergence caused by drift."
  },

  // 7) Replicate variation
  {
    category: "Evolutionary reasoning",
    img: DRIFT_FLOW2_IMG,
    imgAlt: DRIFT_FLOW2_ALT,
    caption: DRIFT_FLOW2_CAPTION,
    prompt:
      "Why do different replicates in Panel A show different trajectories?",
    choices: [
      { text: "Genetic drift produces random outcomes", hint: "random sampling drives divergence" },
      { text: "Each replicate experiences identical selection", hint: "identical selection would align trajectories" },
      { text: "Mutations stop occurring in some replicates", hint: "mutation continues in all populations" },
      { text: "Gene flow varies randomly each generation", hint: "no gene flow is implied" }
    ],
    answer: "Genetic drift produces random outcomes",
    explanation:
      "Drift causes stochastic changes in allele frequencies, leading to different outcomes even under identical conditions."
  },

  // 8) Speciation continuum
  {
    category: "Speciation: Continuum",
    img: DRIFT_FLOW2_IMG,
    imgAlt: DRIFT_FLOW2_ALT,
    caption: DRIFT_FLOW2_CAPTION,
    prompt:
      "Which panel is more likely to represent populations on a trajectory toward speciation?",
    choices: [
      { text: "Panel A", hint: "genetic differences persist and increase" },
      { text: "Panel B", hint: "gene flow maintains similarity" },
      { text: "Both panels", hint: "speciation requires isolation" },
      { text: "Neither panel", hint: "divergence is required for speciation" }
    ],
    answer: "Panel A",
    explanation:
      "Persistent divergence without gene flow promotes the accumulation of reproductive barriers."
  },

  // 9) Synthesis question
  {
    category: "Evolution: Synthesis",
    img: DRIFT_FLOW2_IMG,
    imgAlt: DRIFT_FLOW2_ALT,
    caption: DRIFT_FLOW2_CAPTION,
    prompt:
      "Taken together, what best explains the difference between Panels A and B?",
    choices: [
      { text: "Panel A shows drift with isolation; Panel B shows drift with gene flow", hint: "connect divergence vs convergence" },
      { text: "Panel A shows selection; Panel B shows mutation only", hint: "selection patterns are not shown" },
      { text: "Panel A shows gene flow; Panel B shows isolation", hint: "this reverses the observed pattern" },
      { text: "Panel A shows stabilizing selection; Panel B shows disruptive selection", hint: "fitness is not shown" }
    ],
    answer: "Panel A shows drift with isolation; Panel B shows drift with gene flow",
    explanation:
      "Isolation allows drift to drive divergence, while gene flow counteracts divergence and promotes genetic similarity."
  },

 // 1) Pattern recognition
  {
    category: "Genetic variation: Pattern",
    img: DRIFT_FLOW_IMG,
    imgAlt: DRIFT_FLOW_ALT,
    caption: DRIFT_FLOW_CAPTION,
    prompt:
      "What is the main difference between Panels A and B in terms of shared genetic variants?",
    choices: [
      { text: "Shared variants remain low in A but increase in B", hint: "compare the red lines across panels" },
      { text: "Shared variants increase equally in both panels", hint: "the red lines behave differently" },
      { text: "Shared variants decrease over time in A", hint: "the red line in A is relatively flat" },
      { text: "Shared variants are higher than private variants in A", hint: "private variants dominate in A" }
    ],
    answer: "Shared variants remain low in A but increase in B",
    explanation:
      "Panel A shows little accumulation of shared variants, while Panel B shows a steady increase in shared variants over time."
  },

  // 2) Gene flow inference
  {
    category: "Gene flow",
    img: DRIFT_FLOW_IMG,
    imgAlt: DRIFT_FLOW_ALT,
    caption: DRIFT_FLOW_CAPTION,
    prompt:
      "Which panel is most consistent with ongoing gene flow between Pop 1 and Pop 2?",
    choices: [
      { text: "Panel B", hint: "shared variants accumulate over time" },
      { text: "Panel A", hint: "shared variants remain low" },
      { text: "Both panels equally", hint: "patterns differ clearly" },
      { text: "Neither panel", hint: "private variants increase in both" }
    ],
    answer: "Panel B",
    explanation:
      "Gene flow causes mutations to be shared between populations, leading to an increase in shared variants as seen in Panel B."
  },

  // 3) Isolation inference
  {
    category: "Population isolation",
    img: DRIFT_FLOW_IMG,
    imgAlt: DRIFT_FLOW_ALT,
    caption: DRIFT_FLOW_CAPTION,
    prompt:
      "Which panel best represents populations that are genetically isolated from one another?",
    choices: [
      { text: "Panel A", hint: "private variants accumulate independently" },
      { text: "Panel B", hint: "shared variants increase over time" },
      { text: "Both panels", hint: "isolation produces different patterns" },
      { text: "Neither panel", hint: "private variants alone do not indicate isolation" }
    ],
    answer: "Panel A",
    explanation:
      "Genetic isolation limits gene flow, allowing each population to accumulate its own private mutations."
  },

  // 4) Drift vs selection vs flow
  {
    category: "Evolutionary processes",
    img: DRIFT_FLOW_IMG,
    imgAlt: DRIFT_FLOW_ALT,
    caption: DRIFT_FLOW_CAPTION,
    prompt:
      "Why is genetic drift a more likely explanation than natural selection for the pattern in Panel A?",
    choices: [
      { text: "Mutations accumulate independently without a consistent shared pattern", hint: "drift is random" },
      { text: "Larger populations experience stronger drift", hint: "drift is stronger in small populations" },
      { text: "Selection prevents private variants from forming", hint: "selection does not stop mutation" },
      { text: "Shared variants are eliminated by selection", hint: "no evidence of purifying selection is shown" }
    ],
    answer: "Mutations accumulate independently without a consistent shared pattern",
    explanation:
      "Genetic drift causes random accumulation of mutations, leading to divergence when populations are isolated."
  },

  // 5) Drift + gene flow comparison
  {
    category: "Drift vs gene flow",
    img: DRIFT_FLOW_IMG,
    imgAlt: DRIFT_FLOW_ALT,
    caption: DRIFT_FLOW_CAPTION,
    prompt:
      "Which process most directly explains the increasing number of shared variants in Panel B?",
    choices: [
      { text: "Gene flow between populations", hint: "shared variants increase when alleles move between populations" },
      { text: "Independent mutation in each population", hint: "this would produce private variants" },
      { text: "Directional selection", hint: "selection would favor specific alleles, not sharing per se" },
      { text: "Genetic drift", hint: "drift does not create shared variation across populations" }
    ],
    answer: "Gene flow between populations",
    explanation:
      "Gene flow allows mutations arising in one population to spread to the other, increasing shared genetic variation."
  },

  // 6) Speciation continuum
  {
    category: "Speciation: Continuum",
    img: DRIFT_FLOW_IMG,
    imgAlt: DRIFT_FLOW_ALT,
    caption: DRIFT_FLOW_CAPTION,
    prompt:
      "Which panel best represents populations that are most likely to continue diverging into separate species?",
    choices: [
      { text: "Panel A", hint: "genetic differences accumulate independently" },
      { text: "Panel B", hint: "gene flow maintains similarity" },
      { text: "Both panels", hint: "speciation requires isolation" },
      { text: "Neither panel", hint: "divergence is clearly occurring in one case" }
    ],
    answer: "Panel A",
    explanation:
      "Continued accumulation of private variants without gene flow promotes long-term divergence and speciation."
  },

  // 7) Predict future patterns
  {
    category: "Evolutionary predictions",
    img: DRIFT_FLOW_IMG,
    imgAlt: DRIFT_FLOW_ALT,
    caption: DRIFT_FLOW_CAPTION,
    prompt:
      "If gene flow were introduced into the system shown in Panel A, which change would you most expect?",
    choices: [
      { text: "An increase in shared variants over time", hint: "gene flow spreads alleles between populations" },
      { text: "A decrease in private variants", hint: "mutations would still occur" },
      { text: "Immediate genetic uniformity", hint: "gene flow acts gradually" },
      { text: "No change in genetic patterns", hint: "gene flow alters allele distributions" }
    ],
    answer: "An increase in shared variants over time",
    explanation:
      "Introducing gene flow would allow variants to move between populations, increasing shared genetic variation."
  },

  // 8) Barrier inference
  {
    category: "Reproductive isolation",
    img: DRIFT_FLOW_IMG,
    imgAlt: DRIFT_FLOW_ALT,
    caption: DRIFT_FLOW_CAPTION,
    prompt:
      "What type of barrier is most consistent with the pattern observed in Panel A?",
    choices: [
      { text: "A barrier preventing gene flow between populations", hint: "isolation allows independent mutation accumulation" },
      { text: "A barrier affecting survival within populations", hint: "selection within populations is not shown" },
      { text: "A barrier preventing mutation", hint: "mutations still accumulate" },
      { text: "No barrier at all", hint: "shared variants would then increase" }
    ],
    answer: "A barrier preventing gene flow between populations",
    explanation:
      "Without gene flow, populations accumulate private genetic variants independently."
  },

  // 9) Synthesis: process identification
  {
    category: "Evolution: Synthesis",
    img: DRIFT_FLOW_IMG,
    imgAlt: DRIFT_FLOW_ALT,
    caption: DRIFT_FLOW_CAPTION,
    prompt:
      "Taken together, what evolutionary processes best explain the differences between Panels A and B?",
    choices: [
      { text: "Panel A: genetic drift with isolation; Panel B: drift with gene flow", hint: "both involve mutation, but connectivity differs" },
      { text: "Panel A: selection; Panel B: mutation only", hint: "selection patterns are not shown" },
      { text: "Panel A: gene flow; Panel B: isolation", hint: "this reverses the observed pattern" },
      { text: "Panel A: stabilizing selection; Panel B: disruptive selection", hint: "no fitness differences are shown" }
    ],
    answer: "Panel A: genetic drift with isolation; Panel B: drift with gene flow",
    explanation:
      "Both panels show mutation accumulation, but isolation in Panel A promotes divergence, while gene flow in Panel B maintains shared variation."
  },

  // 1) Pattern recognition
  {
    category: "Selection: Pattern",
    img: DIRECTIONAL_SEL_IMG,
    imgAlt: DIRECTIONAL_SEL_ALT,
    caption: DIRECTIONAL_SEL_CAPTION,
    prompt:
      "How does the distribution of male size change from Panel A to Panel D?",
    choices: [
      { text: "The distribution shifts toward larger sizes", hint: "the peak moves to the right over time" },
      { text: "The distribution becomes bimodal", hint: "there are not two distinct peaks" },
      { text: "The distribution narrows around the same mean", hint: "the mean is not stable" },
      { text: "The distribution shifts toward smaller sizes", hint: "the peak does not move left" }
    ],
    answer: "The distribution shifts toward larger sizes",
    explanation:
      "Across generations, the peak of the distribution moves toward larger male size, indicating a consistent directional change."
  },

  // 2) Identify selection type
  {
    category: "Selection: Type",
    img: DIRECTIONAL_SEL_IMG,
    imgAlt: DIRECTIONAL_SEL_ALT,
    caption: DIRECTIONAL_SEL_CAPTION,
    prompt:
      "Which type of natural selection is best illustrated by the change in male size from Panel A to Panel D?",
    choices: [
      { text: "Directional selection", hint: "one extreme phenotype is consistently favored" },
      { text: "Stabilizing selection", hint: "this would favor intermediate sizes" },
      { text: "Disruptive selection", hint: "this would favor both extremes" },
      { text: "Balancing selection", hint: "this would maintain multiple phenotypes" }
    ],
    answer: "Directional selection",
    explanation:
      "Directional selection occurs when individuals at one extreme of a trait distribution have higher fitness, causing the population mean to shift over time."
  },

  // 3) Fitness interpretation
  {
    category: "Selection: Fitness",
    img: DIRECTIONAL_SEL_IMG,
    imgAlt: DIRECTIONAL_SEL_ALT,
    caption: DIRECTIONAL_SEL_CAPTION,
    prompt:
      "Based on the change in the distributions, which individuals most likely had the highest reproductive success?",
    choices: [
      { text: "Larger males", hint: "their frequency increases over generations" },
      { text: "Intermediate-sized males", hint: "the mean does not remain stable" },
      { text: "Smaller males", hint: "their frequency declines over time" },
      { text: "All males equally", hint: "equal fitness would prevent a shift" }
    ],
    answer: "Larger males",
    explanation:
      "The increasing frequency of larger males suggests they had higher fitness and produced more offspring."
  },

  // 4) Genetic variation
  {
    category: "Selection: Variation",
    img: DIRECTIONAL_SEL_IMG,
    imgAlt: DIRECTIONAL_SEL_ALT,
    caption: DIRECTIONAL_SEL_CAPTION,
    prompt:
      "Which condition must be true for directional selection on male size to occur?",
    choices: [
      { text: "Male size must be heritable", hint: "selection only acts on heritable traits" },
      { text: "All males must start at the same size", hint: "variation is required" },
      { text: "Mutations must occur every generation", hint: "standing variation is sufficient" },
      { text: "Selection must favor intermediates", hint: "this describes stabilizing selection" }
    ],
    answer: "Male size must be heritable",
    explanation:
      "Natural selection changes trait distributions only when variation in the trait has a genetic basis."
  },

  // 5) Drift vs selection
  {
    category: "Evolutionary processes",
    img: DIRECTIONAL_SEL_IMG,
    imgAlt: DIRECTIONAL_SEL_ALT,
    caption: DIRECTIONAL_SEL_CAPTION,
    prompt:
      "Why is genetic drift alone unlikely to explain the consistent shift seen from Panel A to Panel D?",
    choices: [
      { text: "The change is consistently in one direction", hint: "drift is random" },
      { text: "The population size is large", hint: "size alone does not rule out drift" },
      { text: "Mutations are rare", hint: "mutation rate does not explain directionality" },
      { text: "Selection only affects survival", hint: "selection affects reproduction as well" }
    ],
    answer: "The change is consistently in one direction",
    explanation:
      "Genetic drift produces random fluctuations, whereas a consistent directional shift suggests selection."
  },

  // 6) Predict future generations
  {
    category: "Selection: Predictions",
    img: DIRECTIONAL_SEL_IMG,
    imgAlt: DIRECTIONAL_SEL_ALT,
    caption: DIRECTIONAL_SEL_CAPTION,
    prompt:
      "If the selective pressure favoring larger males continues, what pattern would you expect in future generations?",
    choices: [
      { text: "The distribution would continue shifting toward larger sizes", hint: "directional selection would persist" },
      { text: "The distribution would return to the original mean", hint: "this would require selection to reverse" },
      { text: "The distribution would become bimodal", hint: "this would suggest disruptive selection" },
      { text: "The distribution would stop changing immediately", hint: "selection does not halt without cause" }
    ],
    answer: "The distribution would continue shifting toward larger sizes",
    explanation:
      "As long as larger size confers higher fitness and variation exists, directional selection will continue to move the trait mean."
  },

  // 7) Constraint & trade-offs
  {
    category: "Selection: Constraints",
    img: DIRECTIONAL_SEL_IMG,
    imgAlt: DIRECTIONAL_SEL_ALT,
    caption: DIRECTIONAL_SEL_CAPTION,
    prompt:
      "Which factor could eventually limit the continued increase in male size?",
    choices: [
      { text: "Energetic or survival costs of large size", hint: "trade-offs can counter selection" },
      { text: "Lack of mutation every generation", hint: "standing variation can persist" },
      { text: "Genetic drift", hint: "drift does not impose consistent limits" },
      { text: "Random mating", hint: "random mating does not prevent selection" }
    ],
    answer: "Energetic or survival costs of large size",
    explanation:
      "Trade-offs such as increased energy demands or predation risk can oppose selection for ever-larger size."
  },

  // 8) Sexual vs natural selection
  {
    category: "Selection: Mechanism",
    img: DIRECTIONAL_SEL_IMG,
    imgAlt: DIRECTIONAL_SEL_ALT,
    caption: DIRECTIONAL_SEL_CAPTION,
    prompt:
      "If larger male size increases mating success but decreases survival, which form of selection is most directly favoring larger size?",
    choices: [
      { text: "Sexual selection", hint: "mating success drives the pattern" },
      { text: "Stabilizing selection", hint: "this favors intermediates" },
      { text: "Genetic drift", hint: "drift is random" },
      { text: "Artificial selection", hint: "no human involvement is shown" }
    ],
    answer: "Sexual selection",
    explanation:
      "Sexual selection favors traits that increase mating success, even if they reduce survival."
  },

  // 9) Link to speciation
  {
    category: "Selection & speciation",
    img: DIRECTIONAL_SEL_IMG,
    imgAlt: DIRECTIONAL_SEL_ALT,
    caption: DIRECTIONAL_SEL_CAPTION,
    prompt:
      "How could continued directional selection on male size contribute to speciation?",
    choices: [
      { text: "By leading to reproductive isolation through mate choice", hint: "divergent preferences can reduce gene flow" },
      { text: "By eliminating all variation", hint: "selection does not eliminate all variation" },
      { text: "By increasing gene flow between populations", hint: "selection typically reduces gene flow when divergent" },
      { text: "By preventing mutation", hint: "selection does not stop mutation" }
    ],
    answer: "By leading to reproductive isolation through mate choice",
    explanation:
      "If different populations experience different selection pressures on size, mate preferences may diverge, contributing to reproductive isolation."
  },

  // 1) Pattern recognition
  {
    category: "Habitat use: Pattern",
    img: HABITAT_IMG,
    imgAlt: HABITAT_ALT,
    caption: HABITAT_CAPTION,
    prompt:
      "Which panel shows the greatest difference in habitat use between Pop 1 and Pop 2?",
    choices: [
      { text: "Panel A", hint: "each population primarily uses a different habitat" },
      { text: "Panel B", hint: "habitat use differs, but overlap is substantial" },
      { text: "Panel C", hint: "habitat use is similar between populations" },
      { text: "Panel D", hint: "habitat use is nearly identical" }
    ],
    answer: "Panel A",
    explanation:
      "In Panel A, Pop 1 primarily uses Hab1 while Pop 2 primarily uses Hab2, showing strong habitat segregation."
  },

  // 2) Overlap vs segregation
  {
    category: "Habitat use: Overlap",
    img: HABITAT_IMG,
    imgAlt: HABITAT_ALT,
    caption: HABITAT_CAPTION,
    prompt:
      "Which panel shows the least habitat overlap between Pop 1 and Pop 2?",
    choices: [
      { text: "Panel A", hint: "habitat use is almost entirely non-overlapping" },
      { text: "Panel B", hint: "overlap is present but incomplete" },
      { text: "Panel C", hint: "most habitat use is shared" },
      { text: "Panel D", hint: "habitat use is nearly identical" }
    ],
    answer: "Panel A",
    explanation:
      "Panel A shows minimal shared habitat use, indicating strong segregation."
  },

  // 3) Gene flow inference
  {
    category: "Ecological isolation: Gene flow",
    img: HABITAT_IMG,
    imgAlt: HABITAT_ALT,
    caption: HABITAT_CAPTION,
    prompt:
      "In which panel would gene flow between Pop 1 and Pop 2 most likely be lowest?",
    choices: [
      { text: "Panel A", hint: "fewer shared habitats means fewer encounters" },
      { text: "Panel B", hint: "some overlap still allows mating" },
      { text: "Panel C", hint: "high overlap promotes gene flow" },
      { text: "Panel D", hint: "nearly identical habitat use promotes gene flow" }
    ],
    answer: "Panel A",
    explanation:
      "Reduced habitat overlap lowers encounter rates, decreasing gene flow."
  },

  // 4) Ecological isolation (barrier type)
  {
    category: "Reproductive isolation: Barriers",
    img: HABITAT_IMG,
    imgAlt: HABITAT_ALT,
    caption: HABITAT_CAPTION,
    prompt:
      "The reduced interaction between populations in Panel A is best described as which type of reproductive barrier?",
    choices: [
      { text: "Ecological (habitat) isolation", hint: "populations occupy different habitats" },
      { text: "Temporal isolation", hint: "this involves different mating times" },
      { text: "Mechanical isolation", hint: "this involves incompatible structures" },
      { text: "Postzygotic isolation", hint: "this occurs after fertilization" }
    ],
    answer: "Ecological (habitat) isolation",
    explanation:
      "Habitat-based isolation prevents encounters before mating occurs, making it a prezygotic barrier."
  },

  // 5) Speciation continuum
  {
    category: "Speciation: Continuum",
    img: HABITAT_IMG,
    imgAlt: HABITAT_ALT,
    caption: HABITAT_CAPTION,
    prompt:
      "Which panel most likely represents populations in the early stages of divergence rather than fully separate species?",
    choices: [
      { text: "Panel A", hint: "strong isolation suggests late-stage divergence" },
      { text: "Panel B", hint: "partial isolation suggests divergence in progress" },
      { text: "Panel C", hint: "high overlap suggests little divergence" },
      { text: "Panel D", hint: "nearly identical habitat use suggests a single population" }
    ],
    answer: "Panel B",
    explanation:
      "Partial habitat segregation suggests reduced but ongoing gene flow, consistent with early-stage divergence."
  },

  // 6) Selection vs drift
  {
    category: "Evolutionary processes",
    img: HABITAT_IMG,
    imgAlt: HABITAT_ALT,
    caption: HABITAT_CAPTION,
    prompt:
      "Which panel most strongly suggests divergent natural selection acting on habitat preference?",
    choices: [
      { text: "Panel A", hint: "strong habitat specialization suggests selection" },
      { text: "Panel B", hint: "overlap suggests weaker selective differences" },
      { text: "Panel C", hint: "shared habitat use limits divergence" },
      { text: "Panel D", hint: "identical habitat use suggests similar selection pressures" }
    ],
    answer: "Panel A",
    explanation:
      "Strong habitat specialization is consistent with divergent selection favoring different environments."
  },

  // 7) Independent drift & selection
  {
    category: "Evolutionary independence",
    img: HABITAT_IMG,
    imgAlt: HABITAT_ALT,
    caption: HABITAT_CAPTION,
    prompt:
      "In which panel would Pop 1 and Pop 2 be most likely to experience independent genetic drift and selection?",
    choices: [
      { text: "Panel A", hint: "limited interaction allows independent evolution" },
      { text: "Panel B", hint: "some gene flow still connects populations" },
      { text: "Panel C", hint: "high gene flow constrains divergence" },
      { text: "Panel D", hint: "gene flow is likely extensive" }
    ],
    answer: "Panel A",
    explanation:
      "Reduced gene flow allows drift and selection to act independently in each population."
  },

  // 8) Reinforcement
  {
    category: "Speciation: Reinforcement",
    img: HABITAT_IMG,
    imgAlt: HABITAT_ALT,
    caption: HABITAT_CAPTION,
    prompt:
      "If hybrids between Pop 1 and Pop 2 have reduced fitness, which change would be most consistent with reinforcement?",
    choices: [
      { text: "A shift from Panel B toward Panel A over time", hint: "selection would favor reduced overlap" },
      { text: "A shift from Panel A toward Panel D over time", hint: "this would increase hybridization" },
      { text: "No change in habitat use patterns", hint: "reinforcement predicts stronger isolation" },
      { text: "Increased use of the same habitat by both populations", hint: "this would increase gene flow" }
    ],
    answer: "A shift from Panel B toward Panel A over time",
    explanation:
      "Reinforcement strengthens prezygotic barriers when hybrids are costly."
  },

  // 9) Environmental change prediction
  {
    category: "Evolutionary predictions",
    img: HABITAT_IMG,
    imgAlt: HABITAT_ALT,
    caption: HABITAT_CAPTION,
    prompt:
      "Which panel would be most sensitive to environmental change that alters habitat availability?",
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

    // 1) Pattern recognition
  {
    category: "Habitat use: Pattern",
    img: HABITAT_IMG,
    imgAlt: HABITAT_ALT,
    caption: HABITAT_CAPTION,
    prompt:
      "Which panel shows the greatest difference in habitat use between Pop 1 and Pop 2?",
    choices: [
      { text: "Panel A", hint: "each population primarily uses a different habitat" },
      { text: "Panel B", hint: "habitat use differs, but overlap is substantial" },
      { text: "Panel C", hint: "habitat use is similar between populations" },
      { text: "Panel D", hint: "habitat use is nearly identical" }
    ],
    answer: "Panel A",
    explanation:
      "In Panel A, Pop 1 primarily uses Hab1 while Pop 2 primarily uses Hab2, showing strong habitat segregation."
  },

  // 2) Overlap vs segregation
  {
    category: "Habitat use: Overlap",
    img: HABITAT_IMG,
    imgAlt: HABITAT_ALT,
    caption: HABITAT_CAPTION,
    prompt:
      "Which panel shows the least habitat overlap between Pop 1 and Pop 2?",
    choices: [
      { text: "Panel A", hint: "habitat use is almost entirely non-overlapping" },
      { text: "Panel B", hint: "overlap is present but incomplete" },
      { text: "Panel C", hint: "most habitat use is shared" },
      { text: "Panel D", hint: "habitat use is nearly identical" }
    ],
    answer: "Panel A",
    explanation:
      "Panel A shows minimal shared habitat use, indicating strong segregation."
  },

  // 3) Gene flow inference
  {
    category: "Ecological isolation: Gene flow",
    img: HABITAT_IMG,
    imgAlt: HABITAT_ALT,
    caption: HABITAT_CAPTION,
    prompt:
      "In which panel would gene flow between Pop 1 and Pop 2 most likely be lowest?",
    choices: [
      { text: "Panel A", hint: "fewer shared habitats means fewer encounters" },
      { text: "Panel B", hint: "some overlap still allows mating" },
      { text: "Panel C", hint: "high overlap promotes gene flow" },
      { text: "Panel D", hint: "nearly identical habitat use promotes gene flow" }
    ],
    answer: "Panel A",
    explanation:
      "Reduced habitat overlap lowers encounter rates, decreasing gene flow."
  },

  // 4) Ecological isolation (barrier type)
  {
    category: "Reproductive isolation: Barriers",
    img: HABITAT_IMG,
    imgAlt: HABITAT_ALT,
    caption: HABITAT_CAPTION,
    prompt:
      "The reduced interaction between populations in Panel A is best described as which type of reproductive barrier?",
    choices: [
      { text: "Ecological (habitat) isolation", hint: "populations occupy different habitats" },
      { text: "Temporal isolation", hint: "this involves different mating times" },
      { text: "Mechanical isolation", hint: "this involves incompatible structures" },
      { text: "Postzygotic isolation", hint: "this occurs after fertilization" }
    ],
    answer: "Ecological (habitat) isolation",
    explanation:
      "Habitat-based isolation prevents encounters before mating occurs, making it a prezygotic barrier."
  },

  // 5) Speciation continuum
  {
    category: "Speciation: Continuum",
    img: HABITAT_IMG,
    imgAlt: HABITAT_ALT,
    caption: HABITAT_CAPTION,
    prompt:
      "Which panel most likely represents populations in the early stages of divergence rather than fully separate species?",
    choices: [
      { text: "Panel A", hint: "strong isolation suggests late-stage divergence" },
      { text: "Panel B", hint: "partial isolation suggests divergence in progress" },
      { text: "Panel C", hint: "high overlap suggests little divergence" },
      { text: "Panel D", hint: "nearly identical habitat use suggests a single population" }
    ],
    answer: "Panel B",
    explanation:
      "Partial habitat segregation suggests reduced but ongoing gene flow, consistent with early-stage divergence."
  },

  // 6) Selection vs drift
  {
    category: "Evolutionary processes",
    img: HABITAT_IMG,
    imgAlt: HABITAT_ALT,
    caption: HABITAT_CAPTION,
    prompt:
      "Which panel most strongly suggests divergent natural selection acting on habitat preference?",
    choices: [
      { text: "Panel A", hint: "strong habitat specialization suggests selection" },
      { text: "Panel B", hint: "overlap suggests weaker selective differences" },
      { text: "Panel C", hint: "shared habitat use limits divergence" },
      { text: "Panel D", hint: "identical habitat use suggests similar selection pressures" }
    ],
    answer: "Panel A",
    explanation:
      "Strong habitat specialization is consistent with divergent selection favoring different environments."
  },

  // 7) Independent drift & selection
  {
    category: "Evolutionary independence",
    img: HABITAT_IMG,
    imgAlt: HABITAT_ALT,
    caption: HABITAT_CAPTION,
    prompt:
      "In which panel would Pop 1 and Pop 2 be most likely to experience independent genetic drift and selection?",
    choices: [
      { text: "Panel A", hint: "limited interaction allows independent evolution" },
      { text: "Panel B", hint: "some gene flow still connects populations" },
      { text: "Panel C", hint: "high gene flow constrains divergence" },
      { text: "Panel D", hint: "gene flow is likely extensive" }
    ],
    answer: "Panel A",
    explanation:
      "Reduced gene flow allows drift and selection to act independently in each population."
  },

  // 8) Reinforcement
  {
    category: "Speciation: Reinforcement",
    img: HABITAT_IMG,
    imgAlt: HABITAT_ALT,
    caption: HABITAT_CAPTION,
    prompt:
      "If hybrids between Pop 1 and Pop 2 have reduced fitness, which change would be most consistent with reinforcement?",
    choices: [
      { text: "A shift from Panel B toward Panel A over time", hint: "selection would favor reduced overlap" },
      { text: "A shift from Panel A toward Panel D over time", hint: "this would increase hybridization" },
      { text: "No change in habitat use patterns", hint: "reinforcement predicts stronger isolation" },
      { text: "Increased use of the same habitat by both populations", hint: "this would increase gene flow" }
    ],
    answer: "A shift from Panel B toward Panel A over time",
    explanation:
      "Reinforcement strengthens prezygotic barriers when hybrids are costly."
  },

  // 9) Environmental change prediction
  {
    category: "Evolutionary predictions",
    img: HABITAT_IMG,
    imgAlt: HABITAT_ALT,
    caption: HABITAT_CAPTION,
    prompt:
      "Which panel would be most sensitive to environmental change that alters habitat availability?",
    choices: [
      { text: "Panel B", hint: "partial specialization makes shifts impactful" },
      { text: "Panel A", hint: "strong specialization may buffer small changes" },
      { text: "Panel D", hint: "generalist use reduces sensitivity" },
      { text: "Panel C", hint: "high overlap reduces differential effects" }
    ],
    answer: "Panel B",
    explanation:
      "Partially segregated populations may shift toward greater overlap or stronger isolation depending on environmental change."
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

  // NOTE:
  // You mentioned phylo-tree5 is polyphyletic, but there are no questions in THIS snippet that reference "./images/phylo-tree5.png".
  // If you paste the phylo-tree5 question block(s), I’ll edit them the same way.
};
