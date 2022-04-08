import {
  ApolloServerPluginCacheControl,
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from 'apollo-server-core';
import AuthorizationApi from './datasources/auth';
import UsersApi from './datasources/userApi';

const plugins = {
  development: [
    // COMMENTED OUT FOR SECURITY
    ApolloServerPluginLandingPageGraphQLPlayground(),
    //  ApolloServerPluginLandingPageDisabled(), // added for security
    ApolloServerPluginCacheControl({ defaultMaxAge: 0 }),
  ],
  production: [
    // ApolloServerPluginLandingPageDisabled(),
    ApolloServerPluginCacheControl({ defaultMaxAge: 0 }),
  ],
};

const dataSources = () => ({
  authApi: new AuthorizationApi(),
  usersApi: new UsersApi(),
});

export { dataSources, plugins };
