import { defineConfig } from 'vite';
import postcssPresetEnv from 'postcss-preset-env';
import postcssLogical from 'postcss-logical';
import postcssNesting from 'postcss-nesting';

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        // postcssLogical({
        //   // @ts-expect-error: looks like bugged types
        //   blockDirection: 'top-to-bottom',
        //   // @ts-expect-error: looks like bugged types
        //   inlineDirection: 'left-to-right',
        // }),
        postcssNesting({
          edition: '2024-02',
        }),
        postcssPresetEnv({ features: { clamp: false }, stage: 2 }),
      ],
    },
  },
});
