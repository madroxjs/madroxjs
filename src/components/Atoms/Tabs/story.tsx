import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Tabs } from '.';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  parameters: {
    docs: {
      subtitle: 'Displays a tabs or a component that looks like a tabs.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/tabs)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    children: 'Tabs',
  },
};
