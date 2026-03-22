export interface Ville {
  slug: string
  nom: string
  departement: string
  codePostal: string
  interventionTime: string
  description: string
  lat: number
  lng: number
  population: number
}

export const villes: Ville[] = [
  { slug: 'montpellier', nom: 'Montpellier', departement: 'Hérault', codePostal: '34000', interventionTime: '30 min', description: 'Capitale de l\'Occitanie, Montpellier est notre siège social et notre terrain d\'expertise principal depuis 1998.', lat: 43.6108, lng: 3.8767, population: 300000 },
  { slug: 'nimes', nom: 'Nîmes', departement: 'Gard', codePostal: '30000', interventionTime: '45 min', description: 'Ville romaine emblématique, Nîmes bénéficie de notre savoir-faire en rénovation de patrimoine et constructions neuves.', lat: 43.8367, lng: 4.3601, population: 150000 },
  { slug: 'perpignan', nom: 'Perpignan', departement: 'Pyrénées-Orientales', codePostal: '66000', interventionTime: '1h30', description: 'Porte de l\'Espagne, Perpignan est un marché stratégique pour nos activités isolation et ravalement.', lat: 42.6887, lng: 2.8948, population: 120000 },
  { slug: 'carcassonne', nom: 'Carcassonne', departement: 'Aude', codePostal: '11000', interventionTime: '1h15', description: 'Cité médiévale classée UNESCO, Carcassonne requiert notre expertise en rénovation patrimoniale et travaux spéciaux.', lat: 43.2119, lng: 2.3499, population: 47000 },
  { slug: 'sete', nom: 'Sète', departement: 'Hérault', codePostal: '34200', interventionTime: '40 min', description: 'L\'île singulière de Méditerranée, Sète présente des contraintes d\'étanchéité spécifiques face à l\'humidité maritime.', lat: 43.4033, lng: 3.6969, population: 43000 },
  { slug: 'agde', nom: 'Agde', departement: 'Hérault', codePostal: '34300', interventionTime: '45 min', description: 'Ville antique et station balnéaire, Agde et son Cap concentrent projets de résidences neuves et rénovations.', lat: 43.3108, lng: 3.4769, population: 28000 },
  { slug: 'beziers', nom: 'Béziers', departement: 'Hérault', codePostal: '34500', interventionTime: '55 min', description: 'Cœur du Languedoc viticole, Béziers est un hub pour nos activités construction et gros œuvre dans l\'Hérault ouest.', lat: 43.3443, lng: 3.2158, population: 77000 },
  { slug: 'lunel', nom: 'Lunel', departement: 'Hérault', codePostal: '34400', interventionTime: '35 min', description: 'Entre Montpellier et Nîmes, Lunel est une zone de développement résidentiel actif pour nos équipes construction.', lat: 43.6748, lng: 4.1352, population: 26000 },
  { slug: 'palavas', nom: 'Palavas-les-Flots', departement: 'Hérault', codePostal: '34250', interventionTime: '35 min', description: 'Station balnéaire iconique, Palavas concentre des projets d\'étanchéité, ravalement et rénovation de résidences secondaires.', lat: 43.5273, lng: 3.9289, population: 7000 },
  { slug: 'la-grande-motte', nom: 'La Grande-Motte', departement: 'Hérault', codePostal: '34280', interventionTime: '30 min', description: 'Architecture des années 70 et constructions récentes : La Grande-Motte est un laboratoire de rénovation pour Meridian.', lat: 43.5607, lng: 4.0829, population: 9000 },
  { slug: 'frontignan', nom: 'Frontignan', departement: 'Hérault', codePostal: '34110', interventionTime: '35 min', description: 'Entre étang et Méditerranée, Frontignan demande notre expertise en isolation thermique et protection humidité.', lat: 43.4480, lng: 3.7572, population: 24000 },
  { slug: 'poussan', nom: 'Poussan', departement: 'Hérault', codePostal: '34560', interventionTime: '30 min', description: 'Village dynamique de Thau, Poussan voit fleurir les constructions individuelles avec nos équipes au premier rang.', lat: 43.4906, lng: 3.6709, population: 8000 },
  { slug: 'mireval', nom: 'Mireval', departement: 'Hérault', codePostal: '34110', interventionTime: '30 min', description: 'Niché entre vignes et mer, Mireval est un village prisé où Meridian intervient en construction et rénovation haut de gamme.', lat: 43.4753, lng: 3.8024, population: 4500 },
  { slug: 'vic-la-gardiole', nom: 'Vic-la-Gardiole', departement: 'Hérault', codePostal: '34110', interventionTime: '30 min', description: 'Commune viticole de l\'agglo de Montpellier, Vic-la-Gardiole accueille des projets de villas et mas en rénovation.', lat: 43.4898, lng: 3.8426, population: 5000 },
  { slug: 'lattes', nom: 'Lattes', departement: 'Hérault', codePostal: '34970', interventionTime: '20 min', description: 'Commune résidentielle de Montpellier Méditerranée Métropole, Lattes est l\'une de nos zones d\'intervention principales.', lat: 43.5701, lng: 3.8958, population: 18000 },
  { slug: 'grabels', nom: 'Grabels', departement: 'Hérault', codePostal: '34790', interventionTime: '25 min', description: 'Village de caractère limitrophe de Montpellier, Grabels concentre des projets de constructions contemporaines haut de gamme.', lat: 43.6468, lng: 3.8241, population: 8000 },
  { slug: 'castelnau-le-lez', nom: 'Castelnau-le-Lez', departement: 'Hérault', codePostal: '34170', interventionTime: '20 min', description: 'Deuxième commune de la métropole montpelliéraine, Castelnau-le-Lez est un marché majeur pour Meridian Groupe.', lat: 43.6393, lng: 3.9193, population: 23000 },
  { slug: 'vendargues', nom: 'Vendargues', departement: 'Hérault', codePostal: '34740', interventionTime: '25 min', description: 'Commune en plein essor à l\'est de Montpellier, Vendargues accueille de nombreux programmes neufs réalisés par Meridian.', lat: 43.6377, lng: 3.9726, population: 8000 },
  { slug: 'mauguio', nom: 'Mauguio', departement: 'Hérault', codePostal: '34130', interventionTime: '25 min', description: 'Porte d\'entrée de la Camargue gardoise, Mauguio combine construction neuve, rénovation et travaux spéciaux pour Meridian.', lat: 43.6172, lng: 4.0067, population: 18000 },
  { slug: 'montbazin', nom: 'Montbazin', departement: 'Hérault', codePostal: '34560', interventionTime: '30 min', description: 'Village de caractère au cœur du bassin de Thau, Montbazin est une commune prisée pour la construction de villas de prestige.', lat: 43.5219, lng: 3.7285, population: 4000 },
]

export function getVille(slug: string): Ville | undefined {
  return villes.find(v => v.slug === slug)
}
