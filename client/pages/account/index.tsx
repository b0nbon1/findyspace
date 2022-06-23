import { Box } from '@mui/material';
import React from 'react';

function Home() {
  return (
    <Box
      style={{
        width: '100%',
        margin: 0,
      }}
    />
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Home;
