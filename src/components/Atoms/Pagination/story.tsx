import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Pagination } from '.';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  parameters: {
    docs: {
      subtitle: 'Displays a pagination or a component that looks like a pagination.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/pagination)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    children: 'Pagination',
  },
};
