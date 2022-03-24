import type Queries from "@testing-library/dom/types/queries";
import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";

// const mockInitialState = {};

// const mockContextValue = {};

export const Providers: React.ComponentType<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <>
      {/* <Context.Provider value={initialValue}> */}
      {children}
      {/* </Context.Provider> */}
    </>
  );
};

const customRender = (ui: React.ReactElement, options = {}): RenderResult<typeof Queries, HTMLElement> => {
  return render(ui, { wrapper: Providers, ...options });
};

// re-export everything
export * from "./mocks";
export * from "@testing-library/react";

// override render method
export { customRender as render };
