import type { Meta, StoryObj } from '@storybook/react';

import { WorkButton } from '.';


const meta: Meta<typeof WorkButton> = {
  title: "Third Party/Animata/Button/WorkButton",
  component: WorkButton,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof WorkButton>;

export const Default: Story = {
  args: {
    children: 'Foobar',
  },
};
