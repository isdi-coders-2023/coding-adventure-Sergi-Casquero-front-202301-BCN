import styled from "styled-components";
import "@fontsource/roboto";
import "@fontsource/saira-stencil-one";

const FormStyled = styled.section`
  width: ${(props) => props.theme.sizes.mobileWidth};
  font-family: ${(props) => props.theme.fontFamilies.textFontFamily};

  .form__title {
    font-family: ${(props) => props.theme.fontFamilies.subtitlesFontFamily};
    color: ${(props) => props.theme.colors.mainColor};
    font-size: ${(props) => props.theme.fontSizes.biggerFontSize};
    margin-bottom: 25px;
  }

  .form__feedback {
    color: ${(props) => props.theme.colors.requiredColor};
    font-size: ${(props) => props.theme.fontSizes.requiredFontSize};

    &--error {
      width: 100%;
      color: ${(props) => props.theme.colors.requiredColor};
      font-size: ${(props) => props.theme.fontSizes.requiredFontSize};
      text-align: center;
      margin-top: -7px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  label {
    color: #fff;
    font-weight: 700;
  }

  input {
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: none;
    padding-left: 11px;
    margin: 9px 0;
    border: 1px solid #fff;
    background-color: ${(props) => props.theme.colors.inputColor};

    &::placeholder {
      font-size: ${(props) => props.theme.fontSizes.mainFontSize};
      color: #000;
    }
  }

  .last-input {
    margin-bottom: 40px;
  }
`;

export default FormStyled;
