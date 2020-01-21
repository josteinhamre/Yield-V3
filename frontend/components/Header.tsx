import { useContext } from "react";
import { Context } from "./Context";
import Signout from "./Signout";
import StyledHeader from "./styles/Header";

const Header = () => {

  const { state, dispatch } = useContext(Context);
  if (!state.me) { return (<h1>Hello</h1>); }
  return (
    <StyledHeader>
      <h1>{state.me.firstName}{state.me.lastName}</h1>
      <Signout />
    </StyledHeader>
  );
};

export default Header;
