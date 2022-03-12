import React from 'react';
import Hero from '../src/components/home/Hero';
import Header from '../src/components/layouts/Header';

function Home() {
  return (
    <div style={{ width: '100%', margin: 0 }}>
      <Header />
      <Hero />
    </div>
  );
}

export default Home;
