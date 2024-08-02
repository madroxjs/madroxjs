import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Sheet } from '.';

const meta: Meta<typeof Sheet> = {
  component: Sheet,
  parameters: {
    docs: {
      subtitle: 'Displays a sheet or a component that looks like a sheet.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/sheet)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  args: {
    children: 'Sheet',
  },
};
