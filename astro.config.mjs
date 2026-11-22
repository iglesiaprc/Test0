import { defineConfig } from 'astro/config';

// En GitHub Actions, site y base se calculan solos a partir del repositorio.
const enActions = !!process.env.GITHUB_ACTIONS;
const [owner = '', repo = ''] = (process.env.GITHUB_REPOSITORY || '/').split('/');
const esWebDeUsuario = repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;

export default defineConfig({
  site: enActions ? `https://${owner}.github.io` : 'http://localhost:4321',
  base: enActions && !esWebDeUsuario ? `/${repo}` : '/',
});
