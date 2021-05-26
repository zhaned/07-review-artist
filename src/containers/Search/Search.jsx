import React, { useState, useEffect } from 'react'
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
        setQuery(e.target.value)
    }

    const search = () => {
        setLoading(true);
        
        getArtists(query, offset)
        .then(setArtists)
        .finally(() => setLoading(false));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setOffset(0);
        
        console.log('submit', offset)
        search();
    }

    const handlePageChange = async (e) => {
        if (e.target.value === 'prev') {
            setOffset((offset) => offset -5)
            console.log('prev', offset)
            search()
        } else {
            setOffset((offset) => offset +5)
            console.log('next', offset)
            search()
        }
    }
    
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
    )
}


export default Search;
