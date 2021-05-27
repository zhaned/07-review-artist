/**
 * @jest-environment jsdom
 */
import React from 'react';
import {
  screen,
  render,
  waitFor,
  fireEvent,
  act,
} from '@testing-library/react';
import App from '../../components/app/App';
import { MemoryRouter, Route } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import artistsMockData from '../../../fixtures/search.json';

const server = setupServer(
  rest.get(
    'http://musicbrainz.org/ws/2/artist?query=ab&fmt=json&limit=5',
    (req, res, ctx) => {
      return res(ctx.json(artistsMockData));
    }
  )
);
describe('tests the homepage', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  it('renders a search control component', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
        <Route path="/" />
      </MemoryRouter>
    );
    return waitFor(() => {
      const input = screen.getByRole('textbox', { name: 'artist-search' });
      const button = screen.getByRole('button', { name: 'submit-button' });

      fireEvent.change(input, {
        target: { value: 'ab' },
      });

      expect(input.value).toBe('ab');

      fireEvent.click(button);
      screen.getByRole('list', { name: 'search-artist' });
      const li = screen.getAllByRole('listitem', { name: 'artist-result' });
      expect(li).toHaveLength(5);
    });
  });
});
