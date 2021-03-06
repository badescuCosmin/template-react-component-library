//@ts-check
import React from "react";
import { ThemeProvider as StoryTheme } from "@storybook/theming";
import { defaultTheme } from "../src/lib/theme/default-theme";
import { ThemeProvider } from "../src/lib/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <StoryTheme theme={defaultTheme}>
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    </StoryTheme>
  ),
];
