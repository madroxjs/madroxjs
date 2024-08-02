import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ToggleGroup } from '.';

const meta: Meta<typeof ToggleGroup> = {
  component: ToggleGroup,
  parameters: {
    docs: {
      subtitle: 'Displays a togglegroup or a component that looks like a togglegroup.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/togglegroup)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {
  args: {
    children: 'ToggleGroup',
  },
};
