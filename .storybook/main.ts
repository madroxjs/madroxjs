import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from 'vite';
import react from '@vitejs/plugin-react'

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/story.@(js|jsx|mjs|ts|tsx)"], // Default
  // stories: ["../src/components/Atoms/Atom/story.@(js|jsx|mjs|ts|tsx)"], // For screenshots
  // stories: ["../src/documentation/**/*.mdx", "../src/components/Atoms/Atom/story.@(js|jsx|mjs|ts|tsx)"], //Documentation
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y',
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    builder: {
      name: '@storybook/builder-vite',
      options: {
        viteConfigPath: '.storybook/vite.config.ts'
      },
    },
  },
  async viteFinal(config) {
    // config.plugins = []
    return mergeConfig(config, {
      css: {
        postcss: {
          plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
          ],
        },
      },
    });
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        if (prop.parent) {
          // Include props from @radix-ui and exclude other node_modules
          return (
            /@radix-ui/.test(prop.parent.fileName) 
            || !/node_modules/.test(prop.parent.fileName)
            || /cmdk/.test(prop.parent.fileName) 
          );
        }
        return true;
      },
    },
  },
};
export default config;
