import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Menubar } from '.';

const meta: Meta<typeof Menubar> = {
  component: Menubar,
  parameters: {
    docs: {
      subtitle: 'Displays a menubar or a component that looks like a menubar.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/menubar)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Menubar>;

export const Default: Story = {
  args: {
    children: 'Menubar',
  },
};
