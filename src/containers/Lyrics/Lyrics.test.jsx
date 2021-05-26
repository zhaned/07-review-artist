/**
 * @jest-environment jsdom
 */
import React from 'react';
import { screen, render } from '@testing-library/react';
import App from '../../components/app/App';
import { MemoryRouter, Route } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mockLyricData from '../../../fixtures/lyrics.json';

const server = setupServer(
  rest.get(
    'https://api.lyrics.ovh/v1/queen/the%20night%20comes%20down',
    (req, res, ctx) => {
      return res(ctx.json(mockLyricData));
    }
  )
);

describe('Tests the Song page', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  it('renders song lyrics', () => {
    render(
      <MemoryRouter initialEntries={['/queen/queen/whenthenightcomesdown/']}>
        <App />
        <Route path="/:artist/:albums/:song" />
      </MemoryRouter>
    );
    const element = screen.getByRole('region', { name: 'lyrics-section' });
  });
});
