import { resolve } from 'path';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

const NAME = 'Test';

export default defineConfig({
    base: './',
    build: {
        minify: false,
        outDir: 'dist',
        lib: {
            entry: resolve(__dirname, 'src/main.js'),
            name: NAME,
            fileName: NAME.toLowerCase() + '-vite',
            formats: ['es'],
        },
    },
    plugins: [svelte()],
});
