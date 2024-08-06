import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Toggle } from '.';
import { Bold } from 'lucide-react';

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
    "aria-label": "Toggle Bold",
    children: <Bold className="h-4 w-4" />    ,
  },
};
