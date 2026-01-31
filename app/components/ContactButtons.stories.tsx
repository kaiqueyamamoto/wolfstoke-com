import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ContactButtons from "@/app/components/ContactButtons";

const meta = {
  title: "Layout/ContactButtons",
  component: ContactButtons,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ContactButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
