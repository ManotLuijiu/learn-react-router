import React from 'react';
import { useFetcher } from 'react-router-dom';
import PropTypes from 'prop-types';

const Favorite = ({ contact }) => {
  const fetcher = useFetcher();
  let favorite = contact.favorite;

  if (fetcher.formData) {
    favorite = fetcher.formData.get('favorite') === 'true';
  }

  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {favorite ? '★' : '☆'}
      </button>
    </fetcher.Form>
  );
};

Favorite.propTypes = {
  contact: PropTypes.object,
};

export default Favorite;
