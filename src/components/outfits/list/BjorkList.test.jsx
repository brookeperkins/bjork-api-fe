import React from 'react';
import { render, cleanup } from '@testing-library/react';
import BjorkList from './BjorkList';
/* eslint-disable max-len */

const testArray = [
  { img: 'Bjork.jpg', 
    year: 1999 },
  { img: 'Bjork2.jpg', 
    year: 2018 }
];

describe('<BjorkList />', () => {
  afterEach(() => cleanup());
  it('renders the BjorkList component', () => {
    const { asFragment } = render(
      <BjorkList
        outfits={testArray}
      />);
    expect(asFragment()).toMatchSnapshot();
  });
});

