import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, wait } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";

describe("The main page", () => {
  it("makes users log in in order to continue to the app", async () => {
    const { getByText, getByLabelText } = render(<App />);

    userEvent.type(getByLabelText(/Name/), "Pepe");
    userEvent.type(getByLabelText(/Password/), "password1234");

    userEvent.click(getByText(/Login/));

    await wait(() => {
        expect(getByText(/Inventory/)).toBeInTheDocument();
      });
  });
});
