import PillarLayout from "../../components/PillarLayout";
import PrincipleCard from "../../components/PrincipleCard";

const HERO = "/images/27565d003_generated_18ef2ffc.png";

const principles = [
  {
    title: "Le Locus de Contrôle Interne",
    description: "Croire que tu es responsable de tes résultats — pas les circonstances, pas les autres.",
    details: "Julian Rotter a défini ce concept en 1954. Les personnes à locus interne attribuent leurs succès et échecs à leurs propres actions. Elles sont plus résilientes, moins dépressives, et plus performantes. Les personnes à locus externe attendent que les conditions changent. Le locus de contrôle est malléable — c'est une compétence qui se développe.",
    tip: "À chaque obstacle, demande-toi : 'Qu'est-ce qui dépend de moi ici ?' Focus sur ce que tu peux contrôler (action, attitude, effort) et accepte ce que tu ne peux pas (les autres, le passé, les circonstances).",
    science: "Une méta-analyse de 49 études (Ng et al.) montre que le locus de contrôle interne est positivement correlé avec la performance professionnelle, la santé mentale et la satisfaction de vie."
  },
  {
    title: "L'Identité Avant les Objectifs",
    description: "Ne dis pas 'je veux courir' — dis 'je suis quelqu'un qui court.' L'identité précède l'action.",
    details: "James Clear dans Atomic Habits et Amy Cuddy dans Presence documentent ce phénomène : changer son identité intérieure est plus puissant que se fixer des objectifs. Chaque action est un vote pour ou contre une identité. 100 petits votes créent une nouvelle croyance sur soi. Les habitudes identitaires sont beaucoup plus durables que les habitudes basées sur des objectifs.",
    tip: "Chaque matin, complète cette phrase : 'Je suis le genre de personne qui __.' et choisis une action dans la journée qui prouve cette identité. La preuve s'accumule comme des intérêts composés.",
    science: "L'étude 'Identity-Based Motivation' de Daphna Oyserman (USC) démontre que les personnes qui s'identifient à un comportement le maintiennent 3x plus longtemps que celles qui se fixent seulement un objectif."
  },
  {
    title: "L'Exposition Graduelle",
    description: "Affronte tes peurs en progressant graduellement. Le courage se développe comme un muscle.",
    details: "La thérapie d'exposition, base de la CBT (Cognitive Behavioral Therapy), est l'une des approches les plus validées scientifiquement contre les phobies et l'anxiété sociale. Chaque exposition réussie recalibre l'amygdale — le centre de la peur dans le cerveau. Éviter ce qui nous fait peur renforce la peur. Y faire face la réduit.",
    tip: "Crée une 'échelle de peur' de 1 à 10. Commence par affronter les situations à 2-3, puis monte progressivement. Pour la prise de parole : parle à 1 personne, puis 2, puis un petit groupe, puis une salle.",
    science: "Meta-analyse de Wolitzky-Taylor et al. (2008) : la thérapie d'exposition est efficace pour 90% des phobies spécifiques, avec des résultats durables même 2 ans après."
  },
  {
    title: "Le Recadrage Cognitif",
    description: "Transformer les pensées négatives en perspectives plus précises et utiles.",
    details: "Le recadrage cognitif n'est pas de la pensée positive naïve — c'est une remise en question rigoureuse des pensées automatiques négatives. La question clé de Byron Katie : 'Est-ce que je sais avec certitude que c'est vrai ?' Souvent, nos pires scénarios ne sont pas des faits mais des interprétations. Le cerveau confond les pensées avec la réalité.",
    tip: "Face à une pensée négative, pose 3 questions : 1) Est-ce factuel ? 2) Quelle est l'interprétation la plus utile (pas naïvement positive) ? 3) Qu'est-ce que je conseillerais à un ami dans cette situation ? Souvent on est bien plus sévère avec soi-même qu'avec les autres.",
    science: "Aaron Beck (père de la CBT) : les schémas de pensée automatiques négatifs (NATs) sont modifiables par la pratique consciente du recadrage. Des changements mesurables dans les patterns de pensée apparaissent en 8-12 semaines."
  },
  {
    title: "La Posture et le Corps",
    description: "Le corps influence le cerveau. Une posture droite augmente la confiance en 2 minutes.",
    details: "Amy Cuddy (Harvard Business School) a popularisé les 'Power Poses' — postures d'expansion physique qui modulent les hormones. Même sans hormones, la posture droite active le cortex préfrontal et réduit l'activité de l'amygdale. Le sourire volontaire, même forcé, libère des endorphines (effet facial feedback).",
    tip: "Avant un moment stressant (présentation, entretien, confrontation) : trouve 2 minutes de privé, adopte une posture expansive (debout, épaules en arrière, bras ouverts), respire profondément. Les signaux corporels précèdent et conditionnent l'état mental.",
    science: "Une étude de Pablo Brinol (Ohio State) : étudiants qui écrivent leurs forces en posture droite vs avachie présentent une confiance en soi significativement plus haute et de meilleures performances ensuite."
  },
  {
    title: "La Compassion envers Soi",
    description: "Kristen Neff : se traiter avec la même gentillesse qu'on traiterait un ami augmente la résilience.",
    details: "La critique intérieure excessive est paradoxalement contre-productive : elle active l'axe HPA (stress), réduit la prise de risque, et diminue la résilience face aux échecs. La self-compassion n'est pas de la complaisance — c'est reconnaître sa souffrance, se rappeler qu'être imparfait est universel, et se parler avec kindness. Ça augmente la motivation à s'améliorer, pas l'inverse.",
    tip: "Quand tu te critiques durement : pose la main sur le cœur et demande-toi 'Qu'est-ce que je dirais à mon meilleur ami dans cette situation ?' Dis-le à voix haute. L'inconfort que tu ressens à le faire dit tout sur l'écart entre comment tu traites les autres vs toi-même.",
    science: "Kristin Neff (Université du Texas) : la self-compassion est positivement correlée avec la croissance personnelle, la curiosité, la prise de risque, et négativement avec la dépression et l'anxiété — plus que l'estime de soi classique."
  }
];

export default function ConfidencePage() {
  return (
    <PillarLayout>
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={HERO} alt="Confiance" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-8 left-6 md:left-12">
          <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-2">Pilier Central</p>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground">Confiance en Soi</h1>
          <p className="font-body text-muted-foreground italic mt-1">Le pouvoir de la croyance intérieure</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-12 space-y-4">
        {principles.map((p, i) => <PrincipleCard key={i} principle={p} index={i} />)}
      </div>
    </PillarLayout>
  );
}