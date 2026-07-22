/**
 * Cloudflare Image Resizing helper.
 *
 * ⚠️ PLACEHOLDER MODE — srcset is COSMETIC.
 * Every width descriptor currently points at the same local file. Phones will
 * download the full-resolution asset until this helper emits real variants via
 * Cloudflare Image Resizing (`/cdn-cgi/image/width=…,format=auto/…`).
 * Do not ship production photography through this path without flipping
 * `CF_IMG_ENABLED` (or equivalent) and verifying Network panel widths.
 */
export type CfImgOptions = {
  widths?: number[];
  quality?: number;
  fit?: 'cover' | 'contain' | 'scale-down';
};

/** Set true only when Pages is on a CF zone with Image Resizing and real variants exist. */
const CF_IMG_ENABLED = false;

export function cfImg(src: string, opts: CfImgOptions = {}) {
  const widths = opts.widths ?? [640, 960, 1280, 1920];

  if (!CF_IMG_ENABLED) {
    // Explicit single-URL srcset so we do not pretend variants exist.
    // Callers still receive a srcset string for API stability; sizes stay honest.
    return {
      src,
      srcset: `${src} ${widths[widths.length - 1]}w`,
      sizes: '(min-width: 960px) 80vw, 100vw',
      /** @deprecated false until CF resizing is wired */
      variantsReady: false as const,
    };
  }

  const srcset = widths
    .map((w) => `/cdn-cgi/image/width=${w},quality=${opts.quality ?? 75},format=auto${src} ${w}w`)
    .join(', ');

  return {
    src: `/cdn-cgi/image/width=${widths[widths.length - 1]},quality=${opts.quality ?? 75},format=auto${src}`,
    srcset,
    sizes: '(min-width: 960px) 80vw, 100vw',
    variantsReady: true as const,
  };
}
