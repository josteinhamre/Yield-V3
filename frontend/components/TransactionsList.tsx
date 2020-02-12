import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import styled from "styled-components";
import MonthSelector from "./MonthSelector";
import { theme } from "./Page";
import TransactionItem from "./TransactionItem";

const ALL_TRANSACTIONS_QUERY = gql`
  query ALL_TRANSACTIONS_QUERY {
    transactions {
      id
      info
      amount
      accountingDate
      category {
        id
        name
        color
        icon {
          id
          photo
        }
      }
    }
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
  transactions: ITransaction[];
}

const StyledTransactionsList = styled.div`
  display: grid;
  grid-template-columns: 20% 16% 45% 13%;
  align-items: center;
  grid-gap: 2%;
  border-bottom: 1px solid ${theme.manatee};
  padding: 0px 0.5rem 0.5rem 0.5rem;
  font-size: 1.2rem;
  font-weight: 500;
`;

const TransactionList = () => {
  const { loading, error, data } = useQuery<ITransactions>(
    ALL_TRANSACTIONS_QUERY,
  );
  if (loading) { <p>Loading...</p>; }
  if (error) { <p>Error...</p>; }
  return (
    <>
      <StyledTransactionsList>
        <p>Category</p>
        <p>Date</p>
        <p>Info</p>
        <MonthSelector />
      </StyledTransactionsList>
      {data && data.transactions.map((transaction) => (
        <TransactionItem transaction={transaction} key={transaction.id} />
      ))}
    </>
  );
};
export default TransactionList;;
