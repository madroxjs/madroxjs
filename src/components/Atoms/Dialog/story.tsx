import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Dialog } from '.';

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  parameters: {
    docs: {
      subtitle: 'Displays a dialog or a component that looks like a dialog.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/dialog)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    children: 'Dialog',
  },
};
