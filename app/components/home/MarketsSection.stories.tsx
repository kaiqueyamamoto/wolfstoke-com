import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import MarketsSection from "@/app/components/home/MarketsSection";

const meta = {
  title: "Home/MarketsSection",
  component: MarketsSection,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof MarketsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
