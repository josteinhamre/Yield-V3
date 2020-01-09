import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-boost";
import ApolloClient from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import App from "next/app";
import fetch from "node-fetch";
import React from "react";
import Page from "../components/Page";
import GlobalStyle from "../components/styles/GlobalStyle";

const link = createHttpLink({ fetch: fetch as any, uri: "http://localhost:4000" });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  public render() {
    const { Component } = this.props;
    return (
      <ApolloProvider client={client}>
        <Page>
          <GlobalStyle />
          <Component />
        </Page>
      </ApolloProvider>

    );

  }
}

export default MyApp;
