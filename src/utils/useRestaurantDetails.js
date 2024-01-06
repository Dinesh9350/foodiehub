import { useState, useEffect } from 'react';
import {
  FETCH_RES_DETAILS_URL,
  FETCH_RES_DETAILS_URL_MOBILE,
} from '../constants';

const useRestaurantDetails = (id) => {
  const [restaurants, setRestaurants] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        if (window.innerWidth < 1024) {
          const data = await fetch(FETCH_RES_DETAILS_URL_MOBILE + id);
          if (!data.ok) {
            throw new Error(
              `Failed to fetch data: ${data.status} - ${data.statusText}`
            );
          }
          const json = await data.json();
          setRestaurants(json?.data?.cards[0].card.card.info);
          setRecommendations(
            json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
              ?.card?.card?.itemCards || [] // Provide an empty array as a default if recommendations are not available
          );
        } else {
          const data = await fetch(FETCH_RES_DETAILS_URL + id);
          if (!data.ok) {
            throw new Error(
              `Failed to fetch data: ${data.status} - ${data.statusText}`
            );
          }
          const json = await data.json();

          setRestaurants(json?.data?.cards[0].card.card.info);
          setRecommendations(
            json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
              ?.card?.card?.itemCards || [] // Provide an empty array as a default if recommendations are not available
          );
          console.log(
            json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
              ?.card?.card?.itemCards
          );
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]);

  return { restaurants, recommendations };
};

export default useRestaurantDetails;
