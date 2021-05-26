/**
 * @jest-environment jsdom
 */
import React from 'react'
import {screen, render} from '@testing-library/react'
import App from '../../components/app/App'
import {MemoryRouter, Route} from 'react-router-dom'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import mockLyricData from '../../../fixtures/lyrics.json'
// //files with api calls
const server = setupServer(
    rest.get(`https://api.lyrics.ovh/v1/queen/the night comes down`, (req,res,ctx) => {
        return res(ctx.json(mockLyricData));
    })
);

describe('Tests the Song page', ()=> {
    beforeAll(() => server.listen());
    afterAll(()=> server.close());
    it('renders a song and all it\'s lyrics', () => {
        render(
            <MemoryRouter initialEntries={['/lyrics']}>
                <App />
                <Route path='/:lyrics' />
            </MemoryRouter>
        )
        const element =screen.getByRole('role', {name:'<aria-label>'})
    })
})
