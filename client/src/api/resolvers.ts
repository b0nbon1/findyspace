import { GraphQLUpload } from 'graphql-upload';

const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    testConnection: (_: any, __: any, { dataSources }: any) =>
      dataSources.authApi.testConnection(),
  },
  Mutation: {
    loginWithEmail: (_: any, { email, password }: any, { dataSources }: any) =>
      dataSources.authApi.loginWithEmail({ email, password }),
    registerWithEmail: (
      _: any,
      { email, password }: any,
      { dataSources }: any,
    ) => dataSources.usersApi.createUser({ email, password }),
  },
};

export default resolvers;
