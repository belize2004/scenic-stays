/** Expanded residence content for T3. Fiction until CMS/Guesty. */
export type Residence = {
  slug: string;
  name: string;
  whisper: string;
  destination: string;
  destinationLabel: string;
  dek: string;
  intro: string[];
  coverImage: string;
  coverAlt: string;
  caption: string;
  coordinate: string;
  /** WGS84 for LodgingBusiness geo — keep in sync with mapLabel. */
  geo: { latitude: number; longitude: number };
  rateFrom: number;
  sleeps: number;
  beds: number;
  baths: number;
  gallery: { src: string; alt: string; caption: string; layout: 'full' | 'pair' | 'detail' }[];
  amenities: { heading: string; items: string[] }[];
  reviews: { quote: string; attribution: string }[];
  mapLabel: string;
  nearby: string[];
};

type ResidenceDraft = Omit<Residence, 'amenities' | 'reviews' | 'gallery'> & {
  gallery?: Residence['gallery'];
  amenities?: Residence['amenities'];
  reviews?: Residence['reviews'];
};

const defaultAmenities = (beds: number, baths: number, sleeps: number): Residence['amenities'] => [
  {
    heading: 'The House',
    items: [`${beds} bedrooms`, `${baths} bathrooms`, `Sleeps ${sleeps}`, 'Assigned parking', 'Central air'],
  },
  {
    heading: 'The Kitchen',
    items: ['Full kitchen', 'Dishwasher', 'Coffee', 'Dining for the house'],
  },
  {
    heading: 'Outside',
    items: ['Outdoor seating', 'Grill', 'Beach gear', 'Covered entry'],
  },
  {
    heading: 'Included',
    items: ['Starter amenities', 'Wi‑Fi', 'Linens & towels', 'Local guide book'],
  },
];

const defaultReviews: Residence['reviews'] = [
  {
    quote: 'Quiet finishes, a long table, and evenings that stretch without effort.',
    attribution: 'Elena · June',
  },
  {
    quote: 'We came for the view and stayed for how the house holds the light.',
    attribution: 'Marcus · September',
  },
];

function galleryFromCover(cover: string, alt: string, name: string): Residence['gallery'] {
  return [
    {
      src: cover,
      alt,
      caption: `Fig. 01 — ${name}, late day`,
      layout: 'full',
    },
    {
      src: '/images/placeholders/morning-star.jpg',
      alt: `Living spaces at ${name}.`,
      caption: 'Fig. 02 — The living room',
      layout: 'pair',
    },
    {
      src: '/images/placeholders/sundestin.jpg',
      alt: `Outdoor living near ${name}.`,
      caption: 'Fig. 03 — Outside',
      layout: 'pair',
    },
    {
      src: '/images/placeholders/mega-fig.jpg',
      alt: 'Close-up of coastal materials and finishes.',
      caption: 'Fig. 04 — Material close-up',
      layout: 'detail',
    },
  ];
}

function residence(draft: ResidenceDraft): Residence {
  return {
    ...draft,
    gallery: draft.gallery ?? galleryFromCover(draft.coverImage, draft.coverAlt, draft.name),
    amenities: draft.amenities ?? defaultAmenities(draft.beds, draft.baths, draft.sleeps),
    reviews: draft.reviews ?? defaultReviews,
  };
}

export const residences: Record<string, Residence> = {
  'the-glass-house': residence({
    slug: 'the-glass-house',
    name: 'The Glass House',
    whisper: 'Seacrest Beach · Sleeps 12 · Gulf front · 6 BD / 7 BA',
    destination: 'destin',
    destinationLabel: 'Destin',
    dek: 'An exercise in transparency.',
    intro: [
      'Floor-to-ceiling glass opens every room to the Gulf. The plan is simple: living and dining on the water, bedrooms upstairs with quiet finishes.',
      'Curated for the unhurried traveler — linens, a long table, and a porch that catches the last light.',
      'Seacrest Beach puts you between the villages of 30A and the harbor at Destin, with sand a short walk from the door.',
    ],
    coverImage: '/images/placeholders/glass-house.jpg',
    coverAlt: 'Minimalist modern beach house with floor-to-ceiling glass facing the Gulf.',
    caption: 'Fig. 01 — The Glass House, dusk',
    coordinate: '30.32° N — Seacrest Beach',
    geo: { latitude: 30.32, longitude: -86.12 },
    rateFrom: 685,
    sleeps: 12,
    beds: 6,
    baths: 7,
    gallery: [
      {
        src: '/images/placeholders/glass-house.jpg',
        alt: 'Exterior of The Glass House facing the water.',
        caption: 'Fig. 01 — The facade, late day',
        layout: 'full',
      },
      {
        src: '/images/placeholders/morning-star.jpg',
        alt: 'Living room with floor-to-ceiling glass.',
        caption: 'Fig. 02 — The living room',
        layout: 'pair',
      },
      {
        src: '/images/placeholders/sundestin.jpg',
        alt: 'Covered porch overlooking coastal light.',
        caption: 'Fig. 03 — The porch',
        layout: 'pair',
      },
      {
        src: '/images/placeholders/mega-fig.jpg',
        alt: 'Close-up of coastal architectural materials.',
        caption: 'Fig. 04 — Material close-up',
        layout: 'detail',
      },
    ],
    amenities: [
      {
        heading: 'The House',
        items: ['6 bedrooms', '7 bathrooms', 'Sleeps 12', 'Gulf-front porch', 'Elevator'],
      },
      {
        heading: 'The Kitchen',
        items: ['Chef’s range', 'Double oven', 'Espresso', 'Wine storage'],
      },
      {
        heading: 'Outside',
        items: ['Private beach access', 'Outdoor shower', 'Gas grill', 'Covered dining'],
      },
      {
        heading: 'Included',
        items: ['Daily linens option', 'Starter amenities', 'Wi‑Fi', 'Parking for 4'],
      },
    ],
    reviews: [
      {
        quote:
          "Sink into the sofa, the linens, the emerald waves coming to shore — life can't be any better.",
        attribution: 'Camille · July',
      },
      {
        quote: 'We watched every sunset from the same chair. The house disappears into the view.',
        attribution: 'James · October',
      },
    ],
    mapLabel: '30.32° N — Seacrest Beach',
    nearby: ['morning-star', 'azure-retreat'],
  }),

  'azure-retreat': residence({
    slug: 'azure-retreat',
    name: 'Azure Retreat',
    whisper: 'Miramar Beach · Sleeps 10 · Private pool · 5 BD / 5 BA',
    destination: 'destin',
    destinationLabel: 'Destin',
    dek: 'Courtyard quiet, a short drive to the harbor.',
    intro: [
      'Mid-century lines open onto a basalt-lined pool. The rooms stay cool and deliberate — a house for long mornings and late dinners.',
      'Miramar Beach sits just east of Destin’s pass; the collection places you close enough for the harbor, far enough for stillness.',
    ],
    // TODO: distinct placeholder per property — currently reuses glass-house.jpg
    coverImage: '/images/placeholders/glass-house.jpg',
    coverAlt: 'Coastal residence with a private courtyard pool.',
    caption: 'Fig. 01 — Azure Retreat, afternoon',
    coordinate: '30.37° N — Miramar Beach',
    geo: { latitude: 30.37, longitude: -86.35 },
    rateFrom: 550,
    sleeps: 10,
    beds: 5,
    baths: 5,
    mapLabel: '30.37° N — Miramar Beach',
    nearby: ['the-glass-house', 'the-pearl'],
  }),

  'morning-star': residence({
    slug: 'morning-star',
    name: 'Morning Star',
    whisper: 'Alys Beach · Sleeps 8 · Steps to sand · 4 BD / 4 BA',
    destination: 'destin',
    destinationLabel: 'Destin',
    dek: 'White stucco, soft light, a short walk to the water.',
    intro: [
      'Quiet rooms and pale plaster — Morning Star is built for unhurried days between the village and the public beach access.',
      'The plan favors gathering: a long living room, a kitchen that opens to the porch, bedrooms that stay private upstairs.',
    ],
    coverImage: '/images/placeholders/morning-star.jpg',
    coverAlt: 'Luxury minimalist living room with soft coastal light.',
    caption: 'Fig. 01 — Morning Star, morning',
    coordinate: '30.28° N — Alys Beach',
    geo: { latitude: 30.28, longitude: -86.03 },
    rateFrom: 485,
    sleeps: 8,
    beds: 4,
    baths: 4,
    mapLabel: '30.28° N — Alys Beach',
    nearby: ['the-glass-house', 'the-pearl'],
  }),

  'the-pearl': residence({
    slug: 'the-pearl',
    name: 'The Pearl',
    whisper: 'Crystal Beach · Sleeps 14 · Gulf front · 7 BD / 7 BA',
    destination: 'destin',
    destinationLabel: 'Destin',
    dek: 'Stone and oak against the open Gulf.',
    intro: [
      'Dark volcanic stone meets bleached oak in a house sized for a full gathering — gulf front, generous porch, rooms that face the water.',
      'Crystal Beach keeps the horizon clear. The Pearl is for parties that still want quiet corners.',
    ],
    // TODO: distinct placeholder per property
    coverImage: '/images/placeholders/sundestin.jpg',
    coverAlt: 'Gulf-front residence with contrasting stone and wood textures.',
    caption: 'Fig. 01 — The Pearl, dusk',
    coordinate: '30.39° N — Crystal Beach',
    geo: { latitude: 30.39, longitude: -86.48 },
    rateFrom: 720,
    sleeps: 14,
    beds: 7,
    baths: 7,
    mapLabel: '30.39° N — Crystal Beach',
    nearby: ['harbor-masters-suite', 'azure-retreat'],
  }),

  'harbor-masters-suite': residence({
    slug: 'harbor-masters-suite',
    name: "Harbor Master's Suite",
    whisper: 'Destin Harbor · Sleeps 8 · Harbor view · 3 BD / 3 BA',
    destination: 'destin',
    destinationLabel: 'Destin',
    dek: 'Front-row seats to the fleet at dusk.',
    intro: [
      'Windows face the historic harbor — the working boats returning, the East Pass beyond. Interiors stay simple so the view does the talking.',
      'A suite for travelers who want Destin’s pulse without giving up calm finishes and a proper kitchen.',
    ],
    // TODO: distinct placeholder per property — currently reuses film-destin.jpg
    coverImage: '/images/placeholders/film-destin.jpg',
    coverAlt: 'Harbor-facing residence overlooking Destin Harbor.',
    caption: 'Fig. 01 — Harbor Master’s Suite, evening',
    coordinate: '30.39° N — Destin Harbor',
    geo: { latitude: 30.39, longitude: -86.51 },
    rateFrom: 395,
    sleeps: 8,
    beds: 3,
    baths: 3,
    mapLabel: '30.39° N — Destin Harbor',
    nearby: ['the-pearl', 'azure-retreat'],
  }),
};
