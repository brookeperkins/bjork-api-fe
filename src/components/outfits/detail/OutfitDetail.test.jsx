import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import OutfitDetail from './OutfitDetail'; 
import { getOutfitById } from '../../../services/bjork-api';
import { MemoryRouter, Route } from 'react-router-dom';

jest.mock('../../../services/bjork-api.js');

describe('<OutfitDetail />', () => {
  it('displays an outfit entry after loading', () => {
    getOutfitById.mockResolvedValue({
      id: 1,
      img: 'Bjork.jpg',
      year: 1992,
      quote: 'BJORK SAYS WHAT'
    });

    render(<MemoryRouter initialEntries={['/outfit/1']}>
      <Route path="/outfit/:id" component={OutfitDetail}/>
    </MemoryRouter>);

    screen.getByText('Loading...');  

    return waitFor(() => {
      screen.getByAltText('Bjork.jpg');
      screen.getByTestId('year');
      screen.getByTestId('quote');
    });
  });
});
