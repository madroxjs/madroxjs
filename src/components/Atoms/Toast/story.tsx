import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Toast } from '.';

const meta: Meta<typeof Toast> = {
  component: Toast,
  parameters: {
    docs: {
      subtitle: 'Displays a toast or a component that looks like a toast.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/toast)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    children: 'Toast',
  },
};
