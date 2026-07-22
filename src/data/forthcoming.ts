import { resorts } from './site';

export type ForthcomingPage = {
  title: string;
  kind: 'page' | 'record' | 'journal' | 'collection' | 'index' | 'resort';
  back: { href: string; label: string };
};

/** Planned sitemap paths not yet built as real templates — prerendered as stubs. */
export function forthcomingPages(): Record<string, ForthcomingPage> {
  const map: Record<string, ForthcomingPage> = {
    '/offers': { title: 'The Offers', kind: 'page', back: { href: '/rentals', label: 'The Collection' } },
    '/management': {
      title: 'Property Management',
      kind: 'page',
      back: { href: '/', label: 'Return home' },
    },
    '/real-estate': { title: 'Real Estate', kind: 'page', back: { href: '/', label: 'Return home' } },
    '/about': { title: 'Our Story', kind: 'page', back: { href: '/', label: 'Return home' } },
    '/contact': { title: 'Contact', kind: 'page', back: { href: '/', label: 'Return home' } },
    '/faqs': { title: 'Questions', kind: 'page', back: { href: '/', label: 'Return home' } },
    '/careers': { title: 'Careers', kind: 'page', back: { href: '/', label: 'Return home' } },
    '/policies': { title: 'Rental Policies', kind: 'record', back: { href: '/', label: 'Return home' } },
    '/whats-included': {
      title: "What's Included",
      kind: 'record',
      back: { href: '/', label: 'Return home' },
    },
    '/privacy': { title: 'Privacy', kind: 'record', back: { href: '/', label: 'Return home' } },
    '/terms': { title: 'Terms', kind: 'record', back: { href: '/', label: 'Return home' } },
    '/journal': { title: 'The Journal', kind: 'journal', back: { href: '/', label: 'Return home' } },
    '/journal/guides': {
      title: 'Destination Guides',
      kind: 'journal',
      back: { href: '/journal', label: 'The Journal' },
    },
    '/journal/things-to-do': {
      title: 'Things To Do',
      kind: 'journal',
      back: { href: '/journal', label: 'The Journal' },
    },
    '/journal/weddings': {
      title: 'Weddings & Events',
      kind: 'journal',
      back: { href: '/journal', label: 'The Journal' },
    },
    '/journal/beach-quiz': {
      title: 'Which Beach Are You?',
      kind: 'journal',
      back: { href: '/journal', label: 'The Journal' },
    },
    '/journal/guides/30a': {
      title: '30A Guide',
      kind: 'journal',
      back: { href: '/journal/guides', label: 'Destination Guides' },
    },
    '/journal/guides/destin': {
      title: 'Destin Guide',
      kind: 'journal',
      back: { href: '/journal/guides', label: 'Destination Guides' },
    },
    '/journal/guides/navarre': {
      title: 'Navarre Beach Guide',
      kind: 'journal',
      back: { href: '/journal/guides', label: 'Destination Guides' },
    },
    '/journal/guides/panama-city-beach': {
      title: 'Panama City Beach Guide',
      kind: 'journal',
      back: { href: '/journal/guides', label: 'Destination Guides' },
    },
    '/rentals/okaloosa-island': {
      title: 'Okaloosa Island',
      kind: 'collection',
      back: { href: '/rentals', label: 'All properties' },
    },
    '/rentals/panama-city-beach': {
      title: 'Panama City Beach',
      kind: 'collection',
      back: { href: '/rentals', label: 'All properties' },
    },
    '/rentals/a-z': {
      title: 'A–Z Property List',
      kind: 'index',
      back: { href: '/rentals', label: 'All properties' },
    },
    '/rentals/collections/gulf-front': {
      title: 'Gulf Front Homes',
      kind: 'collection',
      back: { href: '/rentals', label: 'All properties' },
    },
    '/rentals/collections/private-pools': {
      title: 'Private Pools',
      kind: 'collection',
      back: { href: '/rentals', label: 'All properties' },
    },
    '/rentals/collections/pet-friendly': {
      title: 'Pet Friendly',
      kind: 'collection',
      back: { href: '/rentals', label: 'All properties' },
    },
    '/rentals/collections/golf-cart': {
      title: 'Golf Cart Included',
      kind: 'collection',
      back: { href: '/rentals', label: 'All properties' },
    },
    '/rentals/collections/100': {
      title: 'The 100 Collection',
      kind: 'collection',
      back: { href: '/rentals', label: 'All properties' },
    },
  };

  for (const r of resorts) {
    map[r.href] = {
      title: r.name,
      kind: 'resort',
      back: { href: '/rentals', label: 'All properties' },
    };
  }

  return map;
}

export const KIND_COPY: Record<string, string> = {
  page: 'This chapter is being written.',
  record: 'This page is being set in type.',
  journal: 'The first entries are being prepared.',
  collection: 'This collection is being gathered.',
  index: 'The index is being compiled.',
  resort: 'This resort is being photographed.',
  default: 'This section is forthcoming.',
};
