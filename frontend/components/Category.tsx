import React from "react";
import styled from "styled-components";

const StyledCategory = styled.div<ITransaction>`
  height: 3rem;
  display: flex;
  padding: 0;
  margin: 0;
  width: 250px;
  justify-content: flex-start;
  text-align: center;
  align-items: center;

  p {
    font-size: 1rem;
    font-weight: 500;
    padding: 0;
    margin: 0;
    overflow: hidden;
    max-width: 74%;
    white-space: nowrap;
    text-decoration: none;
  }
`;

const StyledIcon = styled.div<ITransaction>`
  background-color: #${(props) => props.category.color};
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-content: center;
  border: 0;

  img {
    object-fit: contain;
    width: 75%;
  }
`;

interface IIcon {
  id: string;
  photo: string;
}

interface ICategory {
  id: string;
  name: string;
  color: string;
  icon: IIcon;
}

interface ITransaction {
  category: ICategory;
}

const Category: React.FC<ITransaction> = (props) => (
  <StyledCategory category={props.category}>
    <StyledIcon category={props.category}>
      <img src={props.category.icon.photo} />
    </StyledIcon>
    <p>{props.category.name}</p>
  </StyledCategory>
);

export default Category;
