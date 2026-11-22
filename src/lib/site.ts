import secciones from '../data/secciones.json';
import anuncios from '../data/anuncios.json';
import directos from '../data/directos.json';
import { hoyMadrid } from './util';

export const activa = (id: string) => secciones.items.find((s) => s.id === id)?.activa !== false;

export function anunciosVisibles() {
  const hoy = hoyMadrid();
  return (anuncios.items as any[])
    .filter((a) => a.estado === 'publicado' && (!a.publicado || a.publicado <= hoy) && (!a.hasta || a.hasta >= hoy))
    .sort((a, b) => Number(!!b.destacado) - Number(!!a.destacado) || (b.publicado || '').localeCompare(a.publicado || ''));
}

export function directosPorEstado() {
  const l = directos.items as any[];
  const por = (e: string) => l.filter((d) => d.estado === e);
  return {
    enDirecto: por('en_directo'),
    proximos: por('programado').sort((a, b) => a.fecha.localeCompare(b.fecha)),
    anteriores: por('finalizado').sort((a, b) => b.fecha.localeCompare(a.fecha)),
  };
}
