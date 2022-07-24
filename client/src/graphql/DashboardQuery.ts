import { gql } from "@apollo/client";

export const DASHBOARD_QUERY = gql`
  query getList($name: String) {
    list(name: $name) {
      _id
      index
      picture
      age
      eyeColor
      name
      company
      email
      phone
      greeting
      friends {
        age
        eyeColor
        name
        company
        email
        picture
      }
    }
  }
`;
