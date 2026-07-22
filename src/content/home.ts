/** Homepage placeholder content — swap without touching components. Fiction until CMS/API. */
export const homeContent = {
  hero: {
    eyebrow: 'Destin — 30A — Navarre — Panama City Beach',
    headline: 'The Emerald Coast,',
    italicWord: 'properly.',
    caption: 'Fig. 01 — Seagrove, first light',
    coordinate: '30.32° N',
    image: '/images/placeholders/hero-gulf.jpg',
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
      overlap: 'end' as const,
      background: 'paper' as const,
    },
    {
      name: 'Morning Star',
      whisper: 'Alys Beach · Sleeps 8 · Steps to sand',
      prose: '',
      cta: { label: 'Discover the interiors', href: '/rentals/morning-star' },
      image: '/images/placeholders/morning-star.jpg',
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
    },
    {
      numeral: 'II.',
      name: 'Destin',
      sublabel: 'The harbor',
      href: '/rentals/destin',
      image: '/images/placeholders/film-destin.jpg',
    },
    {
      numeral: 'III.',
      name: 'Navarre',
      sublabel: 'The longest pier',
      href: '/rentals/navarre',
      image: '/images/placeholders/film-navarre.jpg',
    },
  ],
  guestbook: {
    folio: { number: '03', name: 'The Guestbook' },
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
    folio: { number: '02', name: 'The Resorts' },
    headline: 'The Resort Collection',
    items: [
      { n: '01', name: 'SunDestin', whisper: 'Oceanfront Gulf suites', href: '/resorts/sundestin' },
      { n: '02', name: 'Emerald Towers', whisper: 'The height of luxury', href: '/resorts/emerald-towers' },
      { n: '03', name: 'Silver Shells', whisper: 'Sandestin exclusives', href: '/resorts/silver-shells' },
    ],
  },
  closing: {
    quiz: { prompt: 'Which beach are you?', linkLabel: 'Take the quiz', href: '/journal/beach-quiz' },
    line: "The season's quietest luxury is time.",
    columns: [
      {
        title: 'Locally owned.',
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
