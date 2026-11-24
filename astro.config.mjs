import { defineConfig, passthroughImageService } from 'astro/config';

export default defineConfig({
  site: 'https://imranhaqeem.xyz',
  output: 'static',
  trailingSlash: 'ignore',
  image: {
    service: passthroughImageService(),
  },
});
