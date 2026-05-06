// Universal habits pre-loaded into the calendar for all users
// These represent scientifically-backed habits recommended for optimal performance

export const UNIVERSAL_HABITS = [
  {
    id: "morning-routine",
    type: "morning",
    name: "Routine Matinale",
    emoji: "☀️",
    days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
    startTime: "07:00",
    endTime: "07:45",
    color: "#F97316",
    isHabit: true,
    detail: "20 pompes + 20 squats + 2 min de méditation + verre d'eau 500ml. La routine matinale programme le système nerveux pour une journée proactive. Même 15 minutes changent le niveau d'énergie de toute la journée."
  },
  {
    id: "hydration-morning",
    type: "habit",
    name: "Hydratation Réveil",
    emoji: "💧",
    days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
    startTime: "06:55",
    endTime: "07:00",
    color: "#06B6D4",
    isHabit: true,
    detail: "Boire 500 ml d'eau plate à température ambiante dès le réveil. Le corps est déshydraté après 7-8h de sommeil. Cette habitude simple booste le métabolisme de 24% dans l'heure qui suit et améliore la clarté mentale."
  },
  {
    id: "deep-work-morning",
    type: "work",
    name: "Deep Work Matinal",
    emoji: "🧠",
    days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"],
    startTime: "09:00",
    endTime: "11:00",
    color: "#7C3AED",
    isHabit: true,
    detail: "2h de travail concentré sans aucune interruption. Téléphone en mode avion, notifications désactivées. Le cerveau atteint son pic de performance cognitive entre 9h et 12h. C'est le créneau le plus précieux de la journée — protège-le."
  },
  {
    id: "sunlight-exposure",
    type: "morning",
    name: "Lumière Naturelle",
    emoji: "🌤️",
    days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
    startTime: "07:45",
    endTime: "08:00",
    color: "#EAB308",
    isHabit: true,
    detail: "10-15 minutes d'exposition à la lumière naturelle dans la demi-heure suivant le réveil. Synchronise l'horloge circadienne, booste la sérotonine et améliore la qualité du sommeil le soir même. En hiver : lampe de luminothérapie 10 000 lux."
  },
  {
    id: "lunch-walk",
    type: "habit",
    name: "Marche du Midi",
    emoji: "🚶",
    days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"],
    startTime: "12:45",
    endTime: "13:15",
    color: "#10B981",
    isHabit: true,
    detail: "20-30 minutes de marche après le déjeuner. Régule la glycémie post-prandiale (réduit le pic d'insuline de 30%), améliore la digestion, combat l'après-midi difficile et contribue aux 10 000 pas quotidiens recommandés."
  },
  {
    id: "afternoon-break",
    type: "rest",
    name: "Pause Active 16h",
    emoji: "⚡",
    days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"],
    startTime: "16:00",
    endTime: "16:15",
    color: "#8B5CF6",
    isHabit: true,
    detail: "15 min de pause active : 10 pompes + 30 squats + 2 min respiration 4-7-8. Rompt le cycle de baisse d'énergie de l'après-midi, réactive le système nerveux et prépare au second bloc de productivité (17h-19h)."
  },
  {
    id: "reading",
    type: "reading",
    name: "Lecture Quotidienne",
    emoji: "📚",
    days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
    startTime: "21:00",
    endTime: "21:30",
    color: "#059669",
    isHabit: true,
    detail: "30 min de lecture papier chaque soir. 1 livre par mois = 12 livres par an = 10 fois plus qu'un adulte moyen. La lecture réduit le cortisol de 68% en 6 minutes (University of Sussex). Favorise le sommeil en remplaçant les écrans."
  },
  {
    id: "evening-journal",
    type: "habit",
    name: "Journal du Soir",
    emoji: "✍️",
    days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
    startTime: "21:30",
    endTime: "21:45",
    color: "#D97706",
    isHabit: true,
    detail: "5-10 min d'écriture : 3 gratitudes du jour + 1 leçon apprise + 3 priorités de demain. Ferme cognitivement les boucles ouvertes, programme le subconscient, réduit l'anxiété nocturne de 40% et améliore la qualité du sommeil."
  },
  {
    id: "no-screen-before-sleep",
    type: "habit",
    name: "Coupure Écrans",
    emoji: "📵",
    days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
    startTime: "21:45",
    endTime: "22:00",
    color: "#6366F1",
    isHabit: true,
    detail: "45-60 min avant le coucher : aucun écran. La lumière bleue supprime la mélatonine et décale l'endormissement de 90 min. Remplacer par : lecture, stretching, journal, méditation. Active le mode nuit sur tous les appareils dès 20h."
  },
  {
    id: "weekly-review",
    type: "habit",
    name: "Revue Hebdomadaire",
    emoji: "🔍",
    days: ["Dimanche"],
    startTime: "19:00",
    endTime: "19:30",
    color: "#EC4899",
    isHabit: true,
    detail: "30 min chaque dimanche : analyse la semaine passée, définit les 3 priorités de la semaine suivante, met à jour la liste de projets. Ce rituel est le mécanisme de maintenance de tout système de productivité. Sans lui, tout déraille progressivement."
  }
];

// Activity categories for the configurator
export const ACTIVITY_CATEGORIES = [
  {
    category: "🏫 École / Travail",
    items: [
      {
        id: "school",
        label: "École",
        emoji: "🏫",
        askName: false,
        defaultName: "École",
        defaultStart: "08:00",
        defaultEnd: "17:00",
        description: "Horaires de cours ou de travail",
        notesPlaceholder: "Établissement, matières, notes spéciales...",
        tips: [
          "Assieds-toi au premier rang — prouvé pour améliorer la concentration de 25%",
          "Révise dans les 24h suivant le cours pour maximiser la rétention mémorielle",
          "Prends des notes à la main — 40% meilleure mémorisation qu'à l'ordinateur"
        ]
      },
      {
        id: "work",
        label: "Travail",
        emoji: "💼",
        askName: true,
        namePlaceholder: "Ex: Stage, CDI, Freelance...",
        defaultStart: "09:00",
        defaultEnd: "18:00",
        description: "Job, stage ou activité professionnelle",
        notesPlaceholder: "Entreprise, poste, objectifs...",
        tips: [
          "Identifie ta tâche la plus importante (MIT) chaque matin et commence par elle",
          "Bloque les notifications pendant tes créneaux de travail profond",
          "Prends une pause de 15 min toutes les 90 min — cycle ultradian"
        ]
      }
    ]
  },
  {
    category: "🏃 Sport & Bien-être",
    items: [
      {
        id: "sport",
        label: "Sport",
        emoji: "🏃",
        askName: true,
        namePlaceholder: "Ex: Football, Basketball, Tennis...",
        defaultStart: "17:30",
        defaultEnd: "19:00",
        description: "Entraînement ou compétition sportive",
        notesPlaceholder: "Club, coach, objectifs de saison, performances actuelles...",
        tips: [
          "Mange 2-3h avant l'entraînement — protéines + glucides complexes",
          "Échauffement 10 min minimum, récupération 10 min après",
          "Dors 8-9h les nuits avant les compétitions importantes"
        ]
      },
      {
        id: "gym",
        label: "Salle de Sport",
        emoji: "🏋️",
        askName: false,
        defaultName: "Salle de Sport",
        defaultStart: "07:00",
        defaultEnd: "08:30",
        description: "Musculation, cardio, fitness",
        notesPlaceholder: "Programme actuel, objectifs, PRs...",
        tips: [
          "Progressive overload : augmente la charge de 2.5kg par semaine minimum",
          "2g de protéines par kg de poids corporel pour maximiser la prise de masse",
          "Le matin à jeun n'est pas optimal pour la performance — mange 1-2h avant"
        ]
      },
      {
        id: "meditation",
        label: "Méditation",
        emoji: "🧘",
        askName: false,
        defaultName: "Méditation",
        defaultStart: "07:30",
        defaultEnd: "07:45",
        description: "Pleine conscience, respiration, yoga",
        notesPlaceholder: "Technique pratiquée, durée cible, ressentis...",
        tips: [
          "10 min par jour suffisent — la régularité prime sur la durée",
          "Apps recommandées : Petit Bambou, Headspace, Waking Up",
          "Les effets sont mesurables après 8 semaines de pratique régulière (IRM)"
        ]
      }
    ]
  },
  {
    category: "🎨 Loisirs & Créativité",
    items: [
      {
        id: "hobby",
        label: "Activité créative",
        emoji: "🎨",
        askName: true,
        namePlaceholder: "Ex: Guitare, Dessin, Photographie...",
        defaultStart: "19:00",
        defaultEnd: "20:00",
        description: "Passion, art, expression créative",
        notesPlaceholder: "Niveau actuel, objectifs, projets en cours...",
        tips: [
          "La pratique délibérée (Anders Ericsson) : travaille tes points faibles, pas tes forces",
          "30 min quotidiennes > 4h le week-end pour le développement des compétences",
          "Documente tes progrès — moteur de motivation puissant"
        ]
      },
      {
        id: "music",
        label: "Musique",
        emoji: "🎵",
        askName: true,
        namePlaceholder: "Ex: Piano, Chant, Beatmaking...",
        defaultStart: "18:00",
        defaultEnd: "19:00",
        description: "Instrument, chant, production musicale",
        notesPlaceholder: "Morceau en cours, objectifs techniques...",
        tips: [
          "Entraîne-toi au métronome — le rythme est la base de tout",
          "Enregistre-toi régulièrement pour identifier les progrès et erreurs",
          "La musique développe la mémoire de travail et la créativité"
        ]
      },
      {
        id: "reading-hobby",
        label: "Lecture",
        emoji: "📖",
        askName: false,
        defaultName: "Lecture",
        defaultStart: "21:00",
        defaultEnd: "21:30",
        description: "Romans, non-fiction, développement personnel",
        notesPlaceholder: "Livre en cours, liste à lire, objectif pages/semaine...",
        tips: [
          "Objectif réaliste : 20 pages par jour = 18 livres par an",
          "Prends des notes dans les marges ou sur une app (Readwise, Obsidian)",
          "Alterne fiction et non-fiction pour équilibrer plaisir et croissance"
        ]
      }
    ]
  },
  {
    category: "👥 Social & Famille",
    items: [
      {
        id: "social",
        label: "Vie Sociale",
        emoji: "👥",
        askName: false,
        defaultName: "Temps Social",
        defaultStart: "19:00",
        defaultEnd: "21:00",
        description: "Amis, sorties, activités en groupe",
        notesPlaceholder: "Activités prévues, personnes, objectifs relationnels...",
        tips: [
          "La solitude chronique augmente la mortalité de 26% (Harvard Study of Adult Development)",
          "Qualité > quantité : 3-5 relations profondes > 50 connaissances superficielles",
          "Initie le contact plutôt qu'attendre — la plupart des gens apprécient plus qu'ils ne le montrent"
        ]
      },
      {
        id: "family",
        label: "Famille",
        emoji: "🏠",
        askName: false,
        defaultName: "Temps en Famille",
        defaultStart: "19:00",
        defaultEnd: "21:00",
        description: "Repas, activités, présence familiale",
        notesPlaceholder: "Activités, traditions, moments à créer...",
        tips: [
          "Les repas en famille sans écrans améliorent la santé mentale des enfants",
          "Établis des traditions hebdomadaires — elles créent des souvenirs durables",
          "La présence complète (téléphone rangé) vaut plus que la quantité de temps"
        ]
      }
    ]
  },
  {
    category: "🍳 Vie Quotidienne",
    items: [
      {
        id: "cooking",
        label: "Cuisine",
        emoji: "🍳",
        askName: false,
        defaultName: "Cuisine / Meal Prep",
        defaultStart: "12:00",
        defaultEnd: "12:30",
        description: "Préparation de repas, batch cooking",
        notesPlaceholder: "Recettes à tester, objectifs nutritionnels, budget...",
        tips: [
          "Batch cooking le dimanche : prépare 5 repas en 2h → zéro décision en semaine",
          "Préparer ses repas économise ~150€/mois vs restauration",
          "La cuisine est une compétence de santé : chaque repas préparé maison est une victoire"
        ]
      },
      {
        id: "commute",
        label: "Transport / Trajet",
        emoji: "🚌",
        askName: false,
        defaultName: "Trajet",
        defaultStart: "07:30",
        defaultEnd: "08:00",
        description: "Déplacements domicile-école/travail",
        notesPlaceholder: "Moyen de transport, optimisation possible...",
        tips: [
          "Transforme les trajets en temps d'apprentissage : podcasts, audiolibres, langues",
          "Trajet à pied ou en vélo = exercice intégré + bien-être",
          "Prépare ta journée mentalement pendant le trajet (visualisation)"
        ]
      },
      {
        id: "nap",
        label: "Sieste",
        emoji: "😴",
        askName: false,
        defaultName: "Sieste",
        defaultStart: "13:00",
        defaultEnd: "13:20",
        description: "Sieste récupératrice de 10-20 min",
        notesPlaceholder: "Type de sieste, durée optimale pour toi...",
        tips: [
          "Sieste idéale : 10-20 min (stade N2) — au-delà : inertie de sommeil",
          "NASA study : 26 min de sieste → performance +34%, vigilance +100%",
          "Café avant la sieste (coffee nap) : bois un café puis dors 20 min — caféine active au réveil"
        ]
      }
    ]
  },
  {
    category: "🎬 Divertissement",
    items: [
      {
        id: "entertainment",
        label: "Séries / Films",
        emoji: "🎬",
        askName: false,
        defaultName: "Séries / Films",
        defaultStart: "20:00",
        defaultEnd: "21:00",
        description: "Streaming, cinéma, divertissement écran",
        notesPlaceholder: "Série en cours, limite de temps, règles personnelles...",
        tips: [
          "Limite : 1 épisode par soir max en semaine pour protéger le sommeil",
          "Arrête au moins 1h avant le coucher — lumière bleue + stimulation cognitive",
          "Choisis activement ce que tu regardes plutôt que de scroller 30 min"
        ]
      },
      {
        id: "gaming",
        label: "Jeux Vidéo",
        emoji: "🎮",
        askName: false,
        defaultName: "Jeux Vidéo",
        defaultStart: "19:00",
        defaultEnd: "20:00",
        description: "Gaming, jeux en ligne, casual",
        notesPlaceholder: "Jeux, objectifs, limites de temps...",
        tips: [
          "Définis une limite de temps AVANT de commencer — le cerveau override la fatigue en jouant",
          "Le gaming développe de vraies compétences : réflexes, prise de décision, stratégie",
          "Évite le soir — les jeux sont trop stimulants pour un endormissement facile"
        ]
      }
    ]
  }
];

// Wishlist activities — things to try and integrate
export const WISHLIST_ACTIVITIES = [
  { id: "cold-shower", label: "Douche Froide", emoji: "🚿", description: "Immunité, dopamine, discipline mentale. Commencer par 30 secondes froides à la fin de la douche. Augmenter progressivement.", color: "#06B6D4" },
  { id: "languages", label: "Apprendre une Langue", emoji: "🌍", description: "20 min par jour sur Duolingo = niveau B1 en 2 ans. La deuxième langue retarde Alzheimer de 5 ans en moyenne.", color: "#10B981" },
  { id: "journaling-morning", label: "Morning Pages", emoji: "🖊️", description: "Julia Cameron : 3 pages de stream of consciousness chaque matin. Libère la créativité, clarifie les pensées, réduit l'anxiété.", color: "#F59E0B" },
  { id: "gratitude", label: "Pratique de Gratitude", emoji: "🙏", description: "3 gratitudes spécifiques chaque matin. Recâble le cerveau vers le positif. Études Stanford : réduit la dépression de 35% sur 4 semaines.", color: "#EC4899" },
  { id: "volunteering", label: "Bénévolat", emoji: "❤️", description: "2h par semaine de bénévolat = +7 ans d'espérance de vie subjective, meilleure santé physique et 35% plus de bonheur.", color: "#EF4444" },
  { id: "outdoor", label: "Temps en Nature", emoji: "🌿", description: "2h en nature par semaine (OMS) : réduit le cortisol de 12%, améliore la créativité de 50%, booste la vitamine D.", color: "#22C55E" },
  { id: "networking", label: "Networking / Mentorat", emoji: "🤝", description: "Les relations professionnelles créent 80% des opportunités de carrière. 1 café par semaine avec quelqu'un d'intéressant.", color: "#8B5CF6" },
  { id: "coding", label: "Programmation", emoji: "💻", description: "La compétence du 21ème siècle. 1h par jour = développeur junior en 6-12 mois. Plateformes : freeCodeCamp, The Odin Project.", color: "#374151" },
  { id: "drawing", label: "Dessin / Art", emoji: "🎨", description: "Développe l'observation, la patience et la créativité. Betty Edwards ('Drawing on the Right Side') : n'importe qui peut apprendre en 5 jours intensifs.", color: "#D97706" },
  { id: "public-speaking", label: "Prise de Parole", emoji: "🎤", description: "Rejoindre un club Toastmasters ou faire de l'impro théâtrale. La peur du public est la n°1 des phobies — la surmonter ouvre tout.", color: "#F97316" },
  { id: "investing-learning", label: "Éducation Financière", emoji: "📈", description: "1h par semaine d'éducation financière = top 5% en 3 ans. Plateformes : Investopedia, podcasts Hacker's Guide to Finance, livres Kiyosaki/Housel.", color: "#EAB308" },
  { id: "photography", label: "Photographie", emoji: "📸", description: "Développe l'attention à la beauté du quotidien. Même avec un smartphone, la photographie régulière transforme la perception du monde.", color: "#6366F1" }
];