import React, { useEffect, useState } from 'react';
import LyricItem from '../../components/lyrics/LyricItem';
import { useParams } from 'react-router-dom';
import { getLyrics } from '../../services/artistApi';
import Spinner from '../../components/spinner/Spinner';

const Lyrics = () => {
  const [loading, setLoading] = useState(true);
  const [lyrics, setLyrics] = useState('');
  const { artist, release, song } = useParams();

  useEffect(() => {
    getLyrics(artist, song)
      .then(setLyrics)
      .finally(() => setLoading(false));
  });

  if(loading) return <Spinner />;

  return (
    <main>
      <LyricItem
        lyrics={lyrics}
        artist={artist}
        release={release}
        song={song}
      />
    </main>
  );
};

export default Lyrics;
