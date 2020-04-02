import React from "react";
import { render } from "@testing-library/react";

import __NAME__ from ".";

describe("<__NAME__ />", () => {
  const renderComponent = () => render(<__NAME__ />);

  test("Renders content correctly", () => {
    const { queryByText } = renderComponent();
    expect(queryByText("Hello World")).toBeInTheDocument();
  });
});
