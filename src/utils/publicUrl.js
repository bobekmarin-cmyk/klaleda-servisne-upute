/**
 * Datoteke iz public/ (npr. /images/x.png) moraju uključivati Vite `base` na GitHub Pages.
 */
export function publicUrl(path) {
  if (path == null || typeof path !== 'string') return path
  if (/^(https?:|data:)/i.test(path)) return path
  const base = import.meta.env.BASE_URL || '/'
  const normalized = path.startsWith('/') ? path.slice(1) : path
  return `${base}${normalized}`
}
