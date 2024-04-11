import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../utils/cartSlice';
import { RECOMMENDATION_ITEM_IMG_CDN_URL } from '../../constants';
import placeholderimg from '../../assets/placeholder_img.jpg';

const CartItemCard = ({ id, name, price, description, imageId }) => {
  const dispatch = useDispatch();
  const priceString = price?.toString();
  // console.log(id);
  return (
    <div className='flex items-center justify-between my-3 mt-5 border rounded-xl p-2 w-auto'>
      <div className='sm:w-2/12'>
        <img
          className='h-24 w-24  object-cover rounded-xl border z-0'
          src={
            imageId ? RECOMMENDATION_ITEM_IMG_CDN_URL + imageId : placeholderimg
          }
          loading='lazy'
          alt='img'
        />
      </div>
      <div className='w-9/12 p-2'>
        <h3 className='font-bold'>{name}</h3>
        <h3>₹ {priceString?.slice(0, -2)}</h3>
        {/* <h3 className='text-xs hidden md:block text-gray-600 flex-wrap'>
          {description}
        </h3> */}
      </div>
      <div className='p-3 my-auto'>
        <button onClick={() => dispatch(removeItem(id))}>❌</button>
      </div>
    </div>
  );
};

export default CartItemCard;
