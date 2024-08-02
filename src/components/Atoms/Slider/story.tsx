import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Slider } from '.';

const meta: Meta<typeof Slider> = {
  component: Slider,
  parameters: {
    docs: {
      subtitle: 'Displays a slider or a component that looks like a slider.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/slider)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    children: 'Slider',
  },
};
