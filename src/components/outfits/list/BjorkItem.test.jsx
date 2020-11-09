import React from 'react';
import { render } from '@testing-library/react';
import BjorkItem from './BjorkItem';

describe('<BjorkItem />', () => {
  const number = 1999;

  it('renders a single list item', () => {
    const { asFragment } = render(<BjorkItem
      img="bjork.jpg"
      year={number}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
