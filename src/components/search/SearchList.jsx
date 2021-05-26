import React from 'react'
import PropTypes from 'prop-types'
import SearchItem from './SearchItem'

const SearchList = ({ artists }) => {
    return (
        <ul>
            {artists.map((artist) => (
                <li key={artist.id}>
                    <SearchItem {...artist}/>
                </li>
            ))}
        </ul>
    )
}

SearchList.propTypes = {

}

export default SearchList
