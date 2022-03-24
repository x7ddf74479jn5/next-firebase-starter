import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { NavLink } from ".";

export default {
  title: "ui/button/NavLink",
  component: NavLink,
  parameters: {
    nextRouter: {
      path: "/",
      pathname: "/",
      asPath: "/",
    },
  },
} as ComponentMeta<typeof NavLink>;

export const Index: ComponentStoryObj<typeof NavLink> = {
  args: {
    href: "/",
    activeClassName: "",
    children: <a style={{ display: "inline-block", padding: 12 }}>Home</a>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole("link", { name: "Home" }));
  },
};
