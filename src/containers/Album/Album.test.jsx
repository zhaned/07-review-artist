/**
 * @jest-environment jsdom
 */
import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import App from '../../components/app/App';
import { MemoryRouter, Route } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get(
    'http://musicbrainz.org/ws/2/recording?release=11804dcb-9aa5-420c-a2f1-dddfba12c0e3&fmt=json',
    (req, res, ctx) => {
      return res(ctx.json(mockLyricData));
    }
  )
);
describe('Tests the Album Page', () => {
  it('Renders an artist album and its songs', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());
    render(
      <MemoryRouter initialEntries={['/The Offspring/Baghdad/11804dcb-9aa5-420c-a2f1-dddfba12c0e3']}>
        <App />
        <Route path="/:artist/:release/:id" />
      </MemoryRouter>
    );

    return waitFor(() => {
      const ul = screen.getByRole('list', { name: 'song-list' });
      expect(ul).not.toBeEmptyDOMElement();
      const li = screen.getAllByRole('listitem', { name: 'song-item' });
      expect(li).toHaveLength(4);
      screen.getByText('The Offspring');
      screen.getAllByText('Baghdad');
    });
  });
});
