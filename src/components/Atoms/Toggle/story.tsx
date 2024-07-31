import type { Meta, StoryObj } from '@storybook/react';
import { Bold, Italic } from "lucide-react"

import { Toggle } from '.';
 
const meta: Meta<typeof Toggle> = {
  component: Toggle,
  parameters: {
    docs: {
      subtitle: 'A two-state button that can be either on or off.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/toggle)'
      },
    },
  },
};
 
export default meta;
type Story = StoryObj<typeof Toggle>;
 
export const Default: Story = {
  args: {
    children: <Bold className="h-4 w-4" />
  },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: <Italic className="h-4 w-4" />
    },
  };