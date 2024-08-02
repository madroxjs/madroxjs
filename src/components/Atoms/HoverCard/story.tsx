import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { HoverCard } from '.';

const meta: Meta<typeof HoverCard> = {
  component: HoverCard,
  parameters: {
    docs: {
      subtitle: 'Displays a hovercard or a component that looks like a hovercard.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/hovercard)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  args: {
    children: 'HoverCard',
  },
};
