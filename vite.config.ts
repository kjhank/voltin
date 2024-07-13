import { defineConfig } from 'vite';
import postcssPresetEnv from 'postcss-preset-env';
import postcssNesting from 'postcss-nesting';

export default defineConfig({
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
