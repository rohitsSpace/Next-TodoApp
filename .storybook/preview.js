import React from "react";
import "../styles/index.scss";

export const decorators = [
  (Story) => (
    <div style={{ padding: "16px" }}>
      <Story />
    </div>
  ),
];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
