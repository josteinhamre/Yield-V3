import styled from "styled-components";

const StyledButton = styled.button`
  margin: 0.5em;
  padding: 0.3em 3em;
  font-size: 1.3em;
  border-radius: 0.2em;
  border: 0.05em solid lightgrey;
  cursor: pointer;

  :hover {
    font-weight: bold;
    border: 0.05em solid darkgray;
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
