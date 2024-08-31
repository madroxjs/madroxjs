import type { Meta, StoryObj } from '@storybook/react';

import { DuolingoButton } from '.';


const meta: Meta<typeof DuolingoButton> = {
  title: "Third Party/Animata/Button/DuolingoButton",
  component: DuolingoButton,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof DuolingoButton>;

export const Default: Story = {
  args: {
    children: 'Foobar',
  },
};
