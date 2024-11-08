import { Hero } from '@/components/templates';
import { fetchData } from '@/utils';
import React from 'react';

const HomePage = async () => {
  const [profiles] = await Promise.all([fetchData('/api/profiles')]);
  return <Hero profiles={profiles} />;
};

export default HomePage;
