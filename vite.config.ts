import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        allowedHosts: ['localhost', '127.0.0.1', '0.0.0.0'],
    },
    assetsInclude: ['**/*.wasm', '**/*.woff2'], // Include WASM and font files as assets
});
