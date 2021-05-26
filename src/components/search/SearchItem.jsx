import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const SearchItem = ({ id, name, type }) => {
    return (
        <Link to={`/${id}`}>
            <h2>{name}</h2>
            <p>{type}</p>
        </Link>
    )
}

SearchItem.propTypes = {
id: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
type: PropTypes.string.isRequired,
}

export default SearchItem;
