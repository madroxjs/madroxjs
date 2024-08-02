import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Switch } from '.';

const meta: Meta<typeof Switch> = {
  component: Switch,
  parameters: {
    docs: {
      subtitle: 'Displays a switch or a component that looks like a switch.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/switch)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    children: 'Switch',
  },
};
