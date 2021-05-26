import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const SearchItem = ({ id, name, type }) => {
    return (
        <Link to={id}>
            <h2>{name}</h2>
            <p>{type}</p>
        </Link>
    )
}

SearchItem.propTypes = {

}

export default SearchItem
