import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Label } from '@/components/Atoms/Label';
import { Checkbox } from '.';

 
const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  parameters: {
    docs: {
      subtitle: 'Displays a badge or a component that looks like a badge.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/badge)'
      },
    },
  },
  args: { onClick: fn() },
};
 
export default meta;
type Story = StoryObj<typeof Checkbox>;
 
export const Default: Story = {
    render() {
        return (
            <div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
            </div>
          )        
    }
};

