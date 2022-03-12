import { gql } from "@apollo/client";

export const ALL_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;
export const COUNTRY_DATA = gql`
  query getCountryData($code: ID!) {
    country(code: $code) {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;
