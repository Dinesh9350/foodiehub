import React from 'react';
import ShimmerCard from './ShimmerCard';
const Shimmer = () => {
  return (
    <div className='mx-10 lg:mx-32'>
      <div className='flex flex-wrap justify-center'>
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
      </div>
    </div>
  );
};

export default Shimmer;
