/* decks.js
   Shared decks for all games.

   Format:
   DECKS = {
     DECK_NAME: [{ de: "term", en: "definition", tag: "Category" }, ...]
   }
*/

window.DECKS = {
  BIOL112_EVOLUTION: [
    // -------------------------
    // GENERAL
    // -------------------------
    { de: "Evolution", en: "Change in heritable traits of populations over generations.", tag: "General" },
    { de: "Descent with modification", en: "Inheritance of traits from ancestors with changes over time.", tag: "General" },
    { de: "Population vs individual", en: "Individuals do not evolve; populations do.", tag: "General" },
    { de: "Heritable trait", en: "A trait that can be passed from parents to offspring.", tag: "General" },
    { de: "Acquired trait", en: "A trait gained during life that is not inherited.", tag: "General" },
    { de: "Allele", en: "Different versions of the same gene.", tag: "General" },
    { de: "Variation", en: "Differences in traits among individuals in a population.", tag: "General" },
    { de: "Artificial selection", en: "Human-directed breeding for specific traits.", tag: "General" },
    { de: "Transitional fossil", en: "A fossil showing traits intermediate between groups.", tag: "General" },
    { de: "Tree of life", en: "A representation of evolutionary relationships among all organisms.", tag: "General" },

    // -------------------------
    // MECHANISMS (Microevolution forces + selection + HW)
    // -------------------------
    { de: "Natural selection", en: "Differential survival and reproduction based on heritable traits.", tag: "Mechanisms" },
    { de: "Fitness", en: "An organism’s ability to survive and reproduce.", tag: "Mechanisms" },
    { de: "Reproductive success", en: "Number of viable offspring produced.", tag: "Mechanisms" },
    { de: "Differential reproduction", en: "Individuals with certain traits reproduce more than others.", tag: "Mechanisms" },
    { de: "Directional selection", en: "Selection favoring one extreme trait value.", tag: "Mechanisms" },
    { de: "Stabilizing selection", en: "Selection favoring intermediate trait values.", tag: "Mechanisms" },
    { de: "Disruptive selection", en: "Selection favoring extreme trait values over intermediates.", tag: "Mechanisms" },

    { de: "Gene flow", en: "Movement of alleles between populations.", tag: "Mechanisms" },
    { de: "Genetic drift", en: "Random changes in allele frequencies, strongest in small populations.", tag: "Mechanisms" },
    { de: "Allele frequency", en: "Proportion of a specific allele in a population.", tag: "Mechanisms" },
    { de: "Bottleneck effect", en: "Loss of genetic diversity due to a sharp population reduction.", tag: "Mechanisms" },
    { de: "Founder effect", en: "Genetic drift occurring when a small group starts a new population.", tag: "Mechanisms" },
    { de: "Migration", en: "Movement of individuals between populations.", tag: "Mechanisms" },
    { de: "Gamete dispersal", en: "Movement of reproductive cells between populations.", tag: "Mechanisms" },
    { de: "Horizontal gene transfer", en: "Transfer of genes between organisms outside reproduction.", tag: "Mechanisms" },
    { de: "Random sampling", en: "Chance effects influencing which alleles are passed on.", tag: "Mechanisms" },
    { de: "Fixation", en: "When an allele reaches 100% frequency in a population.", tag: "Mechanisms" },
    { de: "Loss of alleles", en: "Complete disappearance of an allele from a population.", tag: "Mechanisms" },
    { de: "Population size", en: "Number of individuals in a population affecting evolutionary processes.", tag: "Mechanisms" },
    { de: "Non-adaptive evolution", en: "Evolutionary change not driven by natural selection.", tag: "Mechanisms" },
    { de: "Null model", en: "A baseline model assuming no evolutionary forces are acting.", tag: "Mechanisms" },
    { de: "Hardy–Weinberg equilibrium", en: "Condition where allele frequencies remain constant over time.", tag: "Mechanisms" },
    { de: "Population structure", en: "Genetic differences among populations of the same species.", tag: "Mechanisms" },

    // -------------------------
    // MUTATION / SOURCES OF VARIATION
    // -------------------------
    { de: "Mutation", en: "A change in DNA sequence.", tag: "Mutation" },
    { de: "Genetic variation", en: "Differences in DNA among individuals.", tag: "Mutation" },
    { de: "Point mutation", en: "A change in a single nucleotide.", tag: "Mutation" },
    { de: "Insertion", en: "Addition of one or more nucleotides.", tag: "Mutation" },
    { de: "Deletion", en: "Removal of one or more nucleotides.", tag: "Mutation" },
    { de: "Gene duplication", en: "Creation of an extra copy of a gene.", tag: "Mutation" },
    { de: "Whole genome duplication", en: "Duplication of an entire genome.", tag: "Mutation" },
    { de: "Regulatory mutation", en: "Mutation affecting gene expression rather than protein structure.", tag: "Mutation" },
    { de: "Beneficial mutation", en: "Mutation that increases fitness.", tag: "Mutation" },
    { de: "Neutral mutation", en: "Mutation with no effect on fitness.", tag: "Mutation" },
    { de: "Deleterious mutation", en: "Mutation that decreases fitness.", tag: "Mutation" },
    { de: "Trade-offs", en: "Situations where improvement in one trait reduces another.", tag: "Mutation" },
    { de: "Gene expression", en: "Process by which genes produce functional products.", tag: "Mutation" },
    { de: "Mutation accumulation", en: "Build-up of mutations over time.", tag: "Mutation" },
    { de: "Selective environment", en: "Environmental conditions influencing selection.", tag: "Mutation" },

    // -------------------------
    // MACROEVOLUTION + PHYLOGENETICS
    // -------------------------
    { de: "Macroevolution", en: "Evolutionary change above the species level.", tag: "Macroevo/Phylo" },
    { de: "Microevolution", en: "Changes in allele frequencies within populations.", tag: "Mechanisms" }, // microevo concept, but fits forces unit
    { de: "Deep time", en: "Vast geological time over which evolution occurs.", tag: "Macroevo/Phylo" },
    { de: "Diversification", en: "Increase in species number within a lineage.", tag: "Macroevo/Phylo" },
    { de: "Extinction", en: "Permanent loss of a species.", tag: "Macroevo/Phylo" },
    { de: "Phylogeny", en: "Evolutionary history of a group.", tag: "Macroevo/Phylo" },
    { de: "Phylogenetic tree", en: "Diagram showing evolutionary relationships.", tag: "Macroevo/Phylo" },
    { de: "Node", en: "Point representing a common ancestor.", tag: "Macroevo/Phylo" },
    { de: "Branch", en: "Line representing evolutionary lineage.", tag: "Macroevo/Phylo" },
    { de: "Taxon / taxa", en: "A named group of organisms.", tag: "Macroevo/Phylo" },
    { de: "Sister taxa", en: "Two lineages sharing an immediate common ancestor.", tag: "Macroevo/Phylo" },
    { de: "Clade", en: "A group consisting of an ancestor and all descendants.", tag: "Macroevo/Phylo" },
    { de: "Monophyletic", en: "Group containing an ancestor and all descendants.", tag: "Macroevo/Phylo" },
    { de: "Paraphyletic", en: "Group containing an ancestor but not all descendants.", tag: "Macroevo/Phylo" },
    { de: "Polyphyletic", en: "Group lacking a common ancestor.", tag: "Macroevo/Phylo" },
    { de: "Homology", en: "Similarity due to shared ancestry.", tag: "Macroevo/Phylo" },
    { de: "Convergent evolution", en: "Independent evolution of similar traits.", tag: "Macroevo/Phylo" },
    { de: "Ancestral trait", en: "Trait present in a common ancestor.", tag: "Macroevo/Phylo" },
    { de: "Derived trait", en: "Trait that evolved from an ancestral condition.", tag: "Macroevo/Phylo" },
    { de: "Adaptive radiation", en: "Rapid diversification into multiple niches.", tag: "Macroevo/Phylo" },
    { de: "Gradualism", en: "Slow, continuous evolutionary change.", tag: "Macroevo/Phylo" },
    { de: "Punctuated equilibrium", en: "Long periods of stasis interrupted by rapid change.", tag: "Macroevo/Phylo" },

    // -------------------------
    // SPECIATION (species concepts, barriers, modes)
    // -------------------------
    { de: "Speciation", en: "Formation of new species.", tag: "Speciation" },
    { de: "Species", en: "A group of organisms that form independent lineages.", tag: "Speciation" },
    { de: "Biological Species Concept", en: "Species defined by reproductive isolation.", tag: "Speciation" },
    { de: "Reproductive isolation", en: "Barriers preventing gene flow between populations.", tag: "Speciation" },
    { de: "Morphological Species Concept", en: "Species defined by physical characteristics.", tag: "Speciation" },
    { de: "Phylogenetic Species Concept", en: "Species defined by evolutionary history.", tag: "Speciation" },
    { de: "Cryptic species", en: "Distinct species that look very similar.", tag: "Speciation" },
    { de: "Asexual organisms", en: "Organisms reproducing without mating.", tag: "Speciation" },
    { de: "Fossils", en: "Preserved remains or traces of past life.", tag: "General" }, // evidence term; could also be Macroevo/Phylo
    { de: "Operational Taxonomic Units (OTUs)", en: "Units used to classify organisms in analyses.", tag: "Macroevo/Phylo" },
    { de: "Independently evolving lineages", en: "Groups evolving separately over time.", tag: "Speciation" },

    { de: "Prezygotic barrier", en: "Barrier preventing fertilization.", tag: "Speciation" },
    { de: "Habitat isolation", en: "Species live in different environments.", tag: "Speciation" },
    { de: "Temporal isolation", en: "Species reproduce at different times.", tag: "Speciation" },
    { de: "Behavioral isolation", en: "Differences in mating behaviors.", tag: "Speciation" },
    { de: "Mechanical isolation", en: "Incompatible reproductive structures.", tag: "Speciation" },
    { de: "Assortative mating", en: "Preference for mating with similar individuals.", tag: "Speciation" },
    { de: "Courtship behavior", en: "Actions used to attract mates.", tag: "Speciation" },
    { de: "Gene flow interruption", en: "Prevention of allele exchange.", tag: "Speciation" },

    { de: "Postzygotic barrier", en: "Barrier occurring after fertilization.", tag: "Speciation" },
    { de: "Hybrid inviability", en: "Hybrid fails to develop properly.", tag: "Speciation" },
    { de: "Hybrid sterility", en: "Hybrid cannot reproduce.", tag: "Speciation" },
    { de: "Hybrid breakdown", en: "Later-generation hybrids have reduced fitness.", tag: "Speciation" },
    { de: "Genetic incompatibility", en: "Genes do not function well together.", tag: "Speciation" },
    { de: "Reduced fitness", en: "Lower survival or reproduction.", tag: "Speciation" },
    { de: "Chromosomal mismatch", en: "Incompatible chromosome structures.", tag: "Speciation" },

    { de: "Allopatric speciation", en: "Speciation due to geographic isolation.", tag: "Speciation" },
    { de: "Peripatric speciation", en: "Speciation in small, isolated populations.", tag: "Speciation" },
    { de: "Parapatric speciation", en: "Speciation across a continuous range.", tag: "Speciation" },
    { de: "Sympatric speciation", en: "Speciation without geographic separation.", tag: "Speciation" },
    { de: "Geographic isolation", en: "Physical separation of populations.", tag: "Speciation" },
    { de: "Founder population", en: "Small group starting a new population.", tag: "Speciation" },
    { de: "Divergent selection", en: "Selection favoring different traits in different environments.", tag: "Speciation" },
    { de: "Selection vs gene flow", en: "Balance between local adaptation and allele movement.", tag: "Speciation" },
    { de: "Polyploidy", en: "Possession of more than two chromosome sets.", tag: "Speciation" },
    { de: "Host switching", en: "Shift to a new host species.", tag: "Speciation" },
    { de: "Ecological specialization", en: "Adaptation to a specific niche.", tag: "Speciation" }
  ]
};
