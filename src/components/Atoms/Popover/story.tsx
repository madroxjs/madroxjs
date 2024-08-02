import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Popover } from '.';

const meta: Meta<typeof Popover> = {
  component: Popover,
  parameters: {
    docs: {
      subtitle: 'Displays a popover or a component that looks like a popover.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/popover)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    children: 'Popover',
  },
};
