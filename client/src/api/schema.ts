import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  scalar Upload
  type LoginWithEmailRes {
    status: Boolean
    message: String
  }

  type Query {
    testConnection: LoginWithEmailRes
  }

  type Mutation {
    loginWithEmail(email: String!, password: String!): LoginWithEmailRes
    registerWithEmail(email: String!, password: String!): LoginWithEmailRes
  }
`;

export default typeDefs;
