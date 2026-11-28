/* Les Âges Rouges — extension Invocations & Ultimes
 * Données de conception séparées du moteur pour permettre une intégration progressive.
 * Les valeurs de dégâts, coûts et durées seront équilibrées après les premiers tests.
 */
window.AGE_ROUGE_SKILLS = {
  version: 1,
  variants: ["base", "ascension", "transmutation", "mutation"],
  invocations: [
    {id:"phoenix",name:"Phénix incandescent",element:"fire",role:"summon",description:"Un phénix poursuit les ennemis et projette des flammes.",variants:[
      {name:"Ascension solaire",mechanic:"Le phénix grandit et libère une onde de feu à chaque passage.",visual:"Ailes plus vastes, traînée de braises et anneau solaire."},
      {name:"Bombe solaire",mechanic:"Le phénix orbite autour du joueur puis plonge sur une zone et explose.",visual:"Orbe solaire qui se contracte avant une détonation."},
      {name:"Phénix arcanique",mechanic:"Ses frappes enflamment une cible puis propagent une explosion arcanique aux ennemis proches.",visual:"Flammes orange traversées de veines violettes."}
    ]},
    {id:"frost-guardian",name:"Gardien de givre",element:"ice",role:"summon",description:"Un colosse protège le joueur et frappe les adversaires proches.",variants:[
      {name:"Colosse glaciaire",mechanic:"Ses frappes au sol déclenchent des ondes de gel circulaires.",visual:"Armure cristalline et fissures glacées au sol."},
      {name:"Forteresse de glace",mechanic:"Le gardien s'ancre et crée une zone protectrice qui bloque les ennemis.",visual:"Dôme de glace facetté avec remparts translucides."},
      {name:"Gardien de tempête",mechanic:"Ses coups projettent des éclats de glace chargés d'éclairs.",visual:"Cristaux bleus parcourus d'arcs électriques."}
    ]},
    {id:"lightning-spirit",name:"Esprit fulgurant",element:"lightning",role:"summon",description:"Un esprit électrique poursuit les ennemis et enchaîne les éclairs.",variants:[
      {name:"Esprit dédoublé",mechanic:"Il se divise brièvement en deux esprits qui choisissent des cibles différentes.",visual:"Deux silhouettes électriques reliées par un arc."},
      {name:"Totem électrique",mechanic:"Il devient un totem fixe qui relie les ennemis dans sa zone par des chaînes d'éclairs.",visual:"Pilier runique et réseau d'arcs au sol."},
      {name:"Esprit de plasma",mechanic:"Ses impacts combinent foudre et feu et laissent de petites zones brûlantes.",visual:"Électricité violette et noyaux incandescents."}
    ]},
    {id:"arcane-sentinel",name:"Sentinelle arcanique",element:"confluence",role:"summon",description:"Un guerrier spectral adapte ses attaques à l'énergie élémentaire accumulée.",variants:[
      {name:"Sentinelle ascendante",mechanic:"Elle alterne feu, givre et foudre au fil de ses attaques.",visual:"Armure évolutive dont les runes changent de couleur."},
      {name:"Double spectral",mechanic:"Elle devient un reflet du joueur et reproduit périodiquement sa dernière compétence principale.",visual:"Silhouette miroir reliée au joueur par un fil arcanique."},
      {name:"Sentinelle accordée",mechanic:"Elle adopte l'élément dominant et transforme ses frappes en combos spécialisés.",visual:"Lame et bouclier remodelés par l'élément choisi."}
    ]},
    {id:"primordial-orbs",name:"Orbes primordiaux",element:"confluence",role:"summon",description:"Quatre orbes élémentaires orbitent autour du joueur et attaquent les ennemis proches.",variants:[
      {name:"Orbite accélérée",mechanic:"Les orbes accélèrent et déclenchent une décharge lorsqu'ils se croisent.",visual:"Trajectoires lumineuses et étincelles aux intersections."},
      {name:"Bouclier orbital",mechanic:"Les orbes interceptent certaines attaques puis ripostent en projectiles.",visual:"Sphère protectrice composée de quatre anneaux."},
      {name:"Orbe de Confluence",mechanic:"Les quatre orbes fusionnent et alternent leurs quatre éléments à chaque attaque.",visual:"Sphère violette à quatre noyaux élémentaires."}
    ]}
  ],
  ultimates: [
    {id:"solar-cataclysm",name:"Cataclysme solaire",element:"fire",role:"ultimate",description:"Une étoile s'écrase sur le champ de bataille et provoque une explosion majeure.",variants:[
      {name:"Pluie de fragments",mechanic:"Après l'impact, des fragments solaires retombent autour du cratère.",visual:"Météorites secondaires et gerbes de braises."},
      {name:"Étoile suspendue",mechanic:"L'étoile reste en suspension et bombarde progressivement une zone ciblée.",visual:"Sphère solaire flottante avec tirs successifs."},
      {name:"Singularité ardente",mechanic:"Une singularité attire les ennemis avant une explosion de feu et d'énergie arcanique.",visual:"Noyau noir-orangé entouré d'un halo violet."}
    ]},
    {id:"eternal-kingdom",name:"Royaume éternel",element:"ice",role:"ultimate",description:"Une vaste zone devient un royaume gelé qui ralentit puis immobilise les ennemis.",variants:[
      {name:"Couronne de piliers",mechanic:"Des piliers de glace surgissent à intervalles réguliers et emprisonnent les ennemis.",visual:"Colonnes cristallines jaillissant en cercle."},
      {name:"Sanctuaire de glace",mechanic:"La zone devient un sanctuaire défensif qui protège le joueur.",visual:"Dôme glacé, runes protectrices et sol miroitant."},
      {name:"Prison de tempête",mechanic:"La glace immobilise les ennemis tandis que des éclairs frappent les cibles piégées.",visual:"Prismes de glace parcourus de foudre bleue."}
    ]},
    {id:"celestial-judgment",name:"Jugement céleste",element:"lightning",role:"ultimate",description:"Une tempête frappe successivement les ennemis avec des éclairs.",variants:[
      {name:"Réseau céleste",mechanic:"Chaque impact crée une zone électrique reliée aux autres impacts.",visual:"Réseau d'éclairs au sol entre les cibles."},
      {name:"Rayon de condamnation",mechanic:"Toute la tempête se concentre sur une cible prioritaire avec un rayon continu.",visual:"Colonne de foudre dense et stable."},
      {name:"Pluie de plasma",mechanic:"La tempête devient une pluie de plasma mêlant éclairs et explosions brûlantes.",visual:"Traits violets et impacts orange-blanc."}
    ]},
    {id:"dimensional-rift",name:"Déchirure dimensionnelle",element:"confluence",role:"ultimate",description:"Une faille attire les ennemis et libère des vagues d'énergie élémentaire.",variants:[
      {name:"Réseau de failles",mechanic:"Des failles secondaires apparaissent autour de la première et attaquent en relais.",visual:"Portails violets reliés par des filaments lumineux."},
      {name:"Portail dévoreur",mechanic:"La faille devient mobile, absorbe les projectiles ennemis et les renvoie en énergie.",visual:"Portail tournant avec anneau d'absorption."},
      {name:"Quatre dimensions",mechanic:"La faille alterne feu, givre, foudre et Confluence ; chaque vague applique un effet distinct.",visual:"Quatre phases colorées clairement séparées."}
    ]},
    {id:"primordial-annihilation",name:"Annihilation primordiale",element:"confluence",role:"ultimate",description:"Les trois énergies élémentaires sont consommées pour une détonation combinée.",variants:[
      {name:"Triple détonation",mechanic:"Trois explosions successives se déclenchent : feu, givre puis foudre.",visual:"Trois anneaux d'onde aux couleurs élémentaires."},
      {name:"Sphère de concentration",mechanic:"Les énergies s'accumulent dans une sphère qui grossit avant d'exploser.",visual:"Sphère instable entourée de runes et de particules."},
      {name:"Énergie primordiale",mechanic:"Les éléments fusionnent et transforment temporairement les attaques suivantes.",visual:"Noyau blanc-violet entouré des trois éléments."}
    ]}
  ]
};
