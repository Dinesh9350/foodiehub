import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import CartItemCard from './CartItemCard';
import { clearCart } from '../../utils/cartSlice';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const dispatch = useDispatch();

  // Use useSelector to access the length of cart items
  const cartItems = useSelector((store) => store.cart.items);
  const price = cartItems
    .reduce((total, cartItem) => total + (cartItem ? cartItem.price : 0), 0)
    .toString()
    .slice(0, -2);
  const discount = Math.floor(price * 0.1);
  const delivery = 99;
  const totalPrice = price - discount + delivery;

  console.log('cartItems', cartItems);
  console.log('discount', discount);
  console.log('totalPrice', totalPrice);

  const amount = 500;
  const currency = 'INR';
  const receiptId = 'qwsaq1';

  const paymentHandler = async (e) => {
    setButtonClicked(true);
    const response = await fetch('http://localhost:5000/order', {
      method: 'POST',
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const order = await response.json();
    console.log(order);

    var options = {
      key: 'rzp_test_RzchK5p82DAmyS', // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      name: 'Acme Corp', //your business name
      description: 'Test Transaction',
      image: 'https://example.com/your_logo',
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        const body = {
          ...response,
        };

        const validateRes = await fetch(
          'http://localhost:5000/order/validate',
          {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const jsonRes = await validateRes.json();
        console.log(jsonRes);
      },
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        name: 'Web Dev Matrix', //your customer's name
        email: 'webdevmatrix@example.com',
        contact: '9000000000', //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
  };

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
          <div className='flex'>
            <div className='mr-5'>
              <h3>Price ({cartItems.length} item)</h3>
              <h3>Discount (10%)</h3>
              <h3>Delivery Charges</h3>
              <h3 className='font-bold'>Total Amount</h3>
            </div>
            <div>
              <h3>₹ {price}</h3>
              <h3>₹ {discount}</h3>
              <h3>₹ {delivery}</h3>
              <h3 className='font-bold'>₹ {totalPrice}</h3>
            </div>
          </div>
          <button
            onClick={paymentHandler}
            disabled={buttonClicked}
            className='bg-green-700 text-white rounded-lg mt-5 px-3 py-2'
          >
            Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
