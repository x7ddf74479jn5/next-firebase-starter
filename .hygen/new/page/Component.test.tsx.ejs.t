---
to: <%= abs_path %>/<%= h.changeCase.pascal(page_name) %>.test.tsx
---
<% if (have_hooks) { -%>
import type { RenderResult } from "@testing-library/react-hooks";
import { renderHook } from "@testing-library/react-hooks";
<% } -%>
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

<% if (have_hooks) { -%>
import { use<%= h.changeCase.pascal(page_name) %> } from './<%= h.changeCase.pascal(page_name) %>.hook'
<% } -%>
import <%= h.changeCase.pascal(page_name) %> from "./<%= file_name %>";

describe("<%= path %>", () => {
  it("Snapshot", () => {
    const page = renderer.create(<<%= h.changeCase.pascal(page_name) %> />);
    const tree = page.toJSON();
    expect(tree).toMatchSnapshot();
  });

    it("", () => {
    render(<<%= h.changeCase.pascal(page_name) %> />);
    screen.debug();
  });
<% if (have_hooks) { -%>

  it("", () => {
    const { result } = renderHook(() => use<%= h.changeCase.pascal(page_name) %>());
  });  
<% } -%>
});