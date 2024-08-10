import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  // stories: ["../**/*.mdx", "../src/**/story.@(js|jsx|mjs|ts|tsx)"], // Default
  // stories: ["../src/components/Atoms/Atom/story.@(js|jsx|mjs|ts|tsx)"], // For screenshots
  stories: ["../src/documentation/**/*.mdx", "../src/components/Atoms/Atom/story.@(js|jsx|mjs|ts|tsx)"], //Documentation
  addons: [
    "@storybook/addon-onboarding",
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
