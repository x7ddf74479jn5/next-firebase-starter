const path = require("path");

const toPath = (_path) => path.resolve(__dirname, _path);

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "storybook-addon-performance",
    "storybook-addon-next",
  ],
  staticDirs: ["../mocks/data"],
  core: {
    builder: "webpack5",
  },
  features: {
    interactionsDebugger: true,
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@": toPath("../src"),
        },
      },
    };
  },
};
