---
to: <%= abs_path %>/<%= h.changeCase.pascal(component_name) %>.test.tsx
---
<% if (have_hooks) { -%>
import type { RenderResult } from "@testing-library/react-hooks";
import { renderHook } from "@testing-library/react-hooks";
<% } -%>
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import { <%= h.changeCase.pascal(component_name) %> } from "./";
<% if (have_hooks) { -%>
import { use<%= h.changeCase.pascal(component_name) %> } from './<%= h.changeCase.pascal(component_name) %>.hook'
<% } -%>

describe("<%= path %>", () => {
  it("Snapshot", () => {
    const component = renderer.create(<<%= h.changeCase.pascal(component_name) %> />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("", () => {
    render(<<%= h.changeCase.pascal(component_name) %> />);
    screen.debug();
  });
<% if (have_hooks) { -%>

  it("", () => {
    const { result } = renderHook(() => use<%= h.changeCase.pascal(component_name) %>());
  });  
<% } -%>
});