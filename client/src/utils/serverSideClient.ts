import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { NextPageContext } from 'next';
import { setContext } from '@apollo/client/link/context';

export const httpLink = createHttpLink({
  uri: 'http://localhost:5090/api/graphql',
  credentials: 'include',
});

const CreateServerClient = (ctx: NextPageContext | null) => {
  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      cookie:
        (typeof window === 'undefined'
          ? ctx?.req?.headers.cookie || undefined
          : undefined) || '',
    },
  }));

  return new ApolloClient({
    credentials: 'include',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    ssrMode: true,
  });
};

export default CreateServerClient;
