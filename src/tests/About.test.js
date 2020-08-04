import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import renderWithRouter from '../services/renderWithRouter';
import { About } from '../components';
import App from '../App';

describe('test all |About', () => {
  // test('renders a reading with the text `Pokédex`', () => {
  //   const { getByText } = render(
  //     <MemoryRouter>
  //       <App />
  //     </MemoryRouter>,
  //   );
  //   const heading = getByText(/Pokédex/i);
  //   expect(heading).toBeInTheDocument();
  // });

  test('Verify if has h2 heading', () => {
    const { getByRole } = renderWithRouter(<About />);
    const h2 = getByRole('heading');
    expect(h2).toHaveTextContent('About Pokédex');
  });

  test('verify if has 2 buttons', () => {
    const { container } = renderWithRouter(<About />);
    const p = container.querySelectorAll('p');
    expect(p.length).toBe(2);
  });

  test('verify if has img', () => {
    const { getByRole } = renderWithRouter(<About />);
    const img = getByRole('img');
    expect(img.src).toBe('https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});