import React from 'react';
import PropTypes from 'prop-types';
import style from './search.css'

const SearchControls = ({ query, onChange, onSubmit }) => {
  return (
    <form 
      className={style.searchbar}
      onSubmit={onSubmit}>
      <input
        type="text"
        aria-label="artist-search"
        onChange={onChange}
        placeholder="Search a musical artist"
        value={query}
      />
      <button aria-label="submit-button">Submit</button>
    </form>
  );
};

SearchControls.propTypes = {
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchControls;
