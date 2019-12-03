import { configure } from "@storybook/react";

const req = require.context(
  "../packages/chakra-ui-hooks/src/",
  true,
  /examples\.(ts|tsx)$/,
);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);