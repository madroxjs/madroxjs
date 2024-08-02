import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ScrollArea } from '.';

const meta: Meta<typeof ScrollArea> = {
  component: ScrollArea,
  parameters: {
    docs: {
      subtitle: 'Displays a scrollarea or a component that looks like a scrollarea.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/scrollarea)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  args: {
    children: 'ScrollArea',
  },
};
