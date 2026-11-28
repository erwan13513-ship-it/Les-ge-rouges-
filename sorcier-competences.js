/* Catalogue de compétences du Sorcier — Les Âges Rouges
   Données de conception pour la refonte de l'arbre.
   Les bonus sont de simples statistiques ; une seule variante majeure est choisie.
*/
(function(){
  const skill = (id,name,category,element,path,description,passives,variants,combat) => ({
    id,name,category,element,path,description,
    passives:passives.map(([name,stat,value,label])=>({name,stat,value,label})),
    variants:{
      ascension:{type:"Ascension",...variants[0]},
      transmutation:{type:"Transmutation",...variants[1]},
      mutation:{type:"Mutation élémentaire",...variants[2]}
    },
    combat
  });
  const S = [
    // BASE — génèrent du mana
    skill("sor_base_fire","Étincelle ardente","base","fire",0,"Lance un petit projectile de feu qui génère du mana.",[["Puissance","damage",8,"% dégâts"],["Vélocité","projectileSpeed",10,"% vitesse du projectile"]],[
      {name:"Braise dévorante",description:"Le projectile éclate à l'impact et laisse une petite zone brûlante."},
      {name:"Fournaise intérieure",description:"Le projectile devient une courte aura de flammes autour du Sorcier."},
      {name:"Éclat de givre",description:"Le projectile devient glacé et ralentit sa cible."}
    ],{kind:"projectile",resource:"generate",damage:"low"}),
    skill("sor_base_ice","Éclat glacial","base","ice",1,"Tire un petit fragment de glace qui génère du mana.",[["Puissance","damage",8,"% dégâts"],["Précision","criticalChance",3,"% chance critique"]],[
      {name:"Pointe du blizzard",description:"L'éclat se divise en plusieurs fragments à l'impact."},
      {name:"Prison cristalline",description:"Le fragment crée une petite zone glacée au sol."},
      {name:"Éclair incandescent",description:"Le fragment devient électrique et peut ricocher."}
    ],{kind:"projectile",resource:"generate",damage:"low"}),
    skill("sor_base_lightning","Arc électrique","base","lightning",2,"Envoie une décharge courte qui génère du mana.",[["Puissance","damage",8,"% dégâts"],["Conduction","chainTargets",1,"cible supplémentaire"]],[
      {name:"Chaîne céleste",description:"La décharge rebondit sur davantage d'ennemis."},
      {name:"Champ magnétique",description:"La décharge devient une petite zone électrique autour du Sorcier."},
      {name:"Flamme vive",description:"La décharge devient une flamme qui brûle la cible."}
    ],{kind:"chain",resource:"generate",damage:"low"}),
    skill("sor_base_arcane","Onde arcanique","base","confluence",3,"Envoie une onde magique qui génère du mana.",[["Puissance","damage",8,"% dégâts"],["Portée","range",10,"% portée"]],[
      {name:"Résonance primordiale",description:"L'onde traverse les ennemis et libère une seconde impulsion."},
      {name:"Sceau instable",description:"L'onde devient un sceau posé au sol qui explose au contact."},
      {name:"Onde de givre",description:"L'onde devient glaciale et ralentit les ennemis traversés."}
    ],{kind:"wave",resource:"generate",damage:"low"}),
    skill("sor_base_dual","Double impulsion","base","confluence",0,"Envoie deux petites décharges successives et génère du mana.",[["Puissance","damage",8,"% dégâts"],["Vitesse","castSpeed",5,"% vitesse d'incantation"]],[
      {name:"Écho des éléments",description:"Chaque impulsion déclenche un impact élémentaire différent."},
      {name:"Vortex répétitif",description:"Les impulsions créent un petit tourbillon qui attire les ennemis."},
      {name:"Double combustion",description:"Les deux impulsions deviennent des projectiles de feu."}
    ],{kind:"double-projectile",resource:"generate",damage:"low"}),

    // PRINCIPALES — consomment du mana
    skill("sor_core_fireball","Boule de feu","core","fire",0,"Lance une sphère enflammée qui explose à l'impact.",[["Puissance","damage",8,"% dégâts"],["Critique","criticalDamage",10,"% dégâts critiques"]],[
      {name:"Soleil déchaîné",description:"La sphère devient une mini-étoile qui libère plusieurs vagues d'explosion."},
      {name:"Pluie météorique",description:"La compétence devient une pluie de météores sur une vaste zone."},
      {name:"Boule de givre",description:"La sphère devient glaciale et éclate en cristaux qui ralentissent."}
    ],{kind:"explosion-projectile",resource:"spend",damage:"high"}),
    skill("sor_core_ice_lance","Lance de glace","core","ice",1,"Projette une longue lance glacée qui transperce les ennemis.",[["Puissance","damage",8,"% dégâts"],["Vitesse","projectileSpeed",10,"% vitesse du projectile"]],[
      {name:"Lance du zéro absolu",description:"La lance traverse les ennemis puis libère une explosion cristalline."},
      {name:"Épines polaires",description:"La lance devient une série de pics qui surgissent sous les cibles."},
      {name:"Lance de foudre",description:"La lance devient électrique et frappe plusieurs ennemis alignés."}
    ],{kind:"piercing-projectile",resource:"spend",damage:"high"}),
    skill("sor_core_beam","Rayon foudroyant","core","lightning",2,"Maintient un rayon électrique sur les ennemis.",[["Puissance","damage",8,"% dégâts"],["Vitesse","castSpeed",5,"% vitesse d'incantation"]],[
      {name:"Jugement céleste",description:"Le rayon frappe plusieurs cibles proches avec des éclairs secondaires."},
      {name:"Tempête statique",description:"Le rayon devient un orage stationnaire qui frappe continuellement."},
      {name:"Rayon solaire",description:"Le faisceau devient un rayon de feu concentré."}
    ],{kind:"beam",resource:"spend",damage:"high"}),
    skill("sor_core_confluence","Trait de confluence","core","confluence",3,"Lance un trait d'énergie instable qui traverse les adversaires.",[["Puissance","damage",8,"% dégâts"],["Critique","criticalDamage",10,"% dégâts critiques"]],[
      {name:"Fracture primordiale",description:"Le trait se divise en quatre impacts élémentaires."},
      {name:"Faille dimensionnelle",description:"Le trait ouvre une brèche qui attire puis frappe les ennemis."},
      {name:"Trait incandescent",description:"Le trait devient un rayon de feu perforant."}
    ],{kind:"piercing-projectile",resource:"spend",damage:"high"}),
    skill("sor_core_blades","Lames élémentaires","core","confluence",0,"Projette plusieurs lames magiques tournoyantes.",[["Puissance","damage",8,"% dégâts"],["Nombre","projectileCount",1,"lame supplémentaire"]],[
      {name:"Danse des quatre éléments",description:"Les lames changent d'élément à chaque rotation."},
      {name:"Couronne tranchante",description:"Les lames orbitent autour du Sorcier et frappent les ennemis proches."},
      {name:"Lames de givre",description:"Toutes les lames deviennent glaciales et ralentissent les cibles."}
    ],{kind:"orbiting-blades",resource:"spend",damage:"high"}),

    // DEFENSIVES
    skill("sor_def_fire","Bouclier ardent","defense","fire",1,"Déploie une barrière de flammes protectrice.",[["Durée","duration",10,"% durée"],["Recharge","cooldownReduction",5,"% réduction de recharge"]],[
      {name:"Égide du phénix",description:"La barrière libère une vague de feu lorsqu'elle disparaît."},
      {name:"Renaissance flamboyante",description:"La protection restitue une partie des points de vie à sa fin."},
      {name:"Bouclier de glace",description:"La barrière devient une protection glaciale qui ralentit les ennemis proches."}
    ],{kind:"barrier",resource:"cooldown",damage:"utility"}),
    skill("sor_def_crystal","Armure de cristal","defense","ice",2,"Enveloppe le Sorcier d'une armure glacée.",[["Protection","barrierStrength",10,"% absorption"],["Durée","duration",10,"% durée"]],[
      {name:"Forteresse polaire",description:"L'armure libère des éclats lorsqu'elle encaisse des attaques."},
      {name:"Prison de cristal",description:"Le Sorcier se protège dans un cristal pendant un court instant."},
      {name:"Armure électrique",description:"L'armure renvoie des décharges aux attaquants."}
    ],{kind:"armor",resource:"cooldown",damage:"utility"}),
    skill("sor_def_transfer","Transfert fulgurant","defense","lightning",3,"Téléporte rapidement le Sorcier sur une courte distance.",[["Recharge","cooldownReduction",5,"% réduction de recharge"],["Distance","teleportDistance",10,"% distance"]],[
      {name:"Déplacement quantique",description:"Le départ laisse une décharge électrique derrière le Sorcier."},
      {name:"Échange dimensionnel",description:"Échange la position du Sorcier avec celle d'un ennemi ciblé."},
      {name:"Pas de braise",description:"Le déplacement laisse une traînée de feu."}
    ],{kind:"teleport",resource:"cooldown",damage:"utility"}),
    skill("sor_def_sphere","Sphère arcanique","defense","confluence",0,"Crée une sphère protectrice autour du Sorcier.",[["Protection","barrierStrength",10,"% absorption"],["Recharge","cooldownReduction",5,"% réduction de recharge"]],[
      {name:"Dôme des anciens",description:"La sphère protège également les alliés proches."},
      {name:"Renversement mystique",description:"Une partie des dégâts absorbés est convertie en énergie magique."},
      {name:"Sphère de foudre",description:"La sphère électrise les ennemis qui la touchent."}
    ],{kind:"dome",resource:"cooldown",damage:"utility"}),
    skill("sor_def_wall","Rempart élémentaire","defense","confluence",1,"Déploie un mur magique qui bloque les attaques.",[["Durée","duration",10,"% durée"],["Recharge","cooldownReduction",5,"% réduction de recharge"]],[
      {name:"Mur des quatre royaumes",description:"Le mur alterne entre feu, glace et foudre."},
      {name:"Prison murale",description:"Le mur enferme temporairement les ennemis dans une enceinte magique."},
      {name:"Rempart de givre",description:"Le mur devient glacé et ralentit les adversaires."}
    ],{kind:"wall",resource:"cooldown",damage:"utility"}),

    // CONJURATIONS
    skill("sor_sum_familiar","Familier flamboyant","conjuration","fire",2,"Invoque un esprit de feu qui attaque automatiquement les ennemis.",[["Dégâts","damage",8,"% dégâts du familier"],["Durée","duration",10,"% durée"]],[
      {name:"Phénix miniature",description:"Le familier renaît une fois après sa disparition."},
      {name:"Esprit incendiaire",description:"Le familier devient une créature explosive qui fonce sur les ennemis."},
      {name:"Familier glacial",description:"Le familier ralentit ses adversaires avec ses attaques."}
    ],{kind:"summon-familiar",resource:"cooldown",damage:"summon"}),
    skill("sor_sum_blades","Lames de glace","conjuration","ice",3,"Invoque des lames flottantes qui attaquent automatiquement.",[["Dégâts","damage",8,"% dégâts des lames"],["Nombre","projectileCount",1,"lame supplémentaire"]],[
      {name:"Arsenal du blizzard",description:"Invoque davantage de lames qui attaquent en cercle."},
      {name:"Épée polaire",description:"Les lames fusionnent en une grande épée autonome."},
      {name:"Lames électriques",description:"Les coups déclenchent des arcs électriques."}
    ],{kind:"summon-blades",resource:"cooldown",damage:"summon"}),
    skill("sor_sum_storm","Surfoudre rayante","conjuration","lightning",0,"Invoque une entité électrique qui projette des éclairs.",[["Dégâts","damage",8,"% dégâts de l'entité"],["Vitesse","attackSpeed",8,"% vitesse d'attaque"]],[
      {name:"Rapace du tonnerre",description:"L'entité plonge sur les ennemis et provoque des décharges en chaîne."},
      {name:"Orage vivant",description:"L'entité devient un nuage électrique qui suit le Sorcier."},
      {name:"Rapace de braise",description:"L'entité devient une créature de feu qui embrase les cibles."}
    ],{kind:"summon-storm",resource:"cooldown",damage:"summon"}),
    skill("sor_sum_hydra","Hydre mystique","conjuration","confluence",1,"Invoque une hydre qui attaque à distance.",[["Dégâts","damage",8,"% dégâts de l'hydre"],["Durée","duration",10,"% durée"]],[
      {name:"Hydre primordiale",description:"L'hydre gagne une tête supplémentaire liée à un élément."},
      {name:"Serpent des failles",description:"L'hydre surgit de portails autour des ennemis."},
      {name:"Hydre de givre",description:"Ses têtes projettent des souffles glacés."}
    ],{kind:"summon-hydra",resource:"cooldown",damage:"summon"}),
    skill("sor_sum_golem","Golem runique","conjuration","confluence",2,"Invoque un gardien runique qui combat au corps à corps.",[["Dégâts","damage",8,"% dégâts du golem"],["Résistance","summonHealth",10,"% points de vie"]],[
      {name:"Colosse des origines",description:"Le golem grandit et frappe le sol pour créer des ondes."},
      {name:"Gardien immobile",description:"Le golem devient une tourelle magique qui tire à distance."},
      {name:"Golem de lave",description:"Le golem devient incandescent et brûle les ennemis proches."}
    ],{kind:"summon-golem",resource:"cooldown",damage:"summon"}),

    // MAÎTRISES
    skill("sor_master_volcano","Explosion volcanique","mastery","fire",3,"Provoque une explosion de feu dans une zone ciblée.",[["Rayon","area",8,"% rayon"],["Dégâts","damage",8,"% dégâts"]],[
      {name:"Cœur du volcan",description:"Le sol s'ouvre et plusieurs explosions successives jaillissent."},
      {name:"Éruption permanente",description:"Crée un cratère qui projette continuellement de la lave."},
      {name:"Explosion polaire",description:"Libère une immense vague de glace."}
    ],{kind:"area-explosion",resource:"spend",damage:"area"}),
    skill("sor_master_blizzard","Blizzard","mastery","ice",2,"Déchaîne une tempête de glace sur une vaste zone.",[["Rayon","area",8,"% rayon"],["Durée","duration",10,"% durée"]],[
      {name:"Hiver éternel",description:"La tempête fait surgir des pics de glace."},
      {name:"Glacier rampant",description:"Une masse de glace avance lentement sur le champ de bataille."},
      {name:"Tempête de braises",description:"La tempête devient une pluie de feu."}
    ],{kind:"area-storm",resource:"spend",damage:"area"}),
    skill("sor_master_thunder","Orage dévastateur","mastery","lightning",1,"Fait tomber de nombreux éclairs dans une zone.",[["Dégâts","damage",8,"% dégâts"],["Rayon","area",8,"% rayon"]],[
      {name:"Courroux des cieux",description:"Un éclair colossal frappe après les premières décharges."},
      {name:"Tempête orbitale",description:"Des orbes électriques tournent autour du Sorcier."},
      {name:"Pluie météorique",description:"Les éclairs deviennent des météores enflammés."}
    ],{kind:"area-lightning",resource:"spend",damage:"area"}),
    skill("sor_master_vortex","Vortex dimensionnel","mastery","confluence",0,"Aspire les ennemis dans une zone magique avant de les frapper.",[["Aspiration","pullStrength",10,"% attraction"],["Rayon","area",8,"% rayon"]],[
      {name:"Singularité primordiale",description:"Le vortex absorbe les projectiles et libère une explosion."},
      {name:"Déchirure du monde",description:"Plusieurs failles frappent simultanément."},
      {name:"Vortex glacial",description:"Le vortex ralentit fortement les ennemis aspirés."}
    ],{kind:"vortex",resource:"spend",damage:"area"}),
    skill("sor_master_cataclysm","Cataclysme élémentaire","mastery","confluence",2,"Libère une explosion mêlant les quatre éléments.",[["Dégâts","damage",8,"% dégâts"],["Rayon","area",8,"% rayon"]],[
      {name:"Apocalypse des éléments",description:"Quatre explosions élémentaires se combinent en une déflagration finale."},
      {name:"Fusion primordiale",description:"Concentre les éléments en un rayon dévastateur."},
      {name:"Cataclysme incandescent",description:"Concentre l'énergie dans une gigantesque explosion de feu."}
    ],{kind:"elemental-cataclysm",resource:"spend",damage:"area"}),

    // ULTIMES
    skill("sor_ult_phoenix","Avatar du phénix","ultimate","fire",0,"Invoque un immense phénix qui ravage le champ de bataille.",[["Dégâts","damage",8,"% dégâts"],["Durée","duration",10,"% durée"]],[
      {name:"Soleil renaissant",description:"Le phénix traverse l'arène et laisse une immense traînée enflammée."},
      {name:"Cendres immortelles",description:"Le Sorcier devient temporairement un avatar de feu."},
      {name:"Avatar du blizzard",description:"Le phénix devient un immense esprit de glace."}
    ],{kind:"ultimate-phoenix",resource:"cooldown",damage:"ultimate"}),
    skill("sor_ult_dragon","Dragon du givre","ultimate","ice",1,"Invoque un dragon de glace qui souffle sur une vaste zone.",[["Dégâts","damage",8,"% dégâts"],["Rayon","area",8,"% rayon"]],[
      {name:"Dragon du zéro absolu",description:"Son souffle gèle le terrain et provoque une explosion cristalline."},
      {name:"Âge de glace",description:"Transforme une grande partie de l'arène en territoire gelé."},
      {name:"Dragon de foudre",description:"Le dragon devient électrique et traverse les ennemis."}
    ],{kind:"ultimate-dragon",resource:"cooldown",damage:"ultimate"}),
    skill("sor_ult_thunder","Incarnation du tonnerre","ultimate","lightning",2,"Le Sorcier devient une entité électrique qui déchaîne les éclairs.",[["Dégâts","damage",8,"% dégâts"],["Durée","duration",10,"% durée"]],[
      {name:"Dieu de la tempête",description:"Chaque déplacement déclenche des éclairs autour du Sorcier."},
      {name:"Jugement des cieux",description:"Concentre toute la puissance dans un éclair gigantesque."},
      {name:"Incarnation solaire",description:"Le Sorcier devient une entité de feu qui libère des vagues brûlantes."}
    ],{kind:"ultimate-avatar",resource:"cooldown",damage:"ultimate"}),
    skill("sor_ult_rift","Rupture dimensionnelle","ultimate","confluence",3,"Déchire l'espace et frappe les ennemis avec une énergie venue d'ailleurs.",[["Dégâts","damage",8,"% dégâts"],["Recharge","cooldownReduction",5,"% réduction de recharge"]],[
      {name:"Effondrement des dimensions",description:"Plusieurs réalités se superposent et explosent."},
      {name:"Exil dimensionnel",description:"Enferme les ennemis dans une dimension instable avant de les renvoyer."},
      {name:"Rupture de feu",description:"La faille libère une gigantesque vague de flammes."}
    ],{kind:"ultimate-rift",resource:"cooldown",damage:"ultimate"}),
    skill("sor_ult_apotheosis","Apothéose primordiale","ultimate","confluence",3,"Libère toute la puissance des quatre éléments dans une attaque ultime.",[["Dégâts","damage",8,"% dégâts"],["Critique","criticalDamage",10,"% dégâts critiques"]],[
      {name:"Éveil des quatre souverains",description:"Quatre entités élémentaires attaquent successivement les ennemis."},
      {name:"Fusion absolue",description:"Concentre les quatre éléments dans une forme temporaire surpuissante."},
      {name:"Apothéose du chaos",description:"Les quatre éléments deviennent une explosion arcanique instable."}
    ],{kind:"ultimate-confluence",resource:"cooldown",damage:"ultimate"})
  ];
  const byId=Object.fromEntries(S.map(x=>[x.id,x]));
  window.SORCERER_SKILLS=Object.freeze(S.map(x=>Object.freeze(x)));
  window.SORCERER_SKILL_BY_ID=Object.freeze(byId);
  window.SORCERER_SKILL_META=Object.freeze({
    version:1,
    categories:[
      {id:"base",label:"Compétences de base",ring:1,resource:"Génèrent du mana"},
      {id:"core",label:"Compétences principales",ring:2,resource:"Consomment du mana"},
      {id:"defense",label:"Compétences défensives",ring:3,resource:"Recharge"},
      {id:"conjuration",label:"Conjurations",ring:4,resource:"Recharge, sans coût en mana"},
      {id:"mastery",label:"Maîtrises",ring:5,resource:"Coût élevé en mana"},
      {id:"ultimate",label:"Ultimes",ring:6,resource:"Longue recharge"}
    ],
    paths:[
      {id:"fire",label:"Feu",quadrant:0},
      {id:"ice",label:"Givre",quadrant:1},
      {id:"lightning",label:"Foudre",quadrant:2},
      {id:"confluence",label:"Confluence",quadrant:3}
    ],
    passiveChoicesPerSkill:2,
    finalVariantChoices:3,
    finalVariantSelectionLimit:1
  });
})();
