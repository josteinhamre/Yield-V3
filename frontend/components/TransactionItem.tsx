import React from "react";
import styled from "styled-components";
import Category from "./Category";
import { theme } from "./Page";

const StyledTransaction = styled.div`
  display: grid;
  grid-template-columns: 20% 16% 45% 13%;
  align-items: center;
  grid-gap: 2%;
  border-bottom: 1px solid ${theme.manatee};
  padding: 0.2rem 0px;

  p {
    overflow: hidden;
    max-width: 100%;
    white-space: nowrap;
    font-size: 1rem;
  }
`;

interface IIcon {
  id: string;
  photo: string;
}

interface ICategory {
  id: string;
  name: string;
  color: string;
  icon: IIcon;
}

interface ITransaction {
  id: string;
  info: string;
  amount: number;
  accountingDate: Date;
  category: ICategory;
}

interface ITransactions {
  transaction: ITransaction;
}

const TransactionItem: React.FC<ITransactions> = (props) => {
  return (
    <StyledTransaction>
      <Category category={props.transaction.category} />
      <p>{new Date(props.transaction.accountingDate).toLocaleString("no-no", { weekday: "short", year: "2-digit", month: "short", day: "2-digit" })}</p>
      <p> {props.transaction.info}</p>
      <p>{props.transaction.amount}</p>
    </StyledTransaction>
  );
};

export default TransactionItem;
