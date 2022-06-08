import { GraphQLUpload } from 'graphql-upload';

const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    testConnection: (_: any, __: any, { dataSources }: any) =>
      dataSources.authApi.testConnection(),
  },
  Mutation: {
    loginWithEmail: (
      _: any,
      { email, password }: any,
      { dataSources, serverRequest, serverResponse }: any,
    ) =>
      dataSources.authApi.loginWithEmail(
        { email, password },

        serverRequest,
        serverResponse,
      ),
    registerWithEmail: (
      _: any,
      { email, password }: any,
      { dataSources }: any,
    ) => dataSources.usersApi.createUser({ email, password }),
  },
};

export default resolvers;
