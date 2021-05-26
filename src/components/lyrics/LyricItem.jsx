import React from 'react';
import PropTypes from 'prop-types';

const LyricItem = ({ lyrics, artist, release, song }) => {
  return (
    <div>
      <h2>Artist: {artist}</h2>
      <h2>Release: {release}</h2>
      <h3>Song: {song}</h3>
      <p>{lyrics}</p>
    </div>
  );
};

LyricItem.propTypes = {
  lyrics: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  song: PropTypes.string.isRequired
};

export default LyricItem;
