import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Sonner } from '.';

const meta: Meta<typeof Sonner> = {
  component: Sonner,
  parameters: {
    docs: {
      subtitle: 'Displays a sonner or a component that looks like a sonner.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/sonner)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Sonner>;

export const Default: Story = {
  args: {
    children: 'Sonner',
  },
};
