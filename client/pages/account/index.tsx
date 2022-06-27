import { Box } from '@mui/material';
import React from 'react';
import AccountsLayout from '../../src/components/account/AccountsLayout';

function Home() {
  return (
    <AccountsLayout>
      <Box />
    </AccountsLayout>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Home;
