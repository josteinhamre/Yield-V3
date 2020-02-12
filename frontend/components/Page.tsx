import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import ContextComponent from "./Context";
import Header from "./Header";
import Meta from "./Meta";
import User from "./User";

const theme = {
  black: "#393939",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
  grey: "#3A3A3A",
  gunmetal: "#252E3A",
  kuCrimson: "#E3170A",
  lightBlue: "#A8F9FF",
  lightGrey: "#E1E1E1",
  manatee: "#9099AD",
  mediumAquamarine: "#60E2A1",
  offWhite: "#EDEDED",
  paynesGray: "#51607F",
};

const StyledPage = styled.div`
  background-image: linear-gradient(180deg, ${theme.paynesGray} 0px, ${theme.gunmetal} 100vh);
  color: ${theme.mediumAquamarine};
  min-height: 100vh;
  background-repeat: no-repeat;

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
        <ContextComponent>
          <User>
            <StyledPage>
              <Meta />
              <Header />
              <Inner>{this.props.children}</Inner>
            </StyledPage>
          </User>
        </ContextComponent>
      </ThemeProvider>
    );
  }
}

export default Page;
export { theme };
