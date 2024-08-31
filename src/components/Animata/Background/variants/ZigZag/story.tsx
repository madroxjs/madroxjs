import type { Meta, StoryObj } from '@storybook/react';

import { ZigZag } from './index';


const meta: Meta<typeof ZigZag> = {
  title: "Third Party/Animata/Background/ZigZag",
  component: ZigZag,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof ZigZag>;

export const Default: Story = {};
