import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React, { useContext, useEffect } from "react";
import { IState, IUserQuery } from "../Interfaces";
import { Context } from "./Context";

const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    me {
      id
      firstName
      lastName
      email
    }
  }
`;

function User({ children }: JSX.ElementChildrenAttribute): JSX.Element {
  const { state, dispatch } = useContext(Context);

  const payload = useQuery<IUserQuery>(
    CURRENT_USER_QUERY,
  );

  const newState = { ...state };
  if (payload.data) {
    newState.me = payload.data.me;
  }

  useEffect(() => {
    dispatch({
      instruction: "default",
      newState,
    });
  }, [payload]);

  return <>{children}</>;
}

export default User;
export { CURRENT_USER_QUERY };
