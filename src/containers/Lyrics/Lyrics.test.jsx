/**
 * @jest-environment jsdom
 */
import React from 'react';
import { screen, render, waitFor, getByText } from '@testing-library/react';
import App from '../../components/app/App';
import { MemoryRouter, Route } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mockLyricData from '../../../fixtures/lyrics.json';

const server = setupServer(
  rest.get(
    'https://api.lyrics.ovh/v1/the offspring/baghdad',
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
      <MemoryRouter initialEntries={['/The Offspring/Baghdad/Baghdad/lyrics']}>
        <App />
        <Route path="/:artist/:albums/:song/lyrics" />
      </MemoryRouter>
    );

    return waitFor(() => {
      screen.getAllByText('Worlds that echo in your mind', { exact: false });
      screen.getByText('The Offspring', { exact: false });
      screen.getAllByText('Baghdad', { exact: false });
    });
  });
});
