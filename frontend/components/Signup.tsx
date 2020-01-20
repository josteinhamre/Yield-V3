import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { CURRENT_USER_QUERY } from "../components/User";

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

const StyledUserForm = styled.div`

  form {
    display: flex;
    flex-direction: column;
    padding: 1em;
  }

  label {
    font-weight: bold;
    font-size: 0.8em;
  }

  input {
    font-size: 1.3em;
    padding: 0.3em;
    border-radius: 0.2em;
    border: 0.05em solid lightgrey;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 0.5em;
  }

  .form-row {
    display: flex;
  }

  .form-submit {
    margin: 0.5em;
    padding: 0.3em 0;
    width: 30%;
    font-size: 1.3em;
    align-self: flex-end;
    border-radius: 0.2em;
    border: 0.05em solid lightgrey;
  }
`;

interface IUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const [signup, { loading, error, data }] = useMutation<IUser>(
    SIGNUP_MUTATION,
    { refetchQueries: [{ query: CURRENT_USER_QUERY }] },
  );
  if (loading) { <p>Loading...</p>; }
  if (error) { <p>Error...</p>; }
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
              <input type="text" name="firstName" placeholder="First name" ref={register} />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last name</label>
              <input type="text" name="lastName" placeholder="Last name" ref={register} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="email@email.com" ref={register} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="8 Characters" ref={register} />
          </div>
          <button type="submit" className="form-submit" >Submit</button>
        </form>
      </StyledUserForm>
    </>
  );
};

export default Signup;
