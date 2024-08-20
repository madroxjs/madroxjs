import type { Meta, StoryObj } from '@storybook/react';

import { SomeAtom } from '.';


const meta: Meta<typeof SomeAtom> = {
  component: SomeAtom,
};

export default meta;
type Story = StoryObj<typeof SomeAtom>;

export const Default: Story = {
  args: {
    children: 'Foobar',
  },
};
