import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-boost";
import ApolloClient from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import * as fetch from "cross-fetch";
import gql from "graphql-tag";
import React from "react";

const link = createHttpLink({ fetch: fetch as any, uri: "http://localhost:4000/" });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const GET_USERS = gql`
  {
    users {
      id
      firstName
      lastName
    }
  }
`;

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
}

function GetUsers() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) { return <p>Loading...</p>; }
  if (error) { return <p>Error :(</p>; }

  return data.users.map(({ id, firstName, lastName,
  }: IUser) => (
      <div key={id}>
        <p>
          {firstName} {lastName}
        </p>
      </div>
    ));
}

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
      <GetUsers />
    </div>
  </ApolloProvider>
);

export default App;
