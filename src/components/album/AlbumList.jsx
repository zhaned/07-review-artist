import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from './AlbumItem';

const AlbumList = ({ release, artist, album }) => {
  return (
    <>
      <h2>{artist}</h2>
      <h2>{release}</h2>
      <ul aria-label="song-list">
        {album.map((song) => (
          <li key={song.id} aria-label="song-item">
            <AlbumItem song={song.song} artist={artist} release={release} />
          </li>
        ))}
      </ul>
    </>
  );
};

AlbumList.propTypes = {
  release: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  album: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      song: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AlbumList;
