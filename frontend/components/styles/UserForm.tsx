import styled from "styled-components";

const StyledUserForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  label {
    font-weight: bold;
    font-size: 0.8rem;
  }

  input {
    font-size: 1.3rem;
    padding: 0.3rem;
    border-radius: 0.2rem;
    border: 0.05rem solid lightgrey;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 0.5rem;
  }

  .form-row {
    display: flex;
  }

  .form-submit {
    margin: 0.5rem;
    padding: 0.3rem 3rem;
    font-size: 1.3rem;
    align-self: flex-end;
    border-radius: 0.2rem;
    border: 0.05rem solid lightgrey;
    cursor: pointer;
  }

  .form-submit:hover {
    font-weight: bold;
    border: 0.05rem solid darkgray;
  }

  .form-submit:after {
    display: block;
    content: attr(title);
    font-weight: bold;
    height: 1px;
    color: transparent;
    overflow: hidden;
    visibility: hidden;
  }
`;

export default StyledUserForm;
