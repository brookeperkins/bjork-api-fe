import React from 'react';
import { render, cleanup } from '@testing-library/react';
import BjorkItem from './BjorkItem';

describe('<BjorkItem />', () => {
  afterEach(() => cleanup());

  it('renders a single list item', () => {
    const { asFragment } = render(<BjorkItem
      imgUrl="bjork.jpg"
      year={1999}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
