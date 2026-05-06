export const pillarsData = {
  sleep: {
    title: "Sommeil",
    tagline: "Le fondement invisible de la performance",
    heroImage: "/images/b36a7d47c_generated_ce746b24.png",
    color: "from-indigo-900/80 to-indigo-800/60",
    topics: [
      {
        id: "cycles",
        title: "Cycles & Rythmes",
        tagline: "Comprendre l'architecture du sommeil",
        emoji: "🌙",
        principles: [
          { title: "L'Architecture d'un Cycle", description: "Un cycle dure ~90 min et comprend 4 phases : N1 (endormissement), N2 (sommeil léger), N3 (sommeil profond) et REM (paradoxal). Le profond domine les premières heures, le REM les dernières.", details: "Le sommeil profond (N3) est crucial pour la récupération physique, la sécrétion d'hormone de croissance et la consolidation mémorielle déclarative. Le REM est essentiel pour la régulation émotionnelle, la créativité et la mémoire procédurale.", tip: "Planifie 5 cycles (7h30) ou 6 cycles (9h) depuis l'endormissement + 15 min. Se réveiller en phase N2 = réveil facile. En N3 = inertie de sommeil (grosse fatigue).", science: "Matthew Walker (UC Berkeley, 'Why We Sleep') : réduire le REM même d'une nuit augmente l'anxiété de 30% le lendemain et réduit la consolidation mémorielle de 40%." },
          { title: "Le Rythme Circadien", description: "L'horloge biologique interne qui régit l'alternance veille/sommeil sur 24h. Pilotée par la lumière.", details: "Le noyau suprachiasmatique (SCN) dans l'hypothalamus est l'horloge maîtresse. Il coordonne toutes les horloges périphériques (foie, cœur, muscles). La lumière bleue du matin synchronise cette horloge. Sans signal lumineux, le cycle naturel est d'environ 24h15.", tip: "Expose-toi à la lumière naturelle dans les 30 premières minutes du réveil, 10-15 minutes minimum. Le soir : filtre bleu sur tous les écrans après 20h, ou lunettes orange.", science: "Études circadiennes de Jeffrey Hall, Michael Rosbash et Michael Young (Prix Nobel 2017) : perturbation de l'horloge circadienne = +20% risque cancers, +40% maladies métaboliques." },
          { title: "La Pression Homéostatique", description: "L'accumulation d'adénosine pendant l'éveil crée la 'pression de sommeil'. Plus tu es éveillé longtemps, plus tu as sommeil.", details: "L'adénosine est un sous-produit du métabolisme neuronal qui s'accumule pendant l'éveil. La caféine fonctionne en bloquant ses récepteurs — elle ne supprime pas la fatigue, elle la masque. Quand la caféine est métabolisée, l'adénosine accumulée se lie soudainement : le fameux 'crash'.", tip: "Évite la caféine après 14h (demi-vie de 5-7h). Une cafféine à 15h = encore 50% dans ton sang à 22h, réduisant le sommeil profond de 20% même si tu t'endors normalement.", science: "Landolt et al. (University of Zürich) : la caféine prise 6h avant le coucher réduit le temps de sommeil total d'une heure, sans que le sujet s'en rende compte subjectivement." },
          { title: "Les Chronotypes", description: "Ton type biologique : lève-tôt (alouette), couche-tard (hibou) ou intermédiaire. Génétiquement déterminé à 50%.", details: "Environ 40% de la population est intermédiaire, 30% alouette, 30% hibou. Les hiboux forcés à se lever tôt cumulent une 'dette de sommeil sociale' chronique associée à de moins bonnes performances, plus d'anxiété et un risque cardiovasculaire accru. L'âge influence aussi : les adolescents sont naturellement plus hiboux (décalage de 2h vs adultes).", tip: "Identifie ton chronotype avec le questionnaire MCTQ (Munich Chronotype Questionnaire). Si tu es hibou : négocie tes horaires pour les décaler, maximise la luminothérapie le matin pour avancer ton horloge.", science: "Till Roenneberg (Ludwig-Maximilians-Universität) a documenté les chronotypes sur 55 000 personnes. Les hiboux ont une espérance de vie légèrement réduite s'ils sont forcés à des horaires matinaux chroniquement." }
        ]
      },
      {
        id: "environment",
        title: "Environnement & Température",
        tagline: "Le temple du sommeil",
        emoji: "🏠",
        principles: [
          { title: "La Température Optimale", description: "18-19°C est la plage idéale. La température corporelle doit baisser de 1-2°C pour initier le sommeil.", details: "Le corps initie le sommeil en transférant la chaleur des organes vers les extrémités (mains et pieds). C'est pourquoi les pieds froids gênent l'endormissement — le corps essaie de se refroidir mais la vasodilatation périphérique est entravée. Un bain/douche chaud 1-2h avant le coucher accélère ce processus.", tip: "Si tu ne peux pas refroidir la chambre : chaussettes légères pour faciliter la vasodilatation des pieds. Couette légère + pyjama plutôt que grosse couette sans rien.", science: "Czeisler et al. (Harvard) : les sujets dormant dans des chambres à 19°C passent 25% plus de temps en sommeil profond N3 que ceux à 24°C, pour la même durée totale." },
          { title: "L'Obscurité Totale", description: "Même la lumière perçue à travers les paupières fermées supprime la mélatonine.", details: "Les photorécepteurs rétiniens (cellules ganglionnaires à mélanopsine) détectent la lumière bleue et envoient des signaux directs au SCN, supprimant la mélatonine. La glande pinéale est extrêmement sensible — même 10 lux peuvent affecter la production. La chambre doit être suffisamment sombre pour ne pas voir ta main.", tip: "Rideaux occultants (black-out) ou masque de sommeil premium. Couvre les LEDs des chargeurs, télés en veille, box internet. Même une petite LED rouge peut réduire la mélatonine.", science: "Charles Czeisler : l'exposition à la lumière artificielle la nuit réduit la mélatonine de 50% et décale l'endormissement de 1h30 en moyenne." },
          { title: "L'Acoustique", description: "Le cerveau reste partiellement vigilant face aux sons même en sommeil. Le silence favorise le sommeil profond.", details: "L'amygdale, centre de la détection de menaces, reste active pendant le sommeil et peut déclencher des micro-éveils (< 15 secondes, non mémorisés mais fragmentant le sommeil profond). Les sons intermittents sont plus perturbateurs que les sons continus. Le bruit blanc ou rose masque les variations sonores.", tip: "Bouchons d'oreille (NRR 33 dB) ou bruit blanc/rose via application (Noisli, Rain Rain, White Noise). Le son rose (spectre équilibré) est associé à une augmentation du sommeil lent de 8% dans certaines études.", science: "Basner et al. (University of Pennsylvania) : le trafic nocturne dégrade la qualité du sommeil même sous les seuils de conscience. Les résidents près d'aéroports ont un sommeil profond réduit de 20%." },
          { title: "Le Matelas et l'Oreiller", description: "Le support physique influence directement la qualité du sommeil. Un bon matelas se rentabilise sur 10 ans.", details: "Un matelas inadapté génère des micro-éveils liés aux douleurs et à la compression des points de pression. La fermeté idéale dépend de la position et du morphotype. Oreiller trop haut ou trop bas = tension cervicale permanente, ronflements accrus.", tip: "Matelas : testez au moins 30 jours (la plupart des marques le proposent). Position latérale : matelas medium-ferme, oreiller épais. Dos : medium, oreiller fin. Ventre (déconseillé) : ferme, oreiller très fin ou aucun.", science: "Consumer Reports : 76% des personnes qui remplacent leur vieux matelas (>7 ans) rapportent une amélioration significative de la qualité du sommeil et de la récupération musculaire." }
        ]
      },
      {
        id: "rituals",
        title: "Rituels du Soir",
        tagline: "Programmer son cerveau pour le repos",
        emoji: "🕯️",
        principles: [
          { title: "La Règle 3-2-1", description: "3h avant : plus de repas lourd. 2h : plus de travail. 1h : plus d'écran. Protocole de décélération progressive.", details: "Le corps a besoin de 3h pour digérer un repas copieux — la digestion active empêche le sommeil profond. Arrêter le travail 2h avant permet au cortisol de redescendre. Supprimer les écrans 1h avant élimine la stimulation de la lumière bleue et du contenu excitant.", tip: "Remplace les écrans par : lecture papier, journal, méditation guidée (Calm, Headspace), étirements doux, bain chaud, conversation (sans téléphone).", science: "National Sleep Foundation : les individus qui suivent une routine pré-sommeil fixe s'endorment 18 minutes plus vite et ont 30% plus de sommeil profond que ceux sans rituel." },
          { title: "Le Journal du Soir", description: "Externaliser les pensées sur papier libère l'esprit de l'anxiété et programme le subconscient.", details: "L'effet Zeigarnik : les tâches non terminées restent en boucle dans le cortex préfrontal, empêchant la déconnexion. Écrire les tâches du lendemain les 'ferme' cognitivement. Les 3 gratitudes activent le cortex préfrontal gauche associé aux émotions positives.", tip: "Protocole en 5 min : 3 choses positives de la journée + 1 chose à améliorer + 3 tâches prioritaires pour demain. Livre recommandé : 'The 5-Minute Journal'.", science: "Michael Scullin (Baylor University) : écrire une liste de tâches à faire avant de dormir (pas les tâches accomplies) réduit le temps d'endormissement de 9 minutes en moyenne." },
          { title: "La Respiration 4-7-8", description: "Technique d'Andrew Weil qui active le système nerveux parasympathique en moins de 2 minutes.", details: "La rétention de souffle (7 secondes) stimule le nerf vague via la pression intrathoracique. L'expiration longue (8 secondes) active le barorécepteur carotidien, signalant au cerveau que tout est sûr. Cette séquence inverse la réponse stress et prépare physiologiquement le corps au sommeil.", tip: "Inspire par le nez 4 secondes → retiens 7 secondes → expire par la bouche 8 secondes (avec son). Répète 4 fois. À faire allongé, dans le noir. Commence à 4-4-4 si 4-7-8 est difficile.", science: "Plusieurs études sur la cohérence cardiaque montrent qu'une respiration lente (6 cycles/minute) augmente la variabilité de la fréquence cardiaque (HRV) — marqueur de récupération et de santé parasympathique." }
        ]
      },
      {
        id: "nutrition-sleep",
        title: "Nutrition & Sommeil",
        tagline: "Ce que tu manges influence comment tu dors",
        emoji: "🥗",
        principles: [
          { title: "Les Aliments Pro-Sommeil", description: "Certains aliments boostent la mélatonine, le tryptophane ou le magnésium — précurseurs du sommeil.", details: "Le tryptophane (acide aminé) est le précurseur de la sérotonine et de la mélatonine. Les cerises (griotte) contiennent de la mélatonine naturelle. Le magnésium active le GABA (neurotransmetteur calmant). Les glucides complexes facilitent l'absorption du tryptophane.", tip: "Collation pré-sommeil si besoin : 1 banane (tryptophane + magnésium) + quelques amandes. Ou yaourt grec + miel + graines de courge. Boire du jus de cerise griotte 1h avant le coucher (+34 min de sommeil dans des études).", science: "University of Pennsylvania : 10 jours de restriction alimentaire en magnésium réduisent le temps en sommeil profond de 4% et augmentent les éveils nocturnes de 27%." },
          { title: "L'Alcool et la Caféine", description: "Deux substances parmi les plus perturbateurs du sommeil, souvent sous-estimées.", details: "L'alcool semble facilitateur du sommeil (sédation) mais fragmente la deuxième moitié de nuit : supprime le REM, augmente les ronflements et les apnées. La caféine a une demi-vie de 5-7h : un café à 16h = 50% de caféine à 22h, réduisant le sommeil profond même si l'endormissement semble normal.", tip: "Règle : plus de caféine après 14h. Pas d'alcool 3h avant le coucher. Si tu consommes de l'alcool, compense en dormant plus longtemps — la quantité de REM ne sera pas récupérée à 100%.", science: "Matthew Walker : même une dose modérée d'alcool (2 verres) réduit le REM de 24% et la mémoire consolidée le lendemain de 40%. Les sujets sous alcool croient dormir mieux alors que leur sommeil est objectivement dégradé." }
        ]
      }
    ]
  },

  nutrition: {
    title: "Alimentation",
    tagline: "Le carburant de ta transformation",
    heroImage: "/images/7adf7d831_generated_aef130a2.png",
    color: "from-green-900/80 to-green-800/60",
    topics: [
      {
        id: "macros",
        title: "Macronutriments",
        tagline: "Protéines, glucides et lipides — les fondations",
        emoji: "⚖️",
        principles: [
          { title: "Les Protéines : Priorité Absolue", description: "2g par kg de poids corporel par jour pour maintenir et développer la masse musculaire.", details: "Les protéines sont les seuls macronutriments qui ne peuvent pas être synthétisés par le corps — elles doivent venir de l'alimentation. Elles sont essentielles à la construction et réparation musculaire, à la production d'enzymes et d'hormones, et au système immunitaire. L'effet thermique des protéines est de 25-30% (vs 3-8% pour les graisses).", tip: "Répartis sur 4-5 repas : 30-40g de protéines par repas maximise la synthèse protéique musculaire. Sources optimales : œufs, poulet, thon, fromage blanc, lentilles, edamame.", science: "Layman et al. (American Journal of Clinical Nutrition) : 2g/kg/j de protéines vs 0.8g/kg/j (RDA standard) = 2x plus de maintien de masse musculaire en restriction calorique." },
          { title: "Les Glucides : Timing et Qualité", description: "Ni ennemis ni sauveurs — c'est quand et lesquels qui compte.", details: "Les glucides complexes (indice glycémique bas) libèrent l'énergie progressivement, évitant les pics d'insuline. Les glucides simples (sucres) provoquent des spikes insuliniques suivis de crashes énergétiques. La sensibilité à l'insuline est maximale le matin et après l'exercice.", tip: "Glucides complexes : patate douce, riz complet, légumineuses, avoine, quinoa. Garde les glucides simples pour l'après-entraînement (fenêtre anabolique de 30-60 min). Évite les glucides raffinés au dîner.", science: "Augustin et al. (Lancet Public Health) : les régimes à faible indice glycémique réduisent le risque de diabète type 2 de 23%, maladies cardiovasculaires de 15%, toutes causes de 9%." },
          { title: "Les Lipides : Les Bons Gras", description: "Les graisses saines sont essentielles aux hormones, au cerveau et à la satiété.", details: "Le cerveau est composé à 60% de graisses. Les oméga-3 (EPA/DHA) sont anti-inflammatoires, soutiennent les membranes neuronales et réduisent le risque de dépression. Les graisses saturées sont neutres en quantités raisonnables. Les graisses trans (huile partiellement hydrogénée) sont à éliminer totalement.", tip: "Favorise : huile d'olive extra-vierge, avocat, noix, poissons gras (saumon, maquereau, sardines). Cible 1g/kg/j de lipides totaux. Complément d'oméga-3 (EPA+DHA) si peu de poissons gras dans l'alimentation.", science: "Meta-analyse de 30 études (Mozaffarian, NEJM) : remplacer 5% des calories saturées par des graisses polyinsaturées réduit les événements cardiovasculaires de 10%." }
        ]
      },
      {
        id: "microbiome",
        title: "Microbiome Intestinal",
        tagline: "Les 38 000 milliards de bactéries qui pilotent ta santé",
        emoji: "🧬",
        principles: [
          { title: "L'Axe Intestin-Cerveau", description: "80% de la sérotonine et 70% du système immunitaire sont dans l'intestin.", details: "L'intestin possède son propre système nerveux (système entérique, 500 millions de neurones) relié au cerveau via le nerf vague. Cette communication bidirectionnelle explique le 'ventre noué' en cas de stress et l'impact de l'alimentation sur l'humeur. Un microbiome déséquilibré (dysbiose) est associé à la dépression, l'anxiété, les maladies auto-immunes et l'obésité.", tip: "Objectif : 30 plantes différentes par semaine (fruits, légumes, légumineuses, herbes, épices, noix). La diversité végétale est le meilleur prédicteur de la diversité microbienne.", science: "Stanford Sonnenburg Lab (2021) : 10 semaines de régime riche en fermentés vs riche en fibres. Les fermentés augmentent la diversité microbienne de 19% et réduisent l'inflammation systémique de 21%." },
          { title: "Prébiotiques et Probiotiques", description: "Les prébiotiques nourrissent les bonnes bactéries. Les probiotiques les renforcent directement.", details: "Prébiotiques (fibres solubles) : inuline, FOS, pectine. Présents dans oignons, ail, poireaux, asperges, bananes vertes, avoine. Probiotiques : bactéries vivantes dans les aliments fermentés. Doivent atteindre l'intestin vivants — pas tous les yaourts y parviennent.", tip: "Chaque jour : 1 portion de fermenté (yaourt nature, kéfir, choucroute crue, kimchi, miso) + 1 portion de prébiotique (portion d'oignon, d'ail, de poireau). Ne pas chauffer les fermentés au-delà de 40°C (tue les bactéries).", science: "John Cryan (UCC Ireland) : supplémentation en probiotiques Lactobacillus helveticus + Bifidobacterium longum pendant 30 jours réduit les symptômes d'anxiété de 20% vs placebo." }
        ]
      },
      {
        id: "timing",
        title: "Timing Alimentaire",
        tagline: "Quand manger est aussi important que quoi manger",
        emoji: "⏰",
        principles: [
          { title: "Le Jeûne Intermittent 16:8", description: "Manger dans une fenêtre de 8h, jeûner 16h. Permet à l'autophagie de s'activer.", details: "Après 12-16h de jeûne, l'insuline est basse, le corps puise dans les réserves de graisses et active l'autophagie (recyclage cellulaire). Pas de perte musculaire si l'apport protéique est maintenu. La fenêtre de 8h concentre les repas sans restriction calorique nécessaire.", tip: "Exemple : dernier repas à 20h → premier repas à 12h (jeûne 16h). Café/thé noirs et eau acceptés pendant le jeûne. Commence par 12:12 si 16:8 est difficile. Ne pas jeûner les jours de compétition sportive intense.", science: "Yoshinori Ohsumi (Prix Nobel 2016 de médecine) pour sa découverte de l'autophagie. Longo et al. : le jeûne intermittent réduit les marqueurs d'inflammation (CRP, IL-6) et améliore la sensibilité à l'insuline." },
          { title: "Manger en Pleine Conscience", description: "Poser son téléphone, mâcher 20 fois, savourer. Transforme le repas en signal physiologique complet.", details: "Les signaux de satiété (leptine, CCK, GLP-1) mettent 15-20 minutes à atteindre le cerveau. Manger vite = toujours dépasser son seuil. Manger sans distraction améliore la digestion, réduit les troubles fonctionnels et augmente la satisfaction du repas sans augmenter les portions.", tip: "Règles : table sans écran, poser les couverts entre chaque bouchée, mâcher 20x, nommer mentalement les saveurs. Commencer par juste un repas par jour en pleine conscience.", science: "Albers et al. (Ohio State) : les personnes qui mangent lentement et consciemment consomment en moyenne 200 kcal de moins par repas et rapportent une plus grande satisfaction." }
        ]
      },
      {
        id: "hydration",
        title: "Hydratation",
        tagline: "La déshydratation silencieuse qui sabote tes performances",
        emoji: "💧",
        principles: [
          { title: "Les Besoins Hydriques Réels", description: "35 ml par kg de poids corporel par jour + 500 ml par heure d'exercice.", details: "La soif n'est pas un bon indicateur — elle apparaît seulement à 1-2% de déshydratation, niveau où les performances cognitives sont déjà réduites. L'urine doit être jaune pâle (pas incolore = trop d'eau, pas jaune foncé = déshydratation).", tip: "Méthode simple : 2 bouteilles de 750 ml sur le bureau. Bouteille 1 avant midi, bouteille 2 l'après-midi. Commence chaque matin par 500 ml d'eau à température ambiante (réhydrate après le jeûne nocturne).", science: "University of East London : 500 ml d'eau avant une tâche cognitive améliore les temps de réaction de 14% et réduit la fatigue mentale subjective de 23%." },
          { title: "Électrolytes et Minéraux", description: "L'eau seule ne suffit pas. Le sodium, potassium et magnésium sont essentiels à la contraction musculaire et nerveuse.", details: "Une transpiration excessive (sport, chaleur) épuise les électrolytes. Une hyponatrémie (trop d'eau sans sodium) peut être dangereuse. En cas d'effort > 60 min ou par forte chaleur, réhydrater avec une boisson contenant du sodium.", tip: "Après effort > 1h : eau + une pincée de sel marin + jus de citron + une cuillère de miel. Ou boisson isotonique maison. Pour le quotidien : aliments riches en potassium (banane, avocat) et magnésium (amandes, chocolat noir 70%).", science: "Convertino et al. (Military Medicine) : les pertes d'électrolytes réduisent les performances d'endurance de 10-15% bien avant que la fatigue musculaire s'installe." }
        ]
      }
    ]
  },

  work: {
    title: "Travail & Productivité",
    tagline: "L'art du travail profond et intentionnel",
    heroImage: "/images/ea1aeb23d_generated_371ac1bd.png",
    color: "from-slate-900/80 to-slate-700/60",
    topics: [
      {
        id: "deep-work",
        title: "Deep Work",
        tagline: "La concentration totale comme super-pouvoir",
        emoji: "🧠",
        principles: [
          { title: "La Définition du Deep Work", description: "Activité professionnelle dans un état de concentration sans distraction. Pousse les capacités cognitives à leur limite.", details: "Cal Newport distingue le Deep Work (concentration totale sur une tâche complexe) du Shallow Work (emails, réunions, tâches administratives — facilement réplicables). Dans l'économie du savoir, ceux qui peuvent faire du Deep Work de qualité sont rares et précieux.", tip: "Bloque 2-4h le matin pour ton unique tâche la plus importante. Protocole : ferme tout sauf ce dont tu as besoin, mets ton téléphone dans une autre pièce, active le mode avion.", science: "Gloria Mark (UC Irvine) : après une interruption, il faut en moyenne 23 min 15s pour retrouver le même niveau de concentration. Chaque notification coûte 23 minutes productives." },
          { title: "Les 4 Philosophies du Deep Work", description: "Monastique, bimodale, rythmique, journalistique. Choisis celle qui correspond à ta vie.", details: "Monastique : isolation totale pendant des semaines/mois. Bimodale : alternance périodes profondes et légères (1 semaine/mois par exemple). Rythmique : sessions quotidiennes fixes (7h-9h chaque matin). Journalistique : sessions dès qu'une fenêtre se présente (pour les pros aguerris).", tip: "Pour la majorité : la méthode Rythmique est la plus efficace. Mêmes heures chaque jour → le cerveau apprend à entrer en concentration rapidement. Après 4-6 semaines, les sessions deviennent plus profondes et plus faciles.", science: "Anders Ericsson (Florida State) sur la pratique délibérée : les experts pratiquent en sessions intenses de 90 min max, 4h/jour maximum. Au-delà, la qualité décline." }
        ]
      },
      {
        id: "prioritization",
        title: "Gestion des Priorités",
        tagline: "Faire les bonnes choses avant de les faire bien",
        emoji: "🎯",
        principles: [
          { title: "La Matrice Eisenhower", description: "4 quadrants : Urgent/Important, Non-urgent/Important, Urgent/Non-important, Non-urgent/Non-important.", details: "Q1 (urgent + important) : crises à gérer immédiatement. Q2 (non-urgent + important) : Deep Work, planification, développement — là où tu dois passer le plus de temps. Q3 (urgent + non-important) : déléguer. Q4 (non-urgent + non-important) : éliminer.", tip: "Chaque matin, classe tes tâches dans la matrice. Objectif : passer 60-70% du temps en Q2. La majorité des gens réagissent constamment en Q1 et Q3 sans jamais investir en Q2.", science: "Dwight Eisenhower : 'Ce qui est important n'est que rarement urgent, et ce qui est urgent n'est que rarement important.' Son système de priorités est encore enseigné dans les meilleures business schools mondiales." },
          { title: "Le MIT — Most Important Task", description: "Chaque matin : UNE tâche. Celle qui, si accomplie, ferait de la journée un succès.", details: "Brian Tracy dans 'Eat That Frog' : commence par ta tâche la plus difficile et importante. Le cerveau est en meilleure forme le matin (ressources cognitives pleines). Accomplir le MIT crée un élan positif pour le reste de la journée.", tip: "La veille : note ton MIT pour demain. Il doit être SPÉCIFIQUE et faisable en une session. Fais-le en PREMIER, avant les emails, les réseaux sociaux, les conversations. Sans exception.", science: "Roy Baumeister (la fatigue de décision, Florida State) : les ressources de contrôle cognitif s'épuisent avec les décisions. Réserve ton énergie décisionnelle pour ce qui compte." },
          { title: "La Règle 80/20 (Pareto)", description: "20% des actions produisent 80% des résultats. Identifie et concentre-toi sur ces 20%.", details: "Vilfredo Pareto observa en 1896 que 80% des terres italiennes appartenaient à 20% de la population. Ce rapport se retrouve partout : 20% des clients génèrent 80% du CA, 20% des habitudes produisent 80% des résultats.", tip: "Revue mensuelle : liste toutes tes activités et identifie celles qui génèrent le plus d'impact. Systématiquement délègue, externalise ou élimine les 80% à faible impact. Fais-le pour ton business, ta santé, tes relations.", science: "Richard Koch dans 'The 80/20 Principle' documente des centaines de cas d'application de la loi de Pareto dans les affaires, le temps et les ressources." }
        ]
      },
      {
        id: "energy",
        title: "Énergie & Performance",
        tagline: "Gérer son énergie, pas seulement son temps",
        emoji: "⚡",
        principles: [
          { title: "Les 4 Types d'Énergie", description: "Physique, émotionnelle, mentale, spirituelle. Toutes impactent la performance.", details: "Tony Schwartz dans 'The Power of Full Engagement' : la performance durable requiert de gérer les 4 sources d'énergie. La physique (sommeil, sport, nutrition) est la base. L'émotionnelle (relations, émotions positives). La mentale (concentration, créativité). La spirituelle (sens, valeurs).", tip: "Identifie tes 'energy drains' dans chaque catégorie. Une relation toxique épuise autant que le manque de sommeil. Un travail sans sens érode l'énergie spirituelle et réduit la performance.", science: "Schwartz & McCarthy (Harvard Business Review) : les employés qui pratiquent la récupération régulière (pauses, sport, rituels) sont 70% plus engagés et 2x plus productifs que ceux qui travaillent plus longtemps sans récupérer." },
          { title: "Le Cycle Ultradian", description: "90 minutes de haute performance, 15-20 minutes de récupération. Le rythme naturel du cerveau.", details: "Nathaniel Kleitman (découvreur du sommeil REM) a aussi découvert les oscillations ultradiaennes diurnes : le cerveau alterne entre haute alertness et basse alertness toutes les 90-120 minutes. Les signaux de basse alertness (bâillement, difficulté à se concentrer, envie de bouger) indiquent que le cycle se termine.", tip: "Programmez 3-4 blocs de 90 min par jour avec des pauses de 15-20 min entre chaque. Pendant les pauses : marche, étirements, alimentation légère — pas les réseaux sociaux (ça ne récupère pas).", science: "Peretz Lavie et Yaron Dagan : les performances cognitives mesurées toutes les 20 min suivent précisément les cycles ultradiens de 90 min, avec des pics et creux prévisibles." }
        ]
      },
      {
        id: "time-blocking",
        title: "Time-Blocking & Organisation",
        tagline: "Chaque heure a un rôle",
        emoji: "📅",
        principles: [
          { title: "Le Time-Blocking", description: "Allouer des créneaux spécifiques à chaque type de tâche. L'agenda comme outil stratégique.", details: "La planification temporelle réduit la fatigue de décision, protège le Deep Work des interruptions et rend visible la réalité du temps disponible. Contrairement à une to-do list, un agenda bloqué force les compromis réalistes.", tip: "Dimanche soir, bloque la semaine : Deep Work en matinées, shallow work en après-midi, sports et activités perso en soirée. Laisse 20% de marge pour les imprévus. Revue et ajustement chaque matin en 5 min.", science: "Cal Newport dans 'Deep Work' : les personnes qui planifient leur temps par blocs produisent en 4h de travail ce que d'autres produisent en 8-10h de travail fragmenté." },
          { title: "La Revue Hebdomadaire (GTD)", description: "30 minutes chaque dimanche pour analyser, planifier et se réaligner avec ses objectifs.", details: "David Allen dans 'Getting Things Done' : la revue hebdomadaire est le mécanisme de maintenance du système. Sans elle, les tâches s'accumulent, les objectifs se brouillent et l'anxiété monte. C'est le seul moment où tu travailles SUR ton système plutôt que DANS ton système.", tip: "Protocole en 5 étapes : 1) Capture tout ce qui flotte (inbox zero mental), 2) Clarifier en actions concrètes, 3) Organiser par projet/contexte, 4) Réviser projets et objectifs, 5) Choisir les 3 priorités de la semaine.", science: "Allen documente dans GTD que les personnes qui font une revue hebdomadaire systématique réduisent leur stress de travail de 40% et améliorent leur sentiment de contrôle de 60%." }
        ]
      }
    ]
  },

  confidence: {
    title: "Confiance en Soi",
    tagline: "Le pouvoir de la croyance intérieure",
    heroImage: "/images/27565d003_generated_18ef2ffc.png",
    color: "from-amber-900/80 to-amber-700/60",
    topics: [
      {
        id: "identity",
        title: "Identité & Croyances",
        tagline: "Tu deviens ce que tu crois être",
        emoji: "🧬",
        principles: [
          { title: "Les Croyances Limitantes", description: "80% de nos croyances sur nous-mêmes ont été formées avant 8 ans et ne nous appartiennent pas.", details: "Les croyances limitantes sont des histoires que nous répétons à propos de nous-mêmes, souvent héritées de parents, enseignants ou expériences traumatisantes précoces. 'Je suis nul en maths', 'Je ne mérite pas le succès', 'Je suis timide' — ce sont des programmes, pas des réalités.", tip: "Méthode Byron Katie ('The Work') : 1) Identifie la croyance ('Je ne suis pas assez bon'). 2) Est-ce vrai? 3) En es-tu absolument certain? 4) Comment te sens-tu avec cette croyance? 5) Qui serais-tu sans elle?", science: "Carol Dweck (Stanford) : les personnes avec un 'growth mindset' (croyance que les capacités se développent) obtiennent de meilleurs résultats à long terme et sont plus résilientes face à l'échec." },
          { title: "Les Habitudes Identitaires", description: "Chaque action est un vote pour la personne que tu veux devenir. L'identité précède les résultats.", details: "James Clear (Atomic Habits) : le changement le plus durable ne vient pas de l'objectif ('je veux perdre 10 kg') mais de l'identité ('je suis quelqu'un qui prend soin de son corps'). L'identité guide les décisions automatiquement, sans volonté.", tip: "Formule : 'Je suis le genre de personne qui ___.' Choisis 3 identités que tu veux incarner. Pour chacune, fais UNE action aujourd'hui qui la prouve. Répète. L'identité suit la preuve accumulée.", science: "Daphna Oyserman (USC) : les personnes qui s'identifient à un comportement le maintiennent 3x plus longtemps que celles qui se fixent seulement un objectif de résultat." }
        ]
      },
      {
        id: "emotional",
        title: "Intelligence Émotionnelle",
        tagline: "Comprendre et réguler ses émotions",
        emoji: "💙",
        principles: [
          { title: "La Régulation Émotionnelle", description: "Ne pas supprimer les émotions mais les reconnaître, les nommer et les traverser.", details: "La suppression émotionnelle (ne pas ressentir) augmente l'activation physiologique et les comportements impulsifs. La rumination (ressasser) entretient l'état négatif. La régulation efficace : reconnaître → nommer → comprendre → agir différemment.", tip: "Protocole RAIN (Tara Brach) : Reconnaître l'émotion. Accepter sa présence (sans jugement). Investiguer d'où elle vient. Nourrir avec de la compassion. Prend 3-5 min.", science: "James Gross (Stanford) : la suppression émotionnelle augmente les marqueurs cardiovasculaires de stress de 23% et réduit la mémoire des interactions sociales de 30%. La réévaluation cognitive les améliore." },
          { title: "L'Empathie comme Compétence", description: "L'empathie se développe. Elle est le fondement de toutes les relations de qualité.", details: "L'empathie cognitive (comprendre l'état d'un autre) est différente de l'empathie affective (ressentir). Les deux sont importantes. L'empathie cognitive se développe par la curiosité active, l'écoute profonde, la lecture (romans surtout) et la prise de perspective intentionnelle.", tip: "Pratique de l'écoute active : ne pas préparer ta réponse pendant que l'autre parle. Reformuler ce que tu as compris avant de répondre. Demander 'qu'est-ce que tu ressens par rapport à ça ?' plus souvent.", science: "C. Daniel Batson (Kansas) a documenté que l'empathie augmente les comportements prosociaux même envers des étrangers et est liée à la qualité des relations intimes et professionnelles." }
        ]
      },
      {
        id: "communication",
        title: "Prise de Parole & Communication",
        tagline: "L'art de te exprimer avec impact",
        emoji: "🎤",
        principles: [
          { title: "La Règle des 7-38-55", description: "Le message passe à 7% par les mots, 38% par le ton, 55% par le langage corporel.", details: "Albert Mehrabian (UCLA) : dans la communication émotionnelle, le non-verbal domine. Le ton de voix (débit, volume, pauses, intonation) et la posture corpo transmettent plus que les mots eux-mêmes. Un discours confiant dit à voix basse avec épaules voûtées envoie des signaux contradictoires.", tip: "Travaille les 3 niveaux : mots (clarté, vocabulaire riche), ton (variation, pauses stratégiques, volume), corps (contact visuel, posture ouverte, gestes délibérés). L'improvisation théâtrale est l'un des meilleurs entraînements.", science: "Nick Morgan (Harvard Communication) : les leaders percus comme les plus influents passent 60% plus de temps à pratiquer leur langage non-verbal que les managers moyens." },
          { title: "La Communication Non-Violente (CNV)", description: "Marshall Rosenberg : Observation + Sentiment + Besoin + Demande.", details: "La CNV évite les jugements et étiquettes qui créent la défense. Au lieu de 'Tu es toujours en retard' (jugement) : 'Quand tu arrives à 20h alors qu'on avait convenu 19h (observation), je me sens frustré et peu respecté (sentiment) parce que j'ai besoin de prévisibilité (besoin). Serais-tu d'accord pour me prévenir si tu es en retard ? (demande)'.", tip: "Commence par un seul élément : remplace les jugements par des observations factuelles. 'Il est irresponsable' → 'Il n'a pas rendu le rapport à la date convenue'. La précision remplace le jugement.", science: "Lydia Tanner (University of Illinois) : les couples pratiquant la CNV résolvent les conflits 50% plus vite et ont des niveaux de satisfaction relationnelle significativement plus élevés." }
        ]
      },
      {
        id: "resilience",
        title: "Résilience & Mindset",
        tagline: "Rebondir plus fort après chaque chute",
        emoji: "🌱",
        principles: [
          { title: "Le Growth Mindset vs Fixed Mindset", description: "Carol Dweck : croire que les capacités sont fixes ou développables change tout.", details: "Fixed mindset : les talents sont innés, les échecs prouvent une incapacité. Growth mindset : les capacités se développent par l'effort et les stratégies, les échecs sont des informations. Ces deux mindsets créent des réalités différentes car ils orientent les comportements.", tip: "Quand tu échoues, pose-toi ces questions au lieu de te juger : Qu'ai-je appris ? Quelle stratégie différente pourrais-je essayer ? Qui a réussi ce que j'essaie de faire et comment l'a-t-il fait ?", science: "Dweck (2006, 'Mindset') : les étudiants avec growth mindset améliorent leurs notes tout au long du lycée, alors que ceux avec fixed mindset stagnent ou régressent face aux défis." },
          { title: "La Stoïcisme Pratique", description: "Contrôle ce qui dépend de toi. Accepte ce qui n'en dépend pas. Dichotomie du contrôle d'Épictète.", details: "Les stoïciens distinguent ce qui 'dépend de nous' (nos actions, jugements, désirs) de ce qui 'ne dépend pas de nous' (le corps, la réputation, les résultats). Concentrer toute son énergie sur le premier et pratiquer l'acceptation du second réduit l'anxiété et augmente l'efficacité.", tip: "L'exercice préméditation negative (premeditatio malorum) : chaque matin, imagine brièvement ce qui pourrait mal se passer aujourd'hui et comment tu réagirais. Tu te prépares sans te démoraliser. Tu seras moins déstabilisé si ça arrive.", science: "Aaron Beck (père de la CBT) : les techniques cognitives modernes (restructuration cognitive) sont directement inspirées du stoïcisme. La CBT est l'intervention psychologique la mieux validée scientifiquement (>500 études)." }
        ]
      }
    ]
  },

  finance: {
    title: "Finance & Richesse",
    tagline: "Bâtir des actifs, pas juste un salaire",
    heroImage: "/images/8514b49bc_generated_image.png",
    color: "from-yellow-900/80 to-yellow-800/60",
    topics: [
      {
        id: "mindset",
        title: "Mindset Financier",
        tagline: "La richesse commence dans la tête",
        emoji: "💡",
        principles: [
          { title: "Actifs vs Passifs — La Règle d'Or", description: "Un actif met de l'argent dans ta poche. Un passif en retire. Accumule des actifs.", details: "Kiyosaki ('Rich Dad Poor Dad') : la plupart des gens croient que leur maison est un actif. Elle ne l'est pas — elle coûte de l'argent chaque mois (crédit, taxes, entretien). Un actif réel : immobilier locatif, actions (dividendes), entreprise, propriété intellectuelle. Le rich dad acheté des actifs. Le poor dad achetait des passifs en croyant acheter des actifs.", tip: "Chaque mois, liste tout ce qui génère du cash (actifs) vs tout ce qui en consomme (passifs). Objectif : augmenter la colonne actifs d'au moins un élément chaque trimestre, même modeste.", science: "National Bureau of Economic Research : 90% des millionaires ont bâti leur patrimoine via l'immobilier locatif et/ou les actions, pas uniquement via le salaire." },
          { title: "L'Intelligence Financière", description: "Comprendre la fiscalité, l'investissement, le crédit — des compétences, pas des talents.", details: "L'école n'enseigne pas l'éducation financière. Résultat : 80% des gens travaillent pour de l'argent au lieu de faire travailler l'argent pour eux. La fiscalité est l'outil le plus puissant des riches — pas l'évasion, mais l'optimisation légale via structures (holding, SCI, SARL de famille).", tip: "Commence par : 1) Lire 'Père Riche Père Pauvre' (Kiyosaki), 2) 'The Psychology of Money' (Housel), 3) 'I Will Teach You to Be Rich' (Sethi). 1h par semaine d'éducation financière = top 5% dans 3 ans.", science: "OCDE Financial Literacy Report : seulement 17% de la population adulte est considérée financièrement alphabétisée. Cette minorité réalise 80% des créations de patrimoine privé." },
          { title: "Le Paiement de Soi en Premier", description: "Dès réception du salaire, épargne/investis 20% AVANT de payer quoi que ce soit.", details: "La psychologie de l'argent : si tu épargnes ce qui reste, il ne reste souvent rien. Automatiser l'épargne supprime la décision et la tentation. Le montant importe moins que la régularité au départ.", tip: "Crée un virement automatique le jour du salaire vers un compte dédié. Commence à 10%, augmente de 1% par mois. Tu t'adaptes naturellement aux revenus disponibles.", science: "Richard Thaler (Prix Nobel économie) et le programme 'Save More Tomorrow' : l'automatisation de l'épargne augmente le taux de 3% à 14% en 4 ans sans effort de volonté." }
        ]
      },
      {
        id: "investing",
        title: "Investissement & Bourse",
        tagline: "Faire travailler l'argent pour toi",
        emoji: "📈",
        principles: [
          { title: "Les Intérêts Composés — La 8ème Merveille", description: "200€/mois à 7% depuis 25 ans = 528 000€ à 65 ans. Commencer à 35 ans = 243 000€.", details: "L'intérêt composé (intérêts sur les intérêts) est exponentiel. La variable cruciale est le TEMPS, pas le montant. Chaque décennie perdue peut se chiffrer en centaines de milliers d'euros. La règle de 72 : divise 72 par le taux de rendement annuel = nombre d'années pour doubler.", tip: "Commence immédiatement avec n'importe quel montant. ETF MSCI World à frais réduits (< 0.3% de TER) est l'outil le plus simple et performant. Dollar-cost averaging (montant fixe régulier) élimine le risque de timing.", science: "Vanguard Research : sur n'importe quelle période de 20 ans, un investisseur en index fund passif a surperformé 85% des gestionnaires actifs après frais." },
          { title: "Les ETF et l'Investissement Passif", description: "Investir dans des paniers d'actions diversifiés à frais minimes.", details: "Un ETF (Exchange Traded Fund) réplique un indice (MSCI World, S&P 500, CAC 40). Il offre une diversification instantanée sur des centaines d'entreprises pour quelques euros. Les frais de gestion (TER) sont 10-20x plus bas que les fonds actifs.", tip: "Pour débuter : ETF MSCI World (ex: iShares Core MSCI World UCITS, TER 0.20%) via PEA ou CTO. Investis chaque mois, réinvestis les dividendes, ne touche pas pendant 10 ans minimum.", science: "Fama et French (University of Chicago) : les marchés sont suffisamment efficaces pour que la gestion active ne compense pas ses frais sur le long terme pour 80-90% des fonds." },
          { title: "L'Immobilier Locatif", description: "Lever de la dette bonne (crédit immobilier) pour acheter des actifs qui génèrent des revenus.", details: "L'immobilier locatif permet d'utiliser l'effet levier (emprunter 80-90% du prix) pour acheter un actif qui génère des revenus > aux mensualités. Le locataire rembourse ton crédit. 20-25 ans plus tard, tu possèdes un bien sans avoir entièrement payé de ta poche.", tip: "Calcule le cash-flow avant tout achat : loyers perçus - (crédit + charges + taxe foncière + gestion + vacance locative 10%). Si cash-flow > 0, l'opération est rentable. Commence par le plus simple : petit appartement dans une ville étudiante.", science: "Banque de France : sur 30 ans, l'immobilier résidentiel français a délivré un rendement total (plus-value + loyers) comparable à celui des actions — avec moins de volatilité perçue." }
        ]
      },
      {
        id: "offer",
        title: "L'Offre Parfaite ($100M Offers)",
        tagline: "Créer une offre si bonne que les clients se sentent idiots de refuser",
        emoji: "💎",
        principles: [
          { title: "L'Équation de la Valeur", description: "Valeur = (Résultat désiré × Probabilité de succès) / (Délai × Effort).", details: "Alex Hormozi dans '$100M Offers' : pour maximiser la valeur perçue, tu dois simultanément augmenter le résultat rêvé et la probabilité de l'atteindre, tout en réduisant le délai et l'effort requis. La plupart des offres médiocres échouent sur les 4 variables en même temps.", tip: "Pour chaque offre : identifie le problème n°1 de ta cible. Promets un résultat spécifique et mesurable. Ajoute une garantie forte. Inclus des bonuses qui valent plus que le prix principal.", science: "Hormozi documente le passage de 1 500$ à 42 000$/mois par client en restructurant son offre sans changer le service. La transformation est de la perception de valeur, pas du service lui-même." },
          { title: "Le Pricing Premium", description: "Prix élevé = perception de valeur élevée. Ne concurrence jamais sur le prix.", details: "La psychologie du pricing : un prix bas signale une qualité basse. Les clients qui paient peu sont souvent les plus exigeants et les moins satisfaits (dissonance cognitive). Les clients premium sont plus engagés, obtiennent de meilleurs résultats et sont plus faciles à satisfaire.", tip: "Calcule ta valeur en ROI, pas en temps. Si tu aides un client à gagner 10 000€ supplémentaires, facturer 2 000€ est une évidence. Présente toujours la valeur AVANT le prix.", science: "Ariely et Shafir (Princeton/MIT) : dans une expérience sur les vins, le même vin dégusté à 45$ vs 5$ est noté significativement meilleur à 45$ — par les mêmes sujets, sans le savoir." },
          { title: "Les Garanties Audacieuses", description: "Retourner le risque vers le vendeur élimine la résistance à l'achat.", details: "La plupart des gens n'achètent pas à cause du risque perçu (perdre de l'argent sans résultat). Une garantie forte (remboursement intégral, résultat garanti ou argent rendu) signale une confiance dans le produit et transfère le risque. Elle augmente les conversions sans nécessairement augmenter les remboursements.", tip: "Créer une garantie forte : 'Si vous n'obtenez pas [résultat spécifique] en [délai], je vous rembourse intégralement.' Cela force aussi à créer un produit/service qui délivre vraiment.", science: "Cialdini dans 'Influence' : la réciprocité combinée à une garantie forte peut tripler les taux de conversion dans des tests A/B bien contrôlés." }
        ]
      },
      {
        id: "income-streams",
        title: "Revenus Multiples",
        tagline: "7 flux de revenus : la norme des millionnaires",
        emoji: "🌊",
        principles: [
          { title: "Les Types de Revenus", description: "Actif (temps contre argent), passif (argent sans temps), résiduel (travail initial répété).", details: "Revenu actif : salaire, freelance, consulting. Revenu passif : dividendes, loyers, royalties. Revenu résiduel : contenu en ligne, formations, livres (travail initial puis revenus continus). La liberté financière = revenus passifs > dépenses mensuelles.", tip: "Construis dans l'ordre : 1) Optimise le revenu actif (compétence → marché). 2) Épargne et investis (passif). 3) Développe des revenus résiduels (contenu, formation, système). Ne saute pas les étapes.", science: "Thomas Corley ('Rich Habits') : 65% des millionnaires auto-construits ont 3 flux de revenus ou plus, 45% en ont 4, 29% en ont 5 ou plus." },
          { title: "La Diversification Intelligente", description: "Ne pas mettre tous ses œufs dans le même panier — mais ne pas en avoir 50 non plus.", details: "La sur-diversification dilue les rendements. Buffett : la diversification est une protection contre l'ignorance. Pour ceux qui ne gèrent pas activement un portefeuille, les ETF diversifiés sont parfaits. Pour les entrepreneurs, la concentration sur 1-2 sources de revenus avant de diversifier est plus efficace.", tip: "Règle : maîtrise et stabilise une source avant d'en créer une nouvelle. Beaucoup de personnes ont 5 projets à 20% au lieu d'un à 100%. La profondeur avant la diversification.", science: "Nassim Taleb dans 'Antifragile' : la stratégie optimale n'est pas la diversification totale mais une combinaison 'barbell' : sécurité maximale pour 90% + prise de risque élevée pour 10%." }
        ]
      },
      {
        id: "psychology-money",
        title: "Psychologie de l'Argent",
        tagline: "Les biais cognitifs qui sabotent tes finances",
        emoji: "🧠",
        principles: [
          { title: "L'Inflation du Style de Vie", description: "Augmenter ses dépenses proportionnellement à ses revenus. Le piège le plus courant.", details: "Morgan Housel ('The Psychology of Money') : la plupart des gens gagnent plus chaque décennie et pourtant leur capacité d'épargne ne s'améliore pas. Chaque hausse de salaire est absorbée par des nouvelles dépenses (voiture plus récente, appartement plus grand, vacances plus chères).", tip: "Règle : quand ton revenu augmente, garde tes dépenses stables pendant 6 mois et investis la différence. Après, tu peux augmenter les dépenses si tu veux — mais commence par capitaliser sur la hausse.", science: "Kahneman et Deaton (Princeton) : au-delà de 75 000$/an (aux États-Unis), l'augmentation du revenu n'améliore plus le bonheur émotionnel quotidien — mais améliore le bien-être cognitif (sentiment de réussite)." },
          { title: "Le Biais du Présent", description: "Notre cerveau survalue le présent et sous-value le futur. L'ennemi de l'épargne.", details: "Économie comportementale : les gens préfèrent 100€ aujourd'hui à 110€ dans un mois, même si c'est financièrement irrationnel. Ce biais explique la difficulté à épargner pour la retraite, à refuser la gratification immédiate et à investir à long terme.", tip: "Contourner le biais présent : automatisation totale de l'épargne (hors de vue = hors d'esprit). Visualisation vivante du futur (imagine ta vie à 60 ans avec vs sans épargne). Récompense intermédiaire pour chaque jalon atteint.", science: "Thaler et Benartzi ('Save More Tomorrow') : l'automatisation de l'augmentation d'épargne lors des augmentations salariales contourne le biais du présent et augmente les taux d'épargne de 300-400%." }
        ]
      }
    ]
  },

  influence: {
    title: "Influence & Persuasion",
    tagline: "Les principes universels de Cialdini",
    heroImage: "/images/66d4937f5_generated_image.png",
    color: "from-rose-900/80 to-rose-800/60",
    topics: [
      {
        id: "cialdini-6",
        title: "Les 6 Principes de Cialdini",
        tagline: "Les déclencheurs universels de l'influence",
        emoji: "🎭",
        principles: [
          { title: "1. La Réciprocité", description: "Donne en premier. Les gens ressentent une obligation inconsciente de rendre — souvent au-delà de ce qui a été reçu.", details: "La réciprocité est le principe d'influence le plus universel et ancré biologiquement (toutes les cultures humaines connues le pratiquent). Quand quelqu'un nous donne quelque chose, notre cerveau enregistre une 'dette sociale' inconsciente créant une pression à rendre.", tip: "Dans les relations professionnelles : partage une info utile, présente deux personnes, offre ton aide sans agenda. La générosité stratégique crée du capital social qui se convertit en opportunités.", science: "Regan (Cornell, 1971) : les sujets ayant reçu une cannette de Coca d'un inconnu achetaient 2x plus de ses billets de loterie — même s'ils ne l'aimaient pas." },
          { title: "2. L'Engagement et Cohérence", description: "Une fois engagé publiquement, les gens cherchent à être cohérents avec cette position.", details: "Le principe de cohérence : les humains ressentent une pression psychologique forte à agir de façon cohérente avec leurs engagements passés. Un petit 'oui' initial (pied dans la porte) facilite un grand 'oui' ensuite.", tip: "Pour tes habitudes : annonce-les publiquement. Signe un contrat avec toi-même. Engage-toi sur des objectifs précis (pas vagues). Plus l'engagement est public et écrit, plus il est puissant.", science: "Freedman et Fraser (1966) : les personnes ayant accepté un petit autocollant 'Safe Driver' chez elles acceptaient 76% plus souvent un grand panneau encombrant dans leur jardin 2 semaines plus tard." },
          { title: "3. La Preuve Sociale", description: "Les gens regardent ce que font les autres pour décider quoi faire — surtout dans l'incertitude.", details: "La preuve sociale est un raccourci cognitif : si beaucoup de gens font X, c'est probablement la bonne chose. En incertitude, cet effet est démultiplié. Ratings, avis, témoignages, nombres de clients, mentions dans des médias.", tip: "Dans ta communication : témoignages spécifiques (pas généraux), nombre de clients/projets, logos de partenaires, études de cas. Entoure-toi de gens qui ont les comportements que tu veux adopter.", science: "Muzafer Sherif (1936) : dans l'incertitude perceptive, les individus adoptent les normes du groupe et les internalisent comme leurs propres croyances — même quand elles sont arbitraires." },
          { title: "4. L'Autorité", description: "Les gens suivent les experts et figures d'autorité — même de façon inappropriée.", details: "L'autorité se signale par des titres, des vêtements, des attributs visuels et le ton de voix. La compétence ne suffit pas — elle doit être visible et signalée. Dans un contexte d'influence, construire sa crédibilité est un prérequis.", tip: "Développe ton expertise dans un domaine précis. Partage tes connaissances (articles, talks, formations). Les certifications, mentions médias, recommandations de pairs construisent l'autorité sociale.", science: "Stanley Milgram (1961) : 65% des participants ont continué à appliquer des chocs électriques potentiellement mortels simplement parce qu'une figure d'autorité le demandait." },
          { title: "5. La Sympathie", description: "Nous disons oui plus facilement à ceux que nous apprécions. La connexion précède la persuasion.", details: "Les déclencheurs de sympathie : similarité (valeurs, origines, intérêts partagés), compliments sincères, familiarité (simple exposition), halo de beauté, association positive (messager = message).", tip: "Avant toute négociation : trouve 2-3 points communs avec l'interlocuteur. Utilise des compliments sincères et spécifiques. La connexion humaine n'est pas de la manipulation — c'est le fondement de toute relation.", science: "Forgas (UNSW) : les personnes physiquement attrayantes reçoivent des peines de prison 10-15% moins sévères et des salaires 10-12% plus élevés — effet halo de la sympathie généralisée." },
          { title: "6. La Rareté", description: "Les opportunités paraissent plus précieuses quand leur disponibilité est limitée.", details: "La perspective de perdre quelque chose est 2x plus motivante que de gagner quelque chose d'équivalent (Kahneman & Tversky). Deadlines, éditions limitées, places restantes — tous exploitent ce biais.", tip: "Pour valoriser ton temps et ton travail : ne te rends pas trop disponible. Travaille en batch (horaires de réponse fixes). Limite le nombre de clients simultanés. Ce que tu rends rare, tu le valorises.", science: "Kahneman et Tversky (1979, Prospect Theory) : la douleur de perdre 100€ est psychologiquement 2,5x plus intense que le plaisir de gagner 100€." }
        ]
      },
      {
        id: "pre-suasion",
        title: "Pré-Suasion",
        tagline: "Le 7ème principe : préparer le terrain avant d'influencer",
        emoji: "🎯",
        principles: [
          { title: "La Fenêtre d'Attention", description: "Ce sur quoi les gens sont focusés au moment de la décision influence disproportionnellement leur choix.", details: "Dans son livre 'Pre-Suasion' (2016), Cialdini introduit le concept : l'état mental précédant une demande est aussi important que la demande elle-même. Ce à quoi on pense juste avant d'évaluer quelque chose colore notre jugement.", tip: "Avant une présentation importante : commencer par une histoire émouvante ou un problème partagé. Avant une demande d'augmentation : montrer tes réussites récentes. Cadre le terrain mental avant de planter la graine.", science: "Cialdini et ses étudiants : les sujets invités à se souvenir d'un moment où ils aidaient quelqu'un avant d'être sollicités pour du bénévolat donnaient 2x plus de leur temps." },
          { title: "L'Ancrage Intentionnel", description: "Le premier chiffre mentionné dans une négociation ancre tout ce qui suit.", details: "L'effet d'ancrage (Tversky et Kahneman) : le premier nombre présenté influence disproportionnellement l'estimation finale. Dans les négociations, le premier à mentionner un prix ancre la discussion. Même les ancres absurdes ont un effet.", tip: "En négociation : annonce en premier avec un chiffre légèrement au-dessus de ton objectif. En vente : montre d'abord l'option la plus chère (effet de contraste favorable). En demande : commence par une demande plus grande que ce que tu veux (door-in-the-face).", science: "Northcraft et Neale (1987) : des agents immobiliers exposés à des prix catalogue élevés estimaient les maisons 11% plus cher que ceux exposés à des prix bas — même après avoir dit que le catalogue ne les influençait pas." }
        ]
      },
      {
        id: "negotiation",
        title: "Négociation",
        tagline: "L'art de créer des accords mutuellement bénéfiques",
        emoji: "🤝",
        principles: [
          { title: "Le Cadrage par la Perte", description: "Reformuler en termes de perte plutôt que de gain double l'impact psychologique.", details: "Kahneman et Tversky : les décisions sont influencées par la façon dont les options sont présentées. 'Cette stratégie vous fait gagner 50 000€' vs 'Sans cette stratégie, vous perdez 50 000€' — même fait, impact psychologique radicalement différent.", tip: "Dans tes communications commerciales : au lieu de 'nos services améliorent votre productivité de 20%', essaie 'sans optimisation, vous laissez 20% de productivité sur la table'. Le cadrage perte > gain.", science: "Thaler (Prix Nobel 2017) : le cadrage affecte les choix de manière systématique et prévisible dans des milliers d'expériences. Adopter le bon cadrage peut doubler les taux d'acceptation d'une offre." },
          { title: "L'Écoute Active en Négociation", description: "Chris Voss (ex-négociateur FBI) : l'écoute tactique est plus puissante que les arguments.", details: "Dans 'Never Split the Difference', Voss explique que la négociation n'est pas un débat logique mais une gestion émotionnelle. L'écoute active, les miroirs (répéter les 3 derniers mots), les labels ('On dirait que tu te sens frustré') désarment la résistance.", tip: "Techniques Voss : 1) Miroir — répète les 3 derniers mots avec une intonation montante. 2) Label — 'Il semble que...', 'On dirait que...' pour nommer les émotions. 3) Le 'Non' — faire dire non tranquillise et engage. 4) Silence — après une question difficile, attends.", science: "MRI studies on negotiation (UCLA) : les négociateurs qui pratiquent la validation émotionnelle (nommer les états de l'autre) activent moins l'amygdale de l'adversaire — réduisant la réactivité défensive." },
          { title: "La BATNA", description: "Best Alternative To a Negotiated Agreement : ta meilleure option si l'accord échoue.", details: "Roger Fisher et William Ury dans 'Getting to Yes' : ta force en négociation dépend directement de la qualité de ta BATNA. Celui qui a le plus besoin de l'accord est en position de faiblesse. Développer des alternatives améliore ta position même si tu ne les utilises jamais.", tip: "Avant toute négociation importante : liste toutes tes alternatives. Améliore-les avant de négocier. Ne révèle pas ta BATNA sauf si elle est très forte (ça ancre vers le bas). Connais aussi la BATNA probable de l'autre partie.", science: "Fisher, Ury et Patton dans 'Getting to Yes' (Harvard Negotiation Project) : les négociateurs qui connaissent leur BATNA avant de négocier obtiennent des accords 23% plus favorables en moyenne." }
        ]
      },
      {
        id: "storytelling",
        title: "Storytelling",
        tagline: "Les histoires persuadent là où les faits échouent",
        emoji: "📖",
        principles: [
          { title: "La Neuroscience du Storytelling", description: "Une bonne histoire synchronise littéralement le cerveau du narrateur et de l'auditeur.", details: "Uri Hasson (Princeton Neuroscience) : lors d'un récit, les cerveaux du narrateur et de l'auditeur montrent les mêmes patterns d'activation (neural coupling). Plus la synchronisation est forte, plus la compréhension et la mémorisation sont élevées. Les histoires activent l'insula (empathie) et le cortex moteur (préparation à l'action).", tip: "Structure universelle : 1) Situation (context), 2) Conflit (problème), 3) Résolution (leçon ou appel à l'action). Commence toujours par un personnage spécifique, pas une généralité.", science: "Stanford Graduate School of Business : dans une présentation avec statistiques + histoire, 63% retiennent l'histoire, 5% retiennent les statistiques. L'histoire est 12x plus mémorable que les faits seuls." },
          { title: "Le Voyage du Héros", description: "Joseph Campbell : la structure universelle de toutes les grandes histoires humaines.", details: "Campbell a identifié dans des centaines de cultures le même schéma narratif : Monde ordinaire → Appel à l'aventure → Refus → Mentor → Franchissement du seuil → Épreuves → Révélation → Retour transformé. Cette structure résonne universellement car elle reflète le processus de croissance humaine.", tip: "Pour tes présentations et pitches : toi ou ton client êtes le héros (pas ton produit). Ton produit est le guide/mentor. Le conflit est le problème du client. La résolution est la vie après ton produit/service.", science: "Christopher Vogler a adapté Campbell pour Hollywood ('The Writer's Journey'). Les 25 films les plus rentables de l'histoire suivent tous la structure du voyage du héros." }
        ]
      }
    ]
  },

  habits: {
    title: "Habitudes Atomiques",
    tagline: "Les 4 Lois du Changement — James Clear",
    heroImage: "/images/c503c6871_generated_image.png",
    color: "from-stone-800/80 to-stone-700/60",
    topics: [
      {
        id: "four-laws",
        title: "Les 4 Lois",
        tagline: "Signal, envie, réponse, récompense",
        emoji: "⚡",
        principles: []
      }
    ]
  }
};