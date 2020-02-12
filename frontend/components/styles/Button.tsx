import styled from "styled-components";
import { theme } from "../Page";

const StyledButton = styled.button`
  padding: 0.5rem 3rem;
  font-size: 1rem;
  border-radius: 0.2rem;
  border: 0.05rem solid #9099AD;
  cursor: pointer;
  background: #51607F;
  color: #60E2A1;

  :hover {
    font-weight: bold;
    border: 0.05rem solid darkgray;
  }

  :after {
    display: block;
    content: attr(title);
    font-weight: bold;
    height: 1px;
    color: transparent;
    overflow: hidden;
    visibility: hidden;
  }
`;

export default StyledButton;
