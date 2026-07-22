/**
 * SEO helpers — canonical + JSON-LD. Every ranking template (T2/T3/T5/T4) should use these.
 */

export type Crumb = { label: string; href?: string };

export function absoluteUrl(path: string, site = 'https://scenicstays.flowwebdesigner.com') {
  const base = site.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}

export function breadcrumbJsonLd(items: Crumb[], site?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href || i === items.length - 1
        ? { item: absoluteUrl(item.href ?? pathFromTrail(items), site) }
        : {}),
    })),
  };
}

function pathFromTrail(items: Crumb[]) {
  const lastWithHref = [...items].reverse().find((i) => i.href);
  return lastWithHref?.href ?? '/';
}

export type ItemListEntry = {
  name: string;
  url: string;
  image?: string;
  position: number;
};

export function itemListJsonLd(name: string, items: ItemListEntry[], site?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item) => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      url: absoluteUrl(item.url, site),
      ...(item.image ? { image: absoluteUrl(item.image, site) } : {}),
    })),
  };
}

export function lodgingBusinessJsonLd(opts: {
  name: string;
  description: string;
  url: string;
  image: string;
  addressLocality: string;
  addressRegion?: string;
  /** Nightly rate floor — rendered as "From $N". */
  priceFrom?: number;
  latitude?: number;
  longitude?: number;
  numberOfRooms?: number;
  /** Max guest count. */
  occupancy?: number;
  amenities?: string[];
  petsAllowed?: boolean;
  site?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.url, opts.site),
    image: absoluteUrl(opts.image, opts.site),
    address: {
      '@type': 'PostalAddress',
      addressLocality: opts.addressLocality,
      addressRegion: opts.addressRegion ?? 'FL',
      addressCountry: 'US',
    },
    ...(opts.priceFrom != null
      ? { priceRange: `From $${opts.priceFrom.toLocaleString('en-US')}` }
      : {}),
    ...(opts.latitude != null && opts.longitude != null
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: opts.latitude,
            longitude: opts.longitude,
          },
        }
      : {}),
    ...(opts.numberOfRooms ? { numberOfRooms: opts.numberOfRooms } : {}),
    ...(opts.occupancy != null
      ? {
          occupancy: {
            '@type': 'QuantitativeValue',
            maxValue: opts.occupancy,
          },
        }
      : {}),
    ...(opts.amenities?.length
      ? {
          amenityFeature: opts.amenities.map((name) => ({
            '@type': 'LocationFeatureSpecification',
            name,
            value: true,
          })),
        }
      : {}),
    ...(opts.petsAllowed != null ? { petsAllowed: opts.petsAllowed } : {}),
  };
}
