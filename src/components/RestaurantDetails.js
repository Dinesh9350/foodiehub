import React from 'react';
import { useParams } from 'react-router-dom';
import ShimmerDetails from './shimmer/ShimmerDetails';
import RestaurantDetailsRecommendation from './RestaurantDetailsRecommendation';
import RestaurantDetailsCard from './RestaurantDetailsCard';
import useRestaurantDetails from '../utils/useRestaurantDetails';

const RestaurantDetails = () => {
  const { id } = useParams();
  const { restaurants, recommendations } = useRestaurantDetails(id);

  if (!restaurants || !restaurants.id) {
    return (
      <div className='mt-10'>
        <ShimmerDetails />
      </div>
    );
  }

  return (
    <div className='mx-2 md:mx-32 xl:mx-80  mt-5'>
      <RestaurantDetailsCard {...restaurants} id={restaurants.id} />

      <div>
        {recommendations &&
          recommendations.slice(0, 5)?.map((recommendation) => {
            return (
              <div key={recommendation?.card?.info?.id}>
                <RestaurantDetailsRecommendation
                  {...recommendation?.card?.info}
                  id={recommendation?.card?.info?.id}
                  recommendation={recommendation?.card?.info}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RestaurantDetails;
