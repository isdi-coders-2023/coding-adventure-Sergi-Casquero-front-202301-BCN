import styled from "styled-components";
import "@fontsource/saira-stencil-one";

const ButtonStyled = styled.button`
  width: 323px;
  height: 40px;
  background-color: ${(props) => props.theme.main.mainColor};
  font-family: "saira stencil one", sans-serif;
  font-size: 1.25rem;
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
