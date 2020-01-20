import { useContext } from "react";
import { IState } from "../Interfaces";
import { Context } from "./Context";

const Header = () => {

  const { state, dispatch } = useContext(Context);
  if (!state.me) { return (<h1>Hello</h1>); }
  return (
    <h1>{state.me.firstName}{state.me.lastName}</h1>
  );
};

export default Header;
