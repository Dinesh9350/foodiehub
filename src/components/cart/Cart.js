import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import CartItemCard from './CartItemCard';
import { clearCart } from '../../utils/cartSlice';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const dispatch = useDispatch();

  // Use useSelector to access the length of cart items
  const cartItems = useSelector((store) => store.cart.items);

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <>
      <div className='text-center'>
        <button
          onClick={() => dispatch(clearCart())}
          className='bg-red-500 text-sm font-bold hover:shadow-lg text-white py-1 px-3 rounded-lg mt-5 '
        >
          Clear Cart
        </button>
      </div>

      <div className='lg:flex items-start justify-between mx-2 md:mx-16 lg:mx-5 xl:mx-52'>
        <div className='sm:w-full lg:w-7/12 '>
          {cartItems.length !== 0 && (
            <>
              {cartItems.map((cartItem) => (
                <div key={cartItem.id} className=''>
                  <CartItemCard {...cartItem} cartItem={cartItem} />
                </div>
              ))}
            </>
          )}
        </div>
        <div className='border p-5 rounded-lg sm:w-full lg:w-5/12 mt-10 lg:m-5'>
          <h3 className='font-bold text-gray-600'>PRICE DETAILS</h3>
          <h3>Price ({cartItems.length} item)</h3>
          <h3>Discount</h3>
          <h3>Delivery Charges</h3>
          <h3 className='font-bold'>Total Amount</h3>
        </div>
      </div>
    </>
  );
};

export default Cart;
