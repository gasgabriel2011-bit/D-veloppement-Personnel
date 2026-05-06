import PillarLayout from "../../components/PillarLayout";
import PrincipleCard from "../../components/PrincipleCard";

const HERO = "/images/7adf7d831_generated_aef130a2.png";

const principles = [
  {
    title: "L'Alimentation à Faible Friction",
    description: "Prépare tes repas sains à l'avance. Si le choix sain est le plus facile, tu le feras.",
    details: "Le meal prep (préparation hebdomadaire) est l'une des stratégies les plus efficaces pour maintenir une alimentation saine. En préparant 3-5 repas d'un coup le dimanche, tu réduis les décisions alimentaires quotidiennes. Les décisions épuisent le cerveau — après une journée chargée, la volonté est à plat et l'option la plus facile (souvent la moins saine) l'emporte.",
    tip: "Le dimanche : cuis une grosse quantité de protéines (poulet, œufs durs, légumineuses), des féculents (riz, patate douce) et des légumes rôtis. Répartis en 5 portions dans des boîtes transparentes au frigo. Visibilité = accessibilité.",
    science: "Une étude de Cornell University montre que 95% des décisions alimentaires sont automatiques et basées sur la disponibilité immédiate plutôt que sur la volonté."
  },
  {
    title: "La Priorité aux Aliments Entiers",
    description: "Privilegier les aliments non transformés : légumes, fruits, protéines complètes, bons gras.",
    details: "Les aliments ultra-transformés (classés NOVA 4) contiennent des additifs qui perturbent le microbiome intestinal, le signal de satiété et le métabolisme. Un repas de 500 kcal d'aliments entiers nécessite 20% plus d'énergie à digérer qu'un repas transformé de même calorie. Les fibres des aliments entiers nourrissent les bactéries intestinales productrices de sérotonine (80% de ta sérotonine vient de l'intestin).",
    tip: "Règle simple : la liste d'ingrédients doit être courte (< 5 ingrédients) et lisible. Si tu ne reconnais pas un ingrédient, c'est probablement un additif. Fais l'essentiel de tes courses en périphérie du supermarché (légumes, viandes, poissons).",
    science: "L'étude NOVA de Monteiro (Université de São Paulo) classifie les aliments en 4 groupes. Le groupe 4 (ultra-transformé) est lié à +12% de risque de dépression, +20% de cancer colorectal, +9% de mortalité toutes causes."
  },
  {
    title: "L'Hydratation Consciente",
    description: "Commence chaque journée avec un grand verre d'eau. La déshydratation baisse la concentration de 20%.",
    details: "Après 7-8h de sommeil sans boire, le corps est naturellement déshydraté. La déshydratation de 1-2% du poids corporel suffit à réduire les performances cognitives (attention, mémoire de travail) de 15-20%. L'eau est nécessaire à la production d'ATP (énergie cellulaire), au transport des nutriments et à l'élimination des toxines. La confusion entre soif et faim entraîne souvent une surconsommation alimentaire.",
    tip: "Objectif : 35 ml d'eau par kg de poids corporel par jour (ex: 70 kg = 2,45 L). Ajoute 500 ml pour chaque heure d'exercice. Truc : remplis une bouteille de 1L au réveil et bois-la avant midi. La deuxième bouteille pour l'après-midi.",
    science: "University of East London : 500 ml d'eau avant une tâche cognitive améliore les temps de réaction de 14% et réduit la sensation de fatigue mentale."
  },
  {
    title: "La Règle des 80% (Hara Hachi Bu)",
    description: "Mange jusqu'à 80% de satiété. Principe japonais associé à la longévité d'Okinawa.",
    details: "Le signal de satiété met 15-20 minutes à atteindre le cerveau depuis l'estomac (via la leptine et le nerf vague). En mangeant vite, tu dépasses ton seuil optimal sans t'en rendre compte. Les habitants d'Okinawa (Blue Zone), pratiquant le Hara Hachi Bu, ont l'un des taux de centenaires les plus élevés au monde. Manger moins, mais de meilleure qualité, est associé à une réduction de l'inflammation chronique.",
    tip: "Mange lentement : pose tes couverts entre chaque bouchée, mâche 20-30 fois. Utilise des assiettes plus petites (biais visuel). Mange à table, sans écran. Le repas est un moment de pleine conscience.",
    science: "Une étude sur les Blue Zones par Dan Buettner montre que les populations les plus longévives partagent cette pratique de restriction modérée spontanée, associée à -60% de risque de maladies chroniques."
  },
  {
    title: "Le Timing des Macronutriments",
    description: "Les protéines au petit-déjeuner, les glucides autour de l'effort, les lipides en soirée.",
    details: "Les protéines le matin (30-40g) réduisent les envies de sucre l'après-midi via la dopamine et la sérotonine. Les glucides sont mieux métabolisés dans les 2h avant/après l'effort physique (sensibilité à l'insuline maximale). Les lipides sains le soir (avocat, noix, huile d'olive) soutiennent la production de mélatonine et d'hormones anaboliques nocturnes.",
    tip: "Petit-déjeuner type : 3 œufs + fromage blanc + noix = 40g de protéines. Évite les céréales sucrées qui provoquent un pic d'insuline suivi d'un crash d'énergie à 10h30.",
    science: "Le Dr Krista Scott-Dixon (Precision Nutrition) : un petit-déjeuner riche en protéines réduit la consommation calorique totale de la journée de 200-400 kcal comparé à un petit-déjeuner glucidique."
  },
  {
    title: "Le Microbiome Intestinal",
    description: "Nourrir les 38 000 milliards de bactéries intestinales est un investissement santé majeur.",
    details: "L'intestin abrite 70% du système immunitaire et produit 95% de la sérotonine du corps. Un microbiome diversifié est associé à une meilleure humeur, une immunité forte, un poids stable et une longévité accrue. Les prébiotiques (fibres solubles) nourrissent les bonnes bactéries. Les probiotiques (fermentés) les renforcent.",
    tip: "Ajoute chaque semaine : kéfir ou yaourt naturel (probiotiques), poireaux/oignons/ail (prébiotiques), choucroute ou kimchi (fermentés). Objectif : 30 plantes différentes par semaine (fruits, légumes, légumineuses, herbes, épices).",
    science: "Une étude de Stanford (2021) compare régime riche en fibres vs régime riche en fermentés : le régime fermenté augmente la diversité microbienne de 19% et réduit les marqueurs inflammatoires de 21% en 10 semaines."
  }
];

export default function NutritionPage() {
  return (
    <PillarLayout>
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={HERO} alt="Alimentation" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-8 left-6 md:left-12">
          <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-2">Pilier Essentiel</p>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground">Alimentation</h1>
          <p className="font-body text-muted-foreground italic mt-1">Le carburant de ta transformation</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-12 space-y-4">
        {principles.map((p, i) => <PrincipleCard key={i} principle={p} index={i} />)}
      </div>
    </PillarLayout>
  );
}