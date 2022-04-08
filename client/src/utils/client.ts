import {
  ApolloCache,
  ApolloClient,
  DefaultContext,
  InMemoryCache,
  OperationVariables,
  QueryOptions,
  MutationOptions,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const uploadLink = createUploadLink({
  uri: '/api/graphql',
});

const client = new ApolloClient({
  link: uploadLink,
  cache: new InMemoryCache(),
  credentials: 'include',
});

const query = async (
  variables: QueryOptions<OperationVariables, any>,
): Promise<any> => {
  try {
    const response = await client.query(variables);

    return response;
  } catch (error: any) {
    if (error?.graphQLErrors?.shift()?.message === 'Not logged in') {
      console.log('errors here');
    }
    throw error;
  }
};

const mutate = async (
  variables: MutationOptions<
    any,
    OperationVariables,
    DefaultContext,
    ApolloCache<any>
  >,
): Promise<any> => {
  try {
    const response = await client.mutate(variables);

    return response;
  } catch (error: any) {
    if (error?.graphQLErrors?.shift()?.message === 'Not logged in') {
      console.log('errors here');
    }
    throw error;
  }
};

const gqllient: any = { ...client, query, mutate };

export default gqllient;
