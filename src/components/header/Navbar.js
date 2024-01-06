import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnline from '../../utils/useOnline';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isOnline = useOnline();
  const cartItems = useSelector((store) => store.cart.items);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-black text-white relative'>
      <div className='max-w-7xl mx-auto px-4 '>
        <div className='flex justify-between items-center py-4'>
          <div className='flex items-center'>
            <Link to='/' className='text-2xl font-bold'>
              FoodieHub
            </Link>
            <h3 className='pl-3'>{isOnline ? '🟢' : '🔴'}</h3>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button
              onClick={toggleNavbar}
              type='button'
              className='text-white hover:text-gray-200 focus:outline-none focus:text-gray-200'
            >
              <svg
                className='h-6 w-6 fill-current'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                {isOpen ? (
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M6.293 8.293a1 1 0 011.414 0L12 13.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z'
                    fill='currentColor'
                  />
                ) : (
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M4 5a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm1 4a1 1 0 100 2h14a1 1 0 100-2H5zm-1 5a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z'
                    fill='currentColor'
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex space-x-10'>
            <Link to='/help' className='hover:text-gray-200'>
              Help
            </Link>
            <Link to='/signin' className='hover:text-gray-200'>
              Sign In
            </Link>
            <Link to='/cart' className='hover:text-gray-200'>
              Cart - {cartItems.length}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-black  '>
          <div className='px-2 pt-2 pb-3 '>
            <Link to='/help' className='block hover:text-gray-200 p-1'>
              Help
            </Link>
            <Link to='/signin' className='block hover:text-gray-200 p-1'>
              Sign In
            </Link>
            <Link to='/cart' className='block hover:text-gray-200 p-1'>
              Cart - {cartItems.length}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
