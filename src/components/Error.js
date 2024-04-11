import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  return <div className='text-center my-5'>
		<h1 className='text-2xl '>Something went wrong!</h1>
		<h1 className='text-4xl '>Error {err.status + ": " + err.statusText}</h1>
	</div>;
};

export default Error;
