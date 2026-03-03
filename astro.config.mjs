import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // <--- TIENE QUE ESTAR ESTA IMPORTACIÓN

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()] // <--- Y TIENE QUE ESTAR ESTO AQUÍ
});