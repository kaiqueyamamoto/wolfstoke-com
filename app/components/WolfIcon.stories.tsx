import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import WolfIcon from "@/app/components/WolfIcon";

const meta = {
  title: "Brand/WolfIcon",
  component: WolfIcon,
  tags: ["autodocs"],
  argTypes: {
    size: { control: { type: "number", min: 16, max: 128 } },
    className: { control: "text" },
  },
} satisfies Meta<typeof WolfIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { size: 40 },
};

export const Small: Story = {
  args: { size: 24 },
};

export const Large: Story = {
  args: { size: 64 },
};

export const Accent: Story = {
  args: { size: 48, className: "text-accent" },
};
