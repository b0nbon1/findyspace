import React from 'react';
import { getSession } from 'next-auth/react';
import { setCookies } from 'cookies-next';
import CreateServerClient from '../src/utils/serverSideClient';
import LOGIN_WITH_SOCIALS from '../src/graphql/mutaions/loginWithSocials';

function Home() {
  return (
    <div style={{ width: '100%', margin: 0, height: '80vh' }}>
      <p>loading...</p>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const client = CreateServerClient(context);
  const session = await getSession(context);
  const type = context.query?.socials === '0' ? 'facebook' : 'google';
  const response = await client.mutate({
    mutation: LOGIN_WITH_SOCIALS,
    variables: {
      token: session?.accessToken || '',
      type,
    },
  });
  if (response.data.loginWithSocials.status) {
    setCookies(
      'x-session',
      response.data.loginWithSocials.accessToken,
      context,
    );
    context.res.writeHead(302, {
      Location: '/',
    });
    context.res.end();
    return { props: {} };
  }
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Home;
