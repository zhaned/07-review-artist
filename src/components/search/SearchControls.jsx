import React from 'react';
import PropTypes from 'prop-types';

const SearchControls = ({ query, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
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
