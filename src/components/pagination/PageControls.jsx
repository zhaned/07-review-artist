import React from 'react'
import PropTypes from 'prop-types'

const PageControls = ({ offset, onClickPrev, onClickNext}) => {
    return (
        <nav>
            <button value='prev' onClick={onClickPrev} disabled={offset <= 0}>previous</button>
            <span>page</span>
            <button value='next' onClick={onClickNext}>next</button>
        </nav>
    )
}

PageControls.propTypes = {
    offset: PropTypes.number.isRequired,
    onClickPrev: PropTypes.func.isRequired,
    onClickNext: PropTypes.func.isRequired
}

export default PageControls
