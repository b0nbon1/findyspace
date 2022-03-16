import React from 'react';
import FlexibleContainer from '../src/components/home/FlexibleContainer';
import Hero from '../src/components/home/Hero';
import PopularActivities from '../src/components/home/PopularActivities';
import PopularLocations from '../src/components/home/PopularLocations';
import { SearchBarMobile } from '../src/components/home/SearchBar';
import Header from '../src/components/layouts/Header';

function Home() {
  return (
    <div style={{ width: '100%', margin: 0 }}>
      <Header />
      <Hero />
      <SearchBarMobile />
      <FlexibleContainer />
      <PopularActivities />
      <PopularLocations />
    </div>
  );
}

export default Home;
