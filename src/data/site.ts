/**
 * Site-wide constants — single source, never confabulate from mockups.
 * Canonical resort list lives here; Masthead mega-nav + homepage index both import it.
 */
export const site = {
  brand: 'SCENIC STAYS',
  phone: '850-390-7511',
  phoneHref: 'tel:+18503907511',
  /**
   * UNVERIFIED — live site obfuscates the address.
   * Domain is myscenicstays.com (not scenicstays.com). Confirm exact mailbox with client.
   */
  email: 'reservations@myscenicstays.com',
  emailHref: 'mailto:reservations@myscenicstays.com',
  ownerLoginUrl: 'https://www.myscenicstays.com',
  addressLines: ['PO Box 5383', 'Destin, Florida 32540'] as const,
  addressInline: 'PO Box 5383, Destin, Florida 32540',
  copyrightYear: 2026,
} as const;

/** Canonical resort inventory — mega-nav + homepage ResortIndex both source this. */
export const resorts = [
  { name: 'SunDestin Beach Resort', shortName: 'SunDestin', whisper: 'Oceanfront Gulf suites', href: '/resorts/sundestin' },
  { name: 'One Seagrove Place', shortName: 'One Seagrove Place', whisper: 'Seagrove Beach', href: '/resorts/one-seagrove-place' },
  { name: 'The Crescent', shortName: 'The Crescent', whisper: 'Miramar Beach', href: '/resorts/the-crescent' },
  { name: 'Emerald Towers', shortName: 'Emerald Towers', whisper: 'The height of luxury', href: '/resorts/emerald-towers' },
  { name: 'High Pointe Beach Resort', shortName: 'High Pointe', whisper: 'Destin', href: '/resorts/high-pointe' },
  { name: 'Amalfi Coast', shortName: 'Amalfi Coast', whisper: 'Miramar Beach', href: '/resorts/amalfi-coast' },
] as const;
