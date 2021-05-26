/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import ArtistItem from './ArtistItem';
import './artist.css';

const ArtistList = ({ releases, artist }) => {
    return (
        <>
            <h2>{artist}</h2>
            <ul>
                {releases.map((release) => (
                   <li key={release.id}>
                        <ArtistItem {...release}/>  
                   </li> 
                ))}
            </ul>
        </>
    )
}

ArtistList.propTypes = {
    releases: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired, 
            artist: PropTypes.string.isRequired,
            release: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,

}

export default ArtistList;
