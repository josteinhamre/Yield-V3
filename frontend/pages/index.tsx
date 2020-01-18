import React from "react";
import { useContext } from "react";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import TransactionsList from "../components/TransactionsList";
import { UserStore } from "../components/UserContext";

const Index = () => {
  const State = useContext(UserStore);
  if (State.id === "") {
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
