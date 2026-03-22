export interface Metier {
  slug: string
  nom: string
  nomCourt: string
  description: string
  descriptionLongue: string
  image: string
  icon: string
  prestations: string[]
  avantages: string[]
  certifications: string[]
}

export const metiers: Metier[] = [
  {
    slug: 'construction',
    nom: 'Construction neuve',
    nomCourt: 'Construction',
    description: 'Maisons individuelles, immeubles et bâtiments tertiaires : maîtrise de A à Z.',
    descriptionLongue: 'De la conception architecturale à la remise des clés, nos équipes de construction orchestrent chaque chantier avec précision. Maisons individuelles bioclimatiques, immeubles résidentiels, bâtiments tertiaires : Meridian Groupe pilote l\'intégralité de vos projets de construction neuve en Occitanie.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=85',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    prestations: ['Maisons individuelles', 'Immeubles résidentiels', 'Bâtiments tertiaires', 'Gros œuvre', 'Second œuvre', 'Finitions haut de gamme'],
    avantages: ['Maîtrise d\'œuvre complète', 'Respect des délais garantis', 'Matériaux certifiés', 'Suivi de chantier digital'],
    certifications: ['Qualibat', 'RGE', 'Décennale', 'Dommages-ouvrage']
  },
  {
    slug: 'renovation',
    nom: 'Rénovation complète',
    nomCourt: 'Rénovation',
    description: 'Transformation totale ou partielle de vos espaces résidentiels et tertiaires.',
    descriptionLongue: 'La rénovation est l\'ADN de Meridian Groupe. Depuis 26 ans, nous transformons maisons, appartements, locaux professionnels et bâtiments industriels en espaces fonctionnels et esthétiques. Notre approche intégrée vous garantit un interlocuteur unique pour tous les corps de métier.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    prestations: ['Rénovation complète', 'Rénovation partielle', 'Mise aux normes', 'Extension', 'Surélévation', 'Transformation de locaux'],
    avantages: ['Devis détaillé sous 48h', 'Équipes pluridisciplinaires', 'Planning rigoureux', 'Garantie décennale'],
    certifications: ['Qualibat', 'RGE', 'Décennale']
  },
  {
    slug: 'isolation',
    nom: 'Isolation thermique',
    nomCourt: 'Isolation',
    description: 'ITI, ITE, combles, planchers : réduisez vos factures et gagnez en confort.',
    descriptionLongue: 'Spécialiste certifié RGE, Meridian Groupe réalise tous types d\'isolation : par l\'intérieur (ITI), par l\'extérieur (ITE), des combles perdus ou aménagés, des planchers bas et des vides sanitaires. Bénéficiez de MaPrimeRénov\' et des aides CEE avec nos conseillers dédiés.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>',
    prestations: ['Isolation par l\'intérieur (ITI)', 'Isolation par l\'extérieur (ITE)', 'Combles perdus', 'Combles aménagés', 'Planchers bas', 'Vide sanitaire'],
    avantages: ['Certifié RGE', 'Éligible MaPrimeRénov\'', 'Audit énergétique offert', 'Économies garanties'],
    certifications: ['RGE', 'Qualibat', 'ADEME', 'Éco Artisan']
  },
  {
    slug: 'peinture',
    nom: 'Peinture & revêtements',
    nomCourt: 'Peinture',
    description: 'Peinture intérieure, extérieure, sol, décoration : l\'art de finir parfaitement.',
    descriptionLongue: 'Nos peintres qualifiés interviennent sur tous types de supports et surfaces. Peinture intérieure (murs, plafonds, boiseries), peinture extérieure, revêtements de sols, papiers peints haut de gamme, traitements spéciaux anti-humidité. Nous accompagnons aussi les maîtres d\'ouvrage dans leurs choix de teintes et matières.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=85',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>',
    prestations: ['Peinture intérieure', 'Peinture extérieure', 'Revêtements de sols', 'Papiers peints', 'Traitements spéciaux', 'Peinture anti-humidité'],
    avantages: ['Conseil couleur inclus', 'Peintures écologiques', 'Délais express', 'Protection des mobiliers'],
    certifications: ['Qualibat', 'Pro BTP']
  },
  {
    slug: 'charpente',
    nom: 'Charpente bois',
    nomCourt: 'Charpente',
    description: 'Charpente traditionnelle, industrielle, ossature bois : solidité et durabilité.',
    descriptionLongue: 'La charpente est l\'ossature de votre bâtiment. Nos charpentiers qualifiés maîtrisent les techniques traditionnelles (fermes, pannes, chevrons) et les systèmes industriels modernes. Nous réalisons également des extensions en ossature bois, des pergolas, carports et structures extérieures sur mesure.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=85',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>',
    prestations: ['Charpente traditionnelle', 'Charpente industrielle', 'Ossature bois', 'Extensions bois', 'Pergolas et carports', 'Réparation et renforcement'],
    avantages: ['Bois certifié PEFC', 'Traitement anti-xylophages', 'Étude structure incluse', 'Garantie décennale'],
    certifications: ['Qualibat', 'PEFC', 'Décennale']
  },
  {
    slug: 'couverture',
    nom: 'Couverture & toiture',
    nomCourt: 'Couverture',
    description: 'Tuiles, ardoises, zinc, bac acier : votre toit entre les mains d\'experts.',
    descriptionLongue: 'La couverture protège votre bien des intempéries. Nos couvreurs expérimentés interviennent sur tous les matériaux : tuiles canal et mécanique, ardoises naturelles, zinc, bac acier, membrane EPDM. Réparation d\'urgence, entretien annuel, réfection complète ou remplacement de couverture : nous assurons tout.',
    image: 'https://images.unsplash.com/photo-1562516155-e0c1ee44059b?w=800&q=85',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
    prestations: ['Tuiles canal et mécanique', 'Ardoises naturelles', 'Toiture zinc', 'Bac acier', 'Membrane EPDM', 'Entretien et nettoyage'],
    avantages: ['Intervention d\'urgence 24h', 'Diagnostic gratuit', 'Garantie 10 ans', 'Traitement anti-mousse'],
    certifications: ['Qualibat', 'Décennale', 'SMABTP']
  },
  {
    slug: 'ravalement',
    nom: 'Ravalement de façades',
    nomCourt: 'Ravalement',
    description: 'Nettoyage, réparation, enduit, peinture : redonnez vie à vos façades.',
    descriptionLongue: 'Le ravalement de façade n\'est pas qu\'esthétique : il protège la structure de votre bâtiment. Nos façadiers traitent tous les matériaux : enduits monocouche et bi-couche, peinture minérale et organique, ITE combinée au ravalement, traitement des fissures et des ponts thermiques. Résultat garanti 10 ans.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    prestations: ['Nettoyage haute pression', 'Traitement des fissures', 'Enduit monocouche', 'Enduit bi-couche', 'Peinture façade', 'ITE + ravalement'],
    avantages: ['Échafaudage inclus', 'Garantie imperméabilité', 'Bilan hydrique gratuit', 'Conformité PLU vérifiée'],
    certifications: ['Qualibat', 'RGE', 'Décennale']
  },
  {
    slug: 'etancheite',
    nom: 'Étanchéité',
    nomCourt: 'Étanchéité',
    description: 'Toitures-terrasses, fondations, caves : étanchéité parfaite garantie.',
    descriptionLongue: 'L\'étanchéité est une spécialité à part entière. Nos étancheurs certifiés Qualibat traitent toitures-terrasses inaccessibles et accessibles, terrasses végétalisées, fondations enterrées, caves, bassins, piscines et ouvrages d\'art. Membrane bicouche, résine polyuréthane, EPDM, PVC : nous choisissons la solution adaptée.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    prestations: ['Toiture-terrasse inaccessible', 'Toiture-terrasse accessible', 'Terrasse végétalisée', 'Fondations et caves', 'Bassins et piscines', 'Injection de résine'],
    avantages: ['Diagnostic humidité offert', 'Garantie 10 ans', 'Test d\'infiltration inclus', 'Intervention urgence'],
    certifications: ['Qualibat', 'Décennale', 'CSFE']
  },
]

export function getMetier(slug: string): Metier | undefined {
  return metiers.find(m => m.slug === slug)
}
