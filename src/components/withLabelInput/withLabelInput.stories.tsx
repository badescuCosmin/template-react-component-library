import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@mui/material";
import { WithLabelInput, WithLabelDateInput } from "./withLabelInput";

export default {
  title: "WithLabelInput",
  component: WithLabelInput,
  args: {
    onChangeInput: (val: string) => console.log(val),
  },
  decorators: [
    (Story) => (
      <Box
        sx={{
          gap: "40px",
          display: "flex",
        }}
      >
        <Story />
      </Box>
    ),
  ],
} as ComponentMeta<typeof WithLabelInput>;

const Template: ComponentStory<typeof WithLabelInput> = (args) => {
  return (
    <>
      <WithLabelInput
        {...args}
        type="text"
        label="First name"
        validationRule={/^.{1,4}$/}
        required
      />
      <WithLabelInput
        {...args}
        label="Password"
        type="password"
        validationRule={/^.{1,3}$/}
      />
      <WithLabelInput {...args} label="First name" />
      <WithLabelDateInput
        {...args}
        label="Date of birth"
        required
        initialValue={new Date()}
      />
      <WithLabelDateInput
        {...args}
        label="Date of birth"
        initialValue={new Date()}
      />
    </>
  );
};

export const InputWithLabel = Template.bind({});
