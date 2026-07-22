/** Site-wide contact & brand constants — single source, never confabulate from mockups. */
export const site = {
  brand: 'SCENIC STAYS',
  phone: '850-390-7511',
  phoneHref: 'tel:+18503907511',
  email: 'greetings@scenicstays.com',
  emailHref: 'mailto:greetings@scenicstays.com',
  addressLines: ['PO Box 5383', 'Destin, Florida 32540'] as const,
  addressInline: 'PO Box 5383, Destin, Florida 32540',
  copyrightYear: 2026,
} as const;
