import React from 'react';

const RestaurantDetailsCard = ({
  name,
  cuisines,
  sla,
  avgRating,
  totalRatingsString,
  feeDetails,
  costForTwoMessage,
  aggregatedDiscountInfo,
  areaName,
}) => {
  return (
    <>
      <div className='flex justify-between'>
        <div>
          <h2 className='text-xl font-bold'>{name}</h2>
          <p className='text-sm text-gray-600 overflow-hidden overflow-ellipsis whitespace-nowrap'>
            {cuisines?.join(', ')}
          </p>
          <p className='text-sm text-gray-600 overflow-hidden overflow-ellipsis whitespace-nowrap'>
            {areaName}, {sla?.lastMileTravel} KM
          </p>
        </div>
        <div>
          <p className='text-sm overflow-hidden overflow-ellipsis whitespace-nowrap'>
            ⭐{avgRating}
          </p>
          <p className='text-sm overflow-hidden overflow-ellipsis whitespace-nowrap'>
            {totalRatingsString}
          </p>
        </div>
      </div>

      <p className='text-sm text-gray-600 overflow-hidden overflow-ellipsis whitespace-nowrap'>
        {feeDetails?.message}
      </p>
      <div className='flex'>
        <div>
          <h2 className='text-md font-bold mr-10'>{sla?.deliveryTime} MINS</h2>
        </div>
        <div>
          <h2 className='text-md font-bold'>{costForTwoMessage}</h2>
        </div>
      </div>
      <div className=''>
        <h2 className='text-md font-bold mr-10 text-gray-600'>
          {aggregatedDiscountInfo?.header}
        </h2>
      </div>
      <div className='mt-5'>
        <h2 className='text-md font-bold mr-10'>Recommended</h2>
      </div>
    </>
  );
};

export default RestaurantDetailsCard;
