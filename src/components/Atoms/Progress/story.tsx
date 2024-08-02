import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Progress } from '.';

const meta: Meta<typeof Progress> = {
  component: Progress,
  parameters: {
    docs: {
      subtitle: 'Displays a progress or a component that looks like a progress.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/progress)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    children: 'Progress',
  },
};
