/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const ArtistItem = ({ id, artist, title, image }) => {
    return (
        <Link to={`/${artist}/${title}/${id}`}>
            <img src={image} alt={title} onerror="this.onerror=null;this.src='http://placekitten.com/300/300';" />
            <h3>{title}</h3>
        </Link>
    )
}

ArtistItem.propTypes = {
id: PropTypes.string.isRequired, 
artist: PropTypes.string.isRequired,
title: PropTypes.string.isRequired,
image: PropTypes.string.isRequired,
}

export default ArtistItem;
