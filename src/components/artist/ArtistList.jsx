/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import ArtistItem from './ArtistItem';

const ArtistList = ({ releases }) => {
    return (
        <>
            <h2>{releases.artist}</h2>
            <ul>
                {releases.map((release) => (
                   <li key={release.title}>
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
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,

}

export default ArtistList;
