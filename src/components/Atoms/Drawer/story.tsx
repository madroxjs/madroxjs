import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Drawer } from '.';

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  parameters: {
    docs: {
      subtitle: 'Displays a drawer or a component that looks like a drawer.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/drawer)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {
    children: 'Drawer',
  },
};
