import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SidebarLayout } from "./sidebar-layout";

export default {
  title: "SidebarLayout",
  component: SidebarLayout,
  argTypes: {
    renderSidebar: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof SidebarLayout>;

export const SidebarLayoutStory: ComponentStory<typeof SidebarLayout> = (
  args
) => <SidebarLayout {...args} />;

SidebarLayoutStory.storyName = "SidebarLayout";
