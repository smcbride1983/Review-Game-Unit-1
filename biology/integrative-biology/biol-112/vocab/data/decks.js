/* decks.js
   Shared decks for all games.

   Format:
   DECKS = {
     DECK_NAME: [{ id, de, en, tag }, ...]
   }
*/

window.DECKS = {
  BIOL112_EVOLUTION: [

    // -------------------------
    // GENERAL
    // -------------------------
    { id: "EVO_Terms_001", de: "Evolution", en: "Change in heritable traits of populations over generations.", tag: "General" },
    { id: "EVO_Terms_002", de: "Descent with modification", en: "Inheritance of traits from ancestors with changes over time.", tag: "General" },
    { id: "EVO_Terms_003", de: "Population vs individual", en: "Individuals do not evolve; populations do.", tag: "General" },
    { id: "EVO_Terms_004", de: "Heritable trait", en: "A trait that can be passed from parents to offspring.", tag: "General" },
    { id: "EVO_Terms_005", de: "Acquired trait", en: "A trait gained during life that is not inherited.", tag: "General" },
    { id: "EVO_Terms_006", de: "Allele", en: "Different versions of the same gene.", tag: "General" },
    { id: "EVO_Terms_007", de: "Variation", en: "Differences in traits among individuals in a population.", tag: "General" },
    { id: "EVO_Terms_008", de: "Artificial selection", en: "Human-directed breeding for specific traits.", tag: "General" },
    { id: "EVO_Terms_009", de: "Transitional fossil", en: "A fossil showing traits intermediate between groups.", tag: "General" },
    { id: "EVO_Terms_010", de: "Tree of life", en: "A representation of evolutionary relationships among all organisms.", tag: "General" },

    // -------------------------
    // MICROEVOLUTION
    // -------------------------
    { id: "EVO_Terms_011", de: "Natural selection", en: "Differential survival and reproduction based on heritable traits.", tag: "Microevolution" },
    { id: "EVO_Terms_012", de: "Fitness", en: "An organism’s ability to survive and reproduce.", tag: "Microevolution" },
    { id: "EVO_Terms_013", de: "Reproductive success", en: "Number of viable offspring produced.", tag: "Microevolution" },
    { id: "EVO_Terms_014", de: "Differential reproduction", en: "Individuals with certain traits reproduce more than others.", tag: "Microevolution" },
    { id: "EVO_Terms_015", de: "Directional selection", en: "Selection favoring one extreme trait value.", tag: "Microevolution" },
    { id: "EVO_Terms_016", de: "Stabilizing selection", en: "Selection favoring intermediate trait values.", tag: "Microevolution" },
    { id: "EVO_Terms_017", de: "Disruptive selection", en: "Selection favoring extreme trait values over intermediates.", tag: "Microevolution" },
    { id: "EVO_Terms_018", de: "Gene flow", en: "Movement of alleles between populations.", tag: "Microevolution" },
    { id: "EVO_Terms_019", de: "Genetic drift", en: "Random changes in allele frequencies, strongest in small populations.", tag: "Microevolution" },
    { id: "EVO_Terms_020", de: "Allele frequency", en: "Proportion of a specific allele in a population.", tag: "Microevolution" },
    { id: "EVO_Terms_021", de: "Bottleneck effect", en: "Loss of genetic diversity due to a sharp population reduction.", tag: "Microevolution" },
    { id: "EVO_Terms_022", de: "Founder effect", en: "Genetic drift occurring when a small group starts a new population.", tag: "Microevolution" },
    { id: "EVO_Terms_023", de: "Migration", en: "Movement of individuals between populations.", tag: "Microevolution" },
    { id: "EVO_Terms_024", de: "Gamete dispersal", en: "Movement of reproductive cells between populations.", tag: "Microevolution" },
    { id: "EVO_Terms_025", de: "Horizontal gene transfer", en: "Transfer of genes between organisms outside reproduction.", tag: "Microevolution" },
    { id: "EVO_Terms_026", de: "Random sampling", en: "Chance effects influencing which alleles are passed on.", tag: "Microevolution" },
    { id: "EVO_Terms_027", de: "Fixation", en: "When an allele reaches 100% frequency in a population.", tag: "Microevolution" },
    { id: "EVO_Terms_028", de: "Loss of alleles", en: "Complete disappearance of an allele from a population.", tag: "Microevolution" },
    { id: "EVO_Terms_029", de: "Population size", en: "Number of individuals in a population affecting evolutionary processes.", tag: "Microevolution" },
    { id: "EVO_Terms_030", de: "Non-adaptive evolution", en: "Evolutionary change not driven by natural selection.", tag: "Microevolution" },
    { id: "EVO_Terms_031", de: "Null model", en: "A baseline model assuming no evolutionary forces are acting.", tag: "Microevolution" },
    { id: "EVO_Terms_032", de: "Hardy-Weinberg equilibrium", en: "Condition where allele frequencies remain constant over time.", tag: "Microevolution" },
    { id: "EVO_Terms_033", de: "Population structure", en: "Genetic differences among populations of the same species.", tag: "Microevolution" },

    // -------------------------
    // MUTATION / VARIATION
    // -------------------------
    { id: "EVO_Terms_034", de: "Mutation", en: "A change in DNA sequence.", tag: "Mutation" },
    { id: "EVO_Terms_035", de: "Genetic variation", en: "Differences in DNA among individuals.", tag: "Mutation" },
    { id: "EVO_Terms_036", de: "Point mutation", en: "A change in a single nucleotide.", tag: "Mutation" },
    { id: "EVO_Terms_037", de: "Insertion", en: "Addition of one or more nucleotides.", tag: "Mutation" },
    { id: "EVO_Terms_038", de: "Deletion", en: "Removal of one or more nucleotides.", tag: "Mutation" },
    { id: "EVO_Terms_039", de: "Gene duplication", en: "Creation of an extra copy of a gene.", tag: "Mutation" },
    { id: "EVO_Terms_040", de: "Whole genome duplication", en: "Duplication of an entire genome.", tag: "Mutation" },
    { id: "EVO_Terms_041", de: "Regulatory mutation", en: "Mutation affecting gene expression rather than protein structure.", tag: "Mutation" },
    { id: "EVO_Terms_042", de: "Beneficial mutation", en: "Mutation that increases fitness.", tag: "Mutation" },
    { id: "EVO_Terms_043", de: "Neutral mutation", en: "Mutation with no effect on fitness.", tag: "Mutation" },
    { id: "EVO_Terms_044", de: "Deleterious mutation", en: "Mutation that decreases fitness.", tag: "Mutation" },
    { id: "EVO_Terms_045", de: "Trade-offs", en: "Situations where improvement in one trait reduces another.", tag: "Mutation" },
    { id: "EVO_Terms_046", de: "Gene expression", en: "Process by which genes produce functional products.", tag: "Mutation" },
    { id: "EVO_Terms_047", de: "Mutation accumulation", en: "Build-up of mutations over time.", tag: "Mutation" },
    { id: "EVO_Terms_048", de: "Selective environment", en: "Environmental conditions influencing selection.", tag: "Mutation" },

    // -------------------------
    // MACROEVOLUTION
    // -------------------------
    { id: "EVO_Terms_049", de: "Macroevolution", en: "Evolutionary change above the species level.", tag: "Macroevolution" },
    { id: "EVO_Terms_050", de: "Deep time", en: "Vast geological time over which evolution occurs.", tag: "Macroevolution" },
    { id: "EVO_Terms_051", de: "Diversification", en: "Increase in species number within a lineage.", tag: "Macroevolution" },
    { id: "EVO_Terms_052", de: "Extinction", en: "Permanent loss of a species.", tag: "Macroevolution" },
    { id: "EVO_Terms_053", de: "Adaptive radiation", en: "Rapid diversification into multiple niches.", tag: "Macroevolution" },
    { id: "EVO_Terms_054", de: "Gradualism", en: "Slow, continuous evolutionary change.", tag: "Macroevolution" },
    { id: "EVO_Terms_055", de: "Punctuated equilibrium", en: "Long periods of stasis interrupted by rapid change.", tag: "Macroevolution" },

    // -------------------------
    // PHYLOGENETICS
    // -------------------------
    { id: "EVO_Terms_056", de: "Phylogeny", en: "Evolutionary history of a group.", tag: "Phylogenetics" },
    { id: "EVO_Terms_057", de: "Phylogenetic tree", en: "Diagram showing evolutionary relationships.", tag: "Phylogenetics" },
    { id: "EVO_Terms_058", de: "Node", en: "Point representing a common ancestor.", tag: "Phylogenetics" },
    { id: "EVO_Terms_059", de: "Branch", en: "Line representing an evolutionary lineage.", tag: "Phylogenetics" },
    { id: "EVO_Terms_060", de: "Taxon / taxa", en: "A named group of organisms.", tag: "Phylogenetics" },
    { id: "EVO_Terms_061", de: "Sister taxa", en: "Two lineages sharing an immediate common ancestor.", tag: "Phylogenetics" },
    { id: "EVO_Terms_062", de: "Clade", en: "A group consisting of an ancestor and all descendants.", tag: "Phylogenetics" },
    { id: "EVO_Terms_063", de: "Monophyletic", en: "Group containing an ancestor and all descendants.", tag: "Phylogenetics" },
    { id: "EVO_Terms_064", de: "Paraphyletic", en: "Group containing an ancestor but not all descendants.", tag: "Phylogenetics" },
    { id: "EVO_Terms_065", de: "Polyphyletic", en: "Group lacking a common ancestor.", tag: "Phylogenetics" },
    { id: "EVO_Terms_066", de: "Homology", en: "Similarity due to shared ancestry.", tag: "Phylogenetics" },
    { id: "EVO_Terms_067", de: "Convergent evolution", en: "Independent evolution of similar traits.", tag: "Phylogenetics" },
    { id: "EVO_Terms_068", de: "Ancestral trait", en: "Trait present in a common ancestor.", tag: "Phylogenetics" },
    { id: "EVO_Terms_069", de: "Derived trait", en: "Trait that evolved from an ancestral condition.", tag: "Phylogenetics" },

    // -------------------------
    // SPECIATION
    // -------------------------
    { id: "EVO_Terms_070", de: "Speciation", en: "Formation of new species.", tag: "Speciation" },
    { id: "EVO_Terms_071", de: "Species", en: "A group of organisms that form independent lineages.", tag: "Speciation" },
    { id: "EVO_Terms_072", de: "Biological Species Concept", en: "Species defined by reproductive isolation.", tag: "Speciation" },
    { id: "EVO_Terms_073", de: "Reproductive isolation", en: "Barriers preventing gene flow between populations.", tag: "Speciation" },
    { id: "EVO_Terms_074", de: "Morphological Species Concept", en: "Species defined by physical characteristics.", tag: "Speciation" },
    { id: "EVO_Terms_075", de: "Phylogenetic Species Concept", en: "Species defined by evolutionary history.", tag: "Speciation" },
    { id: "EVO_Terms_076", de: "Cryptic species", en: "Distinct species that look very similar.", tag: "Speciation" },
    { id: "EVO_Terms_077", de: "Asexual organisms", en: "Organisms reproducing without mating.", tag: "Speciation" },
    { id: "EVO_Terms_078", de: "Fossils", en: "Preserved remains or traces of past life.", tag: "General" },
    { id: "EVO_Terms_079", de: "Operational Taxonomic Units (OTUs)", en: "Units used to classify organisms in analyses.", tag: "Phylogenetics" },
    { id: "EVO_Terms_080", de: "Independently evolving lineages", en: "Groups evolving separately over time.", tag: "Speciation" },

    { id: "EVO_Terms_081", de: "Prezygotic barrier", en: "Barrier preventing fertilization.", tag: "Speciation" },
    { id: "EVO_Terms_082", de: "Habitat isolation", en: "Species live in different environments.", tag: "Speciation" },
    { id: "EVO_Terms_083", de: "Temporal isolation", en: "Species reproduce at different times.", tag: "Speciation" },
    { id: "EVO_Terms_084", de: "Behavioral isolation", en: "Differences in mating behaviors.", tag: "Speciation" },
    { id: "EVO_Terms_085", de: "Mechanical isolation", en: "Incompatible reproductive structures.", tag: "Speciation" },
    { id: "EVO_Terms_086", de: "Assortative mating", en: "Preference for mating with similar individuals.", tag: "Speciation" },
    { id: "EVO_Terms_087", de: "Courtship behavior", en: "Actions used to attract mates.", tag: "Speciation" },
    { id: "EVO_Terms_088", de: "Gene flow interruption", en: "Prevention of allele exchange.", tag: "Speciation" },

    { id: "EVO_Terms_089", de: "Postzygotic barrier", en: "Barrier occurring after fertilization.", tag: "Speciation" },
    { id: "EVO_Terms_090", de: "Hybrid inviability", en: "Hybrid fails to develop properly.", tag: "Speciation" },
    { id: "EVO_Terms_091", de: "Hybrid sterility", en: "Hybrid cannot reproduce.", tag: "Speciation" },
    { id: "EVO_Terms_092", de: "Hybrid breakdown", en: "Later-generation hybrids have reduced fitness.", tag: "Speciation" },
    { id: "EVO_Terms_093", de: "Genetic incompatibility", en: "Genes do not function well together.", tag: "Speciation" },
    { id: "EVO_Terms_094", de: "Reduced fitness", en: "Lower survival or reproduction.", tag: "Speciation" },
    { id: "EVO_Terms_095", de: "Chromosomal mismatch", en: "Incompatible chromosome structures.", tag: "Speciation" },

    { id: "EVO_Terms_096", de: "Allopatric speciation", en: "Speciation due to geographic isolation.", tag: "Speciation" },
    { id: "EVO_Terms_097", de: "Peripatric speciation", en: "Speciation in small, isolated populations.", tag: "Speciation" },
    { id: "EVO_Terms_098", de: "Parapatric speciation", en: "Speciation across a continuous range.", tag: "Speciation" },
    { id: "EVO_Terms_099", de: "Sympatric speciation", en: "Speciation without geographic separation.", tag: "Speciation" },
    { id: "EVO_Terms_100", de: "Geographic isolation", en: "Physical separation of populations.", tag: "Speciation" },
    { id: "EVO_Terms_101", de: "Founder population", en: "Small group starting a new population.", tag: "Speciation" },
    { id: "EVO_Terms_102", de: "Divergent selection", en: "Selection favoring different traits in different environments.", tag: "Speciation" },
    { id: "EVO_Terms_103", de: "Selection vs gene flow", en: "Balance between local adaptation and allele movement.", tag: "Speciation" },
    { id: "EVO_Terms_104", de: "Polyploidy", en: "Possession of more than two chromosome sets.", tag: "Speciation" },
    { id: "EVO_Terms_105", de: "Host switching", en: "Shift to a new host species.", tag: "Speciation" },
    { id: "EVO_Terms_106", de: "Ecological specialization", en: "Adaptation to a specific niche.", tag: "Speciation" }

  ]
};
