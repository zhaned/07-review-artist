/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const ArtistItem = ({ id, artist, release, image }) => {
    return (
        <Link to={`/${artist}/${release}/${id}`}>
            <img src={image} alt={release} />
            <h3>{release}</h3>
        </Link>
    )
}

ArtistItem.propTypes = {
    id: PropTypes.string.isRequired, 
    artist: PropTypes.string.isRequired,
    release: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default ArtistItem;
