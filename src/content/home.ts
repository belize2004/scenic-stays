import { resorts } from '../data/site';

/** Homepage placeholder content — swap without touching components. Fiction until CMS/API. */
export const homeContent = {
  hero: {
    eyebrow: 'Destin — 30A — Navarre — Panama City Beach',
    headline: 'The Emerald Coast,',
    italicWord: 'properly.',
    caption: 'Fig. 01 — Seagrove, first light',
    coordinate: '30.32° N',
    image: '/images/placeholders/hero-gulf.jpg',
    alt: 'Wide view of the Florida Gulf Coast shoreline at first light, pale water meeting white sand.',
    polarity: 'light' as const,
    scrimStrength: 0.15,
  },
  booking: {
    fields: [
      { id: 'destination', label: 'Destination', placeholder: 'Where to?' },
      { id: 'dates', label: 'Dates', placeholder: 'Select dates' },
      { id: 'guests', label: 'Guests', placeholder: 'How many?' },
    ],
    submit: 'Search collection',
  },
  privateHomes: {
    folio: { number: '01', name: 'The Private Homes' },
    headline: 'Chosen slowly, and only once.',
    cta: { label: 'View all private residences', href: '/rentals' },
  },
  properties: [
    {
      name: 'The Glass House',
      whisper: 'Seacrest Beach · Sleeps 12 · Gulf front',
      prose: 'An exercise in transparency. Floor-to-ceiling glass curated for the unhurried traveler.',
      cta: { label: 'Discover the interiors', href: '/rentals/the-glass-house' },
      image: '/images/placeholders/glass-house.jpg',
      alt: 'Minimalist modern beach house with floor-to-ceiling glass facing the Gulf.',
      overlap: 'end' as const,
      background: 'paper' as const,
    },
    {
      name: 'Morning Star',
      whisper: 'Alys Beach · Sleeps 8 · Steps to sand',
      prose: 'White stucco and quiet rooms, a short walk from the public beach access.',
      cta: { label: 'Discover the interiors', href: '/rentals/morning-star' },
      image: '/images/placeholders/morning-star.jpg',
      alt: 'Luxury minimalist living room with floor-to-ceiling windows and soft coastal light.',
      overlap: 'start' as const,
      background: 'vellum' as const,
    },
  ],
  filmstrip: [
    {
      numeral: 'I.',
      name: 'Thirty-A',
      sublabel: 'The villages',
      href: '/rentals/30a',
      image: '/images/placeholders/film-30a.jpg',
      alt: 'Editorial view of a 30A beach town street in late afternoon light.',
    },
    {
      numeral: 'II.',
      name: 'Destin',
      sublabel: 'The harbor',
      href: '/rentals/destin',
      image: '/images/placeholders/film-destin.jpg',
      alt: 'Empty Destin beach stretching toward the horizon under a clear sky.',
    },
    {
      numeral: 'III.',
      name: 'Navarre',
      sublabel: 'The longest pier',
      href: '/rentals/navarre',
      image: '/images/placeholders/film-navarre.jpg',
      alt: 'Sea oats and sand dunes along the Florida Gulf Coast near Navarre.',
    },
  ],
  guestbook: {
    folio: { number: '02', name: 'The Guestbook' },
    quote: 'Sink into the sofa, the linens, the emerald waves coming to shore — life can\'t be any better.',
    attribution: 'Camille · July, One Seagrove Place',
  },
  difference: {
    headline: 'The difference is in the details',
    columns: [
      {
        title: '3 A.M.',
        body: 'A front desk at SunDestin that answers, whatever the hour.',
      },
      {
        title: 'In your pocket',
        body: 'A dedicated guest app, from door codes to dinner plans.',
      },
      {
        title: 'Locally owned',
        body: 'Two hundred combined years on this coastline, and counting.',
      },
    ],
  },
  resorts: {
    folio: { number: '03', name: 'The Resorts' },
    headline: 'The Resort Collection',
    /** First three of the canonical list for the homepage index strip */
    items: resorts.slice(0, 3).map((r, i) => ({
      n: String(i + 1).padStart(2, '0'),
      name: r.shortName,
      whisper: r.whisper,
      href: r.href,
    })),
  },
  closing: {
    quiz: { prompt: 'Which beach are you?', linkLabel: 'Take the quiz', href: '/journal/beach-quiz' },
    line: "The season's quietest luxury is time.",
    columns: [
      {
        title: 'Our story.',
        body: "We don't manage from a distance. We live where you vacation.",
        cta: { label: 'Our story', href: '/about' },
      },
      {
        title: 'For owners.',
        body: 'Management worthy of the house. Your investment deserves a steward.',
        cta: { label: 'Begin an inquiry', href: '/management' },
      },
    ],
  },
} as const;
