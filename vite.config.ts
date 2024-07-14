import { defineConfig } from 'vite';
import { resolve } from 'path';
import postcssPresetEnv from 'postcss-preset-env';
import postcssNesting from 'postcss-nesting';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        quality: resolve(__dirname, 'quality.html'),
        offer: resolve(__dirname, 'offer.html'),
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssNesting({
          edition: '2024-02',
        }),
        postcssPresetEnv({ features: { clamp: false }, stage: 2 }),
      ],
    },
  },
});
