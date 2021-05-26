import React, { useState, useEffect } from 'react';
import PageControls from '../../components/pagination/PageControls';
import SearchControls from '../../components/search/SearchControls';
import SearchList from '../../components/search/SearchList';
import { getArtists } from '../../services/artistApi';

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [artists, setArtists] = useState([]);
  const [query, setQuery] = useState('');
  const [offset, setOffset] = useState(0);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    search();
  }, [offset]);

  const search = () => {
    setLoading(true);
        
    getArtists(query, offset)
      .then(setArtists)
      .finally(() => setLoading(false));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOffset(0);
    search();
  };

  const handlePageChange = async (e) => {
    setOffset((offset) => offset + Number(e.target.value));
  };
    
  return (
    <main>
      <SearchControls 
        query={query}
        onChange={handleChange}
        onSubmit={handleSubmit}/>
      <PageControls 
        offset={offset}
        onClickPrev={handlePageChange}
        onClickNext={handlePageChange}/>
      <SearchList artists={artists}/>
    </main>
  );
};


export default Search;
