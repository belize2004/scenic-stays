/**
 * Cloudflare Image Resizing helper.
 * Local/dev: returns the path as-is with a static srcset scaffold.
 * Production: swap base to `/cdn-cgi/image/...` once Pages is on a CF zone.
 */
export type CfImgOptions = {
  widths?: number[];
  quality?: number;
  fit?: 'cover' | 'contain' | 'scale-down';
};

export function cfImg(src: string, opts: CfImgOptions = {}) {
  const widths = opts.widths ?? [640, 960, 1280, 1920];
  // Placeholder phase: local files under /public — no transforms yet.
  const srcset = widths.map((w) => `${src} ${w}w`).join(', ');
  return {
    src,
    srcset,
    sizes: '(min-width: 960px) 80vw, 100vw',
  };
}
