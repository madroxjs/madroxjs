import type { Meta, StoryObj } from '@storybook/react';

import { Grid } from '.';


const meta: Meta<typeof Grid> = {
  title: "Third Party/Animata/Background/Grid",
  component: Grid,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {};
