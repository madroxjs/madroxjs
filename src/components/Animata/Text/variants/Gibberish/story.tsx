import type { Meta, StoryObj } from '@storybook/react';

import { GibberishText } from '.';


const meta: Meta<typeof GibberishText> = {
  title: "Third Party/Animata/Text/Gibberish",
  component: GibberishText,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof GibberishText>;

export const Default: Story = {
  args: {
    className: "text-6xl font-black",
    text: "Hello World"
  },
};
