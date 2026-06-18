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
      '/images/collection/schoudertasgr1.jpeg',
      '/images/collection/schoudertasgr3.jpeg',
      '/images/collection/schoudertasgr4.jpeg',
      '/images/collection/schoudertasgr5.jpeg'
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
      '/images/collection/schoudertaskoe1.jpeg',
      '/images/collection/schoudertaskoe2.jpeg',
      '/images/collection/schoudertaskoe3.jpeg'
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
      '/images/collection/rugzaklotr1.jpeg',
      '/images/collection/rugzaklotr2.jpeg',
      '/images/collection/rugzaklotr3.jpeg',
      '/images/collection/rugzaklotr5.jpeg',
      '/images/collection/rugzaklotr4.jpeg'
    ]
  },
  {
    id: '4',
    name: 'Crossbody Tas',
    description: 'Compacte crossbody tas, perfect voor reizen of een avondje uit.',
    fullDescription: 'Compacte crossbody tas, perfect voor reizen of een avondje uit. Deze handige tas laat je hands vrij terwijl je al je essentials veilig bij je draagt. Het compacte formaat maakt hem ideaal voor stedentrips en festivals.',
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
      '/images/collection/schoudertaszwart2.1.jpeg',
      '/images/collection/schoudertaszwart2.2.jpeg'
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
      '/images/collection/schoudertasgeel1.jpeg',
      '/images/collection/schoudertasgeel2.jpeg'
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
      'Zijvakken voor schoenen of extra spullen',
      'Stevige handgrepen en schouderband',
      'Versterkte bodem voor stabiliteit',
      'Volledig gevoerd'
    ],
    images: [
      '/images/collection/schoudertasdonkgr1.jpeg',
      '/images/collection/schoudertasdonkgr2.jpeg',
      '/images/collection/schoudertasdonkgr3.jpeg'
    ]
  },
  {
    id: '7',
    name: 'Elegante Heuptas',
    description: 'Stijlvolle en compacte heuptas, ideaal voor festivals en wandelingen.',
    fullDescription: 'Een stijlvolle en compacte heuptas, ideaal voor festivals, wandelingen of dagelijks gebruik. Handgemaakt van hoogwaardig leer met een verstelbare riem zodat je de tas zowel om je heup als crossbody kunt dragen.',
    material: 'koeienleer',
    type: 'heuptas',
    size: 'klein',
    colors: ['zwart', 'cognac', 'olijfgroen'],
    dimensions: 'Breedte: 20 cm, Hoogte: 12 cm, Diepte: 5 cm',
    features: [
      'Verstelbare riem met stevige gesp',
      'Hoofdvak met ritssluiting',
      'Handig achtervak met rits voor extra veiligheid',
      'Volledig gevoerd'
    ],
    images: [
      '/images/collection/schoudertasgroen1.jpeg',
      '/images/collection/schoudertasgroen2.jpeg',
      '/images/collection/schoudertasgroen3.jpeg',
      '/images/collection/schoudertasgroen4.jpeg'
    ]
  },
  {
    id: '8',
    name: 'Klassieke Handtas',
    description: 'Chique handtas met een stevige vormgeving, perfect voor formele gelegenheden.',
    fullDescription: 'Een chique en stevig vormgegeven handtas voor formele gelegenheden of een elegante alledaagse look. Gemaakt van stevig leer dat zijn vorm optimaal behoudt, voorzien van comfortabele handvatten en een afneembare schouderband.',
    material: 'koeienleer',
    type: 'handtas',
    size: 'middel',
    colors: ['zwart', 'donkerbruin', 'bordeaux'],
    dimensions: 'Breedte: 28 cm, Hoogte: 22 cm, Diepte: 10 cm',
    features: [
      'Comfortabele dubbele handgrepen',
      'Afneembare en verstelbare schouderband',
      'Hoofdvak met veilige ritssluiting',
      'Binnenvak met rits en handige steekvakken',
      'Metalen beschermnoppen aan de onderkant'
    ],
    images: [
      '/images/collection/schoudertaszw1.jpeg',
      '/images/collection/schoudertaszw2.jpeg',
      '/images/collection/schoudertaszw3.jpeg',
      '/images/collection/schoudertaszw4.jpeg'
    ]
  }
];
