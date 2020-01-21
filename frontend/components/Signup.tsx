import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import { useForm } from "react-hook-form";
import { CURRENT_USER_QUERY } from "../components/User";
import { IUser } from "../Interfaces";
import StyledUserForm from "./styles/UserForm";

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    signup(firstName: $firstName, lastName: $lastName, email: $email, password: $password, ) {
      id
      email
      firstName
      lastName
    }
  }
`;

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const [signup, { loading, error, data }] = useMutation<IUser>(
    SIGNUP_MUTATION,
    { refetchQueries: [{ query: CURRENT_USER_QUERY }] },
  );
  const onSubmit = async (formData: any) => {
    await signup({
      variables: {
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        password: formData.password,
      },
    });
  };

  return (
    <>
      <StyledUserForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First name</label>
              <input type="text" name="firstName" placeholder="First name" ref={register} autoComplete="first-name" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last name</label>
              <input type="text" name="lastName" placeholder="Last name" ref={register} autoComplete="last-name" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="email@email.com"
              ref={register}
              autoComplete="current-email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="8 Characters"
              ref={register}
              autoComplete="new-password" />
          </div>
          <button type="submit" className="form-submit" title="Submit">Submit</button>
        </form>
      </StyledUserForm>
    </>
  );
};

export default Signup;
