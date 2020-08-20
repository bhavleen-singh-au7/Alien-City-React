import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2 '>
      <input
        className='pa3 rounded ba b--green bg-lightest-blue br3'
        type='search'
        placeholder='Search Here'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;