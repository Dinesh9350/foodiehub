import React from 'react';

const ShimmerCard = () => {
  return (
    <div className='shimmerCard m-5 '>
      <div className='shimmerBG media'></div>
      <div className='p-32'>
        <div className='shimmerBG title-line'></div>
        <div className='shimmerBG title-line end'></div>

        <div className='shimmerBG content-line mt-24'></div>
        <div className='shimmerBG content-line'></div>
        <div className='shimmerBG content-line'></div>
        <div className='shimmerBG content-line'></div>
        <div className='shimmerBG content-line end'></div>
      </div>
    </div>
  );
};

export default ShimmerCard;
