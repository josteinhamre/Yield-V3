import { useContext } from "react";
import { UserStore } from "./UserContext";

const Header = () => {

  const State = useContext(UserStore);
  return (
    <h1>{State.firstName}{State.lastName}</h1>
  );
};

export default Header;
