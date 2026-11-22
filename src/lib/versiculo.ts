import { hoyMadrid } from './util';

export type Versiculo = { referencia: string; texto: string; activo?: boolean };
export type Fijado = { referencia?: string; fecha?: string };

/** Versículo fijado para hoy, o rotación determinista por fecha (zona Madrid). */
export function elegir(items: Versiculo[], fijado?: Fijado, hoy = hoyMadrid()): Versiculo | null {
  if (fijado?.fecha === hoy && fijado.referencia) {
    const f = items.find((v) => v.referencia.trim() === fijado.referencia!.trim());
    if (f) return f;
  }
  const activos = items.filter((v) => v.activo !== false);
  if (!activos.length) return null;
  const [y, m, d] = hoy.split('-').map(Number);
  const dia = Math.floor(Date.UTC(y, m - 1, d) / 86400000);
  return activos[dia % activos.length];
}
