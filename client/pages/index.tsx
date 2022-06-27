import React from 'react';
import BlogSection from '../src/components/home/BlogSection';
import FlexibleContainer from '../src/components/home/FlexibleContainer';
import Hero from '../src/components/home/Hero';
import PopularActivities from '../src/components/home/PopularActivities';
import PopularLocations from '../src/components/home/PopularLocations';
import { SearchBarMobile } from '../src/components/home/SearchBar';
import SupportContainer from '../src/components/home/SupportContainer';
import WhyUs from '../src/components/home/WhyUs';

function Home() {
  return (
    <div style={{ width: '100%', margin: 0 }}>
      <Hero />
      <SearchBarMobile />
      <FlexibleContainer />
      <PopularActivities />
      <PopularLocations />
      <WhyUs />
      <BlogSection />
      <SupportContainer />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Home;
