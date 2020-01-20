import React from 'react'

export interface IUserQuery {
  me?: IUser;
}

export interface IState {
  me?: IUser;
}

export interface IContext {
  state: IState;
  dispatch: (action: IAction) => void;
}

export interface IAction {
  instruction: string;
  newState: IState;
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  acounts?: IAccount[];
}

export interface IAccount {
  transactions?: ITransaction[];
}

export interface ITransaction {
  id: string;
  info: string;
  amount: number;
  accountingDate: Date;
  category: ICategory;
}

export interface ICategory {
  id: string;
  name: string;
  color: string;
  icon: IIcon;
  budgets?: IBudget[];
}

export interface IBudget {
  id: string;
  amount: number;
  startDate: Date;
  endDate: Date;
}

export interface IIcon {
  id: string;
  photo: string;
}
