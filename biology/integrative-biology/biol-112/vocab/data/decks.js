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
    { id: "EVO_Terms_106", de: "Ecological specialization", en: "Adaptation to a specific niche.", tag: "Speciation" },

  ],


BIOL112_Genetics: [
  // Big-Picture Concepts
  { id: "GEN_Terms_001", tag: "cell division", de: "Cell division", en: "One parent cell divides to produce daughter cells." },
  { id: "GEN_Terms_002", tag: "cell division", de: "Genome", en: "All of an organism’s genetic material (all its DNA)." },
  { id: "GEN_Terms_003", tag: "cell division", de: "Genetic information", en: "The instructions stored in DNA that cells use to build and run an organism." },
  { id: "GEN_Terms_004", tag: "cell division", de: "Somatic cells", en: "Body cells (non-reproductive cells) that divide by mitosis." },
  { id: "GEN_Terms_005", tag: "cell division", de: "Gametes", en: "Reproductive cells (sperm or egg) that carry one set of chromosomes." },
  { id: "GEN_Terms_006", tag: "cell division", de: "Sexual reproduction", en: "Reproduction involving fusion of gametes from two parents." },
  { id: "GEN_Terms_007", tag: "cell division", de: "Genetic diversity", en: "Differences in genetic traits among individuals in a population." },

  // DNA & Chromosomes
  { id: "GEN_Terms_008", tag: "cell division", de: "DNA", en: "The molecule that stores genetic instructions in cells." },
  { id: "GEN_Terms_009", tag: "cell division", de: "Chromosome", en: "A packaged DNA molecule containing many genes." },
  { id: "GEN_Terms_010", tag: "cell division", de: "Chromatin", en: "Loosely packed DNA and proteins found in the nucleus most of the time." },
  { id: "GEN_Terms_011", tag: "cell division", de: "Sister chromatids", en: "Identical copies of a chromosome produced during DNA replication." },
  { id: "GEN_Terms_012", tag: "cell division", de: "Homologous chromosomes", en: "A chromosome pair (one from each parent) with the same genes in the same order." },
  { id: "GEN_Terms_013", tag: "cell division", de: "Diploid (2n)", en: "Having two sets of chromosomes, one from each parent." },
  { id: "GEN_Terms_014", tag: "cell division", de: "Haploid (n)", en: "Having one set of chromosomes." },

  // The Cell Cycle
  { id: "GEN_Terms_015", tag: "cell division", de: "Cell cycle", en: "The repeating sequence of growth, DNA replication, and division." },
  { id: "GEN_Terms_016", tag: "cell division", de: "G1 phase", en: "Growth phase when the cell increases in size and builds cellular components." },
  { id: "GEN_Terms_017", tag: "cell division", de: "S phase", en: "DNA synthesis phase when DNA is replicated." },
  { id: "GEN_Terms_018", tag: "cell division", de: "G2 phase", en: "Growth and preparation phase after DNA replication and before division." },
  { id: "GEN_Terms_019", tag: "cell division", de: "DNA replication", en: "The process of copying DNA so each daughter cell receives a complete genome." },

  // Mitosis
  { id: "GEN_Terms_020", tag: "cell division", de: "Mitosis", en: "Nuclear division that produces two genetically identical nuclei." },
  { id: "GEN_Terms_021", tag: "cell division", de: "Prophase", en: "Chromosomes condense and the nucleus breaks down." },
  { id: "GEN_Terms_022", tag: "cell division", de: "Metaphase", en: "Chromosomes align at the middle of the cell." },
  { id: "GEN_Terms_023", tag: "cell division", de: "Anaphase", en: "Sister chromatids separate and move to opposite poles." },
  { id: "GEN_Terms_024", tag: "cell division", de: "Telophase", en: "New nuclei form around each set of chromosomes." },
  { id: "GEN_Terms_025", tag: "cell division", de: "Cytokinesis", en: "Division of the cytoplasm to produce two daughter cells." },

  // Meiosis
  { id: "GEN_Terms_026", tag: "cell division", de: "Meiosis", en: "Cell division that produces haploid gametes and increases genetic variation." },
  { id: "GEN_Terms_027", tag: "cell division", de: "Meiosis I", en: "Division that separates homologous chromosomes and reduces chromosome number." },
  { id: "GEN_Terms_028", tag: "cell division", de: "Meiosis II", en: "Division that separates sister chromatids, similar to mitosis." },
  { id: "GEN_Terms_029", tag: "cell division", de: "Reduction division", en: "Division that reduces chromosome number from diploid to haploid." },

  // Sources of Genetic Variation
  { id: "GEN_Terms_030", tag: "cell division", de: "Crossing over", en: "Exchange of DNA between homologous chromosomes during meiosis." },
  { id: "GEN_Terms_031", tag: "cell division", de: "Independent assortment", en: "Random distribution of homologous chromosomes into gametes." },

  // Outcomes of Cell Division
  { id: "GEN_Terms_032", tag: "cell division", de: "Identical daughter cells", en: "The outcome of mitosis: two cells with the same genetic information." },
  { id: "GEN_Terms_033", tag: "cell division", de: "Haploid cells", en: "The outcome of meiosis: cells with one set of chromosomes." },
  { id: "GEN_Terms_034", tag: "cell division", de: "Chromosome number", en: "The total number of chromosomes in a cell." },
  { id: "GEN_Terms_035", tag: "cell division", de: "Genetic variation", en: "Differences among gametes or individuals caused by meiosis." }

   // Molecular Genetics / Central Dogma
{ id: "GEN_Terms_048", tag: "molecular genetics", de: "Central Dogma", en: "The flow of genetic information from DNA to RNA to protein." },
{ id: "GEN_Terms_049", tag: "molecular genetics", de: "RNA", en: "A nucleic acid that carries genetic information and helps produce proteins." },
{ id: "GEN_Terms_050", tag: "molecular genetics", de: "Protein", en: "A molecule made of amino acids that performs most functions in cells." },
{ id: "GEN_Terms_051", tag: "molecular genetics", de: "Nucleotide", en: "The basic building block of DNA and RNA consisting of a sugar, phosphate, and base." },
{ id: "GEN_Terms_052", tag: "molecular genetics", de: "Deoxyribose", en: "The sugar molecule found in DNA nucleotides." },
{ id: "GEN_Terms_053", tag: "molecular genetics", de: "Ribose", en: "The sugar molecule found in RNA nucleotides." },
{ id: "GEN_Terms_054", tag: "molecular genetics", de: "Base pairing", en: "The specific pairing of nucleotide bases (A with T or U, and C with G)." },
{ id: "GEN_Terms_055", tag: "molecular genetics", de: "Double helix", en: "The twisted ladder structure of DNA formed by two complementary strands." },
{ id: "GEN_Terms_056", tag: "molecular genetics", de: "DNA polymerase", en: "An enzyme that synthesizes new DNA strands during replication." },
{ id: "GEN_Terms_057", tag: "molecular genetics", de: "RNA polymerase", en: "An enzyme that synthesizes RNA from a DNA template." },
{ id: "GEN_Terms_058", tag: "molecular genetics", de: "Transcription", en: "The process of copying DNA into RNA." },
{ id: "GEN_Terms_059", tag: "molecular genetics", de: "Translation", en: "The process of building a protein from an mRNA sequence." },
{ id: "GEN_Terms_060", tag: "molecular genetics", de: "mRNA", en: "Messenger RNA that carries genetic instructions from DNA to the ribosome." },
{ id: "GEN_Terms_061", tag: "molecular genetics", de: "tRNA", en: "Transfer RNA that brings amino acids to the ribosome during protein synthesis." },
{ id: "GEN_Terms_062", tag: "molecular genetics", de: "Ribosome", en: "The cellular structure that reads mRNA and assembles proteins." },
{ id: "GEN_Terms_063", tag: "molecular genetics", de: "Amino acid", en: "The building block of proteins." },
{ id: "GEN_Terms_064", tag: "molecular genetics", de: "Genetic code", en: "The set of rules that determines how codons specify amino acids." },
{ id: "GEN_Terms_065", tag: "molecular genetics", de: "Codon", en: "A three-nucleotide sequence in mRNA that specifies an amino acid." },

// Mutation types
{ id: "GEN_Terms_066", tag: "mutation", de: "Substitution mutation", en: "A mutation where one nucleotide is replaced with another." },
{ id: "GEN_Terms_067", tag: "mutation", de: "Insertion mutation", en: "A mutation where one or more nucleotides are added to DNA." },
{ id: "GEN_Terms_068", tag: "mutation", de: "Deletion mutation", en: "A mutation where one or more nucleotides are removed from DNA." },

// Population genetics
{ id: "GEN_Terms_069", tag: "evolution genetics", de: "Allele", en: "A different version of the same gene." },
{ id: "GEN_Terms_070", tag: "evolution genetics", de: "Natural selection", en: "The process where traits that improve survival or reproduction become more common." },
{ id: "GEN_Terms_071", tag: "evolution genetics", de: "Gene flow", en: "Movement of alleles between populations through migration and reproduction." },
{ id: "GEN_Terms_072", tag: "evolution genetics", de: "Genetic drift", en: "Random changes in allele frequencies in a population." },

// Gene regulation
{ id: "GEN_Terms_073", tag: "gene regulation", de: "Gene regulation", en: "Control of when, where, and how much a gene is expressed." },
{ id: "GEN_Terms_074", tag: "gene regulation", de: "Transcriptional regulation", en: "Control of gene expression by regulating transcription." },
{ id: "GEN_Terms_075", tag: "gene regulation", de: "Translational regulation", en: "Control of gene expression by regulating translation." },
{ id: "GEN_Terms_076", tag: "gene regulation", de: "Post-translational regulation", en: "Control of protein activity after a protein has been produced." },
{ id: "GEN_Terms_077", tag: "gene regulation", de: "DNA methylation", en: "Chemical modification of DNA that can reduce gene transcription." },

// Molecular biology techniques
{ id: "GEN_Terms_078", tag: "molecular techniques", de: "PCR (Polymerase Chain Reaction)", en: "A technique used to amplify a specific DNA sequence." },
{ id: "GEN_Terms_079", tag: "molecular techniques", de: "qPCR", en: "A PCR method that measures the quantity of DNA during amplification." },
{ id: "GEN_Terms_080", tag: "molecular techniques", de: "RT-PCR", en: "A method that converts RNA to DNA and amplifies it to study gene expression." },
{ id: "GEN_Terms_081", tag: "molecular techniques", de: "Gel electrophoresis", en: "A method used to separate DNA fragments by size using an electric field." },
{ id: "GEN_Terms_082", tag: "molecular techniques", de: "Sequencing", en: "Determining the exact order of nucleotides in DNA or RNA." },
{ id: "GEN_Terms_083", tag: "molecular techniques", de: "Western blot", en: "A method used to detect specific proteins using antibodies." },
{ id: "GEN_Terms_084", tag: "molecular techniques", de: "ELISA", en: "A technique that uses antibodies to detect and quantify proteins or antigens." },
{ id: "GEN_Terms_085", tag: "molecular techniques", de: "Immunofluorescence", en: "A method that uses fluorescent antibodies to visualize proteins in cells." },
{ id: "GEN_Terms_086", tag: "molecular techniques", de: "Spectrophotometry", en: "A method that measures how much light a sample absorbs to quantify molecules." },

// Omics
{ id: "GEN_Terms_087", tag: "omics", de: "Metagenomics", en: "The study of all genetic material from a community of organisms." },
{ id: "GEN_Terms_088", tag: "omics", de: "Transcriptomics", en: "The study of all RNA transcripts produced by a genome." },
{ id: "GEN_Terms_089", tag: "omics", de: "Proteomics", en: "The study of all proteins produced by a cell or organism." },

// Gene editing
{ id: "GEN_Terms_090", tag: "gene editing", de: "CRISPR-Cas", en: "A gene editing system that can precisely cut and modify DNA." }
]

};
