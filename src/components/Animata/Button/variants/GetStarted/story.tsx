import type { Meta, StoryObj } from '@storybook/react';

import { GetStartedButton } from '.';


const meta: Meta<typeof GetStartedButton> = {
  title: "Third Party/Animata/Button/GetStartedButton",
  component: GetStartedButton,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof GetStartedButton>;

export const Default: Story = {
  args: {
    children: 'Foobar',
  },
};
