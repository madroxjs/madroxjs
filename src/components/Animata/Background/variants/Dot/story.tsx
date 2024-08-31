import type { Meta, StoryObj } from '@storybook/react';

import { Dot } from '.';


const meta: Meta<typeof Dot> = {
  title: "Third Party/Animata/Background/Dot",
  component: Dot,
  tags: ['autodoc']
};

export default meta;
type Story = StoryObj<typeof Dot>;

export const Default: Story = {};
