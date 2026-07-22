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

export const residences: Record<string, Residence> = {
  'the-glass-house': {
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
        quote: 'Sink into the sofa, the linens, the emerald waves coming to shore — life can\'t be any better.',
        attribution: 'Camille · July',
      },
      {
        quote: 'We watched every sunset from the same chair. The house disappears into the view.',
        attribution: 'James · October',
      },
    ],
    mapLabel: '30.32° N — Seacrest Beach',
    nearby: ['morning-star', 'azure-retreat'],
  },
};
