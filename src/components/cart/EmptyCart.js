import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div className='text-center my-40'>
      <img
        className='m-auto h-60 my-8'
        src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0'
        alt='empty'
      />
      <h3 className='font-bold text-gray-500 my-1'>Your cart is empty </h3>
      <h3 className='text-sm text-gray-400 my-1'>
        You can go to home page to view more restaurants
      </h3>
      <Link to='/'>
        <button className='bg-black text-white font-bold px-2 py-1 my-5 '>
          See Restaurants
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
