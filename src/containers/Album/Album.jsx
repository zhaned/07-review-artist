import React, { useState, useEffect } from 'react';
import AlbumList from '../../components/album/AlbumList';
import { useParams } from 'react-router-dom';
import { getSongs } from '../../services/artistApi';


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

  return (
    <main>
      <AlbumList release={release} artist={artist} album={album} />
    </main>
  );
};

export default Album;
