/**
 * @jest-environment jsdom
 */
import React from 'react'
import {screen, render} from '@testing-library/react'
import App from '../../components/app/App'
import {MemoryRouter, Route} from 'react-router-dom'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import artistsMockData from '../../../fixtures/search.json'
// //files with api calls
const server = setupServer(
    rest.get(`http://musicbrainz.org/ws/2/artist?query=ab&fmt=json&limit=5`, (req,res,ctx) => {
        return res(ctx.json(artistsMockData));
    })
);
describe('tests the homepage', ()=> {
    beforeAll(() => server.listen());
    afterAll(()=> server.close());
    it('renders a search control component', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
                <Route path='/' />
            </MemoryRouter>
        )
        const input = screen.getByRole('textbox', {name:'artist-search'})
    })
})
