/** Añade la ruta base del repositorio a rutas internas (/uploads/x.jpg, /directos/). */
export const url = (p = ''): string => {
  if (!p || /^(https?:|mailto:|tel:)/.test(p)) return p;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + (p.startsWith('/') ? p : '/' + p);
};

/** Fecha de hoy en Madrid (YYYY-MM-DD): igual para todos los visitantes. */
export const hoyMadrid = (): string =>
  new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Madrid' }).format(new Date());

export const ytId = (u = ''): string =>
  (u.match(/(?:v=|youtu\.be\/|\/live\/|\/embed\/|\/shorts\/)([\w-]{11})/) || [])[1] || '';

/** Acepta 'YYYY-MM-DD' o 'YYYY-MM-DDTHH:mm' (hora de Madrid, sin conversiones). */
export const fechaLarga = (s = ''): string => {
  const [d, t] = s.split('T');
  const [y, m, dd] = d.split('-').map(Number);
  const f = new Intl.DateTimeFormat('es-ES', { dateStyle: 'long', timeZone: 'UTC' })
    .format(new Date(Date.UTC(y, m - 1, dd)));
  return t ? `${f}, ${t.slice(0, 5)} h` : f;
};
