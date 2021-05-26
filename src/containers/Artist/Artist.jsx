import React, { useState, useEffect } from 'react';
import ArtistList from '../../components/artist/ArtistList';
import { getReleases } from '../../services/artistApi';
import { useParams } from 'react-router-dom';
import PageControls from '../../components/pagination/PageControls';

const Artist = () => {
  const [loading, setLoading] = useState(false);
  const [releases, setReleases] = useState([]);
  const [offset, setOffset] = useState(0);
  const { artist, id } = useParams();

  useEffect(() => {
    setLoading(true);
    getReleases(id, artist, offset)
      .then(setReleases)
      .finally(() => setLoading(false));
  }, [offset]);

  const handlePageChange = async (e) => {
    setOffset((offset) => offset + Number(e.target.value));
  };

  return (
    <main>
      <PageControls
        offset={offset}
        onClickPrev={handlePageChange}
        onClickNext={handlePageChange}
      />
      <ArtistList releases={releases} artist={artist} />
    </main>
  );
};

export default Artist;
