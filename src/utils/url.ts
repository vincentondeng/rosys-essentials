// Prefixes a site path with the configured base path, so links work both at a domain root
// (the real site) and under /rosys-essentials/ (the GitHub Pages demo).
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
