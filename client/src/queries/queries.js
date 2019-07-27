import { gql } from "apollo-boost";

const getLinksQuery = gql`
  {
    allLinks {
      id
      createdAt
      url
      description
    }
  }
`;

export { getLinksQuery };
