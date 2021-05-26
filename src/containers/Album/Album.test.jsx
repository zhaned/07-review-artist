import React from 'react'
import {screen, render} from '@testing-library/react'

describe('Tests the Album Page', ()=> {
    it('Renders an artist\'s album and its songs', () => {
        render(<Component />)
        const element =screen.getByRole('role', {name:'<aria-label>'})
    })
})
