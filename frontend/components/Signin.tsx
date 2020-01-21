import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import { useForm } from "react-hook-form";
import { IUser } from "../Interfaces";
import StyledUserForm from "./styles/UserForm";
import { CURRENT_USER_QUERY } from "./User";

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      firstName
      lastName
    }
  }
`;

const Signin = () => {
  const { register, handleSubmit } = useForm();
  const [signin, { loading, error, data }] = useMutation<IUser>(
    SIGNIN_MUTATION,
    { refetchQueries: [{ query: CURRENT_USER_QUERY }] },
  );
  const onSubmit = async (formData: any) => {
    await signin({
      variables: {
        email: formData.email,
        password: formData.password,
      },
    });
  };

  return (
    <>
      <StyledUserForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="email@email.com" ref={register} autoComplete="current-email username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="8 Characters" ref={register} autoComplete="current-password" />
          </div>
          <button type="submit" className="form-submit" title="Submit">Submit</button>
        </form>
      </StyledUserForm>
    </>
  );
};

export default Signin;
