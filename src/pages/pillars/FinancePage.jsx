import PillarLayout from "../../components/PillarLayout";
import PrincipleCard from "../../components/PrincipleCard";

// Image will be updated after generation
const HERO = "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&q=80";

const principles = [
  {
    title: "Les Actifs vs les Passifs",
    description: "La règle d'or : un actif met de l'argent dans ta poche. Un passif en retire. Accumule des actifs.",
    details: "Robert Kiyosaki dans 'Père Riche, Père Pauvre' : la plupart des gens croient que leur maison, leur voiture et leurs gadgets sont des actifs. Non — ce sont des passifs : ils coûtent de l'argent chaque mois. Un actif réel génère des revenus : immobilier locatif, actions, entreprise, propriété intellectuelle (livre, musique, cours en ligne). La liberté financière s'atteint quand tes actifs génèrent plus que tes dépenses.",
    tip: "Fais l'inventaire mensuel : liste tout ce qui génère de l'argent (actifs) vs tout ce qui en consomme (passifs). Objectif chaque mois : augmenter la colonne actifs d'au moins un élément, même petit (ETF, livre à louer, petite activité secondaire).",
    science: "L'enquête Wealth Report de Knight Frank : 78% des millionnaires auto-construits ont bâti leur patrimoine via les actifs productifs (immobilier + actions + entreprise), pas via leur salaire seul."
  },
  {
    title: "Le Paiement de Soi en Premier",
    description: "Dès que tu reçois ton salaire, épargne 20% automatiquement AVANT de payer quoi que ce soit.",
    details: "La psychologie de l'argent de Morgan Housel et le principe de Kiyosaki convergent : 'Pay yourself first.' La majorité des gens épargnent ce qui reste à la fin du mois — ce qui ne reste souvent rien. En inversant l'ordre et en automatisant le virement en début de mois, tu supprime la décision et construis un patrimoine passivement. L'automatisation est l'outil le plus puissant de la finance personnelle.",
    tip: "Crée un virement automatique le jour de paie vers un compte dédié à l'épargne/investissement. Commence à 10%, augmente de 1% chaque mois jusqu'à 20-30%. Tu t'adaptes naturellement au budget restant.",
    science: "Richard Thaler (Prix Nobel d'économie) avec le programme Save More Tomorrow : l'automatisation de l'épargne augmente le taux d'épargne de 3% à 14% en 4 ans, sans effort de volonté."
  },
  {
    title: "L'Intelligence Financière",
    description: "Comprendre la fiscalité, l'investissement, le crédit et les flux de trésorerie — c'est une compétence.",
    details: "Kiyosaki insiste : l'école n'enseigne pas l'éducation financière, pourtant c'est elle qui distingue ceux qui créent de la richesse de ceux qui travaillent pour les autres. Les riches achètent des actifs. La classe moyenne achète des passifs en croyant acheter des actifs. Les connaissances en fiscalité, en structures juridiques et en investissement peuvent multiplier ton patrimoine sans augmenter ton revenu.",
    tip: "Ressources gratuites : 'Père Riche, Père Pauvre' (Kiyosaki), 'The Psychology of Money' (Housel), 'I Will Teach You to Be Rich' (Sethi). Dédie 1h par semaine à l'éducation financière. En 1 an, tu seras dans le top 5% des gens financièrement éduqués.",
    science: "OCDE : seulement 17% de la population adulte dans les pays développés peut être considérée comme financièrement alphabétisée. Cette minority réalise 80% des créations de patrimoine privé."
  },
  {
    title: "L'Offre Grand Chelem ($100M Offers)",
    description: "Alex Hormozi : crée une offre si bonne que tes clients se sentent idiots de refuser.",
    details: "Alex Hormozi dans '$100M Offers' : la plupart des business échouent non pas par manque de travail, mais parce que leur offre est banale. L'équation de valeur : Valeur = (Résultat désiré × Probabilité de réussite) / (Temps × Effort). Pour maximiser la valeur perçue : augmente le résultat promis, augmente la crédibilité (preuves, garanties), réduis le temps pour y arriver, réduis l'effort demandé.",
    tip: "Pour toute offre de service/produit : identifie le problème n°1 de ta cible, propose une solution avec une garantie audacieuse (remboursement, résultat garanti), et ajoute des bonuses qui valent plus que le prix de l'offre principale. Prix premium = perception de valeur premium.",
    science: "Hormozi document des cas réels : en restructurant son offre (sans changer le service), il est passé de 1 500$/mois à 42 000$/mois par client, en réduisant le nombre de clients et en augmentant drastiquement la valeur perçue."
  },
  {
    title: "Les Intérêts Composés — La 8ème Merveille",
    description: "Einstein l'aurait dit : les intérêts composés sont la plus grande force de l'univers.",
    details: "Si tu investis 200€/mois à 7% de rendement annuel dès 25 ans, tu auras 528 000€ à 65 ans. En commençant à 35 ans, seulement 243 000€. 10 ans de différence = 285 000€ de moins. La variable la plus importante n'est pas le montant mais le TEMPS. Chaque décennie investie double (ou plus) le résultat final.",
    tip: "Commence dès maintenant, même avec de petits montants. Un ETF monde (ex: MSCI World) à frais réduits est l'outil le plus simple et le plus efficace pour l'investisseur non-expert. Dollar-cost averaging (investissement régulier fixe) élimine le risque de timing de marché.",
    science: "Vanguard Research : sur n'importe quelle période de 20 ans dans l'histoire des marchés américains, un investisseur en index fund passif a surperformé 85% des gestionnaires actifs après frais."
  },
  {
    title: "La Diversification des Revenus",
    description: "Ne dépendre que d'un seul flux de revenus est un risque majeur. Crée plusieurs sources.",
    details: "Les millionnaires ont en moyenne 7 flux de revenus différents. Cela ne signifie pas 7 emplois — cela signifie combiner salaire actif, revenus passifs (dividendes, rentes), et semi-passifs (contenu en ligne, formations). La diversification protège contre les aléas économiques et accélère la création de patrimoine. La phase de construction est active, la phase de maintenance est passive.",
    tip: "Commence par une source supplémentaire simple : vente de compétences en freelance, création de contenu, investissement locatif avec levier bancaire, ou plateforme de mise en location (Airbnb, Turo). Une source à la fois — construis-la jusqu'à ce qu'elle soit stable avant d'en créer une nouvelle.",
    science: "Thomas Stanley dans 'The Millionaire Next Door' : 80% des millionnaires américains sont des 'first-generation wealthy' — ils n'ont pas hérité leur richesse, ils l'ont construite via multiple income streams et une discipline d'épargne stricte."
  }
];

export default function FinancePage() {
  return (
    <PillarLayout>
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={HERO} alt="Finance" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-8 left-6 md:left-12">
          <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-2">Pilier Stratégique</p>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground">Finance & Richesse</h1>
          <p className="font-body text-muted-foreground italic mt-1">Inspiré de Père Riche Père Pauvre & $100M Offers</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-12 space-y-4">
        {principles.map((p, i) => <PrincipleCard key={i} principle={p} index={i} />)}
      </div>
    </PillarLayout>
  );
}