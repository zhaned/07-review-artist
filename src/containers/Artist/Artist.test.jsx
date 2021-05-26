import React from 'react'
import {screen, render} from '@testing-library/react'

describe('Tests the Artist page', ()=> {
    it('Renders a list of artists albums to the page', () => {
        render(<Component />)
        const element =screen.getByRole('role', {name:'<aria-label>'})
    })
})
