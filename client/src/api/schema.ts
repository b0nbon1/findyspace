import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  scalar Upload
  type LoginWithEmailRes {
    status: Boolean
    message: String
  }

  type LoginWithSocialsRes {
    status: Boolean
    message: String
    accessToken: String
  }

  type Query {
    testConnection: LoginWithEmailRes
  }

  type Mutation {
    loginWithEmail(email: String!, password: String!): LoginWithEmailRes
    registerWithEmail(email: String!, password: String!): LoginWithEmailRes
    loginWithSocials(token: String!, type: String!): LoginWithSocialsRes
  }
`;

export default typeDefs;
