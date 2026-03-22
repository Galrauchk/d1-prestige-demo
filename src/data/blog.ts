export interface Article {
  slug: string
  titre: string
  extrait: string
  image: string
  date: string
  dateISO: string
  auteur: string
  auteurPhoto: string
  auteurRole: string
  categorie: string
  categorieSlug: string
  tempsLecture: number
  featured: boolean
  contenu: string
}

export const articles: Article[] = [
  {
    slug: 'isolation-thermique-aides-2024',
    titre: 'MaPrimeRénov\' 2024 : toutes les aides pour isoler votre logement en Occitanie',
    extrait: 'Les aides à la rénovation énergétique ont été profondément réformées. Découvrez comment financer jusqu\'à 90% de vos travaux d\'isolation avec MaPrimeRénov\', les CEE et l\'éco-prêt à taux zéro.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=85',
    date: '15 mars 2024',
    dateISO: '2024-03-15',
    auteur: 'Marc Fontaine',
    auteurPhoto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80',
    auteurRole: 'Directeur Technique',
    categorie: 'Isolation',
    categorieSlug: 'isolation',
    tempsLecture: 8,
    featured: true,
    contenu: `
<h2>Les aides à l'isolation en 2024 : un panorama complet</h2>
<p>La rénovation énergétique est au cœur des priorités du gouvernement. En 2024, plusieurs dispositifs permettent de financer vos travaux d'isolation à hauteur de 90% selon vos revenus et la nature des travaux.</p>
<h3>MaPrimeRénov' : la prime principale</h3>
<p>MaPrimeRénov' est accessible à tous les propriétaires occupants, bailleurs ou copropriétaires. Le montant varie selon le revenu fiscal de référence et le type d'isolation :</p>
<ul>
<li>Isolation des combles : jusqu'à 25€/m²</li>
<li>Isolation des planchers bas : jusqu'à 19€/m²</li>
<li>Isolation des murs par l'extérieur (ITE) : jusqu'à 75€/m²</li>
</ul>
<h3>Les Certificats d'Économies d'Énergie (CEE)</h3>
<p>Cumulables avec MaPrimeRénov', les CEE sont des aides versées par les fournisseurs d'énergie. Meridian Groupe vous accompagne dans toutes les démarches administratives.</p>
<h3>L'éco-prêt à taux zéro (éco-PTZ)</h3>
<p>Pour financer le reste à charge, l'éco-PTZ permet d'emprunter jusqu'à 50 000€ sans intérêts sur 20 ans. Contactez nos conseillers pour un plan de financement personnalisé.</p>
    `
  },
  {
    slug: 'choisir-couverture-mediterranee',
    titre: 'Quel type de couverture choisir pour un climat méditerranéen ?',
    extrait: 'Tuiles canal, tuiles mécanique, bac acier ou zinc : le choix de votre couverture dépend de nombreux facteurs. Notre guide expert pour les propriétaires d\'Occitanie.',
    image: 'https://images.unsplash.com/photo-1562516155-e0c1ee44059b?w=800&q=85',
    date: '28 février 2024',
    dateISO: '2024-02-28',
    auteur: 'Sophie Dupont',
    auteurPhoto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80',
    auteurRole: 'Chef de Projet Couverture',
    categorie: 'Couverture',
    categorieSlug: 'couverture',
    tempsLecture: 6,
    featured: false,
    contenu: `
<h2>Le climat méditerranéen : des contraintes spécifiques</h2>
<p>L'Occitanie présente un climat particulièrement exigeant pour les toitures : chaleur intense en été (jusqu'à 45°C en surface), épisodes cévenols violents en automne, tramontane et mistral réguliers. Votre couverture doit résister à tout cela.</p>
<h3>La tuile canal : le classique méditerranéen</h3>
<p>Intemporelle et adaptée au climat, la tuile canal offre une ventilation naturelle excellente. Elle est idéale pour les maisons de caractère et les constructions dans les villages typiques. Sa durée de vie peut dépasser 100 ans.</p>
<h3>La tuile mécanique : économique et efficace</h3>
<p>Plus rapide à poser et moins coûteuse, la tuile mécanique convient aux constructions contemporaines. Elle offre une imperméabilité supérieure grâce à son système d'emboîtement.</p>
    `
  },
  {
    slug: 'construction-bioclimatique-occitanie',
    titre: 'Construction bioclimatique en Occitanie : concevoir une maison passive',
    extrait: 'Orientation, inertie thermique, ventilation naturelle : les principes de la construction bioclimatique adaptés au territoire occitan pour une maison confortable toute l\'année.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=85',
    date: '10 janvier 2024',
    dateISO: '2024-01-10',
    auteur: 'Antoine Bernard',
    auteurPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
    auteurRole: 'Architecte Partenaire',
    categorie: 'Construction',
    categorieSlug: 'construction',
    tempsLecture: 10,
    featured: false,
    contenu: `
<h2>Les principes du bioclimatisme appliqués à l'Occitanie</h2>
<p>Construire bioclimatique, c'est concevoir un bâtiment qui tire parti de son environnement pour assurer confort et efficacité énergétique. En Occitanie, cela signifie maximiser les apports solaires en hiver tout en se protégeant de la chaleur estivale.</p>
<h3>L'orientation, premier levier bioclimatique</h3>
<p>Une orientation plein sud des principales pièces de vie permet de capter les rayons solaires bas de l'hiver. Les débords de toit calculés protègent des rayons estivaux plus verticaux.</p>
<h3>L'inertie thermique : l'atout du Sud</h3>
<p>Les matériaux à forte inertie (pierre, béton, brique de terre crue) absorbent la chaleur diurne et la restituent la nuit, limitant les besoins en climatisation.</p>
    `
  },
  {
    slug: 'ravalement-facade-reglementation',
    titre: 'Ravalement de façade : obligations légales et réglementation en 2024',
    extrait: 'Saviez-vous que le ravalement de façade peut être obligatoire ? Permis de construire, déclaration préalable, PLU : tout ce que vous devez savoir avant de démarrer vos travaux.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85',
    date: '5 décembre 2023',
    dateISO: '2023-12-05',
    auteur: 'Marc Fontaine',
    auteurPhoto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80',
    auteurRole: 'Directeur Technique',
    categorie: 'Ravalement',
    categorieSlug: 'ravalement',
    tempsLecture: 7,
    featured: false,
    contenu: `
<h2>Le ravalement : une obligation légale méconnue</h2>
<p>L'article L. 132-1 du Code de la construction impose aux propriétaires d'immeubles en ville de maintenir leurs façades en bon état de propreté. Certaines communes peuvent imposer un ravalement tous les 10 ans.</p>
<h3>Permis ou déclaration préalable ?</h3>
<p>La réponse dépend de la nature des travaux et de la localisation. Une simple peinture sur enduit existant peut ne nécessiter aucune autorisation. En revanche, un changement d'aspect ou une ITE exigent généralement une déclaration préalable.</p>
    `
  },
  {
    slug: 'renovation-energetique-patrimoine',
    titre: 'Rénover un bien patrimonial en Occitanie : contraintes et opportunités',
    extrait: 'Monuments historiques, ZPPAUP, PSMV : rénover un bien classé ou dans une zone protégée d\'Occitanie demande une expertise rare. Découvrez notre approche.',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=85',
    date: '18 novembre 2023',
    dateISO: '2023-11-18',
    auteur: 'Sophie Dupont',
    auteurPhoto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80',
    auteurRole: 'Chef de Projet Couverture',
    categorie: 'Rénovation',
    categorieSlug: 'renovation',
    tempsLecture: 9,
    featured: false,
    contenu: `
<h2>Le patrimoine occitan : richesse et contraintes</h2>
<p>L'Occitanie est l'une des régions françaises les plus riches en patrimoine architectural. Des remparts de Carcassonne aux mas languedociens, en passant par les bastides et les hôtels particuliers de Montpellier, chaque rénovation est un défi unique.</p>
<h3>Comprendre les périmètres de protection</h3>
<p>Les Architectes des Bâtiments de France (ABF) ont autorité sur les travaux situés dans un rayon de 500m autour d'un monument historique. Tout projet doit faire l'objet d'une consultation préalable.</p>
    `
  },
]

export function getArticle(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug)
}

export const categoriesArticles = [
  'Isolation', 'Couverture', 'Construction', 'Ravalement', 'Rénovation',
  'Étanchéité', 'Peinture', 'Charpente'
]
