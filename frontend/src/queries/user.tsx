import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query {
    getUsers {
      id
      email
    }
  }
`;

export const GET_USER = gql`
  query ($id: ID!) {
    getUserById(id: $id) {
      id
      email
    }
  }
`;

export const ADD_USER = gql`
  mutation ($userInput: UserInput!) {
    addUser(userInput: $userInput) {
      id
      email
    }
  }
`;
