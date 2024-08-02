import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { 
  ResizablePanelGroup, 
  // ResizablePanel, 
  // ResizableHandle 
} from '.';

const meta: Meta<typeof ResizablePanelGroup> = {
  component: ResizablePanelGroup,
  parameters: {
    docs: {
      subtitle: 'Displays a resizable or a component that looks like a resizable.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/resizable)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof ResizablePanelGroup>;

export const Default: Story = {
  args: {
    children: 'Resizable',
  },
};
