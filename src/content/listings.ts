/** Catalog / listing placeholder data — fiction until Guesty. */
export type Listing = {
  slug: string;
  name: string;
  whisper: string;
  prose: string;
  rateFrom: number;
  image: string;
  alt: string;
  destination: string;
};

export const destinations = {
  destin: {
    slug: 'destin',
    name: 'Destin.',
    dek: 'The harbor town, from bay to beach.',
    caption: 'Fig. 08 — East Pass, from above',
    coordinate: '30.39° N',
    image: '/images/placeholders/film-destin.jpg',
    alt: 'Aerial view toward Destin Harbor and the East Pass.',
    polarity: 'dark' as const,
    scrimStrength: 0.4,
    prose:
      'Destin sits between the Gulf and the Choctawhatchee Bay — a working harbor that still returns the fleet at dusk, and a shoreline of quartz sand that stays pale even in high summer. The collection here runs from harbor-view suites to gulf-front houses, chosen for the same reason we choose anywhere: the rooms earn the view.',
  },
  '30a': {
    slug: '30a',
    name: '30A.',
    dek: 'The scenic highway, village to village.',
    caption: 'Fig. 12 — 30A, late afternoon',
    coordinate: '30.29° N',
    image: '/images/placeholders/film-30a.jpg',
    alt: 'Aerial view along Scenic Highway 30A and the Gulf shoreline.',
    polarity: 'dark' as const,
    scrimStrength: 0.4,
    prose:
      'Thirty-A threads the coastal villages — Seaside, WaterColor, Alys, Rosemary — where dune walks and quiet streets set the pace. The collection here favors houses within a short walk of the sand, chosen for architecture that belongs to the place.',
  },
  navarre: {
    slug: 'navarre',
    name: 'Navarre.',
    dek: 'The quieter stretch of the Emerald Coast.',
    caption: 'Fig. 09 — Navarre Beach, from the gulf',
    coordinate: '30.38° N',
    image: '/images/placeholders/film-navarre.jpg',
    alt: 'Wide view of Navarre Beach and the Gulf of Mexico.',
    polarity: 'dark' as const,
    scrimStrength: 0.4,
    prose:
      'Navarre keeps a longer horizon and a slower rhythm — miles of beach with fewer interruptions. Homes here are chosen for space, light, and a direct relationship to the water.',
  },
} as const;

export const listings: Listing[] = [
  {
    slug: 'azure-retreat',
    name: 'Azure Retreat',
    // TODO: Destin page listing tagged Miramar Beach — confirm geography or move to Miramar destination.
    whisper: 'Miramar Beach · Sleeps 10 · Private pool',
    prose: 'Mid-century elegance meets coastal serenity. A secluded courtyard with a basalt-lined pool.',
    rateFrom: 550,
    // TODO: distinct placeholder per property — currently reuses glass-house.jpg
    image: '/images/placeholders/glass-house.jpg',
    alt: 'Coastal residence with a private courtyard pool.',
    destination: 'destin',
  },
  {
    slug: 'the-glass-house',
    name: 'The Glass House',
    whisper: 'Seacrest Beach · Sleeps 12 · Gulf front',
    prose: 'An exercise in transparency. Floor-to-ceiling glass curated for the unhurried traveler.',
    rateFrom: 685,
    image: '/images/placeholders/glass-house.jpg',
    alt: 'Minimalist modern beach house with floor-to-ceiling glass facing the Gulf.',
    destination: 'destin',
  },
  {
    slug: 'morning-star',
    name: 'Morning Star',
    whisper: 'Alys Beach · Sleeps 8 · Steps to sand',
    prose: 'White stucco and quiet rooms, a short walk from the public beach access.',
    rateFrom: 485,
    image: '/images/placeholders/morning-star.jpg',
    alt: 'Luxury minimalist living room with soft coastal light.',
    destination: 'destin',
  },
  {
    slug: 'the-pearl',
    name: 'The Pearl',
    whisper: 'Crystal Beach · Sleeps 14 · Gulf front',
    prose: 'Dark volcanic stone and bleached oak against the Gulf — an architectural contrast.',
    rateFrom: 720,
    // TODO: distinct placeholder per property
    image: '/images/placeholders/sundestin.jpg',
    alt: 'Gulf-front residence with contrasting stone and wood textures.',
    destination: 'destin',
  },
  {
    slug: 'harbor-masters-suite',
    name: "Harbor Master's Suite",
    whisper: 'Destin Harbor · Sleeps 8 · Harbor view',
    prose: 'Front-row seats to the fleet returning at dusk over the historic harbor.',
    rateFrom: 395,
    // TODO: distinct placeholder per property — currently reuses film-destin.jpg
    image: '/images/placeholders/film-destin.jpg',
    alt: 'Harbor-facing residence overlooking Destin Harbor.',
    destination: 'destin',
  },
];

export const filterChips = [
  { id: 'all', label: 'All' },
  { id: 'gulf-front', label: 'Gulf Front' },
  { id: 'private-pool', label: 'Private Pool' },
  { id: 'pet-friendly', label: 'Pet Friendly' },
  { id: 'sleeps-10', label: 'Sleeps 10+' },
] as const;
