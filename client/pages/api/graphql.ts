import { ApolloServer } from 'apollo-server-micro';
import { processRequest } from 'graphql-upload';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  appEncryptionKey,
  NodeEnv,
  sessionDuaration,
  sessionName,
} from '../../config';
import resolvers from '../../src/api/resolvers';
import typeDefs from '../../src/api/schema';
import { dataSources, plugins } from '../../src/api/server';
import { decryptSignedCipher } from '../../src/utils/encryption';

let started = false;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  // introspection: configs.NODE_ENV !== "production",
  plugins: (plugins as any)[NodeEnv] || [],
  context: ({ req, res }: { req: NextApiRequest; res: NextApiResponse }) => {
    const session = req.cookies[sessionName];
    let user;
    let userBearerToken;

    if (session) {
      const [ikm, info, authTag] = appEncryptionKey.split('|');

      const parsedSession = JSON.parse(
        decryptSignedCipher(ikm, info, authTag, session)?.toString() || '{}',
      );
      if (
        new Date().getTime() - Number(parsedSession.loginTime) <=
        Number(sessionDuaration) * 60 * 1000
      ) {
        user = parsedSession.user;
        userBearerToken = parsedSession.bearerToken;
      }
    }

    return {
      serverResponse: res,
      serverRequest: req,
      user,
      bearerToken: userBearerToken,
    };
  },
});

export const config = {
  api: {
    bodyParser: false,
    credentials: true,
  },
  playground: {
    request: {
      credentials: 'include',
    },
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!started) {
    await server.start();
    started = true;
  }
  const handler = server.createHandler({ path: '/api/graphql' });
  const contentType = req.headers['content-type'];
  if (contentType && contentType.startsWith('multipart/form-data')) {
    (req as any).filePayload = await processRequest(req, res);
  }

  return handler(req, res);
};

export { server as graphqlServer };
