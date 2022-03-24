import { fireEvent, render, screen } from "@testing-library/react";

import { Home } from ".";

describe("Home page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Home />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it("clicking button triggers alert", () => {
    render(<Home />, {});
    window.alert = jest.fn();
    fireEvent.click(screen.getByText("Button"));
    expect(window.alert).toHaveBeenCalledWith("Hello, World!");
  });
});
