import PillarLayout from "../../components/PillarLayout";
import PrincipleCard from "../../components/PrincipleCard";

// Image will be updated after generation
const HERO = "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80";

const principles = [
  {
    title: "La Réciprocité",
    description: "Donne en premier, sans attente immédiate. Les gens ressentent une obligation inconsciente de rendre.",
    details: "Robert Cialdini dans 'Influence' (1984) : la réciprocité est le principe d'influence le plus universel et le plus ancré biologiquement. Quand quelqu'un nous donne quelque chose — information, service, cadeau, attention — notre cerveau enregistre une 'dette sociale' inconsciente. Cette dette crée une pression de rendre, souvent au-delà de ce qui a été reçu. Les entreprises utilisent ce principe massivement : échantillons gratuits, essais sans engagement, contenu de valeur.",
    tip: "Dans les relations professionnelles et personnelles : donne avant de demander. Partage une info utile, présente deux personnes, offre ton aide sans agenda. La générosité stratégique crée un capital social qui se convertit en opportunités.",
    science: "L'expérience de Dennis Regan (Cornell, 1971) : les sujets qui avaient reçu une cannette de Coca de la part d'un inconnu achetaient en moyenne 2x plus de ses billets de loterie que ceux qui n'avaient rien reçu — même s'ils n'aimaient pas la personne."
  },
  {
    title: "L'Engagement et la Cohérence",
    description: "Une fois engagé publiquement, les gens cherchent à être cohérents avec cette position.",
    details: "Cialdini : les humains ressentent une pression psychologique forte à agir de façon cohérente avec leurs engagements passés, surtout quand ils sont publics et écrits. Le pied-dans-la-porte : obtenir un petit 'oui' d'abord (signer une pétition) facilite un grand 'oui' ensuite. L'escalade d'engagement explique aussi pourquoi nous persistons dans des décisions mauvaises par orgueil.",
    tip: "Pour maintenir tes bonnes habitudes : annonce-les publiquement (réseau social, amis, famille). Signe un contrat avec toi-même. Chaque fois que tu t'engages publiquement, tu actives le principe de cohérence en ta faveur.",
    science: "Freedman et Fraser (1966) : les personnes ayant accepté de coller un petit autocollant 'Safe Driver' chez elles acceptaient 76% plus souvent d'installer un grand panneau encombrant dans leur jardin 2 semaines plus tard."
  },
  {
    title: "La Preuve Sociale",
    description: "Les gens regardent ce que font les autres pour décider quoi faire — surtout dans l'incertitude.",
    details: "La preuve sociale est un raccourci cognitif puissant : si beaucoup de gens font X, c'est probablement la bonne chose à faire. C'est pourquoi les avis en ligne, les bestsellers, les 'populaires', les files d'attente influencent nos choix. En incertitude (situation nouvelle, décision complexe), cet effet est démultiplié. Les influenceurs sont des proxies de preuve sociale artificielle.",
    tip: "Dans ta communication professionnelle : témoignages, nombre de clients, success stories, logos de partenaires, certifications. Dans ta vie perso : entoure-toi de personnes qui ont les comportements que tu veux adopter. Le groupe définit la norme.",
    science: "Muzafer Sherif (1936, effet autocinétique) : dans l'incertitude perceptive, les individus adoptent les normes du groupe même quand elles sont arbitraires, et les internalisent comme leurs propres croyances."
  },
  {
    title: "L'Autorité",
    description: "Les gens suivent les experts et les figures d'autorité — même de façon inappropriée.",
    details: "L'expérience de Milgram l'a dramatiquement démontré. L'autorité se signale par des titres (Docteur, Professeur), des vêtements (blouse blanche, costume), des attributs visuels (badges, récompenses, logos), et le ton de voix. La compétence ne suffit pas — elle doit être visible et signalée. Dans un contexte de service ou d'influence, construire sa crédibilité est un prérequis à tout impact.",
    tip: "Développe ton expertise dans un domaine précis. Partage tes connaissances (articles, conférences, formations). Les certifications, les médias, les recommandations de pairs construisent l'autorité sociale. Spécialise-toi — un généraliste n'inspire pas l'autorité.",
    science: "Stanley Milgram (1961) : 65% des participants ont administré des chocs électriques potentiellement mortels simplement parce qu'une figure d'autorité leur demandait de le faire — sans aucune contrainte physique."
  },
  {
    title: "La Sympathie",
    description: "Nous disons plus facilement oui à ceux que nous apprécions. La connexion précède la persuasion.",
    details: "Cialdini identifie les déclencheurs de sympathie : la similarité (valeurs, origines, centres d'intérêt partagés), les compliments sincères, la familiarité (voir quelqu'un souvent l'effet de simple exposition), la beauté physique (halo effect), et l'association (messager positif = message positif). Les vendeurs les plus efficaces partagent les intérêts de leurs clients et trouvent des points communs avant de parler business.",
    tip: "Avant toute négociation ou présentation : trouve 2-3 points communs avec l'interlocuteur (lieu d'origine, passion, situation). Utilise des compliments sincères et spécifiques (pas généraux). La connexion humaine n'est pas une manipulation — c'est le fondement de toute relation.",
    science: "Joseph Forgas (UNSW) : les personnes physiquement attrayantes reçoivent des peines de prison 10 à 15% moins sévères, des salaires 10-12% plus élevés, et sont 50% plus susceptibles d'être élues — même pour des postes non-liés à l'apparence."
  },
  {
    title: "La Rareté",
    description: "Les opportunités paraissent plus précieuses quand leur disponibilité est limitée.",
    details: "La rareté active le système de récompense et l'aversion à la perte. La perspective de perdre quelque chose est 2x plus motivante que la perspective de gagner quelque chose d'équivalent (Kahneman & Tversky). Les deadlines, les éditions limitées, les 'places restantes' exploitent ce biais. Dans la communication personnelle : ne te rends pas trop disponible, ça dévalorise inconsciemment ton aide.",
    tip: "Pour valoriser ton travail et ton temps : travaille en batch (pas disponible en continu), fixe des horaires de réponse, limite le nombre de clients ou de projets simultanés. Ce que tu rends rare, tu le valorises. Ce qui est abondant perd de la valeur perçue.",
    science: "Kahneman et Tversky (1979, Prospect Theory, Prix Nobel 2002) : la douleur de perdre 100€ est psychologiquement 2,5x plus intense que le plaisir de gagner 100€. Cette asymétrie rend la rareté extraordinairement persuasive."
  }
];

export default function InfluencePage() {
  return (
    <PillarLayout>
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={HERO} alt="Influence" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-8 left-6 md:left-12">
          <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-2">Pilier Relationnel</p>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground">Influence & Persuasion</h1>
          <p className="font-body text-muted-foreground italic mt-1">Inspiré de 'Influence' par Robert Cialdini</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-12 space-y-4">
        {principles.map((p, i) => <PrincipleCard key={i} principle={p} index={i} />)}
      </div>
    </PillarLayout>
  );
}