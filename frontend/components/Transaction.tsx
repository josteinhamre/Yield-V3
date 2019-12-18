import React from "react";
import styled from "styled-components";

const StyledTransaction = styled.div`
  display: grid;
  grid-template-columns: 20% 16% 42% 10%;
  align-items: center;
  grid-gap: 2%;
  border-bottom: 1px solid #83BED3;
  padding: 0px 5px;
`;

class Transaction extends React.Component {
  public render() {
    return (
      <StyledTransaction>
        <div>
          Gifts
        </div>
        <h6>Wed 9 Oct 15:30</h6>
        <h6>Tanum Bokhandel Storo Stors Oslo</h6>
        <h6>-299,00</h6>
      </StyledTransaction>
    );
  }

}

export default Transaction;
