import React from "react";
import styled from "styled-components";

const StyledMonthSelector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    height: 20px;
  }
`;

const MonthSelector = () => {
  return (
    <StyledMonthSelector>
      <a href="#">
        <svg focusable="false" role="presentation" height="20" viewBox="0 0 22 32">
          <g fill="none" fill-rule="evenodd">
            <path fill="#60E2A1" d="M22 0 L 16 0 0 16 16 32 22 32 6 16 22 0z"></path>
          </g>
        </svg>
      </a>
      <span>January</span>
      <a href="#">
        <svg focusable="false" role="presentation" height="20" viewBox="0 0 22 32">
          <g fill="none" fill-rule="evenodd">
            <path fill="#60E2A1" d="M0 0 L 6 0 22 16 6 32 0 32 16 16 0 0z"></path>
          </g>
        </svg>
      </a>
    </StyledMonthSelector>
  );
};

export default MonthSelector;
