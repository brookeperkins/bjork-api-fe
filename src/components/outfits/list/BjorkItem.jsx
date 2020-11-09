import React from 'react';
import PropTypes from 'prop-types';

const BjorkItem = ({ img, year }) => (
  <figure>
    <img src={img} alt={img} />
    <h3>{year}</h3>
  </figure>
);

BjorkItem.propTypes = {
  img: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
};

export default BjorkItem;
