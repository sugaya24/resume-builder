import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import Profile from ".";

export default {
  title: "features/Profile",
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = () => <Profile />;

export const Default = Template.bind({});
