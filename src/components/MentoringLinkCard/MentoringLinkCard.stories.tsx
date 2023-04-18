import { Meta, StoryObj } from "@storybook/react";
import MentoringLinkCard from "./MentoringLinkCard";

const meta = {
  title: "Data Display/MentoringLinkCard",
  component: MentoringLinkCard,
  parameters: {
    layout: "padded",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/KnsardnDQ2lDKUYo58G8Pf/Mentor-Cycle?node-id=1921-5642&t=GMEw33yWzk1MdUGZ-0",
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MentoringLinkCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "João Silva",
    job: "Desenvolvedor Full Stack",
    status: "A confirmar",
    date: new Date("2023-05-15"),
    hour: new Date("2023-05-15T19:30:00"),
  },
};