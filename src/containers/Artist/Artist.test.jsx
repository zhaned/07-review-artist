/**
 * @jest-environment jsdom
 */
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import App from '../../components/app/App';
import { screen, render, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import artistsMockData from '../../../fixtures/artist.json';

const server = setupServer(
  rest.get(
    'https://musicbrainz.org/ws/2/release?artist=23a03e33-a603-404e-bcbf-2c00159d7067&fmt=json&limit=5',
    (req, res, ctx) => {
      return res(ctx.json(artistsMockData));
    }
  )
);
describe('Tests the Artist page', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  it('Renders a list of artists albums to the page', () => {
    render(
      <MemoryRouter initialEntries={[
        '/The Offspring/23a03e33-a603-404e-bcbf-2c00159d7067'
      ]}>
        <App />
        <Route path="/:artist/:id" />
      </MemoryRouter>
    );
    
    return waitFor(() => {
      const ul = screen.getByRole('list', { name: 'album-list' });
      expect(ul).not.toBeEmptyDOMElement();
      const li = screen.getAllByRole('listitem', { name: 'album-item' });
      expect(li).toHaveLength(5);
    });
  });
});
