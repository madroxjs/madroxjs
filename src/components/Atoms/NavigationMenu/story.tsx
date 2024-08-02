import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { NavigationMenu } from '.';

const meta: Meta<typeof NavigationMenu> = {
  component: NavigationMenu,
  parameters: {
    docs: {
      subtitle: 'Displays a navigationmenu or a component that looks like a navigationmenu.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/navigationmenu)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {
  args: {
    children: 'NavigationMenu',
  },
};
