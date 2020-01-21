import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import { useForm } from "react-hook-form";
import { IUser } from "../Interfaces";
import StyledButton from "./styles/Button";
import { CURRENT_USER_QUERY } from "./User";

const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    signout  }
`;

const Signout = () => {
  const [signout, { loading, error, data }] = useMutation<IUser>(
    SIGNOUT_MUTATION,
    { refetchQueries: [{ query: CURRENT_USER_QUERY }] },
  );
  const onSubmit = async (formData: any) => {
    await signout();
  };

  return (
    <>
      <StyledButton title="Sign Out" onClick={onSubmit}>Sign Out</StyledButton>
    </>
  );
};

export default Signout;
