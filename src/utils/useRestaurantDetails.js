import { useState, useEffect } from 'react';
import { FETCH_RES_DETAILS_URL } from '../constants';
import { RESTAURANT_DETAILS_RECOMMENDATION_DATA } from '../components/mocks/restaurantDetailsRecommendationData';

const useRestaurantDetails = (id) => {
  const [restaurants, setRestaurants] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        if (window.innerWidth < 500) {
          setRestaurants(
            RESTAURANT_DETAILS_RECOMMENDATION_DATA?.data?.cards[0].card.card
              .info
          );
          setRecommendations(
            RESTAURANT_DETAILS_RECOMMENDATION_DATA?.data?.cards[2]?.groupedCard
              ?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [] // Provide an empty array as a default if recommendations are not available
          );
          console.log(
            'setRestaurants RESTAURANT_DETAILS_RECOMMENDATION_DATA',
            RESTAURANT_DETAILS_RECOMMENDATION_DATA?.data?.cards[0].card.card
              .info
          );
          console.log(
            'setRecommendations RESTAURANT_DETAILS_RECOMMENDATION_DATA',
            RESTAURANT_DETAILS_RECOMMENDATION_DATA?.data?.cards[2]?.groupedCard
              ?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
          );
        } else if (window.innerWidth < 1024) {
          const data = await fetch(FETCH_RES_DETAILS_URL + id);
          if (!data.ok) {
            throw new Error(
              `Failed to fetch data: ${data.status} - ${data.statusText}`
            );
          }
          const json = await data.json();
          setRestaurants(json?.data?.cards[2].card.card.info);
          setRecommendations(
            RESTAURANT_DETAILS_RECOMMENDATION_DATA?.data?.cards[2]?.groupedCard
              ?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [] // Provide an empty array as a default if recommendations are not available
          );
          console.log(
            'setRestaurants RESTAURANT_DETAILS_RECOMMENDATION_DATA',
            json?.data?.cards[2].card.card.info
          );
          console.log(
            ' setRecommendations RESTAURANT_DETAILS_RECOMMENDATION_DATA',
            RESTAURANT_DETAILS_RECOMMENDATION_DATA?.data?.cards[2]?.groupedCard
              ?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
          );
        } else {
          const data = await fetch(FETCH_RES_DETAILS_URL + id);
          if (!data.ok) {
            throw new Error(
              `Failed to fetch data: ${data.status} - ${data.statusText}`
            );
          }
          const json = await data.json();

          setRestaurants(json?.data?.cards[2].card.card.info);
          console.log('setRestaurants', json?.data?.cards[2].card.card.info);
          setRecommendations(
            json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
              ?.card?.card?.itemCards || [] // Provide an empty array as a default if recommendations are not available
          );

          console.log(
            'setRecommendations',
            json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
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
