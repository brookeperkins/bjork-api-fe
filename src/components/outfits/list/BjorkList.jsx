import React from 'react';
import { useOutfits } from '../../../hooks/useOutfits';
import BjorkItem from './BjorkItem';
import { Link } from 'react-router-dom';

const BjorkList = () => {
  const { loading, outfits } = useOutfits();
  console.log(outfits);

  if(loading) return <h1>Loading...</h1>;

  const bjorkElements = outfits.map(outfit => (
    <li key={outfit.id}>
      <Link to={`/${outfit.id}`}>
        <BjorkItem {...outfit} />
      </Link>
    </li>
  ));

  return (
    <figure>
      <ul data-testid="bjork-list">
        {bjorkElements}
      </ul>
    </figure>
  );
};

export default BjorkList;
