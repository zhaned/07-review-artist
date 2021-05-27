import React, { useState, useEffect } from 'react';
import AlbumList from '../../components/album/AlbumList';
import { useParams } from 'react-router-dom';
import { getSongs } from '../../services/artistApi';
import Spinner from '../../components/spinner/Spinner';

const Album = () => {
  const [loading, setLoading] = useState(false);
  const [album, setAlbum] = useState([]);
  const { artist, release, id } = useParams();

  useEffect(() => {
    setLoading(true);
    getSongs(id, artist)
      .then(setAlbum)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner />

  return (
    <main>
      <AlbumList release={release} artist={artist} album={album} />
    </main>
  );
};

export default Album;
