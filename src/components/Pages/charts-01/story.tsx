import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ChartsPage1 } from '.';
 
const meta: Meta<typeof ChartsPage1> = {
  component: ChartsPage1,
  tags: ['!autodocs'],
  parameters: {
    docs: {
    //   subtitle: 'Displays a button or a component that looks like a button.',
    //   description: {
    //     component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/button)'
    //   },
    },
  },
  args: { onClick: fn() },
};
 
export default meta;
type Story = StoryObj<typeof ChartsPage1>;
 
export const Default: Story = {};
