import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";

const env = loadEnv(import.meta.env.MODE, process.cwd(), 'ASTRO_');
const siteURL = env.ASTRO_BASE_URL;

console.log('Site URL is', siteURL)

// https://astro.build/config
export default defineConfig({
    site: siteURL,
});
