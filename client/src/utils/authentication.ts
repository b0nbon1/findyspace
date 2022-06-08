import { decryptSignedCipher } from './encryption';

const getUser = (context: any) => {
  const session = context.req.cookies['x-session'];
  let user;

  if (session) {
    const [ikm, info, authTag] = 'WTCPFJF5|EHBN9Q|DGTYD98'.split('|');

    const parsedSession = JSON.parse(
      decryptSignedCipher(ikm, info, authTag, session)?.toString() || '{}',
    );
    if (
      new Date().getTime() - Number(parsedSession.loginTime) <=
      120 * 60 * 1000
    ) {
      user = parsedSession.user;
    }
  }
  return user;
};

export default getUser;
