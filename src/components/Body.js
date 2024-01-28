import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './shimmer/Shimmer';
import { Link } from 'react-router-dom';
import useRestaurant from '../utils/useRestaurant';
import useOnline from '../utils/useOnline';
import Offline from './Offline';

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const { restaurants, filteredRestaurants, setFilteredRestaurants } =
    useRestaurant();

  const isOnline = useOnline();
  if (!isOnline) {
    return <Offline />;
  }

  if (filteredRestaurants?.length === 0) {
    return (
      <div className='mt-20 mb-3'>
        <Shimmer />
      </div>
    );
  }
  return (
    <div className='mx-10 '>
      <div className='flex justify-center my-5'>
        <input
          className='rounded-full px-4 py-1 mr-2'
          type='text'
          placeholder='Search...'
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          type='submit'
          className='bg-blue-800 text-white px-4 py-1 rounded-full'
          onClick={() => {
            const filterData = restaurants.filter((restaurant) => {
              return restaurant?.info?.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredRestaurants(filterData);
          }}
        >
          Search
        </button>
      </div>
      <div
       
        className='flex flex-wrap justify-center	m-5 '
      >
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              to={'/restaurant/' + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <RestaurantCard {...restaurant?.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
