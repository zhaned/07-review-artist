/**
 * @jest-environment jsdom
 */
import React from 'react'
import {screen, render} from '@testing-library/react'
import App from '../../components/app/App'
import {MemoryRouter, Route} from 'react-router-dom'
import {rest} from 'msw'
import {setupServer} from 'msw/node'

const server = setupServer(
    rest.get(`http://musicbrainz.org/ws/2/recording?release=11804dcb-9aa5-420c-a2f1-dddfba12c0e3&fmt=json`, (req,res,ctx) => {
        return res(ctx.json(mockLyricData));
    })
);
describe('Tests the Album Page', ()=> {
    it('Renders an artist\'s album and its songs', () => {
        beforeAll(() => server.listen());
        afterAll(()=> server.close());
        render(
        <MemoryRouter initialEntries={['/offspring/baghdad']} >
            <App />
            <Route path='/:artist/:album' />
        </MemoryRouter>
        
        )
        const element =screen.getByRole('list', {name:'album-songs'})
    })
})
