import React from 'react'
import type { Preview } from "@storybook/react";

import '../src/styles/globals.css';

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [
    (Story) => <div className='w-full flex justify-center align-center'><Story /></div>
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  argTypes: {
    children: { table: { disable: true } },
    asChild: { table: { disable: true } },
  },
};

export default preview;
