module.exports = {
  stories: ["../../../packages/ui/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "storybook-zeplin/register",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-designs",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  typescript: { reactDocgen: false },
};
