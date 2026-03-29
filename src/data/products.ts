export interface Product {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  price?: string;
  material: string;
  type: string;
  size: 'klein' | 'middel' | 'groot';
  colors: string[];
  dimensions: string;
  features: string[];
  images: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Klassieke Schoudertas',
    description: 'Een tijdloze schoudertas met ruime indeling, perfect voor dagelijks gebruik.',
    fullDescription: 'Een tijdloze schoudertas met ruime indeling, perfect voor dagelijks gebruik. Deze tas combineert functionaliteit met elegantie en wordt volledig met de hand gemaakt van premium leer.',
    material: 'koeienleer',
    type: 'schoudertas',
    size: 'middel',
    colors: ['cognac', 'zwart', 'donkerbruin', 'naturel'],
    dimensions: 'Breedte: 35 cm, Hoogte: 28 cm, Diepte: 12 cm',
    features: [
      'Verstelbare schouderband',
      'Magnetische sluiting',
      'Binnenvak met rits',
      '2 open binnenvakken',
      'Volledig gevoerd met katoenen stof'
    ],
    images: [
      'https://picsum.photos/seed/bag1/800/600',
      'https://picsum.photos/seed/bag1-2/800/600',
      'https://picsum.photos/seed/bag1-3/800/600'
    ]
  },
  {
    id: '2',
    name: 'Vintage Rugzak',
    description: 'Stijlvolle rugzak met vintage uitstraling en praktische vakken.',
    fullDescription: 'Stijlvolle rugzak met vintage uitstraling en praktische vakken. Perfect voor dagelijks gebruik, reizen of een dag in de natuur. De combinatie van robuust leer en doordacht design maakt deze rugzak tot een betrouwbare metgezel.',
    material: 'koeienleer',
    type: 'rugzak',
    size: 'groot',
    colors: ['bruin', 'grijs', 'olijfgroen', 'zwart'],
    dimensions: 'Breedte: 30 cm, Hoogte: 40 cm, Diepte: 15 cm',
    features: [
      'Gewatteerde laptopsleeve (tot 15 inch)',
      'Trekkoord sluiting met gesp',
      'Voorvak met rits',
      'Zijvakken voor waterfles',
      'Gevoerd interieur',
      'Metalen hardware in brons'
    ],
    images: [
      'https://picsum.photos/seed/backpack/800/600',
      'https://picsum.photos/seed/backpack2/800/600'
    ]
  },
  {
    id: '3',
    name: 'Minimalistische Tote',
    description: 'Een clean design totebag, ideaal voor werk of boodschappen.',
    fullDescription: 'Een clean design totebag, ideaal voor werk of boodschappen. Deze veelzijdige tas heeft een tijdloos design dat bij elke gelegenheid past. De ruime vorm biedt veel opbergruimte terwijl het minimalistische design voor een elegante uitstraling zorgt.',
    material: 'koeienleer',
    type: 'tote',
    size: 'groot',
    colors: ['naturel', 'cognac', 'donkerblauw', 'zwart'],
    dimensions: 'Breedte: 38 cm, Hoogte: 35 cm, Diepte: 10 cm',
    features: [
      'Open bovenkant',
      'Optioneel: magnetische drukknop sluiting',
      'Binnenvak met rits voor waardevolle spullen',
      '2 open binnenvakken voor telefoon en sleutels',
      'Stevige bodem',
      'Handgenaaide hengsels'
    ],
    images: [
      'https://picsum.photos/seed/tote/800/600',
      'https://picsum.photos/seed/tote2/800/600'
    ]
  },
  {
    id: '4',
    name: 'Crossbody Tas',
    description: 'Compacte crossbody tas, perfect voor reizen of een avondje uit.',
    fullDescription: 'Compacte crossbody tas, perfect voor reizen of een avondje uit. Deze handige tas laat je handen vrij terwijl je al je essentials veilig bij je draagt. Het compacte formaat maakt hem ideaal voor stedentrips en festivals.',
    material: 'koeienleer',
    type: 'crossbody',
    size: 'klein',
    colors: ['zwart', 'cognac', 'donkerbruin', 'olijfgroen'],
    dimensions: 'Breedte: 22 cm, Hoogte: 16 cm, Diepte: 7 cm',
    features: [
      'Verstelbare crossbody band',
      'Ritssluiting',
      'Binnenvak voor telefoon',
      'Voorvak met ritssluiting',
      'Veilige binnenzak met rits',
      'Volledig gevoerd'
    ],
    images: [
      'https://picsum.photos/seed/crossbody/800/600'
    ]
  },
  {
    id: '5',
    name: 'Laptop Tas',
    description: 'Professionele laptoptas met gewatteerde laptop bescherming tot 15 inch.',
    fullDescription: 'Professionele laptoptas met gewatteerde laptop bescherming tot 15 inch. Combineer stijl met functionaliteit voor het werk of onderweg. Deze tas biedt uitstekende bescherming voor je apparatuur met een professionele uitstraling.',
    material: 'koeienleer',
    type: 'laptoptas',
    size: 'middel',
    colors: ['zwart', 'cognac', 'donkerbruin'],
    dimensions: 'Breedte: 38 cm, Hoogte: 28 cm, Diepte: 10 cm',
    features: [
      'Gewatteerde laptopsleeve (tot 15 inch)',
      'Ritssluiting met extra beveiliging',
      'Voorvak voor documenten en accessoires',
      'Binnenvakken voor tablet en telefoon',
      'Verstelbare schouderband en handgrepen',
      'Volledig gevoerd met beschermend materiaal'
    ],
    images: [
      'https://picsum.photos/seed/laptop/800/600'
    ]
  },
  {
    id: '6',
    name: 'Weekendtas',
    description: 'Ruime weekendtas voor al je spullen tijdens een kort uitje.',
    fullDescription: 'Ruime weekendtas voor al je spullen tijdens een kort uitje. Deze tas biedt volop ruimte voor kleding, schoenen en al je benodigdheden voor een weekendje weg. Het klassieke design maakt hem geschikt voor elke gelegenheid.',
    material: 'koeienleer',
    type: 'weekendtas',
    size: 'groot',
    colors: ['bruin', 'naturel', 'cognac', 'zwart'],
    dimensions: 'Breedte: 50 cm, Hoogte: 30 cm, Diepte: 25 cm',
    features: [
      'Extra ruime hoofdindeling',
      'Ritssluiting met dubbele ritsen',
      'Binnenvak met rits voor waardevolle spullen',
      'Zijvakken voor schoenen of natte spullen',
      'Stevige handgrepen en schouderband',
      'Versterkte bodem voor stabiliteit',
      'Volledig gevoerd'
    ],
    images: [
      'https://picsum.photos/seed/weekend/800/600'
    ]
  }
];
