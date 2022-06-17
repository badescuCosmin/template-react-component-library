import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Box } from "@mui/material";
import { Button } from "./button";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Button",
  },
  argTypes: {
    endIcon: {
      table: { disable: true },
    },
    startIcon: {
      table: { disable: true },
    },
  },
  decorators: [
    (Story) => (
      <Box
        sx={{
          display: "flex",
          gap: "10px",
        }}
      >
        <Story />
      </Box>
    ),
  ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <>
    <Button {...args} />
    <Button {...args} disabled />
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: "tertiary",
};
