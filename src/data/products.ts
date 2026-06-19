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
    name: 'Crossbody grijs',
    description: 'Een grijze schoudertas, perfect voor dagelijks gebruik of een avondje uit.',
    fullDescription: 'Deze tas is gemaakt om je kleine spuillen, zoals telefoons, comfortabel naar mee te nemen',
    material: 'koeienleer',
    type: 'crossbody',
    size: 'klein',
    colors: ['grijs'],
    dimensions: 'Groottematen worden binnen een week geplaatst',
    features: [
      'Verstelbare schouderband'
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
    name: 'Crossbody met koehuid',
    description: 'Stijlvolle crossbody met een zachte buitenkant',
    fullDescription: 'Stijlvolle crossbody. Perfect voor dagelijks gebruik.',
    material: 'koeienleer',
    type: 'crossbody',
    size: 'middel',
    colors: ['bruin', 'wit'],
    dimensions: 'Groottematen worden binnen een week geplaatst',
    features: [
      'Verstelbare schouderband',
      'Ritssluiting'
    ],
    images: [
      '/images/collection/schoudertaskoe1.jpeg',
      '/images/collection/schoudertaskoe2.jpeg',
      '/images/collection/schoudertaskoe3.jpeg'
    ]
  },
  {
    id: '3',
    name: 'Rugzak',
    description: 'Een mooie rugzak, ideaal voor werk en reizen.',
    fullDescription: 'Voor deze rugzak is inspiratie gedaan uit de film Lord of the Rings. De ruime vorm biedt veel opbergruimte terwijl het met de gespen voor een elegante uitstraling zorgt.',
    material: 'koeienleer',
    type: 'rugzak',
    size: 'groot',
    colors: ['grijs'],
    dimensions: 'Groottematen worden binnen een week geplaatst',
    features: [
      'Grote vak sluitbaar met rits',
      'Gespen voor het grote en het kleine vak',
      'Verstelbare schouderbanden',
      'Binnenvak met rits voor waardevolle spullen'
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
    name: 'Crossbody zwart',
    description: 'Compacte crossbody tas, perfect voor dagelijks gebruik.',
    fullDescription: 'Deze handige tas laat je hands vrij terwijl je al je essentials veilig bij je draagt. Het compacte formaat maakt hem ideaal voor dagelijks gebruik.',
    material: 'koeienleer',
    type: 'crossbody',
    size: 'middel',
    colors: ['zwart'],
    dimensions: 'Groottematen worden binnen een week geplaatst',
    features: [
      'Verstelbare schouderband',
      'Ritssluiting'
    ],
    images: [
      '/images/collection/schoudertaszwart2.1.jpeg',
      '/images/collection/schoudertaszwart2.2.jpeg'
    ]
  },
  {
    id: '5',
    name: 'Crossbody geel',
    description: 'Professionele gele crossbody, voor een beetje kleur in het leven.',
    fullDescription: 'Deze tas combineert stijl met functionaliteit voor het werk of dagelijkse bezigheden.',
    material: 'koeienleer',
    type: 'crossbody',
    size: 'middel',
    colors: ['geel'],
    dimensions: 'Groottematen worden binnen een week geplaatst',
    features: [
      'Verstelbare schouderband',
      'Ritssluiting met gesp'
    ],
    images: [
      '/images/collection/schoudertasgeel1.jpeg',
      '/images/collection/schoudertasgeel2.jpeg'
    ]
  },
  {
    id: '6',
    name: 'Crossbody donkergroen',
    description: 'Ruime weekendtas voor al je spullen tijdens een kort uitje.',
    fullDescription: 'Ruime weekendtas voor al je spullen tijdens een kort uitje. Deze tas biedt volop ruimte voor kleding, schoenen en al je benodigdheden voor een weekendje weg. Het klassieke design maakt hem geschikt voor elke gelegenheid.',
    material: 'koeienleer',
    type: 'crossbody',
    size: 'middel',
    colors: ['groen'],
    dimensions: 'Groottematen worden binnen een week geplaatst',
    features: [
      'Verstelbare schouderband',
      'Ritssluiting'
    ],
    images: [
      '/images/collection/schoudertasdonkgr1.jpeg',
      '/images/collection/schoudertasdonkgr2.jpeg',
      '/images/collection/schoudertasdonkgr3.jpeg'
    ]
  },
  {
    id: '7',
    name: 'Crossbody groen',
    description: 'Stijlvolle en compacte crossbody, ideaal voor beide werk en festivals.',
    fullDescription: 'Met deze tas kan je vrolijkheid en kleur brengen aan jouw leven en die van anderen.',
    material: 'koeienleer',
    type: 'crossbody',
    size: 'middel',
    colors: ['groen'],
    dimensions: 'Groottematen worden binnen een week geplaatst',
    features: [
      'Verstelbare schouderband',
      'Ritssluiting'
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
    name: 'Crossbody zwart',
    description: 'Chique handtas met een stevige vormgeving, perfect voor alle soorten gelegenheden.',
    fullDescription: 'Deze tas is gemaakt voor een elegante alledaagse look.',
    material: 'koeienleer',
    type: 'crossbody',
    size: 'middel',
    colors: ['zwart', 'wit'],
    dimensions: 'Groottematen worden binnen een week geplaatst',
    features: [
      'Verstelbare schouderband',
      'Ritssluiting'
    ],
    images: [
      '/images/collection/schoudertaszw1.jpeg',
      '/images/collection/schoudertaszw2.jpeg',
      '/images/collection/schoudertaszw3.jpeg',
      '/images/collection/schoudertaszw4.jpeg'
    ]
  }
];
