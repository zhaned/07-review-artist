import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AlbumItem = ({ artist, release, song }) => {
  return (
    <Link to={`/${artist}/${release}/${song}/lyrics`}>
      <h4>{song}</h4>
    </Link>
  );
};

AlbumItem.propTypes = {
  artist: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  song: PropTypes.string.isRequired,
};

export default AlbumItem;
