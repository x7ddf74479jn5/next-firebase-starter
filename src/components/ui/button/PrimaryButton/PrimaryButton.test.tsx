import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";

import { PrimaryButton } from ".";

describe("ui/buttons/PrimaryButton", () => {
  describe("Snapshot", () => {
    it("button", () => {
      const component = renderer.create(<PrimaryButton tag="button">label</PrimaryButton>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot("button");
    });

    it("link", () => {
      const component = renderer.create(
        <PrimaryButton tag="a" linkProps={{ href: "/" }}>
          label
        </PrimaryButton>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot("link");
    });

    it("input", () => {
      const component = renderer.create(<PrimaryButton tag="input" value="OK" type="button" />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot("input");
    });
  });

  it("button", () => {
    const handleClick = jest.fn();
    render(
      <PrimaryButton tag="button" onClick={handleClick}>
        label
      </PrimaryButton>
    );
    const button = screen.getByRole("button", { name: "label" });
    expect(button).toBeEnabled();
    userEvent.click(button);
    expect(handleClick).toBeCalled();
  });

  it("link", () => {
    render(
      <PrimaryButton tag="a" linkProps={{ href: "/" }}>
        label
      </PrimaryButton>
    );
    const button = screen.getByRole("button", { name: "label" });
    expect(button).toHaveAttribute("href", "/");
  });

  it("input", () => {
    render(<PrimaryButton tag="input" value="OK" type="button" />);
    const button = screen.getByRole("button");
    expect(button).toBeEnabled();
    expect(button).toHaveValue("OK");
  });
});
