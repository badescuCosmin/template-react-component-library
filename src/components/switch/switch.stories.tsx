import React from "react";
import { ComponentStory } from "@storybook/react";
import { Switch } from "./switch";

export default {
  title: "Switch",
  component: Switch,
} as any;

const Template: ComponentStory<typeof Switch> = () => (
  <Switch
    onChange={() => console.log("changed")}
    isChecked
    label="IOS switch"
  />
);
export const SwitchComponent = Template.bind({});
