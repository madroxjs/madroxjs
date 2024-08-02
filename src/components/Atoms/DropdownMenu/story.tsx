import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { DropdownMenu } from '.';

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu,
  parameters: {
    docs: {
      subtitle: 'Displays a dropdownmenu or a component that looks like a dropdownmenu.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/dropdownmenu)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  args: {
    children: 'DropdownMenu',
  },
};
