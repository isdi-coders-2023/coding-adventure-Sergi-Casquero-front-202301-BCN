import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When rendered", () => {
    const componentRender = () => {
      render(
        <ThemeProvider theme={theme}>
          <Form />
        </ThemeProvider>
      );
    };

    test("Then it should show an input with label 'Email'", () => {
      const inputLabel = "Email";

      componentRender();
      const emailInput = screen.getByLabelText(inputLabel, {
        selector: "input",
      });

      expect(emailInput).toBeInTheDocument();
    });

    test("Then it should show an input with label 'Password'", () => {
      const inputLabel = "Password";

      componentRender();
      const passwordInput = screen.getByLabelText(inputLabel, {
        selector: "input",
      });

      expect(passwordInput).toBeInTheDocument();
    });

    test("Then it should show a file-type", () => {
      const inputLabel = "Image";

      componentRender();
      const imageInput = screen.getByLabelText(inputLabel, {
        selector: "input",
      });

      expect(imageInput).toBeInTheDocument();
    });
  });
});
