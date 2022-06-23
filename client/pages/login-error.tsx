import React from 'react';

function Home() {
  return (
    <div style={{ width: '100%', margin: 0, height: '80vh' }}>
      <p>loading...</p>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Home;
