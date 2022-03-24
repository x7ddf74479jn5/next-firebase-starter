import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { PrimaryButton } from ".";

export default {
  title: "ui/button/PrimaryButton",
  component: PrimaryButton,
} as ComponentMeta<typeof PrimaryButton>;

const handleClick = () => {
  alert("Clicked!");
};

export const Index: ComponentStoryObj<typeof PrimaryButton> = {
  args: {
    tag: "button",
    children: "label",
    onClick: handleClick,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole("button", { name: "label" }));
    await userEvent.click(canvas.getByRole("button", { name: "label" }));
  },
};
