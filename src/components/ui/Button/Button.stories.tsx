import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import Button from ".";

export default {
  title: "ui/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Button",
};
