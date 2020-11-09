/* eslint-disable max-len */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useOutfitById } from '../../../hooks/useOutfits';

const OutfitDetail = () => {
  const { id } = useParams();
  const { loading, outfit } = useOutfitById(id);
  if(loading) return <h1>Loading...</h1>;

  return (
    <div key="detail-display" data-testid="detail-display" className="detail-display">
      <img src={outfit.img} alt={outfit.img} />
      <h2 data-testid="year">Year: {outfit.year}</h2>
      <p data-testid="quote">Quote: {outfit.quote}</p>
    </div>
  );
};

export default OutfitDetail;
