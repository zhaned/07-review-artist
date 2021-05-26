/**
 * @jest-environment jsdom
 */
import React from 'react'
import {MemoryRouter, Route} from 'react-router-dom'
import App from '../../components/app/App'
import {screen, render} from '@testing-library/react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'

const server = setupServer(
    rest.get(`http://musicbrainz.org/ws/2/release?artist=23a03e33-a603-404e-bcbf-2c00159d7067&fmt=json&limit=5w`, (req,res,ctx) => {
        return res(ctx.json(artistsMockData));
    })
);
describe('Tests the Artist page', ()=> {
    beforeAll(() => server.listen());
    afterAll(()=> server.close());
    it('Renders a list of artists albums to the page', () => {
        render(
        <MemoryRouter initialEntries={['/theOffspring']}>
            <App />
            <Route path='/:artist' />
        </MemoryRouter>
        )

        const element =screen.getByRole('list', {name:'artist-list'})
    })
})
