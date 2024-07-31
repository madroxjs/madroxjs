import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '.';
 
const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    docs: {
      subtitle: 'Displays a button or a component that looks like a button.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/button)'
      },
    },
  },
  args: { onClick: fn() },
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Secondary: Story = {
    args: {
      variant: 'secondary',  
      children: 'Secondary',
    },
  };

  export const Destructive: Story = {
    args: {
        variant: 'destructive',
        children: 'Destructive',
    },
  };

  export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Outline',
    },
  };
  export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'Ghost',
    },
  }
  export const Link : Story = {
    args: {
      children: 'Link',
    },
  };
        
  