import { useContext } from "react";
import { Context } from "./Context";
import Signout from "./Signout";
import StyledHeader from "./styles/Header";

const Header = () => {

  const { state, dispatch } = useContext(Context);
  if (!state.me) { return (<h1>Hello</h1>); }
  return (
    <StyledHeader>
      <h1>Yield</h1>
      <a href="#">Inbox</a>
      <a href="#">Budget</a>
      <a href="#">Transactions</a>
      <a href="#">Overview</a>
      <Signout />
    </StyledHeader>
  );
};

export default Header;
