import React from 'react';
import { render } from '@testing-library/react';
import Form from './Form';

describe('<Form />', () => {
  const number = 1994;

  it('renders the form', () => {
    const { asFragment } = render(<Form
      image="https://bjork.com/bjork.jpg"
      year={number}
      quote="Bjork quote here."
      onChange={() => {}}
      onSubmit={() => {}}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
