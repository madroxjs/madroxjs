import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Form } from '.';

const meta: Meta<typeof Form> = {
  component: Form,
  parameters: {
    docs: {
      subtitle: 'Displays a form or a component that looks like a form.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/form)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args: {
    children: 'Form',
  },
};
