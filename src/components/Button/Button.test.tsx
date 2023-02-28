import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When rendered with the text 'Sample'", () => {
    test("Then it should show a button on the screen containing that text", () => {
      const buttonText = "Sample";

      render(
        <ThemeProvider theme={theme}>
          <Button text={buttonText} />
        </ThemeProvider>
      );
      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });
});
