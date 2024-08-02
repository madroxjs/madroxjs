import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { RadioGroup } from '.';

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  parameters: {
    docs: {
      subtitle: 'Displays a radiogroup or a component that looks like a radiogroup.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/radiogroup)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    children: 'RadioGroup',
  },
};
