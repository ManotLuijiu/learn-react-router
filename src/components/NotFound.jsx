import React from 'react';
import { useRouteError } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="flex justify-center items-center mx-auto text-center w-full">
      <h3>Oops!</h3>
      <p>Sorry, an unexpected error has occurred</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default NotFound;
