import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Toggle } from '.';

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  parameters: {
    docs: {
      subtitle: 'Displays a toggle or a component that looks like a toggle.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/toggle)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    children: 'Toggle',
  },
};
