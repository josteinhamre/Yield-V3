import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";
import UserContext from "./UserContext";

const theme = {
  black: "#393939",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
  grey: "#3A3A3A",
  lightGrey: "#E1E1E1",
  offWhite: "#EDEDED",
};

const StyledPage = styled.div`
  background: ${(props) => props.theme.offWhite};
  color: ${(props) => props.theme.black};
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

class Page extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <UserContext>
          <StyledPage>
            <Meta />
            <Header />
            <Inner>{this.props.children}</Inner>
          </StyledPage>
        </UserContext>
      </ThemeProvider>
    );
  }
}

export default Page;
export { theme };
