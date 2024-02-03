import React from 'react';
import { IMG_CDN_URL } from '../constants';

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  avgRating,
  cuisines,
  locality,
}) => {
  return (
    <div
     
      className='border w-64 h-64 border-gray-300 rounded-xl m-3'
    >
      {/* ease-in-out duration-300  hover:scale-95 */}
      <img
        className='w-64 h-40 object-cover rounded-xl '
        loading='lazy'
        src={IMG_CDN_URL + cloudinaryImageId}
        alt='img'
      />
      <div className='px-3 pt-1'>
        <h3 className='text-md font-bold overflow-hidden overflow-ellipsis whitespace-nowrap'>
          {name}
        </h3>
        <p className='text-sm'>⭐{avgRating} stars</p>
        <p className='text-sm text-gray-600 overflow-hidden overflow-ellipsis whitespace-nowrap'>
          {cuisines.join(', ')}
        </p>
        <p className='text-sm text-gray-600 m-0 p-0'>{locality}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
