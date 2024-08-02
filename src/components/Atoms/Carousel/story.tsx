import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Carousel } from '.';

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  parameters: {
    docs: {
      subtitle: 'Displays a carousel or a component that looks like a carousel.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/carousel)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    children: 'Carousel',
  },
};
