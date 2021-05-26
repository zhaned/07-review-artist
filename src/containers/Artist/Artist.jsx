/* eslint-disable */
import React, {useState, useEffect } from 'react';
import ArtistList from '../../components/artist/ArtistList';
import { getReleases } from '../../services/artistApi'
import { useParams } from 'react-router-dom';

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

    return (
        <main>
            <ArtistList releases={releases}/>
        </main>
    )
}

export default Artist;
