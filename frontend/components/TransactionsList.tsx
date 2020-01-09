import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import styled from "styled-components";
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
  grid-template-columns: 20% 16% 45% 10%;
  align-items: center;
  grid-gap: 2%;
  border-bottom: 1px solid #999999;
  padding: 0px 0.5em 0.5em 0.5em;
  font-size: 1.2em;
  font-weight: bold;

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
        <p>Amount</p>
      </StyledTransactionsList>
      {data && data.transactions.map((transaction) => (
        <TransactionItem transaction={transaction} key={transaction.id} />
      ))}
    </>
  );
};

export default TransactionList;
