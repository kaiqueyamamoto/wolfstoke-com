import type { Preview } from "@storybook/nextjs-vite";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "wolfstoke",
      values: [
        { name: "wolfstoke", value: "#04060c" },
        { name: "surface", value: "#0b1020" },
        { name: "light", value: "#f5f5f5" },
      ],
    },
    a11y: {
      test: "todo",
    },
  },
};

export default preview;