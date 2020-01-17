import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import { createContext } from "react";

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

const initialState = {
  email: "",
  firstName: "",
  id: "",
  lastName: "",
};

const UserStore = createContext(initialState);

interface IState {
  me: IUser;
  loading: boolean;
  error: boolean | undefined;
}

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface IUserQuery {
  me: IUser;
}

function UserContext({ children }: JSX.ElementChildrenAttribute): JSX.Element {
  const payload = useQuery<IUserQuery>(
    CURRENT_USER_QUERY,
  );

  const state = {
    email: "",
    firstName: "",
    id: "",
    lastName: "",
  };

  if (payload.data) {
    state.email = payload.data.me.email;
    state.firstName = payload.data.me.firstName;
    state.id = payload.data.me.id;
    state.lastName = payload.data.me.lastName;
  }

  return (
    <UserStore.Provider value={
      state
    }>
      {children}
    </UserStore.Provider>
  );
}

export default UserContext;
export { UserStore };
