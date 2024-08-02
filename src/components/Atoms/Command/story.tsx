import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Command } from '.';

const meta: Meta<typeof Command> = {
  component: Command,
  parameters: {
    docs: {
      subtitle: 'Displays a command or a component that looks like a command.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/command)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Command>;

export const Default: Story = {
  args: {
    children: 'Command',
  },
};
