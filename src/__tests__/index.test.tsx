import { render, screen } from "@testing-library/react";
import React from "react";

import Home from "../pages";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", {
      name: "Next.js Starter",
    });
    expect(heading).toBeInTheDocument();
  });
});
