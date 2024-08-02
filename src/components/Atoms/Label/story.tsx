import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Label } from '.';

const meta: Meta<typeof Label> = {
  component: Label,
  parameters: {
    docs: {
      subtitle: 'Displays a label or a component that looks like a label.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/label)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Label',
  },
};
