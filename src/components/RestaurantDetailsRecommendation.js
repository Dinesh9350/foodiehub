import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import { RECOMMENDATION_ITEM_IMG_CDN_URL } from '../constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import placeholderImage from '../assets/placeholder_img.jpg';

const RestaurantDetailsRecommendation = ({
  recommendation,
  name,
  price,
  description,
  imageId,
}) => {
  const dispatch = useDispatch();
  const priceString = price?.toString();
  const handleAddToCart = (recommendation) => {
    dispatch(addItem(recommendation));
    toast.success('Added to Cart', {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return (
    <div className='flex items-center justify-between my-3 border rounded-xl p-2'>
      <div className='w-9/12'>
        <h3 className='font-bold'>{name}</h3>
        <h3>₹ {priceString?.slice(0, -2)}</h3>
        <h3 className='text-xs hidden md:block text-gray-600 '>
          {description}
        </h3>
      </div>
      <div className='sm:w-2/12 relative'>
        <img
          className='h-24 w-24  object-cover rounded-xl border z-0'
          src={
            imageId
              ? RECOMMENDATION_ITEM_IMG_CDN_URL + imageId
              : placeholderImage
          }
          loading='lazy'
          alt='img'
        />
        <button
          onClick={() => handleAddToCart(recommendation)}
          className='bg-white text-green-500 text-sm font-bold hover:shadow-lg py-1 px-3 rounded-lg z-10 absolute bottom-1 left-5'
        >
          ADD
        </button>
        <ToastContainer autoClose={400} />
      </div>
    </div>
  );
};

export default RestaurantDetailsRecommendation;
