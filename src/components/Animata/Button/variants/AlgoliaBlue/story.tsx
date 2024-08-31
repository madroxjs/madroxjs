import type { Meta, StoryObj } from '@storybook/react';

import { AlgoliaBlueButton } from '.';

const meta: Meta<typeof AlgoliaBlueButton> = {
  title: "Third Party/Animata/Button/AlgoliaBlueButton",
  component: AlgoliaBlueButton,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof AlgoliaBlueButton>;

export const Default: Story = {
  args: {
    children: 'Foobar',
  },
};
