import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import HeroSection from "@/app/components/solucoes/HeroSection";

const meta = {
  title: "Soluções/HeroSection",
  component: HeroSection,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
