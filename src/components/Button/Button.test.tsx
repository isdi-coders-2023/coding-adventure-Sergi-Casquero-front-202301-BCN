import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When rendered passing", () => {
    test("Then it should show a button on the screen", () => {
      const buttonText = "Prueba";

      render(<Button text={buttonText} />);
      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });
});
