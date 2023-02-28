import styled from "styled-components";
import "@fontsource/saira-stencil-one";

const ButtonStyled = styled.button`
  width: ${(props) => props.theme.sizes.mobileWidth};
  height: 40px;
  background-color: ${(props) => props.theme.colors.mainColor};
  font-family: ${(props) => props.theme.fontFamilies.mainFontFamily};
  font-size: ${(props) => props.theme.fontSizes.biggerFontSize};
  border: none;
  border-radius: 10px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  :disabled {
    opacity: 0.57;
  }

  @media (min-width: 900px) {
    height: 57px;
  }
`;

export default ButtonStyled;
