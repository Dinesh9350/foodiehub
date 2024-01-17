import { useState, useEffect } from 'react';
import { FETCH_RES_URL } from '../constants';
import { RESTAURANT_DATA } from '../components/mocks/restaurantsData';

const useRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      const data = await fetch(FETCH_RES_URL);
      const json = await data.json();
      if (window.innerWidth < 1024) {
        setRestaurants(
          RESTAURANT_DATA?.data?.cards[4]?.card?.card?.gridElements
            ?.infoWithStyle?.restaurants
        );
        setFilteredRestaurants(
          RESTAURANT_DATA?.data?.cards[4]?.card?.card?.gridElements
            ?.infoWithStyle?.restaurants
        );
      } else {
        setRestaurants(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setFilteredRestaurants(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      }
    };
    fetchData();
  }, []);
  return { restaurants, filteredRestaurants, setFilteredRestaurants };
};

export default useRestaurant;
