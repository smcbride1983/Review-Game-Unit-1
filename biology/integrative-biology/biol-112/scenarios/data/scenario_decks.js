/* scenario_decks.js
   Future-proof scenario deck file (does not overwrite other decks).

   Put this in:
   biology/integrative-biology/biol-112/scenarios/data/scenario_decks_evolution.js

   Load it from scenarios/index.html with:
   <script src="./data/scenario_decks_evolution.js"></script>
*/

(function () {
  window.SCENARIO_DECKS = window.SCENARIO_DECKS || {};
  window.SCENARIO_DECKS_META = window.SCENARIO_DECKS_META || {};

  const DECK_KEY = "BIOL112_EVOLUTION";

  window.SCENARIO_DECKS_META[DECK_KEY] = {
    course: "BIOL 112",
    topic: "Evolution",
    title: "BIOL 112 — Evolution Scenarios",
    version: "1.0.0",
    created: "2026-02-07"
  };

  window.SCENARIO_DECKS[DECK_KEY] = [
    /* =========================
       PREZYGOTIC BARRIERS (10)
       ========================= */
    {
      category: "Prezygotic",
      prompt: "Two frog species live in the same pond and breed at the same time, but females only respond to species-specific mating calls.",
      choices: ["Behavioral isolation","Temporal isolation","Mechanical isolation","Habitat isolation"],
      answer: "Behavioral isolation"
    },
    {
      category: "Prezygotic",
      prompt: "Two bird species perform different courtship dances, and mating does not occur between them.",
      choices: ["Behavioral isolation","Temporal isolation","Mechanical isolation","Habitat isolation"],
      answer: "Behavioral isolation"
    },
    {
      category: "Prezygotic",
      prompt: "Two plant species flower at different times of the year and never cross-pollinate.",
      choices: ["Temporal isolation","Behavioral isolation","Mechanical isolation","Habitat isolation"],
      answer: "Temporal isolation"
    },
    {
      category: "Prezygotic",
      prompt: "Two insect species are active in the same habitat, but one breeds during the day and the other at night.",
      choices: ["Temporal isolation","Behavioral isolation","Mechanical isolation","Habitat isolation"],
      answer: "Temporal isolation"
    },
    {
      category: "Prezygotic",
      prompt: "Two snail species cannot mate because their reproductive organs are incompatible.",
      choices: ["Mechanical isolation","Behavioral isolation","Temporal isolation","Habitat isolation"],
      answer: "Mechanical isolation"
    },
    {
      category: "Prezygotic",
      prompt: "Two species of flowers have shapes that prevent pollinators from transferring pollen between them.",
      choices: ["Mechanical isolation","Behavioral isolation","Temporal isolation","Habitat isolation"],
      answer: "Mechanical isolation"
    },
    {
      category: "Prezygotic",
      prompt: "Two species live in the same region, but one inhabits trees while the other lives on the ground.",
      choices: ["Habitat isolation","Behavioral isolation","Temporal isolation","Mechanical isolation"],
      answer: "Habitat isolation"
    },
    {
      category: "Prezygotic",
      prompt: "Two fish species occupy different depths in the same lake and rarely encounter each other.",
      choices: ["Habitat isolation","Behavioral isolation","Temporal isolation","Mechanical isolation"],
      answer: "Habitat isolation"
    },
    {
      category: "Prezygotic",
      prompt: "Two frog species use different mating calls even though they breed at the same time and place.",
      choices: ["Behavioral isolation","Temporal isolation","Mechanical isolation","Habitat isolation"],
      answer: "Behavioral isolation"
    },
    {
      category: "Prezygotic",
      prompt: "Two mammals have incompatible reproductive anatomy that prevents copulation.",
      choices: ["Mechanical isolation","Behavioral isolation","Temporal isolation","Habitat isolation"],
      answer: "Mechanical isolation"
    },

    /* =========================
       POSTZYGOTIC BARRIERS (10)
       ========================= */
    {
      category: "Postzygotic",
      prompt: "A hybrid embryo fails to develop properly and dies early in development.",
      choices: ["Hybrid inviability","Hybrid sterility","Hybrid breakdown","Behavioral isolation"],
      answer: "Hybrid inviability"
    },
    {
      category: "Postzygotic",
      prompt: "A mule is healthy but cannot reproduce.",
      choices: ["Hybrid sterility","Hybrid inviability","Hybrid breakdown","Temporal isolation"],
      answer: "Hybrid sterility"
    },
    {
      category: "Postzygotic",
      prompt: "First-generation hybrids are healthy, but their offspring have reduced fitness.",
      choices: ["Hybrid breakdown","Hybrid inviability","Hybrid sterility","Mechanical isolation"],
      answer: "Hybrid breakdown"
    },
    {
      category: "Postzygotic",
      prompt: "Fertilization occurs, but the hybrid does not survive to adulthood.",
      choices: ["Hybrid inviability","Hybrid sterility","Hybrid breakdown","Habitat isolation"],
      answer: "Hybrid inviability"
    },
    {
      category: "Postzygotic",
      prompt: "A hybrid organism grows normally but produces no viable gametes.",
      choices: ["Hybrid sterility","Hybrid inviability","Hybrid breakdown","Behavioral isolation"],
      answer: "Hybrid sterility"
    },
    {
      category: "Postzygotic",
      prompt: "Hybrid offspring survive but have low survival in later generations.",
      choices: ["Hybrid breakdown","Hybrid inviability","Hybrid sterility","Temporal isolation"],
      answer: "Hybrid breakdown"
    },
    {
      category: "Postzygotic",
      prompt: "Zygotes form but fail during early development.",
      choices: ["Hybrid inviability","Hybrid sterility","Hybrid breakdown","Mechanical isolation"],
      answer: "Hybrid inviability"
    },
    {
      category: "Postzygotic",
      prompt: "A hybrid plant grows well but cannot produce seeds.",
      choices: ["Hybrid sterility","Hybrid inviability","Hybrid breakdown","Habitat isolation"],
      answer: "Hybrid sterility"
    },
    {
      category: "Postzygotic",
      prompt: "Later-generation hybrids show reduced fertility and survival.",
      choices: ["Hybrid breakdown","Hybrid inviability","Hybrid sterility","Behavioral isolation"],
      answer: "Hybrid breakdown"
    },
    {
      category: "Postzygotic",
      prompt: "Fertilization occurs, but offspring are weak and die young.",
      choices: ["Hybrid inviability","Hybrid sterility","Hybrid breakdown","Temporal isolation"],
      answer: "Hybrid inviability"
    },

    /* =========================
       GENETIC DRIFT (10)
       ========================= */
    {
      category: "Genetic drift",
      prompt: "A storm randomly kills most individuals in a small population, changing allele frequencies.",
      choices: ["Genetic drift","Natural selection","Gene flow","Mutation"],
      answer: "Genetic drift"
    },
    {
      category: "Genetic drift",
      prompt: "A few individuals colonize a new island, carrying only a subset of the original population’s alleles.",
      choices: ["Genetic drift","Natural selection","Gene flow","Mutation"],
      answer: "Genetic drift"
    },
    {
      category: "Genetic drift",
      prompt: "Allele frequencies change by chance in a very small population.",
      choices: ["Genetic drift","Natural selection","Gene flow","Mutation"],
      answer: "Genetic drift"
    },
    {
      category: "Genetic drift",
      prompt: "A random event drastically reduces population size, altering genetic diversity.",
      choices: ["Genetic drift","Natural selection","Gene flow","Mutation"],
      answer: "Genetic drift"
    },
    {
      category: "Genetic drift",
      prompt: "Survivors of a disaster happen to share similar alleles by chance.",
      choices: ["Genetic drift","Natural selection","Gene flow","Mutation"],
      answer: "Genetic drift"
    },
    {
      category: "Genetic drift",
      prompt: "Allele frequencies fluctuate randomly from one generation to the next.",
      choices: ["Genetic drift","Natural selection","Gene flow","Mutation"],
      answer: "Genetic drift"
    },
    {
      category: "Genetic drift",
      prompt: "A population becomes genetically uniform due to chance events.",
      choices: ["Genetic drift","Natural selection","Gene flow","Mutation"],
      answer: "Genetic drift"
    },
    {
      category: "Genetic drift",
      prompt: "A bottleneck event leads to reduced genetic variation.",
      choices: ["Genetic drift","Natural selection","Gene flow","Mutation"],
      answer: "Genetic drift"
    },
    {
      category: "Genetic drift",
      prompt: "Random sampling of alleles causes fixation unrelated to fitness.",
      choices: ["Genetic drift","Natural selection","Gene flow","Mutation"],
      answer: "Genetic drift"
    },
    {
      category: "Genetic drift",
      prompt: "A population’s gene pool changes due to chance alone.",
      choices: ["Genetic drift","Natural selection","Gene flow","Mutation"],
      answer: "Genetic drift"
    },

    /* =========================
       NATURAL SELECTION (10)
       ========================= */
    {
      category: "Natural selection",
      prompt: "Individuals with thicker fur survive better in cold climates and leave more offspring.",
      choices: ["Natural selection","Genetic drift","Gene flow","Mutation"],
      answer: "Natural selection"
    },
    {
      category: "Natural selection",
      prompt: "A heritable trait increases survival and becomes more common over generations.",
      choices: ["Natural selection","Genetic drift","Gene flow","Mutation"],
      answer: "Natural selection"
    },
    {
      category: "Natural selection",
      prompt: "Predators preferentially eat slower individuals, increasing average speed in the population.",
      choices: ["Natural selection","Genetic drift","Gene flow","Mutation"],
      answer: "Natural selection"
    },
    {
      category: "Natural selection",
      prompt: "Camouflaged individuals survive better and reproduce more.",
      choices: ["Natural selection","Genetic drift","Gene flow","Mutation"],
      answer: "Natural selection"
    },
    {
      category: "Natural selection",
      prompt: "A trait increases fitness in a specific environment.",
      choices: ["Natural selection","Genetic drift","Gene flow","Mutation"],
      answer: "Natural selection"
    },
    {
      category: "Natural selection",
      prompt: "Individuals with antibiotic resistance survive treatment and reproduce.",
      choices: ["Natural selection","Genetic drift","Gene flow","Mutation"],
      answer: "Natural selection"
    },
    {
      category: "Natural selection",
      prompt: "Beak size evolves in response to available food sources.",
      choices: ["Natural selection","Genetic drift","Gene flow","Mutation"],
      answer: "Natural selection"
    },
    {
      category: "Natural selection",
      prompt: "Traits linked to higher reproductive success increase in frequency.",
      choices: ["Natural selection","Genetic drift","Gene flow","Mutation"],
      answer: "Natural selection"
    },
    {
      category: "Natural selection",
      prompt: "Environmental pressures favor certain phenotypes.",
      choices: ["Natural selection","Genetic drift","Gene flow","Mutation"],
      answer: "Natural selection"
    },
    {
      category: "Natural selection",
      prompt: "Differential survival leads to evolutionary change.",
      choices: ["Natural selection","Genetic drift","Gene flow","Mutation"],
      answer: "Natural selection"
    },

    /* =========================
       GENE FLOW (10)
       ========================= */
    {
      category: "Gene flow",
      prompt: "Individuals migrate between populations, introducing new alleles.",
      choices: ["Gene flow","Genetic drift","Natural selection","Mutation"],
      answer: "Gene flow"
    },
    {
      category: "Gene flow",
      prompt: "Pollen from one population fertilizes plants in another.",
      choices: ["Gene flow","Genetic drift","Natural selection","Mutation"],
      answer: "Gene flow"
    },
    {
      category: "Gene flow",
      prompt: "Alleles move between populations via dispersal.",
      choices: ["Gene flow","Genetic drift","Natural selection","Mutation"],
      answer: "Gene flow"
    },
    {
      category: "Gene flow",
      prompt: "Migration reduces genetic differences between populations.",
      choices: ["Gene flow","Genetic drift","Natural selection","Mutation"],
      answer: "Gene flow"
    },
    {
      category: "Gene flow",
      prompt: "Gametes move between populations during reproduction.",
      choices: ["Gene flow","Genetic drift","Natural selection","Mutation"],
      answer: "Gene flow"
    },
    {
      category: "Gene flow",
      prompt: "Movement of individuals alters allele frequencies.",
      choices: ["Gene flow","Genetic drift","Natural selection","Mutation"],
      answer: "Gene flow"
    },
    {
      category: "Gene flow",
      prompt: "Populations become genetically similar due to migration.",
      choices: ["Gene flow","Genetic drift","Natural selection","Mutation"],
      answer: "Gene flow"
    },
    {
      category: "Gene flow",
      prompt: "Seeds disperse between isolated plant populations.",
      choices: ["Gene flow","Genetic drift","Natural selection","Mutation"],
      answer: "Gene flow"
    },
    {
      category: "Gene flow",
      prompt: "Individuals move between populations and reproduce.",
      choices: ["Gene flow","Genetic drift","Natural selection","Mutation"],
      answer: "Gene flow"
    },
    {
      category: "Gene flow",
      prompt: "Allele frequencies change due to immigration.",
      choices: ["Gene flow","Genetic drift","Natural selection","Mutation"],
      answer: "Gene flow"
    },

    /* =========================
       MODES OF SPECIATION (10)
       ========================= */
    {
      category: "Speciation mode",
      prompt: "A population is split by a mountain range and evolves independently.",
      choices: ["Allopatric","Peripatric","Parapatric","Sympatric"],
      answer: "Allopatric"
    },
    {
      category: "Speciation mode",
      prompt: "A small group colonizes an island and diverges from the main population.",
      choices: ["Peripatric","Allopatric","Parapatric","Sympatric"],
      answer: "Peripatric"
    },
    {
      category: "Speciation mode",
      prompt: "Adjacent populations experience different selective pressures with limited gene flow.",
      choices: ["Parapatric","Allopatric","Peripatric","Sympatric"],
      answer: "Parapatric"
    },
    {
      category: "Speciation mode",
      prompt: "A new species forms within the same geographic area as its ancestor.",
      choices: ["Sympatric","Allopatric","Peripatric","Parapatric"],
      answer: "Sympatric"
    },
    {
      category: "Speciation mode",
      prompt: "Polyploidy leads to instant reproductive isolation in plants.",
      choices: ["Sympatric","Allopatric","Peripatric","Parapatric"],
      answer: "Sympatric"
    },
    {
      category: "Speciation mode",
      prompt: "A river separates populations leading to divergence.",
      choices: ["Allopatric","Peripatric","Parapatric","Sympatric"],
      answer: "Allopatric"
    },
    {
      category: "Speciation mode",
      prompt: "A small peripheral population becomes isolated and diverges.",
      choices: ["Peripatric","Allopatric","Parapatric","Sympatric"],
      answer: "Peripatric"
    },
    {
      category: "Speciation mode",
      prompt: "Divergence occurs across a continuous range with limited gene flow.",
      choices: ["Parapatric","Allopatric","Peripatric","Sympatric"],
      answer: "Parapatric"
    },
    {
      category: "Speciation mode",
      prompt: "Reproductive isolation evolves without physical separation.",
      choices: ["Sympatric","Allopatric","Peripatric","Parapatric"],
      answer: "Sympatric"
    },
    {
      category: "Speciation mode",
      prompt: "Geographic isolation is the primary driver of divergence.",
      choices: ["Allopatric","Peripatric","Parapatric","Sympatric"],
      answer: "Allopatric"
    },

    /* =========================
       PHYLOGENETIC PATTERNS (10)
       ========================= */
    {
      category: "Phylogenetics",
      prompt: "A group includes a common ancestor and all of its descendants.",
      choices: ["Monophyletic","Paraphyletic","Polyphyletic","Analogous"],
      answer: "Monophyletic"
    },
    {
      category: "Phylogenetics",
      prompt: "A group includes an ancestor but not all descendants.",
      choices: ["Paraphyletic","Monophyletic","Polyphyletic","Analogous"],
      answer: "Paraphyletic"
    },
    {
      category: "Phylogenetics",
      prompt: "A group is formed based on similar traits without a recent common ancestor.",
      choices: ["Polyphyletic","Monophyletic","Paraphyletic","Homologous"],
      answer: "Polyphyletic"
    },
    {
      category: "Phylogenetics",
      prompt: "Birds and reptiles grouped together with their common ancestor.",
      choices: ["Monophyletic","Paraphyletic","Polyphyletic","Analogous"],
      answer: "Monophyletic"
    },
    {
      category: "Phylogenetics",
      prompt: "Reptiles excluding birds form a group.",
      choices: ["Paraphyletic","Monophyletic","Polyphyletic","Analogous"],
      answer: "Paraphyletic"
    },
    {
      category: "Phylogenetics",
      prompt: "Flying animals grouped together regardless of ancestry.",
      choices: ["Polyphyletic","Monophyletic","Paraphyletic","Homologous"],
      answer: "Polyphyletic"
    },
    {
      category: "Phylogenetics",
      prompt: "A clade contains an ancestor and all descendants.",
      choices: ["Monophyletic","Paraphyletic","Polyphyletic","Analogous"],
      answer: "Monophyletic"
    },
    {
      category: "Phylogenetics",
      prompt: "Warm-blooded animals grouped together despite different lineages.",
      choices: ["Polyphyletic","Monophyletic","Paraphyletic","Homologous"],
      answer: "Polyphyletic"
    },
    {
      category: "Phylogenetics",
      prompt: "Fish excluding tetrapods are grouped together.",
      choices: ["Paraphyletic","Monophyletic","Polyphyletic","Analogous"],
      answer: "Paraphyletic"
    },
    {
      category: "Phylogenetics",
      prompt: "A group defined by shared ancestry and derived traits.",
      choices: ["Monophyletic","Paraphyletic","Polyphyletic","Analogous"],
      answer: "Monophyletic"
    }
  ];
})();

       (function () {
  window.SCENARIO_DECKS = window.SCENARIO_DECKS || {};
  window.SCENARIO_DECKS_META = window.SCENARIO_DECKS_META || {};

  const DECK_KEY = "BIOL112_CELL_DIVISION";

  window.SCENARIO_DECKS_META[DECK_KEY] = {
    course: "BIOL 112",
    topic: "Cell Division",
    title: "BIOL 112 — Cell Division Scenarios",
    version: "1.1.0",
    created: "2026-02-10"
  };

  window.SCENARIO_DECKS[DECK_KEY] = [

    /* =========================
       CELL CYCLE (5)
       ========================= */
    {
      category: "Cell Division",
      prompt: "A newly divided cell is much smaller than the original parent cell and contains only one copy of its genome. What must happen before it can divide again?",
      choices: [
        "Chromosomes must condense immediately",
        "The cell must grow and replicate its DNA",
        "Sister chromatids must separate",
        "The nuclear membrane must break down"
      ],
      answer: "The cell must grow and replicate its DNA"
    },
    {
      category: "Cell Division",
      prompt: "Why does a cell spend most of its life outside of mitosis?",
      choices: [
        "Chromosomes cannot condense for long periods",
        "Growth and DNA replication take substantial time",
        "Cells only divide when mutations occur",
        "Mitosis is energetically impossible most of the time"
      ],
      answer: "Growth and DNA replication take substantial time"
    },
    {
      category: "Cell Division",
      prompt: "DNA exists as loosely packed chromatin during most of the cell cycle. What problem does this arrangement help solve?",
      choices: [
        "Preventing chromosome loss",
        "Allowing access for replication and transcription",
        "Ensuring equal chromosome separation",
        "Reducing mutation rates"
      ],
      answer: "Allowing access for replication and transcription"
    },
    {
      category: "Cell Division",
      prompt: "A cell has completed DNA replication but has not yet begun dividing. Which challenge now becomes most important?",
      choices: [
        "Copying the genome accurately",
        "Moving and separating DNA without damage",
        "Increasing cell surface area",
        "Generating genetic diversity"
      ],
      answer: "Moving and separating DNA without damage"
    },
    {
      category: "Cell Division",
      prompt: "Why does cell division help solve problems associated with increasing cell size?",
      choices: [
        "It increases mutation rates",
        "It improves surface area–to–volume ratio",
        "It creates genetic diversity",
        "It slows metabolism"
      ],
      answer: "It improves surface area–to–volume ratio"
    },

    /* =========================
       MITOSIS (5)
       ========================= */
    {
      category: "Cell Division",
      prompt: "A somatic cell divides to replace damaged tissue. What outcome is most critical for this division?",
      choices: [
        "Each daughter cell is genetically unique",
        "Chromosome number is reduced by half",
        "Each daughter cell is genetically identical to the parent",
        "Homologous chromosomes exchange DNA"
      ],
      answer: "Each daughter cell is genetically identical to the parent"
    },
    {
      category: "Cell Division",
      prompt: "Why must DNA be fully replicated before mitosis begins?",
      choices: [
        "To increase genetic diversity",
        "So each daughter cell receives a complete genome",
        "To allow chromosomes to condense",
        "To reduce chromosome number"
      ],
      answer: "So each daughter cell receives a complete genome"
    },
    {
      category: "Cell Division",
      prompt: "During mitosis, chromosomes line up at the center of the cell before separating. What problem does this alignment help prevent?",
      choices: [
        "Incomplete DNA replication",
        "Unequal distribution of chromosomes",
        "Loss of genetic variation",
        "Failure of cytokinesis"
      ],
      answer: "Unequal distribution of chromosomes"
    },
    {
      category: "Cell Division",
      prompt: "A cell fails to properly attach all chromosomes to the spindle before separation begins. What is the most likely consequence?",
      choices: [
        "Identical daughter cells",
        "Unequal chromosome numbers in daughter cells",
        "Increased genetic diversity",
        "Failure of DNA replication"
      ],
      answer: "Unequal chromosome numbers in daughter cells"
    },
    {
      category: "Cell Division",
      prompt: "Which statement best explains why mitosis alone cannot produce gametes?",
      choices: [
        "Mitosis does not involve DNA replication",
        "Mitosis produces genetically identical cells",
        "Mitosis reduces chromosome number",
        "Mitosis includes crossing over"
      ],
      answer: "Mitosis produces genetically identical cells"
    },

    /* =========================
       MEIOSIS (5)
       ========================= */
    {
      category: "Cell Division",
      prompt: "Why would producing gametes that are exact genetic copies be problematic for sexual reproduction?",
      choices: [
        "It would prevent fertilization",
        "It would eliminate genetic variation",
        "It would double chromosome number",
        "It would stop DNA replication"
      ],
      answer: "It would eliminate genetic variation"
    },
     
    {
      category: "Cell Division",
      prompt: "During meiosis, homologous chromosomes pair and exchange segments of DNA. What is the primary result of this process?",
      choices: [
        "Reduced chromosome number",
        "Genetically identical gametes",
        "New combinations of alleles",
        "Faster cell division"
      ],
      answer: "New combinations of alleles"
    },
     
    {
      category: "Cell Division",
      prompt: "Independent assortment during meiosis explains why:",
      choices: [
        "All gametes from an individual are identical",
        "Chromosome number is reduced",
        "Gametes contain different combinations of chromosomes",
        "DNA replication occurs only once"
      ],
      answer: "Gametes contain different combinations of chromosomes"
    },
     
    {
      category: "Cell Division",
      prompt: "What is the key goal of meiosis I that distinguishes it from meiosis II?",
      choices: [
        "Separating sister chromatids",
        "Reducing chromosome number",
        "Creating identical daughter cells",
        "Completing DNA replication"
      ],
      answer: "Reducing chromosome number"
    },
    {
      category: "Cell Division",
      prompt: "After meiosis is complete, how do the resulting cells differ from the original parent cell?",
      choices: [
        "They are diploid and genetically identical",
        "They are haploid and genetically variable",
        "They are larger and contain more DNA",
        "They are somatic cells"
      ],
      answer: "They are haploid and genetically variable"
    },
     {
  category: "Cell Division",
  prompt: "If meiosis included DNA replication but only one cell division, what would be the most likely outcome after fertilization?",
  choices: [
    "Normal diploid offspring",
    "Genetically identical offspring",
    "Progressive doubling of chromosome number each generation",
    "Loss of genetic variation"
  ],
  answer: "Progressive doubling of chromosome number each generation"
},

     {
  category: "Cell Division",
  prompt: "Two gametes from the same individual contain different combinations of maternal and paternal chromosomes, even when no crossing over occurs. Which meiotic process best explains this difference?",
  choices: [
    "Crossing over",
    "Independent assortment",
    "DNA replication",
    "Cytokinesis"
  ],
  answer: "Independent assortment"
},
     {
  category: "Cell Division",
  prompt: "Why is chromosome condensation a critical event during prophase?",
  choices: [
    "It allows DNA to be replicated",
    "It prevents chromosomes from becoming entangled during movement",
    "It increases genetic variation",
    "It reduces chromosome number"
  ],
  answer: "It prevents chromosomes from becoming entangled during movement"
},
     {
  category: "Cell Division",
  prompt: "What is the primary purpose of aligning chromosomes at the metaphase plate?",
  choices: [
    "To initiate cytokinesis",
    "To ensure equal chromosome distribution to daughter cells",
    "To allow crossing over to occur",
    "To complete DNA replication"
  ],
  answer: "To ensure equal chromosome distribution to daughter cells"
},

        {
  category: "Cell Division",
  prompt: "During anaphase, sister chromatids separate and move toward opposite poles. What problem is this step directly solving?",
  choices: [
    "Preventing DNA replication errors",
    "Ensuring each daughter cell receives one copy of each chromosome",
    "Increasing genetic diversity",
    "Reforming the nuclear membrane"
  ],
  answer: "Ensuring each daughter cell receives one copy of each chromosome"
},

{
  category: "Cell Division",
  prompt: "Why is re-formation of the nuclear envelope during telophase an important step in cell division?",
  choices: [
    "It allows chromosomes to condense",
    "It separates the cytoplasm",
    "It establishes two distinct nuclei before the cell fully divides",
    "It initiates spindle attachment"
  ],
  answer: "It establishes two distinct nuclei before the cell fully divides"
},


{
  category: "Cell Division",
  prompt: "Which sequence of goals best matches the order of mitotic phases?",
  choices: [
    "DNA replication → chromosome separation → alignment → nuclear reformation",
    "Condense and prepare → align and check → separate → reorganize into two cells",
    "Align → replicate → separate → divide",
    "Separate → condense → align → reform nuclei"
  ],
  answer: "Condense and prepare → align and check → separate → reorganize into two cells"
}



          

  ];
})();

