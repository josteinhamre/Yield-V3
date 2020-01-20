import React from "react";
import { useContext } from "react";
import { Context } from "../components/Context";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import TransactionsList from "../components/TransactionsList";

const Index = () => {
  const { state, dispatch } = useContext(Context);
  if (!state.me) {
    return (
      <>
        <Signup />
        <Signin />
      </>
    );
  }

  return (

    <TransactionsList />
  );
};

export default Index;
