import { gql } from "@apollo/client";

export const ALL_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;
