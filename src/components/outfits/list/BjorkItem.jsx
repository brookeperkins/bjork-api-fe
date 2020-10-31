import React from 'react';
import PropTypes from 'prop-types';

const BjorkItem = ({ imgUrl, year }) => (
  <figure>
    <img src={imgUrl} alt={imgUrl} />
    <h3>{year}</h3>
  </figure>
);

BjorkItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
};

export default BjorkItem;
