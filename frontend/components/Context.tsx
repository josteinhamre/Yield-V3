import React, { createContext, useReducer } from "react";
import { IAction, IContext, IState } from "../Interfaces";

const initialState: IState = {
  me: undefined,
};

const initialAction: IAction = {
  instruction: "nothing",
  newState: initialState,
};

const initialContext: IContext = {
  dispatch: () => { },
  state: initialState,
};

const Context = createContext<IContext>(initialContext);

function reducer(state: IState, action: IAction): IState {
  switch (action.instruction) {
    case "default":
      return action.newState;
    default:
      return state;
  }
}

function ContextComponent({ children }: JSX.ElementChildrenAttribute): JSX.Element {

  const [state, dispatch] = useReducer(reducer, initialState);

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
}

export default ContextComponent;
export { Context };
