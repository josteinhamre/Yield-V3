import styled from "styled-components";
import StyledButton from "./Button";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem;
  align-items: center;

  h1 {
    font-weight: 400;
    font-size: 3rem
  }

  a {
    font-size: 1.3rem
  }
`;

export default StyledHeader;
