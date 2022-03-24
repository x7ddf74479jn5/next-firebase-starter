import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

// const initialState = {
//   isOpen: false,
//   type: undefined,
//   data: null,
// };

// const mockDispatchContextValue = {
//   open: () => {},
//   close: () => {},
// };

export const withContext = (storyFn: () => StoryFnReactReturnType) => {
  return storyFn();
  // <StateContext.Provider value={initialState}>
  //   <DispatchContext.Provider value={mockDispatchContextValue}>
  //     {storyFn()}
  //   </DispatchContext.Provider>
  // </StateContext.Provider>
};
