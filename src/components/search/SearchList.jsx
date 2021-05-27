/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import SearchItem from './SearchItem';

const SearchList = ({ artists }) => {
    return (
        <ul aria-label='search-artist'>
            {artists.map((artist) => (
                <li key={artist.id} aria-label='artist-result'>
                    <SearchItem {...artist}/>
                </li>
            ))}
        </ul>
    )
}

SearchList.propTypes = {
artists: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
    })
).isRequired,
}

export default SearchList;
