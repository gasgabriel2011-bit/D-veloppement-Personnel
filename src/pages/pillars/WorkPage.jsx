import PillarLayout from "../../components/PillarLayout";
import PrincipleCard from "../../components/PrincipleCard";

const HERO = "/images/ea1aeb23d_generated_371ac1bd.png";

const principles = [
  {
    title: "Le Travail Profond (Deep Work)",
    description: "2-4h de concentration totale sans interruption. C'est là que se crée la vraie valeur.",
    details: "Cal Newport (Georgetown University) définit le Deep Work comme l'état de concentration sans distraction sur une tâche cognitivement exigeante. Dans cet état, le cerveau crée de nouvelles connexions neuronales (myélinisation) qui augmentent les compétences. Le travail superficiel (emails, réunions, réseaux sociaux) peut être délégué. Le Deep Work, lui, est rare et précieux.",
    tip: "Bloque 2-4h chaque matin (avant les emails) pour ton travail le plus important. Désactive toutes les notifications. Ferme les onglets inutiles. Si ça te semble dur, commence par 25 min (Pomodoro) et augmente progressivement.",
    science: "Une étude de Gloria Mark (UC Irvine) : après une interruption, il faut en moyenne 23 minutes et 15 secondes pour retrouver le même niveau de concentration. Chaque notification coûte cher."
  },
  {
    title: "Le Time-Blocking",
    description: "Planifier chaque heure de sa journée à l'avance. Chaque minute a un rôle.",
    details: "Le time-blocking consiste à allouer des créneaux horaires spécifiques à chaque type de tâche. Cal Newport l'utilise quotidiennement. Sans plan, les urgences des autres deviennent tes priorités. Le cerveau ne peut pas improviser efficacement — il préfère exécuter un plan clair. La planification du lendemain le soir réduit l'anxiété et améliore la qualité du sommeil.",
    tip: "Chaque soir, prends 10 minutes pour planifier le lendemain. Bloque : 1 tâche PRIORITAIRE (Deep Work), 2-3 tâches secondaires, du temps pour les emails/messages (ex: 11h et 17h uniquement), et les imprévus (20% de marge).",
    science: "Peter Drucker dans 'The Effective Executive' : les managers les plus efficaces planifient leur temps à l'avance et traitent l'agenda comme un outil stratégique, non réactif."
  },
  {
    title: "Le Cycle Ultradian",
    description: "Travaille par blocs de 90 minutes, puis repose-toi 15-20 min. Respecte le rythme biologique.",
    details: "Le cerveau fonctionne par cycles de 90-120 minutes (rythme ultradian) alternant entre haute et basse alertness. Travailler contre ce cycle, c'est comme nager à contre-courant. Forcer la concentration au-delà de 90 min sans pause provoque une accumulation de cortisol et une baisse de la qualité de travail, pas une hausse.",
    tip: "Travaille intensément pendant 90 minutes, puis prends une vraie pause (pas les réseaux sociaux — une vraie déconnexion) : marche, étirements, collation, conversation. Ton cerveau sera prêt pour un nouveau cycle.",
    science: "Peretz Lavie et Nathaniel Kleitman ont démontré que les oscillations circadiennes et ultradiaennes régissent l'alternance veille/sommeil et les cycles d'alertness diurne."
  },
  {
    title: "La Règle des 2 Minutes",
    description: "Si une tâche prend < 2 minutes, fais-la immédiatement. Sinon, planifie-la.",
    details: "Tirée du système GTD (Getting Things Done) de David Allen, cette règle évite que les petites tâches s'accumulent et créent de l'encombrement mental. Chaque tâche non réalisée occupe de l'espace cognitif — c'est l'effet Zeigarnik. Vider l'esprit des micro-tâches libère de la bande passante pour le travail profond.",
    tip: "Lors de ton traitement d'emails : si la réponse prend < 2 min, réponds maintenant. Sinon, transforme en tâche planifiée avec une deadline. Ne lis jamais un email sans action (archive, répond, ou planifie).",
    science: "L'effet Zeigarnik (Bluma Zeigarnik, 1927) : les tâches non terminées restent en mémoire de travail et consomment des ressources cognitives, réduisant les performances sur d'autres tâches."
  },
  {
    title: "Le MIT — Most Important Task",
    description: "Chaque matin, identifie UNE tâche qui, si accomplie, rendrait ta journée réussie.",
    details: "Le MIT est le principe fondamental de la productivité intentionnelle. En choisissant une seule tâche prioritaire, tu évites la paralysie du choix et la satisfaction illusoire des petites tâches faciles. La règle de Warren Buffet : liste tes 25 objectifs, concentre-toi sur les 5 premiers. Les 20 autres ne sont pas secondaires — ils sont à éviter activement.",
    tip: "Le soir, avant de dormir, pose-toi la question : 'Si demain je ne peux faire qu'une seule chose, laquelle aurait le plus d'impact ?' C'est ton MIT. Place-le en premier dans ta journée.",
    science: "Gary Keller dans 'The ONE Thing' : les personnes les plus productives ont en commun la capacité à identifier et prioriser leur ONE thing quotidienne, hebdomadaire et annuelle."
  },
  {
    title: "La Revue Hebdomadaire",
    description: "Chaque dimanche, 30 min pour analyser la semaine passée et planifier la suivante.",
    details: "La revue hebdomadaire est le GPS de ta productivité. Sans elle, tu peux être très occupé sans avancer. Elle permet de : vérifier l'alignement avec les objectifs long terme, identifier les obstacles récurrents, planifier les grandes priorités de la semaine, vider le cerveau (capture d'idées, tâches en suspens). C'est un moment stratégique, pas opérationnel.",
    tip: "Protocole en 5 étapes : 1) Capture (tout noter), 2) Clarifier (transformer en actions), 3) Organiser (prioriser), 4) Réviser (calendrier, projets), 5) Engager (choisir les actions de la semaine). Blocke dimanche 18h-18h30 en récurrent.",
    science: "David Allen dans GTD : 'Votre esprit est fait pour avoir des idées, pas pour les stocker.' La revue hebdomadaire est le mécanisme de maintenance du système."
  }
];

export default function WorkPage() {
  return (
    <PillarLayout>
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={HERO} alt="Travail" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-8 left-6 md:left-12">
          <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-2">Pilier Stratégique</p>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground">Travail & Productivité</h1>
          <p className="font-body text-muted-foreground italic mt-1">L'art du travail profond et intentionnel</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-12 space-y-4">
        {principles.map((p, i) => <PrincipleCard key={i} principle={p} index={i} />)}
      </div>
    </PillarLayout>
  );
}